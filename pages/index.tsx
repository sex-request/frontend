import {
  useEffect,
  useRef,
} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUpdateAtom } from 'jotai/utils';
import { isChrome } from 'react-device-detect';

import 기본값_설정 from 'src/랜딩페이지/서비스/기본값_설정';
import {
  컨테이너, 신청서, 주의사항영역,
} from 'src/랜딩페이지/styles';
import Header from 'src/랜딩페이지/컴포넌트/Header';
import Footer from 'src/랜딩페이지/컴포넌트/Footer';
import 이름입력란 from 'src/랜딩페이지/컴포넌트/이름입력란';
import 선택사항입력영역 from 'src/랜딩페이지/컴포넌트/선택사항입력영역';
import 깃허브로가기 from 'src/랜딩페이지/컴포넌트/깃허브로가기';
import 팝업버튼 from 'src/공통/컴포넌트/팝업버튼';
import 신청서_가져가기 from 'src/랜딩페이지/컴포넌트/신청서_가져가기';
import { 신청하는사람_스토어, 신청받는사람_스토어 } from 'src/랜딩페이지/스토어/참가하는사람';
import {
  날짜_스토어,
  날짜_사용함_스토어,
  시간_스토어,
  시간_사용함_스토어,
  장소_스토어,
  장소_사용함_스토어,
  약속_스토어,
  약속_사용함_스토어,
} from 'src/랜딩페이지/스토어/선택사항';

import 가벼운성교육 from 'src/랜딩페이지/컴포넌트/가벼운성교육.mdx';
import 조심해주세요 from 'src/랜딩페이지/컴포넌트/조심해주세요.mdx';

export default function 랜딩페이지(): JSX.Element {
  const 신청하는사람_수정 = useUpdateAtom(신청하는사람_스토어);
  const 신청받는사람_수정 = useUpdateAtom(신청받는사람_스토어);
  const 날짜_수정 = useUpdateAtom(날짜_스토어);
  const 날짜_사용함_수정 = useUpdateAtom(날짜_사용함_스토어);
  const 시간_수정 = useUpdateAtom(시간_스토어);
  const 시간_사용함_수정 = useUpdateAtom(시간_사용함_스토어);
  const 장소_수정 = useUpdateAtom(장소_스토어);
  const 장소_사용함_수정 = useUpdateAtom(장소_사용함_스토어);
  const 약속_수정 = useUpdateAtom(약속_스토어);
  const 약속_사용함_수정 = useUpdateAtom(약속_사용함_스토어);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    기본값_설정(params.get('from'), 신청하는사람_수정);
    기본값_설정(params.get('to'), 신청받는사람_수정);
    기본값_설정(params.get('time'), 시간_수정, 시간_사용함_수정);
    기본값_설정(params.get('date'), 날짜_수정, 날짜_사용함_수정);
    기본값_설정(params.get('location'), 장소_수정, 장소_사용함_수정);
    기본값_설정(params.get('promise'), 약속_수정, 약속_사용함_수정);
  }, [
    신청하는사람_수정,
    신청받는사람_수정,
    날짜_수정,
    날짜_사용함_수정,
    시간_수정,
    시간_사용함_수정,
    장소_수정,
    장소_사용함_수정,
    약속_수정,
    약속_사용함_수정,
  ]);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <컨테이너>
      <깃허브로가기 />

      <신청서 ref={ref}>
        <Header />

        <main>
          <이름입력란 />
          <선택사항입력영역 />
        </main>

        <Footer />
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

      <신청서_가져가기 ref={ref} isChrome={isChrome} />

      <ToastContainer />
    </컨테이너>
  );
}
