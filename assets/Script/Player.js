var InputConfig = require('InputConfig');
var ScrollBg = require("ScrollBg");
var Player = require("Player");
var Player = cc.Class({
    extends: cc.Component,

    properties: {

    },

    statics: {
        inst: null,
    },

    start() {
        Player.inst = this;
        this.upPos = cc.v2(-319, -43);
        this.downPos = cc.v2(-319, -166);
        this.node.position = this.upPos;
        this.isUp = true;
        this.invincible = false;
        this.runAnim = this.node.getComponent(cc.Animation);
        this.ruchCallback = function () {
            ScrollBg.inst.speed = 500;
            this.invincible = false;
            this.runAnim.speed = 0.25;
        };
    },

    rush() {
        //in rush
        if(ScrollBg.inst.speed == 1500)
        {
            this.unschedule(this.ruchCallback);
            this.runAnim.speed = 0.75;
        }

        ScrollBg.inst.speed = 1500;
        this.invincible = true;
        this.scheduleOnce(this.ruchCallback, 5);
    },

    processKeyUp(event) {
        switch (event.keyCode) {
            case InputConfig.dpadCenter:
                if (this.isUp) {
                    this.node.position = this.downPos;
                    this.isUp = false;
                }
                else {
                    this.node.position = this.upPos;
                    this.isUp = true;
                }
                break;
        }
    },


});
