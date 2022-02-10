
import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
 height: 60px;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  background-color: #2EB8B0; 
  display: flex;
  align-items: center;
  margin-top:-50px;
  ${mobile({ padding: "10px 0px" })}
`;
export const Left = styled.div`
  display: flex;
  margin-bottom: -20px;
  align-items: center;
  ${mobile({ height: "50px" })}
`;

export const TechC = styled.img`
  width: 8rem;
  margin-left: 5rem;
  margin-top: 3rem;
  ${mobile({ fontSize: "24px" })}
`;

export const Right = styled.ul`
  display: flex;
  flex: 1;
  margin-top: 50px;
  justify-content: right;
  list-style: none;
  ${mobile({ height: "50px" })}
`;

export const MenuItem = styled.div`
  font-family: arial;
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  ${mobile({ height: "50px" })}
`;

export const MenuItems = styled.li`
  height: 100%;
  ${mobile({ height: "50px" })}
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  color: #13131599;
  font-family: arial;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #121212;
    background-color: #3c3c434d;
  }
  ${mobile({ height: "50px" })}
`;

export const Center = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 2em;
  margin-right: 2em;
  ${mobile({ height: "10px" })}
`;

export const SearchContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin-left: 10em;
  border-radius: 8px;
  letter-spacing: 0.0275rem;
  background-color: white;
  margin-top: 1em;
  margin-bottom: -2em;
  ${mobile({ height: "10px" })}
  
`;

export const Input = styled.input`
  width: 90%;
  border-radius: 8px 0 0 8px;
  text-transform: uppercase;
  height: 2.5rem;
  align-items: center;
  font-size: 1.3rem;
  line-height: 147.6%;
  padding-left: 0.9rem;
  padding-top: 0.5rem;
  border: none;
  ${mobile({ height: "50px" })}
  
`;

export const ButtonSearch = styled.button`
  height: 3rem;
  width: 10%;
  
  border-radius: 0 8px 8px 0;
  background-color:#fcf5f5;

  &:hover {
    background-color: #3c3c434d;
  }
  ${mobile({ height: "50px" })}
`;
export const Cartshopp = styled.div`
 ${mobile({ width: "50px" })}
`;

export const MobileIcon = styled.div`
    display: none;

    ${mobile({ display: "flex" })}
`;