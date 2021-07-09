import React from 'react';
import './App.css';
import profile from './resources/profile.jpg';
import Nav from './components/Nav.js';

import HomePage from './pages/HomePage.js';
import ErrorPage from './pages/ErrorPage.js';

function App() {
  function showPage(path) {
    switch (path) {
      case '/': {
        return (
          <HomePage />
        );
      } break;
      case '/about': {

      } break;
      case '/resume': {

      } break;
      case '/thoughts': {

      } break;
      case '/contact': {

      } break;
      default: {
        return (
          <ErrorPage>
            <h2 style={{color: 'red', fontSize: "60px", margin: 0}}>404</h2>
            <p>This page does not exist. Use the links on the side to go to a page that does.</p>
          </ErrorPage>
        );
      }
    }
  }

  return (
    <div className="App">
      <Nav 
        imgurl={profile}
        name="Kevin Chen"
        bioquote="SWE Intern @ Meals4Families"
      />

      <main>
        {showPage(window.location.pathname)}
      </main>
    </div>
  );
}

export default App;
