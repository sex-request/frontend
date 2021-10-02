import { renderHook, act } from '@testing-library/react-hooks';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import {
  requestersStore,
  addRequester,
  removeRequester,
} from 'src/requesters.store';

afterEach(() => {
  const { result } = renderHook(() => useUpdateAtom(requestersStore));

  act(() => {
    result.current([]);
  });
});

describe('requesters store', () => {
  context('addRequester를 호출하면', () => {
    const given = {
      name: '쥬니니',
    };

    it('맨 마지막에 requester가 추가된다.', () => {
      const { result: names } = renderHook(() => useAtomValue(requestersStore));
      const { result: addName } = renderHook(() => useUpdateAtom(addRequester));

      act(() => {
        addName.current(given.name);
      });

      expect(names.current).toHaveLength(1);
      expect(names.current[names.current.length - 1]).toBe(given.name);
    });
  });

  context('removeRequester를 호출하면', () => {
    const given = {
      name1: '쥬니니',
      name2: 'juunini',
    };

    it('주어진 인덱스의 이름이 삭제된다.', () => {
      const { result: names } = renderHook(() => useAtomValue(requestersStore));
      const { result: addName } = renderHook(() => useUpdateAtom(addRequester));
      const { result: removeName } = renderHook(() => useUpdateAtom(removeRequester));

      act(() => {
        addName.current(given.name1);
        addName.current(given.name2);
      });

      expect(names.current).toHaveLength(2);
      expect(names.current[0]).toBe(given.name1);

      act(() => {
        removeName.current(0);
      });

      expect(names.current).toHaveLength(1);
      expect(names.current[0]).toBe(given.name2);
    });
  });
});
