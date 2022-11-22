import { useEffect, useState, useRef } from "react";
import { StyledDropdown } from "./Dropdown.styled";

export const Dropdown = ({ from, options, state, values = null, handleClick }) => {

  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  useEffect(function collapseDropdown() {

    const element = ref.current;

    const closeMenu = (e) => {
      const node = e.target;
      if (element.contains(node)) return;
      setIsActive(false);
    };

    if (!element) return;
    ;[`click`, `touchstart`].forEach((type) => {
      document.addEventListener(type, closeMenu);

      return () => document.removeEventListener(type, closeMenu);
    });
  }, [setIsActive, ref]);


  return (
    <StyledDropdown ref={ref} from={from}>
      <span tabIndex="0" onClick={() => setIsActive(!isActive)}>{values ? values[state] : state}</span>
      {isActive && (
        <div>
          {options.map((option, i) => (
            <span tabIndex="0" onClick={() => {
              handleClick(option.stateValue);
              setIsActive(false);
            }}
              key={i}
            >
              {option.text}
            </span>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
};

