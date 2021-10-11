import { render, fireEvent, screen } from '@testing-library/react';
import 입력란 from 'src/Home/컴포넌트/참가자/입력란';

describe('입력란 컴포넌트', () => {
  context('값이 바뀔 때', () => {
    const 주어진_값이_변할_때: () => void = jest.fn();
    const 주어진_변경된_값: string = '쥬니니';

    it('onChange 함수가 호출됩니다.', () => {
      render(<입력란
        value=""
        onChange={주어진_값이_변할_때}
        onKeyUpEnter={() => {}}
      />);

      fireEvent.change(
        screen.getByRole('textbox'),
        { target: { value: 주어진_변경된_값 } },
      );

      expect(주어진_값이_변할_때).toBeCalled();
    });
  });

  context('엔터를 눌렀을 때', () => {
    const 주어진_엔터를_누를_때: () => void = jest.fn();

    it('onKeyUpEnter 함수가 호출됩니다.', () => {
      render(<입력란
        value=""
        onChange={() => {}}
        onKeyUpEnter={주어진_엔터를_누를_때}
      />);

      fireEvent.keyDown(
        screen.getByRole('textbox'),
        { key: 'Enter' },
      );

      expect(주어진_엔터를_누를_때).toBeCalled();
    });
  });

  context('엔터가 아닌 키를 눌렀을 때', () => {
    const 주어진_엔터를_누를_때: () => void = jest.fn();

    it('onKeyUpEnter 함수가 호출되지 않습니다.', () => {
      render(<입력란
        value=""
        onChange={() => {}}
        onKeyUpEnter={주어진_엔터를_누를_때}
      />);

      fireEvent.keyDown(
        screen.getByRole('textbox'),
        { key: 'Ctrl' },
      );

      expect(주어진_엔터를_누를_때).not.toBeCalled();
    });
  });
});
