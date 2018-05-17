import { connect } from 'react-redux';
import React from 'react';
import { logOutUser} from '../../actions';

const Nav = (props) => {
  return (
    <div>
      <button
        onClick={props.handleLogout}
      
      >Sign Out</button>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logOutUser())
})

export default connect(null, mapDispatchToProps)(Nav);
