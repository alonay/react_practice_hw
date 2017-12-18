import React from 'react';

class Form extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      position: "",
      number: "",
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.event,
    })
  }
  render() {
    return(
      <div>
      <form>
        Name: <input type="text" value={this.state.name} />
        <br></br>
        Position: <input type="select"></input>
        <br></br>
        Number: <input type="text"/>
        <submit>Submit</submit>
      </form>
      </div>
    )
  }
}

export default Form;
