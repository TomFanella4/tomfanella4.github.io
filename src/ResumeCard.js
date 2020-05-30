import React, { Component } from 'react';
import { FlipCard } from 'react-flop-card';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';

class ResumeCard extends Component {
  state = {
    isFlipped: false
  }
  additionalHeight = /* padding */ 40 + /* margin */ 40 + /* text */ 20 + /* boarder */ 1
  additionalWidth = /* padding */ 40 + /* margin */ 20 + /* boarder */ 1

  handleToggleFlip() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    const { card } = this.props;

    const cardFront = (
      <Card style={{ padding: 20, margin: "20px 10px 20px 10px" }}>
        <CardTitle>{card.title}</CardTitle>
        <CardImg src={card.image} />
      </Card>
    )

    const cardBack = (
      <Card style={{ alignSelf: "center" }}>
        <CardBody>
          <CardTitle>{card.title}</CardTitle>
          <CardSubtitle>{card.subtitle}</CardSubtitle>
          <CardText>{card.text}</CardText>
          <CardLink href={card.link} target='_blank'>View on Github</CardLink>
          {card.demoLink && <CardLink href={card.demoLink} target='_blank'>Demo</CardLink>}
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
        height={card.height + this.additionalHeight}
        width={card.width + this.additionalWidth}
        style={{ back: { display: "grid" } }}
      />
    );
  }
}

export default ResumeCard;
