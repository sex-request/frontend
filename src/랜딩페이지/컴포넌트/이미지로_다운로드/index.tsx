import type { ForwardedRef, RefObject } from 'react';

import { toPng } from 'html-to-image';
import { forwardRef, useCallback } from 'react';

import 버튼 from 'src/공통/컴포넌트/버튼';

const 이미지로_다운로드 = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const onClick = useCallback(() => {
    toPng(
      (ref as RefObject<HTMLElement>).current as HTMLElement,
      { cacheBust: true },
    ).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = '섹스신청서.png';
      link.href = dataUrl;
      link.click();
    });
  }, [ref]);

  return (
    <버튼 onClick={onClick}>
      이미지로 다운로드
    </버튼>
  );
});

export default 이미지로_다운로드;
