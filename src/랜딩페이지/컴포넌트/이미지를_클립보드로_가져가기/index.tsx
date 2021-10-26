import type { ForwardedRef, RefObject } from 'react';
import type { ClipboardItemInterface } from 'clipboard-polyfill';

import {
  forwardRef,
  useCallback,
} from 'react';
import html2canvas from 'html2canvas';
import { ClipboardItem, write } from 'clipboard-polyfill';
import { toast } from 'react-toastify';

import 버튼 from 'src/공통/컴포넌트/버튼';

const 이미지를_클립보드로_가져가기 = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const onClick = useCallback(() => html2canvas(
    (ref as RefObject<HTMLElement>).current as HTMLElement,
    { useCORS: true },
  )
    .then((canvas: HTMLCanvasElement) => canvas.toBlob(
      (blob) => {
        const clipboardItem: ClipboardItemInterface = new ClipboardItem({
          'image/png': blob as Blob,
        });

        write([clipboardItem])
          .then(() => toast('이미지를 클립보드에 복사했습니다.'));
      },
      'image/png',
    ))
    .catch(console.error),
  [ref]);

  return (
    <버튼 onClick={onClick}>이미지를 클립보드로 가져가기</버튼>
  );
});

export default 이미지를_클립보드로_가져가기;
