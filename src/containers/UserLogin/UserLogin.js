import React, { Component } from "react";
import { fetchUser } from "../../apiCall/apiCall";
import { updateStoreUser } from './../../actions/index'
import { connect } from 'react-redux'

export class UserLogin extends Component {
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
      this.props.handleLogin(response.data)
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

export const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => dispatch(updateStoreUser(user))
})

export default connect(null, mapDispatchToProps)(UserLogin);