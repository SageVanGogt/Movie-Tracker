import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '../Card/Card';
import { getUserFavorites } from '../../apiCall/apiCall';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }

  }

componentDidMount() {
 this.populateFavorites();
}

populateFavorites = async () => {
  debugger 
  const favorites = await getUserFavorites(this.props.user.user_id);
  this.setState({
    favorites
  })
}

render(){
  return(
    <div>favorites</div>
  )
} 
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Favorites);