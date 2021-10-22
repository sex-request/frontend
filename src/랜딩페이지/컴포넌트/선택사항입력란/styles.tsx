import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  margin-right: 0.4rem;

  &::after {
    content: "";
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
    box-sizing: border-box;
  }
  
  &:checked::after {
    content: "✔️";
    background-color: pink;
  }
`;
CheckBox.defaultProps = {
  type: 'checkbox',
};

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
