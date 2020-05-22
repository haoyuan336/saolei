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
    @property({ type: Node })
    private flagNode = null;
    private flag = false;
    private index: Number;
    private isFlip = false;
    public isLei: boolean;

    onLoad() {
        this.node.on("init-data", (index, isLei) => {
            console.log("初始化数据");
            this.index = index;
            this.isLei = isLei;
        });
        this.node.on("flip", (leiCount) => {
            console.log("lei count", leiCount);
            this.isFlip = true;
            if (leiCount > 0) {
                this.numNodeList[leiCount - 1].active = true;
            } else {
                this.cubeNode.active = false;
                this.shpereNode.active = false;
            }
            this.flagNode.active = false;

        });
        this.node.on("show-lei", ()=>{
            if (this.isLei){
                console.log("显示雷");
                this.shpereNode.active = true;
                this.cubeNode.active = false;
                this.flagNode.active = false;
                
            }
        });
    }
    start() {
        for (let i in this.numNodeList) {
            let node = this.numNodeList[i];
            node.active = false;
        }
        this.node.on("click", () => {
            if (this.isFlip){
                return;
            }
            console.log("被点到了", this.isLei, this.index);
            this.flag = !this.flag;
            this.flagNode.active = this.flag;
            // this.cubeNode.active = !this.flag;
            // this.shpereNode.active = this.flag;
            // Global.getInstance().playerFlipCell(this.node,this.index, this.isLei);

        });
        this.node.on("scroll", () => {
            Global.getInstance().playerFlipCell(this.node, this.index, this.isLei);
        });

    }
    public getIsLei() {
        return this.isLei;
    }
    update(deltaTime: number) {
        // Your update function goes here.
    }
}
