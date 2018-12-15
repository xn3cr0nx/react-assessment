import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./Home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="home">
        <h2>Users</h2>
      </div>
    );
  }
}

Home.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Home;
