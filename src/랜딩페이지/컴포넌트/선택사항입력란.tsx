interface Props {
  type: string;
  placeholder?: string;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onChecked: (checked: boolean) => void;
}

export default function 선택사항입력란({
  type,
  placeholder = '',
  value,
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
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
