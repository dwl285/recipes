import theme from "../styles/theme";

const Ingredients = (props) => (
  <div className="ingredients">
    <h3>Ingredients</h3>
    <ul>
      {props.ingredients.map((item) => (
        <li>
          <p>{item}</p>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        .ingredients {
          margin: 16px;
          display: flex;
          flex-flow: column nowrap;
        }
        h3 {
          padding: 0px;
          margin: 8px 0px;
        }
        ul {
          padding: 0px;
          list-style-type: none;
          margin: 0px;
        }
        li {
          margin: 0px;
        }
      `}
    </style>
  </div>
);

export default Ingredients;
