import { StyledServerButton } from "./ServerButton.styled";

export const ServerButton = ({ server, children, handleLabelClick, handleRadioClick, checkedRadioButton }) => {

  const isRadioChecked = (value) => checkedRadioButton === value;

  const handleTabbing = (e) => {
    if (e.keyCode === 32) {
      handleRadioClick(server);
    }
  };

  return (
    <StyledServerButton server={server} checkedRadioButton={checkedRadioButton}>
      <label onKeyDown={handleTabbing} tabIndex="0" onClick={handleLabelClick} htmlFor={server}>{children}</label>
      <input
        type="radio"
        onChange={(e) => handleLabelClick(e.target.value)}
        checked={isRadioChecked(server)}
        id={server}
        value={server}
      />
    </StyledServerButton>
  );
};