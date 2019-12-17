import React, {Component} from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" 
                  email="jdoe@gmail.com" 
                  phone="777-777-999" />
          <Contact name="Karen Smith" 
                  email="karens@gmail.com" 
                  phone="555-234-111" />
        </div>
      </div>
    );
  }
}

export default App;
