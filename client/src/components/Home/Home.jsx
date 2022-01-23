import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Categories from "./Categories";
import Header from "./Header";
import Slider from "./Slider";

import { Newsletter } from "./Newsletter";

 

const Heading = styled.h1`
  align-items: center;
  text-align: center;
  padding: 30px;
`;



const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Heading>Categories</Heading>
      <Categories></Categories>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
