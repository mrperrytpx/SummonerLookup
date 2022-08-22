import { ReactComponent as TextLogoNoSquare } from "../../../assets/text_logo_no_square.svg";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { useForm } from "react-hook-form";
import { FormLabelInput } from "../../atoms/FormLabelInput/FormLabelInput";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { SignInUpForm } from "../../molecules/SignInUpForm/SignInUpForm";
import { useAuth } from "../../../hooks/useAuth";
import { StyledSignIn } from "./SignIn.styled";
import useScreenSize from "../../../hooks/useScreenSize";

export const SignIn = () => {

  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const { width } = useScreenSize();

  const onSubmit = (data) => signIn.mutate({ ...data });

  return (
    <StyledSignIn>
      <section>
        <div style={{ color: "white" }}>{width}</div>
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
          <button type="submit">SUBMIT TO MY DESIGN</button>
        </SignInUpForm>
      </section>
    </StyledSignIn>
  );
};
