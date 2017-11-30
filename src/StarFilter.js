import React, { Component } from 'react';
import starIcon from './images/star.svg';

export default class StarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      checkedStars: []
    }
  }
  renderStars(n) {
    const stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<img key={i} className="filter-icon" src={starIcon} alt='filter icon'/>)
    }
    return stars;
  }
  renderCheckBoxes() {
    const stars = [];
    for (let i = 5; i >= 1; i--) {
      stars.push(
        <label key={i}>
          <input
            onChange={(event) => this.handleChange(event)}
            type="checkbox"
            value={i}
          /> {this.renderStars(i)}
        </label>
      )
    }
    return stars;
  }
  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded,
      checkedStars: this.state.checkedStars
    })
  }
  handleChange(event) {
    let stars = this.state.checkedStars.slice();
    const newStar = parseInt(event.target.value);
    if (stars.some(s => s === newStar)) {
      stars = stars.filter(s => s !== newStar);
    } else {
      stars.push(newStar);
    }
    this.setState({
      expanded: this.state.expanded,
      checkedStars: stars
    })
    this.props.onChange(stars);
  }
  render() {
    return (
      <div className="card card-filter filter-title">
        <div onClick={() => this.toggleExpand()}>
          <img className="filter-icon" src={starIcon} alt='filter icon'/>
          Estrellas
        </div>
        <div className={ this.state.expanded ? 'filter-content filter-expanded' : 'filter-content'}>
          <div className="star-filter filter-inner">
            {this.renderCheckBoxes()}
          </div>
        </div>
      </div>
    );
  };
}
