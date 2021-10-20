import type { ForwardedRef, RefObject } from 'react';

import { toPng } from 'html-to-image';
import { forwardRef, useCallback } from 'react';

import Button from 'src/랜딩페이지/컴포넌트/이미지로_다운로드/이미지로_다운로드.style';

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
    <Button onClick={onClick}>
      이미지로 다운로드
    </Button>
  );
});

export default 이미지로_다운로드;
