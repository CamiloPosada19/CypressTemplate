import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
const wikipediaPage=require("../../pages/WikipediaPage")

When("Comprobar en que año se hizo el primer proceso automático", () => {
   wikipediaPage.verifyYearProcess();
   
 });

Then("Realizar un Screenshots de la página de la Wikipedia donde figura el año", () => {
  wikipediaPage.takeScreenshot();
   
 });

