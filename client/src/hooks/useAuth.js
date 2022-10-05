import { useContext, useState } from "react";
import { createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import jwt_decode from "jwt-decode";

const useGetFreshTokensQuery = (setAccessToken, setUser) => {
    async function getFreshTokens() {
        console.log("Trying for token...");
        const response = await fetch("/api/auth/refresh_token", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        });

        if (response.status >= 500) throw new Error("Something went wrong...");

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
            console.log("Fetched new token");
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
        },
        refetchIntervalInBackground: true,
        refetchInterval: 1440000 // 24 minutes, 6 minutes less than the lifespan of the accessToken
    });

    return { tokenLoading };
};

const useSignInMutation = (setAccessToken, setUser) => {
    const signIn = async ({ email, password, rememberMe }) => {
        const info = { email, password, rememberMe };
        const response = await fetch(`/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        });

        if (!response.ok) {
            if (response.status === 400) {
                throw new Error("Wrong username or password");
            } else {
                throw new Error("Something went wrong...");
            }
        }

        const data = await response.json();
        if (data.error) throw new Error(JSON.stringify(data.error, null, 2));
        if (data?.accessToken) {
            const decoded = jwt_decode(data?.accessToken);
            setUser(decoded);
            setAccessToken(data?.accessToken);
        }
    };

    return useMutation(signIn);
};

const useSignUpMutation = () => {
    const signUp = async ({ email, password }) => {
        const info = { email, password };
        const response = await fetch(`/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error("User already exists");
            } else {
                throw new Error("Something went wrong. Try reloading the page");
            }
        }

        return;
    };

    return useMutation(signUp);
};

const useSignOutMutation = (setAccessToken, setUser, queryClient) => {
    const signOut = async ({ accessToken }) => {
        const response = await fetch(`/api/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${accessToken}`
            },
        });

        if (!response.ok) {
            throw new Error("Something went wrong...");
        } else {
            setUser(null);
            setAccessToken(null);
            queryClient.setQueryData(["accessToken"], null);
            queryClient.setQueryData(["user"], null);
        }
        return;
    };

    return useMutation(signOut);
};

const useDeleteUserMutation = () => {
    const deleteUser = async ({ accessToken }) => {
        const response = await fetch("/api/user/delete_account", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                credentials: "include",
                authorization: `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return;
    };

    return useMutation(deleteUser);
};

const useProvideAuth = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const queryClient = useQueryClient();

    const { tokenLoading } = useGetFreshTokensQuery(setAccessToken, setUser);
    const signIn = useSignInMutation(setAccessToken, setUser);
    const signUp = useSignUpMutation();
    const signOut = useSignOutMutation(setAccessToken, setUser, queryClient);
    const deleteUser = useDeleteUserMutation();

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

    return {
        user,
        updateUser,
        clearUser,
        deleteUser,
        accessToken,
        updateToken,
        clearToken,
        signOut,
        signIn,
        signUp,
        tokenLoading
    };
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