import type {} from "cypress";

describe("Auth Control", () => {
    it("No debe permitir acceder al pokemon si el usuario no esta loggeado", () => {
        cy.visit("http://localhost:3000/pokemon/1");
        cy.url().should("include", "auth/login");
    });
    it("No debe permitir acceder al perfil si el usuario no esta loggeado", () => {
        cy.visit("http://localhost:3000/user");
        cy.url().should("include", "auth/login");
    });
    it("No debe permitir acceder al dashboard si el usuario no esta loggeado", () => {
        cy.visit("http://localhost:3000/pokemons");
        cy.url().should("include", "auth/login");
    });
    it("Hace el logout correctamente", () => {
        cy.visit("http://localhost:3000");
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("pruebamonoma");
        cy.get("#login-submit-button").click();
        cy.get("#main-menu-button").click();
        cy.contains("Logout").click();
        cy.url().should("include", "auth/login");
    });
});
