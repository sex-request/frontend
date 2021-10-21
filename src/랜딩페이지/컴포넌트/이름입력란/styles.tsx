import styled from '@emotion/styled';

export const H2 = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 4rem;
  height: 1.5rem;
  margin: 0 0.4rem;
  line-height: 1rem;
  text-align: center;
  background-color: pink;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
`;
Input.defaultProps = {
  type: 'text',
};
