import { connect } from 'react-redux';
import React from 'react';
import { logOutUser} from '../../actions';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.css';


export const Nav = (props) => {
  return (
    <div className="nav-bar">
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/">Home</NavLink>
      { 
        props.user.user_id ? 
        <button
        onClick={props.handleLogout}
        >Sign Out</button>
        :
        <NavLink to="/login">Login</NavLink>
      }
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logOutUser())
})

export const mapStateToProps = (state) => ({
  user: state.user
})

Nav.propTypes = {
  handleLogout: PropTypes.func,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
