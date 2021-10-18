import 스타일 from 'src/랜딩페이지/컴포넌트/선택사항입력란/선택사항입력란.module.sass';

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
      className={스타일.체크박스}
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
      className={스타일.입력란}
      id={labelText}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
  const Input = () => (
    <input
      className={스타일.입력란}
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
    <section className={스타일.컨테이너}>
      <CheckBox />
      <Label />
      <InputField />
    </section>
  );
}
