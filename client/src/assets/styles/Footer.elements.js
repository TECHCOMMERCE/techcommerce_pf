import styled from "styled-components";
import mobile, {laptop} from "../../responsive";
export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column " })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ fontSize: "48px" })}
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ fontSize: "35px",flexDirection: "column", margin: "10px"   })}
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  ${mobile({ fontSize: "60px",flexDirection: "column", margin: "10px"   })} })}`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ fontSize: "20px", flexDirection: "column", justifyContent: "center", margin: "10px" })}
`;
export const ListItem = styled.a`
  width: 50%;
  margin-bottom: 10px;
 ${mobile({ fontSize: "20px", margin: "10px" })}
 @media screen and (max-width: 960px){
  width: 100%;
  margin:"10px";
  }
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;
export const Logo = styled.h1``;
export const Description = styled.p`
  margin: 20px 0;
  ${mobile({ fontSize: "48px" })}
`;

export const SocialContainer = styled.div`
  display: flex;
  ${mobile({ fontSize: "48px" })}
`;
export const SocialIcon = styled.div`
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
  ${mobile({ fontSize: "48px" })}
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "48px" })}
`;
export const Payment = styled.img`
  width: 50%;
  ${mobile({ fontSize: "48px" })}
  @media screen and (max-width: 960px){
  width: 100%;
  margin:"10px";
  }
`;
