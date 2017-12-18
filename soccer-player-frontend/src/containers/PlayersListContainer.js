import React from 'react'
import Form from '../components/Form'
import Player from '../components/Player'


class PlayersListContainer extends React.Component {
  render () {
    return (
      <div>
        <Form />
        <ul>
            <Player />
        </ul>
      </div>
    )
  }
}


export default PlayersListContainer;
