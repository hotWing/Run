var AudioManager = require("AudioManager");
var AudioManager = cc.Class({
    extends: cc.Component,

    properties: {
        item: cc.AudioClip,
        hpRecover: cc.AudioClip,
        rush: cc.AudioClip,
        btn: cc.AudioClip,
        bg: cc.AudioClip,
        over: cc.AudioClip,
        trap: cc.AudioClip,
        boom: cc.AudioClip,
    },

    statics: {
        inst: null,
    },

    onLoad() {
        AudioManager.inst = this;
    },

    playBg: function () {
        this.bgId = cc.audioEngine.playEffect(this.bg, true);
    },

    stopBg: function () {
        cc.audioEngine.stop(this.bgId);
    },

    playItem() {
        cc.audioEngine.playEffect(this.item);
    },

    playBtn() {
        cc.audioEngine.playEffect(this.btn);
    },

    playHpRecover() {
        cc.audioEngine.playEffect(this.hpRecover);
    },

    playRush() {
        cc.audioEngine.playEffect(this.rush);
    },

    playOver() {
        cc.audioEngine.playEffect(this.over);
    },

    playTrap() {
        cc.audioEngine.playEffect(this.trap);
    },

    playBoom() {
        cc.audioEngine.playEffect(this.boom);
    },

});
