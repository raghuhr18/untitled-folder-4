import { Component } from "react";
import ProfileClass from "./ProfileClass";

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
        <ProfileClass name={"First child"}/>
        <ProfileClass name={"Second Child"}/>
        </>
    )
  }
}
export default About;