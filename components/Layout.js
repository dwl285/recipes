import Header from "./Header";
import Body from "./Body";
import globalStyles from "../styles/global.js";
import React from "react";

const Layout = (props) => (
  <div>
    <Header siteTitle={props.siteTitle} />
    <Body>{props.children}</Body>
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);
export default Layout;
