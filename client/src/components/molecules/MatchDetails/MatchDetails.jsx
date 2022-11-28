import { useEffect } from "react";
import { flexRender } from "@tanstack/react-table";
import { useParams } from "react-router-dom";
import { StyledMatchDetails } from "./MatchDetails.styled";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { useScreenSize } from "hooks/useScreenSize";
import { GameBans } from "../GameBans/GameBans";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useTable } from "./useTable";

export const MatchDetails = ({ team, bans }) => {

  const { width } = useScreenSize();
  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);

  const table = useTable(team);

  useEffect(function responiveTable() {
    const breakOne = width > 550;
    const breakTwo = width > 425;
    const breakThree = width > 335;

    table.getColumn("dmg_done").toggleVisibility(breakOne);
    table.getColumn("gold").toggleVisibility(breakTwo);
    table.getColumn("cs").toggleVisibility(breakThree);
  }, [width, table]);

  return (
    <FlexCol>
      <FlexCol>
        {bans.length
          ? <GameBans
            shouldMobileAlign={true}
            size="30px"
            align="left"
            isWinner={team[0].win}
            bans={bans}
          >
            BANS:
          </GameBans>
          : null
        }
        <StyledMatchDetails isWinner={team[0].win}>
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

    </FlexCol >
  );
};
