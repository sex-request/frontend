import { render, screen, fireEvent } from '@testing-library/react';

import URL로_가져가기 from 'src/랜딩페이지/컴포넌트/URL로_가져가기';

window.prompt = jest.fn();

test('URL로_가져가기 컴포넌트', () => {
  render(<URL로_가져가기
    신청하는사람="신청자"
    신청받는사람="받는사람"
    시간="15:30"
    날짜="2021-10-22"
    장소="우리집"
    약속="10분 이상 하곘습니다."
  />);

  fireEvent.click(screen.getByRole('button'));
});
