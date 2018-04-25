import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './App.css';

class App extends Component {
  state = {
    isFlipped: false
  }

  handleToggleFlip(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <div style={styles.container}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div style={styles.card} key='front' onMouseEnter={(e) => this.handleToggleFlip(e)}>
            This is the front of the card.
          </div>

          <div style={styles.card} key='back' onMouseLeave={(e) => this.handleToggleFlip(e)}>
            This is the back of the card.
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 250
  },
  card: {
    border: '1px solid #eeeeee',
    borderRadius: 3,
    padding: 15,
    width: 250
  }
}

export default App;
