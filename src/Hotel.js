import React, { Component } from 'react';

export default class Hotel extends Component {
  renderStars(n) {
    const stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<i key={i} className="fa fa-star star" aria-hidden="true"></i>)
    }
    return stars;
  }
  render() {
    const hotel = this.props.hotel;
    const backgroundImg = {
      backgroundImage: `url("/images/hotels/${hotel.image}")`
    } 
    return (
      <div className="card card-hotel">
        <div className="hotel-img" style={backgroundImg}></div>
        <div className="hotel-info">
          <div className="hotel-info-member hotel-name">{hotel.name}</div>
          <div className="hotel-info-member hotel-stars">
            {this.renderStars(hotel.stars)}
          </div>
          <div className="hotel-info-member hotel-amenities">
            {hotel.amenities.map((e, i) => {
              return <img key={i} src={`/images/amenities/${e}.svg`} className="amenity" alt="amenity" title={e}/>
            })}
          </div>
        </div>
        <div className="hotel-link">
          <div className="link-member link-title">
            <span>Precio por noche por</span>
            <br></br>
            <span>habitación</span>
          </div>
          <div className="link-member price">
            <span className="currency">ARS</span>
            <span className="amount">{hotel.price}</span>
          </div>
          <div>
            <a className="link-member link-button">Ver hotel</a>
          </div>
        </div>
      </div>
    );
  }
}