import { useReactTable, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { queryClient } from "contexts/AppProviders";
import { useMemo } from "react";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const champions = queryClient.getQueryData(["champions"]);

    const winrate = (row) => `${Math.round((row.wins / row.totalMatches) * 100)}%`;
    const kda = (row) => `${((row.kills + row.assists) / row.deaths).toFixed(2)}`;

    // Rank, Champion, KDA, LP gain, avg cs, avg dmg, avg dmg taken, avg gold
    const defaultColumns = [
        columnHelper.accessor((_row, i) => `${i + 1}`, {
            cell: props => props.getValue(),
            header: "Rank"
        }),
        columnHelper.accessor(row => `${champions.get(`${row.championId}`)}`, {
            cell: props => props.getValue(),
            header: "Champion",

        }),
        columnHelper.accessor(row => `${winrate(row)}`, {
            cell: props => props.getValue(),
            header: "Winrate"
        }),
        columnHelper.accessor(row => `${kda(row)}`, {
            cell: props => props.getValue(),
            header: "KD/A"
        }),
        columnHelper.accessor(row => `${(row.cs / row.totalMatches).toFixed(1)}`, {
            cell: props => props.getValue(),
            header: "Avg CS"
        }),
        columnHelper.accessor(row => `${Math.round(row.damage / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Dmg"
        }),
        columnHelper.accessor(row => `${Math.round(row.damageTaken / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Dmg Taken"
        }),
        columnHelper.accessor(row => `${Math.round(row.gold / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Gold"
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