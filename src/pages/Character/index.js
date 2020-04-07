import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Main } from './styles';

import StoryCard from '~/components/StoryCard';
import Loading from '~/components/Loading';

import api from '~/services/api';

export default function Character({ location: { state: character } }) {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadComics() {
      setLoading(true);
      const response = await api.get(`/characters/${character.id}/comics`, {
        params: {
          ...api.defaults.params,
        },
      });

      setComics(response.data.results);
      setLoading(false);
    }

    loadComics();
  }, [character.id]);

  return (
    <Container>
      <Main>
        <img
          src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <div>
          <span>{character.name}</span>
          <p>{character.description}</p>
        </div>
      </Main>
      <h1>Fasiculos</h1>
      {loading ? (
        <Loading size={64} color="#666" />
      ) : (
        comics.map((story) => (
          <StoryCard key={story.id} story={story} target="_blank" />
        ))
      )}
    </Container>
  );
}

Character.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
