import Image from 'next/image';
import { useState } from 'react';

import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';
import 시간입력란 from 'src/랜딩페이지/컴포넌트/시간입력란';
import 날짜입력란 from 'src/랜딩페이지/컴포넌트/날짜입력란';
import 장소입력란 from 'src/랜딩페이지/컴포넌트/장소입력란';
import 약속입력란 from 'src/랜딩페이지/컴포넌트/약속입력란';

import 스타일 from 'styles/랜딩페이지.module.css';

export default function 랜딩페이지(): JSX.Element {
  const [신청하는사람, 신청하는사람_수정] = useState<string>('');
  const [신청받는사람, 신청받는사람_수정] = useState<string>('');
  const [시간, 시간_수정] = useState<string>('');
  const [시간_사용함, 시간_사용함_수정] = useState<boolean>(true);
  const [날짜, 날짜_수정] = useState<string>('');
  const [날짜_사용함, 날짜_사용함_수정] = useState<boolean>(true);
  const [장소, 장소_수정] = useState<string>('');
  const [장소_사용함, 장소_사용함_수정] = useState<boolean>(true);
  const [약속, 약속_수정] = useState<string>('');
  const [약속_사용함, 약속_사용함_수정] = useState<boolean>(true);

  return (
    <div className={스타일.컨테이너}>
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
          <이름입력란 value={신청하는사람} onChange={신청하는사람_수정} />
          가
          <이름입력란 value={신청받는사람} onChange={신청받는사람_수정} />
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
          <장소입력란
            장소={장소}
            onChange={장소_수정}
            disabled={!장소_사용함}
            onChecked={장소_사용함_수정}
          />
          <약속입력란
            약속={약속}
            onChange={약속_수정}
            disabled={!약속_사용함}
            onChecked={약속_사용함_수정}
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
    </div>
  );
}
