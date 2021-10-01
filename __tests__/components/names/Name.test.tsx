import { render, screen, fireEvent } from '@testing-library/react';

import Name from 'components/Names/Name';

describe('names/Name', () => {
  context('버튼을 클릭했을 때', () => {
    const given = {
      value: '쥬니니',
      onRemove: jest.fn(),
    };

    it('onRemove가 호출된다.', () => {
      render(<Name value={given.value} onRemove={given.onRemove} />);

      fireEvent.click(screen.getByRole('button'));

      expect(given.onRemove).toBeCalled();
    });
  });
});
