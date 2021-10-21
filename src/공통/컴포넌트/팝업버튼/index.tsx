import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from '@emotion/styled';

import 버튼 from 'src/공통/컴포넌트/버튼';
import 팔레트 from 'src/공통/팔레트';

const 컨테이너 = styled.section`
  background: ${팔레트.배경색};
`;
const Header = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  border-bottom: 1px solid gray;
`;
const Main = styled.main`
  width: 100%;
  padding: 1rem 0.5rem;

  h2 {
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
  }

  ul {
    margin-bottom: 0.8rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  li {
    padding: 0.1rem 0.4rem;

    &:before {
      content: "- ";
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  margin: auto;
  padding: 1rem 0.5rem;
  text-align: center;
`;

interface Props {
  버튼텍스트: string;
  헤더텍스트: string;
  children: string | React.ReactNode;
}

export default function 팝업({
  버튼텍스트,
  헤더텍스트,
  children,
}: Props): JSX.Element {
  const 팝업열기버튼 = () => <버튼>{버튼텍스트}</버튼>;

  return (
    <Popup
      trigger={팝업열기버튼}
      modal
      nested
    >
      {(close: () => void) => (
        <컨테이너>
          <Header>{헤더텍스트}</Header>
          <Main>
            {children}
          </Main>
          <Footer>
            <버튼 onClick={close}>닫기</버튼>
          </Footer>
        </컨테이너>
      )}
    </Popup>
  );
}
