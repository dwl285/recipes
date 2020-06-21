import theme from "../styles/theme";

const RecipeTitle = (props) => (
  <div className="title_box">
    <h1>{props.recipe_title}</h1>
    <div className="info">
      <div className="info-left">
        <h2>{props.total_cook_time_mins} mins</h2>
      </div>
      <div className="info-right">
        <h2>Serves {props.serves}</h2>
      </div>
    </div>
    <style jsx>
      {`
        .title_box {
          margin: 16px;
          display: flex;
          flex-flow: column nowrap;
        }
        .info {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          height: 25px;
          margin: 16px 0px;
        }
        .info-left {
          margin: 0px;
        }
        .info-right {
          margin: 0px;
        }
        h2 {
          color: ${theme.colors.textSecondary};
          text-transform: uppercase;
        }
      `}
    </style>
  </div>
);

export default RecipeTitle;
