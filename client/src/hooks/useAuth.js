import { useContext, useState } from "react";
import { createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useGetFreshTokensQuery = (setAccessToken, setUser) => {
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
            setUser(decoded);
        }
        console.log("Token: ", data?.accessToken);
        return data;
    }

    const { isLoading: tokenLoading } = useQuery(["accessToken"], getFreshTokens, {
        onSuccess: (data) => {
            if (data?.accessToken) {
                const decoded = jwt_decode(data?.accessToken);
                setUser(decoded);
                setAccessToken(data?.accessToken);
            } else {
                setUser(null);
                setAccessToken(null);
            }
        },
        onError: () => {
            setUser(null);
            setAccessToken(null);
        }
    });

    return { tokenLoading };
};

const useSignInMutation = (setAccessToken, setUser, navigate) => {
    const signIn = async ({ username, password }) => {
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

    return useMutation(signIn);
};

const useSignUpMutation = (navigate) => {
    const signUp = async ({ email, username, password }) => {
        const info = { email, username, password };
        console.log("REG INFO: ", info);
        const controller = new AbortController();
        const response = await fetch(`/api/auth/register`, {
            method: "POST",
            signal: controller.signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        });
        if (controller.signal.aborted) return;

        if (!response.ok) {
            throw new Error("Something went wrong...");
        } else {
            navigate("/signin");
        }
        return;
    };

    return useMutation(signUp);
};

const useSignOutMutation = (setAccessToken, setUser, navigate, queryClient) => {
    const signOut = async ({ accessToken }) => {
        const controller = new AbortController();
        const response = await fetch(`/api/auth/logout`, {
            method: "POST",
            signal: controller.signal,
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${accessToken}`
            },
        });
        if (controller.signal.aborted) return;

        if (!response.ok) {
            throw new Error("Something went wrong...");
        } else {
            setUser(null);
            setAccessToken(null);
            queryClient.setQueryData(["accessToken"], null);
            queryClient.setQueryData(["user"], null);
            navigate("/", { replace: true });
        }
        return;
    };

    return useMutation(signOut);
};

const useProvideAuth = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { tokenLoading } = useGetFreshTokensQuery(setAccessToken, setUser);
    const signIn = useSignInMutation(setAccessToken, setUser, navigate);
    const signUp = useSignUpMutation(navigate);
    const signOut = useSignOutMutation(setAccessToken, setUser, navigate, queryClient);

    function clearUser() {
        setUser(null);
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

    return { user, updateUser, clearUser, accessToken, updateToken, clearToken, signOut, signIn, signUp, tokenLoading };
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