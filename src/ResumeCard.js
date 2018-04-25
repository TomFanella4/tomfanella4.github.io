import React, { Component } from 'react';
import { FlipCard } from 'react-flop-card';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';

class ResumeCard extends Component {
  state = {
    isFlipped: false
  }

  handleToggleFlip() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    const { card } = this.props;

    const cardFront = (
      <Card>
        <CardImg src={card.image} />
      </Card>
    )

    const cardBack = (
      <Card>
        <CardBody>
          <CardTitle>{card.title}</CardTitle>
          <CardSubtitle>{card.subtitle}</CardSubtitle>
          <CardText>{card.text}</CardText>
          <CardLink href={card.link} target='_blank'>View on Github</CardLink>
        </CardBody>
      </Card>
    )

    return (
        <FlipCard
          flipped={this.state.isFlipped}
          onMouseOver={() => this.handleToggleFlip()}
          onMouseOut={() => this.handleToggleFlip()}
          frontChild={cardFront}
          backChild={cardBack}
          height={card.height}
          width={card.width}
        />
    );
  }
}

export default ResumeCard;
