import styled from '@emotion/styled';

const Anchor = styled.a`
  position: absolute;
  top: 1.2rem;
  right: -7.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 1.6rem;
  font-size: 0.8rem;
  color: black;
  transform: rotate(45deg);
  background: pink;
  border: 0.2rem solid hotpink;
  outline: 0.2rem solid pink;
`;

Anchor.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
};

export default Anchor;
