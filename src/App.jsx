import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    const boxes = [];                         //part 1 create a varible called boxes and assign an empty array
    const numBoxes = 24;                    //part 2 create variable numOfBoxes and assing it the number 24 so there are 24 boxes
    for (let i = 0; i < numBoxes; i++) {   //part 3 create loop
      boxes.push ({
        id:i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      });
    }

    // set default state
    this.state = {boxes: boxes,  };                //part 4 assign boxes to app state

    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleRandomize = this.handleRandomize.bind(this);
 
}

//part 5 create the handleBoxClick that takes html change event - event. with paramaters
handleBoxClick(event) {
  const newBoxes = this.state.boxes.map((box) => {      //part 5 create variable newBoxes and map
    if (box.id == event.target.id) {
      box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
    }
    return box;
    });
  this.setState({boxes: newBoxes});
}

//this is a bonus he showed in class for a "tid bit of fun"
handleRandomize() {
  const newBoxes = this.state.boxes.map((box) => {      
      box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      return box;
    });
  this.setState({boxes: newBoxes});
}


getRandomColor() {
  return Math.round(Math.random () *255);
}

  render() {
    const {boxes} = this.state;
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <button onClick={this.handleRandomize}>Randomize</button>
        <div 
          className="App"
          style={{
             display: "flex",
             justifyContent: "center",
             flexDirection: "row",
             width: "600px",
             margin: "0 auto",
             flexWrap: "wrap",
             textAlign: "center",
          }}
        >
          {boxes.map ((box) => {
            return (
              <Box
                box={box}           //event listener added style box is in box,jsx added the key too
                key={box.id}
                handleBoxClick={this.handleBoxClick}        
              />
            );
          })}
          </div>
      </main>
    );
  }
}

export default App;
