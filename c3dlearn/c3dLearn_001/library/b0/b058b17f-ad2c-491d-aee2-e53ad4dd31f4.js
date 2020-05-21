System.register(["cc", "code-quality:cr", "./Cell.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Cell, _crd, Global;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfCell(extras) {
    _reporterNs.report("Cell", "./Cell", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CellJs) {
      Cell = _CellJs.Cell;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b058bF/rSxJHa7i5TrU3TH0", "Global", _context.meta);

      _crd = true;

      _export("Global", Global = /*#__PURE__*/function () {
        function Global() {
          _classCallCheck(this, Global);

          this.checkMap = {};
          this.cellNodeList = new Array();
        }

        _createClass(Global, [{
          key: "pushNode",
          value: function pushNode(node) {
            this.cellNodeList.push(node);
          }
        }, {
          key: "playerFlipCell",
          value: function playerFlipCell(target, index, isLei) {
            console.log("玩家翻开了 节点", index, isLei); //row 行  col 列

            var row = Math.floor(index / 10);
            var col = index % 10;
            this.findLei(col, row, target, function () {});
          }
        }, {
          key: "findLei",
          value: function findLei(col, row, node, cb) {
            var leiCount = 0;

            for (var i = 0; i < 3; i++) {
              for (var j = 0; j < 3; j++) {
                var c = col - 1 + j;
                var r = row - 1 + i;

                if (c >= 0 && c < 10 && r >= 0 && r < 10) {
                  var index = r * 10 + c;

                  if (index !== row * 10 + col) {
                    console.log("index", index);
                    var target = this.cellNodeList[index];
                    var cell = target.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
                      error: Error()
                    }), Cell) : Cell);
                    var isLei = cell.getIsLei(); // console.log('is lei', isLei);

                    if (isLei) {
                      leiCount++;
                    } else {// console.log("col", col);
                      // console.log("row", row);
                      // console.log("c", c);
                      // console.log("r", r);
                      // this.findLei(c, r, target, cb);
                    }
                  }
                }
              }
            }

            node.emit("flip", leiCount);

            if (leiCount === 0) {
              for (var _i = 0; _i < 3; _i++) {
                for (var _j = 0; _j < 3; _j++) {
                  var _c = col - 1 + _j;

                  var _r = row - 1 + _i;

                  if (_c >= 0 && _c < 10 && _r >= 0 && _r < 10) {
                    var _index = _r * 10 + _c;

                    if (row * 10 + col !== _index && !this.checkMap[_index]) {
                      this.checkMap[_index] = true;
                      this.findLei(_c, _r, this.cellNodeList[_index], cb);
                    }
                  }
                }
              }
            } // console.log("lei count", leiCount);

          }
        }], [{
          key: "getInstance",
          value: function getInstance() {
            if (this.instance == null) {
              this.instance = new Global();
            }

            return this.instance;
          }
        }]);

        return Global;
      }());

      Global.instance = null;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9zYW9sZWkvYzNkbGVhcm4vYzNkTGVhcm5fMDAxL2Fzc2V0cy9TY3JpcHRzL0dsb2JhbC50cyJdLCJuYW1lcyI6WyJDZWxsIiwiR2xvYmFsIiwiY2hlY2tNYXAiLCJjZWxsTm9kZUxpc3QiLCJBcnJheSIsIm5vZGUiLCJwdXNoIiwidGFyZ2V0IiwiaW5kZXgiLCJpc0xlaSIsImNvbnNvbGUiLCJsb2ciLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJjb2wiLCJmaW5kTGVpIiwiY2IiLCJsZWlDb3VudCIsImkiLCJqIiwiYyIsInIiLCJjZWxsIiwiZ2V0Q29tcG9uZW50IiwiZ2V0SXNMZWkiLCJlbWl0IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxJLFdBQUFBLEk7Ozs7Ozs7d0JBQ0lDLE07QUFLVCwwQkFBYztBQUFBOztBQUFBLGVBSE5DLFFBR00sR0FISyxFQUdMO0FBQUEsZUFGTkMsWUFFTSxHQUZzQixJQUFJQyxLQUFKLEVBRXRCO0FBRWI7Ozs7bUNBQ2VDLEksRUFBTTtBQUNsQixpQkFBS0YsWUFBTCxDQUFrQkcsSUFBbEIsQ0FBdUJELElBQXZCO0FBQ0g7Ozt5Q0FDcUJFLE0sRUFBUUMsSyxFQUFPQyxLLEVBQU87QUFDeENDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JILEtBQXhCLEVBQStCQyxLQUEvQixFQUR3QyxDQUV4Qzs7QUFDQSxnQkFBSUcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sS0FBSyxHQUFHLEVBQW5CLENBQVY7QUFDQSxnQkFBSU8sR0FBRyxHQUFHUCxLQUFLLEdBQUcsRUFBbEI7QUFFQSxpQkFBS1EsT0FBTCxDQUFhRCxHQUFiLEVBQWtCSCxHQUFsQixFQUF1QkwsTUFBdkIsRUFBK0IsWUFBTSxDQUVwQyxDQUZEO0FBR0g7OztrQ0FDZVEsRyxFQUFLSCxHLEVBQUtQLEksRUFBTVksRSxF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IH0gZnJvbSAnY2MnXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9DZWxsJztcbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdsb2JhbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaGVja01hcCA9IHt9O1xuICAgIHByaXZhdGUgY2VsbE5vZGVMaXN0OiBBcnJheTxOb2RlPiA9IG5ldyBBcnJheTxOb2RlPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG4gICAgcHVibGljIHB1c2hOb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5jZWxsTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICB9XG4gICAgcHVibGljIHBsYXllckZsaXBDZWxsKHRhcmdldCwgaW5kZXgsIGlzTGVpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi546p5a6257+75byA5LqGIOiKgueCuVwiLCBpbmRleCwgaXNMZWkpO1xuICAgICAgICAvL3JvdyDooYwgIGNvbCDliJdcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyAxMCk7XG4gICAgICAgIGxldCBjb2wgPSBpbmRleCAlIDEwO1xuXG4gICAgICAgIHRoaXMuZmluZExlaShjb2wsIHJvdywgdGFyZ2V0LCAoKSA9PiB7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgZmluZExlaShjb2wsIHJvdywgbm9kZSwgY2IpIHtcbiAgICAgICAgbGV0IGxlaUNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb2wgLSAxICsgajtcbiAgICAgICAgICAgICAgICBsZXQgciA9IHJvdyAtIDEgKyBpO1xuICAgICAgICAgICAgICAgIGlmIChjID49IDAgJiYgYyA8IDEwICYmIHIgPj0gMCAmJiByIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gciAqIDEwICsgYztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSByb3cgKiAxMCArIGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jZWxsTm9kZUxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzTGVpID0gY2VsbC5nZXRJc0xlaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzIGxlaScsIGlzTGVpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlaUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sXCIsIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyb3dcIiwgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNcIiwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyXCIsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZmluZExlaShjLCByLCB0YXJnZXQsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBub2RlLmVtaXQoXCJmbGlwXCIsIGxlaUNvdW50KTtcbiAgICAgICAgaWYgKGxlaUNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gY29sIC0gMSArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gcm93IC0gMSArIGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID49IDAgJiYgYyA8IDEwICYmIHIgPj0gMCAmJiByIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHIgKiAxMCArIGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93ICogMTAgKyBjb2wgIT09IGluZGV4ICYmICF0aGlzLmNoZWNrTWFwW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXBbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRMZWkoYywgciwgdGhpcy5jZWxsTm9kZUxpc3RbaW5kZXhdLCBjYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWkgY291bnRcIiwgbGVpQ291bnQpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdsb2JhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbn1cbiJdfQ==