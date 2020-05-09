System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, SystemEventType, geometry, CameraComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ray, ccclass, property, MainNode;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

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
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      SystemEventType = _cc.SystemEventType;
      geometry = _cc.geometry;
      CameraComponent = _cc.CameraComponent;
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
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
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

          return _this;
        }

        _createClass(MainNode, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            for (var i = 0; i < 10; i++) {
              for (var j = 0; j < 10; j++) {
                var cell = instantiate(this.cellPrefab);
                cell.parent = this.node;
                cell.position = new Vec3((10 - 1) * -0.5 * 1.1 + 1.1 * j, 0, (10 - 1) * -0.5 * 1.1 + 1.1 * i); // cell.position = new Vec3(10, 0, 0);
              }
            }

            cc.systemEvent.on(SystemEventType.TOUCH_START, function (event) {
              var pos = event.getLocation();
              console.log("pos", pos);
              var outRay = new ray();

              _this2.cameraComp.screenPointToRay(pos.x, pos.y, outRay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHkvd29ya3NwYWNlL2MzZGxlYXJuL2MzZExlYXJuXzAwMS9hc3NldHMvU2NyaXB0cy9NYWluTm9kZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJWZWMzIiwiU3lzdGVtRXZlbnRUeXBlIiwiZ2VvbWV0cnkiLCJDYW1lcmFDb21wb25lbnQiLCJyYXkiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNYWluTm9kZSIsInR5cGUiLCJpIiwiaiIsImNlbGwiLCJjZWxsUHJlZmFiIiwicGFyZW50Iiwibm9kZSIsInBvc2l0aW9uIiwiY2MiLCJzeXN0ZW1FdmVudCIsIm9uIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsInBvcyIsImdldExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIm91dFJheSIsImNhbWVyYUNvbXAiLCJzY3JlZW5Qb2ludFRvUmF5IiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxJLE9BQUFBLEk7QUFBS0MsTUFBQUEsZSxPQUFBQSxlO0FBQWtCQyxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsZSxPQUFBQSxlOzs7Ozs7QUFDckZDLE1BQUFBLEcsR0FBT0YsUSxDQUFQRSxHO0FBQ0NDLE1BQUFBLE8sR0FBc0JULFUsQ0FBdEJTLE87QUFBU0MsTUFBQUEsUSxHQUFhVixVLENBQWJVLFE7OzBCQUVKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFTSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVY7QUFBUixPQUFELEMsVUFFUlEsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBRUw7QUFBUCxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHRDtBQUFBOztBQUNKO0FBQ0EsaUJBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixtQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLG9CQUFJQyxJQUFJLEdBQUdaLFdBQVcsQ0FBQyxLQUFLYSxVQUFOLENBQXRCO0FBQ0FELGdCQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxLQUFLQyxJQUFuQjtBQUNBSCxnQkFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCLElBQUlmLElBQUosQ0FBUyxDQUFDLEtBQUssQ0FBTixJQUFXLENBQUMsR0FBWixHQUFrQixHQUFsQixHQUF3QixNQUFNVSxDQUF2QyxFQUEwQyxDQUExQyxFQUE2QyxDQUFDLEtBQUssQ0FBTixJQUFXLENBQUMsR0FBWixHQUFrQixHQUFsQixHQUF3QixNQUFNRCxDQUEzRSxDQUFoQixDQUh5QixDQUl6QjtBQUNIO0FBQ0o7O0FBR0RPLFlBQUFBLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxFQUFmLENBQWtCakIsZUFBZSxDQUFDa0IsV0FBbEMsRUFBK0MsVUFBQ0MsS0FBRCxFQUFTO0FBQ3BELGtCQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixFQUFWO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJILEdBQW5CO0FBQ0Esa0JBQU1JLE1BQU0sR0FBRyxJQUFJckIsR0FBSixFQUFmOztBQUNBLGNBQUEsTUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsZ0JBQWhCLENBQWlDTixHQUFHLENBQUNPLENBQXJDLEVBQXdDUCxHQUFHLENBQUNRLENBQTVDLEVBQThDSixNQUE5QztBQUVILGFBTkQsRUFNRyxLQUFLWCxJQU5SO0FBT0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUFwQzBCakIsUzs7Ozs7aUJBU0wsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBWZWMzLFN5c3RlbUV2ZW50VHlwZSAsIGdlb21ldHJ5LCBDYW1lcmFDb21wb25lbnR9IGZyb20gXCJjY1wiO1xuY29uc3Qge3JheX0gPSBnZW9tZXRyeTtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5AY2NjbGFzcyhcIk1haW5Ob2RlXCIpXG5leHBvcnQgY2xhc3MgTWFpbk5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIC8vIHB1YmxpYyBQcmVmYWIgdyBcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcbiAgICBwcml2YXRlIGNlbGxQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ2FtZXJhQ29tcG9uZW50fSlcbiAgICBwcml2YXRlIGNhbWVyYUNvbXAgPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gaW5zdGFudGlhdGUodGhpcy5jZWxsUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBjZWxsLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gbmV3IFZlYzMoKDEwIC0gMSkgKiAtMC41ICogMS4xICsgMS4xICogaiwgMCwgKDEwIC0gMSkgKiAtMC41ICogMS4xICsgMS4xICogaSk7XG4gICAgICAgICAgICAgICAgLy8gY2VsbC5wb3NpdGlvbiA9IG5ldyBWZWMzKDEwLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XG4gICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zXCIsIHBvcyk7XG4gICAgICAgICAgICBjb25zdCBvdXRSYXkgPSBuZXcgcmF5KCk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYUNvbXAuc2NyZWVuUG9pbnRUb1JheShwb3MueCwgcG9zLnksb3V0UmF5KTtcblxuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==