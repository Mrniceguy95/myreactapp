import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage'
import SharingApp from './components/appComponent/sharingApp'

function App () {
    return (
      <Router>
        <div className="root">
          <Header />

          <Route exact path='/' component={HomePage} />
          
          <Route exact path='/compartir' component={SharingApp}/>
          <Footer />
        </div>
      </Router>
    );
}

export default App;

