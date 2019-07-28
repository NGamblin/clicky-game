import React from "react";
import Card from "./components/cards"
import Navbar from "./components/navbar/"
import cards from "./cards.json"
// import Wrapper from "./components/Wrapper"

class App extends React.Component {

  state = {
    cards,
    currentScore: 0
  }

  handleCardClicked = id => {
    console.log("Clicked: " + id)
    this.setState({ currentScore: this.state.currentScore + 1 })
    this.setState({cards: this.state.cards.sort(function(a, b) {
      return 0.5 - Math.random();
    })
  })}


  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
        />
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            handleCardClicked={this.handleCardClicked}
          />
        ))}
      </div>
    );
  }
}
export default App;
