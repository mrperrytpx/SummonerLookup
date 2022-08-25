import { ReactComponent as TextLogoNoSquare } from "../../../assets/text_logo_no_square.svg";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { useForm } from "react-hook-form";
import { FormLabelInput } from "../../atoms/FormLabelInput/FormLabelInput";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { SignInUpForm } from "../../molecules/SignInUpForm/SignInUpForm";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../atoms/Button/Button";
import { SingleFormPage } from "../../templates/SingleFormPage/SingleFormPage";
import { useLocation, useNavigate } from "react-router-dom";

export const SignIn = () => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    await signIn.mutateAsync({ ...data });
    navigate(from, { replace: true });
  };

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
          <Button wide={true} type="submit" variant="quaternary">SIGN IN</Button>
        </SignInUpForm>
      </section>
    </SingleFormPage>
  );
};
