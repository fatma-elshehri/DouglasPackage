const LoginPage = require('../pageobjects/douglasLogin.page')
const myDouglasPage = require('../pageobjects/myDouglas.page')
const data = require( '../data/data.json')

/**
* Test cases for login module
* are described here
*/

describe('Douglas Login Test', () => {

    it('User is not allowed to login with invalid credentials', () => {
        LoginPage.open()

        LoginPage.acceptCookies()
        LoginPage.login(data.invalidCred.email, data.invalidCred.password)
        
        //check that error message exists and that it is valid
        expect(LoginPage.invalidLoginMsg).toBeExisting
        ({message:'Error message of invalid credentials is not displayed'})

        expect(LoginPage.invalidLoginMsg).toHaveText
        (data.invalidLoginMsg, {message:'Text of invalid login message is not as expected'})
       
    });



    it('User is allowed to login with valid credentials', () => {
        LoginPage.open()

        //LoginPage.acceptCookies()
        LoginPage.login(data.validCred.email, data.validCred.password)

        //check that URL is correct and user is directed to my Douglas page
        expect(browser).toHaveUrl
        (data.myDouglasURL, {message:'User is not correctly logged in'})
    
    });


    it('Welcome message is displayed to logged in user', () => {
        //check that welcome message exists and that it is valid
        expect(myDouglasPage.welcomeHeader).toBeExisting
        ({message:'Welcome message is not displayed'})

        expect(myDouglasPage.welcomeHeader).toHaveTextContaining
        (data.loginWelcomeMsg, {message:'Text of welcome message is not as expected'})
    
    });
    

});  

