import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";

export const Button = styled.button`
  background: ${ colors.light };
  border-radius: 3px;
  border: 2px solid ${ colors.azul };
  color: ${ colors.light };
  font-size: 0.9em;
  margin: 0;
  padding: 0.25em 1em;
  margin-bottom: 1em;
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  background-color: ${ colors.azul };
  color:  ${ colors.light };
  flex-direction: row;
  align-content: center;
  padding: 15px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color:  ${ colors.light };
  text-decoration: none;
`;

export const BtnLink = styled.button`
  background-color:  ${ colors.azul };
  padding: 0.9em;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  margin-right: 0.7em;
  color: ${ colors.light };
`;

export const DetailsCont = styled.div`
  background-color:  ${ colors.azul };
  padding: 0.1em;
  border-radius: 10px;
  margin-top: 0.1em;
  width: 70%;
  margin: 0 auto;
  h3,h4{
    color: ${ colors.light };
  }
  em{
    font-weight: lighter;
  }
  img{
    width: 180px;
    height: 140px;
    margin-top: 5px;
    border-radius: 15px;
  }
`;

export const CenteredCont = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 70vh;
`;

export const CenterInfo = styled.div`
  justify-content: center;
  text-align: center;

  ul li{
    display: inline-block;
  }
`;