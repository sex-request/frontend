import { render, screen } from '@testing-library/react';

import 제목 from 'src/Home/컴포넌트/제목';

describe('제목 컴포넌트', () => {
  const 타이틀: string = '섹스 신청서';

  it('"섹스 신청서"를 랜더링합니다.', () => {
    render(<제목 />);

    expect(
      screen.getByText(타이틀),
    ).toBeInTheDocument();
  });
});
