import styled from 'styled-components';



export const Main= styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
height: max-content;
margin-left: 25%;
margin-top:10%;
margin-bottom: 10%;
width: 50vw;
box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
padding-bottom: 5%;
border-radius: 10px;
`


export const Attributes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 20px;
   

`


export const Name= styled.p`
  margin-right: 30px;
  font-size: 18px;
  margin-bottom: 3%;

`

export const Img=styled.img`
  height: 25%;
  width: 25%;
  margin-bottom: 10%;
  margin-top: 3%;
`

export const Stock = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 5%;
    margin-bottom: 5%;
  
  `