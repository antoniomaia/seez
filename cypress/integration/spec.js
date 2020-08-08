describe('Chuck Norris Fact Searcher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a hero section with a title, description and a button', () => {
    cy.get('[data-cy=hero-title]').should('have.length', 1);
    cy.get('[data-cy=hero-paragraph]').should('have.length', 1);
    cy.get('[data-cy=hero-cta]').should('have.length', 1);
  });

  it('switches to RTL', () => {
    cy.contains('Switch to RTL', { matchCase: false }).click();
    cy.contains('Switch to LTR', { matchCase: false });
  });

  it('can fill the search input', () => {
    cy.get('input[id="search-input"]')
      .type('random')
      .should('have.value', 'random');
  });

  it('can make requests to the Chuck Norris API', () => {
    cy.request('/api/search?searchTerm=random').then(response => {
      expect(response.body).to.have.property('total');
      expect(response.body).to.have.property('result');
    });
  });

  it('can search for Chuck Norris facts', () => {
    cy.get('input[id="search-input"]')
      .type('random')
      .should('have.value', 'random');

    cy.request('/api/search?searchTerm=random').then(response => {
      expect(response.body).to.have.property('total');
      expect(response.body).to.have.property('result');
    });
  });

  it('can display Chuck Norris facts', () => {
    cy.get('input[id="search-input"]')
      .type('random')
      .should('have.value', 'random');

    cy.request('/api/search?searchTerm=random').then(response => {
      expect(response.body).to.have.property('total');
      expect(response.body).to.have.property('result');
    });

    cy.get('[data-cy=facts-container]');
    cy.get('[data-cy=facts-item]').its('length').should('be.gt', 2);
  });

  it('returns error if search term is not between range 3 and 120', () => {
    cy.request({
      url: `/api/search?searchTerm=${'a'.repeat(2)}`,
      failOnStatusCode: false,
    }).then(response => {
      expect(response.body).to.have.property('error');
    });
    cy.request({
      url: `/api/search?searchTerm=${'a'.repeat(121)}`,
      failOnStatusCode: false,
    }).then(response => {
      expect(response.body).to.have.property('error');
    });
  });
});
