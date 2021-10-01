import { render, screen } from '@testing-library/react';

import Heading from 'components/index/Heading';

test('"섹스 신청서" 를 랜더링 합니다.', () => {
  render(<Heading />);

  screen.getByText('섹스 신청서');
});
