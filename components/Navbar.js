import React from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Logo from "./Logo.js";
import Shuffle from "./Shuffle.js";
import theme from "../styles/theme";

const openRandom = async (e) => {
  e.preventDefault();
  const res = await fetch("/api/getRandomRecipe");
  const data = await res.json();
  Router.push("/r/[slug]", `/r/${data._id}`);
};

const Navbar = (props) => (
  <nav className="main_nav">
    <div className="logo">
      <a href="/">
        <Logo title={props.siteTitle}></Logo>
      </a>
    </div>

    <div className="links">
      <div className="shuffle">
        <a href="#" onClick={openRandom}>
          <Shuffle></Shuffle>
        </a>
      </div>
    </div>
    <style jsx>
      {`
        .main_nav {
          background: ${theme.colors.brandSecondary};
          display: flex;
          height: 50px;
          padding: 8px;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          height: 50px;
          padding: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          text-decoration: none;
          display: flex;
        }
        .links {
          margin: 8px;
        }
        .shuffle {
          margin: 0px;
          padding: 0px;
          display: flex;
        }
      `}
    </style>
  </nav>
);

export default Navbar;
