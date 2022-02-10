import styled from 'styled-components';


export const SubTi = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 0.5rem;
  color: #31B7B0;
  
  @media only screen and (max-width: 920px ){
    font-weight: lighter;
    font-size: 1.1rem;
     padding-left: 1.5em;
    padding-right: 1.5em;
    color:black;
  }
`

export const Description = styled.div`
  
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 920px ){
    /* align-items: center; */
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// .p
// }

export const Detail = styled.p`
   font-size: 1.3rem;
   @media only screen and (max-width: 920px ){
    font-weight: lighter;
    font-size: 1.3rem;
  }
`