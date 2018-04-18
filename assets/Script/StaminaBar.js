var Player = require("Player");
var StaminaBar = require("StaminaBar");
var StaminaBar = cc.Class({
    extends: cc.Component,
    properties: {
    },

    statics: {
        inst: null,
    },

    start() {
        StaminaBar.inst = this;
        this.staminaNodeList = [
            this.node.children[0],
            this.node.children[1],
            this.node.children[2],
        ]
        this.value = 0;
        this.add(0); 
    },

    add(val) {
        this.value += val;
        for (let i = 0; i < this.staminaNodeList.length; i++) {
            if (i < this.value)
                this.staminaNodeList[i].active = true;
            else
                this.staminaNodeList[i].active = false;
        }
        if (this.value >= 3)
        {
            Player.inst.rush();
            this.value = 0;
            for (let i = 0; i < this.staminaNodeList.length; i++) {
                    this.staminaNodeList[i].active = false;
            }
        }
    }
});
