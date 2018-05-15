import React, { Component } from 'react';
import fetchFilmData from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import { connect } from 'react-redux';
import { addRecentFilms } from './../../actions/index';
import './App.css';

export class App extends Component {
  
  componentDidMount() {
    this.getRecentFilms()
  }

  async getRecentFilms() {
    const recentFilms = await fetchFilmData();
    const pageLoadFilms = cleanFilmData(recentFilms.results);
    this.props.handlePageLoadFilms(pageLoadFilms);
  }

  render() {
    return (
      <div className="App">
       HI
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handlePageLoadFilms: (pageLoadFilms) => dispatch(addRecentFilms(pageLoadFilms))
})

export default connect(null, mapDispatchToProps)(App);
