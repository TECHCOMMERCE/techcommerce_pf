import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  border-radius: ${({ bRadius }) => bRadius || "0"};
  height: ${({ height }) => height || "fit-content"};
  width: ${({ width }) => width || "fit-content"};
  background: ${({ bground }) => bground || "#2eb8b0"};
  background-size: cover;
  position: ${({ position }) => position};
  border: ${({ border }) => border && border};
`;