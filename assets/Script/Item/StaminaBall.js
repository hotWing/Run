
var StaminaBar = require("StaminaBar");

cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    
    start () {

    },

    onCollisionEnter: function (other, self) {
        StaminaBar.inst.add(1)
    },
  
});
