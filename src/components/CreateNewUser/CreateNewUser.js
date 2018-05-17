import React, { Component } from "react";

class CreateNewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return (
      <form type="submit" onChange={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default CreateNewUser