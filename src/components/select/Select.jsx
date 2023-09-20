import { LabelText, OptionText, SelectImg, SelectText } from "./Select.styled";
import Arrow from "../../pics/arrow.svg";
import { useState } from "react";

export const Select = ({data, setData, label, labelText}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <LabelText>{label}</LabelText>
      <SelectImg alt={"arrow"} src={Arrow} isOpen={isOpen} />
      <SelectText
        onChange={(e) => setData(e.target.value)}
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        <OptionText value={""}>{labelText}</OptionText>
        {data?.map((item) => (
          <OptionText key={item} value={item}>
            {item}
          </OptionText>
        ))}
      </SelectText>
    </div>
  );
};
