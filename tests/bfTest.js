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
            .pause(2000)
            .saveScreenshot('test_output/home.png')
            .closeButtonPopUp()
            .pause(3000)
            .receiveClick()
            .saveScreenshot('test_output/receive.png')
            .selectCrypto()
            .pause(1000)
            .saveScreenshot('test_output/modal.png')
            /*.verify.elementPresent('.crypto-modal', 'Encontrado')
            .verify.elementPresent('.crypto-modal li:nth-child(1)', 'Bitcoin')
            .verify.elementPresent('.crypto-modal li:nth-child(2)', 'Ethereum')
            .verify.elementPresent('.crypto-modal li:nth-child(3)', 'Bitcoin Cash')
            .verify.elementPresent('.crypto-modal li:nth-child(4)', 'Stellar')
            .verify.elementPresent('.crypto-modal li:nth-child(5)', 'Traxalt')*/
            .changeEthereum()
            .pause(1000)
            .saveScreenshot('test_output/receive-Ethereum.png')
            .selectCrypto()
            .changeBitcoinCash()
            .pause(1000)
            .saveScreenshot('test_output/receive-BitcoinCash.png');
            //.click('.crypto-modal img:nth-child(1)');
            
            
           /* browser
            
            .saveScreenshot('test_output/login.png')
            .pause(2000)
             */ 

    }
}
