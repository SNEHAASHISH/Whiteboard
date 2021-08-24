let request = require("request");
let cheerio = require("cheerio");
const getAllMatches = require("./allMatches");

request("https://www.espncricinfo.com/series/_/id/8039/season/2015/icc-cricket-world-cup", cb);

function cb(error, response, html) {
    if (error == null && response.statusCode == 200) {
        parseData(html);
    }
    else if (response.statusCodeCode == 404) {
        console.log("Page not found!!");
    }
    else {
        console.log(error);
    }
}

function parseData(html) {
    let ch = cheerio.load(html);
    let link = ch(".widget-items.cta-link a").attr("href");
    let completeLink = "https://www.espncricinfo.com" + link;
    getAllMatches(completeLink);
}
