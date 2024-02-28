import { Component } from "react";
import ProfileClass from "./ProfileClass";
import userContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props)
      console.log("Parent Constructor")
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");

  }
  render(){
    console.log("Parent render");
    return(
      <>
        <h1>About Us Page</h1>
        <userContext.Consumer>
          {({user})=> <h4>{user.name} - {user.email}</h4>}
        </userContext.Consumer>


        <ProfileClass name={"First child"}/>

        </>
    )
  }
}
export default About;