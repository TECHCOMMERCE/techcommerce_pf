
/* import { Search, ShoppingCartOutlined } from "@material-ui/icons"; */
import React from "react";
import styled from "styled-components";
import {ShoppingCart} from '@styled-icons/entypo/ShoppingCart';
import mobile from "../../responsive";
import Logoo from "../../assets/Imgs/Logoo.png";
import Tech from "../../assets/Imgs/Tech.png";
import { Link } from "react-router-dom";



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
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

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px; 
`;

const Logo = styled.img`
  display: block;
  width: 100px;
  height: 50px;
  margin-left: 150px;
  padding: 10px;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;
const TechC = styled.img`
   display: block;
  width: 100px;
  height: 50px;
  margin-left: 150px;
  padding: 10px;
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
