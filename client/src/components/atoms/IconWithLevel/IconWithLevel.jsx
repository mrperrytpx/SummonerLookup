import { StyledIconWithLevel } from "./IconWithLevel.styled";

export const IconWithLevel = ({ src, level, width, alt }) => {

  return (
    <StyledIconWithLevel width={width}>
      <img
        src={src}
        alt={alt}
      />
      <span>{level}</span>
    </StyledIconWithLevel>
  );
};