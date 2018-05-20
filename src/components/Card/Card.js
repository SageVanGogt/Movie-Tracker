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

  return (
    <div>
      <div>{vote_average}</div>
      <img src={poster_path}/>
      <h2>{title}</h2>
      <h4>{release_date}</h4>
      <div className="overview">
        <p>{overview}</p>
      </div>
      <div type="button" onClick={() => handleFavoriteClick()}>Favorite</div>
      <div type = "button"
      onClick = {
        () => handleDeleteClick()
      } > Remove Favorite </div>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  handleRemoveFavorite: (movieId) => dispatch(removeFavoriteFromStore(movieId)),
  handleAddFavorite: (favorite) => dispatch(addFavoriteToStore(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
