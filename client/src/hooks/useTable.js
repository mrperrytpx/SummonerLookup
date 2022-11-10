import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { queryClient } from "contexts/AppProviders";
import { useMemo, useState } from "react";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const [sorting, setSorting] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});

    const champions = queryClient.getQueryData(["champions"]);

    const winrate = (row) => `${Math.round((row.wins / row.totalMatches) * 100)}%`;
    const kda = (row) => `${((row.kills + row.assists) / row.deaths).toFixed(2)}`;

    // Rank, Champion, KDA, LP gain, avg cs, avg dmg, avg dmg taken, avg gold
    const defaultColumns = useMemo(() => [
        columnHelper.accessor((_row, i) => `${i + 1}`, {
            cell: props => props.getValue(),
            header: "#",
            sortingFn: "alphanumeric",
        }),
        columnHelper.accessor(row => `${champions.get(`${row.championId}`)}`, {
            cell: props => props.getValue(),
            header: "Champion",
            id: "champion"
        }),
        columnHelper.accessor(row => `${winrate(row)}`, {
            cell: props => props.getValue(),
            header: "Winrate",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "winrate"
        }),
        columnHelper.accessor(row => `${kda(row)}`, {
            cell: props => props.getValue(),
            header: "KD/A",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "kda"
        }),
        columnHelper.accessor("maxKills", {
            cell: props => props.getValue(),
            header: "Max Kills",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor("maxDeaths", {
            cell: props => props.getValue(),
            header: "Max Deaths",
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${(row.cs / row.totalMatches).toFixed(1)}`, {
            cell: props => props.getValue(),
            header: "Avg CS",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_cs"
        }),
        columnHelper.accessor(row => `${Math.round(row.damage / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Dmg",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_dmg"
        }),
        columnHelper.accessor(row => `${Math.round(row.damageTaken / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Dmg Taken",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_dmg_taken"
        }),
        columnHelper.accessor(row => `${Math.round(row.gold / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: "Avg Gold",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_gold"
        }),
    ], [champions]);

    const memoData = useMemo(() => data, [data]);

    const instance = useReactTable({
        data: memoData,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnVisibility
        },
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
    });

    return instance;
};