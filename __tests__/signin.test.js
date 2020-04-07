import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/dom';

import SignIn from '~/pages/SignIn';

describe('Sign in page', () => {
  it('should be able to click login button', () => {
    const { getByTestId, getByTest } = render(<SignIn />);

    fireEvent.change(getByTestId('pubKey'), {
      target: { value: '4818cd87908c2a7c332cb73635269ed3' },
    });
    fireEvent.change(getByTestId('privKey'), {
      target: { value: 'e8f07b43482e336ddf5c5608cb33735a1d677317' },
    });

    fireEvent.submit(getByTestId('signin-form'));

    expect();
  });
});
