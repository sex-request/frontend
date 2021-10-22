import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import 버튼 from 'src/공통/컴포넌트/버튼';

const 현재주소: string = process.env.currentURL || 'http://localhost:3000';

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
  const [text, setText] = useState<string>('');

  const onClick = () => setText(
    `${현재주소}`
      + `?from=${신청하는사람}`
      + `&to=${신청받는사람}`
      + `&time=${시간}`
      + `&date=${날짜}`
      + `&location=${장소}`
      + `&promise=${약속}`,
  );

  return (
    <CopyToClipboard text={text}>
      <버튼 onClick={onClick}>URL로 가져가기</버튼>
    </CopyToClipboard>
  );
}
