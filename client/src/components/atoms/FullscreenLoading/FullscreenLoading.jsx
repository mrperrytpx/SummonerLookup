import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { StyledFullscreenLoading } from "./FullscreenLoading.styled";

export const FullscreenLoading = () => {

  return (
    <StyledFullscreenLoading>
      <SquareLogo fill="white" width="200" />
    </StyledFullscreenLoading>
  );
};
