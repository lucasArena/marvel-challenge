import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent, getByText } from '@testing-library/react';
import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should rende the tech list', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        techs: ['Node.js', 'ReactJS'],
      })
    );

    const { getByText, getByTestId } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  });

  it('should be able to add new Tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_TECH',
      payload: { tech: 'Node.js' },
    });
  });
});
