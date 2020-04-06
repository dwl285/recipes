import Link from "next/link";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";

const RecipeGroup = props => (
  <Card>
    <Card.Header>{props.category}</Card.Header>
    <Card.Body>
      <ListGroup>
        {props.recipes.map(item => (
          <ListGroupItem key={item.recipe.data.title} action="true">
            <Link href="/r/[slug]" as={`/r/${item.slug}`}>
              <a>{item.recipe.data.title}</a>
            </Link>
            {`  `}
            <Badge pill variant="info">
              Cook time: {item.recipe.data.total_cook_time_mins} mins
            </Badge>
            {` `}
            <Badge pill variant="info">
              Serves: {item.recipe.data.serves}
            </Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card.Body>
  </Card>
);
export default RecipeGroup;
