import React, { Component } from 'react';
import Categories from './categories/Categories';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
// import { error } from 'util';

class App extends Component {
  render() {
    const { loading, error } = this.props;
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
          </div>
        }
        {error && 
          <div className="error">
            {Array.isArray(error)
              ? <ul>error.map(err => <li>err</li>)</ul>
              : error.error ? error.error : error
            }
          </div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  null
) (App);