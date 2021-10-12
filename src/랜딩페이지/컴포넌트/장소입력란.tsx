interface Props {
  장소: string;
  disabled: boolean;
  onChange: (장소: string) => void;
  onChecked: (체크됨: boolean) => void;
}

export default function 장소입력란({
  장소,
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
      장소
      <input
        type="text"
        value={장소}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
