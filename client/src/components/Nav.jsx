import React from "react";
import "./Nav.css";

const Nav = ({ setStep }) => {
  return <h1 onClick={() => setStep(0)}>Travel Products</h1>;
};

export default Nav;
