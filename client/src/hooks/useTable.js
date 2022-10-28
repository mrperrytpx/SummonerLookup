import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { queryClient } from "contexts/AppProviders";
import { useMemo, useState } from "react";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const champions = queryClient.getQueryData(["champions"]);

    const [sorting, setSorting] = useState();

    const winrate = (row) => `${Math.round((row.wins / row.totalMatches) * 100)}%`;
    const kda = (row) => `${((row.kills + row.assists) / row.deaths).toFixed(2)}`;

    // Rank, Champion, KDA, LP gain, avg cs, avg dmg, avg dmg taken, avg gold
    const defaultColumns = [
        columnHelper.accessor((_row, i) => `${i + 1}`, {
            cell: props => props.getValue(),
            header: "Rank",
            sortingFn: "alphanumeric",
        }),
        columnHelper.accessor(row => `${champions.get(`${row.championId}`)}`, {
            cell: props => props.getValue(),
            header: "Champion",
        }),
        columnHelper.accessor(row => `${winrate(row)}`, {
            cell: props => props.getValue(),
            header: "Winrate",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${kda(row)}`, {
            cell: props => props.getValue(),
            header: "KD/A",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${(row.cs / row.totalMatches).toFixed(1)}`, {
            cell: props => props.getValue(),
            header: "Avg CS",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${Math.round(row.damage / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Dmg",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${Math.round(row.damageTaken / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Dmg Taken",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${Math.round(row.gold / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Gold",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
    ];

    const memoColumns = useMemo(() => defaultColumns, []);
    const memoData = useMemo(() => data, [data]);

    const instance = useReactTable({
        data: memoData,
        columns: memoColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        debugTable: true,
    });

    return instance;
};