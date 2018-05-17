import React, { Component } from "react";
import { addUserFetch } from "../../apiCall/apiCall";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addUserFetch(this.state)
      this.setState({
        name: "",
        email: "",
        password: ""
      })
    } catch(err) {
      const error = "Failed to submit user data";
      throw error
    }
  };

  render() {
    return (
      <form type="submit" onSubmit={this.handleSubmit}>
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
         < input
         type = "submit"
         />
      </form>
    );
  }
}

export default CreateNewUser