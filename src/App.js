import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage'
import SharingApp from './components/appComponent/sharingApp'

class App extends Component {
  constructor(prop) {
    super(prop)
    this.updateApp = this.updateApp.bind(this);
  }

  updateApp() {
    console.log('updated')
    this.forceUpdate()
  }

  render() {
    return (
      <Router>
        <div className="root">
          <Header />

          <Route exact path='/' component={HomePage} />
          
          <Route exact path='/compartir' 
            render={(prop) => <SharingApp {...prop} update={this.updateApp}/>}
          />

          <Footer />
        </div>
      </Router>
    )
  }  
}

export default App;

