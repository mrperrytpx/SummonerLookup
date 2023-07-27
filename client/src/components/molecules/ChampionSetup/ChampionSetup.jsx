import { GridBox } from "components/atoms/GridBoxes/GridBoxes.styled";
import { IconWithLevel } from "components/atoms/IconWithLevel/IconWithLevel";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";
import { StyledChampionSetup } from "./ChampionSetup.styled";

export const ChampionSetup = ({ hasLevel, match, width, position }) => {
    const queryClient = useQueryClient();

    const version = queryClient.getQueryData(["version"]);
    const summonerSpells = queryClient.getQueryData(["summoner-spells"]);
    const runes = queryClient.getQueryData(["runes"]);
    const champions = queryClient.getQueryData(["champions"]);
    const arena = queryClient.getQueryData(["arena"]);

    const augmentImage = (id) => {
        const augmentData = arena.augments.find((augment) => augment.id === id);
        return augmentData
            ? `https://raw.communitydragon.org/latest/game/${augmentData.iconSmall.toLowerCase()}`
            : "https://raw.communitydragon.org/latest/game/assets/spells/icons2d/summoner_empty.png";
    };

    console.log("arena", arena);

    if (!match.perks.statPerks.defense)
        return (
            <StyledChampionSetup position={position} data-champsetup>
                {!hasLevel ? (
                    <ImageContainer
                        data-icon="true"
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${
                            champions.get(`${match.championId}`).id
                        }.png`}
                        alt="champion"
                        width={`${width}px` || "40px"}
                    />
                ) : (
                    <IconWithLevel
                        level={match?.champLevel || "?"}
                        data-icon
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${
                            champions.get(`${match.championId}`).id
                        }.png`}
                        alt="champion"
                        width={`${width}px` || "40px"}
                    />
                )}
                <GridBox
                    data-setupgrid
                    rows={`repeat(2, minmax(${width / 2}px, 1fr))`}
                    cols={`repeat(2, minmax(${width / 2}px, 1fr))`}
                >
                    <ImageContainer
                        border="black"
                        background
                        width={`${width / 2}px` || "20px"}
                        // src={`${process.env.REACT_APP_NOT_SECRET_CODE}/static/${ranked.tier?.toLowerCase() ?? "unranked"}.webp`}
                        // https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/electrocute/electrocute.png

                        // https://raw.communitydragon.org/latest/game/assets/ux/cherry/augments/icons/acceleratingsorcery_small.2v2_mode_fighters.png
                        // src="https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/electrocute/electrocute.png"
                        src={augmentImage(match.playerAugment1)}
                        alt="Augmentation 1"
                        data-setup
                    />
                    <ImageContainer
                        border="black"
                        background
                        width={`${width / 2}px` || "20px"}
                        // https://raw.communitydragon.org/latest/game/assets/perks/styles/7203_whimsy.png
                        src={augmentImage(match.playerAugment2)}
                        alt="Augmentation 2"
                        data-setup
                    />
                    <ImageContainer
                        background
                        border="black"
                        width={`${width / 2}px` || "20px"}
                        src={augmentImage(match.playerAugment3)}
                        alt="Augmentation 3"
                        data-setup
                    />
                    <ImageContainer
                        background
                        border="black"
                        width={`${width / 2}px` || "20px"}
                        src={augmentImage(match.playerAugment4)}
                        alt="Augmentation 4"
                        data-setup
                    />
                </GridBox>
            </StyledChampionSetup>
        );

    // ids needed for https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/runesReforged.json
    const keystoneRuneId = match?.perks.styles[0].selections[0].perk;
    let primaryRuneTreeId = match?.perks.styles[0].style;

    if (!primaryRuneTreeId) {
        primaryRuneTreeId = +(
            match?.perks.styles[0].selections[0].perk
                .toString()
                .split("")
                .slice(0, 2)
                .join("") + "00"
        );
    }

    let secondaryRuneTreeId = match?.perks.styles[1].style;

    if (!secondaryRuneTreeId) {
        secondaryRuneTreeId = +(
            match?.perks.styles[1].selections[0].perk
                .toString()
                .split("")
                .slice(0, 2)
                .join("") + "00"
        );
    }

    // rune data
    const primaryTree = runes.find((tree) => tree.id === primaryRuneTreeId);
    const primaryRuneData = primaryTree.slots[0].runes.find(
        (rune) => rune.id === keystoneRuneId
    );
    const primaryTreeNames = primaryRuneData.icon
        .split("/")
        .map((x) => x.toLowerCase());

    const secondaryTree = runes.find((tree) => tree.id === secondaryRuneTreeId);
    const secondaryTreeKeystoneName = secondaryTree?.icon
        .split("/")[2]
        .toLowerCase();

    const firstSummonerSpell = summonerSpells
        .find((spell) => spell.id === match.summoner1Id)
        ?.iconPath.split("/lol-game-data/assets/")
        .pop()
        .toLowerCase();
    const secondSummonerSpell = summonerSpells
        .find((spell) => spell.id === match.summoner2Id)
        ?.iconPath.split("/lol-game-data/assets/")
        .pop()
        .toLowerCase();
    const noSummonerSpell =
        "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_Empty.png"
            .split("/lol-game-data/assets/")
            .pop()
            .toLowerCase();

    return (
        <StyledChampionSetup position={position} data-champsetup>
            {!hasLevel ? (
                <ImageContainer
                    data-icon="true"
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${
                        champions.get(`${match.championId}`).id
                    }.png`}
                    alt="champion"
                    width={`${width}px` || "40px"}
                />
            ) : (
                <IconWithLevel
                    level={match?.champLevel || "?"}
                    data-icon
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${
                        champions.get(`${match.championId}`).id
                    }.png`}
                    alt="champion"
                    width={`${width}px` || "40px"}
                />
            )}
            <GridBox
                data-setupgrid
                rows={`repeat(2, minmax(${width / 2}px, 1fr))`}
                cols={`repeat(2, minmax(${width / 2}px, 1fr))`}
            >
                <ImageContainer
                    border="black"
                    background
                    width={`${width / 2}px` || "20px"}
                    // https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/electrocute/electrocute.png
                    src={`https://raw.communitydragon.org/latest/game/assets/perks/styles/${primaryTreeNames[2]}/${primaryTreeNames[3]}/${primaryTreeNames[4]}`}
                    alt="Keystone rune"
                    data-setup
                />
                <ImageContainer
                    border="black"
                    background
                    width={`${width / 2}px` || "20px"}
                    // https://raw.communitydragon.org/latest/game/assets/perks/styles/7203_whimsy.png
                    src={`https://raw.communitydragon.org/latest/game/assets/perks/styles/${secondaryTreeKeystoneName}`}
                    alt="Secondary rune tree"
                    data-setup
                />
                <ImageContainer
                    background
                    border="black"
                    width={`${width / 2}px` || "20px"}
                    src={`https://raw.communitydragon.org/latest/game/${
                        firstSummonerSpell || noSummonerSpell
                    }`}
                    alt="Summoner Spell 1"
                    data-setup
                />
                <ImageContainer
                    background
                    border="black"
                    width={`${width / 2}px` || "20px"}
                    src={`https://raw.communitydragon.org/latest/game/${
                        secondSummonerSpell || noSummonerSpell
                    }`}
                    alt="Summoner Spell 2"
                    data-setup
                />
            </GridBox>
        </StyledChampionSetup>
    );
};
