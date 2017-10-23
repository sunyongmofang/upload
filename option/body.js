var vfile = casper.cli.get(0).split(",");

casper.then(function() {
    this.wait(5000);
});

casper.then(function() {
    if( this.exists("div.qrcode-img") ) {
        this.echo("new session and please download qrcode");
        this.captureSelector("qrcode.png", "div.qrcode-img");
        this.waitFor(function() {
            return this.getCurrentUrl() == url;
        }, function() {
            this.echo("login success, please reexecution").exit();
        }, function() {
            this.echo("login failed!").exit();
        }, 120000);
    }
});

casper.then(function() {
    this.waitForSelector("button.is-close", function() { this.click("button.is-close"); }, function() { this.echo("is-close not found"); })
});

casper.then(function() {
    var file_index = 0;
    this.each(vfile, function(thiz, file_name) {
        thiz.then(function() {
            this.uploadFile(this.getDivSelector(), this.getInputSelector(), file_name);
            file_index++;
        });
        thiz.then(function() {
            this.wait(1000);
        });
        thiz.then(function() {
            this.waitFor(function() {
                this.clickRetry(file_index);
                return this.isUploadOver(file_index);
            }, function() {
                this.echo(file_name + " upload success");
            }, function() {
                this.echo(file_name + " upload error");
            }, 999999999);
        });
    });
});
