import { ReactComponent as TextLogoNoSquare } from "../../../assets/text_logo_no_square.svg";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { useForm } from "react-hook-form";
import { FormLabelInput } from "../../atoms/FormLabelInput/FormLabelInput";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { SignInUpForm } from "../../molecules/SignInUpForm/SignInUpForm";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../atoms/Button/Button";
import { SingleFormPage } from "../../templates/SingleFormPage/SingleFormPage";
import { useNavigate } from "react-router-dom";
import { ErrorText } from "../../atoms/ErrorText/ErrorText";

export const SignUp = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp } = useAuth();

  const onSubmit = async (data) => {
    await signUp.mutateAsync({ ...data });
    navigate("/signin");
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
            errors={errors?.email}
            required={true}
            pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          />
          {errors?.email?.message && <ErrorText>• {errors?.email?.message}</ErrorText>}
          <FormLabelInput
            formName="password"
            register={register}
            label="Password"
            type="password"
            placeholder="Type your password"
            errors={errors?.password}
            required={true}
            minLength={8}
          />
          {errors?.password?.message && <ErrorText>• {errors?.password?.message}</ErrorText>}
          <FormLabelInput
            formName="repeatPassword"
            register={register}
            label="Repeat Password"
            type="password"
            placeholder="Repeat your password"
            required={true}
          />
          {signUp?.error && <ErrorText center={true}>{signUp?.error?.message}</ErrorText>}
          <Button wide={true} type="submit" variant="quaternary">
            {signUp.isLoading ? "Signing up..." : "SIGN UP"}
          </Button>
        </SignInUpForm>
      </section>
    </SingleFormPage>
  );
};
