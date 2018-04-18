var Tutorial = require("Tutorial");
var InputConfig = require('InputConfig');
var GameState = require('GameState');

var Tutorial = cc.Class({
    extends: cc.Component,

    properties: {

    },

    statics: {
        inst: null,
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        Tutorial.inst = this;
        this.staminaTutNode = this.node.children[0];
        this.hpTutNode = this.node.children[1];
        this.hide();
    },

    hide() {
        this.staminaTutNode.active = false;
        this.hpTutNode.active = false;
    },

    showHp() {
        this.staminaTutNode.active = false;
        this.hpTutNode.active = true;
    },

    showStamina() {
        this.staminaTutNode.active = true;
        this.hpTutNode.active = false;
    },

    processKeyUp(event) {
        switch (event.keyCode) {
            case InputConfig.dpadCenter:
                this.hide();
                var GameManager = require('GameManager');
                GameManager.inst.gameState = GameState.player;
                cc.director.resume();
                break;
        }
    },


});
