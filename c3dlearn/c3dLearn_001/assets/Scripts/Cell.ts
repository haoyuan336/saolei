import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Cell")
export class Cell extends Component {

    @property([Node])
    private numNodeList: Node[] = [];
    start() {
        // let children =  this.node.children;
        // for (let i in children){
        //     // let child = children[i];
        //     // console.log("child. name", child.name);
        // }
        for (let i in this.numNodeList) {
            let node = this.numNodeList[i];
            node.active = false;
        }
        // this.node.on(Node.EventType.TOUCH_START, ()=>{
        //     console.log('touch', this.node.name);
        // }, this);
    }

    update(deltaTime: number) {
        // Your update function goes here.
    }
}
