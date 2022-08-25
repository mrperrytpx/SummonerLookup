import { ReactComponent as TextLogoNoSquare } from "../../../assets/text_logo_no_square.svg";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { useForm } from "react-hook-form";
import { FormLabelInput } from "../../atoms/FormLabelInput/FormLabelInput";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { SignInUpForm } from "../../molecules/SignInUpForm/SignInUpForm";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../atoms/Button/Button";
import { SingleFormPage } from "../../templates/SingleFormPage/SingleFormPage";

export const SignUp = () => {

  const { register, handleSubmit } = useForm();
  const { signUp } = useAuth();

  const onSubmit = (data) => signUp.mutate({ ...data });

  return (
    <SingleFormPage>
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
          <FormLabelInput
            formName="repeatPassword"
            register={register}
            label="Repeat Password"
            type="password"
            placeholder="Repeat your password"
            required
          />
          <Button wide={true} type="submit" variant="quaternary">SIGN UP</Button>
        </SignInUpForm>
      </section>
    </SingleFormPage>
  );
};
