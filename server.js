/**
 * Created by odyssefs on 20.03.16.
 */
var express = require("express"),
    api = require("./api"),
    users = require("./accounts"),
    app = express();

app
    .use(express.static('./public'))
    .use(users)
    .use("/api", api)
    .get('*', function (req, res) {
        if (!req.user){
            res.setHeader("Content-Type", "text/html");
            res.redirect("/login");
            res.end;
        }
        res.sendfile('public/main.html');
    })
    .listen(3000);
