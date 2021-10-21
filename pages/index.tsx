import {
  useEffect,
  useRef,
  useState,
} from 'react';

import 기본값_설정 from 'src/랜딩페이지/서비스/기본값_설정';
import Header from 'src/랜딩페이지/컴포넌트/Header';
import Footer from 'src/랜딩페이지/컴포넌트/Footer';
import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';
import 선택사항입력란 from 'src/랜딩페이지/컴포넌트/선택사항입력란';
import 이미지로_다운로드 from 'src/랜딩페이지/컴포넌트/이미지로_다운로드';
import 깃허브로가기 from 'src/랜딩페이지/컴포넌트/깃허브로가기';
import 팝업버튼 from 'src/공통/컴포넌트/팝업버튼';

import 가벼운성교육 from 'src/랜딩페이지/컴포넌트/가벼운성교육.mdx';
import 조심해주세요 from 'src/랜딩페이지/컴포넌트/조심해주세요.mdx';

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
      <깃허브로가기 />

      <div ref={ref} style={{ backgroundColor: '#ffe3e8', padding: '4rem' }}>
        <Header />

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

        <Footer
          신청하는사람={신청하는사람}
          신청받는사람={신청받는사람}
        />
      </div>

      <section style={{ marginBottom: '1rem' }}>
        <팝업버튼
          버튼텍스트="가벼운 성교육"
          헤더텍스트="가벼운 성교육 시간!"
        >
          <가벼운성교육 />
        </팝업버튼>
        {' '}
        <팝업버튼
          버튼텍스트="조심해주세요"
          헤더텍스트="이용하실 때 주의해주세요!"
        >
          <조심해주세요 />
        </팝업버튼>
      </section>

      <section>
        <이미지로_다운로드 ref={ref} />
      </section>
    </div>
  );
}
