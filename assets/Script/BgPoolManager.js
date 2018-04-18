var BgPoolManager = require("BgPoolManager");
var BgPoolManager = cc.Class({
    extends: cc.Component,

    statics: {
        inst: null,
    },

    onLoad: function () {
        BgPoolManager.inst = this;
    },

    start () {
        this.bgPoolList = [];
        this.node.children.forEach(bgPoolNode => {
            this.bgPoolList.push(bgPoolNode.getComponent("BgPool"));
        });
        cc.log(this.bgPoolList.length)
    },

    getRandomBg(parent) {
        var i =  Math.floor((Math.random() * this.bgPoolList.length));
        var randomPool = this.bgPoolList[i];
        return randomPool.create(parent);
    },
});
