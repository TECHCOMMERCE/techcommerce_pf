import React from 'react';

import {
  Container,
  Title,
  Subtitle
} from "../../assets/styles/Help/CardCategoryFilter.element"

const CardPolicies = ({name,subtitle}) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
};

export default CardPolicies;
