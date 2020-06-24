// styles/global.js
import css from "styled-jsx/css";
import theme from "./theme.js";

export default css.global`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    font-family: ${theme.fontFamily.sansSerif};
    margin: 0px;
    padding: 0px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
  }
  h1 {
    color: ${theme.colors.textPrimary};
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    /* or 111% */

    display: flex;
    align-items: center;
    letter-spacing: 0.035em;
    text-transform: capitalize;
    margin: 0px;
    padding: 0px;
  }
  h2 {
    color: ${theme.colors.textPrimary};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 25px;
    /* or 104% */

    display: flex;
    align-items: center;
    letter-spacing: 0.035em;
    text-transform: capitalize;
    margin: 0px;
    padding: 0px;
  }
  p {
    color: ${theme.colors.textPrimary};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
    padding: 0px;
  }

  input {
    font-size: 14px;
    font-style: normal;
    color: ${theme.colors.textSecondary};
  }
`;
