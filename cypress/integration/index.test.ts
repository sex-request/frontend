import path from 'path';

describe('랜딩페이지', () => {
  it('제목이 나오는지 확인합니다.', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('섹스 신청서');
  });

  context('주소에 쿼리스트링이 있으면', () => {
    const 신청하는사람: string = '신청하는사람';
    const 신청받는사람: string = '신청받는사람';
    const 보여지는날짜: string = '2021년 10월 27일';
    const 보여지는시간: string = '오후 10:00';
    const 날짜: string = '2021-10-27';
    const 시간: string = '22:00';
    const 장소: string = '우리집';
    const 약속: string = '10분 이상 하겠습니다.';

    it('값을 받아 채웁니다.', () => {
      cy.visit(`http://localhost:3000?from=${encodeURI(신청하는사람)}&to=${encodeURI(신청받는사람)}&time=${encodeURI(시간)}&date=${encodeURI(날짜)}&location=${encodeURI(장소)}&promise=${encodeURI(약속)}`);

      cy.get('input').eq(0).should('have.value', 신청하는사람);
      cy.get('input').eq(1).should('have.value', 신청받는사람);
      cy.get('#날짜').should('have.value', 보여지는날짜);
      cy.get('#시간').should('have.value', 보여지는시간);
      cy.get('#장소').should('have.value', 장소);
      cy.get('#약속').should('have.value', 약속);
    });
  });

  context('가벼운 성교육 버튼을 클릭했을 때', () => {
    const 버튼: string = '가벼운 성교육';
    const 팝업타이틀: string = '가벼운 성교육 시간!';

    it('"가벼운 성교육 시간!" 이라는 팝업이 나타납니다.', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('button', 버튼).click();

      cy.contains(팝업타이틀);
    });
  });

  context('조심해주세요 버튼을 클릭했을 때', () => {
    const 버튼: string = '조심해주세요';
    const 팝업타이틀: string = '이용하실 때 주의해주세요!';

    it('"이용하실 때 주의해주세요!" 이라는 팝업이 나타납니다.', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('button', 버튼).click();

      cy.contains(팝업타이틀);
    });
  });
});
