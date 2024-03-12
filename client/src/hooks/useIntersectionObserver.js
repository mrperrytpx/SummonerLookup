import { useEffect, useState } from "react";

export const useIntersectionObserver = (ref, options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const current = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(current);

        return () => {
            observer.unobserve(current);
        };
    }, [ref, options]);

    return isIntersecting;
};
