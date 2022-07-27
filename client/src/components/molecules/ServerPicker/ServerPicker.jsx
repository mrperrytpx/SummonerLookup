import { StyledServerPicker } from "./ServerPicker.styled";
import { ServerButton } from "../../atoms/ServerButton/ServerButton";
import { SERVER_VALUES } from "../../../consts/serverValues";

export const ServerPicker = ({ handleLabelClick, handleRadioClick, checkedRadioButton }) => {
  return (
    <StyledServerPicker>
      {[...Object.keys(SERVER_VALUES)].map((server) => (
        <ServerButton
          key={server}
          server={server}
          handleLabelClick={handleLabelClick}
          handleRadioClick={handleRadioClick}
          checkedRadioButton={checkedRadioButton}
        >
          {SERVER_VALUES[server]}
        </ServerButton>
      ))}
    </StyledServerPicker>
  );
};
