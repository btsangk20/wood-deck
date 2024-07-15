"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  height: fit-content;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  height: 100%;\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  width: 20%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: rgb(242, 239, 234);\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  cursor: pointer;\n  object-fit: contain;\n  border-radius: 6px;\n  border: 1px solid;\n  &:hover {\n    box-shadow: ",
        ";\n  }\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  width: 80%;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/app/page.tsx
var page_exports = {};
__export(page_exports, {
    default: function() {
        return Home2;
    }
});
module.exports = __toCommonJS(page_exports);
// src/components/Dnd/DndContext.tsx
var import_react_dnd_html5_backend = require("react-dnd-html5-backend");
var import_react_dnd = require("react-dnd");
var DragDropContext = function(param) {
    var children = param.children;
    return /* @__PURE__ */ React.createElement(import_react_dnd.DndProvider, {
        backend: import_react_dnd_html5_backend.HTML5Backend
    }, children);
};
var DndContext_default = DragDropContext;
// src/components/Dnd/DraggableItem.tsx
var import_react_dnd2 = require("react-dnd");
// src/components/Dnd/Dnd.style.ts
var import_styled_components = __toESM(require("styled-components"));
var DraggableItemStyle = import_styled_components.default.div(_templateObject());
// src/components/Dnd/DraggableItem.tsx
var DraggableItem = function(props) {
    var object3D = props.object3D, children = props.children;
    var objectTypeId = object3D.objectTypeId;
    var _ref = _sliced_to_array((0, import_react_dnd2.useDrag)({
        type: objectTypeId,
        item: object3D,
        collect: function(monitor) {
            return {
                isDragging: monitor.isDragging()
            };
        }
    }), 2), isDragging = _ref[0].isDragging, drag = _ref[1];
    return /* @__PURE__ */ React.createElement(DraggableItemStyle, {
        ref: drag,
        style: {
            opacity: isDragging ? 0.5 : 1
        }
    }, children);
};
var DraggableItem_default = DraggableItem;
// src/hooks/useElementSize.ts
var import_react = require("react");
// src/components/ThreeContainer/ThreeContainer.tsx
var import_drei = require("@react-three/drei");
var import_fiber = require("@react-three/fiber");
var import_react3 = require("react");
// src/components/ThreeContainer/ThreeContainer.style.ts
var import_styled_components2 = __toESM(require("styled-components"));
var ThreeContainerStyled = import_styled_components2.default.div(_templateObject1());
// src/components/ThreeContainer/ThreeContainer.tsx
var import_debounce = __toESM(require("debounce"));
// src/components/NoSSR/NoSSR.tsx
var import_dynamic = __toESM(require("next/dynamic"));
var import_react2 = __toESM(require("react"));
var NoSSR = function(props) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, props.children);
};
var NoSSR_default = (0, import_dynamic.default)(function() {
    return Promise.resolve(NoSSR);
}, {
    ssr: false
});
// src/components/Panels/3D/Draw3D.tsx
var import_three = require("three");
// src/components/Panels/3D/WoodDeck3D/Floor3D.tsx
var import_react4 = __toESM(require("react"));
var THREE = __toESM(require("three"));
var Floor3D = function(props) {
    var floorData = props.floorData;
    var frameLength = floorData.frameLength, frameWidth = floorData.frameWidth, adjustedThicknessOfWooden = floorData.adjustedThicknessOfWooden, frameThickness = floorData.frameThickness, endHeightOfWooden = floorData.endHeightOfWooden, startX = floorData.startX, _floorData_color = floorData.color, color = _floorData_color === void 0 ? "black" : _floorData_color, positionZ = floorData.positionZ;
    var shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(frameLength, 0);
    shape.lineTo(frameLength, frameWidth);
    shape.lineTo(0, frameWidth);
    shape.lineTo(0, 0);
    var extrudeSettings = {
        depth: adjustedThicknessOfWooden,
        bevelEnabled: false
    };
    var frameGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var frameCenterX = startX - frameThickness;
    var frameCenterY = endHeightOfWooden;
    return /* @__PURE__ */ import_react4.default.createElement("mesh", {
        geometry: frameGeometry,
        position: [
            frameCenterX,
            frameCenterY,
            positionZ
        ],
        rotation: [
            Math.PI / 2,
            0,
            0
        ]
    }, /* @__PURE__ */ import_react4.default.createElement("meshBasicMaterial", {
        attach: "material",
        color: color
    }));
};
var Floor3D_default = Floor3D;
// src/components/Panels/3D/WoodDeck3D/WoodenPlanks3D.tsx
var import_react5 = __toESM(require("react"));
var WoodenPlanks3D = function(props) {
    var woodenPoints = props.woodenPoints, colorWooden = props.colorWooden;
    return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, woodenPoints.map(function(panel, index) {
        return /* @__PURE__ */ import_react5.default.createElement("mesh", {
            key: index,
            geometry: createPanelGeometry(panel)
        }, /* @__PURE__ */ import_react5.default.createElement("lineBasicMaterial", {
            attach: "material",
            color: colorWooden
        }));
    }));
};
var WoodenPlanks3D_default = WoodenPlanks3D;
// src/components/Panels/3D/WoodDeck3D/Columns3D.tsx
var import_react6 = __toESM(require("react"));
var THREE2 = __toESM(require("three"));
var Columns3D = function(props) {
    var columnsData = props.columnsData;
    var _columnsData_startX = columnsData.startX, startX = _columnsData_startX === void 0 ? 0 : _columnsData_startX, _columnsData_startY = columnsData.startY, startY = _columnsData_startY === void 0 ? 0 : _columnsData_startY, _columnsData_columnCount = columnsData.columnCount, columnCount = _columnsData_columnCount === void 0 ? 2 : _columnsData_columnCount, _columnsData_frameLength = columnsData.frameLength, frameLength = _columnsData_frameLength === void 0 ? 0 : _columnsData_frameLength, _columnsData_frameWidth = columnsData.frameWidth, frameWidth = _columnsData_frameWidth === void 0 ? 0 : _columnsData_frameWidth, _columnsData_adjustedThicknessOfColumn = columnsData.adjustedThicknessOfColumn, adjustedThicknessOfColumn = _columnsData_adjustedThicknessOfColumn === void 0 ? 0 : _columnsData_adjustedThicknessOfColumn, _columnsData_adjustedThicknessOfWooden = columnsData.adjustedThicknessOfWooden, adjustedThicknessOfWooden = _columnsData_adjustedThicknessOfWooden === void 0 ? 0 : _columnsData_adjustedThicknessOfWooden, _columnsData_adjustedHeightOfColumn = columnsData.adjustedHeightOfColumn, adjustedHeightOfColumn = _columnsData_adjustedHeightOfColumn === void 0 ? 0 : _columnsData_adjustedHeightOfColumn, _columnsData_color = columnsData.color, color = _columnsData_color === void 0 ? "black" : _columnsData_color;
    var columns = [];
    var columnGeometry = new THREE2.BoxGeometry(adjustedThicknessOfColumn, adjustedHeightOfColumn, adjustedThicknessOfColumn);
    for(var i = 0; i < columnCount; i++){
        var t = i / (columnCount - 1);
        var posX = (frameLength - adjustedThicknessOfWooden * 2) * t;
        columns.push({
            posX: posX,
            posY: 0
        });
        columns.push({
            posX: posX,
            posY: frameWidth - adjustedThicknessOfWooden * 2
        });
    }
    return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, columns.map(function(column, index) {
        return /* @__PURE__ */ import_react6.default.createElement("mesh", {
            key: index,
            geometry: columnGeometry,
            position: [
                column.posX,
                adjustedHeightOfColumn / 2 + startY,
                column.posY
            ]
        }, /* @__PURE__ */ import_react6.default.createElement("meshBasicMaterial", {
            attach: "material",
            color: color
        }));
    }));
};
var Columns3D_default = Columns3D;
// src/components/Panels/3D/WoodDeck3D/VerticalColumns3D.tsx
var import_react7 = __toESM(require("react"));
var THREE3 = __toESM(require("three"));
var VerticalColumns3D = function(props) {
    var columnsData = props.columnsData;
    var _columnsData_startX = columnsData.startX, startX = _columnsData_startX === void 0 ? 0 : _columnsData_startX, _columnsData_startY = columnsData.startY, startY = _columnsData_startY === void 0 ? 0 : _columnsData_startY, _columnsData_columnCount = columnsData.columnCount, columnCount = _columnsData_columnCount === void 0 ? 2 : _columnsData_columnCount, _columnsData_frameLength = columnsData.frameLength, frameLength = _columnsData_frameLength === void 0 ? 0 : _columnsData_frameLength, _columnsData_frameWidth = columnsData.frameWidth, frameWidth = _columnsData_frameWidth === void 0 ? 0 : _columnsData_frameWidth, _columnsData_adjustedThicknessOfColumn = columnsData.adjustedThicknessOfColumn, adjustedThicknessOfColumn = _columnsData_adjustedThicknessOfColumn === void 0 ? 0 : _columnsData_adjustedThicknessOfColumn, _columnsData_adjustedThicknessOfWooden = columnsData.adjustedThicknessOfWooden, adjustedThicknessOfWooden = _columnsData_adjustedThicknessOfWooden === void 0 ? 0 : _columnsData_adjustedThicknessOfWooden, _columnsData_adjustedHeightOfColumn = columnsData.adjustedHeightOfColumn, adjustedHeightOfColumn = _columnsData_adjustedHeightOfColumn === void 0 ? 0 : _columnsData_adjustedHeightOfColumn, _columnsData_color = columnsData.color, color = _columnsData_color === void 0 ? "black" : _columnsData_color;
    var columns = [];
    var columnGeometry = new THREE3.BoxGeometry(adjustedThicknessOfColumn, adjustedHeightOfColumn, adjustedThicknessOfColumn);
    for(var i = 0; i < columnCount; i++){
        var t = i / (columnCount - 1);
        var posY = startY + frameWidth * t;
        columns.push({
            posX: startX,
            posY: posY
        });
        columns.push({
            posX: startX + frameLength - adjustedThicknessOfWooden * 2,
            posY: posY
        });
    }
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, columns.map(function(column, index) {
        return /* @__PURE__ */ import_react7.default.createElement("mesh", {
            key: index,
            geometry: columnGeometry,
            position: [
                column.posX,
                adjustedHeightOfColumn / 2,
                column.posY
            ]
        }, /* @__PURE__ */ import_react7.default.createElement("meshBasicMaterial", {
            attach: "material",
            color: color
        }));
    }));
};
var VerticalColumns3D_default = VerticalColumns3D;
// src/components/Panels/3D/WoodDeck3D/WoodDeck3D.tsx
var WoodDeck3D = function(props) {
    var _lastWoodenPoint_points_, _lastWoodenPoint_points, _lastWoodenPoint_points1, _LPoint_points_, _lastWoodenPoint_points2, _LPoint_points;
    var woodDeckData = props.woodDeckData;
    var lengthOfWooden = woodDeckData.lengthOfWooden, thicknessOfWooden = woodDeckData.thicknessOfWooden, widthOfWooden = woodDeckData.widthOfWooden, colorWooden = woodDeckData.colorWooden, countWooden = woodDeckData.countWooden, gapSpacingWooden = woodDeckData.gapSpacingWooden, heightOfColumn = woodDeckData.heightOfColumn, _woodDeckData_columnCount = woodDeckData.columnCount, columnCount = _woodDeckData_columnCount === void 0 ? 2 : _woodDeckData_columnCount, thicknessOfColumn = woodDeckData.thicknessOfColumn, startX = woodDeckData.startX, startY = woodDeckData.startY, startZ = woodDeckData.startZ, _woodDeckData_startPointOfLShape = woodDeckData.startPointOfLShape, startPointOfLShape = _woodDeckData_startPointOfLShape === void 0 ? 0 : _woodDeckData_startPointOfLShape, lengthOfLWooden = woodDeckData.lengthOfLWooden, _woodDeckData_isLShape = woodDeckData.isLShape, isLShape = _woodDeckData_isLShape === void 0 ? false : _woodDeckData_isLShape, _woodDeckData_countLColumn = woodDeckData.countLColumn, countLColumn = _woodDeckData_countLColumn === void 0 ? 2 : _woodDeckData_countLColumn;
    var adjustedLengthOfWooden = lengthOfWooden * RATIO;
    var adjustedThicknessOfWooden = thicknessOfWooden * RATIO;
    var adjustedWidthOfWooden = widthOfWooden * RATIO;
    var adjustedGapSpacingWooden = gapSpacingWooden * RATIO;
    var adjustedHeightOfColumn = heightOfColumn * RATIO;
    var adjustedThicknessOfColumn = thicknessOfColumn * RATIO;
    var adjustedLengthOfLWooden = lengthOfLWooden ? lengthOfLWooden * RATIO : 0;
    var woodenPoints = [];
    var startHeightOfWooden = adjustedHeightOfColumn + startY;
    var endHeightOfWooden = startHeightOfWooden + adjustedThicknessOfWooden;
    for(var i = 0; i < countWooden; i++){
        var boardStartX = startX + i * (adjustedWidthOfWooden + adjustedGapSpacingWooden);
        var boardEndX = boardStartX + adjustedWidthOfWooden;
        var points = createPanelPoints(boardStartX, startHeightOfWooden, boardEndX, endHeightOfWooden);
        if (isLShape && i >= startPointOfLShape) {
            woodenPoints.push({
                points: points,
                depth: adjustedLengthOfLWooden
            });
        } else {
            woodenPoints.push({
                points: points,
                depth: adjustedLengthOfWooden
            });
        }
    }
    var frameThickness = adjustedThicknessOfWooden;
    var lastWoodenPoint = woodenPoints === null || woodenPoints === void 0 ? void 0 : woodenPoints[woodenPoints.length - 1];
    var _lastWoodenPoint_points__x;
    var lastPointX = (_lastWoodenPoint_points__x = lastWoodenPoint === null || lastWoodenPoint === void 0 ? void 0 : (_lastWoodenPoint_points1 = lastWoodenPoint.points) === null || _lastWoodenPoint_points1 === void 0 ? void 0 : (_lastWoodenPoint_points_ = _lastWoodenPoint_points1[(lastWoodenPoint === null || lastWoodenPoint === void 0 ? void 0 : (_lastWoodenPoint_points = lastWoodenPoint.points) === null || _lastWoodenPoint_points === void 0 ? void 0 : _lastWoodenPoint_points.length) - 1]) === null || _lastWoodenPoint_points_ === void 0 ? void 0 : _lastWoodenPoint_points_.x) !== null && _lastWoodenPoint_points__x !== void 0 ? _lastWoodenPoint_points__x : 0;
    var frameLength = lastPointX - startX + frameThickness * 2;
    var frameWidth = adjustedLengthOfWooden + adjustedThicknessOfWooden * 2;
    var LPoint = woodenPoints === null || woodenPoints === void 0 ? void 0 : woodenPoints[startPointOfLShape - 1];
    var _LPoint_points__x;
    var LPointX = (_LPoint_points__x = LPoint === null || LPoint === void 0 ? void 0 : (_LPoint_points = LPoint.points) === null || _LPoint_points === void 0 ? void 0 : (_LPoint_points_ = _LPoint_points[(lastWoodenPoint === null || lastWoodenPoint === void 0 ? void 0 : (_lastWoodenPoint_points2 = lastWoodenPoint.points) === null || _lastWoodenPoint_points2 === void 0 ? void 0 : _lastWoodenPoint_points2.length) - 1]) === null || _LPoint_points_ === void 0 ? void 0 : _LPoint_points_.x) !== null && _LPoint_points__x !== void 0 ? _LPoint_points__x : 0;
    var frameLLength = frameLength - LPointX + startX - adjustedGapSpacingWooden;
    var frameLWidth = adjustedLengthOfLWooden - adjustedLengthOfWooden;
    return /* @__PURE__ */ React.createElement("group", {
        position: [
            0,
            0,
            startZ
        ]
    }, /* @__PURE__ */ React.createElement(WoodenPlanks3D_default, {
        woodenPoints: woodenPoints,
        colorWooden: colorWooden
    }), /* @__PURE__ */ React.createElement(Floor3D_default, {
        floorData: {
            frameLength: frameLength,
            frameWidth: frameWidth,
            adjustedThicknessOfWooden: adjustedThicknessOfWooden,
            frameThickness: frameThickness,
            endHeightOfWooden: endHeightOfWooden,
            startX: startX,
            positionZ: -adjustedThicknessOfWooden
        }
    }), isLShape && /* @__PURE__ */ React.createElement(Floor3D_default, {
        floorData: {
            frameLength: frameLLength,
            frameWidth: frameLWidth,
            adjustedThicknessOfWooden: adjustedThicknessOfWooden,
            frameThickness: frameThickness,
            endHeightOfWooden: endHeightOfWooden,
            startX: LPointX + adjustedGapSpacingWooden,
            positionZ: adjustedLengthOfWooden + adjustedThicknessOfWooden
        }
    }), /* @__PURE__ */ React.createElement(Columns3D_default, {
        columnsData: {
            startX: startX,
            startY: startY,
            adjustedThicknessOfColumn: adjustedThicknessOfColumn,
            columnCount: columnCount,
            adjustedThicknessOfWooden: adjustedThicknessOfWooden,
            frameLength: frameLength,
            frameWidth: frameWidth,
            adjustedHeightOfColumn: adjustedHeightOfColumn
        }
    }), isLShape && /* @__PURE__ */ React.createElement(VerticalColumns3D_default, {
        columnsData: {
            startX: LPointX + adjustedGapSpacingWooden,
            startY: adjustedLengthOfWooden,
            adjustedThicknessOfColumn: adjustedThicknessOfColumn,
            columnCount: countLColumn,
            adjustedThicknessOfWooden: adjustedThicknessOfWooden,
            frameLength: frameLLength,
            frameWidth: frameLWidth,
            adjustedHeightOfColumn: adjustedHeightOfColumn
        }
    }));
};
var WoodDeck3D_default = WoodDeck3D;
// src/components/Panels/3D/Draw3D.tsx
var createPanelPoints = function(x1, y1, x2, y2) {
    return [
        new import_three.Vector2(x1, y1),
        new import_three.Vector2(x1, y2),
        new import_three.Vector2(x2, y2),
        new import_three.Vector2(x2, y1)
    ];
};
var createPanelGeometry = function(param) {
    var points = param.points, depth = param.depth;
    var panelShape = new import_three.Shape(points);
    var extrusionSettings = {
        depth: depth,
        bevelEnabled: true
    };
    return new import_three.ExtrudeGeometry(panelShape, extrusionSettings);
};
var SCALE = 1 / 100;
var FENCE_THICKNESS = 15;
var RATIO = 0.1;
var BOARD_DEPTH = FENCE_THICKNESS * RATIO;
var PILLAR_DEPTH = -(40 * RATIO);
var Draw3D = function(props) {
    var data = {
        lengthOfWooden: 1e3,
        widthOfWooden: 200,
        thicknessOfWooden: 50,
        colorWooden: "#694C3F",
        countWooden: 15,
        gapSpacingWooden: 30,
        heightOfColumn: 400,
        columnCount: 4,
        thicknessOfColumn: 100,
        isLShape: props.isLShape || false,
        startPointOfLShape: 10,
        countLColumn: 4,
        lengthOfLWooden: 4e3,
        startX: 0,
        startY: 0,
        startZ: 0
    };
    return /* @__PURE__ */ React.createElement("group", {
        scale: SCALE,
        position: props.position || [
            0,
            0,
            0
        ]
    }, /* @__PURE__ */ React.createElement(WoodDeck3D_default, {
        woodDeckData: data
    }));
};
var Draw3D_default = Draw3D;
// src/helpers/woodDeck.helper.ts
var import_uuid = require("uuid");
var rectId = (0, import_uuid.v4)();
var lId = (0, import_uuid.v4)();
var RectWoodDeck = {
    id: rectId,
    objectTypeId: "WOOD_DECK",
    title: "RectWoodDeck",
    objectImage: "/images/2d_deck.png",
    onParameterChanged: function(values) {
        return values;
    },
    dialogParameters: []
};
var LWoodDeck = {
    id: lId,
    objectTypeId: "L_WOOD_DECK",
    title: "LWoodDeck",
    objectImage: "/images/l_2d_deck.png",
    onParameterChanged: function(values) {
        return values;
    },
    dialogParameters: []
};
var getListObject = function() {
    return [
        RectWoodDeck,
        LWoodDeck
    ];
};
var WoodDeckPlugIn = {
    getListObject: getListObject
};
// src/features/home/ObjectModel.tsx
var import_drei2 = require("@react-three/drei");
var import_fiber2 = require("@react-three/fiber");
var import_react8 = require("react");
var import_react_dnd3 = require("react-dnd");
var THREE4 = __toESM(require("three"));
var PainterScene = function(param) {
    var arrayItems = param.arrayItems;
    var _ref = _sliced_to_array((0, import_react8.useState)([
        0,
        0,
        0
    ]), 2), cursorPosition = _ref[0], setCursorPosition = _ref[1];
    var planeRef = (0, import_react8.useRef)(null);
    var raycaster = (0, import_fiber2.useThree)().raycaster;
    var handlePointerMove = (0, import_react8.useCallback)(function(_) {
        if (planeRef.current) {
            var intersects = raycaster.intersectObject(planeRef.current);
            if (intersects.length > 0) {
                var point = intersects[0].point;
                var newPosition = [
                    Math.floor(point.x) + 0.5,
                    0,
                    // This sets the y-position to be just above the plane
                    Math.floor(point.z) + 0.5
                ];
                setCursorPosition(newPosition);
            }
        }
    }, [
        raycaster
    ]);
    var handleClick = (0, import_react8.useCallback)(function(event) {
        event.stopPropagation();
    }, [
        cursorPosition
    ]);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_drei2.OrbitControls, {
        makeDefault: true
    }), /* @__PURE__ */ React.createElement("ambientLight", {
        intensity: 0.5
    }), /* @__PURE__ */ React.createElement("directionalLight", {
        position: [
            1,
            0.75,
            0.5
        ],
        intensity: 1
    }), /* @__PURE__ */ React.createElement("gridHelper", {
        args: [
            20,
            20
        ]
    }), /* @__PURE__ */ React.createElement("mesh", {
        ref: planeRef,
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            -0.5,
            0
        ],
        onPointerMove: handlePointerMove
    }, /* @__PURE__ */ React.createElement("planeGeometry", {
        args: [
            100,
            100
        ]
    }), /* @__PURE__ */ React.createElement("meshBasicMaterial", {
        visible: false
    })), arrayItems === null || arrayItems === void 0 ? void 0 : arrayItems.map(function(item, index) {
        return /* @__PURE__ */ React.createElement(import_drei2.DragControls, {
            key: index,
            dragLimits: [
                [
                    -10,
                    7
                ],
                [
                    0,
                    0
                ],
                [
                    -10,
                    9
                ]
            ]
        }, /* @__PURE__ */ React.createElement(Draw3D_default, {
            position: item.position,
            isLShape: item.isLShape
        }));
    }));
};
var ObjectModel = function() {
    var _ref = _sliced_to_array((0, import_react8.useState)([]), 2), models = _ref[0], setModels = _ref[1];
    var gdl = WoodDeckPlugIn;
    var _ref1 = _sliced_to_array((0, import_react_dnd3.useDrop)({
        accept: [
            "WOOD_DECK",
            "L_WOOD_DECK"
        ],
        drop: function(item, monitor) {
            var _monitor_getClientOffset = monitor.getClientOffset(), x = _monitor_getClientOffset.x, y = _monitor_getClientOffset.y;
            var camera = new THREE4.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
            camera.position.z = 5;
            var vec = new THREE4.Vector3(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5);
            vec.unproject(camera);
            var dir = vec.sub(camera.position).normalize();
            var distance = -camera.position.z / dir.z;
            var pos = camera.position.clone().add(dir.multiplyScalar(distance));
            setModels(function(prevModels) {
                return _to_consumable_array(prevModels).concat([
                    {
                        position: [
                            pos.x,
                            pos.y,
                            pos.z
                        ],
                        isLShape: item.objectTypeId === "L_WOOD_DECK"
                    }
                ]);
            });
        }
    }), 2), drop = _ref1[1];
    return /* @__PURE__ */ React.createElement("div", {
        style: {
            width: "100%",
            height: "100vh"
        }
    }, /* @__PURE__ */ React.createElement(import_fiber2.Canvas, {
        camera: {
            position: [
                5,
                5,
                5
            ],
            fov: 50
        },
        ref: drop
    }, /* @__PURE__ */ React.createElement(PainterScene, {
        arrayItems: models
    })));
};
var ObjectModel_default = ObjectModel;
// src/theme/theme.ts
var generalTheme = {
    colors: {
        primary: "#561C24",
        selectedBackground: "#F5EEE6"
    },
    adminHeaderHeight: 60,
    generalSpace: 20,
    adminSidebarWidth: 200,
    headerHeight: 67,
    footerHeight: 140,
    formWidth: 325,
    boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.2)"
};
// src/features/home/Home.style.ts
var import_styled_components3 = __toESM(require("styled-components"));
var HomeStyled = import_styled_components3.default.div(_templateObject2());
var LayoutLeftStyled = import_styled_components3.default.div(_templateObject3());
var Mock2DItem = import_styled_components3.default.img(_templateObject4(), generalTheme.boxShadow);
var LayoutRightStyled = import_styled_components3.default.div(_templateObject5());
// src/features/home/Home.tsx
var Home = function() {
    var gdl = WoodDeckPlugIn;
    var listObject = gdl.getListObject();
    return /* @__PURE__ */ React.createElement(DndContext_default, null, /* @__PURE__ */ React.createElement(HomeStyled, null, /* @__PURE__ */ React.createElement(LayoutLeftStyled, null, listObject === null || listObject === void 0 ? void 0 : listObject.map(function(item) {
        return /* @__PURE__ */ React.createElement(DraggableItem_default, {
            object3D: item,
            key: item.id
        }, /* @__PURE__ */ React.createElement(Mock2DItem, {
            alt: "#",
            src: item.objectImage
        }));
    })), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(LayoutRightStyled, null, /* @__PURE__ */ React.createElement(ObjectModel_default, null))));
};
var Home_default = Home;
// src/app/page.tsx
function Home2() {
    return /* @__PURE__ */ React.createElement(Home_default, null);
}
