import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/r/random">
      <a style={linkStyle}>Random Recipe</a>
    </Link>
  </div>
);

export default Header;
