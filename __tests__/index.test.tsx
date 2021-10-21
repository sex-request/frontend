import React from 'react';
import { render } from '@testing-library/react';

import Home from 'pages/index';

test('랜딩페이지', () => {
  render(<Home />);
});
