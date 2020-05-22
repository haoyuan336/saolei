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
            var _this = this;

            console.log("玩家翻开了 节点", index, isLei); //row 行  col 列

            var row = Math.floor(index / 10);
            var col = index % 10;
            this.checkMap = {};

            if (isLei) {
              this.touchLei();
              return;
            }

            this.findLei(col, row, target, function () {
              console.log("检测完了", _this.checkMap);
            });
          }
        }, {
          key: "touchLei",
          value: function touchLei() {
            console.log("摸到雷了");

            for (var i = 0; i < this.cellNodeList.length; i++) {
              var node = this.cellNodeList[i];
              node.emit("show-lei");
            }
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
                    } else {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvY2h5L3dvcmtzcGFjZS9zYW9sZWkvYzNkbGVhcm4vYzNkTGVhcm5fMDAxL2Fzc2V0cy9TY3JpcHRzL0dsb2JhbC50cyJdLCJuYW1lcyI6WyJDZWxsIiwiR2xvYmFsIiwiY2hlY2tNYXAiLCJjZWxsTm9kZUxpc3QiLCJBcnJheSIsIm5vZGUiLCJwdXNoIiwidGFyZ2V0IiwiaW5kZXgiLCJpc0xlaSIsImNvbnNvbGUiLCJsb2ciLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJjb2wiLCJ0b3VjaExlaSIsImZpbmRMZWkiLCJpIiwibGVuZ3RoIiwiZW1pdCIsImNiIiwibGVpQ291bnQiLCJqIiwiYyIsInIiLCJjZWxsIiwiZ2V0Q29tcG9uZW50IiwiZ2V0SXNMZWkiLCJpbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLEksV0FBQUEsSTs7Ozs7Ozt3QkFDSUMsTTtBQUtULDBCQUFjO0FBQUE7O0FBQUEsZUFITkMsUUFHTSxHQUhLLEVBR0w7QUFBQSxlQUZOQyxZQUVNLEdBRnNCLElBQUlDLEtBQUosRUFFdEI7QUFFYjs7OzttQ0FDZUMsSSxFQUFNO0FBQ2xCLGlCQUFLRixZQUFMLENBQWtCRyxJQUFsQixDQUF1QkQsSUFBdkI7QUFDSDs7O3lDQUNxQkUsTSxFQUFRQyxLLEVBQU9DLEssRUFBTztBQUFBOztBQUN4Q0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsS0FBeEIsRUFBK0JDLEtBQS9CLEVBRHdDLENBRXhDOztBQUNBLGdCQUFJRyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixLQUFLLEdBQUcsRUFBbkIsQ0FBVjtBQUNBLGdCQUFJTyxHQUFHLEdBQUdQLEtBQUssR0FBRyxFQUFsQjtBQUNBLGlCQUFLTixRQUFMLEdBQWdCLEVBQWhCOztBQUNBLGdCQUFJTyxLQUFKLEVBQVc7QUFDUCxtQkFBS08sUUFBTDtBQUNBO0FBQ0g7O0FBQ0QsaUJBQUtDLE9BQUwsQ0FBYUYsR0FBYixFQUFrQkgsR0FBbEIsRUFBdUJMLE1BQXZCLEVBQStCLFlBQU07QUFDakNHLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IsS0FBSSxDQUFDVCxRQUF6QjtBQUNILGFBRkQ7QUFHSDs7O3FDQUNpQjtBQUNkUSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLGlCQUFLLElBQUlPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2YsWUFBTCxDQUFrQmdCLE1BQXRDLEVBQThDRCxDQUFDLEVBQS9DLEVBQW1EO0FBQy9DLGtCQUFJYixJQUFJLEdBQUcsS0FBS0YsWUFBTCxDQUFrQmUsQ0FBbEIsQ0FBWDtBQUNBYixjQUFBQSxJQUFJLENBQUNlLElBQUwsQ0FBVSxVQUFWO0FBQ0g7QUFDSjs7O2tDQUNlTCxHLEVBQUtILEcsRUFBS1AsSSxFQUFNZ0IsRSxFQUFJO0FBQ2hDLGdCQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFDQSxpQkFBSyxJQUFJSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLG1CQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsb0JBQUlDLENBQUMsR0FBR1QsR0FBRyxHQUFHLENBQU4sR0FBVVEsQ0FBbEI7QUFDQSxvQkFBSUUsQ0FBQyxHQUFHYixHQUFHLEdBQUcsQ0FBTixHQUFVTSxDQUFsQjs7QUFDQSxvQkFBSU0sQ0FBQyxJQUFJLENBQUwsSUFBVUEsQ0FBQyxHQUFHLEVBQWQsSUFBb0JDLENBQUMsSUFBSSxDQUF6QixJQUE4QkEsQ0FBQyxHQUFHLEVBQXRDLEVBQTBDO0FBQ3RDLHNCQUFJakIsS0FBSyxHQUFHaUIsQ0FBQyxHQUFHLEVBQUosR0FBU0QsQ0FBckI7O0FBQ0Esc0JBQUloQixLQUFLLEtBQUtJLEdBQUcsR0FBRyxFQUFOLEdBQVdHLEdBQXpCLEVBQThCO0FBQzFCTCxvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkgsS0FBckI7QUFDQSx3QkFBSUQsTUFBTSxHQUFHLEtBQUtKLFlBQUwsQ0FBa0JLLEtBQWxCLENBQWI7QUFDQSx3QkFBSWtCLElBQUksR0FBR25CLE1BQU0sQ0FBQ29CLFlBQVA7QUFBQTtBQUFBLHFDQUFYO0FBQ0Esd0JBQUlsQixLQUFLLEdBQUdpQixJQUFJLENBQUNFLFFBQUwsRUFBWixDQUowQixDQUsxQjs7QUFDQSx3QkFBSW5CLEtBQUosRUFBVztBQUNQYSxzQkFBQUEsUUFBUTtBQUNYLHFCQUZELE1BRU8sQ0FFTjtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUNEakIsWUFBQUEsSUFBSSxDQUFDZSxJQUFMLENBQVUsTUFBVixFQUFrQkUsUUFBbEI7O0FBQ0EsZ0JBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNoQixtQkFBSyxJQUFJSixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLENBQXBCLEVBQXVCQSxFQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLHFCQUFLLElBQUlLLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLEVBQUMsRUFBeEIsRUFBNEI7QUFDeEIsc0JBQUlDLEVBQUMsR0FBR1QsR0FBRyxHQUFHLENBQU4sR0FBVVEsRUFBbEI7O0FBQ0Esc0JBQUlFLEVBQUMsR0FBR2IsR0FBRyxHQUFHLENBQU4sR0FBVU0sRUFBbEI7O0FBQ0Esc0JBQUlNLEVBQUMsSUFBSSxDQUFMLElBQVVBLEVBQUMsR0FBRyxFQUFkLElBQW9CQyxFQUFDLElBQUksQ0FBekIsSUFBOEJBLEVBQUMsR0FBRyxFQUF0QyxFQUEwQztBQUN0Qyx3QkFBSWpCLE1BQUssR0FBR2lCLEVBQUMsR0FBRyxFQUFKLEdBQVNELEVBQXJCOztBQUNBLHdCQUFJWixHQUFHLEdBQUcsRUFBTixHQUFXRyxHQUFYLEtBQW1CUCxNQUFuQixJQUE0QixDQUFDLEtBQUtOLFFBQUwsQ0FBY00sTUFBZCxDQUFqQyxFQUF1RDtBQUNuRCwyQkFBS04sUUFBTCxDQUFjTSxNQUFkLElBQXVCLElBQXZCO0FBQ0EsMkJBQUtTLE9BQUwsQ0FBYU8sRUFBYixFQUFnQkMsRUFBaEIsRUFBbUIsS0FBS3RCLFlBQUwsQ0FBa0JLLE1BQWxCLENBQW5CLEVBQTZDYSxFQUE3QztBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0osYUF0QytCLENBdUNoQzs7QUFDSDs7O3dDQUMyQjtBQUN4QixnQkFBSSxLQUFLUSxRQUFMLElBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCLG1CQUFLQSxRQUFMLEdBQWdCLElBQUk1QixNQUFKLEVBQWhCO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBSzRCLFFBQVo7QUFDSDs7Ozs7O0FBOUVRNUIsTUFBQUEsTSxDQUNLNEIsUSxHQUFtQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gJ2NjJ1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHbG9iYWwgPSBudWxsO1xuICAgIHByaXZhdGUgY2hlY2tNYXAgPSB7fTtcbiAgICBwcml2YXRlIGNlbGxOb2RlTGlzdDogQXJyYXk8Tm9kZT4gPSBuZXcgQXJyYXk8Tm9kZT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIHB1YmxpYyBwdXNoTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMuY2VsbE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfVxuICAgIHB1YmxpYyBwbGF5ZXJGbGlwQ2VsbCh0YXJnZXQsIGluZGV4LCBpc0xlaSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIueOqeWutue/u+W8gOS6hiDoioLngrlcIiwgaW5kZXgsIGlzTGVpKTtcbiAgICAgICAgLy9yb3cg6KGMICBjb2wg5YiXXG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gMTApO1xuICAgICAgICBsZXQgY29sID0gaW5kZXggJSAxMDtcbiAgICAgICAgdGhpcy5jaGVja01hcCA9IHt9O1xuICAgICAgICBpZiAoaXNMZWkpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hMZWkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbmRMZWkoY29sLCByb3csIHRhcmdldCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmo4DmtYvlrozkuoZcIiwgdGhpcy5jaGVja01hcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgdG91Y2hMZWkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pG45Yiw6Zu35LqGXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY2VsbE5vZGVMaXN0W2ldO1xuICAgICAgICAgICAgbm9kZS5lbWl0KFwic2hvdy1sZWlcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBmaW5kTGVpKGNvbCwgcm93LCBub2RlLCBjYikge1xuICAgICAgICBsZXQgbGVpQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbCAtIDEgKyBqO1xuICAgICAgICAgICAgICAgIGxldCByID0gcm93IC0gMSArIGk7XG4gICAgICAgICAgICAgICAgaWYgKGMgPj0gMCAmJiBjIDwgMTAgJiYgciA+PSAwICYmIHIgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByICogMTAgKyBjO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHJvdyAqIDEwICsgY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmNlbGxOb2RlTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRhcmdldC5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNMZWkgPSBjZWxsLmdldElzTGVpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXMgbGVpJywgaXNMZWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVpQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBub2RlLmVtaXQoXCJmbGlwXCIsIGxlaUNvdW50KTtcbiAgICAgICAgaWYgKGxlaUNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gY29sIC0gMSArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gcm93IC0gMSArIGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID49IDAgJiYgYyA8IDEwICYmIHIgPj0gMCAmJiByIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHIgKiAxMCArIGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93ICogMTAgKyBjb2wgIT09IGluZGV4ICYmICF0aGlzLmNoZWNrTWFwW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXBbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRMZWkoYywgciwgdGhpcy5jZWxsTm9kZUxpc3RbaW5kZXhdLCBjYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWkgY291bnRcIiwgbGVpQ291bnQpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdsb2JhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbn1cbiJdfQ==