module.exports = {
    '@tags': ['bf'],
    //'@disabled': true,
    'Bitfoliex Login'(browser){

        const Email= 'ebosarreyes@masterdevel.com';
        const Pass = 'Edwars1992';
        const amountSend = 1;
        

        const page = browser.page.bfPage();

        page
            .navigate()
            .setEmail(Email)
            .setPass(Pass)
            .login()
            //.buyTraxalt()
            .exchange()
            //.setAmountbuy(amountBuy);
            //.pause(20000)
            browser
            //.waitForElementVisible('.txt-ad-body')
            //.verify.elementNotPresent('.txt-ad-body', 'PopUp No Presente')
            .saveScreenshot('test_output/login.png')
            .pause(20000)

    }
}