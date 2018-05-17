import React, { Component } from "react";
import { fetchUsers } from "../../apiCall/apiCall";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    console.log(this.state)
    try {
      const response = await fetchUsers(this.state)
      console.log(response)
      this.setState({
        email: "",
        password: ""
      })
    } catch(err) {
      const error = "Failed to grab user data";
      throw error
    }
  };

  render() {
    return (
      <form type="submit" onSubmit={this.handleSubmit}>
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

export default UserLogin