class GooglePage {
    elements = {
        btnAcceptConditionsXpath:()=>cy.xpath("//button//*[text()[contains(.,'Aceptar todo')]]"),
        inputMakeAnEntry:()=>cy.xpath("//input[@title='Buscar']"),
        tltleWikipediaXpath:()=>  cy.xpath("//h3[contains(.,'Automatización - Wikipedia')]"),
        paragraphYearXpath:()=>  cy.xpath("//p[contains(.,'1771')]")

    };

    visitPage(){
        cy.visit("/");
    }

    acceptConditions(){
        this.elements.btnAcceptConditionsXpath().click();
    }

    doSearch(search){
        this.elements.inputMakeAnEntry().clear().type(search).type("{enter}");
    }

    clickLinkWikipedia(){
        this.elements.tltleWikipediaXpath().click();
    }

}

module.exports = new GooglePage();