System.register(["cc", "code-quality:cr", "./Global.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, PhysicsSystem, instantiate, Vec3, SystemEventType, geometry, CameraComponent, Global, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ray, ccclass, property, MainNode;

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
              var pos = event.getLocation();
              console.log("pos", pos); // const outRay = new ray();

              _this2.cameraComp.screenPointToRay(touch._point.x, touch._point.y, _this2.outRay);

              if (PhysicsSystem.instance.raycastClosest(_this2.outRay)) {
                console.log("true");
                var result = PhysicsSystem.instance.raycastClosestResult;
                console.log("result", result); // result.node.emit("click",)

                result.collider.node.emit("click");
              }
            }, this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9zYW9sZWkvYzNkbGVhcm4vYzNkTGVhcm5fMDAxL2Fzc2V0cy9TY3JpcHRzL01haW5Ob2RlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJQaHlzaWNzU3lzdGVtIiwiaW5zdGFudGlhdGUiLCJWZWMzIiwiU3lzdGVtRXZlbnRUeXBlIiwiZ2VvbWV0cnkiLCJDYW1lcmFDb21wb25lbnQiLCJHbG9iYWwiLCJyYXkiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNYWluTm9kZSIsInR5cGUiLCJvdXRSYXkiLCJsZWlMaXN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJhbmRvbSIsIk1hdGgiLCJyb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImkiLCJqIiwiY2VsbCIsImNlbGxQcmVmYWIiLCJwYXJlbnQiLCJub2RlIiwicG9zaXRpb24iLCJpc0xlaSIsImVtaXQiLCJnZXRJbnN0YW5jZSIsInB1c2hOb2RlIiwiY2MiLCJzeXN0ZW1FdmVudCIsIm9uIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaCIsImV2ZW50IiwicG9zIiwiZ2V0TG9jYXRpb24iLCJjYW1lcmFDb21wIiwic2NyZWVuUG9pbnRUb1JheSIsIl9wb2ludCIsIngiLCJ5IiwiaW5zdGFuY2UiLCJyYXljYXN0Q2xvc2VzdCIsInJlc3VsdCIsInJheWNhc3RDbG9zZXN0UmVzdWx0IiwiY29sbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxhLE9BQUFBLGE7QUFBZUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxlLE9BQUFBLGU7Ozs7QUFDbEdDLE1BQUFBLE0sYUFBQUEsTTs7Ozs7O0FBQ0RDLE1BQUFBLEcsR0FBUUgsUSxDQUFSRyxHO0FBQ0FDLE1BQUFBLE8sR0FBc0JYLFUsQ0FBdEJXLE87QUFBU0MsTUFBQUEsUSxHQUFhWixVLENBQWJZLFE7OzBCQUVKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFTSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVo7QUFBUixPQUFELEMsVUFFUlUsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRU47QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUVETyxNLEdBQVMsSUFBSUwsR0FBSixFOzs7Ozs7a0NBQ1Q7QUFBQTs7QUFDSjtBQUNBLGdCQUFJTSxPQUFPLEdBQUcsRUFBZDs7QUFDQSxtQkFBT0MsTUFBTSxDQUFDQyxJQUFQLENBQVlGLE9BQVosRUFBcUJHLE1BQXJCLEdBQThCLEVBQXJDLEVBQXlDO0FBQ3JDLGtCQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNELE1BQUwsS0FBZ0IsRUFBM0IsQ0FBYjs7QUFDQSxrQkFBSSxDQUFDSixPQUFPLENBQUNJLE1BQUQsQ0FBWixFQUFzQjtBQUNsQkosZ0JBQUFBLE9BQU8sQ0FBQ0ksTUFBRCxDQUFQLEdBQWtCLElBQWxCO0FBQ0g7QUFDSjs7QUFDREcsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlIsT0FBMUI7QUFDQSxnQkFBSVMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixtQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLG9CQUFJQyxJQUFJLEdBQUd4QixXQUFXLENBQUMsS0FBS3lCLFVBQU4sQ0FBdEI7QUFDQUQsZ0JBQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjLEtBQUtDLElBQW5CO0FBQ0FILGdCQUFBQSxJQUFJLENBQUNJLFFBQUwsR0FBZ0IsSUFBSTNCLElBQUosQ0FBUyxDQUFDLEtBQUssQ0FBTixJQUFXLENBQUMsR0FBWixHQUFrQixHQUFsQixHQUF3QixNQUFNc0IsQ0FBdkMsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBQyxLQUFLLENBQU4sSUFBVyxDQUFDLEdBQVosR0FBa0IsR0FBbEIsR0FBd0IsTUFBTUQsQ0FBM0UsQ0FBaEI7QUFDQSxvQkFBSU8sS0FBSyxHQUFHLEtBQVo7O0FBQ0Esb0JBQUlqQixPQUFPLENBQUNTLEtBQUQsQ0FBWCxFQUFvQjtBQUNoQlEsa0JBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0g7O0FBQ0RMLGdCQUFBQSxJQUFJLENBQUNNLElBQUwsQ0FBVSxXQUFWLEVBQXVCVCxLQUF2QixFQUE4QlEsS0FBOUI7QUFDQVIsZ0JBQUFBLEtBQUs7QUFDTDtBQUFBO0FBQUEsc0NBQU9VLFdBQVAsR0FBcUJDLFFBQXJCLENBQThCUixJQUE5QjtBQUNIO0FBQ0o7O0FBQ0RTLFlBQUFBLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxFQUFmLENBQWtCakMsZUFBZSxDQUFDa0MsV0FBbEMsRUFBK0MsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzdELGtCQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixFQUFWO0FBQ0FyQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CbUIsR0FBbkIsRUFGNkQsQ0FHN0Q7O0FBQ0EsY0FBQSxNQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLGdCQUFoQixDQUFpQ0wsS0FBSyxDQUFDTSxNQUFOLENBQWFDLENBQTlDLEVBQWlEUCxLQUFLLENBQUNNLE1BQU4sQ0FBYUUsQ0FBOUQsRUFBaUUsTUFBSSxDQUFDbEMsTUFBdEU7O0FBQ0Esa0JBQUlaLGFBQWEsQ0FBQytDLFFBQWQsQ0FBdUJDLGNBQXZCLENBQXNDLE1BQUksQ0FBQ3BDLE1BQTNDLENBQUosRUFBd0Q7QUFDcERRLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Esb0JBQUk0QixNQUFNLEdBQUdqRCxhQUFhLENBQUMrQyxRQUFkLENBQXVCRyxvQkFBcEM7QUFDQTlCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCNEIsTUFBdEIsRUFIb0QsQ0FJcEQ7O0FBQ0FBLGdCQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0J2QixJQUFoQixDQUFxQkcsSUFBckIsQ0FBMEIsT0FBMUI7QUFDSDtBQUNKLGFBWkQsRUFZRyxLQUFLSCxJQVpSO0FBYUgsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUF2RDBCOUIsUzs7Ozs7aUJBU0wsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFBoeXNpY3NTeXN0ZW0sIGluc3RhbnRpYXRlLCBWZWMzLCBTeXN0ZW1FdmVudFR5cGUsIGdlb21ldHJ5LCBDYW1lcmFDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbFwiO1xuY29uc3QgeyByYXkgfSA9IGdlb21ldHJ5O1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbkBjY2NsYXNzKFwiTWFpbk5vZGVcIilcbmV4cG9ydCBjbGFzcyBNYWluTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG4gICAgLy8gcHVibGljIFByZWZhYiB3IFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHByaXZhdGUgY2VsbFByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ2FtZXJhQ29tcG9uZW50IH0pXG4gICAgcHJpdmF0ZSBjYW1lcmFDb21wID0gbnVsbDtcbiAgICBwcml2YXRlIG91dFJheSA9IG5ldyByYXkoKTtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIGxldCBsZWlMaXN0ID0ge307XG4gICAgICAgIHdoaWxlIChPYmplY3Qua2V5cyhsZWlMaXN0KS5sZW5ndGggPCAxMCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgICAgICAgIGlmICghbGVpTGlzdFtyYW5kb21dKSB7XG4gICAgICAgICAgICAgICAgbGVpTGlzdFtyYW5kb21dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImxlaSBsaXN0ID1cIiwgbGVpTGlzdCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBpbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xuICAgICAgICAgICAgICAgIGNlbGwucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBuZXcgVmVjMygoMTAgLSAxKSAqIC0wLjUgKiAxLjEgKyAxLjEgKiBqLCAwLCAoMTAgLSAxKSAqIC0wLjUgKiAxLjEgKyAxLjEgKiBpKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNMZWkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAobGVpTGlzdFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMZWkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmVtaXQoXCJpbml0LWRhdGFcIiwgaW5kZXgsIGlzTGVpKTtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5nZXRJbnN0YW5jZSgpLnB1c2hOb2RlKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKHRvdWNoLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc1wiLCBwb3MpO1xuICAgICAgICAgICAgLy8gY29uc3Qgb3V0UmF5ID0gbmV3IHJheSgpO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmFDb21wLnNjcmVlblBvaW50VG9SYXkodG91Y2guX3BvaW50LngsIHRvdWNoLl9wb2ludC55LCB0aGlzLm91dFJheSk7XG4gICAgICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdCh0aGlzLm91dFJheSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAvLyByZXN1bHQubm9kZS5lbWl0KFwiY2xpY2tcIiwpXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbGxpZGVyLm5vZGUuZW1pdChcImNsaWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==