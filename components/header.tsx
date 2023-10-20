import styled from "styled-components";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <Nav>
        <Img src="image/bi.png" width={"50px"} height={"40px"} />
        <Ul>
          <Li><A>1</A></Li>
          <Li><A>2</A></Li>
          <Li><A>3</A></Li>
          <Li><A>4</A></Li>
          <Li><A>5</A></Li>
        </Ul>
      </Nav>
    </Container>
    
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("image/FID-Fixedlncome1-gloves.jpg");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: rgba(47,47,47,0.5);
  line-height: 50px;
`;

const Img = styled.img`
  margin-top: 15px;
  margin-left: 30px;
`;

const Ul = styled.ul`
  float: right;
  margin-right: 30px;
`;

const Li = styled.li`
  list-style-type: none;
  display: inline-block;
  background-color: #aaa;
  &:hover {
    background-color: red;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 30px;
`;


