import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 기본값_설정 from 'src/랜딩페이지/서비스/기본값_설정';
import {
  컨테이너, 신청서, 선택입력영역, 주의사항영역,
} from 'src/랜딩페이지/styles';
import Header from 'src/랜딩페이지/컴포넌트/Header';
import Footer from 'src/랜딩페이지/컴포넌트/Footer';
import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';
import 선택사항입력란 from 'src/랜딩페이지/컴포넌트/선택사항입력란';
import 깃허브로가기 from 'src/랜딩페이지/컴포넌트/깃허브로가기';
import 팝업버튼 from 'src/공통/컴포넌트/팝업버튼';
import 신청서_가져가기 from 'src/랜딩페이지/컴포넌트/신청서_가져가기';

import 가벼운성교육 from 'src/랜딩페이지/컴포넌트/가벼운성교육.mdx';
import 조심해주세요 from 'src/랜딩페이지/컴포넌트/조심해주세요.mdx';

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
    <컨테이너>
      <깃허브로가기 />

      <신청서 ref={ref}>
        <Header />

        <main>
          <이름입력란
            신청하는사람={신청하는사람}
            신청하는사람_수정={신청하는사람_수정}
            신청받는사람={신청받는사람}
            신청받는사람_수정={신청받는사람_수정}
          />

          <선택입력영역>
            <선택사항입력란
              type="date"
              value={날짜}
              labelText="날짜"
              onChange={날짜_수정}
              disabled={!날짜_사용함}
              onChecked={날짜_사용함_수정}
            />
            <선택사항입력란
              type="time"
              value={시간}
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
              type="textarea"
              value={약속}
              placeholder="예: 10분 이상 하겠습니다."
              labelText="약속"
              onChange={약속_수정}
              disabled={!약속_사용함}
              onChecked={약속_사용함_수정}
            />
          </선택입력영역>
        </main>

        <Footer
          신청하는사람={신청하는사람}
          신청받는사람={신청받는사람}
        />
      </신청서>

      <주의사항영역>
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
      </주의사항영역>

      <신청서_가져가기
        ref={ref}
        신청하는사람={신청하는사람}
        신청받는사람={신청받는사람}
        시간={시간}
        날짜={날짜}
        장소={장소}
        약속={약속}
      />

      <ToastContainer />
    </컨테이너>
  );
}
