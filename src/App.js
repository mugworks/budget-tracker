import React, { Component } from 'react';
import Categories from './categories/Categories';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Categories!</h1>
        </header>
        <Categories/>
        {loading &&
          <div className="loader">
            Loading...
          </div>}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading
  }),
  null
) (App);