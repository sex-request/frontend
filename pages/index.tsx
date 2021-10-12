import Image from 'next/image';
import { useState } from 'react';

import 입력란 from 'src/랜딩페이지/컴포넌트/입력란';
import 시간입력란 from 'src/랜딩페이지/컴포넌트/시간입력란';
import 날짜입력란 from 'src/랜딩페이지/컴포넌트/날짜입력란';

export default function 랜딩페이지(): JSX.Element {
  const [신청하는사람, 신청하는사람_수정] = useState<string>('');
  const [신청받는사람, 신청받는사람_수정] = useState<string>('');
  const [시간, 시간_수정] = useState<string>('');
  const [시간_사용함, 시간_사용함_수정] = useState<boolean>(true);
  const [날짜, 날짜_수정] = useState<string>('');
  const [날짜_사용함, 날짜_사용함_수정] = useState<boolean>(true);

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

        <section>
          <날짜입력란
            날짜={날짜}
            onChange={날짜_수정}
            disabled={!날짜_사용함}
            onChecked={날짜_사용함_수정}
          />
          <시간입력란
            시간={시간}
            onChange={시간_수정}
            disabled={!시간_사용함}
            onChecked={시간_사용함_수정}
          />
        </section>
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
