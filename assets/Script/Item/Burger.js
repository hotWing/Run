var HealthBar = require("HealthBar");
var GameManager = require("GameManager");
var Tutorial = require("Tutorial");
var GameState = require('GameState');

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
            Tutorial.inst.showHp();
            GameManager.inst.hpTutShown = true;
            GameManager.inst.gameState = GameState.tutorial;
        }
    },
});
