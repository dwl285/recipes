import theme from "../styles/theme";

const Method = (props) => (
  <div className="method">
    <h3>Method</h3>
    <ol>
      {props.method.map((item, index) => (
        <li>
          <h2>{index + 1}</h2>
          <p>{item}</p>
        </li>
      ))}
    </ol>
    <style jsx>
      {`
        .method {
          margin: 16px;
          display: flex;
          flex-flow: column nowrap;
        }
        h3 {
          padding: 0px;
          margin: 8px 0px;
        }
        ol {
          padding: 0px;
          list-style-type: none;
          margin: 8px 0px;
          display: flex;
          flex-flow: column nowrap;
        }
        li {
          margin: 8px 0px;
          display: flex;
          flex-flow: row nowrap;
          align-items: flex-start;
        }
        h2 {
          margin: 0px 16px 0px 0px;
        }
      `}
    </style>
  </div>
);

export default Method;
