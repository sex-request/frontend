import { render } from '@testing-library/react';

import 참여자 from 'src/Home/컴포넌트/참여자';

describe('참여자 컴포넌트', () => {
  it('컴포넌트를 랜더링 합니다.', () => {
    render(<참여자 />);
  });
});
