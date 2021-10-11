import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from 'pages/404';

describe('404', () => {
  it('renders not found page', () => {
    render(<NotFound />);

    screen.getByText('Not Found');
  });
});
