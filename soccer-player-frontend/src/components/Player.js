import React from 'react';
import playerList from './playerList';

class Player extends React.Component{
  constructor() {
    super();

    this.state = {
      players: [],
      example: 'Here',
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/players')
    .then(data=>data.json())
    .then(players =>this.setState({ players }))
    console.log('from will');
    console.log(this.state.players);
  }
  componentDidMount(){
    console.log('from did');
    console.log(this.state.players);
  };



  testButton =(event) => {
    console.log(this.state.players)
  };

  // allPlayers = this.state.players[0].map(p, index=>{
  //     return (
  //     <li key={index+1}>
  //       <h1>{p.name}</h1>
  //       <h3>Number: {p.number} / Position: {p.position}</h3>
  //     </li>
  //   )
  // });

  handleDelete =(event) => {

  };

  handleUpdate =(event) => {

  };


  render() {
    console.log(this.state.players);
    console.log('from render');
    const player = this.state.players.map((p, index) =>
      <div>
        <li key={index}>
          <h1>{p.name}</h1>
          <h3>Number: {p.number} -- Position: {p.position}</h3>
        </li>
        <button onClick={this.testButton}>Test</button>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );

    return(
      <div>
      <ul>
      {player}
      </ul>
      </div>
    )

  }
}

export default Player;
