import styled from "@emotion/styled";

export const Container = styled.form`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const LabelText = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(138, 138, 137, 1);
  margin-bottom: 8px;
  // :before {
  //   content: "To:";
  // }
`;

export const SelectText = styled.select`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;
  // padding: 14px 18px;
  padding-right: 50px;
  padding-left: 18px;
  border: none;
  border-radius: 14px;
  background-color: rgba(247, 247, 251, 1);
  height: 48px;
  margin: 0;
  appearance: none;
  outline: none;
`;

export const SelectImg = styled.img`
  position: absolute;
  right: 13px;
  bottom: 13px;
`;

export const SelectWrapper = styled.select`
  // font-family: Manrope;
  // font-size: 18px;
  // font-weight: 500;
  // line-height: 20px;
  // letter-spacing: 0em;
  // text-align: left;
  // color: #121417;
  // padding: 14px 18px;
  // border: none;
  // border-radius: 14px;
  // background-color: rgba(247, 247, 251, 1);
  // height: 48px;
  // margin:0;
  // width:100px;
`;

export const OptionText = styled.option`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(18, 20, 23, 0.2);
`;

export const InputText = styled.input`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;
  // padding: 14px 18px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  // width: 160px;
  outline: none;

  :first-of-type {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-right: 1px solid #8a8a89;
    padding: 14px 18px 14px 75px;
    width: 85px;
  }

  :last-of-type {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 14px 18px 14px 50px;
    width: 110px;
  }
`;

export const CustomLabel = styled.label`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;

  :before {
    content: "From:";
    position: absolute;
    transform: translate(20px, 39px);
  }
  :after {
    content: "To:";
    position: absolute;
    transform: translate(-160px, 14px);
  }
`;
