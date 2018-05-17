import React, { Component } from 'react';
import { fetchRecentFilms } from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import { connect } from 'react-redux';
import { addRecentFilms } from './../../actions/index';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';

export class App extends Component {
  
  componentDidMount() {
    this.getRecentFilms()
  }

  async getRecentFilms() {
    const recentFilms = await fetchRecentFilms();
    const pageLoadFilms = cleanFilmData(recentFilms.results);
    this.props.handlePageLoadFilms(pageLoadFilms);
  }

  render() {
    return (
      <div className="App">
       
       <Login/>
       <Nav />

      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handlePageLoadFilms: (pageLoadFilms) => dispatch(addRecentFilms(pageLoadFilms))
})

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
