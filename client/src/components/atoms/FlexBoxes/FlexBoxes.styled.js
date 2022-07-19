import styled from "styled-components";

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FlexRowCenter = styled(FlexRow)`
    align-items: center;
    justify-content: center;
`;

export const FlexRowStart = styled(FlexRow)`
    justify-content: flex-start;
    align-items: center;
`;

export const FlexRowEnd = styled(FlexRow)`
    justify-content: flex-end;
    align-items: center;
`;

export const FlexRowSpaceAround = styled(FlexRow)`
    justify-content: space-around;
    align-items: center;
`;

export const FlexRowSpaceBetween = styled(FlexRow)`
    justify-content: space-between;
    align-items: center;
`;
export const FlexRowSpaceEvenly = styled(FlexRow)`
    justify-content: space-evenly;
    align-items: center;
`;
// -----------------------------------------------------------------------

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexColCenter = styled(FlexCol)`
    align-items: center;
    justify-content: center;
`;

export const FlexColStart = styled(FlexCol)`
    justify-content: center;
    align-items: flex-start;
`;

export const FlexColEnd = styled(FlexCol)`
    justify-content: center;
    align-items: flex-end;
`;

export const FlexColSpaceAround = styled(FlexCol)`
    justify-content: center;
    align-items: space-around;
`;

export const FlexColSpaceBetween = styled(FlexCol)`
    justify-content: center;
    align-items: space-between;
`;
export const FlexColSpaceEvenly = styled(FlexCol)`
    justify-content: center;
    align-items: space-evenly;
`;