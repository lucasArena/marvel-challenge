import React from 'react';
import PropTypes from 'prop-types';

import { Container, StoryContent } from './styles';

export default function StoryCard({ story }) {
  return (
    <Container>
      <img
        src={`${story.thumbnail.path}/portrait_incredible.${story.thumbnail.extension}`}
        alt={story.title}
      />
      <StoryContent>
        <div>
          <div>
            <span>Titulo: </span>
            <span>{story.title}</span>
          </div>
          <div>
            <span>Numeros de pagína: </span>
            <span>{story.pageCount}</span>
          </div>
        </div>
        <div>
          <p>{story.description}</p>
        </div>
      </StoryContent>
    </Container>
  );
}

StoryCard.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    pageCount: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
