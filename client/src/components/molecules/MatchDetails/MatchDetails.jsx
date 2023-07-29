import { useEffect } from "react";
import { flexRender } from "@tanstack/react-table";
import { useParams } from "react-router-dom";
import { StyledMatchDetails } from "./MatchDetails.styled";
import {
    FlexCol,
    FlexRowCenter,
    FlexRowStart,
} from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { useScreenSize } from "hooks/useScreenSize";
import { GameBans } from "../GameBans/GameBans";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useTable } from "./useTable";
import { arenaTeamNames } from "consts/arenaTeamNames";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Span } from "components/atoms/Span/Span";

const POSITIONS = ["1ST", "2ND", "3RD", "4TH"];

export const MatchDetails = ({ team, bans, mode }) => {
    const { width } = useScreenSize();
    const { server, summonerName } = useParams();
    const { data: summonerData } = useGetSummonerQuery(server, summonerName);

    const table = useTable(team);

    useEffect(
        function responiveTable() {
            const breakOne = width > 550;
            const breakTwo = width > 400;
            const breakThree = width > 335;

            table.getColumn("dmg_done").toggleVisibility(breakOne);
            table.getColumn("gold").toggleVisibility(breakTwo);
            table.getColumn("cs").toggleVisibility(breakThree);
        },
        [width, table]
    );

    return (
        <FlexCol
            style={{
                marginBottom:
                    mode === "CHERRY" && team[0].placement !== 4 ? ".5rem" : "",
            }}
        >
            <FlexCol>
                <FlexRowCenter
                    style={{
                        marginTop: mode === "CHERRY" ? ".25rem" : "",
                        marginBottom: mode === "CHERRY" ? ".25rem" : "",
                    }}
                >
                    {mode === "CHERRY" ? (
                        <FlexRowStart
                            gap={"0.25rem"}
                            style={{ minWidth: "110px" }}
                        >
                            <Span size="s" width="auto">
                                {POSITIONS[team[0].placement - 1]}
                            </Span>
                            <ImageContainer
                                width={"30px"}
                                min="30px"
                                src={`${process.env.REACT_APP_NOT_SECRET_CODE}/static/arena-${team[0].playerSubteamId}.webp`}
                                alt={`Team ${
                                    arenaTeamNames[team[0].playerSubteamId]
                                }`}
                            />
                            <Span size="s" width="auto">
                                {arenaTeamNames[
                                    team[0].playerSubteamId
                                ].toUpperCase()}
                            </Span>
                        </FlexRowStart>
                    ) : null}
                    {bans.length ? (
                        <GameBans
                            border={false}
                            shouldMobileAlign={true}
                            size="30px"
                            align="left"
                            isWinner={team[0].win}
                            bans={bans}
                        >
                            BANS:
                        </GameBans>
                    ) : null}
                </FlexRowCenter>
                <StyledMatchDetails isWinner={team[0].win}>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                data-profile={
                                    row.original.summonerName ===
                                    summonerData.summonerName
                                }
                                key={row.id}
                            >
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </StyledMatchDetails>
            </FlexCol>
        </FlexCol>
    );
};
