import React from 'react';
import PropTypes from 'prop-types';

import history from '~/services/history';

import { Container } from './styles';

export default function CharacterCard({ character }) {
  return (
    <Container
      onClick={() => history.push(`/character/${character.id}`, character)}
    >
      <div>
        <img
          src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
          alt="Logo"
        />
        <span>{character.name}</span>
      </div>
      <div>
        <span>
          {character.description
            ? `${character.description.substring(0, 70)}...`
            : '-'}
        </span>
      </div>
      <div>
        <span>{character.modified}</span>
      </div>
    </Container>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    modified: PropTypes.string.isRequired,
  }).isRequired,
};
