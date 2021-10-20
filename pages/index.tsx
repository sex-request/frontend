import {
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';
import 선택사항입력란 from 'src/랜딩페이지/컴포넌트/선택사항입력란';
import 이미지로_다운로드 from 'src/랜딩페이지/컴포넌트/이미지로_다운로드';

import 스타일 from 'styles/랜딩페이지.module.css';

import 로고 from 'public/logo.png';

export function 기본값_설정(
  값: string | null,
  값_변경_함수: (값: string) => void,
  사용_여부_함수: ((사용_여부: boolean) => void) | null = null,
) {
  if (값) {
    값_변경_함수(값);
  }

  if (사용_여부_함수) {
    사용_여부_함수(true);
  }
}

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    기본값_설정(params.get('from'), 신청하는사람_수정);
    기본값_설정(params.get('to'), 신청받는사람_수정);
    기본값_설정(params.get('time'), 시간_수정, 시간_사용함_수정);
    기본값_설정(params.get('date'), 날짜_수정, 날짜_사용함_수정);
    기본값_설정(params.get('location'), 장소_수정, 장소_사용함_수정);
    기본값_설정(params.get('promise'), 약속_수정, 약속_사용함_수정);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={스타일.컨테이너}>
      <div id="id" ref={ref} style={{ backgroundColor: '#ffe3e8', padding: '4rem' }}>
        <a
          href="https://github.com/sex-request/frontend"
          className={스타일.깃허브로_가기}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Go To Github
        </a>

        <header className={스타일.헤더}>
          <h1 className={스타일.제목}>
            <Image src={로고} alt="" width={60} height={60} />
            섹스 신청서
            <Image src={로고} alt="" width={60} height={60} />
          </h1>
        </header>

        <main>
          <h2 className={스타일.이름입력란}>
            <이름입력란 value={신청하는사람} onChange={신청하는사람_수정} />
            가
            <이름입력란 value={신청받는사람} onChange={신청받는사람_수정} />
            에게 섹스를 신청합니다.
          </h2>

          <section className={스타일.선택입력란}>
            <선택사항입력란
              type="date"
              value={날짜}
              labelText="날짜"
              onChange={날짜_수정}
              disabled={!날짜_사용함}
              onChecked={날짜_사용함_수정}
            />
            <선택사항입력란
              value={시간}
              type="time"
              labelText="시간"
              onChange={시간_수정}
              disabled={!시간_사용함}
              onChecked={시간_사용함_수정}
            />
            <선택사항입력란
              value={장소}
              placeholder="예: 우리집❤️"
              labelText="장소"
              onChange={장소_수정}
              disabled={!장소_사용함}
              onChecked={장소_사용함_수정}
            />
            <선택사항입력란
              value={약속}
              placeholder="예: 10분 이상 하겠습니다."
              labelText="약속"
              onChange={약속_수정}
              disabled={!약속_사용함}
              onChecked={약속_사용함_수정}
            />
          </section>
        </main>

        <footer className={스타일.서명란}>
          <p>
            신청하는사람
            <strong>{신청하는사람}</strong>
            (인)
          </p>
          <p>
            신청받는사람
            <strong>{신청받는사람}</strong>
            (인)
          </p>
        </footer>
      </div>

      <이미지로_다운로드 ref={ref} />
    </div>
  );
}
