System.register(["cc", "code-quality:cr", "./Global.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Global, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Cell;

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
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
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
      }), _dec5 = property({
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

          _initializerDefineProperty(_this, "flagNode", _descriptor4, _assertThisInitialized(_this));

          _this.flag = false;
          _this.isFlip = false;
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
            this.node.on("flip", function (leiCount) {
              console.log("lei count", leiCount);
              _this2.isFlip = true;

              if (leiCount > 0) {
                _this2.numNodeList[leiCount - 1].active = true;
              } else {
                _this2.cubeNode.active = false;
                _this2.shpereNode.active = false;
              }

              _this2.flagNode.active = false;
            });
            this.node.on("show-lei", function () {
              if (_this2.isLei) {
                console.log("显示雷");
                _this2.shpereNode.active = true;
                _this2.cubeNode.active = false;
                _this2.flagNode.active = false;
              }
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
              if (_this3.isFlip) {
                return;
              }

              console.log("被点到了", _this3.isLei, _this3.index);
              _this3.flag = !_this3.flag;
              _this3.flagNode.active = _this3.flag; // this.cubeNode.active = !this.flag;
              // this.shpereNode.active = this.flag;
              // Global.getInstance().playerFlipCell(this.node,this.index, this.isLei);
            });
            this.node.on("scroll", function () {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "flagNode", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9zYW9sZWkvYzNkbGVhcm4vYzNkTGVhcm5fMDAxL2Fzc2V0cy9TY3JpcHRzL0NlbGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJHbG9iYWwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDZWxsIiwidHlwZSIsImZsYWciLCJpc0ZsaXAiLCJub2RlIiwib24iLCJpbmRleCIsImlzTGVpIiwiY29uc29sZSIsImxvZyIsImxlaUNvdW50IiwibnVtTm9kZUxpc3QiLCJhY3RpdmUiLCJjdWJlTm9kZSIsInNocGVyZU5vZGUiLCJmbGFnTm9kZSIsImkiLCJnZXRJbnN0YW5jZSIsInBsYXllckZsaXBDZWxsIiwiZGVsdGFUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDdkJDLE1BQUFBLE0sYUFBQUEsTTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O3NCQUdKQyxJLFdBRFpGLE9BQU8sQ0FBQyxNQUFELEMsVUFHSEMsUUFBUSxDQUFDLENBQUNILElBQUQsQ0FBRCxDLFVBRVJHLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDLFVBRVJHLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDLFVBRVJHLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRURNLEksR0FBTyxLO2dCQUVQQyxNLEdBQVMsSzs7Ozs7O21DQUdSO0FBQUE7O0FBQ0wsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLFdBQWIsRUFBMEIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3hDQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsY0FBQSxNQUFJLENBQUNILEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUEsTUFBSSxDQUFDQyxLQUFMLEdBQWFBLEtBQWI7QUFDSCxhQUpEO0FBS0EsaUJBQUtILElBQUwsQ0FBVUMsRUFBVixDQUFhLE1BQWIsRUFBcUIsVUFBQ0ssUUFBRCxFQUFjO0FBQy9CRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCQyxRQUF6QjtBQUNBLGNBQUEsTUFBSSxDQUFDUCxNQUFMLEdBQWMsSUFBZDs7QUFDQSxrQkFBSU8sUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxnQkFBQSxNQUFJLENBQUNDLFdBQUwsQ0FBaUJELFFBQVEsR0FBRyxDQUE1QixFQUErQkUsTUFBL0IsR0FBd0MsSUFBeEM7QUFDSCxlQUZELE1BRU87QUFDSCxnQkFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBY0QsTUFBZCxHQUF1QixLQUF2QjtBQUNBLGdCQUFBLE1BQUksQ0FBQ0UsVUFBTCxDQUFnQkYsTUFBaEIsR0FBeUIsS0FBekI7QUFDSDs7QUFDRCxjQUFBLE1BQUksQ0FBQ0csUUFBTCxDQUFjSCxNQUFkLEdBQXVCLEtBQXZCO0FBRUgsYUFYRDtBQVlBLGlCQUFLUixJQUFMLENBQVVDLEVBQVYsQ0FBYSxVQUFiLEVBQXlCLFlBQUk7QUFDekIsa0JBQUksTUFBSSxDQUFDRSxLQUFULEVBQWU7QUFDWEMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQSxnQkFBQSxNQUFJLENBQUNLLFVBQUwsQ0FBZ0JGLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0EsZ0JBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWNELE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxnQkFBQSxNQUFJLENBQUNHLFFBQUwsQ0FBY0gsTUFBZCxHQUF1QixLQUF2QjtBQUVIO0FBQ0osYUFSRDtBQVNIOzs7a0NBQ087QUFBQTs7QUFDSixpQkFBSyxJQUFJSSxDQUFULElBQWMsS0FBS0wsV0FBbkIsRUFBZ0M7QUFDNUIsa0JBQUlQLElBQUksR0FBRyxLQUFLTyxXQUFMLENBQWlCSyxDQUFqQixDQUFYO0FBQ0FaLGNBQUFBLElBQUksQ0FBQ1EsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7QUFDRCxpQkFBS1IsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFNO0FBQ3hCLGtCQUFJLE1BQUksQ0FBQ0YsTUFBVCxFQUFnQjtBQUNaO0FBQ0g7O0FBQ0RLLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IsTUFBSSxDQUFDRixLQUF6QixFQUFnQyxNQUFJLENBQUNELEtBQXJDO0FBQ0EsY0FBQSxNQUFJLENBQUNKLElBQUwsR0FBWSxDQUFDLE1BQUksQ0FBQ0EsSUFBbEI7QUFDQSxjQUFBLE1BQUksQ0FBQ2EsUUFBTCxDQUFjSCxNQUFkLEdBQXVCLE1BQUksQ0FBQ1YsSUFBNUIsQ0FOd0IsQ0FPeEI7QUFDQTtBQUNBO0FBRUgsYUFYRDtBQVlBLGlCQUFLRSxJQUFMLENBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQU07QUFDekI7QUFBQTtBQUFBLG9DQUFPWSxXQUFQLEdBQXFCQyxjQUFyQixDQUFvQyxNQUFJLENBQUNkLElBQXpDLEVBQStDLE1BQUksQ0FBQ0UsS0FBcEQsRUFBMkQsTUFBSSxDQUFDQyxLQUFoRTtBQUNILGFBRkQ7QUFJSDs7O3FDQUNpQjtBQUNkLG1CQUFPLEtBQUtBLEtBQVo7QUFDSDs7O2lDQUNNWSxTLEVBQW1CLENBQ3RCO0FBQ0g7Ozs7UUF0RXFCeEIsUzs7Ozs7aUJBR1EsRTs7Ozs7OztpQkFFWCxJOzs7Ozs7O2lCQUVFLEk7Ozs7Ozs7aUJBRUYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkNlbGxcIilcbmV4cG9ydCBjbGFzcyBDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShbTm9kZV0pXG4gICAgcHJpdmF0ZSBudW1Ob2RlTGlzdDogTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHByaXZhdGUgY3ViZU5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICBwcml2YXRlIHNocGVyZU5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICBwcml2YXRlIGZsYWdOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGZsYWcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGluZGV4OiBOdW1iZXI7XG4gICAgcHJpdmF0ZSBpc0ZsaXAgPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNMZWk6IGJvb2xlYW47XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXQtZGF0YVwiLCAoaW5kZXgsIGlzTGVpKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMluaVsOaNrlwiKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuaXNMZWkgPSBpc0xlaTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcImZsaXBcIiwgKGxlaUNvdW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlaSBjb3VudFwiLCBsZWlDb3VudCk7XG4gICAgICAgICAgICB0aGlzLmlzRmxpcCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobGVpQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1Ob2RlTGlzdFtsZWlDb3VudCAtIDFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3ViZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaHBlcmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mbGFnTm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvdy1sZWlcIiwgKCk9PntcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTGVpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekuumbt1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNocGVyZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxhZ05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLm51bU5vZGVMaXN0KSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubnVtTm9kZUxpc3RbaV07XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmxpcCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLooqvngrnliLDkuoZcIiwgdGhpcy5pc0xlaSwgdGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLmZsYWcgPSAhdGhpcy5mbGFnO1xuICAgICAgICAgICAgdGhpcy5mbGFnTm9kZS5hY3RpdmUgPSB0aGlzLmZsYWc7XG4gICAgICAgICAgICAvLyB0aGlzLmN1YmVOb2RlLmFjdGl2ZSA9ICF0aGlzLmZsYWc7XG4gICAgICAgICAgICAvLyB0aGlzLnNocGVyZU5vZGUuYWN0aXZlID0gdGhpcy5mbGFnO1xuICAgICAgICAgICAgLy8gR2xvYmFsLmdldEluc3RhbmNlKCkucGxheWVyRmxpcENlbGwodGhpcy5ub2RlLHRoaXMuaW5kZXgsIHRoaXMuaXNMZWkpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgR2xvYmFsLmdldEluc3RhbmNlKCkucGxheWVyRmxpcENlbGwodGhpcy5ub2RlLCB0aGlzLmluZGV4LCB0aGlzLmlzTGVpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgcHVibGljIGdldElzTGVpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0xlaTtcbiAgICB9XG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICB9XG59XG4iXX0=