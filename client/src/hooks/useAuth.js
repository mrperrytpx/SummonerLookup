import jwt_decode from "jwt-decode";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => useContext(AuthContext);

export const useProvideAuth = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState("");

    const getFreshTokens = useCallback(async () => {
        console.log("Fetching tokens");
        const controller = new AbortController();
        const response = await fetch("/api/auth/refresh_token", {
            method: "POST",
            credentials: "include",
            signal: controller.signal
        });
        const { accessToken } = await response.json();
        console.log("Access token:", accessToken);
        setAccessToken(accessToken);
    }, [setAccessToken]);

    const signIn = async (username, password) => {
        const info = { username, password };
        const response = await fetch(`/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        });

        // if (300 < response.status < 500) {
        //   setError("Invalid username of password");
        // }

        const data = await response.json();
        const { accessToken } = data;
        if (accessToken) {
            const decoded = jwt_decode(accessToken);
            setAccessToken(accessToken);
            setUser(decoded);
            navigate("/");
        }
    };

    async function signOut() {
        setUser(() => null);
    }

    return { user, signIn, signOut, getFreshTokens, accessToken };
};