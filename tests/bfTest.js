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
            .pause(5000)
            .closeButtonPopUp()
            .pause(3000)
            .receiveClick()       
            .selectCrypto();
            //.changeBitcoin();
            
            browser
            //.assert.attributeContains('img', 'src', '/_nuxt/img/bitcoin.d7876d4.svg')    
            //.assert.visible('//img[@*src="/_nuxt/img/bitcoin.d7876d4.svg"]')
            .saveScreenshot('test_output/login.png')
            .pause(2000)
            /*.execute(function() {
                return window.localStorage.getItem('pop-up-date');
              }, [], function(result) {
                //this.assert.equal(result.value, 20);
                if (result.value != null){
                    browser.pause(2000);
                    console.log("El valor es: "+" "+result.value);
                    browser.saveScreenshot('test_output/login.png')
                    .pause(2000);   
                }

              });*/
              

    }
}
