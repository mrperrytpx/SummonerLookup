import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { queryClient } from "contexts/AppProviders";
import { useMemo, useState } from "react";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { FlexColCenter, FlexRow, FlexRowCenter, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const [sorting, setSorting] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});

    const champions = queryClient.getQueryData(["champions"]);
    const version = queryClient.getQueryData(["version"]);

    // <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${champion.championId}`)}.png`} alt="" />

    const winrate = (row) => `${Math.round((row.wins / row.totalMatches) * 100)}%`;
    const kda = (row) => `${((row.kills + row.assists) / row.deaths).toFixed(2)}`;

    const kills = (row) => `${(row.kills / row.totalMatches).toFixed(1)}`;
    const deaths = (row) => `${(row.deaths / row.totalMatches).toFixed(1)}`;
    const assists = (row) => `${(row.assists / row.totalMatches).toFixed(1)}`;

    // Rank, Champion, KDA, LP gain, avg cs, avg dmg, avg dmg taken, avg gold
    const defaultColumns = useMemo(() => [
        columnHelper.accessor((_row, i) => `${i + 1}`, {
            cell: props => props.getValue(),
            header: "#",
            sortingFn: "alphanumeric",
        }),
        columnHelper.accessor(row => `${champions.get(`${row.championId}`)}`, {
            cell: (props) => (
                <FlexRowStart>
                    <ImageContainer
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${props.getValue()}.png`}
                        alt="champion"
                        max="40px"
                    />
                    <Span size="sm">&nbsp;&nbsp;{props.getValue()}</Span>
                </FlexRowStart>
            ),
            header: "Champion",
            id: "champion"
        }),
        columnHelper.accessor(row => row, {
            cell: (props) => (
                <FlexColCenter>
                    <Span size="m" align="center">{winrate(props.getValue())}</Span>
                    <Span size="s" align="center">{kills(props.getValue())}, {deaths(props.getValue())}, {assists(props.getValue())}</Span>
                </FlexColCenter>
            ),
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
            header: () => (
                <div>
                    <div>Max</div>
                    <div>Kills</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor("maxDeaths", {
            cell: props => props.getValue(),
            header: () => (
                <div>
                    <div>Max</div>
                    <div>Deaths</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${(row.cs / row.totalMatches).toFixed(1)}`, {
            cell: props => props.getValue(),
            header: () => (
                <div>
                    <div>Avg</div>
                    <div>CS</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_cs"
        }),
        columnHelper.accessor(row => `${Math.round(row.gold / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: () => (
                <div>
                    <div>Avg</div>
                    <div>Gold</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_gold"
        }),
        columnHelper.accessor(row => `${Math.round(row.damage / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: () => (
                <div>
                    <div>Avg Dmg</div>
                    <div>Dealt</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_dmg"
        }),
        columnHelper.accessor(row => `${Math.round(row.damageTaken / row.totalMatches)}`, {
            cell: props => props.getValue(),
            header: () => (
                <div>
                    <div>Avg Dmg</div>
                    <div>Taken</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avg_dmg_taken"
        }),
        columnHelper.accessor("doubleKills", {
            celL: props => props.getValue(),
            header: "Dbl",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
        }),
        columnHelper.accessor("tripleKills", {
            celL: props => props.getValue(),
            header: "Trp",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
        }),
        columnHelper.accessor("quadraKills", {
            celL: props => props.getValue(),
            header: "Qdr",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
        }),
        columnHelper.accessor("pentaKills", {
            celL: props => props.getValue(),
            header: "Pnt",
            sortingFn: "alphanumeric",
            sortDescFirst: true,
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