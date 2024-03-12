import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDeleteAccount } from "./DeleteAccounts.styled";
import { Button } from "../../atoms/Button/Button";
import { useAuth } from "../../../hooks/useAuth";
import { InputField } from "components/atoms/InputField/InputField";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const DeleteAccount = () => {
    const { deleteUser, clearToken, accessToken } = useAuth();
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteUser.mutateAsync({ accessToken });
        clearToken();
        navigate("/");
    };

    const disableButton = input.toLowerCase() !== "delete";

    return (
        <StyledDeleteAccount>
            <p>
                Type <code>delete</code> if you wish to delete Your account
            </p>
            <form onSubmit={(e) => handleDelete(e)}>
                <InputField fontSize="1rem" placeholder="type 'delete'" state={input} setState={setInput} />
                <Button minwidth="100px" disabled={disableButton} type="submit" variant="danger">
                    {deleteUser.isLoading ? <LoadingIndicator variant="white" size="28px" /> : "DELETE"}
                </Button>
            </form>
        </StyledDeleteAccount>
    );
};
