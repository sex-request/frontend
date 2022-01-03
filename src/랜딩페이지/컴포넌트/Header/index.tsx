import Image from 'next/image';

import { Header, H1 } from 'src/랜딩페이지/컴포넌트/Header/styles';

export default function 헤더(): JSX.Element {
  return (
    <Header>
      <H1>
        <Image src="/icon-192x192.png" alt="" width={60} height={60} />
        섹스 신청서
        <Image src="/icon-192x192.png" alt="" width={60} height={60} />
      </H1>
    </Header>
  );
}
