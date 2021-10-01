interface Props {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

export default function Input({ value, onChange, onAdd }: Props): JSX.Element {
  return (
    <div>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      <button
        type="button"
        title="추가"
        aria-label="추가"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
}
