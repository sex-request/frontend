import { render, screen, fireEvent } from '@testing-library/react';

import 신청서_가져가기 from 'src/랜딩페이지/컴포넌트/신청서_가져가기';

describe('신청서_가져가기 컴포넌트는', () => {
  context('크롬 브라우저일 때', () => {
    it('"이미지를 클립보드로 가져가기"를 랜더링합니다.', () => {
      render(<신청서_가져가기 isChrome />);

      fireEvent.click(screen.getByRole('button'));

      expect(screen.getByText('이미지를 클립보드로 가져가기')).toBeInTheDocument();
    });
  });

  context('크롬 브라우저가 아닐 때', () => {
    it('"이미지를 클립보드로 가져가기"를 랜더링하지 않습니다.', () => {
      render(<신청서_가져가기 isChrome={false} />);

      fireEvent.click(screen.getByRole('button'));

      expect(screen.queryByText('이미지를 클립보드로 가져가기')).not.toBeInTheDocument();
    });
  });
});
