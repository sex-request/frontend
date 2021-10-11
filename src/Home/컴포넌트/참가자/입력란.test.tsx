import { render, fireEvent, screen } from '@testing-library/react';
import 입력란 from 'src/Home/컴포넌트/참가자/입력란';

describe('입력란 컴포넌트', () => {
  context('값이 바뀔 때', () => {
    const onChange: () => void = jest.fn();
    const 변경될_값: string = '쥬니니';

    it('onChange 함수가 호출됩니다.', () => {
      render(<입력란
        value=""
        onChange={onChange}
        onKeyUpEnter={() => {}}
      />);

      fireEvent.change(
        screen.getByRole('textbox'),
        { target: { value: 변경될_값 } },
      );

      expect(onChange).toBeCalled();
    });
  });

  context('엔터를 눌렀을 때', () => {
    const onKeyUpEnter: () => void = jest.fn();

    it('onKeyUpEnter 함수가 호출됩니다.', () => {
      render(<입력란
        value=""
        onChange={() => {}}
        onKeyUpEnter={onKeyUpEnter}
      />);

      fireEvent.keyUp(
        screen.getByRole('textbox'),
        { key: 'Enter' },
      );

      expect(onKeyUpEnter).toBeCalled();
    });
  });

  context('엔터가 아닌 키를 눌렀을 때', () => {
    const onKeyUpEnter: () => void = jest.fn();

    it('onKeyUpEnter 함수가 호출되지 않습니다.', () => {
      render(<입력란
        value=""
        onChange={() => {}}
        onKeyUpEnter={onKeyUpEnter}
      />);

      fireEvent.keyUp(
        screen.getByRole('textbox'),
        { key: 'Ctrl' },
      );

      expect(onKeyUpEnter).not.toBeCalled();
    });
  });
});
