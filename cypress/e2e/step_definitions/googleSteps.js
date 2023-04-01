import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
const googlePage=require("../../pages/GooglePage")
const wikipediaPage=require("../../pages/WikipediaPage")

 Given("Buscar en google la palabra {string}", (search) => {
    googlePage.visitPage();
    googlePage.acceptConditions(); 
    googlePage.doSearch(search);
   
 });


  When("Buscar el Link de la Wikipedia resultante", () => {
   googlePage.clickLinkWikipedia();
   
 });


