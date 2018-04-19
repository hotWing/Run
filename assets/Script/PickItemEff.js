
var PickItemEff = require("PickItemEff");

var PickItemEff = cc.Class({
    extends: cc.Component,

    properties: {

    },

    statics: {
        inst: null,
    },

    start() {
        PickItemEff.inst = this;
        this.node.active = false;
        this.anim = this.node.getComponent(cc.Animation);
    },

    play() {
        this.node.active = true;
        this.anim.play();
        
    },

    onAnimFinished() {
        this.node.active = false;
    },
});
