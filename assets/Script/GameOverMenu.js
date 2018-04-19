var Meter = require("Meter");
var GameOverMenu = require("GameOverMenu");
var InputConfig = require('InputConfig');
var AudioManager = require("AudioManager");

var GameOverMenu = cc.Class({
    extends: cc.Component,

    properties: {


    },

    statics: {
        inst: null,
    },


    start() {
        GameOverMenu.inst = this;
        this.normalNode = this.node.children[0];
        this.newRecNode = this.node.children[1];
        this.normalNode.active = false;
        this.newRecNode.active = false;
    },

    showNormal(rec) {
        this.normalNode.active = true;
        this.normalNode.children[3].getComponent(cc.Label).string = -Math.floor(Meter.inst.value);
        this.normalNode.children[5].children[1].getComponent(cc.Label).string = rec;
    },

    showNewRec() {
        this.newRecNode.active = true;
        this.newRecNode.children[3].getComponent(cc.Label).string = -Math.floor(Meter.inst.value);
    },

    processKeyUp(event) {
        switch (event.keyCode) {
            case InputConfig.dpadCenter:
                AudioManager.inst.playBtn();
                this.node.active = false;
                cc.director.loadScene("Main");
                break;
        }
    },


});
