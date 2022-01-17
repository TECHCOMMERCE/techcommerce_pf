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

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column " })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  background-color: #${(props) => props.color};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tech-C</Logo>
        <Description>
        Aca va la descripcion
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
          <ListItem>Home aca van los link de las paginas </ListItem>
          <ListItem>xxxx</ListItem>
          <ListItem>xxxxxx</ListItem>
          <ListItem>xxxxxx</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>xxxx</ListItem>
          <ListItem>xx</ListItem>
          <ListItem>xx</ListItem>
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
