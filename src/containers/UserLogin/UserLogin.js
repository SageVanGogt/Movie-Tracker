import React, { Component } from "react";
import { fetchUser, getUserFavorites } from "../../apiCall/apiCall";
import { updateStoreUser, addFavoritesToStore, addError }
  from './../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './UserLogin.css';

export class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchUser(this.state);
      this.props.handleLogin(response.data);
      this.getFavorites(response.data);
    } catch (err) {
      const error = "Password does not match email";
      this.props.handleError(error);
    }
  };

  getFavorites = async (user) => {
    const favorites = await getUserFavorites(user.id);
    this.props.populateFavorites(favorites.data);
  }

  render() {
    return (
      <form 
        className="user-login-form"
        type="submit" 
        onSubmit={this.handleSubmit}
      >
        <h2 
          className = "login-header">LOGIN
        </h2>
        <input
          type="text"
          className = "form-field"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
          placeholder="email"
        />
        <input
          type="password"
          className = "form-field"
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
  handleLogin: (user) => dispatch(updateStoreUser(user)),
  populateFavorites: (movies) => dispatch(addFavoritesToStore(movies)),
  handleError: (error) => dispatch(addError(error))  
});

UserLogin.propTypes = {
  handleLogin: PropTypes.func,
  populateFavorites: PropTypes.func,
  handleError: PropTypes.func
};

export default connect(null, mapDispatchToProps)(UserLogin);