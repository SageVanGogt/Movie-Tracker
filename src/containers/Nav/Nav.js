import { connect } from 'react-redux';
import React from 'react';
import { logOutUser} from '../../actions';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      { 
        props.user.user_id ? 
        <button
        onClick={props.handleLogout}
        >Sign Out</button>
        :
        <NavLink to="/login">Login/Sign up</NavLink>
      }
      <NavLink to="/favorites">Favorites</NavLink>
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