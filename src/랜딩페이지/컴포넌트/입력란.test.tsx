import { render, fireEvent, screen } from '@testing-library/react';
import 입력란 from 'src/랜딩페이지/컴포넌트/입력란';

describe('입력란 컴포넌트', () => {
  context('값이 바뀔 때', () => {
    const onChange: () => void = jest.fn();
    const 변경될_값: string = '쥬니니';

    it('onChange 함수가 호출됩니다.', () => {
      render(<입력란
        value=""
        onChange={onChange}
      />);

      fireEvent.change(
        screen.getByRole('textbox'),
        { target: { value: 변경될_값 } },
      );

      expect(onChange).toBeCalled();
    });
  });
});
