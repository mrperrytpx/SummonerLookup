import { useState, useEffect } from "react";

export const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => setTimeout(() => setWidth(window.innerWidth), 250);

    return { width, setWidth };
};