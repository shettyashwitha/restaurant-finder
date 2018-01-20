import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const restaurant = this.props.data.restaurant;
    console.log(restaurant);
    return (
        <div className = "restaurant-each-overlay">
          <img src={restaurant.thumb} alt={restaurant.name} className="restaurant-image"/>
          <div className="right-section">
            <div className="restaurant-name">{restaurant.name}<span>location address</span></div>
            <div className="user-rating"><span className="med-text">User rating: </span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <div className="small-text margin-down">{restaurant.user_rating.aggregate_rating} average based on {restaurant.user_rating.votes} reviews.</div>
            <div className="f15 margin-down"><span className="med-text">Address: </span>{restaurant.location.address}</div>
            <div className="f15 margin-down"><span className="med-text">Cuisines: </span>{restaurant.cuisines}</div>
            <div className="f15 margin-down"><span className="med-text">Price range: </span>{restaurant.price_range}</div>
            <div className="online-delivery small-text">Available for online delivery?<span className="available"> {restaurant.has_online_delivery === 0 ? 'Yes' : 'No'}</span></div>
          </div>
        </div>
    );
  }
}

export default Restaurant;
