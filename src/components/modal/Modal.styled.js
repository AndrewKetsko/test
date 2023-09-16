import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Container = styled.div`
  width: 450px;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  position: relative;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
`;

export const Image = styled.div`
  height: 250px;
  overflow: hidden;
  background: #fff url(${(props) => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 12px;
`;

export const Header = styled.p`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 12px;
`;

export const SemiTransparent = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(18, 20, 23, 0.5);
  margin-top: 4px;
`;

export const Text = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 14px;
`;

export const SemiHeader = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 24px;
`;

export const TextBG = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  display: inline-block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
  margin-right:8px;
  margin-top:8px;
`;
