import { StyledFormLabelInput } from "./FormLabelInput.styled";

export const FormLabelInput = ({ formName, register, label, type, placeholder, required }) => {
  return (
    <StyledFormLabelInput>
      <label>{label}</label>
      <input {...register(formName, { required })} type={type} placeholder={placeholder} />
    </StyledFormLabelInput>

  );
};
