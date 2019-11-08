module.exports = {
    url: 'https://app.bitfoliex.com/login',
    //url: 'https://app.vlcntest.com/login',
    elements: {
        inputEmail: '#email',
        inputPassword: '#password',
        loginButton : '.btn[type="submit"]',
        closePopUp: '.txt-ad-close-button',
        receiveButton: '.nav-link[href="/receive"]',
        cryptoSelector: '.crypto-selector',
        selectBitcoin: '.crypto-modal li:nth-child(1)',
        selectEthereum: '.crypto-modal li:nth-child(2)',
        selectBitcoinCash: '.crypto-modal li:nth-child(3)',
        selectStellar: '.crypto-modal li:nth-child(4)',
        selectTraxalt: '.crypto-modal li:nth-child(5)',

        
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

        changeEthereum(){
            return this
                .click('@selectEthereum');
        },

        changeBitcoinCash(){
            return this
                .click('@selectBitcoinCash');
        },

        changeStellar(){
            return this
                .click('@selectStellar');
        },

        changeTraxalt(){
            return this
                .click('@selectTraxalt');
        },

        changeBitcoin(){
            return this
                .click('@selectBitcoin');
        }
       
       
    }]
};
