import styled from '@emotion/styled';

export const Ul = styled.ul`
  padding: 1rem;
  box-shadow: hotpink 0.2rem 0.2rem 1rem 0.2rem;
`;

export const Li = styled.li`
  margin: 1rem 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  button {
    width: 100%;
  }
`;
