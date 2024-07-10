"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/user", function (req, res) {
    var data = [
        {
            id: 1,
            username: "spyro",
            email: "example@gmail.com"
        }
    ];
    var response = {
        success: true,
        data: data
    };
    res.json(response);
});
exports.default = router;
