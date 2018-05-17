import React, { Component } from 'react';
import { fetchRecentFilms } from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import { connect } from 'react-redux';
import { addRecentFilms } from './../../actions/index';
import CreateNewUser from "./../CreateNewUser/CreateNewUser";
import UserLogin from './../UserLogin/UserLogin';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';

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
       <UserLogin/>
       <CreateNewUser />
       <Nav />

      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handlePageLoadFilms: (pageLoadFilms) => dispatch(addRecentFilms(pageLoadFilms))
})

export default connect(null, mapDispatchToProps)(App);
