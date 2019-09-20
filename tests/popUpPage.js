module.exports = {
    //url: 'https://app.bitfoliex.com/login',
    url: 'https://app.vlcntest.com/login',
    elements: {
        inputEmail: '#email',
        inputPassword: '#password',
        loginButton : '.btn[type="submit"]',
        
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
       
    }]
};
