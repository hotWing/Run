var InputConfig = require('InputConfig');
var GameState = require('GameState');
var Tutorial = require("Tutorial");
var MainMenu = require("MainMenu");
var GameOverMenu = require("GameOverMenu");
var AudioManager = require("AudioManager");
var Meter = require("Meter");

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

        this.gameState = GameState.mainMenu;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyRelease, this);
        this.player = cc.find("/Canvas/Player").getComponent("Player");
        this.gameStarted = false;
        this.scrollBg.init();

        this.hpTutShown = false;
        this.staminaTutShown = false;
        this.keyPressed = false;
        AudioManager.inst.playBg();
    },

    startGame() {
        this.gameStarted = true;
        this.gameState = GameState.player;
        this.player.run();
    },

    gameover() {
        this.player.die();
        AudioManager.inst.stopBg();
        AudioManager.inst.playOver();
        this.gameState = GameState.gameover;
        this.gameStarted = false;
        var recScore = cc.sys.localStorage.getItem("Record")
        var score = -Math.floor(Meter.inst.value);
        if (recScore == null || recScore < score) {
            cc.sys.localStorage.setItem("Record", score);
            GameOverMenu.inst.showNewRec();
        }
        else {
            GameOverMenu.inst.showNormal(recScore);
        }
    },

    onKeyUp: function (event) {
        if (!this.keyPressed) {
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
                case GameState.mainMenu:
                    MainMenu.inst.processKeyUp(event);
                    break;
                case GameState.gameover:
                    GameOverMenu.inst.processKeyUp(event);
                    break;
            }
        }
    },

    onKeyRelease() {
        this.keyPressed = false;
    }
});
