import type { ForwardedRef, RefObject } from 'react';

import { forwardRef, useCallback } from 'react';
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';

import 버튼 from 'src/공통/컴포넌트/버튼';

const 이미지로_다운로드 = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const onClick = useCallback(() => {
    html2canvas(
      (ref as RefObject<HTMLElement>).current as HTMLElement,
      { useCORS: true },
    ).then((canvas: HTMLCanvasElement) => {
      const link = document.createElement('a');
      link.download = '섹스신청서.png';
      link.href = canvas.toDataURL();
      link.click();
      toast('이미지를 다운로드 하였습니다.');
    });
  }, [ref]);

  return (
    <버튼 onClick={onClick}>
      이미지로 다운로드
    </버튼>
  );
});

export default 이미지로_다운로드;
