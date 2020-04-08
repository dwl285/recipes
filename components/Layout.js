import Header from "./Header";
import { Container } from "react-bootstrap";
import React, { Fragment } from "react";

const Layout = props => (
  <Fragment>
    <Header siteTitle={props.siteTitle} />
    <Container>{props.children}</Container>
  </Fragment>
);
export default Layout;
