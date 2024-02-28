import { LOGO_URL } from "../config";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useContext } from "react";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="food" src={LOGO_URL} />
  </a>
);

const Header = () => {

  const { user } = useContext(userContext);
  return (
    <div className="flex justify-between bg-gray-300 shadow-md">
      <Title />
      <div className="py-10 px-2">{user?.name}</div>
      <div className="navItems">
        <ul className="flex py-10 px-2 font-bold">

          <Link to="/">
            <li className="px-2">Home Page</li>
          </Link>
          <Link to="about">
            <li className="px-2">About</li>
          </Link>
          <Link to="contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
