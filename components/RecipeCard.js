import theme from "../styles/theme";
import RecipeImage from "./RecipeImage";
import Link from "next/link";

const RecipeCard = (props) => (
  <div className="recipe_card">
    <Link href="/r/[slug]" as={`/r/${props.slug}`}>
      <a>
        <RecipeImage
          className="thumbnail_image"
          image={props.recipe.image}
          height="100px"
        ></RecipeImage>
        <h4>{props.recipe.title}</h4>
      </a>
    </Link>
    <div className="info">
      <div className="info-left">
        <p>{props.recipe.total_cook_time_mins} mins</p>
      </div>
      <div className="info-right">
        <p>Serves {props.recipe.serves}</p>
      </div>
    </div>
    <style jsx>{`
      .recipe_card {
        border: 3px solid ${theme.colors.brandSecondary};
        border-radius: 4px;
        background: ${theme.colors.backgroundSecondary};
        padding: 8px;
        margin: 8px;
        display: flex;
        flex-flow: column nowrap;
        flex-basis: 40%;
        justify-content: space-between;
      }
      h4 {
        margin: 8px 0px;
      }
      a {
        text-decoration: none;
      }
      .info {
        display: flex;
        justify-content: space-between;
      }
      p {
        color: ${theme.colors.brandSecondary};
      }
    `}</style>
  </div>
);

export default RecipeCard;
