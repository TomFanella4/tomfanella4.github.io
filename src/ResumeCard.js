import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';

const ADDITIONAL_HEIGHT = /* padding */ 20 + /* margin */ 20 + /* text */ 20 + /* boarder */ 1
const ADDITIONAL_WIDTH = /* padding */ 20 + /* margin */ 20 + /* boarder */ 1

const CardFront = ({ card }) => (
  <Card style={{ height: card.height + ADDITIONAL_HEIGHT, width: card.width + ADDITIONAL_WIDTH }}>
    <CardBody>
      <CardTitle tag="h5">{card.title}</CardTitle>
      <CardImg src={card.image} style={{ maxHeight: card.height, maxWidth: card.width, width: 'auto' }} />
    </CardBody>
  </Card>
);

const CardBack = ({ card }) => (
  <Card style={{ height: card.height + ADDITIONAL_HEIGHT, width: card.width + ADDITIONAL_WIDTH }}>
    <CardBody>
      <CardTitle tag="h5">{card.title}</CardTitle>
      <CardSubtitle tag="h6">{card.subtitle}</CardSubtitle>
      <CardText>{card.text}</CardText>
      <CardLink href={card.link} target='_blank'>View on Github</CardLink>
      {card.demoLink && <CardLink href={card.demoLink} target='_blank'>Demo</CardLink>}
    </CardBody>
  </Card>
);

export const ResumeCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ margin: 20 }} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <ReactCardFlip isFlipped={isFlipped} >
        <CardFront card={card} />
        <CardBack card={card} />
      </ReactCardFlip>
    </div>
  );
}
