interface Props {
  시간: string;
  disabled: boolean;
  onChange: (시간: string) => void;
  onChecked: (체크됨: boolean) => void;
}

export default function 시간입력란({
  시간,
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
      시간
      <input
        type="time"
        value={시간}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
