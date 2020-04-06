import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { Container } from './styles';

export default function TechList() {
  const dispatch = useDispatch();

  const techs = useSelector((state) => state.techs);
  const [newTech, setNewTech] = useState([]);

  function handleAddTech() {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } });
    setNewTech('');
  }

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
