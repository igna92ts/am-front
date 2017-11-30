import React, { Component } from 'react';
import searchIcon from './images/search.svg';

export default class NameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }
  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    return (
      <div className="card card-filter filter-title">
        <div onClick={() => this.toggleExpand()}>
          <img className="filter-icon" src={searchIcon} alt='filter icon'/>
          Nombre del Hotel
        </div>
        <div className={ this.state.expanded ? 'filter-content filter-expanded' : 'filter-content'}>
          <div className="name-filter filter-inner">
            <input
              name="name"
              onChange={(event) => this.props.onChange(event)}
              className="form-control name-input"
            />
            <a  className="name-filter-btn" onClick={() => this.props.filterHandler()}>
            Aceptar
            </a>
          </div>
        </div>
      </div>
    );
  };
}
