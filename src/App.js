import React, { Component } from 'react';
import ResumeCard from './ResumeCard';

class App extends Component {

  resumeCards = {
    meetover: {
      title: 'MeetOver',
      subtitle: 'Connecting Professionals on the Fly',
      text: 'A project about improving a persons networking skills',
      link: 'https://github.com/TomFanella4/meetover',
      image: process.env.PUBLIC_URL + '/img/map.jpg',
      height: 370,
      width: 200
    },
    songwars: {
      title: 'Song Wars',
      subtitle: 'Songs battle for superiority!',
      text: 'This project encourages people to listen to lesser known songs and compare them to pop songs',
      link: 'https://github.com/TomFanella4/song-wars',
      image: process.env.PUBLIC_URL + '/img/songwars.jpg',
      height: 207,
      width: 400
    },
    degrees: {
      title: 'Degrees of Separation',
      subtitle: 'Get Connected',
      text: 'With this app you can view the friend-of-a-friend list of connections between two musicians',
      link: 'https://github.com/mpace965/degrees-of-separation',
      image: process.env.PUBLIC_URL + '/img/degrees.jpg',
      height: 207,
      width: 400
    },
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
        <ResumeCard card={this.resumeCards.meetover} />
        <ResumeCard card={this.resumeCards.songwars} />
        <ResumeCard card={this.resumeCards.degrees} />
      </div>
    );
  }
}

export default App;
