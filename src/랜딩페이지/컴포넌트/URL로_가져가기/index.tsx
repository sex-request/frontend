import { CopyToClipboard } from 'react-copy-to-clipboard';

import 버튼 from 'src/공통/컴포넌트/버튼';

const 현재주소: string = process.env.NEXT_PUBLIC_BASE_PATH || 'https://sex-request.github.io/frontend';

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
        `${현재주소}`
        + `?from=${신청하는사람}`
        + `&to=${신청받는사람}`
        + `&time=${시간}`
        + `&date=${날짜}`
        + `&location=${장소}`
        + `&promise=${약속}`
      }
    >
      <버튼>URL로 가져가기</버튼>
    </CopyToClipboard>
  );
}
