import Input from 'src/Input';
import Name from 'src/Name';

interface Props {
  value: string;
  names: string[];
  onChange: (value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}

export default function Names({
  value,
  names,
  onChange,
  onAdd,
  onRemove,
}: Props): JSX.Element {
  return (
    <section>
      <Input value={value} onChange={onChange} onAdd={onAdd} />
      {
        names.map((name, index) => (
          <Name
            key={name}
            value={name}
            onRemove={() => onRemove(index)}
          />
        ))
      }
    </section>
  );
}
