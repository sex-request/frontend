import Anchor from 'src/랜딩페이지/컴포넌트/깃허브로가기/style';
import env from 'src/공통/env';

export default function 깃허브로가기(): JSX.Element {
  return (
    <Anchor href={env.REPOSITORY_URL}>
      Go To Github
    </Anchor>
  );
}
