var InputConfig = require('InputConfig');
var GameState = require('GameState');
var Tutorial = require("Tutorial");
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
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyRelease, this);
        this.player = cc.find("/Canvas/Player").getComponent("Player");
        this.gameStarted = true;
        this.scrollBg.init();

        this.hpTutShown = false;
        this.staminaTutShown = false;
        this.keyPressed = false;
    },

    onKeyUp: function (event) {
        if(!this.keyPressed)
        {
            this.keyPressed = true;

            if (event.keyCode == InputConfig.back) {
                console.log("Quit Game!");
                cc.game.end();
            }
    
            switch (this.gameState) {
                case GameState.player:
                    this.player.processKeyUp(event);
                    break;
                case GameState.tutorial:
                    Tutorial.inst.processKeyUp(event);
                    break;
            }
        }
    },

    onKeyRelease() {
        this.keyPressed = false;
    }
});
