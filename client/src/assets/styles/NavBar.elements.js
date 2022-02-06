import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
background: linear-gradient(to right, rgba(255, 241, 235, 0.95), rgba(172, 224, 249, 0.95))
`;

export const Wrapper = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: row;
  padding-left: 5%;
  padding-right 5%;
`;
// position:fixed;

export const Left = styled.div`
display: flex;
flex:1;
  margin-left: 0.5rem;
  align-items:center;
  font-size: 1.2rem;
`;

export const TechC = styled.img`
  width: 30%;
`;



export const Right = styled.ul`
display: flex;
flex:1;
  justify-content: space-between;
  list-style: none;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
  font-family: arial;
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 12px;
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

  &:hover{
    // color:#127676;
      color:#121212;
      background-color:#3c3c434d;

  }
  ${mobile({ marginLeft: "5px", fontSize: "12px" })}
`;


export const Center = styled.div`
  
  flex: 1;
  
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-right: 2em;
`;

export const SearchContainer = styled.div`
  
  display: flex;
  flex-direction: row;

  font-size: 0.9rem;
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;

  
  

  ${mobile({ marginLeft: "10px" })}
`;


export const Input = styled.input`
  
  border-radius: 4px;
  height: 3.5rem;
  width: 15em;
  font-size: 1.3rem;
  padding-left: 0.9rem;
  line-height: 147.6%;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border: none;
  
  ${mobile({ width: "50px" })}
`;

export const ButtonSearch = styled.button`
height: 3.5rem;
width: 3rem;
`;

//width: 90%; 