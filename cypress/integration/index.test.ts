import path from 'path';

describe('랜딩페이지', () => {
  it('제목이 나오는지 확인합니다.', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('섹스 신청서');
  });

  it('쿼리 스트링을 받아 채웁니다.', () => {
    // 한글로 주소를 적으면 에러남
    cy.visit(
      'http://localhost:3000?from=from&to=to&date=2021-01-01&time=12:00:00&location=location&promise=promise',
    );
    cy.contains('from');
    cy.contains('to');
    cy.get('#날짜').should('have.value', '2021-01-01');
    cy.get('#시간').should('have.value', '12:00:00');
    cy.get('#장소').should('have.value', 'location');
    cy.get('#약속').should('have.value', 'promise');
  });

  context('이미지로 다운로드 버튼을 누를 때', () => {
    const 다운로드폴더: string = Cypress.config('downloadsFolder');
    const 버튼_텍스트: string = '이미지로 다운로드';
    const 다운로드한_파일이름: string = path.join(다운로드폴더, '섹스신청서.png');

    it('섹스신청서.png 파일을 다운로드 받습니다.', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('button', 버튼_텍스트).click();

      cy.readFile(다운로드한_파일이름, { timeout: 15000 })
        .should('not.be.empty');
    });
  });
});
