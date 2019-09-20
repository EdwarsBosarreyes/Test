module.exports = {
    '@tags': ['pop'],
    //'@disabled': true,
    'Bitfoliex Login'(browser){

        const Email= 'ebosarreyes@masterdevel.com';
        const Pass = 'Edwars1992';
        

        const page = browser.page.bfPage();

        page
            .navigate()
            .setEmail(Email)
            .setPass(Pass)
            .login();
            
            browser
            .pause(2000)
            .execute(function() {
                return window.localStorage.getItem('pop-up-date');
              }, [], function(result) {
                this.assert.equal(result.value, 20);
              })
            .saveScreenshot('test_output/login.png')
            .pause(1000);

    }
}

