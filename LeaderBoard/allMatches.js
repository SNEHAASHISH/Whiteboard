let request = require("request");
let cheerio = require("cheerio");
const findMatch = require("./match");

function getAllMatches(link) {
    request(link, cb);
}

function cb(error, response, html) {
    if (error == null && response.statusCode == 200) {
        parseData(html);
    }
    else if (response.statusCode == 404) {
        console.log("Page not found!!");
    }
    else {
        console.log(error);
    }
}

function parseData(html) {
    let ch = cheerio.load(html);
    let aTags = ch("a[data-hover='Scorecard']");
    for (let i = 0; i < aTags.length; i++) {
        let link = ch(aTags[i]).attr("href");
        let completeLink = "https://www.espncricinfo.com" + link;
        findMatch(completeLink);
    }
}

module.exports = getAllMatches;