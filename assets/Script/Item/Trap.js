var HealthBar = require("HealthBar");
var Player = require("Player");
var ScrollBg = require("ScrollBg");
var AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.explosionAnim = this.node.getComponent(cc.Animation);
    },

    onCollisionEnter: function (other, self) {
        if (!Player.inst.invincible) {
            AudioManager.inst.playBoom();
            this.explosionAnim.play("TrapExplosion");
            ScrollBg.inst.speed = ScrollBg.inst.defaultSpeed;
            HealthBar.inst.subHp(3);
        }
        else 
        {
            Player.inst.fly();
        }
    },

    onExplosion()
    {
        this.node.destroy();
    }
});
