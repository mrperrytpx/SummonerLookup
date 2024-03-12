import { StyledNotFound } from "./NotFound.styled";
import EnemyMissing from "../../../assets/enemy_missing.webp";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <StyledNotFound>
            <ImageContainer width="7rem" src={EnemyMissing} alt="Enemy missing ping" />
            <p>This page is missing.</p>
            <p>
                Go back to the <Link to="/">Home</Link> page.
            </p>
        </StyledNotFound>
    );
};
