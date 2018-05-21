import React, { Component } from 'react';
import { fetchRecentFilms, getUserFavorites } from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import { connect } from 'react-redux';
import { addRecentFilms, addFavoritesToStore } from './../../actions/index';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Login from '../../components/Login/Login';
import RecentMovies from '../RecentMovies/RecentMovies';
import Favorites from '../Favorites/Favorites';

export class App extends Component {
  
  componentDidMount() {
    this.getRecentFilms()
  }

  async getRecentFilms() {
    const recentFilms = await fetchRecentFilms();
    const pageLoadFilms = cleanFilmData(recentFilms.results);
    this.props.handlePageLoadFilms(pageLoadFilms);
  }

  getFavorites = async () => {
    if (this.props.user.name) {
      const favorites = await getUserFavorites(this.props.user.user_id);
      this.props.populateFavorites(favorites.data)
    }
  }

  render() {
    {this.getFavorites()}
    return (
      <div className="App">
        <header> 
          <Nav />
        </header>
        <Switch>
          <Route 
            exact path="/login" 
            render= {() => (
              this.props.user.user_id ?
              <Redirect to="/" /> :
              <Login />
            )}
          />
          <Route 
            exact path="/" 
            component={RecentMovies}
          />
          <Route 
            exact path="/favorites"
            component={Favorites}/>
        </Switch>
      </div> 
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handlePageLoadFilms: (pageLoadFilms) => dispatch(addRecentFilms(pageLoadFilms)),
  populateFavorites: (movies) => dispatch(addFavoritesToStore(movies))
})

export const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
