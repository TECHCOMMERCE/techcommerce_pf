import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
background-color: #FF6464;
 position: fixed;
 top:0;
 left:0;
 height: 40px;
 width: 100%;
 z-index:100;
 
 ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:5rem;
  padding-right:5rem;
  ${mobile({ padding: "5px 0px" })}
  background-color: #FF6464;
`;
// position:fixed;

export const Left = styled.div`
  display: flex;
  flex: 1;
  margin-left: 0.5rem;
  align-items: center;
  font-size: 1.2rem;
`;

export const TechC = styled.img`
  width: 8rem;
`;

export const Right = styled.ul`
  display: flex;
  flex: 1;
  justify-content: right;
  list-style: none;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
  font-family: arial;
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
`;

export const MenuItems = styled.li`
  height: 100%;
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  color: #13131599;
  font-family: arial;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #121212;
    background-color: #3c3c434d;
  }
  ${mobile({ marginLeft: "5px", fontSize: "12px" })}
`;

export const Center = styled.div`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 4em;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  font-size: 0.9rem;
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;

  ${mobile({ marginLeft: "10px" })}
`;

export const Input = styled.input`
  border-radius: 8px 0 0 8px;
  text-transform: uppercase;
  height: 3.05rem;
  width: 30rem;
  align-items: center;
  font-size: 1.3rem;
  padding-left: 0.9rem;
  line-height: 147.6%;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border: none;

  ${mobile({ width: "50px" })}
`;

export const ButtonSearch = styled.button`
  height: 3rem;
  width: 3rem;
  border: none;
  border-radius: 0 8px 8px 0;
  margin-bottom: 0;
  background-color:#fcf5f5;

  &:hover {
    background-color: #3c3c434d;
  }
`;
export const Cartshopp = styled.div`
 ${mobile({ width: "50px" })}
`;

//width: 90%;
