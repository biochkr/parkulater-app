import React, { Component } from "react";
import logo from "../assets/logo.svg";
import styles from "../styles/App.module.css";
import MainDisplay from "./MainDisplay";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <MainDisplay />
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
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
      </div>
    );
  }
}

export default App;
