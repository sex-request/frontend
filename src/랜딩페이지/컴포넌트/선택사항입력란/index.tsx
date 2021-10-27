import {
  Section,
  CheckBox,
  TextLabel,
  Input,
  Textarea,
  DatePicker,
  TimePicker,
} from 'src/랜딩페이지/컴포넌트/선택사항입력란/styles';

export type Type = 'text' | 'textarea' | 'date' | 'time';
interface Props {
  type?: Type;
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
  const isDate = type === 'date';
  const isTime = type === 'time';
  const isText = type === 'text';

  return (
    <Section>
      <CheckBox
        checked={!disabled}
        onChange={(e) => onChecked(e.target.checked)}
      />
      <TextLabel htmlFor={labelText}>
        {labelText}
      </TextLabel>
      {
        isTextarea && (
          <Textarea
            id={labelText}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        )
      }
      {
        isText && (
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
      {
        isDate && (
          <DatePicker
            id={labelText}
            value={value}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
          />
        )
      }
      {
        isTime && (
          <TimePicker
            id={labelText}
            value={value}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
          />
        )
      }
    </Section>
  );
}
