import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <h1>Shows!!</h1>
    <input type="text" placeholder="search" />
    <Link to="/search">Or browse our collection</Link>
  </div>
);

export default Landing;
