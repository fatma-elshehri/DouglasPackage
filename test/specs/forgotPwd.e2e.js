
const LoginPage = require('../pageobjects/douglasLogin.page')
const myDouglasPage = require('../pageobjects/myDouglas.page')
const data = require( '../data/data.json')

/**
* Test case for forgot password module
* described here
*/
describe('Douglas Fotgot Password Test', () => {

    it('Send reset password email', () => {
        LoginPage.open()

        LoginPage.acceptCookies()
        LoginPage.sendEmail(data.validCred.email)
        
        //check that success message exists and that it is valid
        expect(LoginPage.emailSuccessmsg).toBeExisting
        ({message:'Forgot password email success message is not displayed'})
        
        expect(LoginPage.emailSuccessmsg).toHaveText
        (data.emailSentMsg, {message:'Text of email success message is not as expected'})

    });

});  
