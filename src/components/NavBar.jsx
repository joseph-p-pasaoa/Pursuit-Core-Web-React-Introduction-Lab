/*
Joseph P. Pasaoa
NavBar Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
    // css
// import '../../Styles/Sitewide.css';
import './NavBar.css';
    // helpers
// const { log, data } = require('../utils/helpers.js');


/* COMPONENT */
class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <button type="button" id="btnWhat" name="btnWhat">What is Pursuit?</button>
        <button type="button" id="btnCreate" name="btnCreate">Create an account</button>
        <button type="button" id="btnSign" name="btnSign">Sign in</button>
      </div>
    )
  }
}


export default NavBar;
