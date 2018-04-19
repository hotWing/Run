
var StaminaBar = require("StaminaBar");
var GameManager = require("GameManager");
var Tutorial = require("Tutorial");
var GameState = require('GameState');
var AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    
    start () {

    },

    onCollisionEnter: function (other, self) {
        AudioManager.inst.playItem();
        StaminaBar.inst.add(1)
        this.node.destroy();
        if (!GameManager.inst.staminaTutShown)
        {
            cc.director.pause();
            Tutorial.inst.showStamina();
            GameManager.inst.staminaTutShown = true;
            GameManager.inst.gameState = GameState.tutorial;
        }
    },
  
});
