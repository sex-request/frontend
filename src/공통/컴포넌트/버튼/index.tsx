import styled from '@emotion/styled';

const 버튼 = styled.button`
  padding: 0.6rem 1.2rem;
  background: pink;
  border: none;
  border-radius: 0.5rem;
`;

버튼.defaultProps = {
  type: 'button',
};

export default 버튼;
