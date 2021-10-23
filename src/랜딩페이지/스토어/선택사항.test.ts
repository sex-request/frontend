import { useAtom } from 'jotai';
import { renderHook, act } from '@testing-library/react-hooks';

import {
  날짜_스토어,
  날짜_사용함_스토어,
  시간_스토어,
  시간_사용함_스토어,
  장소_스토어,
  장소_사용함_스토어,
  약속_스토어,
  약속_사용함_스토어,
} from 'src/랜딩페이지/스토어/선택사항';

describe('선택사항', () => {
  const 비활성화: boolean = false;
  const 변경할_날짜: string = '2021-10-23';
  const 변경할_시간: string = '19:50';
  const 변경할_장소: string = '우리집';
  const 변경할_약속: string = '10분 이상 하겠습니다.';

  test('날짜_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(날짜_스토어));

    expect(result.current[0]).toBe('');
    act(() => result.current[1](변경할_날짜));
    expect(result.current[0]).toBe(변경할_날짜);
  });
  test('날짜_사용함_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(날짜_사용함_스토어));

    expect(result.current[0]).toBe(true);
    act(() => result.current[1](비활성화));
    expect(result.current[0]).toBe(비활성화);
  });

  test('시간_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(시간_스토어));

    expect(result.current[0]).toBe('');
    act(() => result.current[1](변경할_시간));
    expect(result.current[0]).toBe(변경할_시간);
  });
  test('시간_사용함_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(시간_사용함_스토어));

    expect(result.current[0]).toBe(true);
    act(() => result.current[1](비활성화));
    expect(result.current[0]).toBe(비활성화);
  });

  test('장소_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(장소_스토어));

    expect(result.current[0]).toBe('');
    act(() => result.current[1](변경할_장소));
    expect(result.current[0]).toBe(변경할_장소);
  });
  test('장소_사용함_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(장소_사용함_스토어));

    expect(result.current[0]).toBe(true);
    act(() => result.current[1](비활성화));
    expect(result.current[0]).toBe(비활성화);
  });

  test('약속_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(약속_스토어));

    expect(result.current[0]).toBe('');
    act(() => result.current[1](변경할_약속));
    expect(result.current[0]).toBe(변경할_약속);
  });
  test('약속_사용함_스토어 값을 변경하면 반영됩니다.', () => {
    const { result } = renderHook(() => useAtom(약속_사용함_스토어));

    expect(result.current[0]).toBe(true);
    act(() => result.current[1](비활성화));
    expect(result.current[0]).toBe(비활성화);
  });
});
