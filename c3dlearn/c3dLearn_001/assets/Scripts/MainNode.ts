import { _decorator, Component, Node, Prefab, PhysicsSystem,ColliderComponent, instantiate, Vec3, Vec2, SystemEventType, geometry, CameraComponent } from "cc";
import { Global } from "./Global";
const { ray } = geometry;
const { ccclass, property } = _decorator;
@ccclass("MainNode")
export class MainNode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    // public Prefab w 
    @property({ type: Prefab })
    private cellPrefab = null;
    @property({ type: CameraComponent })
    private cameraComp = null;
    private outRay = new ray();
    private touchStartPos: Vec2 = null;
    private currentCollider = null;
    start() {
        // Your initialization goes here.
        let leiList = {};
        while (Object.keys(leiList).length < 10) {
            let random = Math.round(Math.random() * 99);
            if (!leiList[random]) {
                leiList[random] = true;
            }
        }
        console.log("lei list =", leiList);
        let index = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let cell = instantiate(this.cellPrefab);
                cell.parent = this.node;
                cell.position = new Vec3((10 - 1) * -0.5 * 1.1 + 1.1 * j, 0, (10 - 1) * -0.5 * 1.1 + 1.1 * i);
                let isLei = false;
                if (leiList[index]) {
                    isLei = true;
                }
                cell.emit("init-data", index, isLei);
                index++;
                Global.getInstance().pushNode(cell);
            }
        }
        cc.systemEvent.on(SystemEventType.TOUCH_START, (touch, event) => {
            let pos = touch.getLocation();
            this.touchStartPos = new Vec2(pos.x, pos.y);
            console.log("pos", pos);
            // const outRay = new ray();
            this.cameraComp.screenPointToRay(pos.x, pos.y, this.outRay);
            // this.cameraComp.screenPointToRay(touch._point.x, touch._point.y, this.outRay);
            if (PhysicsSystem.instance.raycastClosest(this.outRay)) {
                console.log("true");
                let result = PhysicsSystem.instance.raycastClosestResult;
                // console.log("result", result);
                // result.node.emit("click",)
                // result.collider.node.emit("click");
                this.currentCollider = result.collider;
            }
        }, this.node);
        cc.systemEvent.on(SystemEventType.TOUCH_MOVE, (touch, event) => {
            if (this.touchStartPos) {
                let pos = touch.getLocation();
                let touchVec = new Vec2(pos.x, pos.y);
                let dis = touchVec.subtract(this.touchStartPos).length();
                if (dis > 40) {
                    this.touchStartPos = undefined;
                    console.log(" dis", dis);
                    if (this.currentCollider){
                        this.currentCollider.node.emit("scroll");
                    }

                }
            }
        });
        cc.systemEvent.on(SystemEventType.TOUCH_END, ()=>{
            if (this.currentCollider){
                this.currentCollider.node.emit("click");
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
