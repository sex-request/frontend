import { render, screen, fireEvent } from '@testing-library/react';

import Input from 'components/names/Input';

describe('names/input', () => {
  context('value가 변할 때', () => {
    const given = {
      value: '쥬니니',
      changeValue: 'juunini',
      onChange: jest.fn(() => {}),
    };

    it('onChange가 호출된다.', () => {
      render(<Input value={given.value} onChange={given.onChange} />);

      fireEvent.change(
        screen.getByRole('textbox'),
        { target: { value: given.changeValue } },
      );

      expect(given.onChange).toBeCalled();
    });
  });
});
