import Image from 'next/image';

import { Header, H1 } from 'src/랜딩페이지/컴포넌트/Header/styles';
import { logo } from 'src/assets/img';

export default function 헤더(): JSX.Element {
  return (
    <Header>
      <H1>
        <Image src={logo} alt="" width={60} height={60} />
        섹스 신청서
        <Image src={logo} alt="" width={60} height={60} />
      </H1>
    </Header>
  );
}
