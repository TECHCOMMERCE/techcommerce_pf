import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 9.5rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 920px ){
    margin-top: 7rem;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  /* font-weight: 800; */
  @media only screen and (max-width: 920px ){
    font-size: 1rem;
   
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  @media only screen and (max-width: 920px ){
    font-weight: lighter;
    color: #31B7B0;
  }
`;

export const Span = styled.span`
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

export const SearchPolicy = styled.div`
`;

export const FilterPolicy = styled.div`

`;

export const ButtomSearch = styled.button`
`;

export const Input = styled.input`
`;

export const Form = styled.form``;

export const Donwn = styled.div`
`;

export const IMG = styled.img``;