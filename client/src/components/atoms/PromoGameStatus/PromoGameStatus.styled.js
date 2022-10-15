import styled from "styled-components";

const promoBackground = (theme, promo) => {
    switch (promo) {
        case "N": {
            return theme.backgroundColors.quaternary;
        }
        case "W": {
            return theme.matchResult.winPromo;
        }
        case "L": {
            return theme.matchResult.lossPromo;
        }
        default: {
            return theme.backgroundColors.quaternary;
        }
    }
};

export const StyledPromoGameStatus = styled.div`
    font-size: 0.6rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme, promo }) => promoBackground(theme, promo)};
`;

