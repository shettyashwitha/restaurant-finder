import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
  render() {
    return (
        <div className = "restaurant-each-overlay">
          <img src="https://www.theriverside.co.uk/images/Inside-Restaurant.jpg" alt="res" className="restaurant-image"/>
          <div className="right-section">
            <div className="restaurant-name">Truffles<span>location address</span></div>
            <div className="user-rating"><span className="med-text">User rating: </span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <div className="small-text margin-down">4.3 average based on 213 reviews.</div>
            <div className="f15 margin-down"><span className="med-text">Address: </span>28, 4th 'B' Cross, Koramangala 5th Block, Bangalore</div>
            <div className="f15 margin-down"><span className="med-text">Cuisines: </span>American, Cafe, Burger, Steak</div>
            <div className="f15 margin-down"><span className="med-text">Price range: </span>20</div>
            <div className="online-delivery small-text">Available for online delivery?<span className="available"> Yes</span></div>
          </div>
        </div>
    );
  }
}

export default Restaurant;
