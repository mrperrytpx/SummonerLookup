import { ReactComponent as TextLogoNoSquare } from "../../../assets/text_logo_no_square.svg";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { useForm } from "react-hook-form";
import { FormLabelInput } from "../../atoms/FormLabelInput/FormLabelInput";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { SignInUpForm } from "../../molecules/SignInUpForm/SignInUpForm";
import { useAuth } from "../../../hooks/useAuth";
import { StyledSignIn } from "./SignIn.styled";
import { Button } from "../../atoms/Button/Button";

export const SignIn = () => {

  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  const onSubmit = (data) => signIn.mutate({ ...data });

  return (
    <StyledSignIn>
      <section>
        <FormNav />
        <SignInUpForm onSubmit={handleSubmit(onSubmit)} >
          <SvgLink to="/">
            <TextLogoNoSquare fill="white" />
          </SvgLink>
          <FormLabelInput
            register={register}
            formName="email"
            label="Email"
            type="email"
            placeholder="Type your email"
            required
          />
          <FormLabelInput
            formName="password"
            register={register}
            label="Password"
            type="password"
            placeholder="Type your password"
            required
          />
          <Button wide={true} type="submit" variant="quaternary">SIGN IN</Button>
        </SignInUpForm>
      </section>
    </StyledSignIn>
  );
};
