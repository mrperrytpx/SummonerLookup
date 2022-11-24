import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { FlexColCenter, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { GridBox } from "components/atoms/GridBoxes/GridBoxes.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Span } from "components/atoms/Span/Span";
import { useCallback, useMemo } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

const columnHelper = createColumnHelper();

export const useTable = (data) => {

    const { server } = useParams();
    const queryClient = useQueryClient();
    const version = queryClient.getQueryData(["version"]);
    const summonerSpells = queryClient.getQueryData(["summoner-spells"]);
    const runes = queryClient.getQueryData(["runes"]);

    const kda = useCallback((row) => Math.round(((row.kills + row.assists) / (row.deaths || 1)) * 100) / 100, []);

    const defaultColumns = useMemo(() => [
        columnHelper.accessor(row => row, {
            cell: (props) => {
                const row = props.getValue();

                const keystoneRuneId = row?.perks.styles[0].selections[0].perk;
                const primaryRuneTreeId = row?.perks.styles[0].style;
                const secondaryRuneTreeId = row?.perks.styles[1].style;

                const primaryTree = runes.find(tree => tree.id === primaryRuneTreeId);
                const secondaryTree = runes.find(tree => tree.id === secondaryRuneTreeId);

                const firstSummonerSpell = summonerSpells.find(spell => spell.id === row.summoner1Id)?.iconPath.split("/lol-game-data/assets/").pop().toLowerCase();
                const secondSummonerSpell = summonerSpells.find(spell => spell.id === row.summoner2Id)?.iconPath.split("/lol-game-data/assets/").pop().toLowerCase();

                return (
                    <FlexRowStart data-champ>
                        <FlexRowStart data-champsetup>
                            <ImageContainer
                                data-icon="true"
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${row.championName}.png`}
                                alt="champion"
                                width="40px"
                            />
                            <GridBox data-setupgrid rows="repeat(2, minmax(20px, 1fr))" cols="repeat(2, minmax(20px, 1fr))">
                                <ImageContainer
                                    border="black"
                                    background
                                    width="20px"
                                    src={`https://ddragon.leagueoflegends.com/cdn/img/${primaryTree.slots[0].runes.find(rune => rune.id === keystoneRuneId).icon}`}
                                    alt="Keystone rune"
                                    data-setup
                                />
                                <ImageContainer
                                    border="black"
                                    background
                                    width="20px"
                                    src={`https://ddragon.leagueoflegends.com/cdn/img/${secondaryTree.icon}`}
                                    alt="Secondary rune tree"
                                    data-setup
                                />
                                <ImageContainer
                                    border="black"
                                    width="20px"
                                    src={`https://raw.communitydragon.org/latest/game/${firstSummonerSpell}`}
                                    alt="Summoner Spell 1"
                                    data-setup
                                />
                                <ImageContainer
                                    border="black"
                                    width="20px"
                                    src={`https://raw.communitydragon.org/latest/game/${secondSummonerSpell}`}
                                    alt="Summoner Spell 2"
                                    data-setup
                                />
                            </GridBox>
                        </FlexRowStart>
                        <CustomLink
                            to={`/${server}/${row.summonerName}`}
                            align="left"
                        >
                            &nbsp;&nbsp;{row.summonerName}
                        </CustomLink>
                    </FlexRowStart>
                );
            },
            size: 150,
            header: "Player",
            id: "player"
        }),
        columnHelper.accessor(row => row, {
            cell: (props) => {
                const row = props.getValue();
                return (
                    <FlexColCenter>
                        <Span size="sm" align="center">{kda(row)}</Span>
                        <Span size="s" align="center">
                            {(row.kills)}, <Span size="s" color="#ff6961">{row.deaths}</Span>, {row.assists}
                        </Span>
                    </FlexColCenter>
                );
            },
            header: "KD/A",
            id: "kda"
        }),
        columnHelper.accessor("goldEarned", {
            cell: (props) => <Span size="sm">{props.getValue()}</Span>,
            header: "Gold",
            id: "gold"
        }),
        columnHelper.accessor("totalMinionsKilled", {
            cell: (props) => props.getValue(),
            header: "CS",
            id: "cs"
        }),
        columnHelper.accessor(row => row, {
            cell: (props) => {
                const row = props.getValue();
                return (
                    <FlexColCenter>
                        {row.totalDamageDealtToChampions}
                    </FlexColCenter>
                );
            },
            header: "Dmg",
            id: "dmg_done"
        }),
        columnHelper.accessor(row => row, {
            cell: (props) => {
                const row = props.getValue();
                const itemWidth = "26px";

                const itemsArray = [
                    row.item0,
                    row.item1,
                    row.item2,
                    row.item3,
                    row.item4,
                    row.item5,
                    row.item6,
                ];
                return (
                    <GridBox data-itemgrid cols={`repeat(7, ${itemWidth})`}>
                        {itemsArray.map((item, i) => (
                            item
                                ? <ImageContainer
                                    data-item
                                    border="black"
                                    width={itemWidth}
                                    key={i}
                                    src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`}
                                    alt="Item"
                                />
                                : <ImageContainer
                                    data-item
                                    border="black"
                                    width={itemWidth}
                                    key={i}
                                    src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon29.png`}
                                    alt="Item"
                                />
                        ))}
                    </GridBox>
                );
            },
            header: "Items",
            id: "items"
        }),
    ], [server, version, runes, summonerSpells, kda]);

    const memoData = useMemo(() => data, [data]);

    const instance = useReactTable({
        data: memoData,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return instance;
};