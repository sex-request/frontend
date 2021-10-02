import { renderHook, act } from '@testing-library/react-hooks';
import { useUpdateAtom } from 'jotai/utils';
import { render, screen, fireEvent } from '@testing-library/react';

import Receivers from 'src/Receivers.component';
import { receiversStore } from 'src/receivers.store';

afterEach(() => {
  const { result } = renderHook(() => useUpdateAtom(receiversStore));

  act(() => {
    result.current([]);
  });
});

describe('Receivers component', () => {
  context('추가 버튼을 클릭하면', () => {
    const given = {
      value: '쥬니니',
    };

    it('Input에 있던 이름이 텍스트로 추가된다.', () => {
      render(<Receivers />);

      fireEvent.change(screen.getByRole('textbox'), { target: { value: given.value } });
      fireEvent.click(screen.getByRole('button', { name: '추가' }));

      screen.getByText(given.value);
    });
  });

  context('삭제 버튼을 누르면 이름이 삭제된다.', () => {
    const given = {
      value: '쥬니니',
    };

    it('Input에 있던 이름이 텍스트로 추가된다.', () => {
      render(<Receivers />);

      fireEvent.change(screen.getByRole('textbox'), { target: { value: given.value } });
      fireEvent.click(screen.getByRole('button', { name: '추가' }));

      screen.getByText(given.value);

      // --- 테스트를 위한 준비 ---

      fireEvent.click(screen.getAllByRole('button', { name: '삭제' })[0]);

      expect(screen.queryByText(given.value)).toBeNull();
    });
  });
});
