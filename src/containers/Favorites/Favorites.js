import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { getUserFavorites } from '../../apiCall/apiCall';
import { addFavoritesToStore } from './../../actions/index';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = async () => {
    const favorites = await getUserFavorites(this.props.user.user_id);
    this.props.populateFavorites(favorites.data)
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

export const mapDispatchToProps = (dispatch) => ({
  populateFavorites: (movies) => dispatch(addFavoritesToStore(movies))
})
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);