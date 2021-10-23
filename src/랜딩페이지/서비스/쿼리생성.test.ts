import 쿼리생성 from 'src/랜딩페이지/서비스/쿼리생성';

test('주어진 값에 맞춰 쿼리를 생성합니다.', () => {
  expect(쿼리생성([
    { key: 'date', value: '2021-10-23' },
    { key: 'time', value: '' },
    { key: 'location', value: '우리집' },
    { key: 'promise', value: '10분 이상 하겠습니다.' },
  ])).toBe('date=2021-10-23&location=%EC%9A%B0%EB%A6%AC%EC%A7%91&promise=10%EB%B6%84%20%EC%9D%B4%EC%83%81%20%ED%95%98%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4.');
});
