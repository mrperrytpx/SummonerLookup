import styled from "styled-components";

export const FlexRow = styled.div`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    display: flex;
    flex-direction: row;
`;

export const FlexRowCenter = styled(FlexRow)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    align-items: center;
    justify-content: center;
`;

export const FlexRowStart = styled(FlexRow)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: flex-start;
    align-items: center;
`;

export const FlexRowEnd = styled(FlexRow)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: flex-end;
    align-items: center;
`;

export const FlexRowSpaceAround = styled(FlexRow)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: space-around;
    align-items: center;
`;

export const FlexRowSpaceBetween = styled(FlexRow)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: space-between;
    align-items: center;
`;
export const FlexRowSpaceEvenly = styled(FlexRow)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: space-evenly;
    align-items: center;
`;
// -----------------------------------------------------------------------

export const FlexCol = styled.div`
    flex: ${({ flex }) => flex};
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap};
`;

export const FlexColCenter = styled(FlexCol)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    align-items: center;
    justify-content: center;
`;

export const FlexColStart = styled(FlexCol)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: flex-start;
    align-items: center;
`;

export const FlexColEnd = styled(FlexCol)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: flex-end;
    align-items: center;
`;

export const FlexColSpaceAround = styled(FlexCol)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: space-around;
    align-items: center;
`;

export const FlexColSpaceBetween = styled(FlexCol)`
    flex: ${({ flex }) => flex};    gap: ${({ gap }) => gap};
    justify-content: space-between;
    align-items: center;
`;
export const FlexColSpaceEvenly = styled(FlexCol)`
    flex: ${({ flex }) => flex};
    gap: ${({ gap }) => gap};
    justify-content: space-evenly;
    align-items: center;
`;