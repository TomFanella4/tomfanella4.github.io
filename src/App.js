import React, { Component } from 'react';
import ResumeCard from './ResumeCard';

class App extends Component {

  resumeCards = [
    {
      title: 'MeetOver',
      subtitle: 'Connecting Professionals on the Fly',
      text: 'A project about improving a persons networking skills',
      link: 'https://github.com/TomFanella4/meetover',
      image: process.env.PUBLIC_URL + '/img/map.jpg',
      height: 370,
      width: 200,
      backPadding: 65
    },
    {
      title: 'Song Wars',
      subtitle: 'Songs battle for superiority!',
      text: 'This project encourages people to listen to lesser known songs and compare them to pop songs',
      link: 'https://github.com/TomFanella4/song-wars',
      image: process.env.PUBLIC_URL + '/img/songwars.jpg',
      height: 207,
      width: 400
    },
    {
      title: 'Degrees of Separation',
      subtitle: 'Get Connected',
      text: 'With this app you can view the friend-of-a-friend list of connections between two musicians',
      link: 'https://github.com/mpace965/degrees-of-separation',
      image: process.env.PUBLIC_URL + '/img/degrees.jpg',
      height: 207,
      width: 400
    },
    {
      title: 'React Trello',
      subtitle: 'A React Trello clone',
      text: 'A React clone of the collaborative task management tool Trello',
      link: 'https://github.com/TomFanella4/trello-react',
      demoLink: 'https://trello-react-fanella.herokuapp.com',
      image: process.env.PUBLIC_URL + '/img/trello-board.png',
      height: 207,
      width: 400
    },
    {
      title: 'Long Distance Bot',
      subtitle: 'Relationship Assistance',
      text: 'Ease the strain of your long distance relationship by setting up a reminder service using Facebook Messenger',
      link: 'https://github.com/TomFanella4/long-distance',
      image: process.env.PUBLIC_URL + '/img/long-distance.jpg',
      height: 320,
      width: 200,
      frontPadding: 52
    },
    {
      title: 'Purdue Menu',
      subtitle: 'Dining Court Menu',
      text: 'View the Purdue dining court menus on your pebble smartwatch',
      link: 'https://github.com/TomFanella4/Purdue-Menu',
      image: process.env.PUBLIC_URL + '/img/purdue-menu.jpg',
      height: 200,
      width: 350
    },
  ]

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
        {this.resumeCards.map(card => <ResumeCard key={card.title} card={card} />)}
      </div>
    );
  }
}

export default App;
