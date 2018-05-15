import React, { Component } from 'react';
import fetchFilmData from './../../apiCall/apiCall';
import cleanFilmData from './../../helper/helper';
import * as actions from './../../actions/index';
import './App.css';

class App extends Component {
  
  async componentDidMount() {
    const recentFilms = await fetchFilmData();
    const pageLoadFilms = cleanFilmData(recentFilms);
    this.props.addRecentFilms(pageLoadFilms);
  }

  render() {
    return (
      <div className="App">
       HI
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  addRecentFilms: (pageLoadFilms) => dispatch(action.addRecentFilms(pageLoadFilms))
}

export default App;
