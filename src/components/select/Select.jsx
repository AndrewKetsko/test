import { LabelText, OptionText, SelectImg, SelectText } from "./Select.styled";
import Arrow from "../../pics/arrow.svg";
import { useEffect, useState } from "react";

export const Select = ({ data, setData, label, labelText, name }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const mouseClick = (e) => {
      if (
        e.target.nodeName !== "SELECT" ||
        e.target.getAttribute("data-name") !== name
      )
        setOpen(false);
    };
    window.addEventListener("click", mouseClick);
    return () => window.removeEventListener("click", mouseClick);
  }, [name]);

  return (
    <div style={{ position: "relative" }}>
      <LabelText>{label}</LabelText>
      <SelectImg alt={"arrow"} src={Arrow} isOpen={isOpen} />
      <SelectText
        data-name={name}
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
