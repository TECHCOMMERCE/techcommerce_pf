import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mobile from "../../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

  ${mobile({ fontSize: "48px" })}
`;
const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;

  ${mobile({ textAlign: "center", fontSize: "18px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  font-size: 20px;
  padding-left: 20px;
${mobile({ fontSize: "48px" })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  ${mobile({ fontSize: "48px" })}
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>Boletin informativo</Title>
      <Description>Obtenga actualizaciones oportunas de sus productos favoritos. </Description>
      <InputContainer>
        <Input placeholder="Introduce tu correo electrónico" />
        <br />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

