import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './Favorites.css';

export class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allFavorites = this.props.favorites.map(favorite => {
      return (<Card {...favorite} key={favorite.movie_id}/>);
    });
    return (
      < div className = "favorites-container" >
        { allFavorites }
      </div>
    );
  } 
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(Favorites);