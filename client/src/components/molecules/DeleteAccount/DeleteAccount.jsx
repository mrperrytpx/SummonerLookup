import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDeleteAccount } from "./DeleteAccounts.styled";
import { GenericInput } from "../../atoms/GenericInput/GenericInput";
import { Button } from "../../atoms/Button/Button";
import { useAuth } from "../../../hooks/useAuth";

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
      <p>Type <code>delete</code> if you wish to delete Your account</p>
      <form onSubmit={(e) => handleDelete(e)}>
        <GenericInput placeholder="type 'delete'" input={input} setInput={setInput} />
        <Button disabled={disableButton} type="submit" variant="danger">DELETE</Button>
      </form>
    </StyledDeleteAccount>
  );
};
