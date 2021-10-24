import styled from '@emotion/styled';

import { colors } from 'src/공통/styles';

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
  background-color: ${colors.배경색};
  padding: 2rem;
`;

export const 주의사항영역 = styled.section`
  margin-bottom: 1rem;
`;
