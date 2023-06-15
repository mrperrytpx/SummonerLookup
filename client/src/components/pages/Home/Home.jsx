import { StyledHome } from "./Home.styled";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { CompactSearchSummoner } from "../../organisms/CompactSearchSummoner/CompactSearchSummoner";
import { SearchSummoner } from "../../organisms/SearchSummoner/SearchSummoner";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { Background } from "components/atoms/Background/Background";
import {
  FlexColCenter,
  FlexRowSpaceBetween,
  FlexCol,
} from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LinkButton } from "components/atoms/LinkButton/LinkButton";
import { Span } from "components/atoms/Span/Span";

export const Home = () => {
  const { width } = useScreenSize();

  return (
    <StyledHome center={width >= 710 ? true : false}>
      {width >= 710 ? (
        <>
          <Background format="video" />
          <SearchSummoner />
          <FlexColCenter gap="1rem">
            <Span align="center">Example Summoner:</Span>
            <FlexRowSpaceBetween flow="wrap" gap="1rem">
              <LinkButton
                minwidth="120px"
                variant="secondary"
                to="/eun1/perryx"
              >
                Perryx
              </LinkButton>
            </FlexRowSpaceBetween>
          </FlexColCenter>
        </>
      ) : (
        <>
          <Background format="image" />
          <FlexColCenter
            gap="1rem"
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <CompactSearchSummoner />
            <SquareLogo fill="white" width="200" />
            <FlexCol gap="1rem">
              <Span align="center">Example Summoner:</Span>
              <LinkButton
                minwidth="120px"
                variant="secondary"
                to="/eun1/perryx"
              >
                Perryx
              </LinkButton>
            </FlexCol>
          </FlexColCenter>
        </>
      )}
    </StyledHome>
  );
};
