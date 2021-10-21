import styled from '@emotion/styled';
import Image from 'next/image';

import { logo } from 'src/assets/img';

const Header = styled.header`
  margin-bottom: 2rem;
`;
const H1 = styled.h1`
  font-size: 2.5rem;

  * {
    vertical-align: bottom;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

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
