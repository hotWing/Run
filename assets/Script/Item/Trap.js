var HealthBar = require("HealthBar");
var Player = require("Player");
var ScrollBg = require("ScrollBg");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.explosionAnim = this.node.getComponent(cc.Animation);
    },

    onCollisionEnter: function (other, self) {
        if (!Player.inst.invincible) {
            this.explosionAnim.play("TrapExplosion");
            ScrollBg.inst.speed = ScrollBg.inst.defaultSpeed;
            HealthBar.inst.subHp(1);
        }
    },

    onExplosion()
    {
        this.node.destroy();
    }
});
