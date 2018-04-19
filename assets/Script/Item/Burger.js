var HealthBar = require("HealthBar");
var GameManager = require("GameManager");
var Tutorial = require("Tutorial");
var GameState = require('GameState');
var AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {

    },
    
    start() {

    },

    onCollisionEnter: function (other, self) {
        AudioManager.inst.playItem();
        HealthBar.inst.addBurger();
        this.node.destroy();
        if (!GameManager.inst.hpTutShown)
        {
            cc.director.pause();
            Tutorial.inst.showHp();
            GameManager.inst.hpTutShown = true;
            GameManager.inst.gameState = GameState.tutorial;
        }
    },
});
