import styled from '@emotion/styled';

const Footer = styled.footer`
  width: 14rem;
  margin: auto;
`;
const P = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.4rem;
`;
const Strong = styled.strong`
  flex: 1;
  margin: 0 1rem;
  text-align: center;
`;

interface Props {
  신청하는사람: string;
  신청받는사람: string;
}

export default function 푸터({
  신청하는사람,
  신청받는사람,
}: Props): JSX.Element {
  return (
    <Footer>
      <P>
        신청하는사람
        <Strong>{신청하는사람}</Strong>
        (인)
      </P>
      <P>
        신청받는사람
        <Strong>{신청받는사람}</Strong>
        (인)
      </P>
    </Footer>
  );
}
