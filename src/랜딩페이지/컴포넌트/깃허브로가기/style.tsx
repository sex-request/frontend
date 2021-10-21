import styled from '@emotion/styled';

const Anchor = styled.a`
  position: absolute;
  top: 1.6rem;
  right: -7.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 2.4rem;
  transform: rotate(45deg);
  background: pink;
  border: 0.4rem solid hotpink;
  outline: 0.4rem solid pink;
`;

Anchor.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
};

export default Anchor;
