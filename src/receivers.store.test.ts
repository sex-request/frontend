import { renderHook, act } from '@testing-library/react-hooks';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import {
  receiversStore,
  addReceiver,
  removeReceiver,
} from 'src/receivers.store';

afterEach(() => {
  const { result } = renderHook(() => useUpdateAtom(receiversStore));

  act(() => {
    result.current([]);
  });
});

describe('receivers store', () => {
  context('addReceiver를 호출하면', () => {
    const given = {
      name: '쥬니니',
    };

    it('맨 마지막에 Receiver가 추가된다.', () => {
      const { result: names } = renderHook(() => useAtomValue(receiversStore));
      const { result: addName } = renderHook(() => useUpdateAtom(addReceiver));

      act(() => {
        addName.current(given.name);
      });

      expect(names.current).toHaveLength(1);
      expect(names.current[names.current.length - 1]).toBe(given.name);
    });
  });

  context('removeReceiver를 호출하면', () => {
    const given = {
      name1: '쥬니니',
      name2: 'juunini',
    };

    it('주어진 인덱스의 이름이 삭제된다.', () => {
      const { result: names } = renderHook(() => useAtomValue(receiversStore));
      const { result: addName } = renderHook(() => useUpdateAtom(addReceiver));
      const { result: removeName } = renderHook(() => useUpdateAtom(removeReceiver));

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
