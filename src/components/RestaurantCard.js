import React from "react";
import { BrowserRouter as Router , Route, Link } from "react-router-dom";

import data from "../data/data.json";
class RestaurantCard extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data,
    };
  }

  render() {
    return (
      <div className="cart">
        
        <center>
          <img
            className="thumbnail_image"
            src={this.props.thumbnail_image}
            alt={this.props.name}
          />

          <h3 id="hotel-title">{this.props.name}</h3>
          <p>Rating: {"★".repeat(this.props.rating)}</p>
          <p>price: {this.props.price}</p>
          <p>description: {this.props.description}</p>
        </center>
        <Link to ="/Order">
            <center>
            <button>Add to Cart</button>
            </center>
        </Link>
      </div>
    );
  }
}

export default RestaurantCard;