import styled from '@emotion/styled';

import 팔레트 from 'src/공통/팔레트';

export const 컨테이너 = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 2rem;
  background: #ffe3e8;
`;

export const 신청서 = styled.section`
  background-color: ${팔레트.배경색};
  padding: 2rem;
`;

export const 주의사항영역 = styled.section`
  margin-bottom: 1rem;
`;
