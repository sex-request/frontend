import { H2, Input } from 'src/랜딩페이지/컴포넌트/이름입력란/styles';

interface Props {
  신청하는사람: string;
  신청하는사람_수정: (value: string) => void;
  신청받는사람: string;
  신청받는사람_수정: (value: string) => void;
}

export default function 이름입력란({
  신청하는사람,
  신청하는사람_수정,
  신청받는사람,
  신청받는사람_수정,
}: Props): JSX.Element {
  return (
    <H2>
      <Input
        value={신청하는사람}
        onChange={(e) => 신청하는사람_수정(e.target.value)}
      />
      가
      <Input
        value={신청받는사람}
        onChange={(e) => 신청받는사람_수정(e.target.value)}
      />
      에게 섹스를 신청합니다.
    </H2>
  );
}
