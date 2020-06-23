import theme from "../styles/theme";
import RecipeImage from "./RecipeImage";
import Link from "next/link";

const RecipeCard = (props) => (
  <div className="recipe_card">
    <Link href="/r/[slug]" as={`/r/${props.slug}`}>
      <a>
        <div className="card_content">
          <RecipeImage
            className="thumbnail_image"
            image={props.recipe.image}
            height="100px"
          ></RecipeImage>
          <h4>{props.recipe.title}</h4>
        </div>
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
        padding: 2%;
        margin: 2%;
        display: flex;
        flex-flow: column nowrap;
        width: 45%;
        justify-content: space-between;
      }
      .card_content {
        display: flex;
        width: 100%;
        flex-flow: column nowrap;
        align-self: flex-end;
      }
      h4 {
        margin: 0 auto;
        align-self: flex-end;
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
