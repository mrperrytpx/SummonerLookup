import { StyledFormLabelInput } from "./FormLabelInput.styled";

export const FormLabelInput = ({ formName, register, label, type, placeholder, required }) => {
  return (
    <StyledFormLabelInput>
      <label htmlFor={label}>{label}</label>
      <input id={label} {...register(formName, { required })} type={type} placeholder={placeholder} />
    </StyledFormLabelInput>

  );
};
