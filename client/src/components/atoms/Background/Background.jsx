import { StyledBackground } from "./Background.styled";
import bg from "../../../assets/background.webm";

export const Background = ({ format }) => {
    switch (format) {
        case "video": {
            return (
                <StyledBackground>
                    <video autoPlay muted loop data-background>
                        <source type="video/webm" src={bg} />
                    </video>
                </StyledBackground>
            );
        }

        case "image": {
            return <StyledBackground format={format} />;
        }

        default: {
            return (
                <StyledBackground>
                    <video autoPlay muted loop data-background>
                        <source type="video/webm" src={bg} />
                    </video>
                </StyledBackground>
            );
        }
    }
};
