import { StyledServerPicker } from "./ServerPicker.styled";
import { CheckedServer } from "../../atoms/ServerButton/ServerButton";

const SERVER_VALUES = {
  "eun1": "EUNE",
  "euw1": "EUW",
  "tr1": "TR",
  "ru1": "RU",
  "na1": "NA",
  "las1": "LAS",
  "lan1": "LAN",
  "br1": "BR",
  "oce1": "OCE",
  "jp1": "JP",
  "kr1": "KR",
};

export const ServerPicker = ({ handleLabelClick, handleRadioClick, checkedRadioButton }) => {
  return (
    <StyledServerPicker>
      {[...Object.keys(SERVER_VALUES)].map((server) => (
        <CheckedServer
          key={server}
          server={server}
          handleLabelClick={handleLabelClick}
          handleRadioClick={handleRadioClick}
          checkedRadioButton={checkedRadioButton}
        >
          {SERVER_VALUES[server]}
        </CheckedServer>
      ))}
    </StyledServerPicker>
  );
};
