import type { ChangeEventHandler } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
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

const InputFieldStyle = css`
  flex: 1;
  max-width: 67%;
  height: 2rem;
  margin-left: 1rem;
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
