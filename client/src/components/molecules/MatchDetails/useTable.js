import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { FlexColCenter, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";
import { ChampionSetup } from "../ChampionSetup/ChampionSetup";
import { MatchItems } from "../MatchItems/MatchItems";

const columnHelper = createColumnHelper();

export const useTable = (data) => {
    const { server } = useParams();

    const kda = (row) => Math.round(((row.kills + row.assists) / (row.deaths || 1)) * 100) / 100;

    const defaultColumns = useMemo(
        () => [
            columnHelper.accessor((row) => row, {
                cell: (props) => {
                    const row = props.getValue();
                    return (
                        <FlexRowStart data-champ>
                            <ChampionSetup position="start" match={row} width={40} hasLevel={true} />
                            <CustomLink to={`/${server}/${row.summonerName}-${row.riotIdTagline}`} align="left">
                                {row.summonerName}#{row.riotIdTagline}
                            </CustomLink>
                        </FlexRowStart>
                    );
                },
                size: 150,
                header: "Player",
                id: "player",
            }),
            columnHelper.accessor((row) => row, {
                cell: (props) => {
                    const row = props.getValue();
                    return (
                        <FlexColCenter>
                            <Span size="sm" align="center">
                                {kda(row)}
                            </Span>
                            <Span size="s" align="center">
                                {row.kills},{" "}
                                <Span size="s" color="#ff6961">
                                    {row.deaths}
                                </Span>
                                , {row.assists}
                            </Span>
                        </FlexColCenter>
                    );
                },
                header: "KD/A",
                id: "kda",
            }),
            columnHelper.accessor("goldEarned", {
                cell: (props) => <Span size="sm">{props.getValue()}</Span>,
                header: "Gold",
                id: "gold",
            }),
            columnHelper.accessor("totalMinionsKilled", {
                cell: (props) => props.getValue(),
                header: "CS",
                id: "cs",
            }),
            columnHelper.accessor((row) => row, {
                cell: (props) => {
                    const row = props.getValue();
                    return <FlexColCenter>{row.totalDamageDealtToChampions}</FlexColCenter>;
                },
                header: "Dmg",
                id: "dmg_done",
            }),
            columnHelper.accessor((row) => row, {
                cell: (props) => {
                    const row = props.getValue();
                    const itemsArray = [row.item0, row.item1, row.item2, row.item3, row.item4, row.item5, row.item6];
                    return <MatchItems items={itemsArray} initialWidth={26} />;
                },
                header: "Items",
                id: "items",
            }),
        ],
        [server]
    );

    const memoData = useMemo(() => data, [data]);

    const instance = useReactTable({
        data: memoData,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return instance;
};
