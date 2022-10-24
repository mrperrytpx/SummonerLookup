import { StyledServerButton } from "./ServerButton.styled";

export const ServerButton = ({ server, children, handleLabelClick, handleRadioClick, checkedRadioButton }) => {

  const isRadioChecked = (value) => checkedRadioButton === value;

  return (
    <StyledServerButton server={server} checkedRadioButton={checkedRadioButton}>
      <label onClick={handleLabelClick} htmlFor={server}>{children}</label>
      <input
        type="radio"
        onChange={handleRadioClick}
        checked={isRadioChecked(server)}
        id={server}
        value={server}
      />
    </StyledServerButton>
  );
};