import React from "react";
import { postFavoriteToDb, removeFavorite } from './../../apiCall/apiCall';
import { connect } from 'react-redux';

export const Card = props => {
  const {
    movie_id,
    vote_average,
    title,
    poster_path,
    overview,
    release_date
  } = props;
  

  return (
    <div>
      <div>{vote_average}</div>
      <img src={poster_path}/>
      <h2>{title}</h2>
      <h4>{release_date}</h4>
      <div className="overview">
        <p>{overview}</p>
      </div>
      <div type="button" onClick={() => postFavoriteToDb(props, props.user)}>Favorite</div>
      <div type = "button"
      onClick = {
        () => removeFavorite({user_id: props.user.user_id,  movie_id })
      } > Remove Favorite </div>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Card);
