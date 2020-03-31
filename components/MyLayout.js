import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <>
    <head>
      <>
        <link
          href="path/to/node_modules/normalize.css/normalize.css"
          rel="stylesheet"
        />
        <link
          href="path/to/node_modules/@blueprintjs/core/lib/css/blueprint.css"
          rel="stylesheet"
        />
        <link
          href="path/to/node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"
          rel="stylesheet"
        />
      </>
    </head>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </>
);

export default Layout;
