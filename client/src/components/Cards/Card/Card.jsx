import React from "react";
import { Main, Name, Img } from "./styles.js";


const Card = ({id, name, stock, image , price}) => {
  return (
    <Main>
      <Img src={image} alt=''  />
      <Name>{name}</Name>
      <p><b>$ </b>{price}</p>
      <p>{stock} disponibles</p>
    </Main>
  )
}

export default Card;