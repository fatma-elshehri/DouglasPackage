/**
* main page object containing methods,
* that are shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.navigateTo(`https://www.douglas.de/de/${path}`)
        
    }
}
