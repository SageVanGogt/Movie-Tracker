import React, { Component } from "react";
import { addUserFetch } from "../../apiCall/apiCall";
import { connect } from 'react-redux'
import { updateStoreUser } from './../../actions/index';
import PropTypes from 'prop-types';

export class CreateNewUser extends Component {
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
      const response = await addUserFetch(this.state)
      this.props.handleSignup({id: response.id, name: this.state.name})
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
          placeholder="name"          
        />
        <input
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
          placeholder="email"          
        />
        <input
          type="text"
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
  handleSignup:(user) => dispatch(updateStoreUser(user))
})

CreateNewUser.propTypes = {
  handleSignup: PropTypes.func,
  user: PropTypes.object
}

export default connect(null, mapDispatchToProps)(CreateNewUser)