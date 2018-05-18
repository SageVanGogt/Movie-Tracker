import React, { Component } from 'react';
import { fetchRecentFilms } from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import { connect } from 'react-redux';
import { addRecentFilms } from './../../actions/index';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import RecentMovies from '../RecentMovies/RecentMovies';

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
        <header> 
          <Nav />
        </header>
        <Switch>
          <Route 
            exact path="/login" 
            component={Login}
          />
          <Route 
            exact path="/" 
            component={RecentMovies}
          />
        </Switch>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
