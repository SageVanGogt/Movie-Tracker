import React, { Component } from "react";
import { fetchUser } from "../../apiCall/apiCall";

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
    try {
      const response = await fetchUser(this.state)
      this.setState({
        email: "",
        password: ""
      })
      console.log(response.data)
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
          placeholder="email"
        />
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
          placeholder="password"          
        />
         < input
         type = "submit"
         />
      </form>
    );
  }
}

export default UserLogin;