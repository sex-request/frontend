import { stringify } from 'querystring';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import 버튼 from 'src/공통/컴포넌트/버튼';
import env from 'src/공통/env';

interface Props {
  신청하는사람: string;
  신청받는사람: string;
  시간: string;
  날짜: string;
  장소: string;
  약속: string;
}

function 쿼리생성({
  신청하는사람,
  신청받는사람,
  시간,
  날짜,
  장소,
  약속,
}: Props): string {
  return stringify(
    [
      ['from', 신청하는사람],
      ['to', 신청받는사람],
      ['time', 시간],
      ['date', 날짜],
      ['location', 장소],
      ['promise', 약속],
    ]
      .filter(([, value]) => value !== '')
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
  );
}

export default function URL로_가져가기({
  신청하는사람, 신청받는사람, 시간, 날짜, 장소, 약속,
}: Props): JSX.Element {
  const props = {
    신청하는사람, 신청받는사람, 시간, 날짜, 장소, 약속,
  };

  return (
    <CopyToClipboard
      text={`${env.BASE_URL}?${쿼리생성(props)}`}
    >
      <버튼>URL로 가져가기</버튼>
    </CopyToClipboard>
  );
}
