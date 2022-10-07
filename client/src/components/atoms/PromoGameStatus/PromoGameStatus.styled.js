import styled from "styled-components";

const promoBackground = (theme, promo) => {
    switch (promo) {
        case "N": {
            return theme.backgroundColors.quaternary;
        }
        case "W": {
            return theme.backgroundColors.win;
        }
        case "L": {
            return theme.backgroundColors.loss;
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
    box-shadow: 0px 1px 4px rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    background-color: ${({ theme, promo }) => promoBackground(theme, promo)};
`;

