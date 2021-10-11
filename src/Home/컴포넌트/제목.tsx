import Image from 'next/image';

export default function 제목(): JSX.Element {
  return (
    <h1>
      <Image
        src="/logo.png"
        alt=""
        width={60}
        height={60}
      />
      섹스 신청서
      <Image
        src="/logo.png"
        alt=""
        width={60}
        height={60}
      />
    </h1>
  );
}
