import React, { Component } from 'react';
import Restaurant from '../restaurant/restaurant.js';
import './restaurant-container.css';

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="restaurant-container-overlay">
      <h2 className="left-align">Restaurants list in {this.props.location}</h2>
      {this.props.restaurants.map((restaurant) => {
        return <Restaurant data={restaurant}></Restaurant>})}
      </div>
    );
  }
}

export default RestaurantContainer;
