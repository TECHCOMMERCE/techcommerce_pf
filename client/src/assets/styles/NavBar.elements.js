import styled from "styled-components";
import mobile, {laptop} from "../../responsive";


export const Container = styled.div`
 height: 60px;
  /* ${mobile({ height: "10px" })} */
`;

export const Wrapper = styled.div`
  background-color: #2EB8B0; 
  display: flex;
  align-items: center;
  margin-top: -10px;
  /* ${mobile({ padding: "10px 0px" })} */
`;
export const Left = styled.div`
  display: flex;
  /* margin-bottom: -20px; */
  /* background-color: black; */
  align-items: center;
  /* ${mobile({ height: "50px" })} */
`;

export const TechC = styled.img`
  width: 8rem;
  margin-left: 2rem;
  margin-top: 1.4rem;
  /* ${mobile({ fontSize: "24px" })} */
  @media screen and (max-width: 960px){
    width: 4.5rem;
  }
`;

export const Right = styled.ul`
  display: flex;
  flex: 1;
  margin-top: 50px;
  justify-content: right;
  list-style: none;
  margin-bottom: 3rem;
  padding-right: 1rem;
  /* ${mobile({ height: "50px" })} */
  @media screen and (max-width: 960px){
    align-items: center;
    background-color:#2EB8B0 ;
    left: ${({open}) =>( open ? "0": "-100%" )};
    justify-content: center;
    flex-direction: column;
    transition: 0.5s all ease;
    top: 35px;
    height: 95vh;
    position: absolute;
    width: 100%;
    z-index: 100;
  }
`;


export const MenuItem = styled.div`
  font-family: arial;
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  /* ${mobile({ height: "50px" })} */
  @media screen and (max-width: 960px){
    font-size: 35px;
  cursor: pointer;
  margin-left: 55px;
  margin-right: 55px;
  }
`;

export const MenuItems = styled.li`
  height: 100%;
  /* ${mobile({ height: "50px" })} */
  @media screen and (max-width: 960px){
    width:100%;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
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
    font-size: 40px;
    
  }
  /* ${mobile({ height: "50px" })} */
`;

export const Center = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 2em;
  margin-right: 2em;
  

  /* ${mobile({ height: "10px" })} */
  @media screen and (max-width: 960px){
    /* background-color: red; */
    margin-right: 20px;
    /* margin-left: 1em; */
    width: 373px;
  }
`;


export const SearchContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin-left: 5em;
  border-radius: 8px;
  letter-spacing: 0.0275rem;
  background-color: white;
  /* margin-top: 1em; */
  /* margin-bottom: -2em; */
  ${mobile({ height: "10px" })}
  @media screen and (max-width: 960px){
    width: 372px;
    margin-left: .2em;
    margin-right: 1em;
  }
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
  /*  
  //${mobile({ height: "50px" })} 
  */
   
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
  align-items: center;
  justify-content: center;
  
  padding-left: 2px;
  &:hover {
    background-color: #3c3c434d;
  }
  /* ${mobile({  height: "50px" })} */
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
    ${mobile({ display: "flex" })}
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

