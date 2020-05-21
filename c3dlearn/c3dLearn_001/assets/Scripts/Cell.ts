import { _decorator, Component, Node } from "cc";
import { Global } from "./Global";
const { ccclass, property } = _decorator;

@ccclass("Cell")
export class Cell extends Component {

    @property([Node])
    private numNodeList: Node[] = [];
    @property({ type: Node })
    private cubeNode = null;
    @property({ type: Node })
    private shpereNode = null;
    private flag = false;
    private index: Number;
    public isLei: boolean;
    onLoad() {
        this.node.on("init-data", (index, isLei) => {
            console.log("初始化数据");
            this.index = index;
            this.isLei = isLei;
        });
    }
    start() {
        for (let i in this.numNodeList) {
            let node = this.numNodeList[i];
            node.active = false;
        }
        this.node.on("click", () => {
            console.log("被点到了", this.isLei, this.index);
            this.flag = !this.flag;
            this.cubeNode.active = !this.flag;
            this.shpereNode.active = this.flag;
            Global.getInstance().playerFlipCell(this.node,this.index, this.isLei);

        });
    }
    public getIsLei() {
        return this.isLei;
    }
    update(deltaTime: number) {
        // Your update function goes here.
    }
}
