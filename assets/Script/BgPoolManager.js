var Meter = require("Meter");
var BgPoolManager = require("BgPoolManager");
var BgPoolManager = cc.Class({
    extends: cc.Component,
    properties: {
        meterInterval: [cc.Integer],
        itemNum: [cc.Integer],
        trapProp: [cc.String],
        bgProp: [cc.Float],
        trapPrefabs: [cc.Prefab],
    },

    statics: {
        inst: null,
    },

    onLoad: function () {
        BgPoolManager.inst = this;
        this.gap = 60;
        this.path = 1920 - this.gap * 2;
        this.interval = this.path / 6;
        this.upY = -277;
        this.downY = -408;
        // cc.log(this.trapProp[1].split("-"));
    },

    start() {
        this.bgPoolList = [];
        this.node.children.forEach(bgPoolNode => {
            this.bgPoolList.push(bgPoolNode.getComponent("BgPool"));
        });
    },

    getRandomBg(parent) {
        var i = null;
        var n = Math.random();
        if (n < this.bgProp[0])
            i = 0;
        else if ((n < (this.bgProp[0] + this.bgProp[1])))
            i = 1;
        else
            i = 2;
        var randomPool = this.bgPoolList[i];
        var bg = randomPool.create(parent);
        this.addRandomItem(bg);
        return bg;
    },

    addRandomItem(bg) {
        //check interval
        var i = 0;

        for (let j = 1; j < this.meterInterval.length; j++) {
            if (-Meter.inst.value < this.meterInterval[j])
                break;
            else
                i = j;
        }


        var curItemNum = this.itemNum[i];
        var curTrapProps = this.trapProp[i].split("-");

        var randomNums = this.getRandomNums(curItemNum, 6)
        randomNums.forEach(num => {
            var x = this.gap + num * this.interval - 960;
            var y = num % 2 == 0 ? this.upY : this.downY;
            var trapNode = this.getTrap(curTrapProps);
            trapNode.parent = bg;
            trapNode.position = cc.v2(x, y);
        });
    },

    getTrap(curTrapProps) {
        var prefab = null;
        var n = Math.random();
        if (n < parseFloat(curTrapProps[0]))
            prefab = this.trapPrefabs[0];
        else if (n < (parseFloat(curTrapProps[0]) + parseFloat(curTrapProps[1]))) {
            prefab = this.trapPrefabs[1];
        }
        else
            prefab = this.trapPrefabs[2];
        return cc.instantiate(prefab);
    },

    getRandomNums(num, total) {
        var array = [];
        for (var i = 0; i < total; i++) {
            array.push(i);
        }
        var randomNums = [];
        for (var i = 0; i < num; i++) {
            var n = Math.floor(Math.random() * (array.length - 1) + 1);
            randomNums.push(array[n]);
            array.splice(n, 1);
        }
        return randomNums;
    },


});
