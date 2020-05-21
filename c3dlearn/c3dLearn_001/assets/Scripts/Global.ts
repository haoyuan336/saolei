import { Node } from 'cc'
import { Cell } from './Cell';
export class Global {
    public static instance: Global = null;
    private checkMap = {};
    private cellNodeList: Array<Node> = new Array<Node>();

    constructor() {

    }
    public pushNode(node) {
        this.cellNodeList.push(node);
    }
    public playerFlipCell(target, index, isLei) {
        console.log("玩家翻开了 节点", index, isLei);
        //row 行  col 列
        let row = Math.floor(index / 10);
        let col = index % 10;
        this.checkMap = {};
        this.findLei(col, row, target, () => {
            console.log("检测完了", this.checkMap);
        });
    }
    private findLei(col, row, node, cb) {
        let leiCount = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let c = col - 1 + j;
                let r = row - 1 + i;
                if (c >= 0 && c < 10 && r >= 0 && r < 10) {
                    let index = r * 10 + c;
                    if (index !== row * 10 + col) {
                        console.log("index", index);
                        let target = this.cellNodeList[index];
                        let cell = target.getComponent(Cell);
                        let isLei = cell.getIsLei();
                        // console.log('is lei', isLei);
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
                        if (row * 10 + col !== index && !this.checkMap[index]) {
                            this.checkMap[index] = true;
                            this.findLei(c, r, this.cellNodeList[index], cb);
                        }
                    }
                }
            }
        }
        // console.log("lei count", leiCount);
    }
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new Global();
        }
        return this.instance;
    }
}
