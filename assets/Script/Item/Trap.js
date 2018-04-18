var HealthBar = require("HealthBar");
var Player = require("Player");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onCollisionEnter: function (other, self) {
        if (!Player.inst.invincible) {
            HealthBar.inst.subHp(1);
        }
    },

});
