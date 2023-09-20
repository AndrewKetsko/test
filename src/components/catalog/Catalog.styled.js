import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
  color: var(--button-bg-color);
  cursor: pointer;
  margin: 50px auto 10px auto;
  display: inline-block;
  text-decoration: underline;
  padding: 10px 10px;

  :hover,
  :focus {
    color: var(--button-bg-color-hover);
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: var(--button-bg-color);
  margin-top: 10px;
  background-color: var(--form-select-bg-color);
  padding: 14px 50px;
  border-radius: 12px;

  :hover,
  :focus {
    color: var(--button-bg-color-hover);
    text-decoration: underline;
  }
`;
