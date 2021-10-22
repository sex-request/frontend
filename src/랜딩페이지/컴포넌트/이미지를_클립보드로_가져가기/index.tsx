import type { ForwardedRef, RefObject } from 'react';

import {
  forwardRef,
  useCallback,
} from 'react';
import { toBlob } from 'html-to-image';
import { ClipboardItem, write } from 'clipboard-polyfill';

import 버튼 from 'src/공통/컴포넌트/버튼';

const 이미지를_클립보드로_가져가기 = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const onClick = useCallback(() => toBlob(
    (ref as RefObject<HTMLElement>).current as HTMLElement,
    { cacheBust: true },
  )
    .then((dataUrl) => write([
      new ClipboardItem({
        'image/png': dataUrl as Blob,
      }),
    ])),
  [ref]);

  return (
    <버튼 onClick={onClick}>이미지를 클립보드로 가져가기</버튼>
  );
});

export default 이미지를_클립보드로_가져가기;
