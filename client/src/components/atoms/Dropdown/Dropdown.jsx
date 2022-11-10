import { StyledDropdown } from "./Dropdown.styled";

export const Dropdown = ({ options, id, state, setState }) => {

  return (
    <StyledDropdown defaultValue={state} name={id} id={id} onChange={(e) => setState(e.target.value)}>
      {options.map((option, i) => (
        <option key={i} value={option.stateValue}>{option.text}</option>
      ))}
    </StyledDropdown>
  );
};
