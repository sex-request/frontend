import { render, fireEvent, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useAtomValue } from 'jotai/utils';

import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';
import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';

describe('입력란 컴포넌트', () => {
  context('신청하는사람이 수정될 때', () => {
    const 변경될_값: string = '쥬니니';

    it('신청하는사람_수정 함수가 호출됩니다.', () => {
      const { result } = renderHook(() => useAtomValue(신청하는사람_스토어));
      render(<이름입력란 />);

      expect(result.current).toBe('');

      fireEvent.change(
        screen.getAllByRole('textbox')[0],
        { target: { value: 변경될_값 } },
      );

      expect(result.current).toBe(변경될_값);
    });
  });

  context('신청받는사람이 수정될 때', () => {
    const 변경될_값: string = '쥬니니';

    it('신청받는사람_수정 함수가 호출됩니다.', () => {
      const { result } = renderHook(() => useAtomValue(신청받는사람_스토어));
      render(<이름입력란 />);

      expect(result.current).toBe('');

      fireEvent.change(
        screen.getAllByRole('textbox')[1],
        { target: { value: 변경될_값 } },
      );

      expect(result.current).toBe(변경될_값);
    });
  });
});
