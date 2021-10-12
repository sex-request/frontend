import { render, screen, fireEvent } from '@testing-library/react';
import 시간입력란 from 'src/랜딩페이지/컴포넌트/시간입력란';

describe('시간 컴포넌트', () => {
  context('체크박스를 클릭할 때', () => {
    const onChecked: () => void = jest.fn();

    it('onChecked 함수를 호출합니다.', () => {
      render(<시간입력란
        시간=""
        disabled={false}
        onChange={() => {}}
        onChecked={onChecked}
      />);

      fireEvent.click(
        screen.getByRole('checkbox'),
      );

      expect(onChecked).toBeCalled();
    });
  });

  context('시간이 수정될 때', () => {
    const onChange: () => void = jest.fn();

    it('onChange 함수를 호출합니다.', () => {
      render(<시간입력란
        시간=""
        disabled={false}
        onChange={onChange}
        onChecked={() => {}}
      />);

      fireEvent.change(
        screen.getByDisplayValue(''),
        { target: { value: '15:45' } },
      );

      expect(onChange).toBeCalled();
    });
  });
});
