var Meter = require("Meter");
var Meter = cc.Class({
    extends: cc.Component,

    properties: {

    },

    statics: {
        inst: null,
    },

    start() {
        Meter.inst = this;
        this.meterLabel = this.node.getComponent(cc.Label);
        this.value = 0;
    },

    updateMeter(val) {
        this.value += val;
        this.meterLabel.string = -Math.floor(this.value);
    }
});
