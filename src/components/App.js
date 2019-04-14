<<<<<<< HEAD:src/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import ReservationList from './Components/ReservationList';
=======
import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "..//styles/App.module.css";
import MainDisplay from "./MainDisplay";
>>>>>>> d5870bc119ab1e8106cabd438513919612735252:src/components/App.js

class App extends Component {
  render() {
    return (
<<<<<<< HEAD:src/App.js
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
=======
      <div className="App">
        <MainDisplay />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
>>>>>>> d5870bc119ab1e8106cabd438513919612735252:src/components/App.js
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ReservationList />
      </div>
    );
  }
}

export default App;
