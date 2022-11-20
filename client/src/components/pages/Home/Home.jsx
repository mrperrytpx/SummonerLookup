import { Footer } from "../../organisms/Footer/Footer";
import { SearchSummoner } from "../../organisms/SearchSummoner/SearchSummoner";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { CompactSearchSummoner } from "../../organisms/CompactSearchSummoner/CompactSearchSummoner";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { StyledHome } from "./Home.styled";

export const Home = () => {

  const { width } = useScreenSize();

  return (
    <>
      <StyledHome center={width >= 710 ? true : false}>
        {width >= 710
          ? <SearchSummoner />
          : <>
            <SquareLogo fill="white" width="200" />
            <CompactSearchSummoner />
          </>
        }
      </StyledHome>
      {width >= 750 ? <Footer /> : null}

    </>
  );
};