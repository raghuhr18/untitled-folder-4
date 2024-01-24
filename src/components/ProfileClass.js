import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        
        <h1>This is profile class component</h1>
        <h2>{count}</h2>
        <button onClick={() => {
            this.setState({count: count+1})
        }}>Click</button>
      </div>
    )
  }
}
export default ProfileClass;
