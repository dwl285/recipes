import Link from "next/link";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col
} from "react-bootstrap";

const RecipeGroup = props => (
  <Card>
    <Card.Header>{props.category}</Card.Header>
    <Card.Body>
      <ListGroup>
        {props.recipes.map(item => (
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
                      Cook time: {item.recipe.data.total_cook_time_mins} mins
                    </Badge>
                  </Col>
                  <Col>
                    <Badge pill variant="info">
                      Serves: {item.recipe.data.serves}
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
