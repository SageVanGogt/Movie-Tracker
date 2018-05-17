import React, { Component } from 'react';
import { fetchRecentFilms } from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import { connect } from 'react-redux';
import { addRecentFilms } from './../../actions/index';
import CreateNewUser from "./../CreateNewUser/CreateNewUser";
import UserLogin from './../UserLogin/UserLogin';
import './App.css';

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
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handlePageLoadFilms: (pageLoadFilms) => dispatch(addRecentFilms(pageLoadFilms))
})

export default connect(null, mapDispatchToProps)(App);
