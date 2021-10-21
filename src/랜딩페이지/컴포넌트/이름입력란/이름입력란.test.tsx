import { render, fireEvent, screen } from '@testing-library/react';
import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';

describe('입력란 컴포넌트', () => {
  context('신청하는사람이 수정될 때', () => {
    const onChange: () => void = jest.fn();
    const 변경될_값: string = '쥬니니';

    it('신청하는사람_수정 함수가 호출됩니다.', () => {
      render(<이름입력란
        신청하는사람=""
        신청하는사람_수정={onChange}
        신청받는사람=""
        신청받는사람_수정={() => {}}
      />);

      fireEvent.change(
        screen.getAllByRole('textbox')[0],
        { target: { value: 변경될_값 } },
      );

      expect(onChange).toBeCalled();
    });
  });

  context('신청받는사람이 수정될 때', () => {
    const onChange: () => void = jest.fn();
    const 변경될_값: string = '쥬니니';

    it('신청받는사람_수정 함수가 호출됩니다.', () => {
      render(<이름입력란
        신청하는사람=""
        신청하는사람_수정={() => {}}
        신청받는사람=""
        신청받는사람_수정={onChange}
      />);

      fireEvent.change(
        screen.getAllByRole('textbox')[1],
        { target: { value: 변경될_값 } },
      );

      expect(onChange).toBeCalled();
    });
  });
});
