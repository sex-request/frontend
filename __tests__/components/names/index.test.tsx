import { render, screen, fireEvent } from '@testing-library/react';

import Names from 'components/names';

const buttonLabel = {
  add: '추가',
  remove: '삭제',
};

describe('names', () => {
  context('추가 버튼을 클릭했을 때', () => {
    const given = {
      value: '쥬니니',
      names: [],
      onChange: jest.fn(),
      onAdd: jest.fn(),
      onRemove: jest.fn(),
    };

    it('onAdd가 호출된다.', () => {
      render(<Names
        value={given.value}
        names={given.names}
        onChange={given.onChange}
        onAdd={given.onAdd}
        onRemove={given.onRemove}
      />);

      fireEvent.click(screen.getByRole('button', { name: buttonLabel.add }));

      expect(given.onAdd).toBeCalled();
    });
  });

  context('삭제 버튼을 클릭했을 때', () => {
    const given = {
      value: '',
      names: ['쥬니니'],
      onChange: jest.fn(),
      onAdd: jest.fn(),
      onRemove: jest.fn(),
    };

    it('onRemove가 호출된다.', () => {
      render(<Names
        value={given.value}
        names={given.names}
        onChange={given.onChange}
        onAdd={given.onAdd}
        onRemove={given.onRemove}
      />);

      fireEvent.click(screen.getByRole('button', { name: buttonLabel.remove }));

      expect(given.onRemove).toBeCalled();
    });
  });
});
