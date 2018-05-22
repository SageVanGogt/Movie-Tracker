import React from "react";
import { postFavoriteToDb, removeFavorite } from './../../apiCall/apiCall';
import { connect } from 'react-redux';
import { removeFavoriteFromStore, addFavoriteToStore, addError } from '../../actions/index';
import PropTypes from 'prop-types';
import './Card.css'

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
      className="favorite-button"
      type="button"
      onClick={() => {
        props.user.user_id ? 
        handleFavoriteClick()
        : 
        props.handleError("Sign in to add favorites")}
        }>
      Favorite
    </div>);
    
  const removeFavoriteBtn = (
    <div
      className="delete-button"
      type="button"
      onClick={ () => {
        props.user.user_id && handleDeleteClick()}
        }>
      Remove Favorite
    </div>);

  return (
    <div className="card">
      <div className="overview">
        <h2 className="movie-title">{title}</h2>
        <h4 className="movie-date">{release_date}</h4>
        <p>{overview}</p>
      </div>
      <div className="movie-img" style={{backgroundImage: `url(${poster_path})`}}>
        <div className="vote-avg-circle">
          <h4 className="avg-score">{vote_average}</h4>
        </div>
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
  handleAddFavorite: (favorite) => dispatch(addFavoriteToStore(favorite)),
  handleError: (error) => dispatch(addError(error))  
})

Card.propTypes = {
   movie_id: PropTypes.number,
   vote_average: PropTypes.number,
   title: PropTypes.string,
   poster_path: PropTypes.string,
   overview: PropTypes.string,
   release_date: PropTypes.number,
   handleAddFavorite: PropTypes.func,
   handleRemoveFavorite: PropTypes.func,
   user: PropTypes.object
  }

export default connect(mapStateToProps, mapDispatchToProps)(Card);
