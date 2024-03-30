describe("Searching with string", () => {
  it("Searching show searched post", () => {
    cy.visit("https://www.detik.com/");
    cy.get('[placeholder="Cari Berita"]').type("covid");
    cy.get("[dtr-sec='search']").click();
    cy.get("[class='container content']").should("have.length", 1);
  });
});

describe("Searching with integer", () => {
  it("Searching show searched post", () => {
    cy.visit("https://www.detik.com/");
    cy.get('[placeholder="Cari Berita"]').type("46");
    cy.get("[dtr-sec='search']").click();
    cy.get("[class='container content']").should("have.length", 1);
  });
});

describe("Searching with null value", () => {
  it("Searching doesn't show any post", () => {
    cy.visit("https://www.detik.com/");
    cy.get('[placeholder="Cari Berita"]').type("{enter}");
    cy.get("[title='3 characters minimum'").should("contain.text", "");
  });
});
