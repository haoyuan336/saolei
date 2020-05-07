
cc.Class({
    extends: cc.Component,

    properties: {
        leiPrefab: cc.Prefab

    },


    onLoad() {
        let leiMap = {};
        while (Object.keys(leiMap).length < 10) {
            leiMap[Math.round(Math.random() * 99)] = true;
        }
        console.log("lei map", leiMap);
        this._nodeList = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let node = cc.instantiate(this.leiPrefab);
                node.parent = this.node;
                node.x = (10 - 1) * -0.5 * 50 + 50 * j;
                node.y = (10 - 1) * 0.5 * 50 - 50 * i;
                let isLei = false;
                if (leiMap[i * 10 + j]) {
                    console.log("是雷");
                    isLei = true;
                }
                node.emit('init-data', j, i, isLei, this.playerClick.bind(this));
                this._nodeList.push(node);
            }
        }
    },
    playerClick(col, row, node) {
        //翻开
        console.log("翻开", col, row);
        let isLei = node.getComponent("LeiPrefab").getIsLei();
        if (!isLei) {
            let leiCount = 0;
            this._checkMap = {};
            this.findLei(col, row, node, () => {
                console.log("递归结束");
            })
        }
    },
    findLei(col, row, node, cb) {
        let leiCount = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let c = col - 1 + j;
                let r = row - 1 + i;
                if (c >= 0 && c < 10 && r >= 0 && r < 10) {
                    let index = r * 10 + c;
                    if (index !== row * 10 + col) {
                        console.log("index", index);
                        let target = this._nodeList[index];
                        let isLei = target.getComponent('LeiPrefab').getIsLei();
                        console.log('is lei', isLei);
                        if (isLei) {
                            leiCount++;
                        } else {
                            // console.log("col", col);
                            // console.log("row", row);
                            // console.log("c", c);
                            // console.log("r", r);
                            // this.findLei(c, r, target, cb);
                        }
                    }
                }
            }
        }
        node.emit("flip", leiCount);
        if (leiCount === 0) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let c = col - 1 + j;
                    let r = row - 1 + i;
                    if (c >= 0 && c < 10 && r >= 0 && r < 10) {
                        let index = r * 10 + c;
                        if (row * 10 + col !== index && !this._checkMap[index]) {
                            this._checkMap[index] = true;
                            this.findLei(c, r, this._nodeList[index], cb);
                        }
                    }
                }
            }
        }
        // console.log("lei count", leiCount);
    },
    start() {

    }
});
