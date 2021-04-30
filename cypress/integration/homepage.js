 describe("rendes the home page",() =>{
    it("renders correctly",() =>{
         cy.visit("/")
         cy.get("#container").should("exist")
    });
  
});