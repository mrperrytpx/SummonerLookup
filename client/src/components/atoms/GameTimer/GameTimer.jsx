import { useEffect, useState } from "react";
import { Span } from "../Span/Span";
import { StyledGameTimer } from "./GameTimer.styled";

export const GameTimer = ({ gameStartTime }) => {
    const [timer, setTimer] = useState(new Date().getTime() - gameStartTime + 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((old) => old + 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [gameStartTime]);

    return (
        <StyledGameTimer>
            <Span>
                Game time: {Math.floor(timer / 1000 / 60)}m {Math.round(timer / 1000) % 60}s{" "}
            </Span>
        </StyledGameTimer>
    );
};
