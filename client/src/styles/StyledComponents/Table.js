import styled from "styled-components";

export const StyledTable = styled.table`
  // custom css goes here
  color: ${({ color }) => color || "black"};
  background: ${({ bGround }) => bGround || "ghostwhite"};
  border-radius: ${({ bRadius }) => bRadius || "5px"};
  padding: ${({ padding }) => padding || "0"};
`;

export const THead = styled.thead`
  // custom css goes here
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
  // custom css goes here
  text-align: ${({ tAlign }) => tAlign || "left"};
`;

export const TR = styled.tr`
  // custom css goes here
`;

export const TH = styled.th`
  // custom css goes here
  text-align: ${({ tAlign }) => tAlign || "left"};
  color: ${({ color }) => color || "black"};
  `;

export const TD = styled.td`
  // custom css goes here
  text-align: ${({ tAlign }) => tAlign || "left"};
  font-size: ${({ fSize }) => fSize || "1rem"};
  color: ${({ color }) => color || "black"};

  &.btn {
    cursor: pointer;
  }
`;
