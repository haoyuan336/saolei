System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Cell;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "515dfo35EBKTr3xs4T+IlLB", "Cell", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Cell", Cell = (_dec = ccclass("Cell"), _dec2 = property([Node]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Cell, _Component);

        function Cell() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Cell);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cell)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "numNodeList", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Cell, [{
          key: "start",
          value: function start() {
            // let children =  this.node.children;
            // for (let i in children){
            //     // let child = children[i];
            //     // console.log("child. name", child.name);
            // }
            for (var i in this.numNodeList) {
              var node = this.numNodeList[i];
              node.active = false;
            } // this.node.on(Node.EventType.TOUCH_START, ()=>{
            //     console.log('touch', this.node.name);
            // }, this);

          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);

        return Cell;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numNodeList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHkvd29ya3NwYWNlL2MzZGxlYXJuL2MzZExlYXJuXzAwMS9hc3NldHMvU2NyaXB0cy9DZWxsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2VsbCIsImkiLCJudW1Ob2RlTGlzdCIsIm5vZGUiLCJhY3RpdmUiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDeEJDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7O3NCQUdKQyxJLFdBRFpGLE9BQU8sQ0FBQyxNQUFELEMsVUFHSEMsUUFBUSxDQUFDLENBQUNGLElBQUQsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLLElBQUlJLENBQVQsSUFBYyxLQUFLQyxXQUFuQixFQUFnQztBQUM1QixrQkFBSUMsSUFBSSxHQUFHLEtBQUtELFdBQUwsQ0FBaUJELENBQWpCLENBQVg7QUFDQUUsY0FBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsS0FBZDtBQUNILGFBVEcsQ0FVSjtBQUNBO0FBQ0E7O0FBQ0g7OztpQ0FFTUMsUyxFQUFtQixDQUN0QjtBQUNIOzs7O1FBckJxQlQsUzs7Ozs7aUJBR1EsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJDZWxsXCIpXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoW05vZGVdKVxuICAgIHByaXZhdGUgbnVtTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBsZXQgY2hpbGRyZW4gPSAgdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICAvLyBmb3IgKGxldCBpIGluIGNoaWxkcmVuKXtcbiAgICAgICAgLy8gICAgIC8vIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjaGlsZC4gbmFtZVwiLCBjaGlsZC5uYW1lKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMubnVtTm9kZUxpc3QpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5udW1Ob2RlTGlzdFtpXTtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKT0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3RvdWNoJywgdGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICAvLyB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIH1cbn1cbiJdfQ==