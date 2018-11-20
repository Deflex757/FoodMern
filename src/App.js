import React, { Component } from 'react';
import './App.css';
import Plate from './components/plates.jsx';
import Dishes from './components/dishes.jsx';
class App extends Component {
  state = {
    dishes: [{ name: "Dish 1" }]
  }

  componentDidMount() {
    //axios request to go get dishes from api route
    //once you have them you set state
  }

  render() {
    return (
      <div className="App">
        <Plate dishes={this.state.dishes} />
        <Dishes />
      </div>
    );
  }
}

export default App;
