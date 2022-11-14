import { useState } from "react";
import { StyledDropdown } from "./Dropdown.styled";

export const Dropdown = ({ from, options, state, setState, ...rest }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = (value) => {
    setState(value);
    setIsActive(false);
  };

  return (
    <StyledDropdown {...rest} from={from}>
      <span onClick={() => setIsActive(!isActive)}>{state}</span>
      {isActive && (
        <div>
          {options.map((option, i) => (
            <span onClick={() => handleClick(option.stateValue)} key={i}>{option.text}</span>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
};

