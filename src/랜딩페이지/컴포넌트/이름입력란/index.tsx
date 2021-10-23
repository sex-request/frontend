import { useAtom } from 'jotai';

import { H2, Input } from 'src/랜딩페이지/컴포넌트/이름입력란/styles';
import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';

export default function 이름입력란(): JSX.Element {
  const [신청하는사람, 신청하는사람_수정] = useAtom(신청하는사람_스토어);
  const [신청받는사람, 신청받는사람_수정] = useAtom(신청받는사람_스토어);

  return (
    <H2>
      <Input
        value={신청하는사람}
        onChange={(e) => 신청하는사람_수정(e.target.value)}
      />
      가
      <Input
        value={신청받는사람}
        onChange={(e) => 신청받는사람_수정(e.target.value)}
      />
      에게 섹스를 신청합니다.
    </H2>
  );
}
