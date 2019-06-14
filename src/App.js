import React from 'react';
import Avatar from './components/Avatar'
import BadgeComponent from './components/BadgeComponent'

import './App.css';
import './BadgeComponent.css';


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Avatar/>
        </li>
        <li>
          Notifications <BadgeComponent/>
        </li>
      </ul>
    </div>
  );
}

export default App;
