import Anchor from 'src/랜딩페이지/컴포넌트/깃허브로가기/style';

const 레포지토리주소: string = 'https://github.com/sex-request/frontend';

export default function 깃허브로가기(): JSX.Element {
  return (
    <Anchor href={레포지토리주소}>
      Go To Github
    </Anchor>
  );
}
