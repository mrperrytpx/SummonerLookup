import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerChampionStats } from "./SummonerChampionStats.styled";
import { Container } from "components/atoms/Container/Container";
import { Dropdown } from "components/atoms/Dropdown/Dropdown";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { FlexRowSpaceBetween, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { Span } from "components/atoms/Span/Span";
import { StatsTable } from "components/molecules/StatsTable/StatsTable";
import { useGetSummonerRankedChampStatsQuery } from "hooks/useGetSummonerRankedChampStatsQuery";
import { IconButtonLink } from "components/atoms/IconButtonLink/IconButtonLink";

export const SummonerChampionStats = () => {
    const { server, summonerName } = useParams();
    const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);
    const [stats, setStats] = useState("combined");

    const handleClick = (value) => setStats(value);

    const options = [
        {
            stateValue: "solo",
            text: "Ranked Solo",
        },
        {
            stateValue: "flex",
            text: "Ranked Flex",
        },
        {
            stateValue: "combined",
            text: "Combined",
        },
    ];

    if (isLoading)
        return (
            <Container>
                <ErrorText size="1rem" center={true}>
                    Loading table...
                </ErrorText>
                <LoadingIndicator />
            </Container>
        );

    return (
        <StyledSummonerChampionStats>
            <FlexRowSpaceBetween>
                <Dropdown from={"left"} state={stats} handleClick={handleClick} options={options} />
                <FlexRowStart gap="0.5rem">
                    <Span width="auto" size="s">
                        Data pulled from
                    </Span>
                    <IconButtonLink server={server} summonerName={summonerName} icon="u.gg" />
                </FlexRowStart>
            </FlexRowSpaceBetween>
            <div className="border">
                {championRankedStatsData?.[stats] && <StatsTable data={championRankedStatsData?.[stats]} />}
            </div>
        </StyledSummonerChampionStats>
    );
};
