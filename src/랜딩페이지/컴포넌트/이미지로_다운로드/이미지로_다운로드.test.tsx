import { render, screen, fireEvent } from '@testing-library/react';

import 이미지로_다운로드 from 'src/랜딩페이지/컴포넌트/이미지로_다운로드';

jest.mock('html-to-image', () => ({
  toPng: async () => {},
}));

const ref = { current: document.createElement('a') };

test('이미지로_다운로드 컴포넌트', () => {
  render(<이미지로_다운로드 ref={ref} />);

  fireEvent.click(screen.getByRole('button'));
});
