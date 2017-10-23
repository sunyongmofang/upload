
casper.then(function() {
    this.echo("end upload");
    this.click("div.template-hint");
});

casper.then(function() {
    this.click("div.form-header ul li span.name");
});

casper.then(function() {
    this.sendKeys("input[maxlength='200']", "https://www.twitch.com/");
    this.wait(1500);
});

casper.then(function() {
    this.click("button.submit-btn");
    this.wait(3000);
});

casper.then(function() {
    this.capture("b.png");
});

casper.run();
