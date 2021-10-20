import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Home, { 기본값_설정 } from 'pages/index';

jest.mock('html-to-image', () => ({
  toPng: async () => {},
}));

test('랜딩페이지', () => {
  render(<Home />);

  fireEvent.click(screen.getByRole('button', { name: '이미지로 다운로드' }));
});

test('값을 확인후 상태를 변경함', () => {
  const 값 = '값';
  const 값_변경_함수 = jest.fn();

  기본값_설정(값, 값_변경_함수);

  expect(값_변경_함수).toHaveBeenCalledWith(값);
});

test('값을 확인후 상태를 변경할때, 사용 여부 함수도 변경함', () => {
  const 값 = '값';
  const 값_변경_함수 = jest.fn();
  const 사용_여부_함수 = jest.fn();

  기본값_설정(값, 값_변경_함수, 사용_여부_함수);

  expect(값_변경_함수).toHaveBeenCalledWith(값);
  expect(사용_여부_함수).toHaveBeenCalledWith(true);
});

test('값이 null 이면 상태를 변경 안함', () => {
  const 값 = null;
  const 값_변경_함수 = jest.fn();
  기본값_설정(값, 값_변경_함수);

  expect(값_변경_함수).not.toHaveBeenCalled();
});
