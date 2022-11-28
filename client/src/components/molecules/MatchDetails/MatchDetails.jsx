import { useEffect, useMemo } from "react";
import { flexRender } from "@tanstack/react-table";
import { useParams } from "react-router-dom";
import { StyledMatchDetails } from "./MatchDetails.styled";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { useScreenSize } from "hooks/useScreenSize";
import { GameBans } from "../GameBans/GameBans";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useTable } from "./useTable";
import { theme } from "misc/theme";
import { useGetSummonerSingleMatchQuery } from "hooks/useGetSummonerSingleMatchQuery";
import { Container } from "components/atoms/Container/Container";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const MatchDetails = ({ matchId }) => {

  const { width } = useScreenSize();
  const { server, summonerName } = useParams();
  const { data: matchData, isLoading } = useGetSummonerSingleMatchQuery(matchId);
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);

  const blueTeam = useMemo(() => matchData?.info.participants.slice(0, 5), [matchData]);
  const redTeam = useMemo(() => matchData?.info.participants.slice(5), [matchData]);

  const blueTable = useTable(blueTeam);
  const redTable = useTable(redTeam);

  const teams = useMemo(() => [blueTeam, redTeam], [blueTeam, redTeam]);
  const tables = useMemo(() => [blueTable, redTable], [blueTable, redTable]);

  useEffect(function responiveTable() {
    const breakOne = width > 550;
    const breakTwo = width > 425;
    const breakThree = width > 335;

    tables[0].getColumn("dmg_done").toggleVisibility(breakOne);
    tables[1].getColumn("dmg_done").toggleVisibility(breakOne);
    tables[0].getColumn("gold").toggleVisibility(breakTwo);
    tables[1].getColumn("gold").toggleVisibility(breakTwo);
    tables[0].getColumn("cs").toggleVisibility(breakThree);
    tables[1].getColumn("cs").toggleVisibility(breakThree);
  }, [width, tables]);

  if (isLoading) return (
    <Container>
      <LoadingIndicator center={true} />
    </Container>
  );

  return (
    <FlexCol style={{
      marginBottom: "1.5rem",
      borderBottom: `10px solid ${theme.backgroundColors.tertiary}`,
      borderTop: `10px solid ${theme.backgroundColors.tertiary}`,
      borderRadius: "10px"
    }}>
      {tables.map((table, i) => (
        <FlexCol key={i}>
          {matchData?.info.teams[i].bans.length
            ? <GameBans
              shouldMobileAlign={true}
              size="30px"
              align="left"
              isWinner={teams[i][0].win}
              bans={matchData?.info.teams[i].bans}
            >
              BANS:
            </GameBans>
            : null
          }
          <StyledMatchDetails isWinner={teams[i][0].win}>
            <thead>
              {
                table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                ))
              }
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr data-profile={row.original.summonerName === summonerData.summonerName} key={row.id}>
                  {
                    row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })
                  }
                </tr>
              ))}
            </tbody>
          </StyledMatchDetails>
        </FlexCol>
      ))
      }
    </FlexCol >
  );
};
