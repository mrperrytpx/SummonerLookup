import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useProvideAuth = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    async function signIn(username, password) {
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
            setUser(decoded);
            navigate("/");
        }
    }

    async function signOut() {
        setUser(() => null);
    }

    return { user, signIn, signOut };
};

export default useProvideAuth;