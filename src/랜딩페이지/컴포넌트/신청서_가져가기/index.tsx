import type { ForwardedRef } from 'react';
import type { PopupPosition } from 'reactjs-popup/dist/types';

import { forwardRef } from 'react';
import Popup from 'reactjs-popup';

import 이미지를_클립보드로_가져가기 from 'src/랜딩페이지/컴포넌트/이미지를_클립보드로_가져가기';
import URL로_가져가기 from 'src/랜딩페이지/컴포넌트/URL로_가져가기';
import 이미지로_다운로드 from 'src/랜딩페이지/컴포넌트/이미지로_다운로드';
import { Ul, Li } from 'src/랜딩페이지/컴포넌트/신청서_가져가기/styles';
import 버튼 from 'src/공통/컴포넌트/버튼';

interface Props {
  신청하는사람: string;
  신청받는사람: string;
  시간: string;
  날짜: string;
  장소: string;
  약속: string;
  position?: PopupPosition;
}

const 신청서_가져가기 = forwardRef(({
  신청하는사람,
  신청받는사람,
  시간,
  날짜,
  장소,
  약속,
  position,
}: Props, ref: ForwardedRef<HTMLElement>) => (
  <Popup
    trigger={<버튼>신청서 가져가기</버튼>}
    position={position || 'top center'}
    on="hover"
    closeOnDocumentClick
    mouseLeaveDelay={300}
    mouseEnterDelay={0}
    contentStyle={{ padding: 0, border: 'none' }}
    arrow={false}
  >
    <Ul>
      <Li>
        <이미지로_다운로드 ref={ref} />
      </Li>
      <Li>
        <이미지를_클립보드로_가져가기 ref={ref} />
      </Li>
      <Li>
        <URL로_가져가기
          신청하는사람={신청하는사람}
          신청받는사람={신청받는사람}
          시간={시간}
          날짜={날짜}
          장소={장소}
          약속={약속}
        />
      </Li>
    </Ul>
  </Popup>
));

export default 신청서_가져가기;
