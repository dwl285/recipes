import Link from "next/link";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import Person from "./Person";
import Stopwatch from "./Stopwatch";

const RecipeGroup = (props) => (
  <Card>
    <Card.Header>{props.category}</Card.Header>
    <Card.Body>
      <ListGroup>
        {props.recipes.map((item) => (
          <ListGroupItem key={item.recipe.data.title} action="true">
            <Row>
              <Col>
                <Link href="/r/[slug]" as={`/r/${item.slug}`}>
                  <a>{item.recipe.data.title}</a>
                </Link>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Badge pill variant="info">
                      <Stopwatch></Stopwatch>
                      {` `}
                      {item.recipe.data.total_cook_time_mins}
                    </Badge>
                  </Col>
                  <Col>
                    <Badge pill variant="info">
                      <Person></Person>
                      {` `} {item.recipe.data.serves}
                    </Badge>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card.Body>
  </Card>
);
export default RecipeGroup;