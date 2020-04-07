import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import SignIn from '~/pages/SignIn';

jest.mock('react-redux');

describe('Sign in page', () => {
  it('should be able to click login button', () => {
    const { getByTestId } = render(<SignIn />);
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    fireEvent.change(getByTestId('pubKey'), {
      target: { value: '4818cd87908c2a7c332cb73635269ed3' },
    });
    fireEvent.change(getByTestId('privKey'), {
      target: { value: 'e8f07b43482e336ddf5c5608cb33735a1d677317' },
    });
    fireEvent.submit(getByTestId('signin-form'));
    expect(dispatch).toHaveBeenCalled();
  });
});
