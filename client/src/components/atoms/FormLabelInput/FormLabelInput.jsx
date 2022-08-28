import { StyledFormLabelInput } from "./FormLabelInput.styled";

export const FormLabelInput = ({ formName, register, label, type = "text", placeholder = "", errors = null, required = false, minLength = 0, pattern = null }) => {
  return (
    <StyledFormLabelInput errors={errors}>
      <label htmlFor={label}>{label}</label>
      <input id={label}

        {...register(formName,
          {
            required: {
              value: required,
              message: "This field is required"
            },
            pattern: {
              value: pattern,
              message: "Enter a valid email"
            },
            minLength: {
              value: minLength,
              message: `Passwords needs to be at least ${minLength} characters long`
            }
          })}

        type={type}
        placeholder={placeholder}
      />
    </StyledFormLabelInput>
  );
};
