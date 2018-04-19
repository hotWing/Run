var HealthBar = require("HealthBar");
var AudioManager = require("AudioManager");

var HealthBar = cc.Class({
    extends: cc.Component,

    properties: {

    },

    statics: {
        inst: null,
    },

    start() {
        HealthBar.inst = this;
        this.healthNodeList = [
            this.node.children[0],
            this.node.children[1],
            this.node.children[2],
        ]
        this.burgerNumLabel = this.node.children[3].children[0].children[0].getComponent(cc.Label);
        this.value = 3;
    },

    subHp(dmg) {
        this.value -= dmg;
        for (let i = 0; i < this.healthNodeList.length; i++) {
            if (i < this.value)
                this.healthNodeList[i].active = true;
            else
                this.healthNodeList[i].active = false;
        }
        if(this.value <= 0)
        {
            require("GameManager").inst.gameover();
        }
        else 
            require("Player").inst.hurt();
    },

    addHp(val) {
        this.value += val;
        for (let i = 0; i < this.healthNodeList.length; i++) {
            if (i < this.value)
                this.healthNodeList[i].active = true;
            else
                this.healthNodeList[i].active = false;
        }
    },

    addBurger() {
        var num = parseInt(this.burgerNumLabel.string) + 1;
        this.burgerNumLabel.string = num;
        if(num >= 3) {
            this.burgerNumLabel.string = 0;
            if (this.value < 3) 
            {
                AudioManager.inst.playHpRecover();
                this.addHp(1);
            }
        }
    },
});