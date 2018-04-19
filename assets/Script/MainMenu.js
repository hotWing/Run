var MainMenu = require("MainMenu");
var InputConfig = require('InputConfig');
var AudioManager = require("AudioManager");

var MainMenu = cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    statics: {
        inst: null,
    },

    start () {
        MainMenu.inst = this;
    },
    
    processKeyUp(event) {
        switch (event.keyCode) {
            case InputConfig.dpadCenter:
                AudioManager.inst.playBtn();
                this.node.active = false;
                require("GameManager").inst.startGame();
                break;
        }
    },


});
