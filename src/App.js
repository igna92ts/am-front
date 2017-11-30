import React, { Component } from 'react';
import NameFilter from './NameFilter';
import StarFilter from './StarFilter';
import Hotel from './Hotel';
import * as service from './service';

function NavBar() {
  return (
    <nav className="navbar navbar-static-top">
      <div className="container-fullwidth">
        <div className="navbar-header">
          <img src='/images/logo-almundo.svg' className="navbar-brand" alt="logo" />
        </div>
      </div>
    </nav>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      filters: {
        name: '',
        stars: []
      }
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    service.getHotels(this.state.filters).then(hotels => {
      this.setState({
        hotels
      });
    })
  }
  handleNameChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const filters = this.state.filters;
    const newFilters = Object.assign({}, filters, { name: value })
    this.setState({
      filters: newFilters
    });
  }
  handleStarChange(stars) {
    const filters = this.state.filters;
    const newFilters = Object.assign({}, filters, { stars })
    this.setState({
      filters: newFilters
    }, () => this.handleSearch());
  }
  handleSearch() {
    service.getHotels(this.state.filters).then(hotels => {
      this.setState({
        hotels
      });
    })
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="card-container">
          <div className="filter-container">
            <div className="card card-filter filter-section-title">
              Filtros
              <div className="filter-content"></div>
            </div>
            <NameFilter onChange={this.handleNameChange} filterHandler={() => this.handleSearch()}/>
            <StarFilter onChange={this.handleStarChange}/>
          </div>
          <div className="hotel-container">
            {this.state.hotels.map((hotel, index) => {
              return <Hotel key={index} hotel={hotel} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
