interface Props {
  약속: string;
  disabled: boolean;
  onChange: (약속: string) => void;
  onChecked: (체크됨: boolean) => void;
}

export default function 약속입력란({
  약속,
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
      약속
      <textarea
        value={약속}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
