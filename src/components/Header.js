import { LOGO_URL } from "../config";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img alt="food" src={LOGO_URL} />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="navItems">
        <ul>
          <Link to="/">
            <li>Home Page</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
