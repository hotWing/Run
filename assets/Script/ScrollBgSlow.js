
var ScrollBg = cc.Class({
    extends: cc.Component,

    properties: {
        speed: 50,
    },


    start() {
        this.bg1 = this.node.children[0];
        this.bg2 = this.node.children[1];
        this.bgQueue = [this.bg1, this.bg2]
    },

    update(dt) {
        var GameManager = require("GameManager");
        if (GameManager.inst.gameStarted) {
            this.bgQueue.forEach(bg => {
                var nextX = bg.x - this.speed * dt;
                if (nextX < -1920)
                    nextX = -1920;
                bg.x = nextX;
            });

            var firstBg = this.bgQueue[0]
            if (firstBg.x <= -1920) {
                this.bgQueue.shift();
                firstBg.position = cc.v2(this.bgQueue[0].x + 1920, 0, 0)
                this.bgQueue.push(firstBg);
            }
        }
    },

});
