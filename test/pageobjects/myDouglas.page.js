const Page = require('./page');

/**
 * sub page containing selectors and methods for my Douglas page
 */
class myDouglas extends Page {    

    //login welcome message in my Douglas page
    get welcomeHeader () { return $("h2[class='headline-bold account-overview-head__title']") }

}

module.exports = new myDouglas();
