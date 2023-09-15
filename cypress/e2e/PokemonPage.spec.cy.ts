import type {} from "cypress";

describe("Pagina de Pokemon", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("pruebamonoma");
        cy.get("#login-submit-button").click();
        cy.get("#cards-wrapper").children().first().click();
    });
    it("Debe Renderizar la informacion del pokemon", () => {
        cy.get("#detail-pokemon-image")
            .should("be.visible")
            .and("have.attr", "src");
        cy.contains("Peso:");
        cy.contains("Altura:");
    });
    it("Debe tener el id del pokemon en la URL", () => {
        cy.url().should("include", "pokemon/1");
    });
});
