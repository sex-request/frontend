import { render, screen, fireEvent } from '@testing-library/react';

import 이미지를_클립보드로_가져가기 from 'src/랜딩페이지/컴포넌트/이미지를_클립보드로_가져가기';

jest.mock('html2canvas', () => () => Promise.resolve({
  toBlob: (callback: () => void) => callback(),
}));
jest.mock('clipboard-polyfill', () => ({
  ClipboardItem: class {},
  write: () => Promise.resolve(),
}));

const ref = { current: document.createElement('a') };

test('이미지를_클립보드로_가져가기 컴포넌트', () => {
  render(<이미지를_클립보드로_가져가기 ref={ref} />);

  fireEvent.click(screen.getByRole('button'));
});
