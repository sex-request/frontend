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

export default function URL로_가져가기({
  신청하는사람,
  신청받는사람,
  시간,
  날짜,
  장소,
  약속,
}: Props): JSX.Element {
  return (
    <CopyToClipboard text={
        `${env.BASE_URL}`
        + `?from=${encodeURI(신청하는사람)}`
        + `&to=${encodeURI(신청받는사람)}`
        + `&time=${encodeURI(시간)}`
        + `&date=${encodeURI(날짜)}`
        + `&location=${encodeURI(장소)}`
        + `&promise=${encodeURI(약속)}`
      }
    >
      <버튼>URL로 가져가기</버튼>
    </CopyToClipboard>
  );
}
