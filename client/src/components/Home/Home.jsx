import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Categories from "./Categories";
import Slider from "./Slider";

import { Newsletter } from "./Newsletter";
import NavBar from "../NavBar";

 

const Heading = styled.h1`
  align-items: center;
  text-align: center;
  padding: 30px;
`;



const Home = () => {
  return (
    <div>
      <NavBar/>
      <Slider></Slider>
      <Heading>Categories</Heading>
      <Categories></Categories>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
