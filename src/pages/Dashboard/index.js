import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';

import { Container, Title, VisitedCharacter } from './styles';

import CharacterCard from '~/components/CharacterCard';
import DashboardView from '~/components/DashboardView';

import api from '~/services/api';

export default function Dashboard() {
  const reduxCharacters = useSelector((state) => state.characters.items);

  const [characters, setCharacters] = useState([]);
  const [visitedCharacters, setVisitedCharacters] = useState(reduxCharacters);
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

    const allCharacters = formattedResponse.filter(
      (c) => !visitedCharacters.some((e) => e.id === c.id)
    );

    setTotal(response.data.total);
    setCharacters(allCharacters);
    setLoading(false);
  }

  function handlePaginate(currentPage, filter) {
    if (currentPage !== 0) {
      setVisitedCharacters([]);
    } else {
      setVisitedCharacters(reduxCharacters);
    }
    loadCharacters(currentPage, filter);
  }

  function handleFilter(caracterFilter) {
    loadCharacters(0, caracterFilter);
  }

  useEffect(() => {
    loadCharacters(0, '');
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <DashboardView
        handlePaginate={handlePaginate}
        loading={loading}
        handleFilter={handleFilter}
        total={total}
      >
        <>
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
          <VisitedCharacter>
            {visitedCharacters.map((visitedCharacter) => (
              <CharacterCard
                key={visitedCharacter.id}
                character={visitedCharacter}
                recentVisited
              />
            ))}
          </VisitedCharacter>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </>
      </DashboardView>
    </Container>
  );
}
