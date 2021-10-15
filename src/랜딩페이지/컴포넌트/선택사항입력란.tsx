interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  disabled: boolean;
  labelText: string;
  onChange: (value: string) => void;
  onChecked: (checked: boolean) => void;
}

export default function 선택사항입력란({
  type = 'text',
  placeholder = '',
  value,
  disabled,
  labelText,
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
      <label htmlFor={labelText}>
        {labelText}
      </label>
      <input
        id={labelText}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
