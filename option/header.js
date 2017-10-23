
var url = "https://member.bilibili.com/video/resubmit.html";

var casper = require("casper").create({
    viewportSize :
    {
        width: 1920,
        height: 1080
    }
});

casper.start();

casper.open(url, {
    method : "get",
    headers :
    {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.8",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"
    }
});

