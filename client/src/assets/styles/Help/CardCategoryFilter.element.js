import styled from 'styled-components';

export const Container = styled.div`
text-decoration: none;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 10rem; */
  margin: 20px;
  padding-left: 20px;
  width: 60rem;
  min-height: 130px;
  /* display: grid; */
  /* grid-template-rows: 20px 50px 1fr 50px; */
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;

  &:hover{
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
  background-color: #80ece7da;
  }

  @media only screen and (max-width: 975px){
    width: 45rem;
  }

  @media only screen and (max-width: 750px){
    width: 25rem;
  }
`;


export const Title = styled.h1`
  color: black;
`;

export const Subtitle = styled.p`
  /* color: #31B7B0; */
  transition: all 0.2s;
  /* &:hover{ */
    color: #194744;
  /* } */
`;