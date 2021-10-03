import { render } from '@testing-library/react';

import Participants from 'src/Participants.component';

describe('Participants component', () => {
  test('render', () => {
    render(<Participants />);
  });
});
