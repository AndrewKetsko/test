import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
`;
export const Navigation = styled.nav`
  padding: 10px;
  position: fixed;
  z-index: 100;
  background-color: var(--form-select-bg-color);
  top: 0;
  left: 0;
`;
export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
  padding: 14px 20px;
  margin: 0;
  :hover,
  :focus {
    background-color: var(--button-bg-color-hover);
    color: white;
    border-radius: 10px;
  }
`;

export const LinkBox = styled.li`
  margin-right: 20px;
`;
