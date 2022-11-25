import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ReactComponent as TextLogoNoSquare } from "../../../assets/text_logo_no_square.svg";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { Button } from "../../atoms/Button/Button";
import { ErrorText } from "../../atoms/ErrorText/ErrorText";
import { FormLabelInput } from "../../atoms/FormLabelInput/FormLabelInput";
import { FormNavLink } from "../../atoms/FormNavLink/FormNavLink";
import { RememberMe } from "../../atoms/RememberMe/RememberMe";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { SignInUpForm } from "../../molecules/SignInUpForm/SignInUpForm";
import { SingleFormPage } from "../../templates/SingleFormPage/SingleFormPage";
import { useAuth } from "../../../hooks/useAuth";

export const SignIn = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useAuth();
  const location = useLocation();

  const from = location.state?.from || "/";

  const onSubmit = async (data) => {
    await signIn.mutateAsync({ ...data });
    navigate(from, { replace: true });
  };

  return (
    <SingleFormPage>
      <section>
        <FormNav>
          <FormNavLink active={location.pathname === "/signin" ? 1 : 0} to="/signin">Sign In</FormNavLink>
          <FormNavLink active={location.pathname === "/signup" ? 1 : 0} to="/signup">Sign Up</FormNavLink>
        </FormNav>
        <SignInUpForm onSubmit={handleSubmit(onSubmit)} >
          <SvgLink to="/">
            <TextLogoNoSquare fill="white" />
          </SvgLink>
          <FormLabelInput
            register={register}
            autocomplete="email"
            formName="email"
            label="Email"
            type="email"
            placeholder="Type your email"
            required={true}
            errors={errors?.email}
            pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          />
          {errors?.email?.message && <ErrorText>• {errors?.email?.message}</ErrorText>}
          <FormLabelInput
            autocomplete="current-password"
            formName="password"
            register={register}
            label="Password"
            type="password"
            placeholder="Type your password"
            required={true}
            errors={errors?.password}
          />
          {errors?.password?.message && <ErrorText>• {errors?.password?.message}</ErrorText>}
          <RememberMe htmlFor="rememberMe" label="Remember me" register={register} />

          {signIn?.error && <ErrorText center={true}>{signIn?.error?.message}</ErrorText>}

          <Button width="100%" type="submit" variant="quaternary">
            {signIn.isLoading ? "Signing in..." : "SIGN IN"}
          </Button>
        </SignInUpForm>
      </section>
    </SingleFormPage>
  );
};