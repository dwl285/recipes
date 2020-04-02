import Link from "next/link";
import { Nav, Container } from "react-bootstrap";

const Header = props => (
  <Container>
    <Nav bg="light" expand="lg">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/r/random">Random Recipe</Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
);

export default Header;
