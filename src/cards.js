import React from 'react';
import { Route, Link } from 'react-router-dom';

export const Cards = (props) => {
  const cards = props.ideas.map((idea, i) => <li key={i}>{idea.title}</li>)
  return (
    <div>
      {cards}
    </div>
  );
}
