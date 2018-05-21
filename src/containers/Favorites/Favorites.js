import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { getUserFavorites } from '../../apiCall/apiCall';
import { addFavoritesToStore } from './../../actions/index';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allFavorites = this.props.favorites.map(favorite => {
      return (<Card {...favorite} key={favorite.id}/>)
    })
    return (
      <div>
      { allFavorites }
      </div>
    )
  } 
}

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(Favorites);