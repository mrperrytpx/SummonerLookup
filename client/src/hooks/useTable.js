import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { queryClient } from "contexts/AppProviders";
import { useMemo, useState } from "react";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { FlexColCenter, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const [sorting, setSorting] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});

    const champions = queryClient.getQueryData(["champions"]);
    const version = queryClient.getQueryData(["version"]);

    const winrate = (row) => Math.round((row.wins / row.totalMatches) * 100);
    const kda = (row) => Math.round(((row.kills + row.assists) / row.deaths) * 100) / 100;

    const stat = (field, total) => `${Math.round((field / total) * 10) / 10}`;

    // Rank, Champion, KDA, LP gain, avg cs, avg dmg, avg dmg taken, avg gold
    const defaultColumns = useMemo(() => [
        columnHelper.accessor((_row, i) => i + 1, {
            cell: props => props.getValue(),
            header: "#",
            sortingFn: "alphanumeric",
        }),
        columnHelper.accessor(row => champions.get(`${row.championId}`), {
            cell: (props) => (
                <FlexRowStart>
                    <ImageContainer
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${props.getValue().id}.png`}
                        alt="champion"
                        max="40px"
                    />
                    <Span data-champ="true" size="sm">&nbsp;&nbsp;{props.getValue().name}</Span>
                </FlexRowStart>
            ),
            header: "Champ",
            id: "champion"
        }),
        columnHelper.accessor(row => row, {
            cell: (props) => {
                const row = props.getValue();
                return (
                    <FlexColCenter>
                        <Span size="sm" align="center">{winrate(row)}%</Span>
                        <Span size="s" align="center">
                            ({props.getValue().wins}<Span size="s" color="lightgreen">W</Span> / {props.getValue().totalMatches - props.getValue().wins}<Span size="s" color="#ff6961">L</Span>)
                        </Span>
                    </FlexColCenter>
                );
            },
            header: "Winrate",
            sortingFn: (rowA, rowB) => {
                const rowA_winrate = winrate(rowA.original);
                const rowB_winrate = winrate(rowB.original);
                if (rowA_winrate > rowB_winrate) return 1;
                if (rowB_winrate > rowA_winrate) return -1;
                return 0;
            },
            sortDescFirst: true,
            id: "winrate",
        }),
        columnHelper.accessor(row => row, {
            cell: (props) => {
                const row = props.getValue();
                return (
                    <FlexColCenter>
                        <Span size="sm" align="center">{kda(row)}</Span>
                        <Span size="s" align="center">
                            ({stat(row.kills, row.totalMatches)}, <Span size="s" color="#ff6961">{stat(row.deaths, row.totalMatches)}</Span>, {stat(row.assists, row.totalMatches)})
                        </Span>
                    </FlexColCenter>
                );
            },
            header: "KD/A",
            sortingFn: (rowA, rowB) => {
                const rowA_kda = kda(rowA.original);
                const rowB_kda = kda(rowB.original);
                if (rowA_kda > rowB_kda) return 1;
                if (rowB_kda > rowA_kda) return -1;
                return 0;
            },
            sortDescFirst: true,
            id: "kda"
        }),
        columnHelper.accessor("maxKills", {
            cell: (props) => <Span size="sm" align="center">{props.getValue()}</Span>,
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
            cell: (props) => props.getValue(),
            header: () => (
                <div>
                    <div>Max</div>
                    <div>Deaths</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true
        }),
        columnHelper.accessor(row => `${Math.round((row.cs / row.totalMatches) * 10) / 10}`, {
            cell: props => props.getValue(),
            header: () => (
                <div>
                    <div>Avg</div>
                    <div>CS</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avgCs"
        }),
        columnHelper.accessor(row => `${Math.round(row.gold / row.totalMatches)}`, {
            cell: (props) => <Span color="gold" size="sm">{props.getValue()}</Span>,
            header: () => (
                <div>
                    <div>Avg</div>
                    <div>Gold</div>
                </div>
            ),
            sortingFn: "alphanumeric",
            sortDescFirst: true,
            id: "avgGold"
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
            id: "avgDmg"
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
            id: "avgDmgTaken"
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