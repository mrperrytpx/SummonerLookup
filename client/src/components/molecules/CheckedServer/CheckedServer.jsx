import { Label } from "../../atoms/Label/Label";
import { RadioButton } from "../../atoms/RadioButton/RadioButton";
import { Fragment } from "react";

export const CheckedServer = ({ server, i, children, handleLabelClick, handleRadioClick, checkedRadioButton }) => {

  const isRadioChecked = (value) => checkedRadioButton === value;


  return (
    <Fragment key={`${server}-${i}`}>
      <Label checkedRadioButton={checkedRadioButton} onClick={handleLabelClick} key={server} htmlFor={server}>{children}</Label>
      <RadioButton onChange={handleRadioClick} checked={isRadioChecked(server)} type="radio" key={i} id={server} value={server} name="server" />
    </Fragment>
  );
};
