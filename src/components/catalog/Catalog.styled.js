import styled from "@emotion/styled";

export const Container = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  color: #3470ff;
  cursor: pointer;
  margin: 50px auto 10px auto;
  display: inline-block;
  text-decoration: underline;
  padding: 10px 10px;

  :hover,
  :focus {
    color: #0b44cd;
  }
`;
