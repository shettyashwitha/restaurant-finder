import React, { Component } from 'react';
import RestaurantContainer from './restaurant-container/restaurant-container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantContainer></RestaurantContainer>
      </div>
    );
  }
}

export default App;
