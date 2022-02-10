import styled from 'styled-components';



export const Main = styled.div `

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 15%;
  @media (max-width: 600px){
    flex-direction: column;
    justify-content: center;
  align-items: center;
  }
  
  
`


export const Items = styled.div `

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 4%;
  width: 90%;


`


export const Buttons = styled.div `

  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  flex-direction: row;
  
 
  

`

export const Null = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 4%;
    width: 90%;
    height: 600px;
    margin-top: 7%;

`


export const Filters = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  flex-direction: column;
  position: relative;
  top: 10%;
  margin-bottom: 10%;
  margin-top: 10%;
  width: 10%;
  @media (max-width: 600px){
    justify-content: center;
    align-items: center;
  }
`


export const Select = styled.div`
  position: relative;
  top: 10%;
  @media (max-width: 600px){
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    position: relative;
  }

`

export const Options = styled.select`
  width: 90%;
  border-radius: 15px;  
  border: 0.2 solid black;
  margin-top: 10%;
  margin-left: 10%;
  text-align: center;
  font-size: 15px;
  font-family: 'Poppins';

 @media (max-width: 600px){
 width: 150px;
 margin-top: 0px;
  }


`