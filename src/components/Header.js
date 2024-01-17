import { LOGO_URL } from "../config";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
