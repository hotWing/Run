var HealthBar = require("HealthBar");
var Player = require("Player");
var ScrollBg = require("ScrollBg");
var AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onCollisionEnter: function (other, self) {
        if (!Player.inst.invincible) {
            ScrollBg.inst.speed = ScrollBg.inst.defaultSpeed;
            HealthBar.inst.subHp(2);
            AudioManager.inst.playTrap();

        }
        else 
        {
            Player.inst.fly();
        }
    },
});
