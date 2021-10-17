describe('랜딩페이지', () => {
  it('제목이 나오는지 확인합니다.', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.contains('섹스 신청서');
  });
});
