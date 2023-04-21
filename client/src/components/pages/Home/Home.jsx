import { StyledHome } from "./Home.styled";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { CompactSearchSummoner } from "../../organisms/CompactSearchSummoner/CompactSearchSummoner";
import { SearchSummoner } from "../../organisms/SearchSummoner/SearchSummoner";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { Background } from "components/atoms/Background/Background";
import { FlexColCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const Home = () => {
  const { width } = useScreenSize();

  return (
    <StyledHome center={width >= 710 ? true : false}>
      {width >= 710 ? (
        <>
          <Background format="video" />
          <SearchSummoner />
        </>
      ) : (
        <>
          <Background format="image" />
          <FlexColCenter gap="1rem" style={{ width: "100%", marginTop: "1rem" }}>
            <CompactSearchSummoner />
            <SquareLogo fill="white" width="200" />
          </FlexColCenter>
        </>
      )}
    </StyledHome>
  );
};
