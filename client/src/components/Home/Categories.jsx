import React from "react";
import styled from "styled-components";
import { categories } from "../../assets/Imgs/data";
import mobile from "../../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
   display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
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
