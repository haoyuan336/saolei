System.register(["cc", "code-quality:cr", "./Global.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Global, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Cell;

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
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GlobalJs) {
      Global = _GlobalJs.Global;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "515dfo35EBKTr3xs4T+IlLB", "Cell", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Cell", Cell = (_dec = ccclass("Cell"), _dec2 = property([Node]), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
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

          _initializerDefineProperty(_this, "cubeNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "shpereNode", _descriptor3, _assertThisInitialized(_this));

          _this.flag = false;
          return _this;
        }

        _createClass(Cell, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.on("init-data", function (index, isLei) {
              console.log("初始化数据");
              _this2.index = index;
              _this2.isLei = isLei;
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            for (var i in this.numNodeList) {
              var node = this.numNodeList[i];
              node.active = false;
            }

            this.node.on("click", function () {
              console.log("被点到了", _this3.isLei, _this3.index);
              _this3.flag = !_this3.flag;
              _this3.cubeNode.active = !_this3.flag;
              _this3.shpereNode.active = _this3.flag;
              (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                error: Error()
              }), Global) : Global).getInstance().playerFlipCell(_this3.node, _this3.index, _this3.isLei);
            });
          }
        }, {
          key: "getIsLei",
          value: function getIsLei() {
            return this.isLei;
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cubeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "shpereNode", [_dec4], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9zYW9sZWkvYzNkbGVhcm4vYzNkTGVhcm5fMDAxL2Fzc2V0cy9TY3JpcHRzL0NlbGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJHbG9iYWwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDZWxsIiwidHlwZSIsImZsYWciLCJub2RlIiwib24iLCJpbmRleCIsImlzTGVpIiwiY29uc29sZSIsImxvZyIsImkiLCJudW1Ob2RlTGlzdCIsImFjdGl2ZSIsImN1YmVOb2RlIiwic2hwZXJlTm9kZSIsImdldEluc3RhbmNlIiwicGxheWVyRmxpcENlbGwiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDdkJDLE1BQUFBLE0sYUFBQUEsTTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O3NCQUdKQyxJLFdBRFpGLE9BQU8sQ0FBQyxNQUFELEMsVUFHSEMsUUFBUSxDQUFDLENBQUNILElBQUQsQ0FBRCxDLFVBRVJHLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDLFVBRVJHLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUVETSxJLEdBQU8sSzs7Ozs7O21DQUdOO0FBQUE7O0FBQ0wsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLFdBQWIsRUFBMEIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3hDQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsY0FBQSxNQUFJLENBQUNILEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUEsTUFBSSxDQUFDQyxLQUFMLEdBQWFBLEtBQWI7QUFDSCxhQUpEO0FBS0g7OztrQ0FDTztBQUFBOztBQUNKLGlCQUFLLElBQUlHLENBQVQsSUFBYyxLQUFLQyxXQUFuQixFQUFnQztBQUM1QixrQkFBSVAsSUFBSSxHQUFHLEtBQUtPLFdBQUwsQ0FBaUJELENBQWpCLENBQVg7QUFDQU4sY0FBQUEsSUFBSSxDQUFDUSxNQUFMLEdBQWMsS0FBZDtBQUNIOztBQUNELGlCQUFLUixJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQU07QUFDeEJHLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IsTUFBSSxDQUFDRixLQUF6QixFQUFnQyxNQUFJLENBQUNELEtBQXJDO0FBQ0EsY0FBQSxNQUFJLENBQUNILElBQUwsR0FBWSxDQUFDLE1BQUksQ0FBQ0EsSUFBbEI7QUFDQSxjQUFBLE1BQUksQ0FBQ1UsUUFBTCxDQUFjRCxNQUFkLEdBQXVCLENBQUMsTUFBSSxDQUFDVCxJQUE3QjtBQUNBLGNBQUEsTUFBSSxDQUFDVyxVQUFMLENBQWdCRixNQUFoQixHQUF5QixNQUFJLENBQUNULElBQTlCO0FBQ0E7QUFBQTtBQUFBLG9DQUFPWSxXQUFQLEdBQXFCQyxjQUFyQixDQUFvQyxNQUFJLENBQUNaLElBQXpDLEVBQThDLE1BQUksQ0FBQ0UsS0FBbkQsRUFBMEQsTUFBSSxDQUFDQyxLQUEvRDtBQUVILGFBUEQ7QUFRSDs7O3FDQUNpQjtBQUNkLG1CQUFPLEtBQUtBLEtBQVo7QUFDSDs7O2lDQUNNVSxTLEVBQW1CLENBQ3RCO0FBQ0g7Ozs7UUFyQ3FCckIsUzs7Ozs7aUJBR1EsRTs7Ozs7OztpQkFFWCxJOzs7Ozs7O2lCQUVFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJDZWxsXCIpXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoW05vZGVdKVxuICAgIHByaXZhdGUgbnVtTm9kZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICBwcml2YXRlIGN1YmVOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXG4gICAgcHJpdmF0ZSBzaHBlcmVOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGZsYWcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGluZGV4OiBOdW1iZXI7XG4gICAgcHVibGljIGlzTGVpOiBib29sZWFuO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiaW5pdC1kYXRhXCIsIChpbmRleCwgaXNMZWkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5pWw5o2uXCIpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5pc0xlaSA9IGlzTGVpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5udW1Ob2RlTGlzdCkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm51bU5vZGVMaXN0W2ldO1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiiq+eCueWIsOS6hlwiLCB0aGlzLmlzTGVpLCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9ICF0aGlzLmZsYWc7XG4gICAgICAgICAgICB0aGlzLmN1YmVOb2RlLmFjdGl2ZSA9ICF0aGlzLmZsYWc7XG4gICAgICAgICAgICB0aGlzLnNocGVyZU5vZGUuYWN0aXZlID0gdGhpcy5mbGFnO1xuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkucGxheWVyRmxpcENlbGwodGhpcy5ub2RlLHRoaXMuaW5kZXgsIHRoaXMuaXNMZWkpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0SXNMZWkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTGVpO1xuICAgIH1cbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIH1cbn1cbiJdfQ==