
casper.getInputID = function() {
    return this.getElementAttribute("div.upload-wrp>div>input[type='file']", "id");
}

casper.getDivID = function() {
    return this.getInputID() + "_container";
}

casper.getInputSelector = function() {
    return "input#" + this.getInputID();
}

casper.getDivSelector = function() {
    return "div#" + this.getDivID();
}

casper.uploadFile = function(div, input, file) {
    this.fillSelectors(div, { input : file }, true);
}

casper.isUploadOver = function(file_index) {
    var upload = "div.upload-wrp>ul>li:nth-child(" + file_index + ")>div.meta-wrp>div.status-wrp>div:nth-child(3)";
    var width = "div.upload-wrp>ul>li:nth-child(" + file_index + ")>div.meta-wrp>div.progress-wrp>div.progress";
    var upload_str = this.getHTML(upload);
    var width_str = this.getElementAttribute(width, "style");
    return upload_str.indexOf("Upload complete") != -1 && width_str == "width: 100%;";
}

casper.clickRetry = function(file_index) {
    var retry = "div.upload-wrp>ul>li:nth-child(" + file_index + ")>div.meta-wrp>div.status-wrp>div:nth-child(7)";
    if ( this.visible(retry) ) {
        this.click(retry);
    }
}

