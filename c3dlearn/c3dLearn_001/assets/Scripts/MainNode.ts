import { _decorator, Component, Node, Prefab, instantiate, Vec3,SystemEventType , geometry, CameraComponent} from "cc";
const {ray} = geometry;
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
    @property({type: CameraComponent})
    private cameraComp = null;

    start() {
        // Your initialization goes here.
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let cell = instantiate(this.cellPrefab);
                cell.parent = this.node;
                cell.position = new Vec3((10 - 1) * -0.5 * 1.1 + 1.1 * j, 0, (10 - 1) * -0.5 * 1.1 + 1.1 * i);
                // cell.position = new Vec3(10, 0, 0);
            }
        }


        cc.systemEvent.on(SystemEventType.TOUCH_START, (event)=>{
            let pos = event.getLocation();
            console.log("pos", pos);
            const outRay = new ray();
            this.cameraComp.screenPointToRay(pos.x, pos.y,outRay);

        }, this.node);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
