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
import { ErrorText } from "../../atoms/ErrorText/ErrorText";

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
            required={true}
            errors={errors?.email}
            pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          />
          {errors?.email?.message && <ErrorText>• {errors?.email?.message}</ErrorText>}
          <FormLabelInput
            formName="password"
            register={register}
            label="Password"
            type="password"
            placeholder="Type your password"
            required={true}
            errors={errors?.password}
          />
          {errors?.password?.message && <ErrorText>• {errors?.password?.message}</ErrorText>}
          <label style={{ placeSelf: "start" }} htmlFor="rememberMe">
            <input {...register("rememberMe", { required: false })} id="rememberMe" type="checkbox" /> Remember Me
          </label>
          <Button wide={true} type="submit" variant="quaternary">{signIn.isLoading ? "Signing in..." : "SIGN IN"}</Button>
        </SignInUpForm>
      </section>
    </SingleFormPage>
  );
};