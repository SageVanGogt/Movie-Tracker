import React, { Component } from "react";
import { addUserFetch, validateEmail } from "../../apiCall/apiCall";
import { connect } from 'react-redux';
import { updateStoreUser, addError } from './../../actions/index';
import PropTypes from 'prop-types';
import './CreateNewUser.css';

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
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  checkValidEmail = async (event) => {
    event.preventDefault();    
    const actual = await validateEmail(this.state.email);
    if (actual.isValid) {
      this.handleSubmit();
    } else {
      this.props.handleError('That email is not valid') ;
    }
  };

  handleSubmit = async () => {
    const response = await addUserFetch(this.state);
    if (response.id) {
      this.props.handleSignup({id: response.id, name: this.state.name});
    } else if (response.error) {
      this.props.handleError("Email already in use");
    }
  };

  render() {
    return (
      <form 
        type="submit"
        className="new-user-form border" 
        onSubmit={this.checkValidEmail}
      >
        <h2 className="login-header">SIGN UP</h2>
        <input
          className = "form-field"
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          placeholder="name"          
        />
        <input
          className="form-field"
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
          placeholder="email"          
        />
        <input
          className="form-field"
          type="text"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
          placeholder="password"          
        />
        <input
          className = "submit-button"
          type = "submit"
        />
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleSignup:(user) => dispatch(updateStoreUser(user)),
  handleError: (error) => dispatch(addError(error))    
});

CreateNewUser.propTypes = {
  handleSignup: PropTypes.func,
<<<<<<< HEAD
  user: PropTypes.object
};
=======
  user: PropTypes.object,
  error: PropTypes.string,
  handleError: PropTypes.func
}
>>>>>>> Add proptypes and fixed api test

export default connect(null, mapDispatchToProps)(CreateNewUser);