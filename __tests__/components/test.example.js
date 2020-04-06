import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '../../src/components/TechList';

describe('TeckList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add a new tech', () => {
    const { getByText, getByLabelText, getByTestId } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('should persist the added tech in the local storage', () => {
    let { getByLabelText, getByText, getByTestId } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();
    ({ getByTestId, getByLabelText, getByText } = render(<TechList />));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'techs',
      JSON.stringify(['Node.js'])
    );
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
});
