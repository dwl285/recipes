import theme from "../styles/theme";

const RecipeImage = (props) => (
  <div className="recipe_image">
    <img src={props.image} alt={props.image}></img>
    <style jsx>
      {`
        .recipe_image {
          display: flex;
          max-height: ${props.height ? props.height : "300px"};
          max-width: ${props.height ? props.height : "300px"};
          width: auto;
          height: auto;
          justify-content: center;
          align-items: center;
        }
        .recipe_image img {
          margin: 10px;
          border-radius: 4px;
          max-width: 100%;
          max-height: 100%;
        }
      `}
    </style>
  </div>
);

export default RecipeImage;
