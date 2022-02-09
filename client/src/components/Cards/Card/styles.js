import styled from 'styled-components';


export const Main = styled.div `

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 400px;
  margin-top: 50px;
  margin-right: 3%;
  background-color: white;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  border-radius: 10px;
  @media (max-width: 600px){
    width: 350px;
  }

`

export const Price= styled.p`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`



export const Name = styled.p `
  
  font-size: 18px;
  font-weight: 600;
  font-family: Poppins;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  

  `


  export const Img = styled.img`
    width: 39%;
    height: 30%;
  
  `

  export const Stock = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
  
  `

  export const Link = styled.a`
  text-decoration: none;
  font-family: 'Poppins';
  color: #000000;
  &:hover{
    color: grey;
  }

`


export const Button =styled.button`
    background-color: #2EB8B0;
    border-radius: 5px;
    border:none;
    width: 100px;
    height: 40px;
    text-transform: uppercase;
    cursor: pointer;

`