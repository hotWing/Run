var HealthBar = require("HealthBar");
var Player = require("Player");
var ScrollBg = require("ScrollBg");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onCollisionEnter: function (other, self) {
        if (!Player.inst.invincible) {
            this.node.destroy();
            
            ScrollBg.inst.speed = ScrollBg.inst.defaultSpeed;
            HealthBar.inst.subHp(2);
        }
    },
});
