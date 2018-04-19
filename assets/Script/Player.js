var InputConfig = require('InputConfig');
var ScrollBg = require("ScrollBg");
var Player = require("Player");
var AudioManager = require("AudioManager");
var PickItemEff = require("PickItemEff");

var Player = cc.Class({
    extends: cc.Component,

    properties: {
    },

    statics: {
        inst: null,
    },

    start() {
        Player.inst = this;
        this.upPos = cc.v2(-319, -200);
        this.downPos = cc.v2(-319, -330);
        this.node.position = this.upPos;
        this.isUp = true;
        this.invincible = false;
        this.runAnim = this.node.getComponent(cc.Animation);
        this.ruchCallback = function () {
            ScrollBg.inst.speed = this.returnSpeed;
            this.invincible = false;
            this.runAnim.speed = 0.25;
            ScrollBg.inst.inRush = false;
        };
    },

    run(){
        this.runAnim.play("Player");
    },

    die(){
        this.runAnim.stop();
        this.runAnim.play("Die");
    },

    hurt()
    {
        this.runAnim.play("PlayerHurt");

    },

    onHurtFinished()
    {
        this.runAnim.play("Player");
    },

    fly(){
        this.runAnim.play("Fly");
    },

    rush() {
        AudioManager.inst.playRush();

        //in rush
        if(ScrollBg.inst.speed == ScrollBg.inst.rushSpeed)
        {
            this.unschedule(this.ruchCallback);
            this.runAnim.speed = 0.75;
        }
        ScrollBg.inst.inRush = true;
        this.returnSpeed =  ScrollBg.inst.speed;
        ScrollBg.inst.speed = ScrollBg.inst.rushSpeed;
        this.invincible = true;
        this.scheduleOnce(this.ruchCallback, ScrollBg.inst.rushTime);
    },

    processKeyUp(event) {
        switch (event.keyCode) {
            case InputConfig.dpadCenter:
                if (this.isUp) {
                    PickItemEff.inst.node.position = this.downPos;
                    this.node.position = this.downPos;
                    this.isUp = false;
                }
                else {
                    PickItemEff.inst.node.position = this.upPos;
                    this.node.position = this.upPos;
                    this.isUp = true;
                }
                break;
        }
    },


});
