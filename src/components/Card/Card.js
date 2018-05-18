import React from "react";

const Card = props => {
  const {
    id,
    vote_average,
    title,
    poster_path,
    overview,
    release_date
  } = props;
  return (
    <div>
      <div>{vote_average}</div>
      <img src={poster_path} />
      <h2>{title}</h2>
      <h4>{release_date}</h4>
      <div className="overview">
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Card;
