import { Search } from "@material-ui/icons";
import styled from "styled-components";
import mobile, {laptop} from "../../responsive";

export const Container = styled.div`
 height: 60px;
  ${mobile({ height: "50px" })}

`;

export const Wrapper = styled.div`
  background-color: #2EB8B0; 
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const TechC = styled.img`
  width: 8rem;
  margin-left: 3rem;
  @media screen and (max-width: 960px){
    width: 5rem;
  }
`;

export const Right = styled.ul`
  display: flex;
  flex: 1;
  justify-content: right;
  list-style: none;

  @media screen and (max-width: 960px){
    align-items: center;
    background-color:#d63939 ;
    left: ${({open}) =>( open ? "0": "-100%" )};
    justify-content: center;
    flex-direction: column;
    transition: 0.5s all ease;
    top: 85px;
    height: 90vh;
    position: absolute;
    width: 100%;
  }
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

  @media screen and (max-width: 960px){
    width:100%;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  @media screen and (max-width: 960px){
    /* font-size: 2.8rem; */
    width: 100%;
  }
  
`;

export const Center = styled.div`

  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 2em;
  margin-right: 2em;
  /* margin-right: 4em; */
  /* background-color: black; */
  
  @media screen and (max-width: 960px){
    margin-right: 20px;
    margin-left: 1em;
    width: 373px;
  }
`;

export const SearchContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin-left: 10em;
  border-radius: 8px;
  letter-spacing: 0.0275rem;
  background-color: white;
  padding: 0.5rem;
  margin-top: 1em;
  @media screen and (max-width: 960px){
    width: 372px;
  }
 
`;

export const Input = styled.input`
  width: 90%;
  border-radius: 8px 0 0 8px;
  text-transform: uppercase;
  height: 2.8rem;
  align-items: center;
  font-size: 1.3rem;
  line-height: 147.6%;
  padding-left: 0.9rem;
  padding-top: 0.5rem;
  /* padding-bottom: 0.5rem; */
  border: none;
  
  @media screen and (max-width: 960px){
    font-size: 0.8rem;
    padding-bottom: 0rem;
    height: 3.3rem;
    width: 90%;
  }
  
`;

export const ButtonSearch = styled.button`
  height: 3rem;
  width: 10%;
  
  border-radius: 0 8px 8px 0;
  background-color:#fcf5f5;

  &:hover {
    background-color: #3c3c434d;
  }

  @media screen and (max-width: 960px){
    padding-bottom: 0.2rem; 
    height: 3.28rem;
    width: 10%;
  }
  @media screen and (max-width: 1800px){
    width: 10%;
  } 
`;
export const Cartshopp = styled.div`
 ${mobile({ width: "50px" })}
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
      display: flex;
      align-items: center;
      cursor: pointer;

      svg{
        fill: #000000;
        margin-right: 0.5rem
      }
    }
`;