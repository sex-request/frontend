import { render, screen, fireEvent } from '@testing-library/react';

import URL로_가져가기 from 'src/랜딩페이지/컴포넌트/URL로_가져가기';

window.prompt = jest.fn();

test('URL로_가져가기 컴포넌트', () => {
  render(<URL로_가져가기 />);

  fireEvent.click(screen.getByRole('button'));
});
