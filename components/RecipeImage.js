import theme from "../styles/theme";

const RecipeImage = (props) => (
  <div className="recipe_image">
    <img src={props.image} alt={props.image}></img>
    <style jsx>
      {`
        .recipe_image {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
        }
        .recipe_image img {
          border-radius: 4px;
          max-width: 90%;
        }
      `}
    </style>
  </div>
);

export default RecipeImage;
