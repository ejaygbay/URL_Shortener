var express = require('express');
var app = express();
var min = 1000;
var max = 9999;
var ranNum = ranNum = Math.floor(Math.random() * (max - min)) + min;
var result;
var url;

app.get("/:url(*)", function(req, res) {
    url = req.params.url;
    var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z_]{2,6})([\/\w\._-]*)*\/?$/
    var check = pattern.test(url);

    if (check == true) {
        result = { "original_url": url, "shorten_url": ranNum };
        return res.send(result);
    } else {
        return res.send({ "original_url": "Invalid URL!", "shorten_url": null });
    }
});

app.get("/:ranNum(*)", function(req, res) {
    var url2 = req.params.ranNum;
    var https = /^(https?:\/\/)?([\da-z]+)$/;
    var check2 = https.test(url2);
    if (check2 == true && url2 == "http://" + ranNum || url2 == "https://" + ranNum) {
        res.redirect("https://" + url);
    }
});

app.listen(3000, function() {
    console.log("node is listening on port: 3000");
});