import { StyledServerDropdown } from "./ServerDropdown.styled";
import { SERVER_VALUES } from "../../../consts/serverValues";

export const ServerDropdown = ({ handleOptionClick }) => {
  return (
    <StyledServerDropdown defaultValue={"eun1"} onChange={(e) => handleOptionClick(e)}>
      {
        [...Object.keys(SERVER_VALUES)].map((server) => (
          <option
            key={server}
            value={server}
          >
            {SERVER_VALUES[server]}
          </option>
        ))
      }
    </ StyledServerDropdown>
  );
};
