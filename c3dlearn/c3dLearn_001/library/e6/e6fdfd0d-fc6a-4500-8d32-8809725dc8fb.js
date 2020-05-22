System.register(["cc", "code-quality:cr", "./Global.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, PhysicsSystem, instantiate, Vec3, Vec2, SystemEventType, geometry, CameraComponent, Global, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ray, ccclass, property, MainNode;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "./Global", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      PhysicsSystem = _cc.PhysicsSystem;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      SystemEventType = _cc.SystemEventType;
      geometry = _cc.geometry;
      CameraComponent = _cc.CameraComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GlobalJs) {
      Global = _GlobalJs.Global;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e6fdf0N/GpFAI0yiAlyXcj7", "MainNode", _context.meta);

      _crd = true;
      ray = geometry.ray;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainNode", MainNode = (_dec = ccclass("MainNode"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainNode, _Component);

        function MainNode() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainNode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainNode)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraComp", _descriptor2, _assertThisInitialized(_this));

          _this.outRay = new ray();
          _this.touchStartPos = null;
          _this.currentCollider = null;
          return _this;
        }

        _createClass(MainNode, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            var leiList = {};

            while (Object.keys(leiList).length < 10) {
              var random = Math.round(Math.random() * 99);

              if (!leiList[random]) {
                leiList[random] = true;
              }
            }

            console.log("lei list =", leiList);
            var index = 0;

            for (var i = 0; i < 10; i++) {
              for (var j = 0; j < 10; j++) {
                var cell = instantiate(this.cellPrefab);
                cell.parent = this.node;
                cell.position = new Vec3((10 - 1) * -0.5 * 1.1 + 1.1 * j, 0, (10 - 1) * -0.5 * 1.1 + 1.1 * i);
                var isLei = false;

                if (leiList[index]) {
                  isLei = true;
                }

                cell.emit("init-data", index, isLei);
                index++;
                (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                  error: Error()
                }), Global) : Global).getInstance().pushNode(cell);
              }
            }

            cc.systemEvent.on(SystemEventType.TOUCH_START, function (touch, event) {
              var pos = touch.getLocation();
              _this2.touchStartPos = new Vec2(pos.x, pos.y);
              console.log("pos", pos); // const outRay = new ray();

              _this2.cameraComp.screenPointToRay(pos.x, pos.y, _this2.outRay); // this.cameraComp.screenPointToRay(touch._point.x, touch._point.y, this.outRay);


              if (PhysicsSystem.instance.raycastClosest(_this2.outRay)) {
                console.log("true");
                var result = PhysicsSystem.instance.raycastClosestResult; // console.log("result", result);
                // result.node.emit("click",)
                // result.collider.node.emit("click");

                _this2.currentCollider = result.collider;
              }
            }, this.node);
            cc.systemEvent.on(SystemEventType.TOUCH_MOVE, function (touch, event) {
              if (_this2.touchStartPos) {
                var pos = touch.getLocation();
                var touchVec = new Vec2(pos.x, pos.y);
                var dis = touchVec.subtract(_this2.touchStartPos).length();

                if (dis > 40) {
                  _this2.touchStartPos = undefined;
                  console.log(" dis", dis);

                  if (_this2.currentCollider) {
                    _this2.currentCollider.node.emit("scroll");
                  }
                }
              }
            });
            cc.systemEvent.on(SystemEventType.TOUCH_END, function () {
              if (_this2.currentCollider) {
                _this2.currentCollider.node.emit("click");
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return MainNode;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9zYW9sZWkvYzNkbGVhcm4vYzNkTGVhcm5fMDAxL2Fzc2V0cy9TY3JpcHRzL01haW5Ob2RlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJQaHlzaWNzU3lzdGVtIiwiaW5zdGFudGlhdGUiLCJWZWMzIiwiVmVjMiIsIlN5c3RlbUV2ZW50VHlwZSIsImdlb21ldHJ5IiwiQ2FtZXJhQ29tcG9uZW50IiwiR2xvYmFsIiwicmF5IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpbk5vZGUiLCJ0eXBlIiwib3V0UmF5IiwidG91Y2hTdGFydFBvcyIsImN1cnJlbnRDb2xsaWRlciIsImxlaUxpc3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiaSIsImoiLCJjZWxsIiwiY2VsbFByZWZhYiIsInBhcmVudCIsIm5vZGUiLCJwb3NpdGlvbiIsImlzTGVpIiwiZW1pdCIsImdldEluc3RhbmNlIiwicHVzaE5vZGUiLCJjYyIsInN5c3RlbUV2ZW50Iiwib24iLCJUT1VDSF9TVEFSVCIsInRvdWNoIiwiZXZlbnQiLCJwb3MiLCJnZXRMb2NhdGlvbiIsIngiLCJ5IiwiY2FtZXJhQ29tcCIsInNjcmVlblBvaW50VG9SYXkiLCJpbnN0YW5jZSIsInJheWNhc3RDbG9zZXN0IiwicmVzdWx0IiwicmF5Y2FzdENsb3Nlc3RSZXN1bHQiLCJjb2xsaWRlciIsIlRPVUNIX01PVkUiLCJ0b3VjaFZlYyIsImRpcyIsInN1YnRyYWN0IiwidW5kZWZpbmVkIiwiVE9VQ0hfRU5EIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFB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QUwsR0FBcUI0QyxTQUFyQjtBQUNBbkMsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JnQyxHQUFwQjs7QUFDQSxzQkFBSSxNQUFJLENBQUN6QyxlQUFULEVBQXlCO0FBQ3JCLG9CQUFBLE1BQUksQ0FBQ0EsZUFBTCxDQUFxQmdCLElBQXJCLENBQTBCRyxJQUExQixDQUErQixRQUEvQjtBQUNIO0FBRUo7QUFDSjtBQUNKLGFBZEQ7QUFlQUcsWUFBQUEsRUFBRSxDQUFDQyxXQUFILENBQWVDLEVBQWYsQ0FBa0JuQyxlQUFlLENBQUN1RCxTQUFsQyxFQUE2QyxZQUFJO0FBQzdDLGtCQUFJLE1BQUksQ0FBQzVDLGVBQVQsRUFBeUI7QUFDckIsZ0JBQUEsTUFBSSxDQUFDQSxlQUFMLENBQXFCZ0IsSUFBckIsQ0FBMEJHLElBQTFCLENBQStCLE9BQS9CO0FBQ0g7QUFDSixhQUpEO0FBS0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUFoRjBCcEMsUzs7Ozs7aUJBU0wsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFBoeXNpY3NTeXN0ZW0sQ29sbGlkZXJDb21wb25lbnQsIGluc3RhbnRpYXRlLCBWZWMzLCBWZWMyLCBTeXN0ZW1FdmVudFR5cGUsIGdlb21ldHJ5LCBDYW1lcmFDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbFwiO1xuY29uc3QgeyByYXkgfSA9IGdlb21ldHJ5O1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbkBjY2NsYXNzKFwiTWFpbk5vZGVcIilcbmV4cG9ydCBjbGFzcyBNYWluTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG4gICAgLy8gcHVibGljIFByZWZhYiB3IFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHByaXZhdGUgY2VsbFByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ2FtZXJhQ29tcG9uZW50IH0pXG4gICAgcHJpdmF0ZSBjYW1lcmFDb21wID0gbnVsbDtcbiAgICBwcml2YXRlIG91dFJheSA9IG5ldyByYXkoKTtcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IFZlYzIgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudENvbGxpZGVyID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIGxldCBsZWlMaXN0ID0ge307XG4gICAgICAgIHdoaWxlIChPYmplY3Qua2V5cyhsZWlMaXN0KS5sZW5ndGggPCAxMCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgICAgICAgIGlmICghbGVpTGlzdFtyYW5kb21dKSB7XG4gICAgICAgICAgICAgICAgbGVpTGlzdFtyYW5kb21dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImxlaSBsaXN0ID1cIiwgbGVpTGlzdCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBpbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xuICAgICAgICAgICAgICAgIGNlbGwucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBuZXcgVmVjMygoMTAgLSAxKSAqIC0wLjUgKiAxLjEgKyAxLjEgKiBqLCAwLCAoMTAgLSAxKSAqIC0wLjUgKiAxLjEgKyAxLjEgKiBpKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNMZWkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAobGVpTGlzdFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMZWkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmVtaXQoXCJpbml0LWRhdGFcIiwgaW5kZXgsIGlzTGVpKTtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnB1c2hOb2RlKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKHRvdWNoLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnRQb3MgPSBuZXcgVmVjMihwb3MueCwgcG9zLnkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3NcIiwgcG9zKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IG91dFJheSA9IG5ldyByYXkoKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhQ29tcC5zY3JlZW5Qb2ludFRvUmF5KHBvcy54LCBwb3MueSwgdGhpcy5vdXRSYXkpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmFDb21wLnNjcmVlblBvaW50VG9SYXkodG91Y2guX3BvaW50LngsIHRvdWNoLl9wb2ludC55LCB0aGlzLm91dFJheSk7XG4gICAgICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdCh0aGlzLm91dFJheSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAvLyByZXN1bHQubm9kZS5lbWl0KFwiY2xpY2tcIiwpXG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0LmNvbGxpZGVyLm5vZGUuZW1pdChcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbGxpZGVyID0gcmVzdWx0LmNvbGxpZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKHRvdWNoLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudG91Y2hTdGFydFBvcykge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaFZlYyA9IG5ldyBWZWMyKHBvcy54LCBwb3MueSk7XG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHRvdWNoVmVjLnN1YnRyYWN0KHRoaXMudG91Y2hTdGFydFBvcykubGVuZ3RoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcyA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgZGlzXCIsIGRpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb2xsaWRlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb2xsaWRlci5ub2RlLmVtaXQoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50VHlwZS5UT1VDSF9FTkQsICgpPT57XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Q29sbGlkZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbGxpZGVyLm5vZGUuZW1pdChcImNsaWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=