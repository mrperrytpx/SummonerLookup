import { flexRender } from "@tanstack/react-table";
import { useTable } from "hooks/useTable";
import { StyledStatsTable } from "./StatsTable.styled";

export const StatsTable = ({ data }) => {

  const table = useTable(data);

  return (
    <StyledStatsTable>
      <thead>
        {
          table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())
                  }
                </th>
              ))}
            </tr>
          ))
        }
      </thead>

      <tbody>
        {table.getRowModel().rows.map(row => (
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
    </StyledStatsTable>
  );
};
