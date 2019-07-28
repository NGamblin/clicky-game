import React from "react";
import Card from "./components/cards"
import Navbar from "./components/navbar/"
import cards from "./cards.json"
// import Wrapper from "./components/Wrapper"

let currentScore = 0;
class App extends React.Component {

  state = {
    cards,
    currentScore
  }

  handleCardClicked = id => {
    console.log("Clicked: " + id)


    currentScore++;
    this.setState({ currentScore })
  } 

  
  render(){
  return (
    <div>
      <Navbar
      currentScore= {this.state.currentScore}
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
