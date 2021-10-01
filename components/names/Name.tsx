interface Props {
  value: string;
  onRemove: () => void;
}

export default function Name({ value, onRemove }: Props): JSX.Element {
  return (
    <div>
      {value}
      <button
        type="button"
        title="삭제"
        aria-label="삭제"
        onClick={onRemove}
      >
        -
      </button>
    </div>
  );
}
