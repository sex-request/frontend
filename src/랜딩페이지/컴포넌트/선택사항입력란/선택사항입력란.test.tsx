import type { Type } from 'src/랜딩페이지/컴포넌트/선택사항입력란';

import { render, screen, fireEvent } from '@testing-library/react';

import 선택사항입력란 from 'src/랜딩페이지/컴포넌트/선택사항입력란';

function renderComponent({
  type = 'text',
  placeholder = '',
  onChange = () => {},
  onChecked = () => {},
}) {
  render((
    <선택사항입력란
      value=""
      type={type as Type}
      placeholder={placeholder}
      disabled={false}
      labelText=""
      onChange={onChange}
      onChecked={onChecked}
    />
  ));
}

function onChangeTest({ type = 'text', value = '', onChange = () => {} }) {
  renderComponent({ type, onChange });

  fireEvent.change(
    screen.getByRole('textbox'),
    { target: { value } },
  );

  expect(onChange).toBeCalled();
}

describe('선택사항입력란 컴포넌트', () => {
  context('체크박스를 클릭할 때', () => {
    const onChecked: () => void = jest.fn();

    it('onChecked 함수를 호출합니다.', () => {
      renderComponent({ onChecked });
      fireEvent.click(screen.getByRole('checkbox'));

      expect(onChecked).toBeCalled();
    });
  });

  context('type이 text일 때', () => {
    const givenType: string = 'text';
    const givenValue: string = '우리집';
    const onChange: () => void = jest.fn();

    context('value가 변하면', () => {
      it('onChange 함수를 호출합니다.', () => {
        onChangeTest({ type: givenType, value: givenValue, onChange });
      });
    });
  });

  context('type이 textarea일 때', () => {
    const givenType: string = 'textarea';
    const givenValue: string = '10분 이상 하겠습니다.';
    const onChange: () => void = jest.fn();

    context('value가 변하면', () => {
      it('onChange 함수를 호출합니다.', () => {
        onChangeTest({ type: givenType, value: givenValue, onChange });
      });
    });
  });

  context('type이 date일 때', () => {
    const givenType: string = 'date';
    const givenValue: string = '2021년 10월 27일';
    const onChange: () => void = jest.fn();

    context('value가 변하면', () => {
      it('onChange 함수를 호출합니다.', () => {
        onChangeTest({ type: givenType, value: givenValue, onChange });
      });
    });
  });

  context('type이 time일 때', () => {
    const givenType: string = 'time';
    const givenValue: string = '오후 10:00';
    const onChange: () => void = jest.fn();

    context('value가 변하면', () => {
      it('onChange 함수를 호출합니다.', () => {
        onChangeTest({ type: givenType, value: givenValue, onChange });
      });
    });
  });
});
