import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '../Card/Card';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.favorites = [];

  }

componentDidMount() {
  
}

render(){
  return(
    <div>favorites</div>
  )
} 
}

export default Favorites;