import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

export default function Header(props) {
  const openRandom = async e => {
    e.preventDefault();
    const res = await fetch("/api/getRandomRecipe");
    const data = await res.json();
    Router.push("/r/[slug]", `/r/${data.slug}`);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="navbar-static-top"
    >
      <Navbar.Brand href="/">{props.siteTitle}</Navbar.Brand>
      <Nav>
        <Nav.Link href="#" onClick={openRandom}>
          Random Recipe
        </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="https://github.com/dwl285/recipes">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
