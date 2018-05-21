import React from "react";
import { postFavoriteToDb, removeFavorite } from './../../apiCall/apiCall';
import { connect } from 'react-redux';
import { removeFavoriteFromStore, addFavoriteToStore } from '../../actions/index';

export const Card = props => {
  const {
    movie_id,
    vote_average,
    title,
    poster_path,
    overview,
    release_date
  } = props;

  const handleDeleteClick = () => {
    removeFavorite({
      user_id: props.user.user_id,
      movie_id
    });
    props.handleRemoveFavorite(movie_id);
  }
  const handleFavoriteClick = () => {
    postFavoriteToDb(props, props.user)
    props.handleAddFavorite(props);
  }
  const movieIdArray = props.favorites.map(movie => movie.movie_id);
  const favoriteBtn = (
    <div
      type="button"
      onClick={() => handleFavoriteClick()}>
      Favorite
    </div>);
  const removeFavoriteBtn = (
    <div
      type="button"
      onClick={() => handleDeleteClick()}>
      Remove Favorite
    </div>);


  return (
    <div>
      <div>{vote_average}</div>
      <img src={poster_path} />
      <h2>{title}</h2>
      <h4>{release_date}</h4>
      <div className="overview">
        <p>{overview}</p>
      </div>
      {movieIdArray.includes(movie_id) ? removeFavoriteBtn : favoriteBtn}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  handleRemoveFavorite: (movieId) => dispatch(removeFavoriteFromStore(movieId)),
  handleAddFavorite: (favorite) => dispatch(addFavoriteToStore(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
