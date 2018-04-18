var InputConfig = require('InputConfig');
var GameState = require('GameState');

var GameManager = require("GameManager");
var GameManager = cc.Class({
    extends: cc.Component,

    properties: {
        scrollBg: require("ScrollBg"),
    },

    statics: {
        inst: null,
    },

    start() {
        GameManager.inst = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.gameState = GameState.player;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.player = cc.find("/Canvas/Player").getComponent("Player");
        this.gameStarted = true;
        this.scrollBg.init();

        this.hpTutShown = false;
        this.staminaTutShown = false;
    },

    onKeyUp: function (event) {
        if (event.keyCode == InputConfig.back) {
            console.log("Quit Game!");
            cc.game.end();
        }

        switch (this.gameState) {
            case GameState.player:
                this.player.processKeyUp(event);
                break;
        }
    },
});
