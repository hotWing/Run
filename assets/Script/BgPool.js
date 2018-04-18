cc.Class({
    extends: cc.Component,
    properties: {
        bgPrefab: cc.Prefab
    },

    onLoad() {
        this.bgPool = new cc.NodePool();
        let initCount = 3;
        for (let i = 0; i < initCount; ++i) {
            let bg = cc.instantiate(this.bgPrefab);
            this.bgPool.put(bg);
        }
    },

    create(parentNode) {
        let bg = null;
        if (this.bgPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            bg = this.bgPool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            bg = cc.instantiate(this.bgPrefab);
        }
        bg.parent = parentNode; // 将生成的敌人加入节点树
        return bg;
    },

    kill (bg) {
        this.bgPool.put(bg); // 和初始化时的方法一样，将节点放进对象池，这个方法会同时调用节点的 removeFromParent
    }

});
