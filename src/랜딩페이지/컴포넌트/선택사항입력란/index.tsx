import {
  Section,
  CheckBox,
  Input,
  Textarea,
} from 'src/랜딩페이지/컴포넌트/선택사항입력란/styles';

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

  return (
    <Section>
      <CheckBox
        checked={!disabled}
        onChange={(e) => onChecked(e.target.checked)}
      />
      <label htmlFor={labelText}>
        {labelText}
      </label>
      {
        isTextarea
          ? (
            <Textarea
              id={labelText}
              value={value}
              disabled={disabled}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
            />
          )
          : (
            <Input
              id={labelText}
              type={type}
              value={value}
              disabled={disabled}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
            />
          )
      }
    </Section>
  );
}
