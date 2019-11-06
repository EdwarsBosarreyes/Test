module.exports = {
    //url: 'https://app.bitfoliex.com/login',
    url: 'https://app.vlcntest.com/login',
    elements: {
        inputEmail: '#email',
        inputPassword: '#password',
        loginButton : '.btn[type="submit"]',
        closePopUp: '.txt-ad-close-button',
        receiveButton: '.nav-link[href="/receive"]',
        cryptoSelector: '.crypto-selector',
        //divClass: '.modal-body'
    },
    commands: [{
        setEmail(value){
            return this
                .setValue('@inputEmail', value);
        },
        
        setPass(value){
            return this
                .setValue('@inputPassword', value);
        },
        login(){
            return this
                .click('@loginButton');
        },
        closeButtonPopUp(){
            return this
                .click('@closePopUp');
        },
        receiveClick(){
            return this
                .click('@receiveButton');          
        },
        selectCrypto(){
            return this
                .click('@cryptoSelector');
        },
        changeBitcoin(){
            return this
                //.useXpath()
                //.click(".//text()[contains(.,'Bitcoin Cash')]/..");
        }
       
    }]
};
