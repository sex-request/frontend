interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function 입력란({
  value,
  onChange,
}: Props): JSX.Element {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
