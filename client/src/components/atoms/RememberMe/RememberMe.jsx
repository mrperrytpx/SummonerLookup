import { useState } from "react";
import { StyledRememberMe } from "./RememberMe.styled";

export const RememberMe = ({ label, htmlFor, register }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <StyledRememberMe htmlFor={htmlFor}>
            <input
                {...register("rememberMe", { required: false })}
                id={htmlFor}
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
            />
            <span>{label}</span>
        </StyledRememberMe>
    );
};
