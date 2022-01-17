
/* import { Search, ShoppingCartOutlined } from "@material-ui/icons"; */
import React from "react";
import styled from "styled-components";
import {ShoppingCart} from '@styled-icons/entypo/ShoppingCart';
import {Search} from '@styled-icons/material/Search';
import mobile from "../../responsive";

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

//--------------- styles icons ----------------------

const ShoppCart = styled(ShoppingCart)`
`
const S = styled(Search)`
padding: 5px;
  `

//-----------------------------------------------------

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Logo> */}
          <SearchContainer>
            <Input placeholder="Search"></Input>
             <S size={25} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Tech-C</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            
              <ShoppCart size={20} />
           
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
