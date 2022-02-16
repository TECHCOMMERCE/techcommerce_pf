import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${({ color }) => color || "ghostwhite"};
  font-size: ${({ fSize }) => fSize || "1em"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({bground}) => bground || "transparent"};

  &.error {
    color: azure;
    padding: 5px 15px;
    border-radius: 25px;
    background: crimson;
  }
`;