import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './Favorites.css';
import PropTypes from 'prop-types';

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

Favorites.propTypes = {
  error: PropTypes.string,
  favorites: PropTypes.array,
}

export default connect(mapStateToProps, null)(Favorites);