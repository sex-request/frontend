import type { ChangeEventHandler } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { format, parse } from 'date-fns';
import ko from 'date-fns/locale/ko';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

const dateFormat: string = 'yyyy-MM-dd';
const timeFormat: string = 'HH:mm';
const visualDateFormat: string = 'yyyy년 MM월 dd일';
const visualTimeFormat: string = 'a hh:mm';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;

  & > *:last-child {
    flex: 1;
  }
`;

const CustomLabel = styled.label`
  display: block;
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-right: 0.4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const CustomCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: pink;
  }
`;
CustomCheckbox.defaultProps = { type: 'checkbox' };
const CustomCheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: hotpink;
  background-color: transparent;
  border: 0.2rem solid pink;
  border-radius: 0.2rem;
`;

interface CheckBoxProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const CheckBox = ({ checked, onChange }: CheckBoxProps) => (
  <CustomLabel>
    <CustomCheckbox checked={checked} onChange={onChange} />
    <CustomCheckMark>
      { checked ? '✔️' : '' }
    </CustomCheckMark>
  </CustomLabel>
);

export const TextLabel = styled.label`
  margin-right: 1rem;
`;

const InputFieldStyle = css`
  flex: 1;
  width: 100%;
  height: 2rem;
  padding: 0.5rem 1rem;
  background-color: pink;
  border: none;
  border-radius: 0.5rem;

  &:disabled {
    color: rgb(175, 175, 175);
    background-color: rgb(175, 175, 175);
  }
`;

export const Input = styled.input`
  ${InputFieldStyle}
`;

export const Textarea = styled.textarea`
  ${InputFieldStyle}
  height: 4rem;
`;

interface DatePickerProps {
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
export function DatePicker({
  id,
  disabled,
  placeholder,
  value,
  onChange,
}: DatePickerProps): JSX.Element {
  return (
    <ReactDatePicker
      id={id}
      disabled={disabled}
      selected={value === '' ? null : parse(value, dateFormat, new Date())}
      onChange={(date: Date) => onChange(date ? format(date, dateFormat) : '')}
      minDate={new Date()}
      placeholderText={placeholder || format(new Date(), visualDateFormat, { locale: ko })}
      dateFormat={visualDateFormat}
      // isClearable
      withPortal
      customInput={<Input />}
      locale={ko}
    />
  );
}

interface TimePickerProps {
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
export function TimePicker({
  id,
  disabled,
  placeholder,
  value,
  onChange,
}: TimePickerProps): JSX.Element {
  return (
    <ReactDatePicker
      id={id}
      disabled={disabled}
      selected={value === '' ? null : parse(value, timeFormat, new Date())}
      onChange={(date: Date) => onChange(date ? format(date, timeFormat) : '')}
      placeholderText={placeholder || format(new Date(), visualTimeFormat, { locale: ko })}
      dateFormat={visualTimeFormat}
      timeFormat={visualTimeFormat}
      showTimeSelect
      showTimeSelectOnly
      // isClearable
      withPortal
      customInput={<Input />}
      locale={ko}
    />
  );
}
