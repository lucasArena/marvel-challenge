import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Container, NameContainer } from './styles';

import history from '~/services/history';

import { storeRequest } from '~/store/modules/characters/actions';

export default function CharacterCard({ character, recentVisited }) {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);

  function handleCharacter(selectedCharacter) {
    const [savedCharacter] = characters.filter(
      (c) => c.id === selectedCharacter.id
    );

    if (!savedCharacter) {
      dispatch(storeRequest(selectedCharacter, characters));
    }

    const characterData = savedCharacter || selectedCharacter;

    history.push(`/character/${selectedCharacter.id}`, characterData);
  }

  return (
    <Container onClick={() => handleCharacter(character)}>
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
        <NameContainer>
          <span>{character.modified}</span>
          {recentVisited && <p>Recente</p>}
        </NameContainer>
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
  recentVisited: PropTypes.bool,
};

CharacterCard.defaultProps = {
  recentVisited: false,
};
