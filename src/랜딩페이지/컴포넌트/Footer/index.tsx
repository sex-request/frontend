import { useAtomValue } from 'jotai/utils';

import { Footer, P, Strong } from 'src/랜딩페이지/컴포넌트/Footer/styles';
import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';

export default function 푸터(): JSX.Element {
  const 신청하는사람 = useAtomValue(신청하는사람_스토어);
  const 신청받는사람 = useAtomValue(신청받는사람_스토어);

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
