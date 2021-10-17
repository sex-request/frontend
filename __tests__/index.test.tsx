import React from 'react';
import { render } from '@testing-library/react';

import Home, { 값을_확인후_상태를_변경함_아님_말고 } from 'pages/index';

test('랜딩페이지', () => {
  render(<Home />);
});

test('값을 확인후 상태를 변경함', () => {
  const 값 = '값';
  const 값_변경_함수 = jest.fn();

  값을_확인후_상태를_변경함_아님_말고(값, 값_변경_함수);

  expect(값_변경_함수).toHaveBeenCalledWith(값);
});

test('값을 확인후 상태를 변경할때, 사용 여부 함수도 변경함', () => {
  const 값 = '값';
  const 값_변경_함수 = jest.fn();
  const 사용_여부_함수 = jest.fn();

  값을_확인후_상태를_변경함_아님_말고(값, 값_변경_함수, 사용_여부_함수);

  expect(값_변경_함수).toHaveBeenCalledWith(값);
  expect(사용_여부_함수).toHaveBeenCalledWith(true);
});

test('값이 null 이면 상태를 변경 안함', () => {
  const 값 = null;
  const 값_변경_함수 = jest.fn();
  값을_확인후_상태를_변경함_아님_말고(값, 값_변경_함수);

  expect(값_변경_함수).not.toHaveBeenCalled();
});
