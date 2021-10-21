export default function 기본값_설정(
  값: string | null,
  값_변경_함수: (값: string) => void,
  사용_여부_함수?: ((사용_여부: boolean) => void),
) {
  if (값) {
    값_변경_함수(값);
  }

  if (사용_여부_함수) {
    사용_여부_함수(true);
  }
}
