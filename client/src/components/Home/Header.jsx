

import React from "react";
import styled from "styled-components";
import {ShoppingCart} from '@styled-icons/entypo/ShoppingCart';

import mobile from "../../responsive";

import Logoo from "../../assets/Imgs/Logoo.png";
import Tech from "../../assets/Imgs/Tech.png";
import { Link } from "react-router-dom";


const Container = styled.div`
 background-color: #fcf5f5;
 height: 60px;
 margin-bottom: 20px;
 ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
  background-color: #fcf5f5;
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px; 

`;

const Logo = styled.img`
  display: flex;
  position: relative;
  width: 15%;
  margin-bottom: 20px;
  margin-right: 20px;
  padding-right: 200px;
  padding-bottom: 20px;
  ${mobile({ width: "20%" })}
  ${mobile({ fontSize: "24px" })}
`;

const TechC = styled.img`
  display: flex;
  width: 21%;
  margin-left: 150px;
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

//--------------- styles icons ----------------------

const ShoppCart = styled(ShoppingCart)`
`

//-----------------------------------------------------

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={Logoo} />
          <Link to="/products">Productos</Link>
        </Left>
        <Center>
         <TechC src={Tech}/>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem> */}
          <Link to="/product/create">PRODUCT</Link>

          <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
          <Link to="/login"><MenuItem>LOGIN</MenuItem></Link>
          
          <MenuItem>
              <ShoppCart size={20} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
