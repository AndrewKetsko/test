import styled from "@emotion/styled";

export const LabelText = styled.legend`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--form-label-text);
  margin-bottom: 8px;
`;

export const SelectText = styled.select`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--main-text);
  padding-right: 50px;
  padding-left: 18px;
  border: none;
  border-radius: 14px;
  background-color: var(--form-select-bg-color);
  height: 48px;
  margin: 0;
  appearance: none;
  outline: none;
`;

export const SelectImg = styled.img`
  position: absolute;
  right: 13px;
  bottom: 13px;
  pointer-events: none;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
`;

export const OptionText = styled.option`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--near-full-transparent);
`;
