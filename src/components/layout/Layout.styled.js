import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  position: relative;
  // padding-right:10px;
  //   flex-wrap: wrap;
  //   gap: 18px;
  // justify-content: center;
  //   align-items: flex-end;
  //   margin-bottom: 50px;
`;
export const Navigation = styled.nav`
  // display: flex;
  padding-right: 10px;
  position: fixed;
  //   flex-wrap: wrap;
  //   gap: 18px;
  //   justify-content: center;
  //   align-items: flex-end;
  //   margin-bottom: 50px;
`;
export const Link = styled(NavLink)`
  font-family: Manrope;
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
    background-color: #0b44cd;
    color: white;
    border-radius: 10px;
  }

  // margin-top:20px;
`;

export const LinkBox = styled.li`
  margin-top: 20px;
`;
