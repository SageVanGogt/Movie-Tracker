import React from 'react';
import {connect} from "react-redux"
import Card from './../Card/Card'

const RecentMovies = (props) => {
  const {user, films} = props
  const allMovies = films.map(film => {
    return (
      <Card {...film}/>
    )
  })
  return (
    <div>
      {allMovies}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user,
  films: state.films
})

export default connect(mapStateToProps, null)(RecentMovies);