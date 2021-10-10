import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from 'pages/_error';

describe('404', () => {
  it('renders error page', () => {
    render(<Error />);

    screen.getByText('Error');
  });
});
