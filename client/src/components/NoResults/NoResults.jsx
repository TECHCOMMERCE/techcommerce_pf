import React from "react";
import { Paragraph } from "../../styles/StyledComponents/Paragraph";
import { Wrapper } from "../../styles/StyledComponents/Wrapper";

const NoResults = () => {
  return (
    <Wrapper
      bground="transparent"
      height="fit-content"
      width="100%"
    >
      <Paragraph>No hay resultados...</Paragraph>      
    </Wrapper>
  );
};

export default NoResults;
