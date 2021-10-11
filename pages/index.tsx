import Image from 'next/image';
import { useState } from 'react';

import 입력란 from 'src/랜딩페이지/컴포넌트/입력란';

export default function 랜딩페이지(): JSX.Element {
  const [신청하는사람, 신청하는사람_수정] = useState('');
  const [신청받는사람, 신청받는사람_수정] = useState('');

  return (
    <>
      <header>
        <h1>
          <Image
            src="/logo.png"
            alt=""
            width={60}
            height={60}
          />
          섹스 신청서
          <Image
            src="/logo.png"
            alt=""
            width={60}
            height={60}
          />
        </h1>
      </header>

      <main>
        <h2>
          <입력란 value={신청하는사람} onChange={신청하는사람_수정} />
          가
          <입력란 value={신청받는사람} onChange={신청받는사람_수정} />
          에게 섹스를 신청합니다.
        </h2>
      </main>

      <footer>
        <p>
          신청하는사람
          {' '}
          {신청하는사람}
          {' '}
          (인)
        </p>
        <p>
          신청받는사람
          {' '}
          {신청받는사람}
          {' '}
          (인)
        </p>
      </footer>
    </>
  );
}
