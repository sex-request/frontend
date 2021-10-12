interface Props {
  날짜: string;
  disabled: boolean;
  onChange: (날짜: string) => void;
  onChecked: (체크됨: boolean) => void;
}

export default function 날짜입력란({
  날짜,
  disabled,
  onChange,
  onChecked,
}: Props): JSX.Element {
  return (
    <div>
      <input
        type="checkbox"
        checked={!disabled}
        onChange={(e) => onChecked(e.target.checked)}
      />
      날짜
      <input
        type="date"
        value={날짜}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
