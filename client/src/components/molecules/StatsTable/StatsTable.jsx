import { flexRender } from "@tanstack/react-table";
import { useScreenSize } from "hooks/useScreenSize";
import { useTable } from "components/molecules/StatsTable/useTable";
import { useEffect } from "react";
import { StyledStatsTable } from "./StatsTable.styled";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { Container } from "components/atoms/Container/Container";

export const StatsTable = ({ data }) => {

  useEffect(() => console.log(data), [data]);

  const { width } = useScreenSize();
  const table = useTable(data);

  useEffect(function responiveTable() {
    //someone tell me a better way please I beg
    const breakOne = width > 1000;
    const breakTwo = width > 800;
    const breakThree = width > 600;
    const breakFour = width > 300;

    table.getColumn("pentaKills").toggleVisibility(breakOne);
    table.getColumn("quadraKills").toggleVisibility(breakOne);
    table.getColumn("tripleKills").toggleVisibility(breakOne);
    table.getColumn("doubleKills").toggleVisibility(breakOne);

    table.getColumn("avgDmg").toggleVisibility(breakTwo);
    table.getColumn("avgDmgTaken").toggleVisibility(breakTwo);
    table.getColumn("avgGold").toggleVisibility(breakTwo);

    table.getColumn("maxKills").toggleVisibility(breakThree);
    table.getColumn("maxDeaths").toggleVisibility(breakThree);

    table.getColumn("number").toggleVisibility(breakFour);
  }, [width, table]);

  return (
    <>
      {
        data.length
          ? <StyledStatsTable>
            <thead>
              {
                table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th data-sorted={header.column.getIsSorted()} key={header.id}>
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              onClick: header.column.getToggleSortingHandler()
                            }}
                          >
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
                <tr key={row.id}>
                  {
                    row.getVisibleCells().map((cell) => {
                      return (
                        <td data-sorted={cell.column.getIsSorted()} key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })
                  }
                </tr>
              ))}
            </tbody>

          </StyledStatsTable>

          : <Container>
            <ErrorText size="1rem" center={true}>No stats available.</ErrorText>
            <ErrorText size="clamp(1.2rem, 3vw, 3rem)" center={true}>(╯°□°）╯︵ ┻━┻</ErrorText>
          </Container>
      }
    </>
  );
};
