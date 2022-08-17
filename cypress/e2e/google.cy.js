describe("This is my first cypress test", () => {
    it("should have a title", () => {
      cy.visit("https://www.google.com/");
      cy.get("[title='Buscar']").type("minecraft {enter}")
      cy.get("h2 span").should("have.text", "Minecraft")
    });
  });
