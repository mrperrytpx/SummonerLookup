import { StyledHome } from "./Home.styled";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { CompactSearchSummoner } from "../../organisms/CompactSearchSummoner/CompactSearchSummoner";
import { SearchSummoner } from "../../organisms/SearchSummoner/SearchSummoner";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { Background } from "components/atoms/Background/Background";
import { FlexColCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LinkButton } from "components/atoms/LinkButton/LinkButton";
import { Span } from "components/atoms/Span/Span";

export const Home = () => {
    const { width } = useScreenSize();

    return (
        <StyledHome center={width >= 710 ? true : false}>
            <Background format={width >= 710 ? "video" : "image"} />
            {width < 710 && <div />}
            {width >= 710 ? <SearchSummoner /> : <CompactSearchSummoner />}
            {width < 710 && <SquareLogo width="200" fill="white" />}
            <FlexColCenter style={{ marginBottom: "2rem" }} gap="1rem">
                <Span align="center">Example Summoner:</Span>
                <LinkButton minwidth="120px" variant="secondary" to="/eun1/perryx">
                    Perryx
                </LinkButton>
            </FlexColCenter>
        </StyledHome>
    );
};
