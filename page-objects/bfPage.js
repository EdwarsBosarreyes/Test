module.exports = {
    //url: 'https://app.bitfoliex.com/login',
    url: 'https://app.vlcntest.com/login',
    elements: {
        inputEmail: '#email',
        inputPassword: '#password',
        loginButton : '.btn[type="submit"]',
        exchangeButton: '.nav-link[href="/exchange"]',
        //buyTraxButton: '.nav-link[href="/buytxt"]',   
        inputAmountBuy: '#form-control',
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
        /*buyTraxalt(){
            return this
                .click('@buyTraxButton');          
        },*/
        exchange(){
            return this
                .click('@exchangeButton');          
        },
        /*setAmountbuy(value){
            return this
                .setValue('@inputAmountBuy', value);
        }*/

    }]
};