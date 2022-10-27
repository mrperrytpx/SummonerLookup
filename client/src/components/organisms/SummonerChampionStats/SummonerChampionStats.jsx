import { useGetSummonerRankedChampStatsQuery } from "hooks/useGetSummonerRankedChampStatsQuery";
import { useTable } from "hooks/useTable";
import { useParams } from "react-router-dom";
import { StyledSummonerChampionStats } from "./SummonerChampionStats.styled";
import { flexRender } from "@tanstack/react-table";
import { Span } from "components/atoms/Span/Span";

export const SummonerChampionStats = () => {

  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);
  const combinedTable = useTable(championRankedStatsData?.combined);

  if (isLoading) return <Span size="xl">Loading...</Span>;

  return (
    <StyledSummonerChampionStats>
      {championRankedStatsData &&
        <>
          <thead>
            {
              combinedTable.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      }
                    </th>
                  ))}
                </tr>
              ))
            }
          </thead>

          <tbody>
            {combinedTable.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {
                  row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))
                }
              </tr>
            ))}
          </tbody>
        </>
      }
    </StyledSummonerChampionStats>
  );
};
