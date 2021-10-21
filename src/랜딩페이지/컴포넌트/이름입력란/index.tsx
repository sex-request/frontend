import 스타일 from 'src/랜딩페이지/컴포넌트/이름입력란/이름입력란.module.sass';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function 이름입력란({
  value,
  onChange,
}: Props): JSX.Element {
  return (
    <input
      className={스타일.입력란}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
