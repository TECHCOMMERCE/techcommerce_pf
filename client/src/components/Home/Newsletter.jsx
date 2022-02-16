import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mobile from "../../responsive";
import axios from "axios";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

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
  
  ${mobile({ width: "50%", height: "40px" })}
  `;
const Input = styled.input`
  border: none;
  flex: 8;
  font-size: 20px;
  padding-left: 20px;
  ${mobile({ fontSize: "20px"})}
  `;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  ${mobile({ fontSize: "48px" })}
  `;




export const Newsletter = () => {
 
  const SERVER = process.env.REACT_APP_SERVER ||'http://localhost:3001/';
  const dispatch= useDispatch();
  const [email, setEmail] = React.useState("");

  const Addsubcription  = async (email) => {
    let data = await axios.post(`${SERVER}suscription`, { email });
    dispatch({ type: "ADD_SUBSCRIPTION", payload: data.data,   });
  
  }


  return (
    <Container>
      <Title>Boletin informativo</Title>
      <Description>Obtenga actualizaciones oportunas de sus productos favoritos. </Description>
      <InputContainer>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Agrega un correo electronico" />
        <br />
        <Button>
          <Send  onClick={() => { 
            if(email !== "" && email.includes("@") && email.includes(".")){
              Addsubcription(email);
              Swal.fire({
                title: 'Gracias',
                text: 'Te has suscrito a nuestro boletin informativo',
                icon: 'success'
              })
            }else{
              Swal.fire({
                title: 'Error',
                text: 'Debes ingresar un correo electronico valido',
                icon: 'error'
              })
            }
            setEmail("")
          }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

