/// <reference types= "cypress" />
//This function is to describe the test suite.
describe("Instagram Login Test suite", function () {
    //This function is to write test cases.
    it(`Login to Insatgram`, function () {
    //To visit or open a web application/base url.
    cy.visit("https://www.instagram.com/");
  });
});