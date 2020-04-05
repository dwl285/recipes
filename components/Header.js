import { Nav, Container } from "react-bootstrap";
import React, { Component } from "react";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

export default () => {
  const openRandom = async e => {
    e.preventDefault();
    const res = await fetch("https://32-recipes.com/api/getRandomRecipe");
    const data = await res.json();
    Router.push("/r/[slug]", `/r/${data.slug}`);
  };

  return (
    <Container>
      <Nav bg="light" expand="lg">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" onClick={openRandom}>
            Random Recipe
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};
