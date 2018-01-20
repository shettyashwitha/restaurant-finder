import React, { Component } from 'react';
import RestaurantContainer from './restaurant-container/restaurant-container.js';
import logo from './bg-image.jpg';
import './App.css';
import MapWithAMarker from './google-map';
import AutoComplete from './auto-complete';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restuarantList: [],
      zomatoUrl: 'https://developers.zomato.com/api/v2.1/geocode',
      zomatoUserKey: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Restaurant Finder</h1>
          <div className="search-container">
            <AutoComplete loadRestuarantList = {this.loadRestuarantList.bind(this)}/>
          </div>
        </header>
        <RestaurantContainer restaurants = { this.state.restuarantList }></RestaurantContainer>
      </div>
    );
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
  
  parseJSON(response) {
    return response.json()
  }

  loadRestuarantList(latLng){
    console.log('latLng', latLng);
    const url = this.state.zomatoUrl + '?lat='+ latLng.lat +'&lon='+ latLng.lng;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': this.state.zomatoUserKey
      }
    })
    .then(this.checkStatus)
    .then(this.parseJSON)
    .then((resp)=>{
      console.log(resp);
      const restuarantList = resp.nearby_restaurants;
      this.setState({'restuarantList': restuarantList});
    })

  }
}

export default App;
