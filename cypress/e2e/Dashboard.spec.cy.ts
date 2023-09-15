import type {} from "cypress";

describe("Dashboard", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("pruebamonoma");
        cy.get("#login-submit-button").click();
    });
    it("Debe renderizar las 10 tarjetas pokemon", () => {
        cy.get("#cards-wrapper").children().should("have.length", 10);
    });
    it("Debe funcionar la paginación", () => {
        cy.get("#pagination-front").click();
        cy.contains("2/");
        cy.get("#pagination-back").click();
        cy.contains("1/");
        cy.get("#pagination-back").should("be.disabled");
    });
    it("Debe funcionar el menú", () => {
        cy.get("#main-menu-button").click();
        cy.contains("Perfil");
        cy.contains("Logout");
    });
});
