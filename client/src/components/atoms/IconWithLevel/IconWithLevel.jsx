import { StyledIconWithLevel } from "./IconWithLevel.styled";

export const IconWithLevel = ({ src, level, width, alt, border, radius }) => {

  return (
    <StyledIconWithLevel radius={radius} border={border} width={width}>
      <img
        src={src}
        alt={alt}
      />
      <span>{level}</span>
    </StyledIconWithLevel>
  );
};