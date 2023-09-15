import type {} from "cypress";

describe("Pagina de Perfil", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("pruebamonoma");
        cy.get("#login-submit-button").click();
        cy.get("#main-menu-button").click();
        cy.contains("Perfil").click();
    });
    it("Debe Renderizar la informacion del usuario", () => {
        cy.get("#user-image").should("be.visible").and("have.attr", "src");
        cy.contains("Telefono:");
        cy.contains("Email:");
    });
});
