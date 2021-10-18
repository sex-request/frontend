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
  const isTextarea = type === 'textarea';

  const CheckBox = () => (
    <input
      type="checkbox"
      checked={!disabled}
      onChange={(e) => onChecked(e.target.checked)}
    />
  );
  const Label = () => (
    <label htmlFor={labelText}>
      {labelText}
    </label>
  );
  const Textarea = () => (
    <textarea
      id={labelText}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
  const Input = () => (
    <input
      id={labelText}
      type={type}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
  const InputField = () => (isTextarea ? <Textarea /> : <Input />);

  return (
    <div>
      <CheckBox />
      <Label />
      <InputField />
    </div>
  );
}
