import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const restaurant = this.props.data.restaurant;
    const positiveRatings = Math.round(restaurant.user_rating.aggregate_rating);
    const noRatings = 5 - positiveRatings;
    console.log(positiveRatings, noRatings);
    return (
        <div className = "restaurant-each-overlay">
          <img src={restaurant.thumb} alt={restaurant.name} className="restaurant-image"/>
          <div className="right-section">
            <div className="restaurant-name">{restaurant.name}<span>{restaurant.location.locality}</span></div>
            <div className="user-rating"><span className="med-text">User rating: </span>
              {[...Array(positiveRatings)].map((e, i) => <span className="fa fa-star checked" key={i}></span>)}
              {[...Array(noRatings)].map((e, i) => <span className="fa fa-star" key={i}></span>)}
            </div>
            <div className="small-text margin-down">{restaurant.user_rating.aggregate_rating} average based on {restaurant.user_rating.votes} reviews.</div>
            <div className="f15 margin-down"><span className="med-text">Address: </span>{restaurant.location.address}</div>
            <div className="f15 margin-down"><span className="med-text">Cuisines: </span>{restaurant.cuisines}</div>
            <div className="f15 margin-down"><span className="med-text">Price range: </span>{restaurant.price_range}</div>
            <div className="online-delivery small-text">Available for online delivery?<span className={restaurant.has_online_delivery === 0 ? 'not-available' : 'available'}> {restaurant.has_online_delivery === 0 ? 'No' : 'Yes'}</span></div>
            {restaurant.has_table_booking === 1 ? <span className="button-book-table"><a href={restaurant.book_url}>BOOK</a></span> : ''}
          </div>
        </div>
    );
  }
}

export default Restaurant;
