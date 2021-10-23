import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { useAtomValue } from 'jotai/utils';

import 버튼 from 'src/공통/컴포넌트/버튼';
import env from 'src/공통/env';
import 쿼리생성 from 'src/랜딩페이지/서비스/쿼리생성';
import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';
import {
  날짜_스토어,
  시간_스토어,
  장소_스토어,
  약속_스토어,
} from 'src/랜딩페이지/스토어/선택사항';

export default function URL로_가져가기(): JSX.Element {
  const 신청하는사람 = useAtomValue(신청하는사람_스토어);
  const 신청받는사람 = useAtomValue(신청받는사람_스토어);
  const 날짜 = useAtomValue(날짜_스토어);
  const 시간 = useAtomValue(시간_스토어);
  const 장소 = useAtomValue(장소_스토어);
  const 약속 = useAtomValue(약속_스토어);

  return (
    <CopyToClipboard
      text={`${env.BASE_URL}?${쿼리생성([
        { key: 'from', value: 신청하는사람 },
        { key: 'to', value: 신청받는사람 },
        { key: 'time', value: 시간 },
        { key: 'date', value: 날짜 },
        { key: 'location', value: 장소 },
        { key: 'promise', value: 약속 },
      ])}`}
    >
      <버튼 onClick={() => toast('URL을 클립보드에 복사헀습니다.')}>URL로 가져가기</버튼>
    </CopyToClipboard>
  );
}
