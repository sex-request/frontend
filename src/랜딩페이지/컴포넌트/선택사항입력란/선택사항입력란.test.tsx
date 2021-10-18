import { render, screen, fireEvent } from '@testing-library/react';

import 선택사항입력란 from 'src/랜딩페이지/컴포넌트/선택사항입력란';

function renderInput({
  type = 'text',
  placeholder = '',
  onChange = () => {},
  onChecked = () => {},
}) {
  render((
    <선택사항입력란
      value=""
      type={type}
      placeholder={placeholder}
      disabled={false}
      labelText=""
      onChange={onChange}
      onChecked={onChecked}
    />
  ));
}
function renderTextarea({
  onChange = () => {},
  onChecked = () => {},
}) {
  render((
    <선택사항입력란
      type="textarea"
      value=""
      labelText=""
      disabled={false}
      onChange={onChange}
      onChecked={onChecked}
    />
  ));
}

describe('선택사항입력란 컴포넌트', () => {
  context('체크박스를 클릭할 때', () => {
    const onChecked: () => void = jest.fn();

    it('onChecked 함수를 호출합니다.', () => {
      renderInput({ onChecked });

      fireEvent.click(
        screen.getByRole('checkbox'),
      );

      expect(onChecked).toBeCalled();
    });
  });

  context('value가 변할 때', () => {
    const onChange: () => void = jest.fn();

    it('onChange 함수를 호출합니다.', () => {
      renderInput({
        type: 'time',
        placeholder: '15:45',
        onChange,
      });

      fireEvent.change(
        screen.getByDisplayValue(''),
        { target: { value: '15:45' } },
      );

      expect(onChange).toBeCalled();
    });
  });

  context('type이 textarea일 때', () => {
    it('input이 아닌 textarea 태그를 랜더링한다.', () => {
      renderTextarea({});

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    context('value가 변할 때', () => {
      const onChange: () => void = jest.fn();

      it('onChange 함수를 호출합니다.', () => {
        renderTextarea({ onChange });

        fireEvent.change(
          screen.getByRole('textbox'),
          { target: { value: '10분 이상 하곘습니다.' } },
        );

        expect(onChange).toBeCalled();
      });
    });
  });
});
