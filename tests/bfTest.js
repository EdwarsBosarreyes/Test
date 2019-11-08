module.exports = {
    '@tags': ['bf'],
    //'@disabled': true,
    'Bitfoliex Login'(browser){

        const Email= 'ebosarreyes@masterdevel.com';
        const Pass = 'Edwars1992';
        

        const page = browser.page.bfPage();

        page
            .navigate()
            .setEmail(Email)
            .setPass(Pass)
            .login()
            .saveScreenshot('test_output/login.png')
            .pause(3000)
            .saveScreenshot('test_output/home.png')
            .closeButtonPopUp()
            .pause(1000)
            .receiveClick()
            .pause(1000)
            .saveScreenshot('test_output/receive.png')
            .selectCrypto()
            .pause(1000)
            .saveScreenshot('test_output/modal.png')
            .changeEthereum()
            .pause(1000)
            .saveScreenshot('test_output/receive-Ethereum.png')
            .selectCrypto()
            .pause(1000)
            .changeBitcoinCash()
            .pause(1000)
            .saveScreenshot('test_output/receive-BitcoinCash.png')
            .selectCrypto()
            .pause(1000)
            .changeStellar()
            .pause(1000)
            .saveScreenshot('test_output/receive-Stellar.png')
            .selectCrypto()
            .pause(1000)
            .changeTraxalt()
            .pause(1000)
            .saveScreenshot('test_output/receive-Traxalt.png')
            .selectCrypto()
            .pause(1000)
            .changeBitcoin()
            .pause(1000)
            .saveScreenshot('test_output/receive-Bitcoin.png');
     
    }
}
