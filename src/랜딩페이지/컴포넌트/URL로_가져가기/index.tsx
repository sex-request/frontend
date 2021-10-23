import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { useAtomValue } from 'jotai/utils';

import 버튼 from 'src/공통/컴포넌트/버튼';
import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';
import env from 'src/공통/env';

interface Props {
  시간: string;
  날짜: string;
  장소: string;
  약속: string;
}

function 쿼리생성({
  시간,
  날짜,
  장소,
  약속,
}: Props): string {
  const 신청하는사람 = useAtomValue(신청하는사람_스토어);
  const 신청받는사람 = useAtomValue(신청받는사람_스토어);

  return [
    ['from', 신청하는사람],
    ['to', 신청받는사람],
    ['time', 시간],
    ['date', 날짜],
    ['location', 장소],
    ['promise', 약속],
  ]
    .filter(([, value]) => value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export default function URL로_가져가기({
  시간, 날짜, 장소, 약속,
}: Props): JSX.Element {
  const props = {
    시간, 날짜, 장소, 약속,
  };

  return (
    <CopyToClipboard
      text={`${env.BASE_URL}?${쿼리생성(props)}`}
    >
      <버튼 onClick={() => toast('URL을 클립보드에 복사헀습니다.')}>URL로 가져가기</버튼>
    </CopyToClipboard>
  );
}
