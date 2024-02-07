import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "",                    
      }
    };
    console.log(this.props.name + "- Constructor");
  }
  
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/raghuhr18");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    
    this.timer = setInterval(() => {
      console.log("say Hello");
    },1000);

    console.log(this.props.name + "- Component Did Mount");
  }
  componentDidUpdate(prevState, prevProps) {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + "- render");
    return (
      <div>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h1>This is profile class component {this.props.name}</h1>
      </div>
    )
  }
}
export default ProfileClass;
