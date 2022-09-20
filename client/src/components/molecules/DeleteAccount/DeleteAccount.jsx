import { useAuth } from "../../../hooks/useAuth";
import { StyledDeleteAccount } from "./DeleteAccounts.styled";

export const DeleteAccount = () => {
  const { deleteUser, clearUser, clearToken, accessToken } = useAuth();

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteUser.mutateAsync({ accessToken });
    clearUser();
    clearToken();
  };

  return (
    <StyledDeleteAccount>
      <p>Type "delete" if you wish to delete Your account</p>
      <form onSubmit={(e) => handleDelete(e)}>
        <input type="text" placeholder="type 'delete'..." />
        <button type="submit">DELETE</button>
      </form>
    </StyledDeleteAccount>
  );
};
