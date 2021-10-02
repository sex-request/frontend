import { renderHook, act } from '@testing-library/react-hooks';
import { useAtom } from 'jotai';

import requesters from 'src/requesters.store';

describe('requesters store', () => {
  context('requester를 추가하면', () => {
    const given = {
      name: '쥬니니',
    };

    it('맨 마지막에 requester가 추가된다.', () => {
      const { result } = renderHook(() => useAtom(requesters));
      const [, addName] = result.current;

      act(() => {
        addName('');
        addName(given.name);
      });

      const [names] = result.current;

      expect(names.pop()).toBe(given.name);
    });
  });
});
