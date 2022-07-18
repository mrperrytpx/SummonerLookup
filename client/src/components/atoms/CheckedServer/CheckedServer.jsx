import { StyledCheckedServer } from "./CheckedServer.styled";
import PropTypes from "prop-types";

export const CheckedServer = ({ server, children, handleLabelClick, handleRadioClick, checkedRadioButton }) => {

  const isRadioChecked = (value) => checkedRadioButton === value;

  return (
    <StyledCheckedServer server={server} checkedRadioButton={checkedRadioButton}>
      <label onClick={handleLabelClick} htmlFor={server}>{children}</label>
      <input type="radio" onChange={handleRadioClick} checked={isRadioChecked(server)} id={server} value={server} />
    </StyledCheckedServer>
  );
};

CheckedServer.propTypes = {
  server: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleLabelClick: PropTypes.func.isRequired,
  handleRadioClick: PropTypes.func.isRequired,
  checkedRadioButton: PropTypes.string.isRequired
};