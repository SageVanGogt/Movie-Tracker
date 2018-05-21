import React from 'react';
import { connect } from "react-redux";
import Card from './../../components/Card/Card';
import './RecentMovies.css'

const RecentMovies = (props) => {
  const {user, films} = props
  const allMovies = films.map(film => {
    return (
      <Card {...film} user={user} key={film.movie_id}/>
    )
  })
  return (
    < div className="movies-container" >
      {allMovies}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user,
  films: state.films
})

export default connect(mapStateToProps, null)(RecentMovies);