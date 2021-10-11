interface Props {
  value: string;
  onChange: (value: string) => void;
  onKeyUpEnter: () => void;
}

export default function 입력란({
  value,
  onChange,
  onKeyUpEnter,
}: Props): JSX.Element {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={(e) => { if (e.key === 'Enter') onKeyUpEnter(); }}
    />
  );
}
