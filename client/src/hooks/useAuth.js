import { useContext, useState } from "react";
import { createContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    async function getFreshTokens() {
        console.log("Trying for token...");
        const controller = new AbortController();
        const response = await fetch("/api/auth/refresh_token", {
            method: "POST",
            credentials: "include",
            signal: controller.signal,
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status >= 500) throw new Error("Something went wrong...");

        if (controller.signal.aborted) return;

        const data = await response.json();
        if (data?.accessToken) {
            const decoded = jwt_decode(data?.accessToken);
            setAccessToken(data?.accessToken);
        }
        console.log("Token: ", data?.accessToken);
        return data;
    }

    const { isLoading: tokenLoading } = useQuery(["accessToken"], getFreshTokens, {
        onSuccess: (data) => {
            const decoded = jwt_decode(data?.accessToken);
            setUser(decoded);
            setAccessToken(data?.accessToken);
        },
        onError: () => {
            setUser(null);
            setAccessToken(null);
        }
    });
    function signUp() { }

    function clearUser() {
        setUser(() => null);
        queryClient.setQueryData(["user"], null);
    }

    function updateUser() {
        queryClient.invalidateQueries(["user"]);
    };

    function clearToken() {
        setAccessToken(null);
        queryClient.setQueryData(["accessToken"], null);
    }

    function updateToken() {
        queryClient.invalidateQueries(["accessToken"]);
    }

    function signOut() {
        setUser(null);
        setAccessToken(null);
        queryClient.setQueryData(["accessToken"], null);
    }

    const signIn = async (username, password) => {
        const info = { username, password };
        const controller = new AbortController();
        const response = await fetch(`/api/auth/login`, {
            method: "POST",
            signal: controller.signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        });

        if (!response.ok) {
            setUser(null);
            setAccessToken(null);
            throw new Error("Something went wrong...");
        }

        if (controller.signal.aborted) return;

        const data = await response.json();
        if (data?.accessToken) {
            const decoded = jwt_decode(data?.accessToken);
            setUser(decoded);
            setAccessToken(data?.accessToken);
            navigate("/");
        } else {
            throw new Error("Wrong email or password");
        }
    };

    return { user, updateUser, clearUser, accessToken, updateToken, clearToken, signIn, signOut, signUp, tokenLoading };
};


//##################### CONTEXT
const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);