import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import { Container, Title } from './styles';

import CharacterCard from '~/components/CharacterCard';
import DashboardView from '~/components/DashboardView';

import history from '~/services/history';
import api from '~/services/api';

export default function Dashboard() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  async function loadCharacters(offset = 0, nameCharacter = null) {
    setLoading(true);
    const nameStartsWith = nameCharacter === '' ? null : nameCharacter;
    const response = await api.get('/characters', {
      params: {
        ...api.defaults.params,
        offset: offset * 5,
        limit: 5,
        nameStartsWith,
      },
    });

    const formattedResponse = response.data.results.map((c) => ({
      ...c,
      modified: format(parseISO(c.modified), 'dd/MM/yyyy HH:II:ss'),
    }));

    setTotal(response.data.total);
    setCharacters(formattedResponse);
    setLoading(false);
  }

  function handlePaginate(currentPage, filter) {
    loadCharacters(currentPage, filter);
  }

  function handleFilter(caracterFilter) {
    loadCharacters(0, caracterFilter);
  }

  useEffect(() => {
    loadCharacters(0, '');
  }, []);

  return (
    <Container>
      <DashboardView
        handlePaginate={handlePaginate}
        loading={loading}
        handleFilter={handleFilter}
        total={total}
      >
        <Title>
          <div>
            <span>Nome</span>
          </div>
          <div>
            <span>Decrição</span>
          </div>
          <div>
            <span>Última atualização</span>
          </div>
        </Title>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => history.push(`/character/${character.id}`)}
          />
        ))}
      </DashboardView>
    </Container>
  );
}
