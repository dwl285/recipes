import Header from "./Header";
import { Container } from "react-bootstrap";

const Layout = props => (
  <Container>
    <Header title={props.title} />
    {props.children}
  </Container>
);
export default Layout;
