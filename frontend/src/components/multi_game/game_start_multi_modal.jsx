import React from 'react';
import socketIOClient from 'socket.io-client';

class GameStartMultiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: 3,
      twoPlayers: false,
      // socket: socketIOClient("http://127.0.0.1:5000"),
      socket: socketIOClient("https://typefighter.herokuapp.com"),
     }
  }

  openSocket() {
    this.state.socket.on("lobby", twoPlayers => {
      if (twoPlayers && (this.props.gameRoom.player2Id === null)) {
        // this.setState({ twoPlayers })
        this.props.fetchGameRooms()
      }
    })
    this.state.socket.emit("lobby");
  }

  componentDidMount() {
    this.openSocket();
  }

  countdown() {
    let timer = setInterval(() => {
      if (this.state.time > 1) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }))
      } else if (this.state.time === 1) {
        this.setState({ time: 'TYPE!!!!!' })
      } else {
        this.props.closeModal();
        clearInterval(timer);
      }
    }, 1000);
  }

  componentDidUpdate() {
    // this.state.twoPlayers
    let {gameRoom} = this.props;
    if ( (gameRoom.player2Id && gameRoom.player1Id )&& this.state.time === 3) {
      this.countdown();
    }
  }

  componentWillUnmount() {
    this.state.socket.disconnect();
  }

  render() {
    let { gameRoom } = this.props;
    // (!this.state.twoPlayers)
    const display = !(gameRoom.player2Id && gameRoom.player1Id) ? <div>
      <div className='gamestart-multi__modal-text'>waiting for</div> < br /> <div>challenger...</div>
    </div> : <div>
      {this.state.time}
    </div> 
    return (
      <div className='gamestart-multi__modal-container'>
        <div className='gamestart-multi__modal-header'>
          {display}
        </div>
      </div>
    )
  }
}

export default GameStartMultiModal;
