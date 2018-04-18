var HealthBar = require("HealthBar");
var GameManager = require("GameManager");
var ScrollBg = require("ScrollBg");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onCollisionEnter: function (other, self) {
        HealthBar.inst.addBurger();
        if (!GameManager.inst.hpTutShown)
        {
            cc.director.pause();
            GameManager.inst.hpTutShown = true
        }
    },
});
