import React, { Component } from 'react';
import PersonCard from "./components/PersonCard";
import Wrapper from "./components/Wrapper";
import person from "./person.json";
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

class App extends Component {

  state = {
    person: person,
    score: 0,
    randomNumber: 0
  }
 
  componentDidMount() {
    let random = Math.floor(Math.random() * 10) + 1;
    this.setState({
      randomNumber: random
    });
  }

  cardClickedOn = (id) => {
    if (id === this.state.randomNumber) {
      this.setState({
        score: this.state.score + 1
      });
      // was not sure how to reset the score
    // }else if (id === this.state.person.id) {
    //   this.setState({
    //     score: 0 
    //   })
    }

  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Are you my friend ?
        </p>
        {/* <Wrapper> */}
          <h1 className="title">List of Random People/ Things</h1>
          {/* <Counter /> */}
          <div>
          <p>Random Number: {this.state.randomNumber}</p>
          <p>Score: {this.state.score}</p>
          {this.state.person.map(person => (
            <PersonCard
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
              cardClickedOn={this.cardClickedOn} 
            />
          ))}
          </div>
        {/* </Wrapper> */}
      </div>
    );
  }
}

export default App;
