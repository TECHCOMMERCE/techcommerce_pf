import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import mobile from "../responsive";
import Cart from "./Cart/Cart";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  border-bottom:solid 1px grey;
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ marginLeft: "10px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ marginLeft: "5px", fontSize: "12px" })}
`;

const NavBar = () => {

  let cart=[2,2,2]
  return (
    <Container>
      <Wrapper>
        <Left>
         
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{ color: "gray", fontSize: 16 }}></Search>
          </SearchContainer>
        </Left>
        <Center>
         <Link to='/' style={{textDecoration: 'none', color: '#000000'}}><Logo>Tech-C</Logo></Link> 
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={cart.length? cart.length : 0 } color="primary">
             <Link to='/cart'> <ShoppingCartOutlined/></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
