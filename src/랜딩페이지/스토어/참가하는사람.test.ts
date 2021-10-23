import { useAtom } from 'jotai';
import { renderHook, act } from '@testing-library/react-hooks';

import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';

describe('참가하는사람', () => {
  const 변경할_이름: string = '쥬니니';

  test('신청하는사람_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(신청하는사람_스토어));

    expect(result.current[0]).toBe('');

    act(() => result.current[1](변경할_이름));

    expect(result.current[0]).toBe(변경할_이름);
  });

  test('신청하는사람_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(신청받는사람_스토어));

    expect(result.current[0]).toBe('');

    act(() => result.current[1](변경할_이름));

    expect(result.current[0]).toBe(변경할_이름);
  });
});
