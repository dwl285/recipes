import Navbar from "./Navbar";
import Body from "./Body";
import globalStyles from "../styles/global.js";
import React from "react";

const Layout = (props) => (
  <div>
    <Navbar siteTitle={props.siteTitle} />
    <Body>{props.children}</Body>
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);
export default Layout;
