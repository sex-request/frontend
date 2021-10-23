interface Props {
  key: string;
  value: string;
}

export default function 쿼리생성(props: Props[]): string {
  return props.filter(({ value }) => value !== '')
    .map(({ key, value }) => `${key}=${encodeURI(value)}`)
    .join('&');
}
