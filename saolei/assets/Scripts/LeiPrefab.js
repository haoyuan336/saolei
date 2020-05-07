
cc.Class({
    extends: cc.Component,

    properties: {
        LabelNode: cc.Node
    },
    onLoad() {
        this._clickTime = undefined;
        this._isFlip = false;
        this._isLei = false;
        this._col = 0; //列
        this._row = 0;  //行
        this.node.on("init-data", (col, row, isLei, cb) => {
            this._isLei = isLei;
            this._col = col;
            this._row = row;
            this._cb = cb;
            if (this._isLei){
                this.LabelNode.getComponent(cc.Label).string = "🥱";
            }
        });
        this._flagList = ['🇺🇳', '?'];
        this._flagIndex = 0;
        this.node.on("flip", (leiCount)=>{
            this._isFlip = true;
            this.LabelNode.getComponent(cc.Label).string = leiCount;
        })
    },
    start() {
        
    },
    update(dt) { },
    onButtonClick(event, customData) {
        if (this._isFlip) {
            return;
        }
        console.log("customdata", customData);
        if (!this._clickTime) {
            this._clickTime = Date.now();
        } else {
            let dt = Date.now() - this._clickTime;
            console.log("dt", dt);
            if (dt < 300) {
                console.log("双击");
                if (this._cb) {
                    this._cb(this._col, this._row, this.node);
                }
                if (!this._isLei) {

                }
                return;
            }
            this._clickTime = 0;
        }

        if (this._flagIndex == this._flagList.length) {
            this._flagIndex = 0;
        }
        this.LabelNode.getComponent(cc.Label).string = this._flagList[this._flagIndex];
        this._flagIndex++;
    },
    getIsLei() {
        return this._isLei;
    }
});
