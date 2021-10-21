import { Footer, P, Strong } from 'src/랜딩페이지/컴포넌트/Footer/styles';

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
