const express = require("express");
const request = require('request');
const router = express.Router();
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
router.get("/home", async (req, res) => {
    res.render("pages/home");
});
//
router.get("/politica-de-cookies", async (req, res) => {
    res.render("pages/politica-de-cookies");
});
//
//
router.get("/start/:SessionName", async (req, res, next) => {
    request.get("http://localhost:9000/sistem/start/" + req.params.SessionName, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        } else {
            res.json(error);
        }
    });
});
//
router.get("/QRCode/:SessionName/:View", async (req, res, next) => {
    request.get("http://localhost:9000/sistem/QRCode/" + req.params.SessionName + "/" + req.params.View, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        } else {
            res.json(error);
        }
    });
});
//
router.get("/close/:SessionName", async (req, res) => {
    request.get("http://localhost:9000/sistem/close/" + req.params.SessionName, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        } else {
            res.json(error);
        }
    });
});
//
router.get("/sendText", async (req, res) => {
    res.render("sistem/sendText");
});
//
router.get("/sendTextMult", async (req, res) => {
    res.render("sistem/sendTextMult");
});
//
router.get("/sendTextGrupo", async (req, res) => {
    res.render("sistem/sendTextGrupo");
});
//
//
router.get("/sendImage", async (req, res) => {
    res.render("sistem/sendImage");
});
//
router.get("/sendImageMult", async (req, res) => {
    res.render("sistem/sendImageMult");
});
//
router.get("/sendImgGrupo", async (req, res) => {
    res.render("sistem/sendImgGrupo");
});
//
//
router.get("/checkNumberStatus", async (req, res) => {
    res.render("sistem/checkNumberStatus");
});
//
router.get("/checkNumberStatusMult", async (req, res) => {
    res.render("sistem/checkNumberStatusMult");
});
//
//
// ------------------------------------------------------------------------------------------------------- //
//
//
module.exports = router;