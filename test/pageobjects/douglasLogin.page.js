const Page = require('./page');

/**
 * sub page containing selectors and methods for login page
 */
class LoginPage extends Page {
    
    //accept cookies button
    get btnCookies () { return $("//button[normalize-space()='Alle erlauben']") }
    //username text box
    get inputUsername () 
    { return $("div[class='input__container login__email'] input[placeholder='E-Mail-Adresse*']") }
    //password text box
    get inputPassword () { return $("input[autocomplete='current-password']") }
    //submit button
    get btnSubmit () { return $("button[class='button button__primary login__button']") }
    //invalid login error message
    get invalidLoginMsg () { return $("div[class='alert alert--error'] span[class='google-translate-fallback']") }
    //forgot password link
    get forgotPwd () { return $("div[class='login__link']") }
    //email field to reset password
    get inputEmail () { return $("input[name = 'forgotPasswordEmail']") }
    //button to send reset password mail 
    get btnSendMail () { return $("button[class='button button__primary forgot-password__button']") }
    //sending email success message
    get emailSuccessmsg ()
    { return $("h2[class='headline-thin headline-thin--large']") }

    //user login method
    login (username, password) {
        this.inputUsername.waitForClickable({ timeout: 5000 })
        this.inputUsername.setValue(username)
        
        this.inputPassword.waitForClickable({ timeout: 5000 })
        this.inputPassword.setValue(password)
        
        this.btnSubmit.waitForClickable({ timeout: 5000 })
        this.btnSubmit.click()
    }

    //user accepting cookies
    acceptCookies () {
        
        this.btnCookies.waitForDisplayed({ timeout: 5000 })
        this.btnCookies.click()
    }

    //request reset password email
    sendEmail (userEmail) {

        this.forgotPwd.waitForClickable({ timeout: 5000 })
        this.forgotPwd.click()

        this.inputEmail.waitForClickable({ timeout: 5000 })
        this.inputEmail.setValue(userEmail)

        this.btnSendMail.waitForClickable({ timeout: 5000 })
        this.btnSendMail.click()
    }


    open () {
        return super.open('login')}
    
}

module.exports = new LoginPage();
