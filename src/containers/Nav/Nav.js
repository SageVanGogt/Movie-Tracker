import { connect } from 'react-redux';
import React from 'react';
import { logOutUser} from '../../actions';
import {NavLink} from 'react-router-dom';
import './Nav.css'


const Nav = (props) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
