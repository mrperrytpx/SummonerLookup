import { StyledFormLabelInput } from "./FormLabelInput.styled";

export const FormLabelInput = ({ formName, register, label, type = "text", placeholder = "", errors = null }) => {
  return (
    <StyledFormLabelInput errors={errors}>
      <label htmlFor={label}>{label}</label>
      <input id={label}
        {...register(formName)}
        type={type}
        placeholder={placeholder}
      />
    </StyledFormLabelInput>
  );
};
