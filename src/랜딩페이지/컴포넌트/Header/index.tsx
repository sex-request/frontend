import styled from '@emotion/styled';

import { rem } from 'src/공통/styles';
import { Header, H1 } from 'src/랜딩페이지/컴포넌트/Header/styles';

const Image = styled.img({
  width: rem(60),
  height: rem(60),
});

export default function 헤더(): JSX.Element {
  return (
    <Header>
      <H1>
        <Image src="/icon-192x192.png" alt="" />
        섹스 신청서
        <Image src="/icon-192x192.png" alt="" />
      </H1>
    </Header>
  );
}
