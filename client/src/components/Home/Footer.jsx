import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mobile from "../../responsive";
import {Link} from "react-router-dom";

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
  ContactItem,
  Payment
} from '../../assets/styles/Footer.elements'


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tech-C</Logo>
        <Description>

        Tech-C is a technology-oriented E-commerce that offers a wide variety of quality and high-end products.
        Sit down and browse our online store.

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
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem><a href="http://localhost:3000/">Home</a></ListItem>
          <ListItem><a href="http://localhost:3000/products">Productos</a></ListItem>
          <ListItem><a href="http://localhost:3000/register">Register</a></ListItem>
          <ListItem><a href="http://localhost:3000/login">Login</a></ListItem>
          <ListItem><Link to="/dashboard">Dashboard</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT US</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "20px" }} /> xxxxxxxxxxxxxxxx,
         xxxxxxxxxxxxxx.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "20px" }} /> (+xxx) xxxxxxxxxxx
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "20px" }} /> xxxxxxxx@xxxxxxxxxxxxxxxx
        </ContactItem>
        <Payment src="https://icon-library.com/images/discover-credit-card-icon/discover-credit-card-icon-7.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
