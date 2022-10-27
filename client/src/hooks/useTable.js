import { useReactTable, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { useMemo } from "react";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const defaultColumns = [
        columnHelper.accessor("championId", {
            cell: props => props.getValue(),
            header: "Champion",

        }),
        columnHelper.accessor(row => `${row.wins} / ${row.totalMatches}%`, {
            cell: props => props.getValue(),
            header: "Winrate"
        }),
        {
            id: "winrate",
            accessorFn: row => `${row.wins} / ${row.totalMatches}%`,
            header: "Winrate"
        },
        columnHelper.accessor("damageTaken", {
            cell: info => info.getValue(),
            header: "Avg. Damage Taken"
        })
    ];

    const memoColumns = useMemo(() => defaultColumns, []);
    const memoData = useMemo(() => data, [data]);

    const instance = useReactTable({
        data: memoData,
        columns: memoColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return instance;
};