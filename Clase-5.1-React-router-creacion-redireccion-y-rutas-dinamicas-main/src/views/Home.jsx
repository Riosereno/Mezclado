import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      {/* Redireccionamiento Visual */}
      {/* <a href="/about">Go to About</a>
      <br /> */}
    </>
  );
};

export default Home;
