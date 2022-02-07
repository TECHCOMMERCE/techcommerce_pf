import React from "react";
import styled from "styled-components";
import { categories } from "../../assets/Imgs/data";
import mobile from "../../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
