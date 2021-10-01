interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Input({ value, onChange }: Props): JSX.Element {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  );
}
