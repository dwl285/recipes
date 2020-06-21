import theme from "../styles/theme";

const Logo = (props) => (
  <h3>
    {props.title}
    <style jsx>
      {`
        h3 {
          color: ${theme.colors.brandPrimary};
        }
      `}
    </style>
  </h3>
);

export default Logo;
