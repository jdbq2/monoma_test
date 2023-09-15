import type {} from "cypress";

describe("Login", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });
    it("Muestra la pantalla de Login", () => {
        cy.contains("PokeDex");
        cy.contains("Email");
        cy.contains("Contraseña");
        cy.contains("Iniciar sesión");
    });
    it("Muestra el toast de error cuando las credenciales son incorrectas", () => {
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("password");
        cy.get("#login-submit-button").click();
        cy.contains("Credenciales incorrectas");
    });
    it("Valida campos requeridos", () => {
        cy.get('[name="password"]').type("password");
        cy.get("#login-submit-button").click();
        cy.contains("Este Campo es obligatorio");
    });
    it("Realiza el Login Correctamente", () => {
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("pruebamonoma");
        cy.get("#login-submit-button").click();
        cy.get("#main-menu-button");
    });
    it("Hace el setting del localStorage", () => {
        cy.get('[name="email"]').type("email@example.com");
        cy.get('[name="password"]').type("pruebamonoma");
        cy.get("#login-submit-button")
            .click()
            .should(() => {
                expect(localStorage.getItem("userInfo")).not.null;
                expect(localStorage.getItem("userToken")).not.null;
            });
    });
});
