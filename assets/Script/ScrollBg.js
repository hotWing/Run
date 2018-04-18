var BgPoolManager = require("BgPoolManager");

var ScrollBg = require("ScrollBg");
var Meter = require("Meter");
var ScrollBg = cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        bgPrefabs: [cc.Prefab],
    },
    statics: {
        inst: null,
    },

    init() {
        ScrollBg.inst = this;
        this.bg1 = this.node.children[1];
        this.bg2 = this.node.children[2];
        this.bgQueue = [this.bg1, this.bg2]
    },

    update(dt) {
        var GameManager = require("GameManager");
        if (GameManager.inst.gameStarted) {
            this.bgQueue.forEach(bg => {
                var nextX = bg.x - this.speed * dt
                if (nextX < -1920)
                    nextX = -1920
                Meter.inst.updateMeter((nextX - bg.x)/100)
                bg.x = nextX
            });

            var firstBg = this.bgQueue[0]
            if (firstBg.x <= -1920) {
                firstBg.destroy();
                this.bgQueue.shift();
                this.bgQueue.push(this.NewBg());
            }
        }
    },

    NewBg() {
        var newBg = BgPoolManager.inst.getRandomBg(this.node)
        newBg.position = cc.v2(this.bgQueue[0].x + 1920, 0, 0)
        return newBg;
    }

});
