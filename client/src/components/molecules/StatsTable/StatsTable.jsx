import { flexRender } from "@tanstack/react-table";
import { useScreenSize } from "hooks/useScreenSize";
import { useTable } from "hooks/useTable";
import { StyledStatsTable } from "./StatsTable.styled";

export const StatsTable = ({ data }) => {

  const table = useTable(data);
  const { width } = useScreenSize();

  return (
    <>
      {table.getAllLeafColumns().map(column => {
        return (
          <div key={column.id} >
            <label>
              <input
                {...{
                  type: 'checkbox',
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{' '}
              {column.id}
            </label>
          </div>
        );
      })}
      <StyledStatsTable>

        <thead>
          {
            table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
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
    </>
  );
};
