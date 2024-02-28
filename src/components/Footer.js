import { useContext } from "react";
import userContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(userContext);
  return (
    <>
        <h1>Footer</h1>
        <h4>{user.name} - {user.email}</h4>
    </>
  )

};

export default Footer;
