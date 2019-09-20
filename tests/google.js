module.exports = {
    '@tags': ['google'],
    //'@disabled': true,
    'Google advanced search: Elon Musck'(browser){

        const mainQuery = 'Elon Musk';
        
        /*const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_es"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';*/

        const page = browser.page.googleAdvancedSearch();

        //debugger;

        //browser
        page
            .navigate()
            //.url('https://www.google.com/advanced_search')
            //.setValue(mainQueryInputSelector, mainQuery)
            .setQuery(mainQuery)
            //.setValue('@mainQueryInput', mainQuery)
            //.click(languageDropdownOpenerSelector)
            //.click(languageDropdownValueSelector)
            .selectFilter('@languageDropdown', 'lang_es')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search();
            //.click(lastUpdateDropdownOpenerSelector)
            //.click(lastUpdateDropdownValueSelector)
            //.perform(() => { debugger; })
            //.click(submitButtonSelector)
        browser
            .assert.urlContains('as_q=Elon+Musk','Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_es', 'Params: Language is spanish')
            .assert.urlContains('as_qdr=m', 'Params: Time perios is las month')

            const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
            const resultsPageLanguageSelector = '[aria-label="Buscar páginas en Español"]';
            const resultsPagelastUpdateSelector = '[aria-label=" Último mes"]';
    
            browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
            browser.assert.containsText(resultsPageLanguageSelector, 'Buscar páginas en Español');
            browser.assert.containsText(resultsPagelastUpdateSelector, 'Último mes');

            browser.saveScreenshot('test_output/google.png')
            .pause(1000)
    }
}