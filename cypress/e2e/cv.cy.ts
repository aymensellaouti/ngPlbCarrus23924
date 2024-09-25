import {APP_API} from './../../src/app/config/app-api.config';
describe('La page cv', () => {
  it('should show list without card', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs'});
    cy.visit('/cv');
    cy.get("[data-cy='listCv']");
    cy.get("[data-cy='cvCard']").should('not.exist');
    cy.get("[data-cy='listCv']").children().first().click();
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get("[data-cy='detailsBtn']").click({ force: true });
    cy.location().should((actualLocaltion) => {
      expect(actualLocaltion.pathname).to.equal('/cv/1');
    });
  });
});
