import { useContext, useState, createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { queryClient } from "contexts/AppProviders";

const useGetFreshTokensQuery = (setAccessToken, shouldRefetch, setShouldRefetch) => {
    async function getFreshTokens() {
        const response = await fetch("https://slup-server-production.up.railway.app/api/auth/refresh_token", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        });

        if (response.status >= 500) throw new Error("Something went wrong...");

        const data = await response.json();

        if (data?.accessToken) {
            setAccessToken(data?.accessToken);
            queryClient.setQueryData(["accessToken"], data?.accessToken);
        }
        return data;
    }

    const { isLoading: tokenLoading } = useQuery(["accessToken"], getFreshTokens, {
        onSuccess: (data) => {
            if (data?.accessToken) {
                setAccessToken(data?.accessToken);
                setShouldRefetch(true);
            } else {
                setAccessToken(null);
                setShouldRefetch(false);
            }
        },
        onError: () => {
            setAccessToken(null);
        },
        enabled: !!shouldRefetch,
        refetchIntervalInBackground: true,
        refetchInterval: 1440000 // 24 minutes, 6 minutes less than the lifespan of the accessToken
    });

    return { tokenLoading };
};

const useSignInMutation = (setAccessToken, setShouldRefetch) => {
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
            } else if (response.status === 429) {
                const data = await response.json();
                throw new Error(data.message);
            } else {
                throw new Error("Something went wrong...");
            }
        };

        const data = await response.json();
        if (data.error) throw new Error(JSON.stringify(data.error, null, 2));
        if (data?.accessToken) {
            setAccessToken(data?.accessToken);
        }
        setShouldRefetch(data.rememberMe);
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

const useSignOutMutation = (setAccessToken, queryClient) => {
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
            setAccessToken(null);
            queryClient.setQueryData(["accessToken"], null);
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
    const [shouldRefetch, setShouldRefetch] = useState(true);
    const queryClient = useQueryClient();

    const { tokenLoading } = useGetFreshTokensQuery(setAccessToken, shouldRefetch, setShouldRefetch);
    const signIn = useSignInMutation(setAccessToken, setShouldRefetch);
    const signUp = useSignUpMutation();
    const signOut = useSignOutMutation(setAccessToken, queryClient);
    const deleteUser = useDeleteUserMutation();

    function clearToken() {
        setAccessToken(null);
        queryClient.setQueryData(["accessToken"], null);
    }

    function updateToken() {
        queryClient.invalidateQueries(["accessToken"]);
    }

    return {
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