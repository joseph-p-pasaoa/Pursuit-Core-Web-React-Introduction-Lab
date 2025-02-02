/*
Joseph P. Pasaoa
Contacts Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
import ContactUserCard from './ContactUserCard';
    // css
// import '../../Styles/Sitewide.css';
import './Contacts.css';
    // helpers
// const { log, data } = require('../utils/helpers.js');


/* COMPONENT */
class Contacts extends React.Component {
  render() {
    return (
      <div className="comp-container" id="comp-contacts">
        <div className="comp" id="contacts">
          <h2>Contacts</h2>
            <div id="all-contacts">
              <ContactUserCard />
              <ContactUserCard />
              <ContactUserCard />
              <ContactUserCard />
              <ContactUserCard />
            </div>
        </div>
      </div>
    )
  }
}


export default Contacts;
