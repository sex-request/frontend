import { useAtom } from 'jotai';

import {
  날짜_스토어,
  날짜_사용함_스토어,
  시간_스토어,
  시간_사용함_스토어,
  장소_스토어,
  장소_사용함_스토어,
  약속_스토어,
  약속_사용함_스토어,
} from 'src/랜딩페이지/스토어/선택사항';
import 선택사항입력란 from 'src/랜딩페이지/컴포넌트/선택사항입력란';
import { 선택입력영역 } from 'src/랜딩페이지/컴포넌트/선택사항입력영역/styles';

export default function 선택사항입력영역(): JSX.Element {
  const [날짜, 날짜_수정] = useAtom(날짜_스토어);
  const [날짜_사용함, 날짜_사용함_수정] = useAtom(날짜_사용함_스토어);
  const [시간, 시간_수정] = useAtom(시간_스토어);
  const [시간_사용함, 시간_사용함_수정] = useAtom(시간_사용함_스토어);
  const [장소, 장소_수정] = useAtom(장소_스토어);
  const [장소_사용함, 장소_사용함_수정] = useAtom(장소_사용함_스토어);
  const [약속, 약속_수정] = useAtom(약속_스토어);
  const [약속_사용함, 약속_사용함_수정] = useAtom(약속_사용함_스토어);

  return (
    <선택입력영역>
      <선택사항입력란
        type="date"
        value={날짜}
        labelText="날짜"
        onChange={날짜_수정}
        disabled={!날짜_사용함}
        onChecked={날짜_사용함_수정}
      />
      <선택사항입력란
        type="time"
        value={시간}
        labelText="시간"
        onChange={시간_수정}
        disabled={!시간_사용함}
        onChecked={시간_사용함_수정}
      />
      <선택사항입력란
        value={장소}
        placeholder="예: 우리집❤️"
        labelText="장소"
        onChange={장소_수정}
        disabled={!장소_사용함}
        onChecked={장소_사용함_수정}
      />
      <선택사항입력란
        type="textarea"
        value={약속}
        placeholder="예: 10분 이상 하겠습니다."
        labelText="약속"
        onChange={약속_수정}
        disabled={!약속_사용함}
        onChecked={약속_사용함_수정}
      />
    </선택입력영역>
  );
}
