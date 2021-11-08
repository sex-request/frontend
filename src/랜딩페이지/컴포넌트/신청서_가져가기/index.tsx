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
  position?: PopupPosition;
  isChrome: boolean;
}

const 신청서_가져가기 = forwardRef(({
  position,
  isChrome,
}: Props, ref: ForwardedRef<HTMLElement>) => (
  <Popup
    trigger={<버튼>신청서 가져가기</버튼>}
    position={position || 'top center'}
    on={['hover', 'click']}
    closeOnDocumentClick
    mouseLeaveDelay={300}
    mouseEnterDelay={0}
    contentStyle={{ padding: 0, border: 'none' }}
    arrow={false}
    nested
  >
    <Ul>
      {
        isChrome && (
          <>
            <Li>
              <이미지로_다운로드 ref={ref} />
            </Li>
            <Li>
              <이미지를_클립보드로_가져가기 ref={ref} />
            </Li>
          </>
        )
      }
      <Li>
        <URL로_가져가기 />
      </Li>
    </Ul>
  </Popup>
));

export default 신청서_가져가기;
