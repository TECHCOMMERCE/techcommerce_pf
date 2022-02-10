import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React from "react";

import {
  Container,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  Payment
} from '../../assets/styles/Footer.elements'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tech-C</Logo>
        <Description>
        Tech-C es un E-commerce orientado a la tecnología que ofrece una amplia variedad de productos de calidad y alta gama.
        Siéntate y navega por nuestra tienda online.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="e4405F">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedIn></LinkedIn>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Rutas Utiles:</Title>
        <List>
          <ListItem href="/">Inicio</ListItem>
          <ListItem href="/products">Productos</ListItem>
          <ListItem href="/register">Registrarse </ListItem>
          <ListItem href="/login">acceso</ListItem>
          <ListItem href="/dashboard">Tablero de mandos</ListItem>
          <ListItem href="/ayuda">  Ayuda </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Pagos con:</Title>
        <Payment src="https://icon-library.com/images/discover-credit-card-icon/discover-credit-card-icon-7.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
