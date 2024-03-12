import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSearchSummoner } from "./SearchSummoner.styled";
import { SummonerInput } from "../../molecules/SummonerInput/SummonerInput";
import { ServerPicker } from "../../molecules/ServerPicker/ServerPicker";

export const SearchSummoner = () => {
    const [summonerName, setSummonerName] = useState("");
    const [checkedRadioButton, setCheckedRadioButton] = useState(localStorage.getItem("server") || "eun1");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkedRadioButton || !summonerName) {
            alert("no");
            return;
        }
        const [gameName, tagLine] = summonerName.split("#");
        navigate(`/${checkedRadioButton}/${gameName}-${tagLine}`);
    };

    const handleLabelClick = (e) => {
        localStorage.setItem("server", e.target.htmlFor);
        setCheckedRadioButton(e.target.htmlFor);
    };

    const handleRadioClick = (value) => {
        localStorage.setItem("server", value);
        setCheckedRadioButton(value);
    };

    return (
        <StyledSearchSummoner as="form" onSubmit={(e) => handleSubmit(e)}>
            <SummonerInput setSummonerName={setSummonerName} summonerName={summonerName} server={checkedRadioButton} />
            <ServerPicker
                handleLabelClick={handleLabelClick}
                handleRadioClick={handleRadioClick}
                checkedRadioButton={checkedRadioButton}
            />
        </StyledSearchSummoner>
    );
};
