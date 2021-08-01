var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = (x) => {
  if (typeof require !== "undefined")
    return require(x);
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module91, desc) => {
  if (module91 && typeof module91 === "object" || typeof module91 === "function") {
    for (let key of __getOwnPropNames(module91))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module91[key], enumerable: !(desc = __getOwnPropDesc(module91, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module91) => {
  return __reExport(__markAsModule(__defProp(module91 != null ? __create(__getProtoOf(module91)) : {}, "default", module91 && module91.__esModule && "default" in module91 ? { get: () => module91.default, enumerable: true } : { value: module91, enumerable: true })), module91);
};

// <define:process.env>
var init_define_process_env = __esm({
  "<define:process.env>"() {
  }
});

// node_modules/@storybook/addon-actions/dist/cjs/models/HandlerFunction.js
var require_HandlerFunction = __commonJS({
  "node_modules/@storybook/addon-actions/dist/cjs/models/HandlerFunction.js"() {
    init_define_process_env();
    "use strict";
  }
});

// node_modules/@storybook/addon-actions/dist/cjs/models/DecoratorFunction.js
var require_DecoratorFunction = __commonJS({
  "node_modules/@storybook/addon-actions/dist/cjs/models/DecoratorFunction.js"() {
    init_define_process_env();
    "use strict";
  }
});

// node_modules/@storybook/addon-actions/dist/cjs/models/ActionsMap.js
var require_ActionsMap = __commonJS({
  "node_modules/@storybook/addon-actions/dist/cjs/models/ActionsMap.js"() {
    init_define_process_env();
    "use strict";
  }
});

// node_modules/@storybook/addon-actions/dist/cjs/models/ActionOptions.js
var require_ActionOptions = __commonJS({
  "node_modules/@storybook/addon-actions/dist/cjs/models/ActionOptions.js"() {
    init_define_process_env();
    "use strict";
  }
});

// node_modules/@storybook/addon-actions/dist/cjs/models/ActionsFunction.js
var require_ActionsFunction = __commonJS({
  "node_modules/@storybook/addon-actions/dist/cjs/models/ActionsFunction.js"() {
    init_define_process_env();
    "use strict";
  }
});

// node_modules/@storybook/addon-actions/dist/cjs/models/ActionDisplay.js
var require_ActionDisplay = __commonJS({
  "node_modules/@storybook/addon-actions/dist/cjs/models/ActionDisplay.js"() {
    init_define_process_env();
    "use strict";
  }
});

// src/addons/essentials/register.js
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/A11yContext.js
var A11yContext_exports = {};
__export(A11yContext_exports, {
  A11yContext: () => __export22,
  A11yContextProvider: () => __export12,
  useA11yContext: () => __export02
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/constants.js
var constants_exports = {};
__export(constants_exports, {
  ADDON_ID: () => __export4,
  EVENTS: () => __export0,
  HIGHLIGHT_STYLE_ID: () => __export1,
  PANEL_ID: () => __export3,
  PARAM_KEY: () => __export2
});
init_define_process_env();
var module = { exports: {} };
var exports = module.exports;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENTS = exports.HIGHLIGHT_STYLE_ID = exports.PARAM_KEY = exports.PANEL_ID = exports.ADDON_ID = void 0;
var ADDON_ID = "storybook/a11y";
exports.ADDON_ID = ADDON_ID;
var PANEL_ID = "".concat(ADDON_ID, "/panel");
exports.PANEL_ID = PANEL_ID;
var PARAM_KEY = "a11y";
exports.PARAM_KEY = PARAM_KEY;
var HIGHLIGHT_STYLE_ID = "a11yHighlight";
exports.HIGHLIGHT_STYLE_ID = HIGHLIGHT_STYLE_ID;
var RESULT = "".concat(ADDON_ID, "/result");
var REQUEST = "".concat(ADDON_ID, "/request");
var RUNNING = "".concat(ADDON_ID, "/running");
var ERROR = "".concat(ADDON_ID, "/error");
var MANUAL = "".concat(ADDON_ID, "/manual");
var HIGHLIGHT = "".concat(ADDON_ID, "/highlight");
var EVENTS = {
  RESULT,
  REQUEST,
  RUNNING,
  ERROR,
  MANUAL,
  HIGHLIGHT
};
exports.EVENTS = EVENTS;
var __export0;
var __export1;
var __export2;
var __export3;
var __export4;
if (Object.isExtensible(module.exports)) {
  __export0 = module.exports["EVENTS"];
  __export1 = module.exports["HIGHLIGHT_STYLE_ID"];
  __export2 = module.exports["PARAM_KEY"];
  __export3 = module.exports["PANEL_ID"];
  __export4 = module.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/A11yContext.js
import * as $cjs$_storybook_core_events from "@storybook/core-events";
import * as $cjs$_storybook_api from "@storybook/api";
import * as $cjs$_storybook_theming from "@storybook/theming";
import * as $cjs$react from "react";

// empty:core-js/modules/es.object.keys.js
var es_object_keys_exports = {};
__export(es_object_keys_exports, {
  default: () => es_object_keys_default
});
init_define_process_env();
var es_object_keys_default = {};

// empty:core-js/modules/es.string.includes.js
var es_string_includes_exports = {};
__export(es_string_includes_exports, {
  default: () => es_string_includes_default
});
init_define_process_env();
var es_string_includes_default = {};

// empty:core-js/modules/es.array.includes.js
var es_array_includes_exports = {};
__export(es_array_includes_exports, {
  default: () => es_array_includes_default
});
init_define_process_env();
var es_array_includes_default = {};

// empty:core-js/modules/es.array.filter.js
var es_array_filter_exports = {};
__export(es_array_filter_exports, {
  default: () => es_array_filter_default
});
init_define_process_env();
var es_array_filter_default = {};

// empty:core-js/modules/es.array.concat.js
var es_array_concat_exports = {};
__export(es_array_concat_exports, {
  default: () => es_array_concat_default
});
init_define_process_env();
var es_array_concat_default = {};

// empty:core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor_exports = {};
__export(es_object_get_own_property_descriptor_exports, {
  default: () => es_object_get_own_property_descriptor_default
});
init_define_process_env();
var es_object_get_own_property_descriptor_default = {};

// empty:core-js/modules/es.weak-map.js
var es_weak_map_exports = {};
__export(es_weak_map_exports, {
  default: () => es_weak_map_default
});
init_define_process_env();
var es_weak_map_default = {};

// empty:core-js/modules/es.object.assign.js
var es_object_assign_exports = {};
__export(es_object_assign_exports, {
  default: () => es_object_assign_default
});
init_define_process_env();
var es_object_assign_default = {};

// empty:core-js/modules/es.array.from.js
var es_array_from_exports = {};
__export(es_array_from_exports, {
  default: () => es_array_from_default
});
init_define_process_env();
var es_array_from_default = {};

// empty:core-js/modules/es.function.name.js
var es_function_name_exports = {};
__export(es_function_name_exports, {
  default: () => es_function_name_default
});
init_define_process_env();
var es_function_name_default = {};

// empty:core-js/modules/es.array.slice.js
var es_array_slice_exports = {};
__export(es_array_slice_exports, {
  default: () => es_array_slice_default
});
init_define_process_env();
var es_array_slice_default = {};

// empty:core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator_exports = {};
__export(web_dom_collections_iterator_exports, {
  default: () => web_dom_collections_iterator_default
});
init_define_process_env();
var web_dom_collections_iterator_default = {};

// empty:core-js/modules/es.array.iterator.js
var es_array_iterator_exports = {};
__export(es_array_iterator_exports, {
  default: () => es_array_iterator_default
});
init_define_process_env();
var es_array_iterator_default = {};

// empty:core-js/modules/es.string.iterator.js
var es_string_iterator_exports = {};
__export(es_string_iterator_exports, {
  default: () => es_string_iterator_default
});
init_define_process_env();
var es_string_iterator_default = {};

// empty:core-js/modules/es.symbol.iterator.js
var es_symbol_iterator_exports = {};
__export(es_symbol_iterator_exports, {
  default: () => es_symbol_iterator_default
});
init_define_process_env();
var es_symbol_iterator_default = {};

// empty:core-js/modules/es.object.to-string.js
var es_object_to_string_exports = {};
__export(es_object_to_string_exports, {
  default: () => es_object_to_string_default
});
init_define_process_env();
var es_object_to_string_default = {};

// empty:core-js/modules/es.symbol.description.js
var es_symbol_description_exports = {};
__export(es_symbol_description_exports, {
  default: () => es_symbol_description_default
});
init_define_process_env();
var es_symbol_description_default = {};

// empty:core-js/modules/es.symbol.js
var es_symbol_exports = {};
__export(es_symbol_exports, {
  default: () => es_symbol_default
});
init_define_process_env();
var es_symbol_default = {};

// node_modules/@storybook/addon-a11y/dist/cjs/components/A11yContext.js
function $$cjs_default$$(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module2 = { exports: {} };
var exports2 = module2.exports;
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
$$cjs_default$$(es_symbol_exports);
$$cjs_default$$(es_symbol_description_exports);
$$cjs_default$$(es_object_to_string_exports);
$$cjs_default$$(es_symbol_iterator_exports);
$$cjs_default$$(es_string_iterator_exports);
$$cjs_default$$(es_array_iterator_exports);
$$cjs_default$$(web_dom_collections_iterator_exports);
$$cjs_default$$(es_array_slice_exports);
$$cjs_default$$(es_function_name_exports);
$$cjs_default$$(es_array_from_exports);
$$cjs_default$$(es_object_assign_exports);
$$cjs_default$$(es_weak_map_exports);
$$cjs_default$$(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports2, "__esModule", {
  value: true
});
exports2.useA11yContext = exports2.A11yContextProvider = exports2.A11yContext = void 0;
$$cjs_default$$(es_array_concat_exports);
$$cjs_default$$(es_array_filter_exports);
$$cjs_default$$(es_array_includes_exports);
$$cjs_default$$(es_string_includes_exports);
$$cjs_default$$(es_object_keys_exports);
var React = _interopRequireWildcard($$cjs_default$$($cjs$react));
var _theming = $$cjs_default$$($cjs$_storybook_theming);
var _api = $$cjs_default$$($cjs$_storybook_api);
var _coreEvents = $$cjs_default$$($cjs$_storybook_core_events);
var _constants = $$cjs_default$$(constants_exports);
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var colorsByType = [
  (0, _theming.convert)(_theming.themes.normal).color.negative,
  (0, _theming.convert)(_theming.themes.normal).color.positive,
  (0, _theming.convert)(_theming.themes.normal).color.warning
];
var A11yContext = /* @__PURE__ */ React.createContext({
  results: {
    passes: [],
    incomplete: [],
    violations: []
  },
  setResults: function setResults() {
  },
  highlighted: [],
  toggleHighlight: function toggleHighlight() {
  },
  clearHighlights: function clearHighlights() {
  },
  tab: 0,
  setTab: function setTab() {
  }
});
exports2.A11yContext = A11yContext;
var defaultResult = {
  passes: [],
  incomplete: [],
  violations: []
};
var A11yContextProvider = function A11yContextProvider2(_ref) {
  var _useChannel;
  var active = _ref.active, props = _objectWithoutProperties(_ref, ["active"]);
  var _React$useState = React.useState(defaultResult), _React$useState2 = _slicedToArray(_React$useState, 2), results = _React$useState2[0], setResults2 = _React$useState2[1];
  var _React$useState3 = React.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), tab = _React$useState4[0], setTab2 = _React$useState4[1];
  var _React$useState5 = React.useState([]), _React$useState6 = _slicedToArray(_React$useState5, 2), highlighted = _React$useState6[0], setHighlighted = _React$useState6[1];
  var _useStorybookState = (0, _api.useStorybookState)(), storyId = _useStorybookState.storyId;
  var handleToggleHighlight = React.useCallback(function(target, highlight) {
    setHighlighted(function(prevHighlighted) {
      return highlight ? [].concat(_toConsumableArray(prevHighlighted), _toConsumableArray(target)) : prevHighlighted.filter(function(t) {
        return !target.includes(t);
      });
    });
  }, []);
  var handleRun = function handleRun2(renderedStoryId) {
    emit(_constants.EVENTS.REQUEST, renderedStoryId);
  };
  var handleClearHighlights = React.useCallback(function() {
    return setHighlighted([]);
  }, []);
  var handleSetTab = React.useCallback(function(index) {
    handleClearHighlights();
    setTab2(index);
  }, []);
  var handleReset = React.useCallback(function() {
    setTab2(0);
    setResults2(defaultResult);
  }, []);
  var emit = (0, _api.useChannel)((_useChannel = {}, _defineProperty(_useChannel, _coreEvents.STORY_RENDERED, handleRun), _defineProperty(_useChannel, _coreEvents.STORY_CHANGED, handleReset), _useChannel));
  React.useEffect(function() {
    emit(_constants.EVENTS.HIGHLIGHT, {
      elements: highlighted,
      color: colorsByType[tab]
    });
  }, [highlighted, tab]);
  React.useEffect(function() {
    if (active) {
      handleRun(storyId);
    } else {
      handleClearHighlights();
    }
  }, [active, handleClearHighlights, emit, storyId]);
  if (!active)
    return null;
  return /* @__PURE__ */ React.createElement(A11yContext.Provider, _extends({
    value: {
      results,
      setResults: setResults2,
      highlighted,
      toggleHighlight: handleToggleHighlight,
      clearHighlights: handleClearHighlights,
      tab,
      setTab: handleSetTab
    }
  }, props));
};
exports2.A11yContextProvider = A11yContextProvider;
var useA11yContext = function useA11yContext2() {
  return React.useContext(A11yContext);
};
exports2.useA11yContext = useA11yContext;
var __export02;
var __export12;
var __export22;
if (Object.isExtensible(module2.exports)) {
  __export02 = module2.exports["useA11yContext"];
  __export12 = module2.exports["A11yContextProvider"];
  __export22 = module2.exports["A11yContext"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/A11YPanel.js
var A11YPanel_exports = {};
__export(A11YPanel_exports, {
  A11YPanel: () => __export011,
  RuleType: () => __export15
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/Tabs.js
var Tabs_exports = {};
__export(Tabs_exports, {
  Tabs: () => __export04
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/HighlightToggle.js
var HighlightToggle_exports = {};
__export(HighlightToggle_exports, {
  default: () => HighlightToggle_default
});
init_define_process_env();
import * as $cjs$_storybook_theming2 from "@storybook/theming";
import * as $cjs$react2 from "react";

// empty:core-js/modules/es.array.map.js
var es_array_map_exports = {};
__export(es_array_map_exports, {
  default: () => es_array_map_default
});
init_define_process_env();
var es_array_map_default = {};

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/HighlightToggle.js
function $$cjs_default$$2(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module3 = { exports: {} };
var exports3 = module3.exports;
$$cjs_default$$2(es_symbol_exports);
$$cjs_default$$2(es_symbol_description_exports);
$$cjs_default$$2(es_object_to_string_exports);
$$cjs_default$$2(es_symbol_iterator_exports);
$$cjs_default$$2(es_string_iterator_exports);
$$cjs_default$$2(es_array_iterator_exports);
$$cjs_default$$2(web_dom_collections_iterator_exports);
$$cjs_default$$2(es_array_slice_exports);
$$cjs_default$$2(es_function_name_exports);
$$cjs_default$$2(es_array_from_exports);
Object.defineProperty(exports3, "__esModule", {
  value: true
});
exports3.default = void 0;
$$cjs_default$$2(es_array_filter_exports);
$$cjs_default$$2(es_array_includes_exports);
$$cjs_default$$2(es_string_includes_exports);
$$cjs_default$$2(es_array_map_exports);
var _react = _interopRequireDefault($$cjs_default$$2($cjs$react2));
var _theming2 = $$cjs_default$$2($cjs$_storybook_theming2);
var _A11yContext = $$cjs_default$$2(A11yContext_exports);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
var CheckBoxStates;
(function(CheckBoxStates2) {
  CheckBoxStates2[CheckBoxStates2["CHECKED"] = 0] = "CHECKED";
  CheckBoxStates2[CheckBoxStates2["UNCHECKED"] = 1] = "UNCHECKED";
  CheckBoxStates2[CheckBoxStates2["INDETERMINATE"] = 2] = "INDETERMINATE";
})(CheckBoxStates || (CheckBoxStates = {}));
var Checkbox = _theming2.styled.input(function(_ref) {
  var disabled = _ref.disabled;
  return {
    cursor: disabled ? "not-allowed" : "pointer"
  };
});
function areAllRequiredElementsHighlighted(elementsToHighlight, highlighted) {
  var highlightedCount = elementsToHighlight.filter(function(item) {
    return highlighted.includes(item.target[0]);
  }).length;
  return highlightedCount === 0 ? CheckBoxStates.UNCHECKED : highlightedCount === elementsToHighlight.length ? CheckBoxStates.CHECKED : CheckBoxStates.INDETERMINATE;
}
var HighlightToggle = function HighlightToggle2(_ref2) {
  var toggleId = _ref2.toggleId, _ref2$elementsToHighl = _ref2.elementsToHighlight, elementsToHighlight = _ref2$elementsToHighl === void 0 ? [] : _ref2$elementsToHighl;
  var _useA11yContext = (0, _A11yContext.useA11yContext)(), toggleHighlight2 = _useA11yContext.toggleHighlight, highlighted = _useA11yContext.highlighted;
  var checkBoxRef = _react.default.useRef(null);
  var _React$useState = _react.default.useState(areAllRequiredElementsHighlighted(elementsToHighlight, highlighted)), _React$useState2 = _slicedToArray2(_React$useState, 2), checkBoxState = _React$useState2[0], setChecked = _React$useState2[1];
  _react.default.useEffect(function() {
    var newState = areAllRequiredElementsHighlighted(elementsToHighlight, highlighted);
    if (checkBoxRef.current) {
      checkBoxRef.current.indeterminate = newState === CheckBoxStates.INDETERMINATE;
    }
    setChecked(newState);
  }, [elementsToHighlight, highlighted]);
  var handleToggle = _react.default.useCallback(function() {
    toggleHighlight2(elementsToHighlight.map(function(e) {
      return e.target[0];
    }), checkBoxState !== CheckBoxStates.CHECKED);
  }, [elementsToHighlight, checkBoxState, toggleHighlight2]);
  return /* @__PURE__ */ _react.default.createElement(Checkbox, {
    ref: checkBoxRef,
    id: toggleId,
    type: "checkbox",
    "aria-label": "Highlight result",
    disabled: !elementsToHighlight.length,
    onChange: handleToggle,
    checked: checkBoxState === CheckBoxStates.CHECKED
  });
};
var _default = HighlightToggle;
exports3.default = _default;
var HighlightToggle_default = module3.exports != null && typeof module3.exports === "object" && "default" in module3.exports ? module3.exports.default : module3.exports;

// node_modules/react-sizeme/dist/react-sizeme.js
var react_sizeme_exports = {};
__export(react_sizeme_exports, {
  default: () => react_sizeme_default
});
init_define_process_env();

// node_modules/shallowequal/index.js
var shallowequal_exports = {};
__export(shallowequal_exports, {
  default: () => shallowequal_default
});
init_define_process_env();
var module4 = { exports: {} };
var exports4 = module4.exports;
module4.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};
var shallowequal_default = module4.exports;

// node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector_exports = {};
__export(element_resize_detector_exports, {
  default: () => element_resize_detector_default
});
init_define_process_env();

// node_modules/element-resize-detector/src/detection-strategy/scroll.js
var scroll_exports = {};
__export(scroll_exports, {
  default: () => scroll_default
});
init_define_process_env();

// node_modules/element-resize-detector/src/collection-utils.js
var collection_utils_exports = {};
__export(collection_utils_exports, {
  default: () => collection_utils_default
});
init_define_process_env();
var module5 = { exports: {} };
var exports5 = module5.exports;
var utils = module5.exports = {};
utils.forEach = function(collection, callback) {
  for (var i = 0; i < collection.length; i++) {
    var result = callback(collection[i]);
    if (result) {
      return result;
    }
  }
};
var collection_utils_default = module5.exports;

// node_modules/element-resize-detector/src/detection-strategy/scroll.js
function $$cjs_default$$3(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module6 = { exports: {} };
var exports6 = module6.exports;
var forEach = $$cjs_default$$3(collection_utils_exports).forEach;
module6.exports = function(options) {
  options = options || {};
  var reporter = options.reporter;
  var batchProcessor = options.batchProcessor;
  var getState2 = options.stateHandler.getState;
  var hasState = options.stateHandler.hasState;
  var idHandler = options.idHandler;
  if (!batchProcessor) {
    throw new Error("Missing required dependency: batchProcessor");
  }
  if (!reporter) {
    throw new Error("Missing required dependency: reporter.");
  }
  var scrollbarSizes = getScrollbarSizes();
  var styleId = "erd_scroll_detection_scrollbar_style";
  var detectionContainerClass = "erd_scroll_detection_container";
  function initDocument(targetDocument) {
    injectScrollStyle(targetDocument, styleId, detectionContainerClass);
  }
  initDocument(window.document);
  function buildCssTextString(rules) {
    var seperator = options.important ? " !important; " : "; ";
    return (rules.join(seperator) + seperator).trim();
  }
  function getScrollbarSizes() {
    var width = 500;
    var height = 500;
    var child = document.createElement("div");
    child.style.cssText = buildCssTextString(["position: absolute", "width: " + width * 2 + "px", "height: " + height * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var container = document.createElement("div");
    container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width * 3 + "px", "left: " + -height * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    container.appendChild(child);
    document.body.insertBefore(container, document.body.firstChild);
    var widthSize = width - container.clientWidth;
    var heightSize = height - container.clientHeight;
    document.body.removeChild(container);
    return {
      width: widthSize,
      height: heightSize
    };
  }
  function injectScrollStyle(targetDocument, styleId2, containerClass) {
    function injectStyle(style2, method) {
      method = method || function(element) {
        targetDocument.head.appendChild(element);
      };
      var styleElement = targetDocument.createElement("style");
      styleElement.innerHTML = style2;
      styleElement.id = styleId2;
      method(styleElement);
      return styleElement;
    }
    if (!targetDocument.getElementById(styleId2)) {
      var containerAnimationClass = containerClass + "_animation";
      var containerAnimationActiveClass = containerClass + "_animation_active";
      var style = "/* Created by the element-resize-detector library. */\n";
      style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
      style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
      style += "@-webkit-keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
      style += "@keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
      injectStyle(style);
    }
  }
  function addAnimationClass(element) {
    element.className += " " + detectionContainerClass + "_animation_active";
  }
  function addEvent(el, name, cb) {
    if (el.addEventListener) {
      el.addEventListener(name, cb);
    } else if (el.attachEvent) {
      el.attachEvent("on" + name, cb);
    } else {
      return reporter.error("[scroll] Don't know how to add event listeners.");
    }
  }
  function removeEvent(el, name, cb) {
    if (el.removeEventListener) {
      el.removeEventListener(name, cb);
    } else if (el.detachEvent) {
      el.detachEvent("on" + name, cb);
    } else {
      return reporter.error("[scroll] Don't know how to remove event listeners.");
    }
  }
  function getExpandElement(element) {
    return getState2(element).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function getShrinkElement(element) {
    return getState2(element).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function addListener(element, listener) {
    var listeners = getState2(element).listeners;
    if (!listeners.push) {
      throw new Error("Cannot add listener to an element that is not detectable.");
    }
    getState2(element).listeners.push(listener);
  }
  function makeDetectable(options2, element, callback) {
    if (!callback) {
      callback = element;
      element = options2;
      options2 = null;
    }
    options2 = options2 || {};
    function debug() {
      if (options2.debug) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(idHandler.get(element), "Scroll: ");
        if (reporter.log.apply) {
          reporter.log.apply(null, args);
        } else {
          for (var i = 0; i < args.length; i++) {
            reporter.log(args[i]);
          }
        }
      }
    }
    function isDetached(element2) {
      function isInDocument(element3) {
        var isInShadowRoot = element3.getRootNode && element3.getRootNode().contains(element3);
        return element3 === element3.ownerDocument.body || element3.ownerDocument.body.contains(element3) || isInShadowRoot;
      }
      if (!isInDocument(element2)) {
        return true;
      }
      if (window.getComputedStyle(element2) === null) {
        return true;
      }
      return false;
    }
    function isUnrendered(element2) {
      var container = getState2(element2).container.childNodes[0];
      var style = window.getComputedStyle(container);
      return !style.width || style.width.indexOf("px") === -1;
    }
    function getStyle() {
      var elementStyle = window.getComputedStyle(element);
      var style = {};
      style.position = elementStyle.position;
      style.width = element.offsetWidth;
      style.height = element.offsetHeight;
      style.top = elementStyle.top;
      style.right = elementStyle.right;
      style.bottom = elementStyle.bottom;
      style.left = elementStyle.left;
      style.widthCSS = elementStyle.width;
      style.heightCSS = elementStyle.height;
      return style;
    }
    function storeStartSize() {
      var style = getStyle();
      getState2(element).startSize = {
        width: style.width,
        height: style.height
      };
      debug("Element start size", getState2(element).startSize);
    }
    function initListeners() {
      getState2(element).listeners = [];
    }
    function storeStyle() {
      debug("storeStyle invoked.");
      if (!getState2(element)) {
        debug("Aborting because element has been uninstalled");
        return;
      }
      var style = getStyle();
      getState2(element).style = style;
    }
    function storeCurrentSize(element2, width, height) {
      getState2(element2).lastWidth = width;
      getState2(element2).lastHeight = height;
    }
    function getExpandChildElement(element2) {
      return getExpandElement(element2).childNodes[0];
    }
    function getWidthOffset() {
      return 2 * scrollbarSizes.width + 1;
    }
    function getHeightOffset() {
      return 2 * scrollbarSizes.height + 1;
    }
    function getExpandWidth(width) {
      return width + 10 + getWidthOffset();
    }
    function getExpandHeight(height) {
      return height + 10 + getHeightOffset();
    }
    function getShrinkWidth(width) {
      return width * 2 + getWidthOffset();
    }
    function getShrinkHeight(height) {
      return height * 2 + getHeightOffset();
    }
    function positionScrollbars(element2, width, height) {
      var expand = getExpandElement(element2);
      var shrink = getShrinkElement(element2);
      var expandWidth = getExpandWidth(width);
      var expandHeight = getExpandHeight(height);
      var shrinkWidth = getShrinkWidth(width);
      var shrinkHeight = getShrinkHeight(height);
      expand.scrollLeft = expandWidth;
      expand.scrollTop = expandHeight;
      shrink.scrollLeft = shrinkWidth;
      shrink.scrollTop = shrinkHeight;
    }
    function injectContainerElement() {
      var container = getState2(element).container;
      if (!container) {
        container = document.createElement("div");
        container.className = detectionContainerClass;
        container.style.cssText = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
        getState2(element).container = container;
        addAnimationClass(container);
        element.appendChild(container);
        var onAnimationStart = function() {
          getState2(element).onRendered && getState2(element).onRendered();
        };
        addEvent(container, "animationstart", onAnimationStart);
        getState2(element).onAnimationStart = onAnimationStart;
      }
      return container;
    }
    function injectScrollElements() {
      function alterPositionStyles() {
        var style = getState2(element).style;
        if (style.position === "static") {
          element.style.setProperty("position", "relative", options2.important ? "important" : "");
          var removeRelativeStyles = function(reporter2, element2, style2, property) {
            function getNumericalValue(value2) {
              return value2.replace(/[^-\d\.]/g, "");
            }
            var value = style2[property];
            if (value !== "auto" && getNumericalValue(value) !== "0") {
              reporter2.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element2);
              element2.style[property] = 0;
            }
          };
          removeRelativeStyles(reporter, element, style, "top");
          removeRelativeStyles(reporter, element, style, "right");
          removeRelativeStyles(reporter, element, style, "bottom");
          removeRelativeStyles(reporter, element, style, "left");
        }
      }
      function getLeftTopBottomRightCssText(left, top, bottom, right) {
        left = !left ? "0" : left + "px";
        top = !top ? "0" : top + "px";
        bottom = !bottom ? "0" : bottom + "px";
        right = !right ? "0" : right + "px";
        return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom];
      }
      debug("Injecting elements");
      if (!getState2(element)) {
        debug("Aborting because element has been uninstalled");
        return;
      }
      alterPositionStyles();
      var rootContainer = getState2(element).container;
      if (!rootContainer) {
        rootContainer = injectContainerElement();
      }
      var scrollbarWidth = scrollbarSizes.width;
      var scrollbarHeight = scrollbarSizes.height;
      var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
      var containerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
      var expandStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
      var shrinkStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
      var expandChildStyle = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
      var shrinkChildStyle = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);
      var containerContainer = document.createElement("div");
      var container = document.createElement("div");
      var expand = document.createElement("div");
      var expandChild = document.createElement("div");
      var shrink = document.createElement("div");
      var shrinkChild = document.createElement("div");
      containerContainer.dir = "ltr";
      containerContainer.style.cssText = containerContainerStyle;
      containerContainer.className = detectionContainerClass;
      container.className = detectionContainerClass;
      container.style.cssText = containerStyle;
      expand.style.cssText = expandStyle;
      expandChild.style.cssText = expandChildStyle;
      shrink.style.cssText = shrinkStyle;
      shrinkChild.style.cssText = shrinkChildStyle;
      expand.appendChild(expandChild);
      shrink.appendChild(shrinkChild);
      container.appendChild(expand);
      container.appendChild(shrink);
      containerContainer.appendChild(container);
      rootContainer.appendChild(containerContainer);
      function onExpandScroll() {
        getState2(element).onExpand && getState2(element).onExpand();
      }
      function onShrinkScroll() {
        getState2(element).onShrink && getState2(element).onShrink();
      }
      addEvent(expand, "scroll", onExpandScroll);
      addEvent(shrink, "scroll", onShrinkScroll);
      getState2(element).onExpandScroll = onExpandScroll;
      getState2(element).onShrinkScroll = onShrinkScroll;
    }
    function registerListenersAndPositionElements() {
      function updateChildSizes(element2, width, height) {
        var expandChild = getExpandChildElement(element2);
        var expandWidth = getExpandWidth(width);
        var expandHeight = getExpandHeight(height);
        expandChild.style.setProperty("width", expandWidth + "px", options2.important ? "important" : "");
        expandChild.style.setProperty("height", expandHeight + "px", options2.important ? "important" : "");
      }
      function updateDetectorElements(done) {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var sizeChanged = width !== getState2(element).lastWidth || height !== getState2(element).lastHeight;
        debug("Storing current size", width, height);
        storeCurrentSize(element, width, height);
        batchProcessor.add(0, function performUpdateChildSizes() {
          if (!sizeChanged) {
            return;
          }
          if (!getState2(element)) {
            debug("Aborting because element has been uninstalled");
            return;
          }
          if (!areElementsInjected()) {
            debug("Aborting because element container has not been initialized");
            return;
          }
          if (options2.debug) {
            var w = element.offsetWidth;
            var h = element.offsetHeight;
            if (w !== width || h !== height) {
              reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
            }
          }
          updateChildSizes(element, width, height);
        });
        batchProcessor.add(1, function updateScrollbars() {
          if (!getState2(element)) {
            debug("Aborting because element has been uninstalled");
            return;
          }
          if (!areElementsInjected()) {
            debug("Aborting because element container has not been initialized");
            return;
          }
          positionScrollbars(element, width, height);
        });
        if (sizeChanged && done) {
          batchProcessor.add(2, function() {
            if (!getState2(element)) {
              debug("Aborting because element has been uninstalled");
              return;
            }
            if (!areElementsInjected()) {
              debug("Aborting because element container has not been initialized");
              return;
            }
            done();
          });
        }
      }
      function areElementsInjected() {
        return !!getState2(element).container;
      }
      function notifyListenersIfNeeded() {
        function isFirstNotify() {
          return getState2(element).lastNotifiedWidth === void 0;
        }
        debug("notifyListenersIfNeeded invoked");
        var state = getState2(element);
        if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
          return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        }
        if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
          return debug("Not notifying: Size already notified");
        }
        debug("Current size not notified, notifying...");
        state.lastNotifiedWidth = state.lastWidth;
        state.lastNotifiedHeight = state.lastHeight;
        forEach(getState2(element).listeners, function(listener) {
          listener(element);
        });
      }
      function handleRender() {
        debug("startanimation triggered.");
        if (isUnrendered(element)) {
          debug("Ignoring since element is still unrendered...");
          return;
        }
        debug("Element rendered.");
        var expand = getExpandElement(element);
        var shrink = getShrinkElement(element);
        if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
          debug("Scrollbars out of sync. Updating detector elements...");
          updateDetectorElements(notifyListenersIfNeeded);
        }
      }
      function handleScroll() {
        debug("Scroll detected.");
        if (isUnrendered(element)) {
          debug("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        updateDetectorElements(notifyListenersIfNeeded);
      }
      debug("registerListenersAndPositionElements invoked.");
      if (!getState2(element)) {
        debug("Aborting because element has been uninstalled");
        return;
      }
      getState2(element).onRendered = handleRender;
      getState2(element).onExpand = handleScroll;
      getState2(element).onShrink = handleScroll;
      var style = getState2(element).style;
      updateChildSizes(element, style.width, style.height);
    }
    function finalizeDomMutation() {
      debug("finalizeDomMutation invoked.");
      if (!getState2(element)) {
        debug("Aborting because element has been uninstalled");
        return;
      }
      var style = getState2(element).style;
      storeCurrentSize(element, style.width, style.height);
      positionScrollbars(element, style.width, style.height);
    }
    function ready() {
      callback(element);
    }
    function install() {
      debug("Installing...");
      initListeners();
      storeStartSize();
      batchProcessor.add(0, storeStyle);
      batchProcessor.add(1, injectScrollElements);
      batchProcessor.add(2, registerListenersAndPositionElements);
      batchProcessor.add(3, finalizeDomMutation);
      batchProcessor.add(4, ready);
    }
    debug("Making detectable...");
    if (isDetached(element)) {
      debug("Element is detached");
      injectContainerElement();
      debug("Waiting until element is attached...");
      getState2(element).onRendered = function() {
        debug("Element is now attached");
        install();
      };
    } else {
      install();
    }
  }
  function uninstall(element) {
    var state = getState2(element);
    if (!state) {
      return;
    }
    state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
    state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
    state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);
    state.container && element.removeChild(state.container);
  }
  return {
    makeDetectable,
    addListener,
    uninstall,
    initDocument
  };
};
var scroll_default = module6.exports;

// node_modules/element-resize-detector/src/detection-strategy/object.js
var object_exports = {};
__export(object_exports, {
  default: () => object_default
});
init_define_process_env();

// node_modules/element-resize-detector/src/browser-detector.js
var browser_detector_exports = {};
__export(browser_detector_exports, {
  default: () => browser_detector_default
});
init_define_process_env();
var module7 = { exports: {} };
var exports7 = module7.exports;
var detector = module7.exports = {};
detector.isIE = function(version) {
  function isAnyIeVersion() {
    var agent = navigator.userAgent.toLowerCase();
    return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
  }
  if (!isAnyIeVersion()) {
    return false;
  }
  if (!version) {
    return true;
  }
  var ieVersion = function() {
    var undef, v = 3, div = document.createElement("div"), all = div.getElementsByTagName("i");
    do {
      div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->";
    } while (all[0]);
    return v > 4 ? v : undef;
  }();
  return version === ieVersion;
};
detector.isLegacyOpera = function() {
  return !!window.opera;
};
var browser_detector_default = module7.exports;

// node_modules/element-resize-detector/src/detection-strategy/object.js
function $$cjs_default$$4(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module8 = { exports: {} };
var exports8 = module8.exports;
var browserDetector = $$cjs_default$$4(browser_detector_exports);
module8.exports = function(options) {
  options = options || {};
  var reporter = options.reporter;
  var batchProcessor = options.batchProcessor;
  var getState2 = options.stateHandler.getState;
  if (!reporter) {
    throw new Error("Missing required dependency: reporter.");
  }
  function addListener(element, listener) {
    function listenerProxy() {
      listener(element);
    }
    if (browserDetector.isIE(8)) {
      getState2(element).object = {
        proxy: listenerProxy
      };
      element.attachEvent("onresize", listenerProxy);
    } else {
      var object = getObject(element);
      if (!object) {
        throw new Error("Element is not detectable by this strategy.");
      }
      object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
    }
  }
  function buildCssTextString(rules) {
    var seperator = options.important ? " !important; " : "; ";
    return (rules.join(seperator) + seperator).trim();
  }
  function makeDetectable(options2, element, callback) {
    if (!callback) {
      callback = element;
      element = options2;
      options2 = null;
    }
    options2 = options2 || {};
    var debug = options2.debug;
    function injectObject(element2, callback2) {
      var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]);
      var positionCheckPerformed = false;
      var style = window.getComputedStyle(element2);
      var width = element2.offsetWidth;
      var height = element2.offsetHeight;
      getState2(element2).startSize = {
        width,
        height
      };
      function mutateDom() {
        function alterPositionStyles() {
          if (style.position === "static") {
            element2.style.setProperty("position", "relative", options2.important ? "important" : "");
            var removeRelativeStyles = function(reporter2, element3, style2, property) {
              function getNumericalValue(value2) {
                return value2.replace(/[^-\d\.]/g, "");
              }
              var value = style2[property];
              if (value !== "auto" && getNumericalValue(value) !== "0") {
                reporter2.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element3);
                element3.style.setProperty(property, "0", options2.important ? "important" : "");
              }
            };
            removeRelativeStyles(reporter, element2, style, "top");
            removeRelativeStyles(reporter, element2, style, "right");
            removeRelativeStyles(reporter, element2, style, "bottom");
            removeRelativeStyles(reporter, element2, style, "left");
          }
        }
        function onObjectLoad() {
          if (!positionCheckPerformed) {
            alterPositionStyles();
          }
          function getDocument(element3, callback3) {
            if (!element3.contentDocument) {
              var state = getState2(element3);
              if (state.checkForObjectDocumentTimeoutId) {
                window.clearTimeout(state.checkForObjectDocumentTimeoutId);
              }
              state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                state.checkForObjectDocumentTimeoutId = 0;
                getDocument(element3, callback3);
              }, 100);
              return;
            }
            callback3(element3.contentDocument);
          }
          var objectElement = this;
          getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
            callback2(element2);
          });
        }
        if (style.position !== "") {
          alterPositionStyles(style);
          positionCheckPerformed = true;
        }
        var object = document.createElement("object");
        object.style.cssText = OBJECT_STYLE;
        object.tabIndex = -1;
        object.type = "text/html";
        object.setAttribute("aria-hidden", "true");
        object.onload = onObjectLoad;
        if (!browserDetector.isIE()) {
          object.data = "about:blank";
        }
        if (!getState2(element2)) {
          return;
        }
        element2.appendChild(object);
        getState2(element2).object = object;
        if (browserDetector.isIE()) {
          object.data = "about:blank";
        }
      }
      if (batchProcessor) {
        batchProcessor.add(mutateDom);
      } else {
        mutateDom();
      }
    }
    if (browserDetector.isIE(8)) {
      callback(element);
    } else {
      injectObject(element, callback);
    }
  }
  function getObject(element) {
    return getState2(element).object;
  }
  function uninstall(element) {
    if (!getState2(element)) {
      return;
    }
    var object = getObject(element);
    if (!object) {
      return;
    }
    if (browserDetector.isIE(8)) {
      element.detachEvent("onresize", object.proxy);
    } else {
      element.removeChild(object);
    }
    if (getState2(element).checkForObjectDocumentTimeoutId) {
      window.clearTimeout(getState2(element).checkForObjectDocumentTimeoutId);
    }
    delete getState2(element).object;
  }
  return {
    makeDetectable,
    addListener,
    uninstall
  };
};
var object_default = module8.exports;

// node_modules/element-resize-detector/src/state-handler.js
var state_handler_exports = {};
__export(state_handler_exports, {
  cleanState: () => __export23,
  default: () => state_handler_default,
  getState: () => __export13,
  initState: () => __export03
});
init_define_process_env();
var module9 = { exports: {} };
var exports9 = module9.exports;
var prop = "_erd";
function initState(element) {
  element[prop] = {};
  return getState(element);
}
function getState(element) {
  return element[prop];
}
function cleanState(element) {
  delete element[prop];
}
module9.exports = {
  initState,
  getState,
  cleanState
};
var __export03;
var __export13;
var __export23;
if (Object.isExtensible(module9.exports)) {
  __export03 = module9.exports["initState"];
  __export13 = module9.exports["getState"];
  __export23 = module9.exports["cleanState"];
}
var state_handler_default = module9.exports;

// node_modules/batch-processor/src/batch-processor.js
var batch_processor_exports = {};
__export(batch_processor_exports, {
  default: () => batch_processor_default
});
init_define_process_env();

// node_modules/batch-processor/src/utils.js
var utils_exports = {};
__export(utils_exports, {
  default: () => utils_default
});
init_define_process_env();
var module10 = { exports: {} };
var exports10 = module10.exports;
var utils2 = module10.exports = {};
utils2.getOption = getOption;
function getOption(options, name, defaultValue) {
  var value = options[name];
  if ((value === void 0 || value === null) && defaultValue !== void 0) {
    return defaultValue;
  }
  return value;
}
var utils_default = module10.exports;

// node_modules/batch-processor/src/batch-processor.js
function $$cjs_default$$5(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module11 = { exports: {} };
var exports11 = module11.exports;
var utils3 = $$cjs_default$$5(utils_exports);
module11.exports = function batchProcessorMaker(options) {
  options = options || {};
  var reporter = options.reporter;
  var asyncProcess = utils3.getOption(options, "async", true);
  var autoProcess = utils3.getOption(options, "auto", true);
  if (autoProcess && !asyncProcess) {
    reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
    asyncProcess = true;
  }
  var batch = Batch();
  var asyncFrameHandler;
  var isProcessing = false;
  function addFunction(level, fn) {
    if (!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
      processBatchAsync();
    }
    batch.add(level, fn);
  }
  function processBatch() {
    isProcessing = true;
    while (batch.size()) {
      var processingBatch = batch;
      batch = Batch();
      processingBatch.process();
    }
    isProcessing = false;
  }
  function forceProcessBatch(localAsyncProcess) {
    if (isProcessing) {
      return;
    }
    if (localAsyncProcess === void 0) {
      localAsyncProcess = asyncProcess;
    }
    if (asyncFrameHandler) {
      cancelFrame(asyncFrameHandler);
      asyncFrameHandler = null;
    }
    if (localAsyncProcess) {
      processBatchAsync();
    } else {
      processBatch();
    }
  }
  function processBatchAsync() {
    asyncFrameHandler = requestFrame(processBatch);
  }
  function clearBatch() {
    batch = {};
    batchSize = 0;
    topLevel = 0;
    bottomLevel = 0;
  }
  function cancelFrame(listener) {
    var cancel = clearTimeout;
    return cancel(listener);
  }
  function requestFrame(callback) {
    var raf = function(fn) {
      return setTimeout(fn, 0);
    };
    return raf(callback);
  }
  return {
    add: addFunction,
    force: forceProcessBatch
  };
};
function Batch() {
  var batch = {};
  var size2 = 0;
  var topLevel2 = 0;
  var bottomLevel2 = 0;
  function add(level, fn) {
    if (!fn) {
      fn = level;
      level = 0;
    }
    if (level > topLevel2) {
      topLevel2 = level;
    } else if (level < bottomLevel2) {
      bottomLevel2 = level;
    }
    if (!batch[level]) {
      batch[level] = [];
    }
    batch[level].push(fn);
    size2++;
  }
  function process2() {
    for (var level = bottomLevel2; level <= topLevel2; level++) {
      var fns = batch[level];
      for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];
        fn();
      }
    }
  }
  function getSize() {
    return size2;
  }
  return {
    add,
    process: process2,
    size: getSize
  };
}
var batch_processor_default = module11.exports;

// node_modules/element-resize-detector/src/reporter.js
var reporter_exports = {};
__export(reporter_exports, {
  default: () => reporter_default
});
init_define_process_env();
var module12 = { exports: {} };
var exports12 = module12.exports;
module12.exports = function(quiet) {
  function noop() {
  }
  var reporter = {
    log: noop,
    warn: noop,
    error: noop
  };
  if (!quiet && window.console) {
    var attachFunction = function(reporter2, name) {
      reporter2[name] = function reporterProxy() {
        var f = console[name];
        if (f.apply) {
          f.apply(console, arguments);
        } else {
          for (var i = 0; i < arguments.length; i++) {
            f(arguments[i]);
          }
        }
      };
    };
    attachFunction(reporter, "log");
    attachFunction(reporter, "warn");
    attachFunction(reporter, "error");
  }
  return reporter;
};
var reporter_default = module12.exports;

// node_modules/element-resize-detector/src/id-handler.js
var id_handler_exports = {};
__export(id_handler_exports, {
  default: () => id_handler_default
});
init_define_process_env();
var module13 = { exports: {} };
var exports13 = module13.exports;
module13.exports = function(options) {
  var idGenerator = options.idGenerator;
  var getState2 = options.stateHandler.getState;
  function getId(element) {
    var state = getState2(element);
    if (state && state.id !== void 0) {
      return state.id;
    }
    return null;
  }
  function setId(element) {
    var state = getState2(element);
    if (!state) {
      throw new Error("setId required the element to have a resize detection state.");
    }
    var id = idGenerator.generate();
    state.id = id;
    return id;
  }
  return {
    get: getId,
    set: setId
  };
};
var id_handler_default = module13.exports;

// node_modules/element-resize-detector/src/id-generator.js
var id_generator_exports = {};
__export(id_generator_exports, {
  default: () => id_generator_default
});
init_define_process_env();
var module14 = { exports: {} };
var exports14 = module14.exports;
module14.exports = function() {
  var idCount = 1;
  function generate() {
    return idCount++;
  }
  return {
    generate
  };
};
var id_generator_default = module14.exports;

// node_modules/element-resize-detector/src/listener-handler.js
var listener_handler_exports = {};
__export(listener_handler_exports, {
  default: () => listener_handler_default
});
init_define_process_env();
var module15 = { exports: {} };
var exports15 = module15.exports;
module15.exports = function(idHandler) {
  var eventListeners = {};
  function getListeners(element) {
    var id = idHandler.get(element);
    if (id === void 0) {
      return [];
    }
    return eventListeners[id] || [];
  }
  function addListener(element, listener) {
    var id = idHandler.get(element);
    if (!eventListeners[id]) {
      eventListeners[id] = [];
    }
    eventListeners[id].push(listener);
  }
  function removeListener(element, listener) {
    var listeners = getListeners(element);
    for (var i = 0, len = listeners.length; i < len; ++i) {
      if (listeners[i] === listener) {
        listeners.splice(i, 1);
        break;
      }
    }
  }
  function removeAllListeners(element) {
    var listeners = getListeners(element);
    if (!listeners) {
      return;
    }
    listeners.length = 0;
  }
  return {
    get: getListeners,
    add: addListener,
    removeListener,
    removeAllListeners
  };
};
var listener_handler_default = module15.exports;

// node_modules/element-resize-detector/src/element-utils.js
var element_utils_exports = {};
__export(element_utils_exports, {
  default: () => element_utils_default
});
init_define_process_env();
var module16 = { exports: {} };
var exports16 = module16.exports;
module16.exports = function(options) {
  var getState2 = options.stateHandler.getState;
  function isDetectable(element) {
    var state = getState2(element);
    return state && !!state.isDetectable;
  }
  function markAsDetectable(element) {
    getState2(element).isDetectable = true;
  }
  function isBusy(element) {
    return !!getState2(element).busy;
  }
  function markBusy(element, busy) {
    getState2(element).busy = !!busy;
  }
  return {
    isDetectable,
    markAsDetectable,
    isBusy,
    markBusy
  };
};
var element_utils_default = module16.exports;

// node_modules/element-resize-detector/src/element-resize-detector.js
function $$cjs_default$$6(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module17 = { exports: {} };
var exports17 = module17.exports;
var forEach2 = $$cjs_default$$6(collection_utils_exports).forEach;
var elementUtilsMaker = $$cjs_default$$6(element_utils_exports);
var listenerHandlerMaker = $$cjs_default$$6(listener_handler_exports);
var idGeneratorMaker = $$cjs_default$$6(id_generator_exports);
var idHandlerMaker = $$cjs_default$$6(id_handler_exports);
var reporterMaker = $$cjs_default$$6(reporter_exports);
var browserDetector2 = $$cjs_default$$6(browser_detector_exports);
var batchProcessorMaker2 = $$cjs_default$$6(batch_processor_exports);
var stateHandler = $$cjs_default$$6(state_handler_exports);
var objectStrategyMaker = $$cjs_default$$6(object_exports);
var scrollStrategyMaker = $$cjs_default$$6(scroll_exports);
function isCollection(obj) {
  return Array.isArray(obj) || obj.length !== void 0;
}
function toArray(collection) {
  if (!Array.isArray(collection)) {
    var array = [];
    forEach2(collection, function(obj) {
      array.push(obj);
    });
    return array;
  } else {
    return collection;
  }
}
function isElement(obj) {
  return obj && obj.nodeType === 1;
}
module17.exports = function(options) {
  options = options || {};
  var idHandler;
  if (options.idHandler) {
    idHandler = {
      get: function(element) {
        return options.idHandler.get(element, true);
      },
      set: options.idHandler.set
    };
  } else {
    var idGenerator = idGeneratorMaker();
    var defaultIdHandler = idHandlerMaker({
      idGenerator,
      stateHandler
    });
    idHandler = defaultIdHandler;
  }
  var reporter = options.reporter;
  if (!reporter) {
    var quiet = reporter === false;
    reporter = reporterMaker(quiet);
  }
  var batchProcessor = getOption2(options, "batchProcessor", batchProcessorMaker2({ reporter }));
  var globalOptions = {};
  globalOptions.callOnAdd = !!getOption2(options, "callOnAdd", true);
  globalOptions.debug = !!getOption2(options, "debug", false);
  var eventListenerHandler = listenerHandlerMaker(idHandler);
  var elementUtils = elementUtilsMaker({
    stateHandler
  });
  var detectionStrategy;
  var desiredStrategy = getOption2(options, "strategy", "object");
  var importantCssRules = getOption2(options, "important", false);
  var strategyOptions = {
    reporter,
    batchProcessor,
    stateHandler,
    idHandler,
    important: importantCssRules
  };
  if (desiredStrategy === "scroll") {
    if (browserDetector2.isLegacyOpera()) {
      reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
      desiredStrategy = "object";
    } else if (browserDetector2.isIE(9)) {
      reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
      desiredStrategy = "object";
    }
  }
  if (desiredStrategy === "scroll") {
    detectionStrategy = scrollStrategyMaker(strategyOptions);
  } else if (desiredStrategy === "object") {
    detectionStrategy = objectStrategyMaker(strategyOptions);
  } else {
    throw new Error("Invalid strategy name: " + desiredStrategy);
  }
  var onReadyCallbacks = {};
  function listenTo(options2, elements, listener) {
    function onResizeCallback(element) {
      var listeners = eventListenerHandler.get(element);
      forEach2(listeners, function callListenerProxy(listener2) {
        listener2(element);
      });
    }
    function addListener(callOnAdd2, element, listener2) {
      eventListenerHandler.add(element, listener2);
      if (callOnAdd2) {
        listener2(element);
      }
    }
    if (!listener) {
      listener = elements;
      elements = options2;
      options2 = {};
    }
    if (!elements) {
      throw new Error("At least one element required.");
    }
    if (!listener) {
      throw new Error("Listener required.");
    }
    if (isElement(elements)) {
      elements = [elements];
    } else if (isCollection(elements)) {
      elements = toArray(elements);
    } else {
      return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    }
    var elementsReady = 0;
    var callOnAdd = getOption2(options2, "callOnAdd", globalOptions.callOnAdd);
    var onReadyCallback = getOption2(options2, "onReady", function noop() {
    });
    var debug = getOption2(options2, "debug", globalOptions.debug);
    forEach2(elements, function attachListenerToElement(element) {
      if (!stateHandler.getState(element)) {
        stateHandler.initState(element);
        idHandler.set(element);
      }
      var id = idHandler.get(element);
      debug && reporter.log("Attaching listener to element", id, element);
      if (!elementUtils.isDetectable(element)) {
        debug && reporter.log(id, "Not detectable.");
        if (elementUtils.isBusy(element)) {
          debug && reporter.log(id, "System busy making it detectable");
          addListener(callOnAdd, element, listener);
          onReadyCallbacks[id] = onReadyCallbacks[id] || [];
          onReadyCallbacks[id].push(function onReady() {
            elementsReady++;
            if (elementsReady === elements.length) {
              onReadyCallback();
            }
          });
          return;
        }
        debug && reporter.log(id, "Making detectable...");
        elementUtils.markBusy(element, true);
        return detectionStrategy.makeDetectable({ debug, important: importantCssRules }, element, function onElementDetectable(element2) {
          debug && reporter.log(id, "onElementDetectable");
          if (stateHandler.getState(element2)) {
            elementUtils.markAsDetectable(element2);
            elementUtils.markBusy(element2, false);
            detectionStrategy.addListener(element2, onResizeCallback);
            addListener(callOnAdd, element2, listener);
            var state = stateHandler.getState(element2);
            if (state && state.startSize) {
              var width = element2.offsetWidth;
              var height = element2.offsetHeight;
              if (state.startSize.width !== width || state.startSize.height !== height) {
                onResizeCallback(element2);
              }
            }
            if (onReadyCallbacks[id]) {
              forEach2(onReadyCallbacks[id], function(callback) {
                callback();
              });
            }
          } else {
            debug && reporter.log(id, "Element uninstalled before being detectable.");
          }
          delete onReadyCallbacks[id];
          elementsReady++;
          if (elementsReady === elements.length) {
            onReadyCallback();
          }
        });
      }
      debug && reporter.log(id, "Already detecable, adding listener.");
      addListener(callOnAdd, element, listener);
      elementsReady++;
    });
    if (elementsReady === elements.length) {
      onReadyCallback();
    }
  }
  function uninstall(elements) {
    if (!elements) {
      return reporter.error("At least one element is required.");
    }
    if (isElement(elements)) {
      elements = [elements];
    } else if (isCollection(elements)) {
      elements = toArray(elements);
    } else {
      return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    }
    forEach2(elements, function(element) {
      eventListenerHandler.removeAllListeners(element);
      detectionStrategy.uninstall(element);
      stateHandler.cleanState(element);
    });
  }
  function initDocument(targetDocument) {
    detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
  }
  return {
    listenTo,
    removeListener: eventListenerHandler.removeListener,
    removeAllListeners: eventListenerHandler.removeAllListeners,
    uninstall,
    initDocument
  };
};
function getOption2(options, name, defaultValue) {
  var value = options[name];
  if ((value === void 0 || value === null) && defaultValue !== void 0) {
    return defaultValue;
  }
  return value;
}
var element_resize_detector_default = module17.exports;

// node_modules/throttle-debounce/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  debounce: () => debounce,
  throttle: () => throttle
});
init_define_process_env();
function throttle(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper2() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self2 = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec2() {
      lastExec = Date.now();
      callback.apply(self2, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec2();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      exec2();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec2, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper2.cancel = cancel;
  return wrapper2;
}
function debounce(delay, atBegin, callback) {
  return callback === void 0 ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

// node_modules/invariant/browser.js
var browser_exports = {};
__export(browser_exports, {
  default: () => browser_default
});
init_define_process_env();
var module18 = { exports: {} };
var exports18 = module18.exports;
var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
module18.exports = invariant;
var browser_default = module18.exports;

// node_modules/react-sizeme/dist/react-sizeme.js
import * as $cjs$react_dom from "react-dom";
import * as $cjs$react3 from "react";
function $$cjs_default$$7(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module19 = { exports: {} };
var exports19 = module19.exports;
var React2 = $$cjs_default$$7($cjs$react3);
var ReactDOM = $$cjs_default$$7($cjs$react_dom);
var invariant2 = $$cjs_default$$7(browser_exports);
var throttleDebounce = $$cjs_default$$7(esm_exports);
var createResizeDetector = $$cjs_default$$7(element_resize_detector_exports);
var isShallowEqual = $$cjs_default$$7(shallowequal_exports);
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React2);
var ReactDOM__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOM);
var invariant__default = /* @__PURE__ */ _interopDefaultLegacy(invariant2);
var createResizeDetector__default = /* @__PURE__ */ _interopDefaultLegacy(createResizeDetector);
var isShallowEqual__default = /* @__PURE__ */ _interopDefaultLegacy(isShallowEqual);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var instances = {};
function resizeDetector() {
  var strategy = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "scroll";
  if (!instances[strategy]) {
    instances[strategy] = createResizeDetector__default["default"]({
      strategy
    });
  }
  return instances[strategy];
}
var errMsg = "react-sizeme: an error occurred whilst stopping to listen to node size changes";
var defaultConfig = {
  monitorWidth: true,
  monitorHeight: false,
  refreshRate: 16,
  refreshMode: "throttle",
  noPlaceholder: false,
  resizeDetectorStrategy: "scroll"
};
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
var ReferenceWrapper = /* @__PURE__ */ function(_Component) {
  _inherits(ReferenceWrapper2, _Component);
  var _super = _createSuper(ReferenceWrapper2);
  function ReferenceWrapper2() {
    _classCallCheck(this, ReferenceWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(ReferenceWrapper2, [{
    key: "render",
    value: function render() {
      return React2.Children.only(this.props.children);
    }
  }]);
  return ReferenceWrapper2;
}(React2.Component);
_defineProperty2(ReferenceWrapper, "displayName", "SizeMeReferenceWrapper");
function Placeholder(_ref) {
  var className = _ref.className, style = _ref.style;
  var phProps = {};
  if (!className && !style) {
    phProps.style = {
      width: "100%",
      height: "100%"
    };
  } else {
    if (className) {
      phProps.className = className;
    }
    if (style) {
      phProps.style = style;
    }
  }
  return /* @__PURE__ */ React__default["default"].createElement("div", phProps);
}
Placeholder.displayName = "SizeMePlaceholder";
var renderWrapper = function renderWrapper2(WrappedComponent) {
  function SizeMeRenderer(props) {
    var explicitRef = props.explicitRef, className = props.className, style = props.style, size2 = props.size, disablePlaceholder = props.disablePlaceholder;
    props.onSize;
    var restProps = _objectWithoutProperties2(props, ["explicitRef", "className", "style", "size", "disablePlaceholder", "onSize"]);
    var noSizeData = size2 == null || size2.width == null && size2.height == null;
    var renderPlaceholder = noSizeData && !disablePlaceholder;
    var renderProps = {
      className,
      style
    };
    if (size2 != null) {
      renderProps.size = size2;
    }
    var toRender = renderPlaceholder ? /* @__PURE__ */ React__default["default"].createElement(Placeholder, {
      className,
      style
    }) : /* @__PURE__ */ React__default["default"].createElement(WrappedComponent, _extends2({}, renderProps, restProps));
    return /* @__PURE__ */ React__default["default"].createElement(ReferenceWrapper, {
      ref: explicitRef
    }, toRender);
  }
  SizeMeRenderer.displayName = "SizeMeRenderer(".concat(getDisplayName(WrappedComponent), ")");
  return SizeMeRenderer;
};
function withSize() {
  var config3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultConfig;
  var _config$monitorWidth = config3.monitorWidth, monitorWidth = _config$monitorWidth === void 0 ? defaultConfig.monitorWidth : _config$monitorWidth, _config$monitorHeight = config3.monitorHeight, monitorHeight = _config$monitorHeight === void 0 ? defaultConfig.monitorHeight : _config$monitorHeight, _config$refreshRate = config3.refreshRate, refreshRate = _config$refreshRate === void 0 ? defaultConfig.refreshRate : _config$refreshRate, _config$refreshMode = config3.refreshMode, refreshMode = _config$refreshMode === void 0 ? defaultConfig.refreshMode : _config$refreshMode, _config$noPlaceholder = config3.noPlaceholder, noPlaceholder = _config$noPlaceholder === void 0 ? defaultConfig.noPlaceholder : _config$noPlaceholder, _config$resizeDetecto = config3.resizeDetectorStrategy, resizeDetectorStrategy = _config$resizeDetecto === void 0 ? defaultConfig.resizeDetectorStrategy : _config$resizeDetecto;
  invariant__default["default"](monitorWidth || monitorHeight, 'You have to monitor at least one of the width or height when using "sizeMe"');
  invariant__default["default"](refreshRate >= 16, "It is highly recommended that you don't put your refreshRate lower than 16 as this may cause layout thrashing.");
  invariant__default["default"](refreshMode === "throttle" || refreshMode === "debounce", 'The refreshMode should have a value of "throttle" or "debounce"');
  var refreshDelayStrategy = refreshMode === "throttle" ? throttleDebounce.throttle : throttleDebounce.debounce;
  return function WrapComponent(WrappedComponent) {
    var SizeMeRenderWrapper = renderWrapper(WrappedComponent);
    var SizeAwareComponent = /* @__PURE__ */ function(_React$Component) {
      _inherits(SizeAwareComponent2, _React$Component);
      var _super2 = _createSuper(SizeAwareComponent2);
      function SizeAwareComponent2() {
        var _this;
        _classCallCheck(this, SizeAwareComponent2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super2.call.apply(_super2, [this].concat(args));
        _defineProperty2(_assertThisInitialized(_this), "domEl", null);
        _defineProperty2(_assertThisInitialized(_this), "state", {
          width: void 0,
          height: void 0
        });
        _defineProperty2(_assertThisInitialized(_this), "uninstall", function() {
          if (_this.domEl) {
            try {
              _this.detector.uninstall(_this.domEl);
            } catch (err) {
              console.warn(errMsg);
            }
            _this.domEl = null;
          }
        });
        _defineProperty2(_assertThisInitialized(_this), "determineStrategy", function(props) {
          if (props.onSize) {
            if (!_this.callbackState) {
              _this.callbackState = _objectSpread2({}, _this.state);
            }
            _this.strategy = "callback";
          } else {
            _this.strategy = "render";
          }
        });
        _defineProperty2(_assertThisInitialized(_this), "strategisedSetState", function(state) {
          if (_this.strategy === "callback") {
            _this.callbackState = state;
            _this.props.onSize(state);
          }
          _this.setState(state);
        });
        _defineProperty2(_assertThisInitialized(_this), "strategisedGetState", function() {
          return _this.strategy === "callback" ? _this.callbackState : _this.state;
        });
        _defineProperty2(_assertThisInitialized(_this), "refCallback", function(element) {
          _this.element = element;
        });
        _defineProperty2(_assertThisInitialized(_this), "hasSizeChanged", function(current, next) {
          var c = current;
          var n = next;
          return monitorWidth && c.width !== n.width || monitorHeight && c.height !== n.height;
        });
        _defineProperty2(_assertThisInitialized(_this), "checkIfSizeChanged", refreshDelayStrategy(refreshRate, function(el) {
          var _el$getBoundingClient = el.getBoundingClientRect(), width = _el$getBoundingClient.width, height = _el$getBoundingClient.height;
          var next = {
            width: monitorWidth ? width : null,
            height: monitorHeight ? height : null
          };
          if (_this.hasSizeChanged(_this.strategisedGetState(), next)) {
            _this.strategisedSetState(next);
          }
        }));
        return _this;
      }
      _createClass(SizeAwareComponent2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.detector = resizeDetector(resizeDetectorStrategy);
          this.determineStrategy(this.props);
          this.handleDOMNode();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.determineStrategy(this.props);
          this.handleDOMNode();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.hasSizeChanged = function() {
            return void 0;
          };
          this.checkIfSizeChanged = function() {
            return void 0;
          };
          this.uninstall();
        }
      }, {
        key: "handleDOMNode",
        value: function handleDOMNode() {
          var found = this.element && ReactDOM__default["default"].findDOMNode(this.element);
          if (!found) {
            this.uninstall();
            return;
          }
          if (!this.domEl) {
            this.domEl = found;
            this.detector.listenTo(this.domEl, this.checkIfSizeChanged);
          } else if (this.domEl.isSameNode && !this.domEl.isSameNode(found) || this.domEl !== found) {
            this.uninstall();
            this.domEl = found;
            this.detector.listenTo(this.domEl, this.checkIfSizeChanged);
          } else
            ;
        }
      }, {
        key: "render",
        value: function render() {
          var disablePlaceholder = withSize.enableSSRBehaviour || withSize.noPlaceholders || noPlaceholder || this.strategy === "callback";
          var size2 = _objectSpread2({}, this.state);
          return /* @__PURE__ */ React__default["default"].createElement(SizeMeRenderWrapper, _extends2({
            explicitRef: this.refCallback,
            size: this.strategy === "callback" ? null : size2,
            disablePlaceholder
          }, this.props));
        }
      }]);
      return SizeAwareComponent2;
    }(React__default["default"].Component);
    _defineProperty2(SizeAwareComponent, "displayName", "SizeMe(".concat(getDisplayName(WrappedComponent), ")"));
    SizeAwareComponent.WrappedComponent = WrappedComponent;
    return SizeAwareComponent;
  };
}
withSize.enableSSRBehaviour = false;
withSize.noPlaceholders = false;
var SizeMe = /* @__PURE__ */ function(_Component) {
  _inherits(SizeMe2, _Component);
  var _super = _createSuper(SizeMe2);
  function SizeMe2(props) {
    var _this;
    _classCallCheck(this, SizeMe2);
    _this = _super.call(this, props);
    _defineProperty2(_assertThisInitialized(_this), "createComponent", function(config3) {
      _this.SizeAware = withSize(config3)(function(_ref) {
        var children = _ref.children;
        return children;
      });
    });
    _defineProperty2(_assertThisInitialized(_this), "onSize", function(size2) {
      return _this.setState({
        size: size2
      });
    });
    props.children;
    props.render;
    var sizeMeConfig = _objectWithoutProperties2(props, ["children", "render"]);
    _this.createComponent(sizeMeConfig);
    _this.state = {
      size: {
        width: void 0,
        height: void 0
      }
    };
    return _this;
  }
  _createClass(SizeMe2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props;
      _this$props.children;
      _this$props.render;
      var currentSizeMeConfig = _objectWithoutProperties2(_this$props, ["children", "render"]);
      prevProps.children;
      prevProps.render;
      var prevSizeMeConfig = _objectWithoutProperties2(prevProps, ["children", "render"]);
      if (!isShallowEqual__default["default"](currentSizeMeConfig, prevSizeMeConfig)) {
        this.createComponent(currentSizeMeConfig);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var SizeAware = this.SizeAware;
      var render2 = this.props.children || this.props.render;
      return /* @__PURE__ */ React__default["default"].createElement(SizeAware, {
        onSize: this.onSize
      }, render2({
        size: this.state.size
      }));
    }
  }]);
  return SizeMe2;
}(React2.Component);
_defineProperty2(SizeMe, "defaultProps", {
  children: void 0,
  render: void 0
});
withSize.SizeMe = SizeMe;
withSize.withSize = withSize;
module19.exports = withSize;
var react_sizeme_default = module19.exports;

// node_modules/@storybook/addon-a11y/dist/cjs/components/Tabs.js
import * as $cjs$_storybook_theming3 from "@storybook/theming";
import * as $cjs$react4 from "react";

// empty:core-js/modules/es.array.reduce.js
var es_array_reduce_exports = {};
__export(es_array_reduce_exports, {
  default: () => es_array_reduce_default
});
init_define_process_env();
var es_array_reduce_default = {};

// empty:core-js/modules/es.string.bold.js
var es_string_bold_exports = {};
__export(es_string_bold_exports, {
  default: () => es_string_bold_default
});
init_define_process_env();
var es_string_bold_default = {};

// node_modules/@storybook/addon-a11y/dist/cjs/components/Tabs.js
function $$cjs_default$$8(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module20 = { exports: {} };
var exports20 = module20.exports;
function _typeof2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
$$cjs_default$$8(es_weak_map_exports);
$$cjs_default$$8(es_object_to_string_exports);
$$cjs_default$$8(es_string_iterator_exports);
$$cjs_default$$8(es_array_iterator_exports);
$$cjs_default$$8(web_dom_collections_iterator_exports);
$$cjs_default$$8(es_object_get_own_property_descriptor_exports);
$$cjs_default$$8(es_symbol_exports);
$$cjs_default$$8(es_symbol_description_exports);
$$cjs_default$$8(es_symbol_iterator_exports);
Object.defineProperty(exports20, "__esModule", {
  value: true
});
exports20.Tabs = void 0;
$$cjs_default$$8(es_string_bold_exports);
$$cjs_default$$8(es_array_reduce_exports);
$$cjs_default$$8(es_array_concat_exports);
$$cjs_default$$8(es_array_map_exports);
var React3 = _interopRequireWildcard2($$cjs_default$$8($cjs$react4));
var _theming3 = $$cjs_default$$8($cjs$_storybook_theming3);
var _reactSizeme = $$cjs_default$$8(react_sizeme_exports);
var _HighlightToggle = _interopRequireDefault2($$cjs_default$$8(HighlightToggle_exports));
var _A11yContext2 = $$cjs_default$$8(A11yContext_exports);
function _interopRequireDefault2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache2() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache2 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard2(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache2();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var Container = _theming3.styled.div({
  width: "100%",
  position: "relative",
  minHeight: "100%"
});
var HighlightToggleLabel = _theming3.styled.label(function(_ref) {
  var theme2 = _ref.theme;
  return {
    cursor: "pointer",
    userSelect: "none",
    color: theme2.color.dark
  };
});
var GlobalToggle = _theming3.styled.div(function(_ref2) {
  var elementWidth = _ref2.elementWidth, theme2 = _ref2.theme;
  var maxWidthBeforeBreak = 450;
  return {
    cursor: "pointer",
    fontSize: 13,
    lineHeight: "20px",
    padding: elementWidth > maxWidthBeforeBreak ? "10px 15px 10px 0" : "10px 0px 10px 15px",
    height: "40px",
    border: "none",
    marginTop: elementWidth > maxWidthBeforeBreak ? -40 : 0,
    float: elementWidth > maxWidthBeforeBreak ? "right" : "left",
    display: "flex",
    alignItems: "center",
    width: elementWidth > maxWidthBeforeBreak ? "auto" : "100%",
    borderBottom: elementWidth > maxWidthBeforeBreak ? "none" : "1px solid ".concat(theme2.appBorderColor),
    input: {
      marginLeft: 10,
      marginRight: 0,
      marginTop: -1,
      marginBottom: 0
    }
  };
});
var Item = _theming3.styled.button(function(_ref3) {
  var theme2 = _ref3.theme;
  return {
    textDecoration: "none",
    padding: "10px 15px",
    cursor: "pointer",
    fontWeight: theme2.typography.weight.bold,
    fontSize: theme2.typography.size.s2 - 1,
    lineHeight: 1,
    height: 40,
    border: "none",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    background: "transparent",
    "&:focus": {
      outline: "0 none",
      borderBottom: "3px solid ".concat(theme2.color.secondary)
    }
  };
}, function(_ref4) {
  var active = _ref4.active, theme2 = _ref4.theme;
  return active ? {
    opacity: 1,
    borderBottom: "3px solid ".concat(theme2.color.secondary)
  } : {};
});
var TabsWrapper = _theming3.styled.div({});
var List = _theming3.styled.div(function(_ref5) {
  var theme2 = _ref5.theme;
  return {
    boxShadow: "".concat(theme2.appBorderColor, " 0 -1px 0 0 inset"),
    background: "rgba(0, 0, 0, .05)",
    display: "flex",
    justifyContent: "space-between",
    whiteSpace: "nowrap"
  };
});
function retrieveAllNodesFromResults(items) {
  return items.reduce(function(acc, item) {
    return acc.concat(item.nodes);
  }, []);
}
var Tabs = function Tabs2(_ref6) {
  var tabs = _ref6.tabs;
  var _useA11yContext = (0, _A11yContext2.useA11yContext)(), activeTab = _useA11yContext.tab, setTab2 = _useA11yContext.setTab;
  var handleToggle = React3.useCallback(function(event) {
    setTab2(parseInt(event.currentTarget.getAttribute("data-index") || "", 10));
  }, [setTab2]);
  var highlightToggleId = "".concat(tabs[activeTab].type, "-global-checkbox");
  var highlightLabel = "Highlight results";
  return /* @__PURE__ */ React3.createElement(_reactSizeme.SizeMe, {
    refreshMode: "debounce"
  }, function(_ref7) {
    var size2 = _ref7.size;
    return /* @__PURE__ */ React3.createElement(Container, null, /* @__PURE__ */ React3.createElement(List, null, /* @__PURE__ */ React3.createElement(TabsWrapper, null, tabs.map(function(tab, index) {
      return /* @__PURE__ */ React3.createElement(Item, {
        key: index,
        "data-index": index,
        active: activeTab === index,
        onClick: handleToggle
      }, tab.label);
    }))), tabs[activeTab].items.length > 0 ? /* @__PURE__ */ React3.createElement(GlobalToggle, {
      elementWidth: size2.width || 0
    }, /* @__PURE__ */ React3.createElement(HighlightToggleLabel, {
      htmlFor: highlightToggleId
    }, highlightLabel), /* @__PURE__ */ React3.createElement(_HighlightToggle.default, {
      toggleId: highlightToggleId,
      elementsToHighlight: retrieveAllNodesFromResults(tabs[activeTab].items)
    })) : null, tabs[activeTab].panel);
  });
};
exports20.Tabs = Tabs;
var __export04;
if (Object.isExtensible(module20.exports)) {
  __export04 = module20.exports["Tabs"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/index.js
var Report_exports = {};
__export(Report_exports, {
  Report: () => __export010
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Item.js
var Item_exports = {};
__export(Item_exports, {
  Item: () => __export09
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Tags.js
var Tags_exports = {};
__export(Tags_exports, {
  Tags: () => __export05
});
init_define_process_env();
import * as $cjs$_storybook_theming4 from "@storybook/theming";
import * as $cjs$react5 from "react";
function $$cjs_default$$9(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module21 = { exports: {} };
var exports21 = module21.exports;
Object.defineProperty(exports21, "__esModule", {
  value: true
});
exports21.Tags = void 0;
$$cjs_default$$9(es_array_map_exports);
var _react2 = _interopRequireDefault3($$cjs_default$$9($cjs$react5));
var _theming4 = $$cjs_default$$9($cjs$_storybook_theming4);
function _interopRequireDefault3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Wrapper = _theming4.styled.div({
  display: "flex",
  flexWrap: "wrap",
  margin: "12px 0"
});
var Item2 = _theming4.styled.div(function(_ref) {
  var theme2 = _ref.theme;
  return {
    margin: "0 6px",
    padding: 5,
    border: "1px solid ".concat(theme2.appBorderColor),
    borderRadius: theme2.appBorderRadius
  };
});
var Tags = function Tags2(_ref2) {
  var tags = _ref2.tags;
  return /* @__PURE__ */ _react2.default.createElement(Wrapper, null, tags.map(function(tag) {
    return /* @__PURE__ */ _react2.default.createElement(Item2, {
      key: tag
    }, tag);
  }));
};
exports21.Tags = Tags;
var __export05;
if (Object.isExtensible(module21.exports)) {
  __export05 = module21.exports["Tags"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Elements.js
var Elements_exports = {};
__export(Elements_exports, {
  Elements: () => __export07
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Rules.js
var Rules_exports = {};
__export(Rules_exports, {
  ImpactValue: () => __export14,
  Rules: () => __export06
});
init_define_process_env();
import * as $cjs$_storybook_components from "@storybook/components";
import * as $cjs$_storybook_theming5 from "@storybook/theming";
import * as $cjs$react6 from "react";
function $$cjs_default$$10(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module22 = { exports: {} };
var exports22 = module22.exports;
Object.defineProperty(exports22, "__esModule", {
  value: true
});
exports22.Rules = exports22.ImpactValue = void 0;
$$cjs_default$$10(es_array_concat_exports);
$$cjs_default$$10(es_array_slice_exports);
$$cjs_default$$10(es_array_map_exports);
var _react3 = _interopRequireDefault4($$cjs_default$$10($cjs$react6));
var _theming5 = $$cjs_default$$10($cjs$_storybook_theming5);
var _components = $$cjs_default$$10($cjs$_storybook_components);
var _reactSizeme2 = $$cjs_default$$10(react_sizeme_exports);
function _interopRequireDefault4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var List2 = _theming5.styled.div({
  display: "flex",
  flexDirection: "column",
  paddingBottom: 4,
  paddingRight: 4,
  paddingTop: 4,
  fontWeight: "400"
});
var Item3 = _theming5.styled.div(function(_ref) {
  var elementWidth = _ref.elementWidth;
  var maxWidthBeforeBreak = 407;
  return {
    flexDirection: elementWidth > maxWidthBeforeBreak ? "row" : "inherit",
    marginBottom: elementWidth > maxWidthBeforeBreak ? 6 : 12,
    display: elementWidth > maxWidthBeforeBreak ? "flex" : "block"
  };
});
var StyledBadge = (0, _theming5.styled)(_components.Badge)({
  padding: "2px 8px",
  marginBottom: 3,
  minWidth: 65,
  maxWidth: "fit-content",
  width: "100%",
  textAlign: "center"
});
var Message = _theming5.styled.div({
  paddingLeft: 6,
  paddingRight: 23
});
var ImpactValue;
exports22.ImpactValue = ImpactValue;
(function(ImpactValue2) {
  ImpactValue2["MINOR"] = "minor";
  ImpactValue2["MODERATE"] = "moderate";
  ImpactValue2["SERIOUS"] = "serious";
  ImpactValue2["CRITICAL"] = "critical";
})(ImpactValue || (exports22.ImpactValue = ImpactValue = {}));
var formatSeverityText = function formatSeverityText2(severity) {
  return severity.charAt(0).toUpperCase().concat(severity.slice(1));
};
var Rule = function Rule2(_ref2) {
  var rule = _ref2.rule;
  var badgeType = null;
  switch (rule.impact) {
    case ImpactValue.CRITICAL:
      badgeType = "critical";
      break;
    case ImpactValue.SERIOUS:
      badgeType = "negative";
      break;
    case ImpactValue.MODERATE:
      badgeType = "warning";
      break;
    case ImpactValue.MINOR:
      badgeType = "neutral";
      break;
    default:
      break;
  }
  return /* @__PURE__ */ _react3.default.createElement(_reactSizeme2.SizeMe, {
    refreshMode: "debounce"
  }, function(_ref3) {
    var size2 = _ref3.size;
    return /* @__PURE__ */ _react3.default.createElement(Item3, {
      elementWidth: size2.width || 0
    }, /* @__PURE__ */ _react3.default.createElement(StyledBadge, {
      status: badgeType
    }, formatSeverityText(rule.impact)), /* @__PURE__ */ _react3.default.createElement(Message, null, rule.message));
  });
};
var Rules = function Rules2(_ref4) {
  var rules = _ref4.rules;
  return /* @__PURE__ */ _react3.default.createElement(List2, null, rules.map(function(rule, index) {
    return /* @__PURE__ */ _react3.default.createElement(Rule, {
      rule,
      key: index
    });
  }));
};
exports22.Rules = Rules;
var __export06;
var __export14;
if (Object.isExtensible(module22.exports)) {
  __export06 = module22.exports["Rules"];
  __export14 = module22.exports["ImpactValue"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Elements.js
import * as $cjs$_storybook_theming6 from "@storybook/theming";
import * as $cjs$react7 from "react";
function $$cjs_default$$11(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module23 = { exports: {} };
var exports23 = module23.exports;
$$cjs_default$$11(es_symbol_exports);
$$cjs_default$$11(es_symbol_description_exports);
$$cjs_default$$11(es_object_to_string_exports);
$$cjs_default$$11(es_symbol_iterator_exports);
$$cjs_default$$11(es_string_iterator_exports);
$$cjs_default$$11(es_array_iterator_exports);
$$cjs_default$$11(web_dom_collections_iterator_exports);
$$cjs_default$$11(es_array_from_exports);
$$cjs_default$$11(es_array_slice_exports);
$$cjs_default$$11(es_function_name_exports);
Object.defineProperty(exports23, "__esModule", {
  value: true
});
exports23.Elements = void 0;
$$cjs_default$$11(es_array_concat_exports);
$$cjs_default$$11(es_array_map_exports);
var _react4 = _interopRequireDefault5($$cjs_default$$11($cjs$react7));
var _theming6 = $$cjs_default$$11($cjs$_storybook_theming6);
var _Rules = $$cjs_default$$11(Rules_exports);
var _HighlightToggle2 = _interopRequireDefault5($$cjs_default$$11(HighlightToggle_exports));
function _interopRequireDefault5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var Item4 = _theming6.styled.li({
  fontWeight: 600
});
var ItemTitle = _theming6.styled.span(function(_ref) {
  var theme2 = _ref.theme;
  return {
    borderBottom: "1px solid ".concat(theme2.appBorderColor),
    width: "100%",
    display: "flex",
    paddingBottom: 6,
    marginBottom: 6,
    justifyContent: "space-between"
  };
});
var HighlightToggleElement = _theming6.styled.span({
  fontWeight: "normal",
  alignSelf: "center",
  paddingRight: 15,
  input: {
    margin: 0,
    display: "block"
  }
});
var Element = function Element2(_ref2) {
  var element = _ref2.element, type = _ref2.type;
  var any = element.any, all = element.all, none = element.none;
  var rules = [].concat(_toConsumableArray2(any), _toConsumableArray2(all), _toConsumableArray2(none));
  var highlightToggleId = "".concat(type, "-").concat(element.target[0]);
  return /* @__PURE__ */ _react4.default.createElement(Item4, null, /* @__PURE__ */ _react4.default.createElement(ItemTitle, null, element.target[0], /* @__PURE__ */ _react4.default.createElement(HighlightToggleElement, null, /* @__PURE__ */ _react4.default.createElement(_HighlightToggle2.default, {
    toggleId: highlightToggleId,
    elementsToHighlight: [element]
  }))), /* @__PURE__ */ _react4.default.createElement(_Rules.Rules, {
    rules
  }));
};
var Elements = function Elements2(_ref3) {
  var elements = _ref3.elements, type = _ref3.type;
  return /* @__PURE__ */ _react4.default.createElement("ol", null, elements.map(function(element, index) {
    return /* @__PURE__ */ _react4.default.createElement(Element, {
      element,
      key: index,
      type
    });
  }));
};
exports23.Elements = Elements;
var __export07;
if (Object.isExtensible(module23.exports)) {
  __export07 = module23.exports["Elements"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Info.js
var Info_exports = {};
__export(Info_exports, {
  Info: () => __export08
});
init_define_process_env();
import * as $cjs$_storybook_theming7 from "@storybook/theming";
import * as $cjs$react8 from "react";
function $$cjs_default$$12(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module24 = { exports: {} };
var exports24 = module24.exports;
Object.defineProperty(exports24, "__esModule", {
  value: true
});
exports24.Info = void 0;
$$cjs_default$$12(es_symbol_exports);
$$cjs_default$$12(es_symbol_description_exports);
var _react5 = _interopRequireDefault6($$cjs_default$$12($cjs$react8));
var _theming7 = $$cjs_default$$12($cjs$_storybook_theming7);
function _interopRequireDefault6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Wrapper2 = _theming7.styled.div({
  padding: 12,
  marginBottom: 10
});
var Description = _theming7.styled.p({
  margin: "0 0 12px"
});
var Link = _theming7.styled.a({
  marginTop: 12,
  textDecoration: "underline",
  color: "inherit",
  display: "block"
});
var Info = function Info2(_ref) {
  var item = _ref.item;
  return /* @__PURE__ */ _react5.default.createElement(Wrapper2, null, /* @__PURE__ */ _react5.default.createElement(Description, null, item.description), /* @__PURE__ */ _react5.default.createElement(Link, {
    href: item.helpUrl,
    target: "_blank"
  }, "More info..."));
};
exports24.Info = Info;
var __export08;
if (Object.isExtensible(module24.exports)) {
  __export08 = module24.exports["Info"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/Item.js
import * as $cjs$_storybook_components2 from "@storybook/components";
import * as $cjs$_storybook_theming8 from "@storybook/theming";
import * as $cjs$react9 from "react";
function $$cjs_default$$13(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module25 = { exports: {} };
var exports25 = module25.exports;
function _typeof3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof3 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof3 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof3(obj);
}
$$cjs_default$$13(es_symbol_exports);
$$cjs_default$$13(es_symbol_description_exports);
$$cjs_default$$13(es_object_to_string_exports);
$$cjs_default$$13(es_symbol_iterator_exports);
$$cjs_default$$13(es_string_iterator_exports);
$$cjs_default$$13(es_array_iterator_exports);
$$cjs_default$$13(web_dom_collections_iterator_exports);
$$cjs_default$$13(es_array_slice_exports);
$$cjs_default$$13(es_function_name_exports);
$$cjs_default$$13(es_array_from_exports);
$$cjs_default$$13(es_weak_map_exports);
$$cjs_default$$13(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports25, "__esModule", {
  value: true
});
exports25.Item = void 0;
$$cjs_default$$13(es_array_concat_exports);
var _react6 = _interopRequireWildcard3($$cjs_default$$13($cjs$react9));
var _theming8 = $$cjs_default$$13($cjs$_storybook_theming8);
var _components2 = $$cjs_default$$13($cjs$_storybook_components2);
var _Info = $$cjs_default$$13(Info_exports);
var _Elements = $$cjs_default$$13(Elements_exports);
var _Tags = $$cjs_default$$13(Tags_exports);
var _HighlightToggle3 = _interopRequireDefault7($$cjs_default$$13(HighlightToggle_exports));
function _interopRequireDefault7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache3() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache3 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard3(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache3();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
var Wrapper3 = _theming8.styled.div(function(_ref) {
  var theme2 = _ref.theme;
  return {
    display: "flex",
    width: "100%",
    borderBottom: "1px solid ".concat(theme2.appBorderColor),
    "&:hover": {
      background: theme2.background.hoverable
    }
  };
});
var Icon = (0, _theming8.styled)(_components2.Icons)(function(_ref2) {
  var theme2 = _ref2.theme;
  return {
    height: 10,
    width: 10,
    minWidth: 10,
    color: theme2.color.mediumdark,
    marginRight: 10,
    transition: "transform 0.1s ease-in-out",
    alignSelf: "center",
    display: "inline-flex"
  };
});
var HeaderBar = _theming8.styled.div(function(_ref3) {
  var theme2 = _ref3.theme;
  return {
    padding: theme2.layoutMargin,
    paddingLeft: theme2.layoutMargin - 3,
    lineHeight: "20px",
    background: "none",
    color: "inherit",
    textAlign: "left",
    cursor: "pointer",
    borderLeft: "3px solid transparent",
    width: "100%",
    "&:focus": {
      outline: "0 none",
      borderLeft: "3px solid ".concat(theme2.color.secondary)
    }
  };
});
var HighlightToggleElement2 = _theming8.styled.span({
  fontWeight: "normal",
  float: "right",
  marginRight: 15,
  alignSelf: "center",
  input: {
    margin: 0,
    display: "block"
  }
});
var Item5 = function Item6(props) {
  var _useState = (0, _react6.useState)(false), _useState2 = _slicedToArray3(_useState, 2), open = _useState2[0], onToggle = _useState2[1];
  var item = props.item, type = props.type;
  var highlightToggleId = "".concat(type, "-").concat(item.id);
  return /* @__PURE__ */ _react6.default.createElement(_react6.Fragment, null, /* @__PURE__ */ _react6.default.createElement(Wrapper3, null, /* @__PURE__ */ _react6.default.createElement(HeaderBar, {
    onClick: function onClick() {
      return onToggle(!open);
    },
    role: "button"
  }, /* @__PURE__ */ _react6.default.createElement(Icon, {
    icon: "chevrondown",
    size: 10,
    color: "#9DA5AB",
    style: {
      transform: "rotate(".concat(open ? 0 : -90, "deg)")
    }
  }), item.help), /* @__PURE__ */ _react6.default.createElement(HighlightToggleElement2, null, /* @__PURE__ */ _react6.default.createElement(_HighlightToggle3.default, {
    toggleId: highlightToggleId,
    elementsToHighlight: item.nodes
  }))), open ? /* @__PURE__ */ _react6.default.createElement(_react6.Fragment, null, /* @__PURE__ */ _react6.default.createElement(_Info.Info, {
    item,
    key: "info"
  }), /* @__PURE__ */ _react6.default.createElement(_Elements.Elements, {
    elements: item.nodes,
    type,
    key: "elements"
  }), /* @__PURE__ */ _react6.default.createElement(_Tags.Tags, {
    tags: item.tags,
    key: "tags"
  })) : null);
};
exports25.Item = Item5;
var __export09;
if (Object.isExtensible(module25.exports)) {
  __export09 = module25.exports["Item"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/Report/index.js
import * as $cjs$_storybook_components3 from "@storybook/components";
import * as $cjs$react10 from "react";
function $$cjs_default$$14(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module26 = { exports: {} };
var exports26 = module26.exports;
function _typeof4(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof4 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof4 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof4(obj);
}
$$cjs_default$$14(es_weak_map_exports);
$$cjs_default$$14(es_object_to_string_exports);
$$cjs_default$$14(es_string_iterator_exports);
$$cjs_default$$14(es_array_iterator_exports);
$$cjs_default$$14(web_dom_collections_iterator_exports);
$$cjs_default$$14(es_object_get_own_property_descriptor_exports);
$$cjs_default$$14(es_symbol_exports);
$$cjs_default$$14(es_symbol_description_exports);
$$cjs_default$$14(es_symbol_iterator_exports);
Object.defineProperty(exports26, "__esModule", {
  value: true
});
exports26.Report = void 0;
$$cjs_default$$14(es_array_map_exports);
$$cjs_default$$14(es_array_concat_exports);
var _react7 = _interopRequireWildcard4($$cjs_default$$14($cjs$react10));
var _components3 = $$cjs_default$$14($cjs$_storybook_components3);
var _Item = $$cjs_default$$14(Item_exports);
function _getRequireWildcardCache4() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache4 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard4(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof4(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache4();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var Report = function Report2(_ref) {
  var items = _ref.items, empty = _ref.empty, type = _ref.type;
  return /* @__PURE__ */ _react7.default.createElement(_react7.Fragment, null, items && items.length ? items.map(function(item) {
    return /* @__PURE__ */ _react7.default.createElement(_Item.Item, {
      item,
      key: "".concat(type, ":").concat(item.id),
      type
    });
  }) : /* @__PURE__ */ _react7.default.createElement(_components3.Placeholder, {
    key: "placeholder"
  }, empty));
};
exports26.Report = Report;
var __export010;
if (Object.isExtensible(module26.exports)) {
  __export010 = module26.exports["Report"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/A11YPanel.js
import * as $cjs$_storybook_api2 from "@storybook/api";
import * as $cjs$_storybook_components4 from "@storybook/components";
import * as $cjs$_storybook_theming9 from "@storybook/theming";
import * as $cjs$react11 from "react";
function $$cjs_default$$15(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module27 = { exports: {} };
var exports27 = module27.exports;
function _typeof5(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof5 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof5 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof5(obj);
}
$$cjs_default$$15(es_symbol_exports);
$$cjs_default$$15(es_symbol_description_exports);
$$cjs_default$$15(es_object_to_string_exports);
$$cjs_default$$15(es_symbol_iterator_exports);
$$cjs_default$$15(es_string_iterator_exports);
$$cjs_default$$15(es_array_iterator_exports);
$$cjs_default$$15(web_dom_collections_iterator_exports);
$$cjs_default$$15(es_array_slice_exports);
$$cjs_default$$15(es_function_name_exports);
$$cjs_default$$15(es_array_from_exports);
$$cjs_default$$15(es_weak_map_exports);
$$cjs_default$$15(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports27, "__esModule", {
  value: true
});
exports27.A11YPanel = exports27.RuleType = void 0;
var _react8 = _interopRequireWildcard5($$cjs_default$$15($cjs$react11));
var _theming9 = $$cjs_default$$15($cjs$_storybook_theming9);
var _components4 = $$cjs_default$$15($cjs$_storybook_components4);
var _api2 = $$cjs_default$$15($cjs$_storybook_api2);
var _Report = $$cjs_default$$15(Report_exports);
var _Tabs = $$cjs_default$$15(Tabs_exports);
var _A11yContext3 = $$cjs_default$$15(A11yContext_exports);
var _constants2 = $$cjs_default$$15(constants_exports);
function _getRequireWildcardCache5() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache5 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard5(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof5(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache5();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
var RuleType;
exports27.RuleType = RuleType;
(function(RuleType2) {
  RuleType2[RuleType2["VIOLATION"] = 0] = "VIOLATION";
  RuleType2[RuleType2["PASS"] = 1] = "PASS";
  RuleType2[RuleType2["INCOMPLETION"] = 2] = "INCOMPLETION";
})(RuleType || (exports27.RuleType = RuleType = {}));
var Icon2 = (0, _theming9.styled)(_components4.Icons)({
  height: 12,
  width: 12,
  marginRight: 4
});
var RotatingIcon = (0, _theming9.styled)(Icon2)(function(_ref) {
  var theme2 = _ref.theme;
  return {
    animation: "".concat(theme2.animation.rotate360, " 1s linear infinite;")
  };
});
var Passes = _theming9.styled.span(function(_ref2) {
  var theme2 = _ref2.theme;
  return {
    color: theme2.color.positive
  };
});
var Violations = _theming9.styled.span(function(_ref3) {
  var theme2 = _ref3.theme;
  return {
    color: theme2.color.negative
  };
});
var Incomplete = _theming9.styled.span(function(_ref4) {
  var theme2 = _ref4.theme;
  return {
    color: theme2.color.warning
  };
});
var Centered = _theming9.styled.span({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
});
var A11YPanel = function A11YPanel2() {
  var _useChannel;
  var _useParameter = (0, _api2.useParameter)("a11y", {
    manual: false
  }), manual = _useParameter.manual;
  var _useState = (0, _react8.useState)(manual ? "manual" : "initial"), _useState2 = _slicedToArray4(_useState, 2), status = _useState2[0], setStatus = _useState2[1];
  var _React$useState = _react8.default.useState(void 0), _React$useState2 = _slicedToArray4(_React$useState, 2), error = _React$useState2[0], setError = _React$useState2[1];
  var _useA11yContext = (0, _A11yContext3.useA11yContext)(), setResults2 = _useA11yContext.setResults, results = _useA11yContext.results;
  var _useStorybookState = (0, _api2.useStorybookState)(), storyId = _useStorybookState.storyId;
  _react8.default.useEffect(function() {
    setStatus(manual ? "manual" : "initial");
  }, [manual]);
  var handleResult = function handleResult2(axeResults) {
    setStatus("ran");
    setResults2(axeResults);
    setTimeout(function() {
      if (status === "ran") {
        setStatus("ready");
      }
    }, 900);
  };
  var handleRun = (0, _react8.useCallback)(function() {
    setStatus("running");
  }, []);
  var handleError = (0, _react8.useCallback)(function(err) {
    setStatus("error");
    setError(err);
  }, []);
  var emit = (0, _api2.useChannel)((_useChannel = {}, _defineProperty3(_useChannel, _constants2.EVENTS.RUNNING, handleRun), _defineProperty3(_useChannel, _constants2.EVENTS.RESULT, handleResult), _defineProperty3(_useChannel, _constants2.EVENTS.ERROR, handleError), _useChannel));
  var handleManual = (0, _react8.useCallback)(function() {
    setStatus("running");
    emit(_constants2.EVENTS.MANUAL, storyId);
  }, [storyId]);
  var manualActionItems = (0, _react8.useMemo)(function() {
    return [{
      title: "Run test",
      onClick: handleManual
    }];
  }, [handleManual]);
  var readyActionItems = (0, _react8.useMemo)(function() {
    return [{
      title: status === "ready" ? "Rerun tests" : /* @__PURE__ */ _react8.default.createElement(_react8.default.Fragment, null, /* @__PURE__ */ _react8.default.createElement(Icon2, {
        inline: true,
        icon: "check"
      }), " Tests completed"),
      onClick: handleManual
    }];
  }, [status, handleManual]);
  var tabs = (0, _react8.useMemo)(function() {
    var passes = results.passes, incomplete = results.incomplete, violations = results.violations;
    return [{
      label: /* @__PURE__ */ _react8.default.createElement(Violations, null, violations.length, " Violations"),
      panel: /* @__PURE__ */ _react8.default.createElement(_Report.Report, {
        items: violations,
        type: RuleType.VIOLATION,
        empty: "No accessibility violations found."
      }),
      items: violations,
      type: RuleType.VIOLATION
    }, {
      label: /* @__PURE__ */ _react8.default.createElement(Passes, null, passes.length, " Passes"),
      panel: /* @__PURE__ */ _react8.default.createElement(_Report.Report, {
        items: passes,
        type: RuleType.PASS,
        empty: "No accessibility checks passed."
      }),
      items: passes,
      type: RuleType.PASS
    }, {
      label: /* @__PURE__ */ _react8.default.createElement(Incomplete, null, incomplete.length, " Incomplete"),
      panel: /* @__PURE__ */ _react8.default.createElement(_Report.Report, {
        items: incomplete,
        type: RuleType.INCOMPLETION,
        empty: "No accessibility checks incomplete."
      }),
      items: incomplete,
      type: RuleType.INCOMPLETION
    }];
  }, [results]);
  return /* @__PURE__ */ _react8.default.createElement(_react8.default.Fragment, null, status === "initial" && /* @__PURE__ */ _react8.default.createElement(Centered, null, "Initializing..."), status === "manual" && /* @__PURE__ */ _react8.default.createElement(_react8.default.Fragment, null, /* @__PURE__ */ _react8.default.createElement(Centered, null, "Manually run the accessibility scan."), /* @__PURE__ */ _react8.default.createElement(_components4.ActionBar, {
    key: "actionbar",
    actionItems: manualActionItems
  })), status === "running" && /* @__PURE__ */ _react8.default.createElement(Centered, null, /* @__PURE__ */ _react8.default.createElement(RotatingIcon, {
    inline: true,
    icon: "sync"
  }), " Please wait while the accessibility scan is running ..."), (status === "ready" || status === "ran") && /* @__PURE__ */ _react8.default.createElement(_react8.default.Fragment, null, /* @__PURE__ */ _react8.default.createElement(_components4.ScrollArea, {
    vertical: true,
    horizontal: true
  }, /* @__PURE__ */ _react8.default.createElement(_Tabs.Tabs, {
    key: "tabs",
    tabs
  })), /* @__PURE__ */ _react8.default.createElement(_components4.ActionBar, {
    key: "actionbar",
    actionItems: readyActionItems
  })), status === "error" && /* @__PURE__ */ _react8.default.createElement(Centered, null, "The accessibility scan encountered an error.", /* @__PURE__ */ _react8.default.createElement("br", null), typeof error === "string" ? error : JSON.stringify(error)));
};
exports27.A11YPanel = A11YPanel;
var __export011;
var __export15;
if (Object.isExtensible(module27.exports)) {
  __export011 = module27.exports["A11YPanel"];
  __export15 = module27.exports["RuleType"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/VisionSimulator.js
var VisionSimulator_exports = {};
__export(VisionSimulator_exports, {
  VisionSimulator: () => __export013
});
init_define_process_env();

// node_modules/@storybook/addon-a11y/dist/cjs/components/ColorFilters.js
var ColorFilters_exports = {};
__export(ColorFilters_exports, {
  Filters: () => __export012
});
init_define_process_env();
import * as $cjs$react12 from "react";
function $$cjs_default$$16(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module28 = { exports: {} };
var exports28 = module28.exports;
function _typeof6(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof6 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof6 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof6(obj);
}
$$cjs_default$$16(es_weak_map_exports);
$$cjs_default$$16(es_object_to_string_exports);
$$cjs_default$$16(es_string_iterator_exports);
$$cjs_default$$16(es_array_iterator_exports);
$$cjs_default$$16(web_dom_collections_iterator_exports);
$$cjs_default$$16(es_object_get_own_property_descriptor_exports);
$$cjs_default$$16(es_symbol_exports);
$$cjs_default$$16(es_symbol_description_exports);
$$cjs_default$$16(es_symbol_iterator_exports);
Object.defineProperty(exports28, "__esModule", {
  value: true
});
exports28.Filters = void 0;
var React4 = _interopRequireWildcard6($$cjs_default$$16($cjs$react12));
function _getRequireWildcardCache6() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache6 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard6(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof6(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache6();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var Filters = function Filters2(props) {
  return /* @__PURE__ */ React4.createElement("svg", props, /* @__PURE__ */ React4.createElement("defs", null, /* @__PURE__ */ React4.createElement("filter", {
    id: "protanopia"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "protanomaly"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "deuteranopia"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "deuteranomaly"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "tritanopia"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "tritanomaly"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "achromatopsia"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"
  })), /* @__PURE__ */ React4.createElement("filter", {
    id: "achromatomaly"
  }, /* @__PURE__ */ React4.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.618, 0.320, 0.062, 0, 0 0.163, 0.775, 0.062, 0, 0 0.163, 0.320, 0.516, 0, 0 0, 0, 0, 1, 0"
  }))));
};
exports28.Filters = Filters;
var __export012;
if (Object.isExtensible(module28.exports)) {
  __export012 = module28.exports["Filters"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/components/VisionSimulator.js
import * as $cjs$_storybook_components5 from "@storybook/components";
import * as $cjs$_storybook_theming10 from "@storybook/theming";
import * as $cjs$react13 from "react";
function $$cjs_default$$17(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module29 = { exports: {} };
var exports29 = module29.exports;
function _typeof7(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof7 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof7 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof7(obj);
}
$$cjs_default$$17(es_symbol_exports);
$$cjs_default$$17(es_symbol_description_exports);
$$cjs_default$$17(es_object_to_string_exports);
$$cjs_default$$17(es_symbol_iterator_exports);
$$cjs_default$$17(es_string_iterator_exports);
$$cjs_default$$17(es_array_iterator_exports);
$$cjs_default$$17(web_dom_collections_iterator_exports);
$$cjs_default$$17(es_array_from_exports);
$$cjs_default$$17(es_function_name_exports);
$$cjs_default$$17(es_weak_map_exports);
$$cjs_default$$17(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports29, "__esModule", {
  value: true
});
exports29.VisionSimulator = void 0;
$$cjs_default$$17(es_array_filter_exports);
$$cjs_default$$17(es_array_concat_exports);
$$cjs_default$$17(es_array_map_exports);
$$cjs_default$$17(es_array_slice_exports);
var _react9 = _interopRequireWildcard7($$cjs_default$$17($cjs$react13));
var _theming10 = $$cjs_default$$17($cjs$_storybook_theming10);
var _components5 = $$cjs_default$$17($cjs$_storybook_components5);
var _ColorFilters = $$cjs_default$$17(ColorFilters_exports);
function _getRequireWildcardCache7() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache7 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard7(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof7(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache7();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit5(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var iframeId = "storybook-preview-iframe";
var baseList = ["blurred vision", "deuteranomaly", "deuteranopia", "protanomaly", "protanopia", "tritanomaly", "tritanopia", "achromatomaly", "achromatopsia", "grayscale"];
var getFilter = function getFilter2(filter) {
  if (!filter) {
    return "none";
  }
  if (filter === "blurred vision") {
    return "blur(2px)";
  }
  if (filter === "grayscale") {
    return "grayscale(100%)";
  }
  return "url('#".concat(filter, "')");
};
var Hidden = _theming10.styled.div(function() {
  return {
    "&, & svg": {
      position: "absolute",
      width: 0,
      height: 0
    }
  };
});
var ColorIcon = _theming10.styled.span({
  background: "linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",
  borderRadius: "1rem",
  display: "block",
  height: "1rem",
  width: "1rem"
}, function(_ref) {
  var filter = _ref.filter;
  return {
    filter: getFilter(filter)
  };
}, function(_ref2) {
  var theme2 = _ref2.theme;
  return {
    boxShadow: "".concat(theme2.appBorderColor, " 0 0 0 1px inset")
  };
});
var getColorList = function getColorList2(active, set) {
  return [].concat(_toConsumableArray3(active !== null ? [{
    id: "reset",
    title: "Reset color filter",
    onClick: function onClick() {
      set(null);
    },
    right: void 0,
    active: false
  }] : []), _toConsumableArray3(baseList.map(function(i) {
    return {
      id: i,
      title: i.charAt(0).toUpperCase() + i.slice(1),
      onClick: function onClick() {
        set(i);
      },
      right: /* @__PURE__ */ _react9.default.createElement(ColorIcon, {
        filter: i
      }),
      active: active === i
    };
  })));
};
var VisionSimulator = function VisionSimulator2() {
  var _useState = (0, _react9.useState)(null), _useState2 = _slicedToArray5(_useState, 2), filter = _useState2[0], setFilter = _useState2[1];
  return /* @__PURE__ */ _react9.default.createElement(_react9.default.Fragment, null, filter && /* @__PURE__ */ _react9.default.createElement(_theming10.Global, {
    styles: _defineProperty4({}, "#".concat(iframeId), {
      filter: getFilter(filter)
    })
  }), /* @__PURE__ */ _react9.default.createElement(_components5.WithTooltip, {
    placement: "top",
    trigger: "click",
    tooltip: function tooltip(_ref4) {
      var onHide = _ref4.onHide;
      var colorList = getColorList(filter, function(i) {
        setFilter(i);
        onHide();
      });
      return /* @__PURE__ */ _react9.default.createElement(_components5.TooltipLinkList, {
        links: colorList
      });
    },
    closeOnClick: true,
    onDoubleClick: function onDoubleClick() {
      return setFilter(null);
    }
  }, /* @__PURE__ */ _react9.default.createElement(_components5.IconButton, {
    key: "filter",
    active: !!filter,
    title: "Vision simulator"
  }, /* @__PURE__ */ _react9.default.createElement(_components5.Icons, {
    icon: "accessibility"
  }))), /* @__PURE__ */ _react9.default.createElement(Hidden, null, /* @__PURE__ */ _react9.default.createElement(_ColorFilters.Filters, null)));
};
exports29.VisionSimulator = VisionSimulator;
var __export013;
if (Object.isExtensible(module29.exports)) {
  __export013 = module29.exports["VisionSimulator"];
}

// node_modules/@storybook/addon-a11y/dist/cjs/register.js
import * as $cjs$_storybook_addons from "@storybook/addons";
import * as $cjs$react14 from "react";
function $$cjs_default$$18(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module30 = { exports: {} };
var exports30 = module30.exports;
var _react10 = _interopRequireDefault8($$cjs_default$$18($cjs$react14));
var _addons = $$cjs_default$$18($cjs$_storybook_addons);
var _constants3 = $$cjs_default$$18(constants_exports);
var _VisionSimulator = $$cjs_default$$18(VisionSimulator_exports);
var _A11YPanel = $$cjs_default$$18(A11YPanel_exports);
var _A11yContext4 = $$cjs_default$$18(A11yContext_exports);
function _interopRequireDefault8(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_addons.addons.register(_constants3.ADDON_ID, function() {
  _addons.addons.add(_constants3.PANEL_ID, {
    title: "",
    type: _addons.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === "story";
    },
    render: function render() {
      return /* @__PURE__ */ _react10.default.createElement(_VisionSimulator.VisionSimulator, null);
    }
  });
  _addons.addons.add(_constants3.PANEL_ID, {
    title: "Accessibility",
    type: _addons.types.PANEL,
    render: function render(_ref2) {
      var _ref2$active = _ref2.active, active = _ref2$active === void 0 ? true : _ref2$active, key = _ref2.key;
      return /* @__PURE__ */ _react10.default.createElement(_A11yContext4.A11yContextProvider, {
        key,
        active
      }, /* @__PURE__ */ _react10.default.createElement(_A11YPanel.A11YPanel, null));
    },
    paramKey: _constants3.PARAM_KEY
  });
});
var register_default = module30.exports;

// node_modules/@storybook/addon-actions/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/constants.js
var constants_exports2 = {};
__export(constants_exports2, {
  ADDON_ID: () => __export32,
  CYCLIC_KEY: () => __export014,
  EVENT_ID: () => __export16,
  PANEL_ID: () => __export24,
  PARAM_KEY: () => __export42
});
init_define_process_env();
var module31 = { exports: {} };
var exports31 = module31.exports;
Object.defineProperty(exports31, "__esModule", {
  value: true
});
exports31.CYCLIC_KEY = exports31.EVENT_ID = exports31.PANEL_ID = exports31.ADDON_ID = exports31.PARAM_KEY = void 0;
var PARAM_KEY2 = "actions";
exports31.PARAM_KEY = PARAM_KEY2;
var ADDON_ID2 = "storybook/actions";
exports31.ADDON_ID = ADDON_ID2;
var PANEL_ID2 = "".concat(ADDON_ID2, "/panel");
exports31.PANEL_ID = PANEL_ID2;
var EVENT_ID = "".concat(ADDON_ID2, "/action-event");
exports31.EVENT_ID = EVENT_ID;
var CYCLIC_KEY = "$___storybook.isCyclic";
exports31.CYCLIC_KEY = CYCLIC_KEY;
var __export014;
var __export16;
var __export24;
var __export32;
var __export42;
if (Object.isExtensible(module31.exports)) {
  __export014 = module31.exports["CYCLIC_KEY"];
  __export16 = module31.exports["EVENT_ID"];
  __export24 = module31.exports["PANEL_ID"];
  __export32 = module31.exports["ADDON_ID"];
  __export42 = module31.exports["PARAM_KEY"];
}

// node_modules/@storybook/addon-actions/dist/cjs/containers/ActionLogger/index.js
var ActionLogger_exports2 = {};
__export(ActionLogger_exports2, {
  default: () => ActionLogger_default
});
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/index.js
var cjs_exports = {};
__export(cjs_exports, {
  ADDON_ID: () => __export32,
  CYCLIC_KEY: () => __export014,
  EVENT_ID: () => __export16,
  PANEL_ID: () => __export24,
  PARAM_KEY: () => __export42,
  action: () => __export016,
  actions: () => __export017,
  config: () => __export17,
  configureActions: () => __export015,
  decorate: () => __export019,
  decorateAction: () => __export18,
  withActions: () => __export018
});
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/preview/index.js
var preview_exports = {};
__export(preview_exports, {
  action: () => __export016,
  actions: () => __export017,
  config: () => __export17,
  configureActions: () => __export015,
  decorate: () => __export019,
  decorateAction: () => __export18,
  withActions: () => __export018
});
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/preview/withActions.js
var withActions_exports = {};
__export(withActions_exports, {
  withActions: () => __export018
});
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/preview/actions.js
var actions_exports = {};
__export(actions_exports, {
  actions: () => __export017
});
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/preview/configureActions.js
var configureActions_exports = {};
__export(configureActions_exports, {
  config: () => __export17,
  configureActions: () => __export015
});
init_define_process_env();
function $$cjs_default$$19(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module32 = { exports: {} };
var exports32 = module32.exports;
Object.defineProperty(exports32, "__esModule", {
  value: true
});
exports32.configureActions = exports32.config = void 0;
$$cjs_default$$19(es_object_assign_exports);
var config = {
  depth: 10,
  clearOnStoryChange: true,
  limit: 50
};
exports32.config = config;
var configureActions = function configureActions2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Object.assign(config, options);
};
exports32.configureActions = configureActions;
var __export015;
var __export17;
if (Object.isExtensible(module32.exports)) {
  __export015 = module32.exports["configureActions"];
  __export17 = module32.exports["config"];
}

// node_modules/@storybook/addon-actions/dist/cjs/preview/action.js
var action_exports = {};
__export(action_exports, {
  action: () => __export016
});
init_define_process_env();
import * as $cjs$_storybook_addons2 from "@storybook/addons";

// node_modules/uuid-browser/v4.js
var v4_exports = {};
__export(v4_exports, {
  default: () => v4_default
});
init_define_process_env();

// node_modules/uuid-browser/lib/bytesToUuid.js
var bytesToUuid_exports = {};
__export(bytesToUuid_exports, {
  default: () => bytesToUuid_default
});
init_define_process_env();
var module33 = { exports: {} };
var exports33 = module33.exports;
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 256).toString(16).substr(1);
}
var i;
function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}
module33.exports = bytesToUuid;
var bytesToUuid_default = module33.exports;

// node_modules/uuid-browser/lib/rng-browser.js
var rng_browser_exports = {};
__export(rng_browser_exports, {
  default: () => rng_browser_default
});
init_define_process_env();
var global2 = globalThis;
var module34 = { exports: {} };
var exports34 = module34.exports;
var rng;
var crypto = typeof global2 !== "undefined" && (global2.crypto || global2.msCrypto);
if (crypto && crypto.getRandomValues) {
  rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}
var rnds8;
if (!rng) {
  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 3) === 0)
        r = Math.random() * 4294967296;
      rnds[i] = r >>> ((i & 3) << 3) & 255;
    }
    return rnds;
  };
}
var rnds;
module34.exports = rng;
var rng_browser_default = module34.exports;

// node_modules/uuid-browser/v4.js
function $$cjs_default$$20(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module35 = { exports: {} };
var exports35 = module35.exports;
var rng2 = $$cjs_default$$20(rng_browser_exports);
var bytesToUuid2 = $$cjs_default$$20(bytesToUuid_exports);
function v4(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == "string") {
    buf = options == "binary" ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng2)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }
  return buf || bytesToUuid2(rnds);
}
module35.exports = v4;
var v4_default = module35.exports;

// node_modules/@storybook/addon-actions/dist/cjs/preview/action.js
function $$cjs_default$$21(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module36 = { exports: {} };
var exports36 = module36.exports;
Object.defineProperty(exports36, "__esModule", {
  value: true
});
exports36.action = action;
$$cjs_default$$21(es_object_assign_exports);
var _v = _interopRequireDefault9($$cjs_default$$21(v4_exports));
var _addons2 = $$cjs_default$$21($cjs$_storybook_addons2);
var _constants4 = $$cjs_default$$21(constants_exports2);
var _configureActions = $$cjs_default$$21(configureActions_exports);
function _interopRequireDefault9(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function action(name) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var actionOptions = Object.assign({}, _configureActions.config, options);
  var handler = function actionHandler() {
    var channel = _addons2.addons.getChannel();
    var id = (0, _v.default)();
    var minDepth = 5;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var normalizedArgs = args.length > 1 ? args : args[0];
    var actionDisplayToEmit = {
      id,
      count: 0,
      data: {
        name,
        args: normalizedArgs
      },
      options: Object.assign({}, actionOptions, {
        depth: minDepth + (actionOptions.depth || 3),
        allowFunction: actionOptions.allowFunction || false
      })
    };
    channel.emit(_constants4.EVENT_ID, actionDisplayToEmit);
  };
  return handler;
}
var __export016;
if (Object.isExtensible(module36.exports)) {
  __export016 = module36.exports["action"];
}

// empty:core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each_exports = {};
__export(web_dom_collections_for_each_exports, {
  default: () => web_dom_collections_for_each_default
});
init_define_process_env();
var web_dom_collections_for_each_default = {};

// node_modules/@storybook/addon-actions/dist/cjs/preview/actions.js
function $$cjs_default$$22(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module37 = { exports: {} };
var exports37 = module37.exports;
$$cjs_default$$22(es_symbol_exports);
$$cjs_default$$22(es_symbol_description_exports);
$$cjs_default$$22(es_object_to_string_exports);
$$cjs_default$$22(es_symbol_iterator_exports);
$$cjs_default$$22(es_string_iterator_exports);
$$cjs_default$$22(es_array_iterator_exports);
$$cjs_default$$22(web_dom_collections_iterator_exports);
$$cjs_default$$22(es_array_slice_exports);
$$cjs_default$$22(es_function_name_exports);
$$cjs_default$$22(es_array_from_exports);
Object.defineProperty(exports37, "__esModule", {
  value: true
});
exports37.actions = void 0;
$$cjs_default$$22(es_object_assign_exports);
$$cjs_default$$22(web_dom_collections_for_each_exports);
$$cjs_default$$22(es_object_keys_exports);
var _action = $$cjs_default$$22(action_exports);
var _configureActions2 = $$cjs_default$$22(configureActions_exports);
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
var actions = function actions2() {
  var options = _configureActions2.config;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var names = args;
  if (names.length === 1 && Array.isArray(names[0])) {
    var _names = names;
    var _names2 = _slicedToArray6(_names, 1);
    names = _names2[0];
  }
  if (names.length !== 1 && typeof names[names.length - 1] !== "string") {
    options = Object.assign({}, _configureActions2.config, names.pop());
  }
  var namesObject = names[0];
  if (names.length !== 1 || typeof namesObject === "string") {
    namesObject = {};
    names.forEach(function(name) {
      namesObject[name] = name;
    });
  }
  var actionsObject = {};
  Object.keys(namesObject).forEach(function(name) {
    actionsObject[name] = (0, _action.action)(namesObject[name], options);
  });
  return actionsObject;
};
exports37.actions = actions;
var __export017;
if (Object.isExtensible(module37.exports)) {
  __export017 = module37.exports["actions"];
}

// node_modules/@storybook/addon-actions/dist/cjs/preview/withActions.js
import * as $cjs$_storybook_addons3 from "@storybook/addons";

// node_modules/ts-dedent/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  dedent: () => dedent,
  default: () => esm_default
});
init_define_process_env();
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
        var _a, _b;
        return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value;
    if (typeof value === "string" && value.includes("\n")) {
      indentedValue = String(value).split("\n").map(function(str, i2) {
        return i2 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i + 1];
  });
  return string;
}
var esm_default = dedent;

// node_modules/util-deprecate/browser.js
var browser_exports2 = {};
__export(browser_exports2, {
  default: () => browser_default2
});
init_define_process_env();
var global3 = globalThis;
var module38 = { exports: {} };
var exports38 = module38.exports;
module38.exports = deprecate;
function deprecate(fn, msg) {
  if (config2("noDeprecation")) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config2("throwDeprecation")) {
        throw new Error(msg);
      } else if (config2("traceDeprecation")) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function config2(name) {
  try {
    if (!global3.localStorage)
      return false;
  } catch (_2) {
    return false;
  }
  var val = global3.localStorage[name];
  if (val == null)
    return false;
  return String(val).toLowerCase() === "true";
}
var browser_default2 = module38.exports;

// node_modules/@storybook/addon-actions/dist/cjs/preview/withActions.js
import * as $cjs$_storybook_client_api from "@storybook/client-api";

// node_modules/global/window.js
var window_exports = {};
__export(window_exports, {
  default: () => window_default
});
init_define_process_env();
var global4 = globalThis;
var module39 = { exports: {} };
var exports39 = module39.exports;
var win;
if (typeof window !== "undefined") {
  win = window;
} else if (typeof global4 !== "undefined") {
  win = global4;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}
module39.exports = win;
var window_default = module39.exports;

// empty:core-js/modules/es.regexp.exec.js
var es_regexp_exec_exports = {};
__export(es_regexp_exec_exports, {
  default: () => es_regexp_exec_default
});
init_define_process_env();
var es_regexp_exec_default = {};

// empty:core-js/modules/es.string.match.js
var es_string_match_exports = {};
__export(es_string_match_exports, {
  default: () => es_string_match_default
});
init_define_process_env();
var es_string_match_default = {};

// empty:core-js/modules/es.object.entries.js
var es_object_entries_exports = {};
__export(es_object_entries_exports, {
  default: () => es_object_entries_default
});
init_define_process_env();
var es_object_entries_default = {};

// empty:core-js/modules/es.object.freeze.js
var es_object_freeze_exports = {};
__export(es_object_freeze_exports, {
  default: () => es_object_freeze_default
});
init_define_process_env();
var es_object_freeze_default = {};

// node_modules/@storybook/addon-actions/dist/cjs/preview/withActions.js
function $$cjs_default$$23(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module40 = { exports: {} };
var exports40 = module40.exports;
$$cjs_default$$23(es_symbol_exports);
$$cjs_default$$23(es_symbol_description_exports);
$$cjs_default$$23(es_object_to_string_exports);
$$cjs_default$$23(es_symbol_iterator_exports);
$$cjs_default$$23(es_string_iterator_exports);
$$cjs_default$$23(es_array_iterator_exports);
$$cjs_default$$23(web_dom_collections_iterator_exports);
$$cjs_default$$23(es_array_slice_exports);
$$cjs_default$$23(es_function_name_exports);
$$cjs_default$$23(es_array_from_exports);
$$cjs_default$$23(es_object_freeze_exports);
Object.defineProperty(exports40, "__esModule", {
  value: true
});
exports40.withActions = void 0;
$$cjs_default$$23(es_array_map_exports);
$$cjs_default$$23(es_object_entries_exports);
$$cjs_default$$23(es_string_match_exports);
$$cjs_default$$23(es_regexp_exec_exports);
$$cjs_default$$23(es_array_concat_exports);
$$cjs_default$$23(web_dom_collections_for_each_exports);
var _global = _interopRequireDefault10($$cjs_default$$23(window_exports));
var _clientApi = $$cjs_default$$23($cjs$_storybook_client_api);
var _utilDeprecate = _interopRequireDefault10($$cjs_default$$23(browser_exports2));
var _tsDedent = _interopRequireDefault10($$cjs_default$$23(esm_exports2));
var _addons3 = $$cjs_default$$23($cjs$_storybook_addons3);
var _actions = $$cjs_default$$23(actions_exports);
var _constants5 = $$cjs_default$$23(constants_exports2);
var _templateObject;
function _interopRequireDefault10(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray8(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray4(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray8(arr);
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
var document2 = _global.default.document;
var Element3 = _global.default.Element;
var delegateEventSplitter = /^(\S+)\s*(.*)$/;
var isIE = Element3 != null && !Element3.prototype.matches;
var matchesMethod = isIE ? "msMatchesSelector" : "matches";
var root = document2 && document2.getElementById("root");
var hasMatchInAncestry = function hasMatchInAncestry2(element, selector) {
  if (element[matchesMethod](selector)) {
    return true;
  }
  var parent = element.parentElement;
  if (!parent) {
    return false;
  }
  return hasMatchInAncestry2(parent, selector);
};
var createHandlers = function createHandlers2(actionsFn) {
  for (var _len = arguments.length, handles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    handles[_key - 1] = arguments[_key];
  }
  var actionsObject = actionsFn.apply(void 0, handles);
  return Object.entries(actionsObject).map(function(_ref) {
    var _ref2 = _slicedToArray7(_ref, 2), key = _ref2[0], action2 = _ref2[1];
    var _key$match = key.match(delegateEventSplitter), _key$match2 = _slicedToArray7(_key$match, 3), _2 = _key$match2[0], eventName = _key$match2[1], selector = _key$match2[2];
    return {
      eventName,
      handler: function handler(e) {
        if (!selector || hasMatchInAncestry(e.target, selector)) {
          action2(e);
        }
      }
    };
  });
};
var applyEventHandlers = (0, _utilDeprecate.default)(function(actionsFn) {
  for (var _len2 = arguments.length, handles = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    handles[_key2 - 1] = arguments[_key2];
  }
  (0, _clientApi.useEffect)(function() {
    if (root != null) {
      var handlers = createHandlers.apply(void 0, [actionsFn].concat(handles));
      handlers.forEach(function(_ref3) {
        var eventName = _ref3.eventName, handler = _ref3.handler;
        return root.addEventListener(eventName, handler);
      });
      return function() {
        return handlers.forEach(function(_ref4) {
          var eventName = _ref4.eventName, handler = _ref4.handler;
          return root.removeEventListener(eventName, handler);
        });
      };
    }
    return void 0;
  }, [root, actionsFn, handles]);
}, (0, _tsDedent.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    withActions(options) is deprecated, please configure addon-actions using the addParameter api:\n\n    addParameters({\n      actions: {\n        handles: options\n      },\n    });\n  "]))));
var applyDeprecatedOptions = function applyDeprecatedOptions2(actionsFn, options) {
  if (options) {
    applyEventHandlers(actionsFn, options);
  }
};
var withActions = (0, _addons3.makeDecorator)({
  name: "withActions",
  parameterName: _constants5.PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: function wrapper(getStory, context, _ref5) {
    var parameters = _ref5.parameters, options = _ref5.options;
    applyDeprecatedOptions(_actions.actions, options);
    if (parameters && parameters.handles)
      applyEventHandlers.apply(void 0, [_actions.actions].concat(_toConsumableArray4(parameters.handles)));
    return getStory(context);
  }
});
exports40.withActions = withActions;
var __export018;
if (Object.isExtensible(module40.exports)) {
  __export018 = module40.exports["withActions"];
}

// node_modules/@storybook/addon-actions/dist/cjs/preview/decorateAction.js
var decorateAction_exports = {};
__export(decorateAction_exports, {
  decorate: () => __export019,
  decorateAction: () => __export18
});
init_define_process_env();
function $$cjs_default$$24(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module41 = { exports: {} };
var exports41 = module41.exports;
$$cjs_default$$24(es_array_slice_exports);
$$cjs_default$$24(es_object_freeze_exports);
Object.defineProperty(exports41, "__esModule", {
  value: true
});
exports41.decorate = exports41.decorateAction = void 0;
var _utilDeprecate2 = _interopRequireDefault11($$cjs_default$$24(browser_exports2));
var _tsDedent2 = _interopRequireDefault11($$cjs_default$$24(esm_exports2));
var _templateObject2;
var _templateObject22;
function _interopRequireDefault11(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _taggedTemplateLiteral2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var decorateAction = function decorateAction2(_decorators) {
  return (0, _utilDeprecate2.default)(function() {
  }, (0, _tsDedent2.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["\n    decorateAction is no longer supported as of Storybook 6.0.\n  "]))));
};
exports41.decorateAction = decorateAction;
var deprecatedCallback = (0, _utilDeprecate2.default)(function() {
}, "decorate.* is no longer supported as of Storybook 6.0.");
var decorate = function decorate2(_decorators) {
  return (0, _utilDeprecate2.default)(function() {
    return {
      action: deprecatedCallback,
      actions: deprecatedCallback,
      withActions: deprecatedCallback
    };
  }, (0, _tsDedent2.default)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral2(["\n    decorate is deprecated, please configure addon-actions using the addParameter api:\n      \n      addParameters({\n        actions: {\n          handles: options\n        },\n      });\n    "]))));
};
exports41.decorate = decorate;
var __export019;
var __export18;
if (Object.isExtensible(module41.exports)) {
  __export019 = module41.exports["decorate"];
  __export18 = module41.exports["decorateAction"];
}

// node_modules/@storybook/addon-actions/dist/cjs/preview/index.js
function $$cjs_default$$25(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module42 = { exports: {} };
var exports42 = module42.exports;
$$cjs_default$$25(web_dom_collections_for_each_exports);
$$cjs_default$$25(es_object_keys_exports);
Object.defineProperty(exports42, "__esModule", {
  value: true
});
var _action2 = $$cjs_default$$25(action_exports);
Object.keys(_action2).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports42 && exports42[key] === _action2[key])
    return;
  Object.defineProperty(exports42, key, {
    enumerable: true,
    get: function get() {
      return _action2[key];
    }
  });
});
var _actions2 = $$cjs_default$$25(actions_exports);
Object.keys(_actions2).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports42 && exports42[key] === _actions2[key])
    return;
  Object.defineProperty(exports42, key, {
    enumerable: true,
    get: function get() {
      return _actions2[key];
    }
  });
});
var _configureActions3 = $$cjs_default$$25(configureActions_exports);
Object.keys(_configureActions3).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports42 && exports42[key] === _configureActions3[key])
    return;
  Object.defineProperty(exports42, key, {
    enumerable: true,
    get: function get() {
      return _configureActions3[key];
    }
  });
});
var _decorateAction = $$cjs_default$$25(decorateAction_exports);
Object.keys(_decorateAction).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports42 && exports42[key] === _decorateAction[key])
    return;
  Object.defineProperty(exports42, key, {
    enumerable: true,
    get: function get() {
      return _decorateAction[key];
    }
  });
});
var _withActions = $$cjs_default$$25(withActions_exports);
Object.keys(_withActions).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports42 && exports42[key] === _withActions[key])
    return;
  Object.defineProperty(exports42, key, {
    enumerable: true,
    get: function get() {
      return _withActions[key];
    }
  });
});

// node_modules/@storybook/addon-actions/dist/cjs/models/index.js
var models_exports = {};
__markAsModule(models_exports);
init_define_process_env();
var $cjs$_HandlerFunction = __toModule(require_HandlerFunction());
var $cjs$_DecoratorFunction = __toModule(require_DecoratorFunction());
var $cjs$_ActionsMap = __toModule(require_ActionsMap());
var $cjs$_ActionOptions = __toModule(require_ActionOptions());
var $cjs$_ActionsFunction = __toModule(require_ActionsFunction());
var $cjs$_ActionDisplay = __toModule(require_ActionDisplay());
__reExport(models_exports, __toModule(require_ActionDisplay()));
__reExport(models_exports, __toModule(require_ActionsFunction()));
__reExport(models_exports, __toModule(require_ActionOptions()));
__reExport(models_exports, __toModule(require_ActionsMap()));
__reExport(models_exports, __toModule(require_DecoratorFunction()));
__reExport(models_exports, __toModule(require_HandlerFunction()));
function $$cjs_default$$26(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module43 = { exports: {} };
var exports43 = module43.exports;
$$cjs_default$$26(web_dom_collections_for_each_exports);
$$cjs_default$$26(es_object_keys_exports);
Object.defineProperty(exports43, "__esModule", {
  value: true
});
var _ActionDisplay = $$cjs_default$$26($cjs$_ActionDisplay);
Object.keys(_ActionDisplay).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports43 && exports43[key] === _ActionDisplay[key])
    return;
  Object.defineProperty(exports43, key, {
    enumerable: true,
    get: function get() {
      return _ActionDisplay[key];
    }
  });
});
var _ActionsFunction = $$cjs_default$$26($cjs$_ActionsFunction);
Object.keys(_ActionsFunction).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports43 && exports43[key] === _ActionsFunction[key])
    return;
  Object.defineProperty(exports43, key, {
    enumerable: true,
    get: function get() {
      return _ActionsFunction[key];
    }
  });
});
var _ActionOptions = $$cjs_default$$26($cjs$_ActionOptions);
Object.keys(_ActionOptions).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports43 && exports43[key] === _ActionOptions[key])
    return;
  Object.defineProperty(exports43, key, {
    enumerable: true,
    get: function get() {
      return _ActionOptions[key];
    }
  });
});
var _ActionsMap = $$cjs_default$$26($cjs$_ActionsMap);
Object.keys(_ActionsMap).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports43 && exports43[key] === _ActionsMap[key])
    return;
  Object.defineProperty(exports43, key, {
    enumerable: true,
    get: function get() {
      return _ActionsMap[key];
    }
  });
});
var _DecoratorFunction = $$cjs_default$$26($cjs$_DecoratorFunction);
Object.keys(_DecoratorFunction).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports43 && exports43[key] === _DecoratorFunction[key])
    return;
  Object.defineProperty(exports43, key, {
    enumerable: true,
    get: function get() {
      return _DecoratorFunction[key];
    }
  });
});
var _HandlerFunction = $$cjs_default$$26($cjs$_HandlerFunction);
Object.keys(_HandlerFunction).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports43 && exports43[key] === _HandlerFunction[key])
    return;
  Object.defineProperty(exports43, key, {
    enumerable: true,
    get: function get() {
      return _HandlerFunction[key];
    }
  });
});

// node_modules/@storybook/addon-actions/dist/cjs/index.js
__reExport(cjs_exports, models_exports);
function $$cjs_default$$27(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module44 = { exports: {} };
var exports44 = module44.exports;
$$cjs_default$$27(web_dom_collections_for_each_exports);
$$cjs_default$$27(es_object_keys_exports);
Object.defineProperty(exports44, "__esModule", {
  value: true
});
var _constants6 = $$cjs_default$$27(constants_exports2);
Object.keys(_constants6).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports44 && exports44[key] === _constants6[key])
    return;
  Object.defineProperty(exports44, key, {
    enumerable: true,
    get: function get() {
      return _constants6[key];
    }
  });
});
var _models = $$cjs_default$$27(models_exports);
Object.keys(_models).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports44 && exports44[key] === _models[key])
    return;
  Object.defineProperty(exports44, key, {
    enumerable: true,
    get: function get() {
      return _models[key];
    }
  });
});
var _preview = $$cjs_default$$27(preview_exports);
Object.keys(_preview).forEach(function(key) {
  if (key === "default" || key === "__esModule")
    return;
  if (key in exports44 && exports44[key] === _preview[key])
    return;
  Object.defineProperty(exports44, key, {
    enumerable: true,
    get: function get() {
      return _preview[key];
    }
  });
});
if (module44 && module44.hot && module44.hot.decline) {
  module44.hot.decline();
}

// node_modules/@storybook/addon-actions/dist/cjs/components/ActionLogger/index.js
var ActionLogger_exports = {};
__export(ActionLogger_exports, {
  ActionLogger: () => __export021,
  Wrapper: () => __export110
});
init_define_process_env();

// node_modules/@storybook/addon-actions/dist/cjs/components/ActionLogger/style.js
var style_exports = {};
__export(style_exports, {
  Action: () => __export25,
  Counter: () => __export19,
  InspectorContainer: () => __export020
});
init_define_process_env();

// node_modules/polished/dist/polished.esm.js
var polished_esm_exports = {};
__export(polished_esm_exports, {
  adjustHue: () => curriedAdjustHue,
  animation: () => animation,
  backgroundImages: () => backgroundImages,
  backgrounds: () => backgrounds,
  between: () => between,
  border: () => border,
  borderColor: () => borderColor,
  borderRadius: () => borderRadius,
  borderStyle: () => borderStyle,
  borderWidth: () => borderWidth,
  buttons: () => buttons,
  clearFix: () => clearFix,
  complement: () => complement,
  cover: () => cover,
  cssVar: () => cssVar,
  darken: () => curriedDarken,
  desaturate: () => curriedDesaturate,
  directionalProperty: () => directionalProperty,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  ellipsis: () => ellipsis,
  em: () => em,
  fluidRange: () => fluidRange,
  fontFace: () => fontFace,
  getContrast: () => getContrast,
  getLuminance: () => getLuminance,
  getValueAndUnit: () => getValueAndUnit,
  grayscale: () => grayscale,
  hiDPI: () => hiDPI,
  hideText: () => hideText,
  hideVisually: () => hideVisually,
  hsl: () => hsl,
  hslToColorString: () => hslToColorString,
  hsla: () => hsla,
  important: () => important,
  invert: () => invert,
  lighten: () => curriedLighten,
  linearGradient: () => linearGradient,
  margin: () => margin,
  math: () => math,
  meetsContrastGuidelines: () => meetsContrastGuidelines,
  mix: () => curriedMix,
  modularScale: () => modularScale,
  normalize: () => normalize,
  opacify: () => curriedOpacify,
  padding: () => padding,
  parseToHsl: () => parseToHsl,
  parseToRgb: () => parseToRgb,
  position: () => position,
  radialGradient: () => radialGradient,
  readableColor: () => readableColor,
  rem: () => rem,
  remToPx: () => remToPx,
  retinaImage: () => retinaImage,
  rgb: () => rgb,
  rgbToColorString: () => rgbToColorString,
  rgba: () => rgba,
  saturate: () => curriedSaturate,
  setHue: () => curriedSetHue,
  setLightness: () => curriedSetLightness,
  setSaturation: () => curriedSetSaturation,
  shade: () => curriedShade,
  size: () => size,
  stripUnit: () => stripUnit,
  textInputs: () => textInputs,
  timingFunctions: () => timingFunctions,
  tint: () => curriedTint,
  toColorString: () => toColorString,
  transitions: () => transitions,
  transparentize: () => curriedTransparentize,
  triangle: () => triangle,
  wordWrap: () => wordWrap
});
init_define_process_env();

// node_modules/@babel/runtime/helpers/esm/extends.js
init_define_process_env();
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_define_process_env();
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_define_process_env();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_define_process_env();
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf2(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
init_define_process_env();

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
init_define_process_env();
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}

// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
init_define_process_env();
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

// node_modules/@babel/runtime/helpers/esm/construct.js
init_define_process_env();

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
init_define_process_env();
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}

// node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct2()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf2(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper5);
    }
    function Wrapper5() {
      return _construct(Class2, arguments, _getPrototypeOf2(this).constructor);
    }
    Wrapper5.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper5,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf2(Wrapper5, Class2);
  };
  return _wrapNativeSuper(Class);
}

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
init_define_process_env();
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

// node_modules/polished/dist/polished.esm.js
function last() {
  var _ref;
  return _ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? void 0 : arguments[_ref];
}
function negation(a) {
  return -a;
}
function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function max() {
  return Math.max.apply(Math, arguments);
}
function min() {
  return Math.min.apply(Math, arguments);
}
function comma() {
  return Array.of.apply(Array, arguments);
}
var defaultSymbols = {
  symbols: {
    "*": {
      infix: {
        symbol: "*",
        f: multiplication,
        notation: "infix",
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: "*",
      regSymbol: "\\*"
    },
    "/": {
      infix: {
        symbol: "/",
        f: division,
        notation: "infix",
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: "/",
      regSymbol: "/"
    },
    "+": {
      infix: {
        symbol: "+",
        f: addition,
        notation: "infix",
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: "+",
        f: last,
        notation: "prefix",
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: "+",
      regSymbol: "\\+"
    },
    "-": {
      infix: {
        symbol: "-",
        f: subtraction,
        notation: "infix",
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: "-",
        f: negation,
        notation: "prefix",
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: "-",
      regSymbol: "-"
    },
    ",": {
      infix: {
        symbol: ",",
        f: comma,
        notation: "infix",
        precedence: 1,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: ",",
      regSymbol: ","
    },
    "(": {
      prefix: {
        symbol: "(",
        f: last,
        notation: "prefix",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: "(",
      regSymbol: "\\("
    },
    ")": {
      postfix: {
        symbol: ")",
        f: void 0,
        notation: "postfix",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: ")",
      regSymbol: "\\)"
    },
    min: {
      func: {
        symbol: "min",
        f: min,
        notation: "func",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: "min",
      regSymbol: "min\\b"
    },
    max: {
      func: {
        symbol: "max",
        f: max,
        notation: "func",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: "max",
      regSymbol: "max\\b"
    }
  }
};
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (true) {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized2(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var unitRegExp = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;
function mergeSymbolMaps(additionalSymbols) {
  var symbolMap = {};
  symbolMap.symbols = additionalSymbols ? _extends3({}, defaultSymbols.symbols, additionalSymbols.symbols) : _extends3({}, defaultSymbols.symbols);
  return symbolMap;
}
function exec(operators, values) {
  var _ref;
  var op = operators.pop();
  values.push(op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))));
  return op.precedence;
}
function calculate(expression, additionalSymbols) {
  var symbolMap = mergeSymbolMaps(additionalSymbols);
  var match;
  var operators = [symbolMap.symbols["("].prefix];
  var values = [];
  var pattern = new RegExp("\\d+(?:\\.\\d+)?|" + Object.keys(symbolMap.symbols).map(function(key) {
    return symbolMap.symbols[key];
  }).sort(function(a, b) {
    return b.symbol.length - a.symbol.length;
  }).map(function(val) {
    return val.regSymbol;
  }).join("|") + "|(\\S)", "g");
  pattern.lastIndex = 0;
  var afterValue = false;
  do {
    match = pattern.exec(expression);
    var _ref2 = match || [")", void 0], token = _ref2[0], bad = _ref2[1];
    var notNumber = symbolMap.symbols[token];
    var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
    var notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
    if (bad || (afterValue ? notAfterValue : notNewValue)) {
      throw new PolishedError(37, match ? match.index : expression.length, expression);
    }
    if (afterValue) {
      var curr = notNumber.postfix || notNumber.infix;
      do {
        var prev = operators[operators.length - 1];
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0)
          break;
      } while (exec(operators, values));
      afterValue = curr.notation === "postfix";
      if (curr.symbol !== ")") {
        operators.push(curr);
        if (afterValue)
          exec(operators, values);
      }
    } else if (notNumber) {
      operators.push(notNumber.prefix || notNumber.func);
      if (notNumber.func) {
        match = pattern.exec(expression);
        if (!match || match[0] !== "(") {
          throw new PolishedError(38, match ? match.index : expression.length, expression);
        }
      }
    } else {
      values.push(+token);
      afterValue = true;
    }
  } while (match && operators.length);
  if (operators.length) {
    throw new PolishedError(39, match ? match.index : expression.length, expression);
  } else if (match) {
    throw new PolishedError(40, match ? match.index : expression.length, expression);
  } else {
    return values.pop();
  }
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function math(formula, additionalSymbols) {
  var reversedFormula = reverseString(formula);
  var formulaMatch = reversedFormula.match(unitRegExp);
  if (formulaMatch && !formulaMatch.every(function(unit) {
    return unit === formulaMatch[0];
  })) {
    throw new PolishedError(41);
  }
  var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ""));
  return "" + calculate(cleanFormula, additionalSymbols) + (formulaMatch ? reverseString(formulaMatch[0]) : "");
}
var cssVariableRegex = /--[\S]*/g;
function cssVar(cssVariable, defaultValue) {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    throw new PolishedError(73);
  }
  var variableValue;
  if (typeof document !== "undefined" && document.documentElement !== null) {
    variableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
  }
  if (variableValue) {
    return variableValue.trim();
  } else if (defaultValue) {
    return defaultValue;
  }
  throw new PolishedError(74);
}
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var positionMap$1 = ["Top", "Right", "Bottom", "Left"];
function generateProperty(property, position2) {
  if (!property)
    return position2.toLowerCase();
  var splitProperty = property.split("-");
  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position2);
    return splitProperty.reduce(function(acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }
  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position2 + "$2");
  return property === joinedProperty ? "" + property + position2 : joinedProperty;
}
function generateStyles(property, valuesWithDefaults) {
  var styles = {};
  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap$1[i])] = valuesWithDefaults[i];
    }
  }
  return styles;
}
function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  var firstValue = values[0], _values$ = values[1], secondValue = _values$ === void 0 ? firstValue : _values$, _values$2 = values[2], thirdValue = _values$2 === void 0 ? firstValue : _values$2, _values$3 = values[3], fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}
function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix;
}
var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function stripUnit(value) {
  if (typeof value !== "string")
    return value;
  var matchedValue = value.match(cssRegex$1);
  return matchedValue ? parseFloat(value) : value;
}
var pxtoFactory = function pxtoFactory2(to) {
  return function(pxval, base2) {
    if (base2 === void 0) {
      base2 = "16px";
    }
    var newPxval = pxval;
    var newBase = base2;
    if (typeof pxval === "string") {
      if (!endsWith(pxval, "px")) {
        throw new PolishedError(69, to, pxval);
      }
      newPxval = stripUnit(pxval);
    }
    if (typeof base2 === "string") {
      if (!endsWith(base2, "px")) {
        throw new PolishedError(70, to, base2);
      }
      newBase = stripUnit(base2);
    }
    if (typeof newPxval === "string") {
      throw new PolishedError(71, pxval, to);
    }
    if (typeof newBase === "string") {
      throw new PolishedError(72, base2, to);
    }
    return "" + newPxval / newBase + to;
  };
};
var em = /* @__PURE__ */ pxtoFactory("em");
var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function getValueAndUnit(value) {
  if (typeof value !== "string")
    return [value, ""];
  var matchedValue = value.match(cssRegex);
  if (matchedValue)
    return [parseFloat(value), matchedValue[2]];
  return [value, void 0];
}
function important(styleBlock, rules) {
  if (typeof styleBlock !== "object" || styleBlock === null) {
    throw new PolishedError(75, typeof styleBlock);
  }
  var newStyleBlock = {};
  Object.keys(styleBlock).forEach(function(key) {
    if (typeof styleBlock[key] === "object" && styleBlock[key] !== null) {
      newStyleBlock[key] = important(styleBlock[key], rules);
    } else if (!rules || rules && (rules === key || rules.indexOf(key) >= 0)) {
      newStyleBlock[key] = styleBlock[key] + " !important";
    } else {
      newStyleBlock[key] = styleBlock[key];
    }
  });
  return newStyleBlock;
}
var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};
function getRatio(ratioName) {
  return ratioNames[ratioName];
}
function modularScale(steps, base2, ratio) {
  if (base2 === void 0) {
    base2 = "1em";
  }
  if (ratio === void 0) {
    ratio = 1.333;
  }
  if (typeof steps !== "number") {
    throw new PolishedError(42);
  }
  if (typeof ratio === "string" && !ratioNames[ratio]) {
    throw new PolishedError(43);
  }
  var _ref = typeof base2 === "string" ? getValueAndUnit(base2) : [base2, ""], realBase = _ref[0], unit = _ref[1];
  var realRatio = typeof ratio === "string" ? getRatio(ratio) : ratio;
  if (typeof realBase === "string") {
    throw new PolishedError(44, base2);
  }
  return "" + realBase * Math.pow(realRatio, steps) + (unit || "");
}
var rem = /* @__PURE__ */ pxtoFactory("rem");
var defaultFontSize = 16;
function convertBase(base2) {
  var deconstructedValue = getValueAndUnit(base2);
  if (deconstructedValue[1] === "px") {
    return parseFloat(base2);
  }
  if (deconstructedValue[1] === "%") {
    return parseFloat(base2) / 100 * defaultFontSize;
  }
  throw new PolishedError(78, deconstructedValue[1]);
}
function getBaseFromDoc() {
  if (typeof document !== "undefined" && document.documentElement !== null) {
    var rootFontSize = getComputedStyle(document.documentElement).fontSize;
    return rootFontSize ? convertBase(rootFontSize) : defaultFontSize;
  }
  return defaultFontSize;
}
function remToPx(value, base2) {
  var deconstructedValue = getValueAndUnit(value);
  if (deconstructedValue[1] !== "rem" && deconstructedValue[1] !== "") {
    throw new PolishedError(77, deconstructedValue[1]);
  }
  var newBase = base2 ? convertBase(base2) : getBaseFromDoc();
  return deconstructedValue[0] * newBase + "px";
}
var functionsMap$3 = {
  back: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
  circ: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
  cubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
  expo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
  quad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
  quart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
  quint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
  sine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)"
};
function easeIn(functionName) {
  return functionsMap$3[functionName.toLowerCase().trim()];
}
var functionsMap$2 = {
  back: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
  circ: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
  cubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
  expo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
  quad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
  quart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
  quint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
  sine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
};
function easeInOut(functionName) {
  return functionsMap$2[functionName.toLowerCase().trim()];
}
var functionsMap$1 = {
  back: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
  cubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
  circ: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
  expo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
  quad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
  quart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
  quint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
  sine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)"
};
function easeOut(functionName) {
  return functionsMap$1[functionName.toLowerCase().trim()];
}
function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = "320px";
  }
  if (maxScreen === void 0) {
    maxScreen = "1200px";
  }
  var _getValueAndUnit = getValueAndUnit(fromSize), unitlessFromSize = _getValueAndUnit[0], fromSizeUnit = _getValueAndUnit[1];
  var _getValueAndUnit2 = getValueAndUnit(toSize), unitlessToSize = _getValueAndUnit2[0], toSizeUnit = _getValueAndUnit2[1];
  var _getValueAndUnit3 = getValueAndUnit(minScreen), unitlessMinScreen = _getValueAndUnit3[0], minScreenUnit = _getValueAndUnit3[1];
  var _getValueAndUnit4 = getValueAndUnit(maxScreen), unitlessMaxScreen = _getValueAndUnit4[0], maxScreenUnit = _getValueAndUnit4[1];
  if (typeof unitlessMinScreen !== "number" || typeof unitlessMaxScreen !== "number" || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new PolishedError(47);
  }
  if (typeof unitlessFromSize !== "number" || typeof unitlessToSize !== "number" || fromSizeUnit !== toSizeUnit) {
    throw new PolishedError(48);
  }
  if (fromSizeUnit !== minScreenUnit || toSizeUnit !== maxScreenUnit) {
    throw new PolishedError(76);
  }
  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base2 = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base2.toFixed(2) + (fromSizeUnit || "") + " + " + (100 * slope).toFixed(2) + "vw)";
}
function clearFix(parent) {
  var _ref;
  if (parent === void 0) {
    parent = "&";
  }
  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: "both",
    content: '""',
    display: "table"
  }, _ref;
}
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return {
    position: "absolute",
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}
function ellipsis(width, lines) {
  if (lines === void 0) {
    lines = 1;
  }
  var styles = {
    display: "inline-block",
    maxWidth: width || "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  };
  return lines > 1 ? _extends3({}, styles, {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lines,
    display: "-webkit-box",
    whiteSpace: "normal"
  }) : styles;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray9(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray9(o, minLen);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = "320px";
  }
  if (maxScreen === void 0) {
    maxScreen = "1200px";
  }
  if (!Array.isArray(cssProp) && typeof cssProp !== "object" || cssProp === null) {
    throw new PolishedError(49);
  }
  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};
    for (var _iterator = _createForOfIteratorHelperLoose(cssProp), _step; !(_step = _iterator()).done; ) {
      var _extends22, _extends32;
      var obj = _step.value;
      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new PolishedError(50);
      }
      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = _extends3({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends22 = {}, _extends22[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends22));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = _extends3({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends32 = {}, _extends32[obj.prop] = obj.toSize, _extends32));
    }
    return _extends3({}, fallbacks, mediaQueries);
  } else {
    var _ref, _ref2, _ref3;
    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new PolishedError(51);
    }
    return _ref3 = {}, _ref3[cssProp.prop] = cssProp.fromSize, _ref3["@media (min-width: " + minScreen + ")"] = (_ref = {}, _ref[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref), _ref3["@media (min-width: " + maxScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = cssProp.toSize, _ref2), _ref3;
  }
}
var dataURIRegex = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;
var formatHintMap = {
  woff: "woff",
  woff2: "woff2",
  ttf: "truetype",
  otf: "opentype",
  eot: "embedded-opentype",
  svg: "svg",
  svgz: "svg"
};
function generateFormatHint(format, formatHint) {
  if (!formatHint)
    return "";
  return ' format("' + formatHintMap[format] + '")';
}
function isDataURI(fontFilePath) {
  return !!fontFilePath.replace(/\s+/g, " ").match(dataURIRegex);
}
function generateFileReferences(fontFilePath, fileFormats, formatHint) {
  if (isDataURI(fontFilePath)) {
    return 'url("' + fontFilePath + '")' + generateFormatHint(fileFormats[0], formatHint);
  }
  var fileFontReferences = fileFormats.map(function(format) {
    return 'url("' + fontFilePath + "." + format + '")' + generateFormatHint(format, formatHint);
  });
  return fileFontReferences.join(", ");
}
function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function(font) {
    return 'local("' + font + '")';
  });
  return localFontReferences.join(", ");
}
function generateSources(fontFilePath, localFonts, fileFormats, formatHint) {
  var fontReferences = [];
  if (localFonts)
    fontReferences.push(generateLocalReferences(localFonts));
  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats, formatHint));
  }
  return fontReferences.join(", ");
}
function fontFace(_ref) {
  var fontFamily = _ref.fontFamily, fontFilePath = _ref.fontFilePath, fontStretch = _ref.fontStretch, fontStyle = _ref.fontStyle, fontVariant = _ref.fontVariant, fontWeight = _ref.fontWeight, _ref$fileFormats = _ref.fileFormats, fileFormats = _ref$fileFormats === void 0 ? ["eot", "woff2", "woff", "ttf", "svg"] : _ref$fileFormats, _ref$formatHint = _ref.formatHint, formatHint = _ref$formatHint === void 0 ? false : _ref$formatHint, _ref$localFonts = _ref.localFonts, localFonts = _ref$localFonts === void 0 ? [fontFamily] : _ref$localFonts, unicodeRange = _ref.unicodeRange, fontDisplay = _ref.fontDisplay, fontVariationSettings = _ref.fontVariationSettings, fontFeatureSettings = _ref.fontFeatureSettings;
  if (!fontFamily)
    throw new PolishedError(55);
  if (!fontFilePath && !localFonts) {
    throw new PolishedError(52);
  }
  if (localFonts && !Array.isArray(localFonts)) {
    throw new PolishedError(53);
  }
  if (!Array.isArray(fileFormats)) {
    throw new PolishedError(54);
  }
  var fontFaceDeclaration = {
    "@font-face": {
      fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats, formatHint),
      unicodeRange,
      fontStretch,
      fontStyle,
      fontVariant,
      fontWeight,
      fontDisplay,
      fontVariationSettings,
      fontFeatureSettings
    }
  };
  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}
function hideText() {
  return {
    textIndent: "101%",
    overflow: "hidden",
    whiteSpace: "nowrap"
  };
}
function hideVisually() {
  return {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  };
}
function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }
  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}
function constructGradientValue(literals) {
  var template2 = "";
  for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }
  for (var i = 0; i < literals.length; i += 1) {
    template2 += literals[i];
    if (i === substitutions.length - 1 && substitutions[i]) {
      var definedValues = substitutions.filter(function(substitute) {
        return !!substitute;
      });
      if (definedValues.length > 1) {
        template2 = template2.slice(0, -1);
        template2 += ", " + substitutions[i];
      } else if (definedValues.length === 1) {
        template2 += "" + substitutions[i];
      }
    } else if (substitutions[i]) {
      template2 += substitutions[i] + " ";
    }
  }
  return template2.trim();
}
var _templateObject$1;
function linearGradient(_ref) {
  var colorStops = _ref.colorStops, fallback = _ref.fallback, _ref$toDirection = _ref.toDirection, toDirection = _ref$toDirection === void 0 ? "" : _ref$toDirection;
  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(56);
  }
  return {
    backgroundColor: fallback || colorStops[0].replace(/,\s+/g, ",").split(" ")[0].replace(/,(?=\S)/g, ", "),
    backgroundImage: constructGradientValue(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["linear-gradient(", "", ")"])), toDirection, colorStops.join(", ").replace(/,(?=\S)/g, ", "))
  };
}
function normalize() {
  var _ref;
  return [(_ref = {
    html: {
      lineHeight: "1.15",
      textSizeAdjust: "100%"
    },
    body: {
      margin: "0"
    },
    main: {
      display: "block"
    },
    h1: {
      fontSize: "2em",
      margin: "0.67em 0"
    },
    hr: {
      boxSizing: "content-box",
      height: "0",
      overflow: "visible"
    },
    pre: {
      fontFamily: "monospace, monospace",
      fontSize: "1em"
    },
    a: {
      backgroundColor: "transparent"
    },
    "abbr[title]": {
      borderBottom: "none",
      textDecoration: "underline"
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: "bolder"
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  }, _ref.small = {
    fontSize: "80%"
  }, _ref["sub,\n    sup"] = {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline"
  }, _ref.sub = {
    bottom: "-0.25em"
  }, _ref.sup = {
    top: "-0.5em"
  }, _ref.img = {
    borderStyle: "none"
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: "0"
  }, _ref["button,\n    input"] = {
    overflow: "visible"
  }, _ref["button,\n    select"] = {
    textTransform: "none"
  }, _ref['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]'] = {
    WebkitAppearance: "button"
  }, _ref['button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner'] = {
    borderStyle: "none",
    padding: "0"
  }, _ref['button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring'] = {
    outline: "1px dotted ButtonText"
  }, _ref.fieldset = {
    padding: "0.35em 0.625em 0.75em"
  }, _ref.legend = {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: "0",
    whiteSpace: "normal"
  }, _ref.progress = {
    verticalAlign: "baseline"
  }, _ref.textarea = {
    overflow: "auto"
  }, _ref['[type="checkbox"],\n    [type="radio"]'] = {
    boxSizing: "border-box",
    padding: "0"
  }, _ref['[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button'] = {
    height: "auto"
  }, _ref['[type="search"]'] = {
    WebkitAppearance: "textfield",
    outlineOffset: "-2px"
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: "none"
  }, _ref["::-webkit-file-upload-button"] = {
    WebkitAppearance: "button",
    font: "inherit"
  }, _ref.details = {
    display: "block"
  }, _ref.summary = {
    display: "list-item"
  }, _ref.template = {
    display: "none"
  }, _ref["[hidden]"] = {
    display: "none"
  }, _ref), {
    "abbr[title]": {
      textDecoration: "underline dotted"
    }
  }];
}
var _templateObject3;
function radialGradient(_ref) {
  var colorStops = _ref.colorStops, _ref$extent = _ref.extent, extent = _ref$extent === void 0 ? "" : _ref$extent, fallback = _ref.fallback, _ref$position = _ref.position, position2 = _ref$position === void 0 ? "" : _ref$position, _ref$shape = _ref.shape, shape = _ref$shape === void 0 ? "" : _ref$shape;
  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(57);
  }
  return {
    backgroundColor: fallback || colorStops[0].split(" ")[0],
    backgroundImage: constructGradientValue(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["radial-gradient(", "", "", "", ")"])), position2, shape, extent, colorStops.join(", "))
  };
}
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;
  if (extension === void 0) {
    extension = "png";
  }
  if (retinaSuffix === void 0) {
    retinaSuffix = "_2x";
  }
  if (!filename) {
    throw new PolishedError(58);
  }
  var ext = extension.replace(/^\./, "");
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = _extends3({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize
  } : {}), _ref;
}
var functionsMap = {
  easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
  easeInCirc: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
  easeInCubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
  easeInExpo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
  easeInQuad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
  easeInQuart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
  easeInQuint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
  easeInSine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
  easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
  easeOutCubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
  easeOutCirc: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
  easeOutExpo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
  easeOutQuad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
  easeOutQuart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
  easeOutQuint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
  easeOutSine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
  easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
  easeInOutCirc: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
  easeInOutCubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
  easeInOutExpo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
  easeInOutQuad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
  easeInOutQuart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
  easeInOutQuint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
  easeInOutSine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
};
function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}
var getBorderWidth = function getBorderWidth2(pointingDirection, height, width) {
  var fullWidth = "" + width[0] + (width[1] || "");
  var halfWidth = "" + width[0] / 2 + (width[1] || "");
  var fullHeight = "" + height[0] + (height[1] || "");
  var halfHeight = "" + height[0] / 2 + (height[1] || "");
  switch (pointingDirection) {
    case "top":
      return "0 " + halfWidth + " " + fullHeight + " " + halfWidth;
    case "topLeft":
      return fullWidth + " " + fullHeight + " 0 0";
    case "left":
      return halfHeight + " " + fullWidth + " " + halfHeight + " 0";
    case "bottomLeft":
      return fullWidth + " 0 0 " + fullHeight;
    case "bottom":
      return fullHeight + " " + halfWidth + " 0 " + halfWidth;
    case "bottomRight":
      return "0 0 " + fullWidth + " " + fullHeight;
    case "right":
      return halfHeight + " 0 " + halfHeight + " " + fullWidth;
    case "topRight":
    default:
      return "0 " + fullWidth + " " + fullHeight + " 0";
  }
};
var getBorderColor = function getBorderColor2(pointingDirection, foregroundColor) {
  switch (pointingDirection) {
    case "top":
    case "bottomRight":
      return {
        borderBottomColor: foregroundColor
      };
    case "right":
    case "bottomLeft":
      return {
        borderLeftColor: foregroundColor
      };
    case "bottom":
    case "topLeft":
      return {
        borderTopColor: foregroundColor
      };
    case "left":
    case "topRight":
      return {
        borderRightColor: foregroundColor
      };
    default:
      throw new PolishedError(59);
  }
};
function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection, height = _ref.height, width = _ref.width, foregroundColor = _ref.foregroundColor, _ref$backgroundColor = _ref.backgroundColor, backgroundColor = _ref$backgroundColor === void 0 ? "transparent" : _ref$backgroundColor;
  var widthAndUnit = getValueAndUnit(width);
  var heightAndUnit = getValueAndUnit(height);
  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new PolishedError(60);
  }
  return _extends3({
    width: "0",
    height: "0",
    borderColor: backgroundColor
  }, getBorderColor(pointingDirection, foregroundColor), {
    borderStyle: "solid",
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit)
  });
}
function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = "break-word";
  }
  var wordBreak = wrap === "break-word" ? "break-all" : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak
  };
}
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }
  if (saturation === 0) {
    return convert(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color) {
  if (typeof color !== "string")
    return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max2 = Math.max(red, green, blue);
  var min2 = Math.min(red, green, blue);
  var lightness = (max2 + min2) / 2;
  if (max2 === min2) {
    if (color.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max2 - min2;
  var saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function reduceHexValue2(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value, saturation, lightness) {
  if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value, green, blue) {
  if (typeof value === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb2(color) {
  return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
};
var isRgba = function isRgba2(color) {
  return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && typeof color.alpha === "number";
};
var isHsl = function isHsl2(color) {
  return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
};
var isHsla = function isHsla2(color) {
  return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && typeof color.alpha === "number";
};
function toColorString(color) {
  if (typeof color !== "object")
    throw new PolishedError(8);
  if (isRgba(color))
    return rgba(color);
  if (isRgb(color))
    return rgb(color);
  if (isHsla(color))
    return hsla(color);
  if (isHsl(color))
    return hsl(color);
  throw new PolishedError(8);
}
function curried(f, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}
function curry(f) {
  return curried(f, f.length, []);
}
function adjustHue(degree, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends3({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
}
var curriedAdjustHue = /* @__PURE__ */ curry(adjustHue);
function complement(color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends3({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function darken(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends3({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
var curriedDarken = /* @__PURE__ */ curry(darken);
function desaturate(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends3({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}
var curriedDesaturate = /* @__PURE__ */ curry(desaturate);
function getLuminance(color) {
  if (color === "transparent")
    return 0;
  var rgbColor = parseToRgb(color);
  var _Object$keys$map = Object.keys(rgbColor).map(function(key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }), r = _Object$keys$map[0], g = _Object$keys$map[1], b = _Object$keys$map[2];
  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}
function getContrast(color1, color2) {
  var luminance1 = getLuminance(color1);
  var luminance2 = getLuminance(color2);
  return parseFloat((luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05)).toFixed(2));
}
function grayscale(color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends3({}, parseToHsl(color), {
    saturation: 0
  }));
}
function hslToColorString(color) {
  if (typeof color === "object" && typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number") {
    if (color.alpha && typeof color.alpha === "number") {
      return hsla({
        hue: color.hue,
        saturation: color.saturation,
        lightness: color.lightness,
        alpha: color.alpha
      });
    }
    return hsl({
      hue: color.hue,
      saturation: color.saturation,
      lightness: color.lightness
    });
  }
  throw new PolishedError(45);
}
function invert(color) {
  if (color === "transparent")
    return color;
  var value = parseToRgb(color);
  return toColorString(_extends3({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}
function lighten(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends3({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten = /* @__PURE__ */ curry(lighten);
function meetsContrastGuidelines(color1, color2) {
  var contrastRatio = getContrast(color1, color2);
  return {
    AA: contrastRatio >= 4.5,
    AALarge: contrastRatio >= 3,
    AAA: contrastRatio >= 7,
    AAALarge: contrastRatio >= 4.5
  };
}
function mix(weight, color, otherColor) {
  if (color === "transparent")
    return otherColor;
  if (otherColor === "transparent")
    return color;
  if (weight === 0)
    return otherColor;
  var parsedColor1 = parseToRgb(color);
  var color1 = _extends3({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1
  });
  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends3({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1
  });
  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * (parseFloat(weight) / 1) + color2.alpha * (1 - parseFloat(weight) / 1)
  };
  return rgba(mixedColor);
}
var curriedMix = /* @__PURE__ */ curry(mix);
function opacify(amount, color) {
  if (color === "transparent")
    return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends3({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedOpacify = /* @__PURE__ */ curry(opacify);
var defaultReturnIfLightColor = "#000";
var defaultReturnIfDarkColor = "#fff";
function readableColor(color, returnIfLightColor, returnIfDarkColor, strict) {
  if (returnIfLightColor === void 0) {
    returnIfLightColor = defaultReturnIfLightColor;
  }
  if (returnIfDarkColor === void 0) {
    returnIfDarkColor = defaultReturnIfDarkColor;
  }
  if (strict === void 0) {
    strict = true;
  }
  var isColorLight = getLuminance(color) > 0.179;
  var preferredReturnColor = isColorLight ? returnIfLightColor : returnIfDarkColor;
  if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
    return preferredReturnColor;
  }
  return isColorLight ? defaultReturnIfLightColor : defaultReturnIfDarkColor;
}
function rgbToColorString(color) {
  if (typeof color === "object" && typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number") {
    if (typeof color.alpha === "number") {
      return rgba({
        red: color.red,
        green: color.green,
        blue: color.blue,
        alpha: color.alpha
      });
    }
    return rgb({
      red: color.red,
      green: color.green,
      blue: color.blue
    });
  }
  throw new PolishedError(46);
}
function saturate(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends3({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}
var curriedSaturate = /* @__PURE__ */ curry(saturate);
function setHue(hue, color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends3({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
}
var curriedSetHue = /* @__PURE__ */ curry(setHue);
function setLightness(lightness, color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends3({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
}
var curriedSetLightness = /* @__PURE__ */ curry(setLightness);
function setSaturation(saturation, color) {
  if (color === "transparent")
    return color;
  return toColorString(_extends3({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
}
var curriedSetSaturation = /* @__PURE__ */ curry(setSaturation);
function shade(percentage, color) {
  if (color === "transparent")
    return color;
  return curriedMix(parseFloat(percentage), "rgb(0, 0, 0)", color);
}
var curriedShade = /* @__PURE__ */ curry(shade);
function tint(percentage, color) {
  if (color === "transparent")
    return color;
  return curriedMix(parseFloat(percentage), "rgb(255, 255, 255)", color);
}
var curriedTint = /* @__PURE__ */ curry(tint);
function transparentize(amount, color) {
  if (color === "transparent")
    return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends3({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = /* @__PURE__ */ curry(transparentize);
function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var multiMode = Array.isArray(args[0]);
  if (!multiMode && args.length > 8) {
    throw new PolishedError(64);
  }
  var code = args.map(function(arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new PolishedError(65);
    }
    if (Array.isArray(arg) && arg.length > 8) {
      throw new PolishedError(66);
    }
    return Array.isArray(arg) ? arg.join(" ") : arg;
  }).join(", ");
  return {
    animation: code
  };
}
function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }
  return {
    backgroundImage: properties.join(", ")
  };
}
function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }
  return {
    background: properties.join(", ")
  };
}
var sideMap = ["top", "right", "bottom", "left"];
function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  if (typeof sideKeyword === "string" && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;
    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}
function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return directionalProperty.apply(void 0, ["borderColor"].concat(values));
}
function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);
  if (!radius && radius !== 0) {
    throw new PolishedError(62);
  }
  if (uppercaseSide === "Top" || uppercaseSide === "Bottom") {
    var _ref;
    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }
  if (uppercaseSide === "Left" || uppercaseSide === "Right") {
    var _ref2;
    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }
  throw new PolishedError(63);
}
function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return directionalProperty.apply(void 0, ["borderStyle"].concat(values));
}
function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return directionalProperty.apply(void 0, ["borderWidth"].concat(values));
}
function generateSelectors(template2, state) {
  var stateSuffix = state ? ":" + state : "";
  return template2(stateSuffix);
}
function statefulSelectors(states, template2, stateMap2) {
  if (!template2)
    throw new PolishedError(67);
  if (states.length === 0)
    return generateSelectors(template2, null);
  var selectors = [];
  for (var i = 0; i < states.length; i += 1) {
    if (stateMap2 && stateMap2.indexOf(states[i]) < 0) {
      throw new PolishedError(68);
    }
    selectors.push(generateSelectors(template2, states[i]));
  }
  selectors = selectors.join(",");
  return selectors;
}
var stateMap$1 = [void 0, null, "active", "focus", "hover"];
function template$1(state) {
  return "button" + state + ',\n  input[type="button"]' + state + ',\n  input[type="reset"]' + state + ',\n  input[type="submit"]' + state;
}
function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }
  return statefulSelectors(states, template$1, stateMap$1);
}
function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return directionalProperty.apply(void 0, ["margin"].concat(values));
}
function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return directionalProperty.apply(void 0, ["padding"].concat(values));
}
var positionMap = ["absolute", "fixed", "relative", "static", "sticky"];
function position(firstValue) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  if (positionMap.indexOf(firstValue) >= 0 && firstValue) {
    return _extends3({}, directionalProperty.apply(void 0, [""].concat(values)), {
      position: firstValue
    });
  } else {
    return directionalProperty.apply(void 0, ["", firstValue].concat(values));
  }
}
function size(height, width) {
  if (width === void 0) {
    width = height;
  }
  return {
    height,
    width
  };
}
var stateMap = [void 0, null, "active", "focus", "hover"];
function template(state) {
  return 'input[type="color"]' + state + ',\n    input[type="date"]' + state + ',\n    input[type="datetime"]' + state + ',\n    input[type="datetime-local"]' + state + ',\n    input[type="email"]' + state + ',\n    input[type="month"]' + state + ',\n    input[type="number"]' + state + ',\n    input[type="password"]' + state + ',\n    input[type="search"]' + state + ',\n    input[type="tel"]' + state + ',\n    input[type="text"]' + state + ',\n    input[type="time"]' + state + ',\n    input[type="url"]' + state + ',\n    input[type="week"]' + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }
  return statefulSelectors(states, template, stateMap);
}
function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }
  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];
    if (typeof value !== "string") {
      throw new PolishedError(61);
    }
    var transitionsString = properties[0].map(function(property) {
      return property + " " + value;
    }).join(", ");
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(", ")
    };
  }
}

// node_modules/@storybook/addon-actions/dist/cjs/components/ActionLogger/style.js
import * as $cjs$_storybook_theming11 from "@storybook/theming";
function $$cjs_default$$28(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module45 = { exports: {} };
var exports45 = module45.exports;
Object.defineProperty(exports45, "__esModule", {
  value: true
});
exports45.InspectorContainer = exports45.Counter = exports45.Action = void 0;
$$cjs_default$$28(es_string_bold_exports);
var _theming11 = $$cjs_default$$28($cjs$_storybook_theming11);
var _polished = $$cjs_default$$28(polished_esm_exports);
var Action = _theming11.styled.div({
  display: "flex",
  padding: 0,
  borderLeft: "5px solid transparent",
  borderBottom: "1px solid transparent",
  transition: "all 0.1s",
  alignItems: "flex-start",
  whiteSpace: "pre"
});
exports45.Action = Action;
var Counter = _theming11.styled.div(function(_ref) {
  var theme2 = _ref.theme;
  return {
    backgroundColor: (0, _polished.opacify)(0.5, theme2.appBorderColor),
    color: theme2.color.inverseText,
    fontSize: theme2.typography.size.s1,
    fontWeight: theme2.typography.weight.bold,
    lineHeight: 1,
    padding: "1px 5px",
    borderRadius: 20,
    margin: "2px 0px"
  };
});
exports45.Counter = Counter;
var InspectorContainer = _theming11.styled.div({
  flex: 1,
  padding: "0 0 0 5px"
});
exports45.InspectorContainer = InspectorContainer;
var __export020;
var __export19;
var __export25;
if (Object.isExtensible(module45.exports)) {
  __export020 = module45.exports["InspectorContainer"];
  __export19 = module45.exports["Counter"];
  __export25 = module45.exports["Action"];
}

// node_modules/@storybook/addon-actions/dist/cjs/components/ActionLogger/index.js
import * as $cjs$_storybook_components6 from "@storybook/components";

// node_modules/react-inspector/dist/es/react-inspector.js
var react_inspector_exports = {};
__export(react_inspector_exports, {
  DOMInspector: () => DOMInspector$1,
  Inspector: () => Inspector,
  ObjectInspector: () => ObjectInspector$1,
  ObjectLabel: () => ObjectLabel,
  ObjectName: () => ObjectName,
  ObjectPreview: () => ObjectPreview,
  ObjectRootLabel: () => ObjectRootLabel,
  ObjectValue: () => ObjectValue,
  TableInspector: () => TableInspector$1,
  chromeDark: () => theme$1,
  chromeLight: () => theme,
  default: () => react_inspector_default
});
init_define_process_env();
import React5, { createContext, useMemo, useContext, memo, Children, useCallback, useState, useLayoutEffect } from "react";

// node_modules/prop-types/index.js
init_define_process_env();

// node_modules/prop-types/factoryWithThrowingShims.js
var factoryWithThrowingShims_exports = {};
__export(factoryWithThrowingShims_exports, {
  default: () => factoryWithThrowingShims_default
});
init_define_process_env();

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var ReactPropTypesSecret_exports = {};
__export(ReactPropTypesSecret_exports, {
  default: () => ReactPropTypesSecret_default
});
init_define_process_env();
var module46 = { exports: {} };
var exports46 = module46.exports;
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module46.exports = ReactPropTypesSecret;
var ReactPropTypesSecret_default = module46.exports;

// node_modules/prop-types/factoryWithThrowingShims.js
function $$cjs_default$$29(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module47 = { exports: {} };
var exports47 = module47.exports;
var ReactPropTypesSecret2 = $$cjs_default$$29(ReactPropTypesSecret_exports);
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module47.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret2) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  ;
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  ;
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var factoryWithThrowingShims_default = module47.exports;

// node_modules/prop-types/factoryWithTypeCheckers.js
init_define_process_env();

// node_modules/prop-types/checkPropTypes.js
var checkPropTypes_exports = {};
__export(checkPropTypes_exports, {
  default: () => checkPropTypes_default
});
init_define_process_env();
var module48 = { exports: {} };
var exports48 = module48.exports;
if (false) {
  ReactPropTypesSecret4 = $$cjs_default$$($cjs$_lib_ReactPropTypesSecret);
  loggedTypeFailures = {};
  has2 = Function.call.bind(Object.prototype.hasOwnProperty);
  printWarning = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
}
var ReactPropTypesSecret4;
var loggedTypeFailures;
var has2;
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (false) {
    for (var typeSpecName in typeSpecs) {
      if (has2(typeSpecs, typeSpecName)) {
        var error;
        try {
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
            err.name = "Invariant Violation";
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret4);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : "";
          printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
        }
      }
    }
  }
}
checkPropTypes.resetWarningCache = function() {
  if (false) {
    loggedTypeFailures = {};
  }
};
module48.exports = checkPropTypes;
var checkPropTypes_default = module48.exports;

// node_modules/object-assign/index.js
var object_assign_exports = {};
__export(object_assign_exports, {
  default: () => object_assign_default
});
init_define_process_env();
var module49 = { exports: {} };
var exports49 = module49.exports;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
module49.exports = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var object_assign_default = module49.exports;

// node_modules/prop-types/factoryWithTypeCheckers.js
import * as $cjs$react_is from "react-is";
function $$cjs_default$$30(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module50 = { exports: {} };
var exports50 = module50.exports;
var ReactIs = $$cjs_default$$30($cjs$react_is);
var assign = $$cjs_default$$30(object_assign_exports);
var ReactPropTypesSecret3 = $$cjs_default$$30(ReactPropTypesSecret_exports);
var checkPropTypes2 = $$cjs_default$$30(checkPropTypes_exports);
var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {
};
if (false) {
  printWarning = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
module50.exports = function(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator";
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  var ANONYMOUS = "<<anonymous>>";
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function PropTypeError(message) {
    this.message = message;
    this.stack = "";
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    if (false) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret3) {
        if (throwOnDirectAccess) {
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = "Invariant Violation";
          throw err;
        } else if (false) {
          var cacheKey = componentName + ":" + propName;
          if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
            printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
          }
          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret3);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (false) {
        if (arguments.length > 1) {
          printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
        } else {
          printWarning("Invalid argument supplied to oneOf, expected an array.");
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret3);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      false ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
        var checker2 = arrayOfTypeCheckers[i2];
        if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret3) == null) {
          return null;
        }
      }
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode2(props[propName])) {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret3);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret3);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode2(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode2);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode2(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode2(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === "symbol") {
      return true;
    }
    if (!propValue) {
      return false;
    }
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case "array":
      case "object":
        return "an " + type;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type;
      default:
        return type;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes2;
  ReactPropTypes.resetWarningCache = checkPropTypes2.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var factoryWithTypeCheckers_default = module50.exports;

// node_modules/prop-types/index.js
import "react-is";
function $$cjs_default$$31(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module51 = { exports: {} };
var exports51 = module51.exports;
if (false) {
  ReactIs2 = $$cjs_default$$31($cjs$react_is2);
  throwOnDirectAccess = true;
  module51.exports = $$cjs_default$$31($cjs$_factoryWithTypeCheckers)(ReactIs2.isElement, throwOnDirectAccess);
} else {
  module51.exports = $$cjs_default$$31(factoryWithThrowingShims_exports)();
}
var ReactIs2;
var throwOnDirectAccess;
var prop_types_default = module51.exports;

// node_modules/is-dom/index.js
init_define_process_env();

// node_modules/is-window/index.js
var is_window_exports = {};
__export(is_window_exports, {
  default: () => is_window_default
});
init_define_process_env();
var module52 = { exports: {} };
var exports52 = module52.exports;
module52.exports = function(obj) {
  if (obj == null) {
    return false;
  }
  var o = Object(obj);
  return o === o.window;
};
var is_window_default = module52.exports;

// node_modules/is-object/index.js
var is_object_exports = {};
__export(is_object_exports, {
  default: () => is_object_default
});
init_define_process_env();
var module53 = { exports: {} };
var exports53 = module53.exports;
module53.exports = function isObject(x) {
  return typeof x === "object" && x !== null;
};
var is_object_default = module53.exports;

// node_modules/is-dom/index.js
function $$cjs_default$$32(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module54 = { exports: {} };
var exports54 = module54.exports;
var isObject2 = $$cjs_default$$32(is_object_exports);
var isWindow = $$cjs_default$$32(is_window_exports);
function isNode(val) {
  if (!isObject2(val) || !isWindow(window) || typeof window.Node !== "function") {
    return false;
  }
  return typeof val.nodeType === "number" && typeof val.nodeName === "string";
}
module54.exports = isNode;
var is_dom_default = module54.exports;

// node_modules/react-inspector/dist/es/react-inspector.js
function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, module91) {
  return module91 = { exports: {} }, fn(module91, module91.exports), module91.exports;
}
var _extends_1 = createCommonjsModule(function(module91) {
  function _extends8() {
    module91.exports = _extends8 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
    return _extends8.apply(this, arguments);
  }
  module91.exports = _extends8;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
var _extends4 = unwrapExports(_extends_1);
var objectWithoutPropertiesLoose = createCommonjsModule(function(module91) {
  function _objectWithoutPropertiesLoose5(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  module91.exports = _objectWithoutPropertiesLoose5;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(objectWithoutPropertiesLoose);
var objectWithoutProperties = createCommonjsModule(function(module91) {
  function _objectWithoutProperties6(source, excluded) {
    if (source == null)
      return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  module91.exports = _objectWithoutProperties6;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
var _objectWithoutProperties3 = unwrapExports(objectWithoutProperties);
var theme$1 = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
  BASE_COLOR: "rgb(213, 213, 213)",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
  OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
  HTML_TAG_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
  HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "rgb(145, 145, 145)",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
  TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
  TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
  TABLE_SORT_ICON_COLOR: "black",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var theme = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "white",
  BASE_COLOR: "black",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
  OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
  HTML_TAG_COLOR: "rgb(168, 148, 166)",
  HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
  HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "#6e6e6e",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "#aaa",
  TABLE_TH_BACKGROUND_COLOR: "#eee",
  TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
  TABLE_SORT_ICON_COLOR: "#6e6e6e",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var themes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  chromeDark: theme$1,
  chromeLight: theme
});
var arrayWithHoles = createCommonjsModule(function(module91) {
  function _arrayWithHoles17(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  module91.exports = _arrayWithHoles17;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(arrayWithHoles);
var iterableToArrayLimit = createCommonjsModule(function(module91) {
  function _iterableToArrayLimit17(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  module91.exports = _iterableToArrayLimit17;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(iterableToArrayLimit);
var arrayLikeToArray = createCommonjsModule(function(module91) {
  function _arrayLikeToArray21(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  module91.exports = _arrayLikeToArray21;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(arrayLikeToArray);
var unsupportedIterableToArray = createCommonjsModule(function(module91) {
  function _unsupportedIterableToArray21(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
  module91.exports = _unsupportedIterableToArray21;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(unsupportedIterableToArray);
var nonIterableRest = createCommonjsModule(function(module91) {
  function _nonIterableRest17() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module91.exports = _nonIterableRest17;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(nonIterableRest);
var slicedToArray = createCommonjsModule(function(module91) {
  function _slicedToArray18(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }
  module91.exports = _slicedToArray18;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
var _slicedToArray8 = unwrapExports(slicedToArray);
var _typeof_1 = createCommonjsModule(function(module91) {
  function _typeof21(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module91.exports = _typeof21 = function _typeof22(obj2) {
        return typeof obj2;
      };
      module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
    } else {
      module91.exports = _typeof21 = function _typeof22(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
      module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
    }
    return _typeof21(obj);
  }
  module91.exports = _typeof21;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
var _typeof8 = unwrapExports(_typeof_1);
var runtime_1 = createCommonjsModule(function(module91) {
  var runtime2 = function(exports91) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define2(obj, key, value) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      define2({}, "");
    } catch (err) {
      define2 = function(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self2, context);
      return generator;
    }
    exports91.wrap = wrap;
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function() {
      return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define2(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    exports91.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports91.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define2(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
    exports91.awrap = function(arg) {
      return {
        __await: arg
      };
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }
          return PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
      return this;
    };
    exports91.AsyncIterator = AsyncIterator;
    exports91.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0)
        PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports91.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self2, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self2, context);
          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        context.delegate = null;
        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        return info;
      }
      context.delegate = null;
      return ContinueSentinel;
    }
    defineIteratorMethods(Gp);
    define2(Gp, toStringTagSymbol, "Generator");
    Gp[iteratorSymbol] = function() {
      return this;
    };
    Gp.toString = function() {
      return "[object Generator]";
    };
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports91.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();
      return function next() {
        while (keys.length) {
          var key2 = keys.pop();
          if (key2 in object) {
            next.value = key2;
            next.done = false;
            return next;
          }
        }
        next.done = true;
        return next;
      };
    };
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next2.value = iterable[i];
                next2.done = false;
                return next2;
              }
            }
            next2.value = undefined$1;
            next2.done = true;
            return next2;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    exports91.values = values;
    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }
    Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            context.method = "next";
            context.arg = undefined$1;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        };
        if (this.method === "next") {
          this.arg = undefined$1;
        }
        return ContinueSentinel;
      }
    };
    return exports91;
  }(module91.exports);
  try {
    regeneratorRuntime = runtime2;
  } catch (accidentalStrictMode) {
    Function("r", "regeneratorRuntime = r")(runtime2);
  }
});
var regenerator = runtime_1;
var arrayWithoutHoles = createCommonjsModule(function(module91) {
  function _arrayWithoutHoles8(arr) {
    if (Array.isArray(arr))
      return arrayLikeToArray(arr);
  }
  module91.exports = _arrayWithoutHoles8;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(arrayWithoutHoles);
var iterableToArray = createCommonjsModule(function(module91) {
  function _iterableToArray8(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  module91.exports = _iterableToArray8;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(iterableToArray);
var nonIterableSpread = createCommonjsModule(function(module91) {
  function _nonIterableSpread8() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module91.exports = _nonIterableSpread8;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
unwrapExports(nonIterableSpread);
var toConsumableArray = createCommonjsModule(function(module91) {
  function _toConsumableArray9(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }
  module91.exports = _toConsumableArray9;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
var _toConsumableArray5 = unwrapExports(toConsumableArray);
var defineProperty = createCommonjsModule(function(module91) {
  function _defineProperty12(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module91.exports = _defineProperty12;
  module91.exports["default"] = module91.exports, module91.exports.__esModule = true;
});
var _defineProperty5 = unwrapExports(defineProperty);
var ExpandedPathsContext = createContext([{}, function() {
}]);
var unselectable = {
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  OUserSelect: "none",
  userSelect: "none"
};
function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$7(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var base = function(theme2) {
  return {
    DOMNodePreview: {
      htmlOpenTag: {
        base: {
          color: theme2.HTML_TAG_COLOR
        },
        tagName: {
          color: theme2.HTML_TAGNAME_COLOR,
          textTransform: theme2.HTML_TAGNAME_TEXT_TRANSFORM
        },
        htmlAttributeName: {
          color: theme2.HTML_ATTRIBUTE_NAME_COLOR
        },
        htmlAttributeValue: {
          color: theme2.HTML_ATTRIBUTE_VALUE_COLOR
        }
      },
      htmlCloseTag: {
        base: {
          color: theme2.HTML_TAG_COLOR
        },
        offsetLeft: {
          marginLeft: -theme2.TREENODE_PADDING_LEFT
        },
        tagName: {
          color: theme2.HTML_TAGNAME_COLOR,
          textTransform: theme2.HTML_TAGNAME_TEXT_TRANSFORM
        }
      },
      htmlComment: {
        color: theme2.HTML_COMMENT_COLOR
      },
      htmlDoctype: {
        color: theme2.HTML_DOCTYPE_COLOR
      }
    },
    ObjectPreview: {
      objectDescription: {
        fontStyle: "italic"
      },
      preview: {
        fontStyle: "italic"
      },
      arrayMaxProperties: theme2.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
      objectMaxProperties: theme2.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES
    },
    ObjectName: {
      base: {
        color: theme2.OBJECT_NAME_COLOR
      },
      dimmed: {
        opacity: 0.6
      }
    },
    ObjectValue: {
      objectValueNull: {
        color: theme2.OBJECT_VALUE_NULL_COLOR
      },
      objectValueUndefined: {
        color: theme2.OBJECT_VALUE_UNDEFINED_COLOR
      },
      objectValueRegExp: {
        color: theme2.OBJECT_VALUE_REGEXP_COLOR
      },
      objectValueString: {
        color: theme2.OBJECT_VALUE_STRING_COLOR
      },
      objectValueSymbol: {
        color: theme2.OBJECT_VALUE_SYMBOL_COLOR
      },
      objectValueNumber: {
        color: theme2.OBJECT_VALUE_NUMBER_COLOR
      },
      objectValueBoolean: {
        color: theme2.OBJECT_VALUE_BOOLEAN_COLOR
      },
      objectValueFunctionPrefix: {
        color: theme2.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
        fontStyle: "italic"
      },
      objectValueFunctionName: {
        fontStyle: "italic"
      }
    },
    TreeView: {
      treeViewOutline: {
        padding: 0,
        margin: 0,
        listStyleType: "none"
      }
    },
    TreeNode: {
      treeNodeBase: {
        color: theme2.BASE_COLOR,
        backgroundColor: theme2.BASE_BACKGROUND_COLOR,
        lineHeight: theme2.TREENODE_LINE_HEIGHT,
        cursor: "default",
        boxSizing: "border-box",
        listStyle: "none",
        fontFamily: theme2.TREENODE_FONT_FAMILY,
        fontSize: theme2.TREENODE_FONT_SIZE
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: _objectSpread$7({
        whiteSpace: "pre",
        fontSize: theme2.ARROW_FONT_SIZE,
        marginRight: theme2.ARROW_MARGIN_RIGHT
      }, unselectable),
      treeNodeArrow: {
        base: _objectSpread$7(_objectSpread$7({
          color: theme2.ARROW_COLOR,
          display: "inline-block",
          fontSize: theme2.ARROW_FONT_SIZE,
          marginRight: theme2.ARROW_MARGIN_RIGHT
        }, parseFloat(theme2.ARROW_ANIMATION_DURATION) > 0 ? {
          transition: "transform ".concat(theme2.ARROW_ANIMATION_DURATION, " ease 0s")
        } : {}), unselectable),
        expanded: {
          WebkitTransform: "rotateZ(90deg)",
          MozTransform: "rotateZ(90deg)",
          transform: "rotateZ(90deg)"
        },
        collapsed: {
          WebkitTransform: "rotateZ(0deg)",
          MozTransform: "rotateZ(0deg)",
          transform: "rotateZ(0deg)"
        }
      },
      treeNodeChildNodesContainer: {
        margin: 0,
        paddingLeft: theme2.TREENODE_PADDING_LEFT
      }
    },
    TableInspector: {
      base: {
        color: theme2.BASE_COLOR,
        position: "relative",
        border: "1px solid ".concat(theme2.TABLE_BORDER_COLOR),
        fontFamily: theme2.BASE_FONT_FAMILY,
        fontSize: theme2.BASE_FONT_SIZE,
        lineHeight: "120%",
        boxSizing: "border-box",
        cursor: "default"
      }
    },
    TableInspectorHeaderContainer: {
      base: {
        top: 0,
        height: "17px",
        left: 0,
        right: 0,
        overflowX: "hidden"
      },
      table: {
        tableLayout: "fixed",
        borderSpacing: 0,
        borderCollapse: "separate",
        height: "100%",
        width: "100%",
        margin: 0
      }
    },
    TableInspectorDataContainer: {
      tr: {
        display: "table-row"
      },
      td: {
        boxSizing: "border-box",
        border: "none",
        height: "16px",
        verticalAlign: "top",
        padding: "1px 4px",
        WebkitUserSelect: "text",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "14px"
      },
      div: {
        position: "static",
        top: "17px",
        bottom: 0,
        overflowY: "overlay",
        transform: "translateZ(0)",
        left: 0,
        right: 0,
        overflowX: "hidden"
      },
      table: {
        positon: "static",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: "0 none transparent",
        margin: 0,
        backgroundImage: theme2.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: theme2.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: "fixed",
        borderSpacing: 0,
        borderCollapse: "separate",
        width: "100%",
        fontSize: theme2.BASE_FONT_SIZE,
        lineHeight: "120%"
      }
    },
    TableInspectorTH: {
      base: {
        position: "relative",
        height: "auto",
        textAlign: "left",
        backgroundColor: theme2.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: "1px solid ".concat(theme2.TABLE_BORDER_COLOR),
        fontWeight: "normal",
        verticalAlign: "middle",
        padding: "0 4px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "14px",
        ":hover": {
          backgroundColor: theme2.TABLE_TH_HOVER_COLOR
        }
      },
      div: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontSize: theme2.BASE_FONT_SIZE,
        lineHeight: "120%"
      }
    },
    TableInspectorLeftBorder: {
      none: {
        borderLeft: "none"
      },
      solid: {
        borderLeft: "1px solid ".concat(theme2.TABLE_BORDER_COLOR)
      }
    },
    TableInspectorSortIcon: _objectSpread$7({
      display: "block",
      marginRight: 3,
      width: 8,
      height: 7,
      marginTop: -7,
      color: theme2.TABLE_SORT_ICON_COLOR,
      fontSize: 12
    }, unselectable)
  };
};
var DEFAULT_THEME_NAME = "chromeLight";
var ThemeContext = createContext(base(themes[DEFAULT_THEME_NAME]));
var useStyles = function useStyles2(baseStylesKey) {
  var themeStyles = useContext(ThemeContext);
  return themeStyles[baseStylesKey];
};
var themeAcceptor = function themeAcceptor2(WrappedComponent) {
  var ThemeAcceptor = function ThemeAcceptor2(_ref) {
    var _ref$theme = _ref.theme, theme2 = _ref$theme === void 0 ? DEFAULT_THEME_NAME : _ref$theme, restProps = _objectWithoutProperties3(_ref, ["theme"]);
    var themeStyles = useMemo(function() {
      switch (Object.prototype.toString.call(theme2)) {
        case "[object String]":
          return base(themes[theme2]);
        case "[object Object]":
          return base(theme2);
        default:
          return base(themes[DEFAULT_THEME_NAME]);
      }
    }, [theme2]);
    return React5.createElement(ThemeContext.Provider, {
      value: themeStyles
    }, React5.createElement(WrappedComponent, restProps));
  };
  ThemeAcceptor.propTypes = {
    theme: prop_types_default.oneOfType([prop_types_default.string, prop_types_default.object])
  };
  return ThemeAcceptor;
};
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Arrow = function Arrow2(_ref) {
  var expanded = _ref.expanded, styles = _ref.styles;
  return React5.createElement("span", {
    style: _objectSpread$6(_objectSpread$6({}, styles.base), expanded ? styles.expanded : styles.collapsed)
  }, "\u25B6");
};
var TreeNode = memo(function(props) {
  props = _objectSpread$6({
    expanded: true,
    nodeRenderer: function nodeRenderer2(_ref2) {
      var name = _ref2.name;
      return React5.createElement("span", null, name);
    },
    onClick: function onClick2() {
    },
    shouldShowArrow: false,
    shouldShowPlaceholder: true
  }, props);
  var _props = props, expanded = _props.expanded, onClick = _props.onClick, children = _props.children, nodeRenderer = _props.nodeRenderer, title = _props.title, shouldShowArrow = _props.shouldShowArrow, shouldShowPlaceholder = _props.shouldShowPlaceholder;
  var styles = useStyles("TreeNode");
  var NodeRenderer = nodeRenderer;
  return React5.createElement("li", {
    "aria-expanded": expanded,
    role: "treeitem",
    style: styles.treeNodeBase,
    title
  }, React5.createElement("div", {
    style: styles.treeNodePreviewContainer,
    onClick
  }, shouldShowArrow || Children.count(children) > 0 ? React5.createElement(Arrow, {
    expanded,
    styles: styles.treeNodeArrow
  }) : shouldShowPlaceholder && React5.createElement("span", {
    style: styles.treeNodePlaceholder
  }, "\xA0"), React5.createElement(NodeRenderer, props)), React5.createElement("ol", {
    role: "group",
    style: styles.treeNodeChildNodesContainer
  }, expanded ? children : void 0));
});
TreeNode.propTypes = {
  name: prop_types_default.string,
  data: prop_types_default.any,
  expanded: prop_types_default.bool,
  shouldShowArrow: prop_types_default.bool,
  shouldShowPlaceholder: prop_types_default.bool,
  nodeRenderer: prop_types_default.func,
  onClick: prop_types_default.func
};
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var DEFAULT_ROOT_PATH = "$";
var WILDCARD = "*";
function hasChildNodes(data, dataIterator) {
  return !dataIterator(data).next().done;
}
var wildcardPathsFromLevel = function wildcardPathsFromLevel2(level) {
  return Array.from({
    length: level
  }, function(_2, i) {
    return [DEFAULT_ROOT_PATH].concat(Array.from({
      length: i
    }, function() {
      return "*";
    })).join(".");
  });
};
var getExpandedPaths = function getExpandedPaths2(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths) {
  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function(path) {
    return typeof path === "string";
  });
  var expandedPaths = [];
  wildcardPaths.forEach(function(wildcardPath) {
    var keyPaths = wildcardPath.split(".");
    var populatePaths = function populatePaths2(curData, curPath, depth) {
      if (depth === keyPaths.length) {
        expandedPaths.push(curPath);
        return;
      }
      var key = keyPaths[depth];
      if (depth === 0) {
        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
          populatePaths2(curData, DEFAULT_ROOT_PATH, depth + 1);
        }
      } else {
        if (key === WILDCARD) {
          var _iterator = _createForOfIteratorHelper$1(dataIterator(curData)), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _step$value = _step.value, name = _step$value.name, _data = _step$value.data;
              if (hasChildNodes(_data, dataIterator)) {
                populatePaths2(_data, "".concat(curPath, ".").concat(name), depth + 1);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var value = curData[key];
          if (hasChildNodes(value, dataIterator)) {
            populatePaths2(value, "".concat(curPath, ".").concat(key), depth + 1);
          }
        }
      }
    };
    populatePaths(data, "", 0);
  });
  return expandedPaths.reduce(function(obj, path) {
    obj[path] = true;
    return obj;
  }, _objectSpread$5({}, prevExpandedPaths));
};
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var ConnectedTreeNode = memo(function(props) {
  var data = props.data, dataIterator = props.dataIterator, path = props.path, depth = props.depth, nodeRenderer = props.nodeRenderer;
  var _useContext = useContext(ExpandedPathsContext), _useContext2 = _slicedToArray8(_useContext, 2), expandedPaths = _useContext2[0], setExpandedPaths = _useContext2[1];
  var nodeHasChildNodes = hasChildNodes(data, dataIterator);
  var expanded = !!expandedPaths[path];
  var handleClick = useCallback(function() {
    return nodeHasChildNodes && setExpandedPaths(function(prevExpandedPaths) {
      return _objectSpread$4(_objectSpread$4({}, prevExpandedPaths), {}, _defineProperty5({}, path, !expanded));
    });
  }, [nodeHasChildNodes, setExpandedPaths, path, expanded]);
  return React5.createElement(TreeNode, _extends4({
    expanded,
    onClick: handleClick,
    shouldShowArrow: nodeHasChildNodes,
    shouldShowPlaceholder: depth > 0,
    nodeRenderer
  }, props), expanded ? _toConsumableArray5(dataIterator(data)).map(function(_ref) {
    var name = _ref.name, data2 = _ref.data, renderNodeProps = _objectWithoutProperties3(_ref, ["name", "data"]);
    return React5.createElement(ConnectedTreeNode, _extends4({
      name,
      data: data2,
      depth: depth + 1,
      path: "".concat(path, ".").concat(name),
      key: name,
      dataIterator,
      nodeRenderer
    }, renderNodeProps));
  }) : null);
});
ConnectedTreeNode.propTypes = {
  name: prop_types_default.string,
  data: prop_types_default.any,
  dataIterator: prop_types_default.func,
  depth: prop_types_default.number,
  expanded: prop_types_default.bool,
  nodeRenderer: prop_types_default.func
};
var TreeView = memo(function(_ref2) {
  var name = _ref2.name, data = _ref2.data, dataIterator = _ref2.dataIterator, nodeRenderer = _ref2.nodeRenderer, expandPaths = _ref2.expandPaths, expandLevel = _ref2.expandLevel;
  var styles = useStyles("TreeView");
  var stateAndSetter = useState({});
  var _stateAndSetter = _slicedToArray8(stateAndSetter, 2), setExpandedPaths = _stateAndSetter[1];
  useLayoutEffect(function() {
    return setExpandedPaths(function(prevExpandedPaths) {
      return getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths);
    });
  }, [data, dataIterator, expandPaths, expandLevel]);
  return React5.createElement(ExpandedPathsContext.Provider, {
    value: stateAndSetter
  }, React5.createElement("ol", {
    role: "tree",
    style: styles.treeViewOutline
  }, React5.createElement(ConnectedTreeNode, {
    name,
    data,
    dataIterator,
    depth: 0,
    path: DEFAULT_ROOT_PATH,
    nodeRenderer
  })));
});
TreeView.propTypes = {
  name: prop_types_default.string,
  data: prop_types_default.any,
  dataIterator: prop_types_default.func,
  nodeRenderer: prop_types_default.func,
  expandPaths: prop_types_default.oneOfType([prop_types_default.string, prop_types_default.array]),
  expandLevel: prop_types_default.number
};
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var ObjectName = function ObjectName2(_ref) {
  var name = _ref.name, _ref$dimmed = _ref.dimmed, dimmed = _ref$dimmed === void 0 ? false : _ref$dimmed, _ref$styles = _ref.styles, styles = _ref$styles === void 0 ? {} : _ref$styles;
  var themeStyles = useStyles("ObjectName");
  var appliedStyles = _objectSpread$3(_objectSpread$3(_objectSpread$3({}, themeStyles.base), dimmed ? themeStyles["dimmed"] : {}), styles);
  return React5.createElement("span", {
    style: appliedStyles
  }, name);
};
ObjectName.propTypes = {
  name: prop_types_default.string,
  dimmed: prop_types_default.bool
};
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var ObjectValue = function ObjectValue2(_ref) {
  var object = _ref.object, styles = _ref.styles;
  var themeStyles = useStyles("ObjectValue");
  var mkStyle = function mkStyle2(key) {
    return _objectSpread$2(_objectSpread$2({}, themeStyles[key]), styles);
  };
  switch (_typeof8(object)) {
    case "bigint":
      return React5.createElement("span", {
        style: mkStyle("objectValueNumber")
      }, String(object), "n");
    case "number":
      return React5.createElement("span", {
        style: mkStyle("objectValueNumber")
      }, String(object));
    case "string":
      return React5.createElement("span", {
        style: mkStyle("objectValueString")
      }, '"', object, '"');
    case "boolean":
      return React5.createElement("span", {
        style: mkStyle("objectValueBoolean")
      }, String(object));
    case "undefined":
      return React5.createElement("span", {
        style: mkStyle("objectValueUndefined")
      }, "undefined");
    case "object":
      if (object === null) {
        return React5.createElement("span", {
          style: mkStyle("objectValueNull")
        }, "null");
      }
      if (object instanceof Date) {
        return React5.createElement("span", null, object.toString());
      }
      if (object instanceof RegExp) {
        return React5.createElement("span", {
          style: mkStyle("objectValueRegExp")
        }, object.toString());
      }
      if (Array.isArray(object)) {
        return React5.createElement("span", null, "Array(".concat(object.length, ")"));
      }
      if (!object.constructor) {
        return React5.createElement("span", null, "Object");
      }
      if (typeof object.constructor.isBuffer === "function" && object.constructor.isBuffer(object)) {
        return React5.createElement("span", null, "Buffer[".concat(object.length, "]"));
      }
      return React5.createElement("span", null, object.constructor.name);
    case "function":
      return React5.createElement("span", null, React5.createElement("span", {
        style: mkStyle("objectValueFunctionPrefix")
      }, "\u0192\xA0"), React5.createElement("span", {
        style: mkStyle("objectValueFunctionName")
      }, object.name, "()"));
    case "symbol":
      return React5.createElement("span", {
        style: mkStyle("objectValueSymbol")
      }, object.toString());
    default:
      return React5.createElement("span", null);
  }
};
ObjectValue.propTypes = {
  object: prop_types_default.any
};
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
function getPropertyValue(object, propertyName) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
  if (propertyDescriptor.get) {
    try {
      return propertyDescriptor.get();
    } catch (_unused) {
      return propertyDescriptor.get;
    }
  }
  return object[propertyName];
}
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).reduce(function(xs, x) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}
var ObjectPreview = function ObjectPreview2(_ref) {
  var data = _ref.data;
  var styles = useStyles("ObjectPreview");
  var object = data;
  if (_typeof8(object) !== "object" || object === null || object instanceof Date || object instanceof RegExp) {
    return React5.createElement(ObjectValue, {
      object
    });
  }
  if (Array.isArray(object)) {
    var maxProperties = styles.arrayMaxProperties;
    var previewArray = object.slice(0, maxProperties).map(function(element, index) {
      return React5.createElement(ObjectValue, {
        key: index,
        object: element
      });
    });
    if (object.length > maxProperties) {
      previewArray.push(React5.createElement("span", {
        key: "ellipsis"
      }, "\u2026"));
    }
    var arrayLength = object.length;
    return React5.createElement(React5.Fragment, null, React5.createElement("span", {
      style: styles.objectDescription
    }, arrayLength === 0 ? "" : "(".concat(arrayLength, ")\xA0")), React5.createElement("span", {
      style: styles.preview
    }, "[", intersperse(previewArray, ", "), "]"));
  } else {
    var _maxProperties = styles.objectMaxProperties;
    var propertyNodes = [];
    for (var propertyName in object) {
      if (hasOwnProperty2.call(object, propertyName)) {
        var ellipsis2 = void 0;
        if (propertyNodes.length === _maxProperties - 1 && Object.keys(object).length > _maxProperties) {
          ellipsis2 = React5.createElement("span", {
            key: "ellipsis"
          }, "\u2026");
        }
        var propertyValue = getPropertyValue(object, propertyName);
        propertyNodes.push(React5.createElement("span", {
          key: propertyName
        }, React5.createElement(ObjectName, {
          name: propertyName || '""'
        }), ":\xA0", React5.createElement(ObjectValue, {
          object: propertyValue
        }), ellipsis2));
        if (ellipsis2)
          break;
      }
    }
    var objectConstructorName = object.constructor ? object.constructor.name : "Object";
    return React5.createElement(React5.Fragment, null, React5.createElement("span", {
      style: styles.objectDescription
    }, objectConstructorName === "Object" ? "" : "".concat(objectConstructorName, " ")), React5.createElement("span", {
      style: styles.preview
    }, "{", intersperse(propertyNodes, ", "), "}"));
  }
};
var ObjectRootLabel = function ObjectRootLabel2(_ref) {
  var name = _ref.name, data = _ref.data;
  if (typeof name === "string") {
    return React5.createElement("span", null, React5.createElement(ObjectName, {
      name
    }), React5.createElement("span", null, ": "), React5.createElement(ObjectPreview, {
      data
    }));
  } else {
    return React5.createElement(ObjectPreview, {
      data
    });
  }
};
var ObjectLabel = function ObjectLabel2(_ref) {
  var name = _ref.name, data = _ref.data, _ref$isNonenumerable = _ref.isNonenumerable, isNonenumerable = _ref$isNonenumerable === void 0 ? false : _ref$isNonenumerable;
  var object = data;
  return React5.createElement("span", null, typeof name === "string" ? React5.createElement(ObjectName, {
    name,
    dimmed: isNonenumerable
  }) : React5.createElement(ObjectPreview, {
    data: name
  }), React5.createElement("span", null, ": "), React5.createElement(ObjectValue, {
    object
  }));
};
ObjectLabel.propTypes = {
  isNonenumerable: prop_types_default.bool
};
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray10(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var createIterator = function createIterator2(showNonenumerable, sortObjectKeys) {
  var objectIterator = regenerator.mark(function objectIterator2(data) {
    var shouldIterate, dataIsArray, i, _iterator, _step, entry, _entry, k, v, keys, _iterator2, _step2, propertyName, propertyValue, _propertyValue;
    return regenerator.wrap(function objectIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shouldIterate = _typeof8(data) === "object" && data !== null || typeof data === "function";
            if (shouldIterate) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            dataIsArray = Array.isArray(data);
            if (!(!dataIsArray && data[Symbol.iterator])) {
              _context.next = 32;
              break;
            }
            i = 0;
            _iterator = _createForOfIteratorHelper(data);
            _context.prev = 7;
            _iterator.s();
          case 9:
            if ((_step = _iterator.n()).done) {
              _context.next = 22;
              break;
            }
            entry = _step.value;
            if (!(Array.isArray(entry) && entry.length === 2)) {
              _context.next = 17;
              break;
            }
            _entry = _slicedToArray8(entry, 2), k = _entry[0], v = _entry[1];
            _context.next = 15;
            return {
              name: k,
              data: v
            };
          case 15:
            _context.next = 19;
            break;
          case 17:
            _context.next = 19;
            return {
              name: i.toString(),
              data: entry
            };
          case 19:
            i++;
          case 20:
            _context.next = 9;
            break;
          case 22:
            _context.next = 27;
            break;
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](7);
            _iterator.e(_context.t0);
          case 27:
            _context.prev = 27;
            _iterator.f();
            return _context.finish(27);
          case 30:
            _context.next = 64;
            break;
          case 32:
            keys = Object.getOwnPropertyNames(data);
            if (sortObjectKeys === true && !dataIsArray) {
              keys.sort();
            } else if (typeof sortObjectKeys === "function") {
              keys.sort(sortObjectKeys);
            }
            _iterator2 = _createForOfIteratorHelper(keys);
            _context.prev = 35;
            _iterator2.s();
          case 37:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 53;
              break;
            }
            propertyName = _step2.value;
            if (!propertyIsEnumerable.call(data, propertyName)) {
              _context.next = 45;
              break;
            }
            propertyValue = getPropertyValue(data, propertyName);
            _context.next = 43;
            return {
              name: propertyName || '""',
              data: propertyValue
            };
          case 43:
            _context.next = 51;
            break;
          case 45:
            if (!showNonenumerable) {
              _context.next = 51;
              break;
            }
            _propertyValue = void 0;
            try {
              _propertyValue = getPropertyValue(data, propertyName);
            } catch (e) {
            }
            if (!(_propertyValue !== void 0)) {
              _context.next = 51;
              break;
            }
            _context.next = 51;
            return {
              name: propertyName,
              data: _propertyValue,
              isNonenumerable: true
            };
          case 51:
            _context.next = 37;
            break;
          case 53:
            _context.next = 58;
            break;
          case 55:
            _context.prev = 55;
            _context.t1 = _context["catch"](35);
            _iterator2.e(_context.t1);
          case 58:
            _context.prev = 58;
            _iterator2.f();
            return _context.finish(58);
          case 61:
            if (!(showNonenumerable && data !== Object.prototype)) {
              _context.next = 64;
              break;
            }
            _context.next = 64;
            return {
              name: "__proto__",
              data: Object.getPrototypeOf(data),
              isNonenumerable: true
            };
          case 64:
          case "end":
            return _context.stop();
        }
      }
    }, objectIterator2, null, [[7, 24, 27, 30], [35, 55, 58, 61]]);
  });
  return objectIterator;
};
var defaultNodeRenderer = function defaultNodeRenderer2(_ref) {
  var depth = _ref.depth, name = _ref.name, data = _ref.data, isNonenumerable = _ref.isNonenumerable;
  return depth === 0 ? React5.createElement(ObjectRootLabel, {
    name,
    data
  }) : React5.createElement(ObjectLabel, {
    name,
    data,
    isNonenumerable
  });
};
var ObjectInspector = function ObjectInspector2(_ref2) {
  var _ref2$showNonenumerab = _ref2.showNonenumerable, showNonenumerable = _ref2$showNonenumerab === void 0 ? false : _ref2$showNonenumerab, sortObjectKeys = _ref2.sortObjectKeys, nodeRenderer = _ref2.nodeRenderer, treeViewProps = _objectWithoutProperties3(_ref2, ["showNonenumerable", "sortObjectKeys", "nodeRenderer"]);
  var dataIterator = createIterator(showNonenumerable, sortObjectKeys);
  var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;
  return React5.createElement(TreeView, _extends4({
    nodeRenderer: renderer,
    dataIterator
  }, treeViewProps));
};
ObjectInspector.propTypes = {
  expandLevel: prop_types_default.number,
  expandPaths: prop_types_default.oneOfType([prop_types_default.string, prop_types_default.array]),
  name: prop_types_default.string,
  data: prop_types_default.any,
  showNonenumerable: prop_types_default.bool,
  sortObjectKeys: prop_types_default.oneOfType([prop_types_default.bool, prop_types_default.func]),
  nodeRenderer: prop_types_default.func
};
var ObjectInspector$1 = themeAcceptor(ObjectInspector);
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}
function getHeaders(data) {
  if (_typeof8(data) === "object") {
    var rowHeaders;
    if (Array.isArray(data)) {
      var nRows = data.length;
      rowHeaders = _toConsumableArray5(Array(nRows).keys());
    } else if (data !== null) {
      rowHeaders = Object.keys(data);
    }
    var colHeaders = rowHeaders.reduce(function(colHeaders2, rowHeader) {
      var row = data[rowHeader];
      if (_typeof8(row) === "object" && row !== null) {
        var cols = Object.keys(row);
        cols.reduce(function(xs, x) {
          if (!xs.includes(x)) {
            xs.push(x);
          }
          return xs;
        }, colHeaders2);
      }
      return colHeaders2;
    }, []);
    return {
      rowHeaders,
      colHeaders
    };
  }
  return void 0;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var DataContainer = function DataContainer2(_ref) {
  var rows = _ref.rows, columns = _ref.columns, rowsData = _ref.rowsData;
  var styles = useStyles("TableInspectorDataContainer");
  var borderStyles = useStyles("TableInspectorLeftBorder");
  return React5.createElement("div", {
    style: styles.div
  }, React5.createElement("table", {
    style: styles.table
  }, React5.createElement("colgroup", null), React5.createElement("tbody", null, rows.map(function(row, i) {
    return React5.createElement("tr", {
      key: row,
      style: styles.tr
    }, React5.createElement("td", {
      style: _objectSpread$1(_objectSpread$1({}, styles.td), borderStyles.none)
    }, row), columns.map(function(column) {
      var rowData = rowsData[i];
      if (_typeof8(rowData) === "object" && rowData !== null && hasOwnProperty2.call(rowData, column)) {
        return React5.createElement("td", {
          key: column,
          style: _objectSpread$1(_objectSpread$1({}, styles.td), borderStyles.solid)
        }, React5.createElement(ObjectValue, {
          object: rowData[column]
        }));
      } else {
        return React5.createElement("td", {
          key: column,
          style: _objectSpread$1(_objectSpread$1({}, styles.td), borderStyles.solid)
        });
      }
    }));
  }))));
};
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var SortIconContainer = function SortIconContainer2(props) {
  return React5.createElement("div", {
    style: {
      position: "absolute",
      top: 1,
      right: 0,
      bottom: 1,
      display: "flex",
      alignItems: "center"
    }
  }, props.children);
};
var SortIcon = function SortIcon2(_ref) {
  var sortAscending = _ref.sortAscending;
  var styles = useStyles("TableInspectorSortIcon");
  var glyph = sortAscending ? "\u25B2" : "\u25BC";
  return React5.createElement("div", {
    style: styles
  }, glyph);
};
var TH = function TH2(_ref2) {
  var _ref2$sortAscending = _ref2.sortAscending, sortAscending = _ref2$sortAscending === void 0 ? false : _ref2$sortAscending, _ref2$sorted = _ref2.sorted, sorted = _ref2$sorted === void 0 ? false : _ref2$sorted, _ref2$onClick = _ref2.onClick, onClick = _ref2$onClick === void 0 ? void 0 : _ref2$onClick, _ref2$borderStyle = _ref2.borderStyle, borderStyle2 = _ref2$borderStyle === void 0 ? {} : _ref2$borderStyle, children = _ref2.children, thProps = _objectWithoutProperties3(_ref2, ["sortAscending", "sorted", "onClick", "borderStyle", "children"]);
  var styles = useStyles("TableInspectorTH");
  var _useState = useState(false), _useState2 = _slicedToArray8(_useState, 2), hovered = _useState2[0], setHovered = _useState2[1];
  var handleMouseEnter = useCallback(function() {
    return setHovered(true);
  }, []);
  var handleMouseLeave = useCallback(function() {
    return setHovered(false);
  }, []);
  return React5.createElement("th", _extends4({}, thProps, {
    style: _objectSpread(_objectSpread(_objectSpread({}, styles.base), borderStyle2), hovered ? styles.base[":hover"] : {}),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick
  }), React5.createElement("div", {
    style: styles.div
  }, children), sorted && React5.createElement(SortIconContainer, null, React5.createElement(SortIcon, {
    sortAscending
  })));
};
var HeaderContainer = function HeaderContainer2(_ref) {
  var _ref$indexColumnText = _ref.indexColumnText, indexColumnText = _ref$indexColumnText === void 0 ? "(index)" : _ref$indexColumnText, _ref$columns = _ref.columns, columns = _ref$columns === void 0 ? [] : _ref$columns, sorted = _ref.sorted, sortIndexColumn = _ref.sortIndexColumn, sortColumn = _ref.sortColumn, sortAscending = _ref.sortAscending, onTHClick = _ref.onTHClick, onIndexTHClick = _ref.onIndexTHClick;
  var styles = useStyles("TableInspectorHeaderContainer");
  var borderStyles = useStyles("TableInspectorLeftBorder");
  return React5.createElement("div", {
    style: styles.base
  }, React5.createElement("table", {
    style: styles.table
  }, React5.createElement("tbody", null, React5.createElement("tr", null, React5.createElement(TH, {
    borderStyle: borderStyles.none,
    sorted: sorted && sortIndexColumn,
    sortAscending,
    onClick: onIndexTHClick
  }, indexColumnText), columns.map(function(column) {
    return React5.createElement(TH, {
      borderStyle: borderStyles.solid,
      key: column,
      sorted: sorted && sortColumn === column,
      sortAscending,
      onClick: onTHClick.bind(null, column)
    }, column);
  })))));
};
var TableInspector = function TableInspector2(_ref) {
  var data = _ref.data, columns = _ref.columns;
  var styles = useStyles("TableInspector");
  var _useState = useState({
    sorted: false,
    sortIndexColumn: false,
    sortColumn: void 0,
    sortAscending: false
  }), _useState2 = _slicedToArray8(_useState, 2), _useState2$ = _useState2[0], sorted = _useState2$.sorted, sortIndexColumn = _useState2$.sortIndexColumn, sortColumn = _useState2$.sortColumn, sortAscending = _useState2$.sortAscending, setState = _useState2[1];
  var handleIndexTHClick = useCallback(function() {
    setState(function(_ref2) {
      var sortIndexColumn2 = _ref2.sortIndexColumn, sortAscending2 = _ref2.sortAscending;
      return {
        sorted: true,
        sortIndexColumn: true,
        sortColumn: void 0,
        sortAscending: sortIndexColumn2 ? !sortAscending2 : true
      };
    });
  }, []);
  var handleTHClick = useCallback(function(col) {
    setState(function(_ref3) {
      var sortColumn2 = _ref3.sortColumn, sortAscending2 = _ref3.sortAscending;
      return {
        sorted: true,
        sortIndexColumn: false,
        sortColumn: col,
        sortAscending: col === sortColumn2 ? !sortAscending2 : true
      };
    });
  }, []);
  if (_typeof8(data) !== "object" || data === null) {
    return React5.createElement("div", null);
  }
  var _getHeaders = getHeaders(data), rowHeaders = _getHeaders.rowHeaders, colHeaders = _getHeaders.colHeaders;
  if (columns !== void 0) {
    colHeaders = columns;
  }
  var rowsData = rowHeaders.map(function(rowHeader) {
    return data[rowHeader];
  });
  var columnDataWithRowIndexes;
  if (sortColumn !== void 0) {
    columnDataWithRowIndexes = rowsData.map(function(rowData, index) {
      if (_typeof8(rowData) === "object" && rowData !== null) {
        var columnData = rowData[sortColumn];
        return [columnData, index];
      }
      return [void 0, index];
    });
  } else {
    if (sortIndexColumn) {
      columnDataWithRowIndexes = rowHeaders.map(function(rowData, index) {
        var columnData = rowHeaders[index];
        return [columnData, index];
      });
    }
  }
  if (columnDataWithRowIndexes !== void 0) {
    var comparator = function comparator2(mapper, ascending) {
      return function(a, b) {
        var v1 = mapper(a);
        var v2 = mapper(b);
        var type1 = _typeof8(v1);
        var type2 = _typeof8(v2);
        var lt = function lt2(v12, v22) {
          if (v12 < v22) {
            return -1;
          } else if (v12 > v22) {
            return 1;
          } else {
            return 0;
          }
        };
        var result;
        if (type1 === type2) {
          result = lt(v1, v2);
        } else {
          var order = {
            string: 0,
            number: 1,
            object: 2,
            symbol: 3,
            boolean: 4,
            undefined: 5,
            function: 6
          };
          result = lt(order[type1], order[type2]);
        }
        if (!ascending)
          result = -result;
        return result;
      };
    };
    var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function(item) {
      return item[0];
    }, sortAscending)).map(function(item) {
      return item[1];
    });
    rowHeaders = sortedRowIndexes.map(function(i) {
      return rowHeaders[i];
    });
    rowsData = sortedRowIndexes.map(function(i) {
      return rowsData[i];
    });
  }
  return React5.createElement("div", {
    style: styles.base
  }, React5.createElement(HeaderContainer, {
    columns: colHeaders,
    sorted,
    sortIndexColumn,
    sortColumn,
    sortAscending,
    onTHClick: handleTHClick,
    onIndexTHClick: handleIndexTHClick
  }), React5.createElement(DataContainer, {
    rows: rowHeaders,
    columns: colHeaders,
    rowsData
  }));
};
TableInspector.propTypes = {
  data: prop_types_default.oneOfType([prop_types_default.array, prop_types_default.object]),
  columns: prop_types_default.array
};
var TableInspector$1 = themeAcceptor(TableInspector);
var TEXT_NODE_MAX_INLINE_CHARS = 80;
var shouldInline = function shouldInline2(data) {
  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
};
var OpenTag = function OpenTag2(_ref) {
  var tagName = _ref.tagName, attributes = _ref.attributes, styles = _ref.styles;
  return React5.createElement("span", {
    style: styles.base
  }, "<", React5.createElement("span", {
    style: styles.tagName
  }, tagName), function() {
    if (attributes) {
      var attributeNodes = [];
      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        attributeNodes.push(React5.createElement("span", {
          key: i
        }, " ", React5.createElement("span", {
          style: styles.htmlAttributeName
        }, attribute.name), '="', React5.createElement("span", {
          style: styles.htmlAttributeValue
        }, attribute.value), '"'));
      }
      return attributeNodes;
    }
  }(), ">");
};
var CloseTag = function CloseTag2(_ref2) {
  var tagName = _ref2.tagName, _ref2$isChildNode = _ref2.isChildNode, isChildNode = _ref2$isChildNode === void 0 ? false : _ref2$isChildNode, styles = _ref2.styles;
  return React5.createElement("span", {
    style: _extends4({}, styles.base, isChildNode && styles.offsetLeft)
  }, "</", React5.createElement("span", {
    style: styles.tagName
  }, tagName), ">");
};
var nameByNodeType = {
  1: "ELEMENT_NODE",
  3: "TEXT_NODE",
  7: "PROCESSING_INSTRUCTION_NODE",
  8: "COMMENT_NODE",
  9: "DOCUMENT_NODE",
  10: "DOCUMENT_TYPE_NODE",
  11: "DOCUMENT_FRAGMENT_NODE"
};
var DOMNodePreview = function DOMNodePreview2(_ref3) {
  var isCloseTag = _ref3.isCloseTag, data = _ref3.data, expanded = _ref3.expanded;
  var styles = useStyles("DOMNodePreview");
  if (isCloseTag) {
    return React5.createElement(CloseTag, {
      styles: styles.htmlCloseTag,
      isChildNode: true,
      tagName: data.tagName
    });
  }
  switch (data.nodeType) {
    case Node.ELEMENT_NODE:
      return React5.createElement("span", null, React5.createElement(OpenTag, {
        tagName: data.tagName,
        attributes: data.attributes,
        styles: styles.htmlOpenTag
      }), shouldInline(data) ? data.textContent : !expanded && "\u2026", !expanded && React5.createElement(CloseTag, {
        tagName: data.tagName,
        styles: styles.htmlCloseTag
      }));
    case Node.TEXT_NODE:
      return React5.createElement("span", null, data.textContent);
    case Node.CDATA_SECTION_NODE:
      return React5.createElement("span", null, "<![CDATA[" + data.textContent + "]]>");
    case Node.COMMENT_NODE:
      return React5.createElement("span", {
        style: styles.htmlComment
      }, "<!--", data.textContent, "-->");
    case Node.PROCESSING_INSTRUCTION_NODE:
      return React5.createElement("span", null, data.nodeName);
    case Node.DOCUMENT_TYPE_NODE:
      return React5.createElement("span", {
        style: styles.htmlDoctype
      }, "<!DOCTYPE ", data.name, data.publicId ? ' PUBLIC "'.concat(data.publicId, '"') : "", !data.publicId && data.systemId ? " SYSTEM" : "", data.systemId ? ' "'.concat(data.systemId, '"') : "", ">");
    case Node.DOCUMENT_NODE:
      return React5.createElement("span", null, data.nodeName);
    case Node.DOCUMENT_FRAGMENT_NODE:
      return React5.createElement("span", null, data.nodeName);
    default:
      return React5.createElement("span", null, nameByNodeType[data.nodeType]);
  }
};
DOMNodePreview.propTypes = {
  isCloseTag: prop_types_default.bool,
  name: prop_types_default.string,
  data: prop_types_default.object.isRequired,
  expanded: prop_types_default.bool.isRequired
};
var domIterator = regenerator.mark(function domIterator2(data) {
  var textInlined, i, node;
  return regenerator.wrap(function domIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(data && data.childNodes)) {
            _context.next = 17;
            break;
          }
          textInlined = shouldInline(data);
          if (!textInlined) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return");
        case 4:
          i = 0;
        case 5:
          if (!(i < data.childNodes.length)) {
            _context.next = 14;
            break;
          }
          node = data.childNodes[i];
          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("continue", 11);
        case 9:
          _context.next = 11;
          return {
            name: "".concat(node.tagName, "[").concat(i, "]"),
            data: node
          };
        case 11:
          i++;
          _context.next = 5;
          break;
        case 14:
          if (!data.tagName) {
            _context.next = 17;
            break;
          }
          _context.next = 17;
          return {
            name: "CLOSE_TAG",
            data: {
              tagName: data.tagName
            },
            isCloseTag: true
          };
        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, domIterator2);
});
var DOMInspector = function DOMInspector2(props) {
  return React5.createElement(TreeView, _extends4({
    nodeRenderer: DOMNodePreview,
    dataIterator: domIterator
  }, props));
};
DOMInspector.propTypes = {
  data: prop_types_default.object.isRequired
};
var DOMInspector$1 = themeAcceptor(DOMInspector);
var Inspector = function Inspector2(_ref) {
  var _ref$table = _ref.table, table = _ref$table === void 0 ? false : _ref$table, data = _ref.data, rest = _objectWithoutProperties3(_ref, ["table", "data"]);
  if (table) {
    return React5.createElement(TableInspector$1, _extends4({
      data
    }, rest));
  }
  if (is_dom_default(data))
    return React5.createElement(DOMInspector$1, _extends4({
      data
    }, rest));
  return React5.createElement(ObjectInspector$1, _extends4({
    data
  }, rest));
};
Inspector.propTypes = {
  data: prop_types_default.any,
  name: prop_types_default.string,
  table: prop_types_default.bool
};
var react_inspector_default = Inspector;

// node_modules/@storybook/addon-actions/dist/cjs/components/ActionLogger/index.js
import * as $cjs$_storybook_theming12 from "@storybook/theming";
import * as $cjs$react15 from "react";
function $$cjs_default$$33(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module55 = { exports: {} };
var exports55 = module55.exports;
function _typeof9(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof9 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof9 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof9(obj);
}
$$cjs_default$$33(es_symbol_exports);
$$cjs_default$$33(es_object_assign_exports);
$$cjs_default$$33(es_weak_map_exports);
$$cjs_default$$33(es_object_to_string_exports);
$$cjs_default$$33(es_string_iterator_exports);
$$cjs_default$$33(es_array_iterator_exports);
$$cjs_default$$33(web_dom_collections_iterator_exports);
$$cjs_default$$33(es_object_get_own_property_descriptor_exports);
$$cjs_default$$33(es_symbol_description_exports);
$$cjs_default$$33(es_symbol_iterator_exports);
Object.defineProperty(exports55, "__esModule", {
  value: true
});
exports55.ActionLogger = exports55.Wrapper = void 0;
$$cjs_default$$33(es_array_map_exports);
$$cjs_default$$33(es_function_name_exports);
$$cjs_default$$33(es_object_keys_exports);
var _react11 = _interopRequireWildcard8($$cjs_default$$33($cjs$react15));
var _theming12 = $$cjs_default$$33($cjs$_storybook_theming12);
var _reactInspector = _interopRequireDefault12($$cjs_default$$33(react_inspector_exports));
var _components6 = $$cjs_default$$33($cjs$_storybook_components6);
var _style = $$cjs_default$$33(style_exports);
function _interopRequireDefault12(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache8() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache8 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard8(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof9(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache8();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _extends5() {
  _extends5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Wrapper4 = (0, _theming12.styled)(function(_ref) {
  var children = _ref.children, className = _ref.className;
  return /* @__PURE__ */ _react11.default.createElement(_components6.ScrollArea, {
    horizontal: true,
    vertical: true,
    className
  }, children);
})({
  margin: 0,
  padding: "10px 5px 20px"
});
exports55.Wrapper = Wrapper4;
var ThemedInspector = (0, _theming12.withTheme)(function(_ref2) {
  var theme2 = _ref2.theme, props = _objectWithoutProperties4(_ref2, ["theme"]);
  return /* @__PURE__ */ _react11.default.createElement(_reactInspector.default, _extends5({
    theme: theme2.addonActionsTheme || "chromeLight"
  }, props));
});
var ActionLogger = function ActionLogger2(_ref3) {
  var actions3 = _ref3.actions, onClear = _ref3.onClear;
  return /* @__PURE__ */ _react11.default.createElement(_react11.Fragment, null, /* @__PURE__ */ _react11.default.createElement(Wrapper4, {
    title: "actionslogger"
  }, actions3.map(function(action2) {
    return /* @__PURE__ */ _react11.default.createElement(_style.Action, {
      key: action2.id
    }, action2.count > 1 && /* @__PURE__ */ _react11.default.createElement(_style.Counter, null, action2.count), /* @__PURE__ */ _react11.default.createElement(_style.InspectorContainer, null, /* @__PURE__ */ _react11.default.createElement(ThemedInspector, {
      sortObjectKeys: true,
      showNonenumerable: false,
      name: action2.data.name,
      data: action2.data.args || action2.data
    })));
  })), /* @__PURE__ */ _react11.default.createElement(_components6.ActionBar, {
    actionItems: [{
      title: "Clear",
      onClick: onClear
    }]
  }));
};
exports55.ActionLogger = ActionLogger;
var __export021;
var __export110;
if (Object.isExtensible(module55.exports)) {
  __export021 = module55.exports["ActionLogger"];
  __export110 = module55.exports["Wrapper"];
}

// node_modules/@storybook/addon-actions/dist/cjs/containers/ActionLogger/index.js
import * as $cjs$_storybook_core_events2 from "@storybook/core-events";

// node_modules/fast-deep-equal/index.js
var fast_deep_equal_exports = {};
__export(fast_deep_equal_exports, {
  default: () => fast_deep_equal_default
});
init_define_process_env();
var module56 = { exports: {} };
var exports56 = module56.exports;
module56.exports = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var fast_deep_equal_default = module56.exports;

// node_modules/@storybook/addon-actions/dist/cjs/containers/ActionLogger/index.js
import * as $cjs$react16 from "react";

// empty:core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of_exports = {};
__export(es_object_get_prototype_of_exports, {
  default: () => es_object_get_prototype_of_default
});
init_define_process_env();
var es_object_get_prototype_of_default = {};

// empty:core-js/modules/es.reflect.construct.js
var es_reflect_construct_exports = {};
__export(es_reflect_construct_exports, {
  default: () => es_reflect_construct_default
});
init_define_process_env();
var es_reflect_construct_default = {};

// node_modules/@storybook/addon-actions/dist/cjs/containers/ActionLogger/index.js
function $$cjs_default$$34(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module57 = { exports: {} };
var exports57 = module57.exports;
function _typeof10(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof10 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof10 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof10(obj);
}
$$cjs_default$$34(es_reflect_construct_exports);
$$cjs_default$$34(es_symbol_exports);
$$cjs_default$$34(es_symbol_description_exports);
$$cjs_default$$34(es_object_to_string_exports);
$$cjs_default$$34(es_symbol_iterator_exports);
$$cjs_default$$34(es_string_iterator_exports);
$$cjs_default$$34(es_array_iterator_exports);
$$cjs_default$$34(web_dom_collections_iterator_exports);
$$cjs_default$$34(es_array_from_exports);
$$cjs_default$$34(es_function_name_exports);
$$cjs_default$$34(es_weak_map_exports);
$$cjs_default$$34(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports57, "__esModule", {
  value: true
});
exports57.default = void 0;
$$cjs_default$$34(es_array_slice_exports);
$$cjs_default$$34(es_object_get_prototype_of_exports);
var _react12 = _interopRequireWildcard9($$cjs_default$$34($cjs$react16));
var _fastDeepEqual = _interopRequireDefault13($$cjs_default$$34(fast_deep_equal_exports));
var _coreEvents2 = $$cjs_default$$34($cjs$_storybook_core_events2);
var _ActionLogger = $$cjs_default$$34(ActionLogger_exports);
var _ = $$cjs_default$$34(cjs_exports);
function _interopRequireDefault13(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache9() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache9 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard9(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof10(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache9();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray11(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray11(o, minLen);
}
function _iterableToArray5(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray11(arr);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf3(o, p);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (_typeof10(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized3(self2);
}
function _assertThisInitialized3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
var safeDeepEqual = function safeDeepEqual2(a, b) {
  try {
    return (0, _fastDeepEqual.default)(a, b);
  } catch (e) {
    return false;
  }
};
var ActionLogger3 = /* @__PURE__ */ function(_Component) {
  _inherits2(ActionLogger4, _Component);
  var _super = _createSuper2(ActionLogger4);
  function ActionLogger4(props) {
    var _this;
    _classCallCheck2(this, ActionLogger4);
    _this = _super.call(this, props);
    _this.mounted = void 0;
    _this.handleStoryChange = function() {
      var actions3 = _this.state.actions;
      if (actions3.length > 0 && actions3[0].options.clearOnStoryChange) {
        _this.clearActions();
      }
    };
    _this.addAction = function(action2) {
      _this.setState(function(prevState) {
        var actions3 = _toConsumableArray6(prevState.actions);
        var previous = actions3.length && actions3[0];
        if (previous && safeDeepEqual(previous.data, action2.data)) {
          previous.count++;
        } else {
          action2.count = 1;
          actions3.unshift(action2);
        }
        return {
          actions: actions3.slice(0, action2.options.limit)
        };
      });
    };
    _this.clearActions = function() {
      _this.setState({
        actions: []
      });
    };
    _this.state = {
      actions: []
    };
    return _this;
  }
  _createClass2(ActionLogger4, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      var api = this.props.api;
      api.on(_.EVENT_ID, this.addAction);
      api.on(_coreEvents2.STORY_CHANGED, this.handleStoryChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      var api = this.props.api;
      api.off(_coreEvents2.STORY_CHANGED, this.handleStoryChange);
      api.off(_.EVENT_ID, this.addAction);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$actions = this.state.actions, actions3 = _this$state$actions === void 0 ? [] : _this$state$actions;
      var active = this.props.active;
      var props = {
        actions: actions3,
        onClear: this.clearActions
      };
      return active ? /* @__PURE__ */ _react12.default.createElement(_ActionLogger.ActionLogger, props) : null;
    }
  }]);
  return ActionLogger4;
}(_react12.Component);
exports57.default = ActionLogger3;
var ActionLogger_default = module57.exports != null && typeof module57.exports === "object" && "default" in module57.exports ? module57.exports.default : module57.exports;

// node_modules/@storybook/addon-actions/dist/cjs/register.js
import * as $cjs$_storybook_core_events3 from "@storybook/core-events";
import * as $cjs$_storybook_addons4 from "@storybook/addons";
import * as $cjs$react17 from "react";
function $$cjs_default$$35(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module58 = { exports: {} };
var exports58 = module58.exports;
function _typeof11(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof11 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof11 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof11(obj);
}
$$cjs_default$$35(es_symbol_exports);
$$cjs_default$$35(es_symbol_description_exports);
$$cjs_default$$35(es_object_to_string_exports);
$$cjs_default$$35(es_symbol_iterator_exports);
$$cjs_default$$35(es_string_iterator_exports);
$$cjs_default$$35(es_array_iterator_exports);
$$cjs_default$$35(web_dom_collections_iterator_exports);
$$cjs_default$$35(es_array_slice_exports);
$$cjs_default$$35(es_function_name_exports);
$$cjs_default$$35(es_array_from_exports);
$$cjs_default$$35(es_weak_map_exports);
$$cjs_default$$35(es_object_get_own_property_descriptor_exports);
var _react13 = _interopRequireWildcard10($$cjs_default$$35($cjs$react17));
var _addons4 = $$cjs_default$$35($cjs$_storybook_addons4);
var _coreEvents3 = $$cjs_default$$35($cjs$_storybook_core_events3);
var _ActionLogger2 = _interopRequireDefault14($$cjs_default$$35(ActionLogger_exports2));
var _constants7 = $$cjs_default$$35(constants_exports2);
function _interopRequireDefault14(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache10() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache10 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard10(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof11(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache10();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray9(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray12(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray12(o, minLen);
}
function _arrayLikeToArray12(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
_addons4.addons.register(_constants7.ADDON_ID, function(api) {
  _addons4.addons.addPanel(_constants7.PANEL_ID, {
    title: function title() {
      var _useState = (0, _react13.useState)(0), _useState2 = _slicedToArray9(_useState, 2), actionsCount = _useState2[0], setActionsCount = _useState2[1];
      var onEvent = function onEvent2() {
        return setActionsCount(function(previous) {
          return previous + 1;
        });
      };
      var onChange = function onChange2() {
        return setActionsCount(0);
      };
      (0, _react13.useEffect)(function() {
        api.on(_constants7.EVENT_ID, onEvent);
        api.on(_coreEvents3.STORY_CHANGED, onChange);
        return function() {
          api.off(_constants7.EVENT_ID, onEvent);
          api.off(_coreEvents3.STORY_CHANGED, onChange);
        };
      });
      var suffix = actionsCount === 0 ? "" : " (".concat(actionsCount, ")");
      return "Actions".concat(suffix);
    },
    type: _addons4.types.PANEL,
    render: function render(_ref) {
      var active = _ref.active, key = _ref.key;
      return /* @__PURE__ */ _react13.default.createElement(_ActionLogger2.default, {
        key,
        api,
        active
      });
    },
    paramKey: _constants7.PARAM_KEY
  });
});
var register_default2 = module58.exports;

// node_modules/@storybook/addon-backgrounds/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-backgrounds/dist/cjs/containers/GridSelector.js
var GridSelector_exports = {};
__export(GridSelector_exports, {
  GridSelector: () => __export023
});
init_define_process_env();

// node_modules/@storybook/addon-backgrounds/dist/cjs/constants.js
var constants_exports3 = {};
__export(constants_exports3, {
  ADDON_ID: () => __export33,
  EVENTS: () => __export022,
  GRID_PARAM_KEY: () => __export111,
  PARAM_KEY: () => __export26
});
init_define_process_env();
var module59 = { exports: {} };
var exports59 = module59.exports;
Object.defineProperty(exports59, "__esModule", {
  value: true
});
exports59.EVENTS = exports59.GRID_PARAM_KEY = exports59.PARAM_KEY = exports59.ADDON_ID = void 0;
var ADDON_ID3 = "storybook/background";
exports59.ADDON_ID = ADDON_ID3;
var PARAM_KEY3 = "backgrounds";
exports59.PARAM_KEY = PARAM_KEY3;
var GRID_PARAM_KEY = "grid";
exports59.GRID_PARAM_KEY = GRID_PARAM_KEY;
var EVENTS2 = {
  UPDATE: "".concat(ADDON_ID3, "/update")
};
exports59.EVENTS = EVENTS2;
var __export022;
var __export111;
var __export26;
var __export33;
if (Object.isExtensible(module59.exports)) {
  __export022 = module59.exports["EVENTS"];
  __export111 = module59.exports["GRID_PARAM_KEY"];
  __export26 = module59.exports["PARAM_KEY"];
  __export33 = module59.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-backgrounds/dist/cjs/containers/GridSelector.js
import * as $cjs$_storybook_components7 from "@storybook/components";
import * as $cjs$_storybook_api3 from "@storybook/api";
import * as $cjs$react18 from "react";
function $$cjs_default$$36(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module60 = { exports: {} };
var exports60 = module60.exports;
function _typeof12(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof12 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof12 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof12(obj);
}
$$cjs_default$$36(es_symbol_exports);
$$cjs_default$$36(es_symbol_description_exports);
$$cjs_default$$36(es_object_to_string_exports);
$$cjs_default$$36(es_symbol_iterator_exports);
$$cjs_default$$36(es_string_iterator_exports);
$$cjs_default$$36(es_array_iterator_exports);
$$cjs_default$$36(web_dom_collections_iterator_exports);
$$cjs_default$$36(es_array_slice_exports);
$$cjs_default$$36(es_function_name_exports);
$$cjs_default$$36(es_array_from_exports);
$$cjs_default$$36(es_weak_map_exports);
$$cjs_default$$36(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports60, "__esModule", {
  value: true
});
exports60.GridSelector = void 0;
$$cjs_default$$36(es_object_assign_exports);
var _react14 = _interopRequireWildcard11($$cjs_default$$36($cjs$react18));
var _api3 = $$cjs_default$$36($cjs$_storybook_api3);
var _components7 = $$cjs_default$$36($cjs$_storybook_components7);
var _constants8 = $$cjs_default$$36(constants_exports3);
function _getRequireWildcardCache11() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache11 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard11(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof12(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache11();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray13(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray13(o, minLen);
}
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit9(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
var GridSelector = /* @__PURE__ */ (0, _react14.memo)(function() {
  var _globals$BACKGROUNDS_;
  var _useGlobals = (0, _api3.useGlobals)(), _useGlobals2 = _slicedToArray10(_useGlobals, 2), globals = _useGlobals2[0], updateGlobals = _useGlobals2[1];
  var _useParameter = (0, _api3.useParameter)(_constants8.PARAM_KEY, {
    grid: {
      disable: false
    }
  }), grid = _useParameter.grid;
  if (grid !== null && grid !== void 0 && grid.disable) {
    return null;
  }
  var isActive = ((_globals$BACKGROUNDS_ = globals[_constants8.PARAM_KEY]) === null || _globals$BACKGROUNDS_ === void 0 ? void 0 : _globals$BACKGROUNDS_.grid) || false;
  return /* @__PURE__ */ _react14.default.createElement(_components7.IconButton, {
    key: "background",
    active: isActive,
    title: "Apply a grid to the preview",
    onClick: function onClick() {
      return updateGlobals(_defineProperty6({}, _constants8.PARAM_KEY, Object.assign({}, globals[_constants8.PARAM_KEY], {
        grid: !isActive
      })));
    }
  }, /* @__PURE__ */ _react14.default.createElement(_components7.Icons, {
    icon: "grid"
  }));
});
exports60.GridSelector = GridSelector;
var __export023;
if (Object.isExtensible(module60.exports)) {
  __export023 = module60.exports["GridSelector"];
}

// node_modules/@storybook/addon-backgrounds/dist/cjs/containers/BackgroundSelector.js
var BackgroundSelector_exports = {};
__export(BackgroundSelector_exports, {
  BackgroundSelector: () => __export026
});
init_define_process_env();

// node_modules/@storybook/addon-backgrounds/dist/cjs/helpers/index.js
var helpers_exports = {};
__export(helpers_exports, {
  addBackgroundStyle: () => __export024,
  addGridStyle: () => __export112,
  clearStyles: () => __export27,
  getBackgroundColorByName: () => __export34,
  isReduceMotionEnabled: () => __export43
});
init_define_process_env();
import * as $cjs$_storybook_client_logger from "@storybook/client-logger";

// empty:core-js/modules/es.array.join.js
var es_array_join_exports = {};
__export(es_array_join_exports, {
  default: () => es_array_join_default
});
init_define_process_env();
var es_array_join_default = {};

// empty:core-js/modules/es.array.find.js
var es_array_find_exports = {};
__export(es_array_find_exports, {
  default: () => es_array_find_default
});
init_define_process_env();
var es_array_find_default = {};

// node_modules/@storybook/addon-backgrounds/dist/cjs/helpers/index.js
function $$cjs_default$$37(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module61 = { exports: {} };
var exports61 = module61.exports;
$$cjs_default$$37(es_array_slice_exports);
$$cjs_default$$37(es_object_freeze_exports);
Object.defineProperty(exports61, "__esModule", {
  value: true
});
exports61.addBackgroundStyle = exports61.addGridStyle = exports61.clearStyles = exports61.getBackgroundColorByName = exports61.isReduceMotionEnabled = void 0;
$$cjs_default$$37(es_array_find_exports);
$$cjs_default$$37(es_function_name_exports);
$$cjs_default$$37(es_array_join_exports);
$$cjs_default$$37(es_array_map_exports);
$$cjs_default$$37(web_dom_collections_for_each_exports);
var _global2 = _interopRequireDefault15($$cjs_default$$37(window_exports));
var _tsDedent3 = _interopRequireDefault15($$cjs_default$$37(esm_exports2));
var _clientLogger = $$cjs_default$$37($cjs$_storybook_client_logger);
var _templateObject4;
function _interopRequireDefault15(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _taggedTemplateLiteral3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var document3 = _global2.default.document;
var window2 = _global2.default.window;
var isReduceMotionEnabled = function isReduceMotionEnabled2() {
  var prefersReduceMotion = window2.matchMedia("(prefers-reduced-motion: reduce)");
  return prefersReduceMotion.matches;
};
exports61.isReduceMotionEnabled = isReduceMotionEnabled;
var getBackgroundColorByName = function getBackgroundColorByName2(currentSelectedValue) {
  var backgrounds2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var defaultName = arguments.length > 2 ? arguments[2] : void 0;
  if (currentSelectedValue === "transparent") {
    return "transparent";
  }
  if (backgrounds2.find(function(background) {
    return background.value === currentSelectedValue;
  })) {
    return currentSelectedValue;
  }
  var defaultBackground = backgrounds2.find(function(background) {
    return background.name === defaultName;
  });
  if (defaultBackground) {
    return defaultBackground.value;
  }
  if (defaultName) {
    var availableColors = backgrounds2.map(function(background) {
      return background.name;
    }).join(", ");
    _clientLogger.logger.warn((0, _tsDedent3.default)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral3(['\n        Backgrounds Addon: could not find the default color "', '".\n        These are the available colors for your story based on your configuration:\n        ', ".\n      "])), defaultName, availableColors));
  }
  return "transparent";
};
exports61.getBackgroundColorByName = getBackgroundColorByName;
var clearStyles = function clearStyles2(selector) {
  var selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};
exports61.clearStyles = clearStyles;
var clearStyle = function clearStyle2(selector) {
  var element = document3.getElementById(selector);
  if (element) {
    element.parentElement.removeChild(element);
  }
};
var addGridStyle = function addGridStyle2(selector, css) {
  var existingStyle = document3.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    var style = document3.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    document3.head.appendChild(style);
  }
};
exports61.addGridStyle = addGridStyle;
var addBackgroundStyle = function addBackgroundStyle2(selector, css, storyId) {
  var existingStyle = document3.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    var style = document3.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    var gridStyleSelector = "addon-backgrounds-grid".concat(storyId ? "-docs-".concat(storyId) : "");
    var existingGridStyle = document3.getElementById(gridStyleSelector);
    if (existingGridStyle) {
      existingGridStyle.parentElement.insertBefore(style, existingGridStyle);
    } else {
      document3.head.appendChild(style);
    }
  }
};
exports61.addBackgroundStyle = addBackgroundStyle;
var __export024;
var __export112;
var __export27;
var __export34;
var __export43;
if (Object.isExtensible(module61.exports)) {
  __export024 = module61.exports["addBackgroundStyle"];
  __export112 = module61.exports["addGridStyle"];
  __export27 = module61.exports["clearStyles"];
  __export34 = module61.exports["getBackgroundColorByName"];
  __export43 = module61.exports["isReduceMotionEnabled"];
}

// node_modules/@storybook/addon-backgrounds/dist/cjs/components/ColorIcon.js
var ColorIcon_exports = {};
__export(ColorIcon_exports, {
  ColorIcon: () => __export025
});
init_define_process_env();
import * as $cjs$_storybook_theming13 from "@storybook/theming";
function $$cjs_default$$38(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module62 = { exports: {} };
var exports62 = module62.exports;
Object.defineProperty(exports62, "__esModule", {
  value: true
});
exports62.ColorIcon = void 0;
var _theming13 = $$cjs_default$$38($cjs$_storybook_theming13);
var ColorIcon2 = _theming13.styled.span(function(_ref) {
  var background = _ref.background;
  return {
    borderRadius: "1rem",
    display: "block",
    height: "1rem",
    width: "1rem",
    background
  };
}, function(_ref2) {
  var theme2 = _ref2.theme;
  return {
    boxShadow: "".concat(theme2.appBorderColor, " 0 0 0 1px inset")
  };
});
exports62.ColorIcon = ColorIcon2;
var __export025;
if (Object.isExtensible(module62.exports)) {
  __export025 = module62.exports["ColorIcon"];
}

// node_modules/@storybook/addon-backgrounds/dist/cjs/containers/BackgroundSelector.js
import * as $cjs$_storybook_components8 from "@storybook/components";
import * as $cjs$_storybook_client_logger2 from "@storybook/client-logger";
import * as $cjs$_storybook_api4 from "@storybook/api";

// node_modules/memoizerific/memoizerific.js
var memoizerific_exports = {};
__export(memoizerific_exports, {
  default: () => memoizerific_default
});
init_define_process_env();
var __umd = {};
(function(window3, global5, globalThis2, self2, module91, exports91) {
  (function(f) {
    if (typeof exports91 === "object" && typeof module91 !== "undefined") {
      module91.exports = f();
    } else if (typeof define === "function" && define.amd) {
      define([], f);
    } else {
      var g;
      if (typeof window3 !== "undefined") {
        g = window3;
      } else if (typeof global5 !== "undefined") {
        g = global5;
      } else if (typeof self2 !== "undefined") {
        g = self2;
      } else {
        g = this;
      }
      g.memoizerific = f();
    }
  })(function() {
    var define2, module92, exports92;
    return function e(t, n, r) {
      function s(o2, u) {
        if (!n[o2]) {
          if (!t[o2]) {
            var a = typeof __require == "function" && __require;
            if (!u && a)
              return a(o2, true);
            if (i)
              return i(o2, true);
            var f = new Error("Cannot find module '" + o2 + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o2] = { exports: {} };
          t[o2][0].call(l.exports, function(e2) {
            var n2 = t[o2][1][e2];
            return s(n2 ? n2 : e2);
          }, l, l.exports, e, t, n, r);
        }
        return n[o2].exports;
      }
      var i = typeof __require == "function" && __require;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    }({ 1: [function(_dereq_, module93, exports93) {
      module93.exports = function(forceSimilar) {
        if (typeof Map !== "function" || forceSimilar) {
          var Similar = _dereq_("./similar");
          return new Similar();
        } else {
          return new Map();
        }
      };
    }, { "./similar": 2 }], 2: [function(_dereq_, module93, exports93) {
      function Similar() {
        this.list = [];
        this.lastItem = void 0;
        this.size = 0;
        return this;
      }
      Similar.prototype.get = function(key) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          return this.lastItem.val;
        }
        index = this.indexOf(key);
        if (index >= 0) {
          this.lastItem = this.list[index];
          return this.list[index].val;
        }
        return void 0;
      };
      Similar.prototype.set = function(key, val) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          this.lastItem.val = val;
          return this;
        }
        index = this.indexOf(key);
        if (index >= 0) {
          this.lastItem = this.list[index];
          this.list[index].val = val;
          return this;
        }
        this.lastItem = { key, val };
        this.list.push(this.lastItem);
        this.size++;
        return this;
      };
      Similar.prototype.delete = function(key) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          this.lastItem = void 0;
        }
        index = this.indexOf(key);
        if (index >= 0) {
          this.size--;
          return this.list.splice(index, 1)[0];
        }
        return void 0;
      };
      Similar.prototype.has = function(key) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
          return true;
        }
        index = this.indexOf(key);
        if (index >= 0) {
          this.lastItem = this.list[index];
          return true;
        }
        return false;
      };
      Similar.prototype.forEach = function(callback, thisArg) {
        var i;
        for (i = 0; i < this.size; i++) {
          callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
        }
      };
      Similar.prototype.indexOf = function(key) {
        var i;
        for (i = 0; i < this.size; i++) {
          if (this.isEqual(this.list[i].key, key)) {
            return i;
          }
        }
        return -1;
      };
      Similar.prototype.isEqual = function(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      };
      module93.exports = Similar;
    }, {}], 3: [function(_dereq_, module93, exports93) {
      var MapOrSimilar = _dereq_("map-or-similar");
      module93.exports = function(limit) {
        var cache = new MapOrSimilar(void 0 === "true"), lru = [];
        return function(fn) {
          var memoizerific = function() {
            var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i;
            if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) {
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            }
            for (i = 0; i < argsLengthMinusOne; i++) {
              lruPath[i] = {
                cacheItem: currentCache,
                arg: arguments[i]
              };
              if (currentCache.has(arguments[i])) {
                currentCache = currentCache.get(arguments[i]);
                continue;
              }
              isMemoized = false;
              newMap = new MapOrSimilar(void 0 === "true");
              currentCache.set(arguments[i], newMap);
              currentCache = newMap;
            }
            if (isMemoized) {
              if (currentCache.has(arguments[argsLengthMinusOne])) {
                fnResult = currentCache.get(arguments[argsLengthMinusOne]);
              } else {
                isMemoized = false;
              }
            }
            if (!isMemoized) {
              fnResult = fn.apply(null, arguments);
              currentCache.set(arguments[argsLengthMinusOne], fnResult);
            }
            if (limit > 0) {
              lruPath[argsLengthMinusOne] = {
                cacheItem: currentCache,
                arg: arguments[argsLengthMinusOne]
              };
              if (isMemoized) {
                moveToMostRecentLru(lru, lruPath);
              } else {
                lru.push(lruPath);
              }
              if (lru.length > limit) {
                removeCachedResult(lru.shift());
              }
            }
            memoizerific.wasMemoized = isMemoized;
            memoizerific.numArgs = argsLengthMinusOne + 1;
            return fnResult;
          };
          memoizerific.limit = limit;
          memoizerific.wasMemoized = false;
          memoizerific.cache = cache;
          memoizerific.lru = lru;
          return memoizerific;
        };
      };
      function moveToMostRecentLru(lru, lruPath) {
        var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i, ii;
        for (i = 0; i < lruLen; i++) {
          isMatch = true;
          for (ii = 0; ii < lruPathLen; ii++) {
            if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
              isMatch = false;
              break;
            }
          }
          if (isMatch) {
            break;
          }
        }
        lru.push(lru.splice(i, 1)[0]);
      }
      function removeCachedResult(removedLru) {
        var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i;
        currentLru.cacheItem.delete(currentLru.arg);
        for (i = removedLruLen - 2; i >= 0; i--) {
          currentLru = removedLru[i];
          tmp = currentLru.cacheItem.get(currentLru.arg);
          if (!tmp || !tmp.size) {
            currentLru.cacheItem.delete(currentLru.arg);
          } else {
            break;
          }
        }
      }
      function isEqual(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
}).call(__umd, __umd, __umd, __umd, void 0, void 0);
var __umdKeys = Object.keys(__umd);
var __umdExport = __umdKeys.length === 1 ? __umdKeys[0] : false;
if (__umdExport && typeof window !== "undefined")
  window[__umdExport] = __umd[__umdExport];
if (__umdExport && typeof self !== "undefined")
  self[__umdExport] = __umd[__umdExport];
if (__umdExport && typeof global !== "undefined")
  global[__umdExport] = __umd[__umdExport];
if (__umdExport && typeof globalThis !== "undefined")
  globalThis[__umdExport] = __umd[__umdExport];
var memoizerific_default = __umdExport ? __umd[__umdExport] : __umd;

// node_modules/@storybook/addon-backgrounds/dist/cjs/containers/BackgroundSelector.js
import * as $cjs$react19 from "react";
function $$cjs_default$$39(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module63 = { exports: {} };
var exports63 = module63.exports;
function _typeof13(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof13 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof13 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof13(obj);
}
$$cjs_default$$39(es_symbol_exports);
$$cjs_default$$39(es_symbol_description_exports);
$$cjs_default$$39(es_symbol_iterator_exports);
$$cjs_default$$39(es_string_iterator_exports);
$$cjs_default$$39(es_array_from_exports);
$$cjs_default$$39(es_array_slice_exports);
$$cjs_default$$39(es_weak_map_exports);
$$cjs_default$$39(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports63, "__esModule", {
  value: true
});
exports63.BackgroundSelector = void 0;
$$cjs_default$$39(es_array_map_exports);
$$cjs_default$$39(es_function_name_exports);
$$cjs_default$$39(es_array_concat_exports);
$$cjs_default$$39(es_object_to_string_exports);
$$cjs_default$$39(es_array_iterator_exports);
$$cjs_default$$39(web_dom_collections_iterator_exports);
$$cjs_default$$39(es_object_assign_exports);
var _react15 = _interopRequireWildcard12($$cjs_default$$39($cjs$react19));
var _memoizerific = _interopRequireDefault16($$cjs_default$$39(memoizerific_exports));
var _api4 = $$cjs_default$$39($cjs$_storybook_api4);
var _clientLogger2 = $$cjs_default$$39($cjs$_storybook_client_logger2);
var _components8 = $$cjs_default$$39($cjs$_storybook_components8);
var _constants9 = $$cjs_default$$39(constants_exports3);
var _ColorIcon = $$cjs_default$$39(ColorIcon_exports);
var _helpers = $$cjs_default$$39(helpers_exports);
function _interopRequireDefault16(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache12() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache12 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard12(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof13(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache12();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray11(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray14(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray14(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray14(o, minLen);
}
function _iterableToArray6(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray14(arr);
}
function _arrayLikeToArray14(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var createBackgroundSelectorItem = (0, _memoizerific.default)(1e3)(function(id, name, value, hasSwatch, change, active) {
  return {
    id: id || name,
    title: name,
    onClick: function onClick() {
      change({
        selected: value,
        name
      });
    },
    value,
    right: hasSwatch ? /* @__PURE__ */ _react15.default.createElement(_ColorIcon.ColorIcon, {
      background: value
    }) : void 0,
    active
  };
});
var getDisplayedItems = (0, _memoizerific.default)(10)(function(backgrounds2, selectedBackgroundColor, change) {
  var backgroundSelectorItems = backgrounds2.map(function(_ref) {
    var name = _ref.name, value = _ref.value;
    return createBackgroundSelectorItem(null, name, value, true, change, value === selectedBackgroundColor);
  });
  if (selectedBackgroundColor !== "transparent") {
    return [createBackgroundSelectorItem("reset", "Clear background", "transparent", null, change, false)].concat(_toConsumableArray7(backgroundSelectorItems));
  }
  return backgroundSelectorItems;
});
var DEFAULT_BACKGROUNDS_CONFIG = {
  default: null,
  disable: true,
  values: []
};
var BackgroundSelector = /* @__PURE__ */ (0, _react15.memo)(function() {
  var _globals$BACKGROUNDS_;
  var backgroundsConfig = (0, _api4.useParameter)(_constants9.PARAM_KEY, DEFAULT_BACKGROUNDS_CONFIG);
  var _useGlobals = (0, _api4.useGlobals)(), _useGlobals2 = _slicedToArray11(_useGlobals, 2), globals = _useGlobals2[0], updateGlobals = _useGlobals2[1];
  var globalsBackgroundColor = (_globals$BACKGROUNDS_ = globals[_constants9.PARAM_KEY]) === null || _globals$BACKGROUNDS_ === void 0 ? void 0 : _globals$BACKGROUNDS_.value;
  var selectedBackgroundColor = (0, _react15.useMemo)(function() {
    return (0, _helpers.getBackgroundColorByName)(globalsBackgroundColor, backgroundsConfig.values, backgroundsConfig.default);
  }, [backgroundsConfig, globalsBackgroundColor]);
  if (Array.isArray(backgroundsConfig)) {
    _clientLogger2.logger.warn("Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md");
  }
  var onBackgroundChange = (0, _react15.useCallback)(function(value) {
    updateGlobals(_defineProperty7({}, _constants9.PARAM_KEY, Object.assign({}, globals[_constants9.PARAM_KEY], {
      value
    })));
  }, [backgroundsConfig, globals, updateGlobals]);
  if (backgroundsConfig.disable) {
    return null;
  }
  return /* @__PURE__ */ _react15.default.createElement(_react15.Fragment, null, /* @__PURE__ */ _react15.default.createElement(_components8.WithTooltip, {
    placement: "top",
    trigger: "click",
    closeOnClick: true,
    tooltip: function tooltip(_ref2) {
      var onHide = _ref2.onHide;
      return /* @__PURE__ */ _react15.default.createElement(_components8.TooltipLinkList, {
        links: getDisplayedItems(backgroundsConfig.values, selectedBackgroundColor, function(_ref3) {
          var selected = _ref3.selected;
          if (selectedBackgroundColor !== selected) {
            onBackgroundChange(selected);
          }
          onHide();
        })
      });
    }
  }, /* @__PURE__ */ _react15.default.createElement(_components8.IconButton, {
    key: "background",
    title: "Change the background of the preview",
    active: selectedBackgroundColor !== "transparent"
  }, /* @__PURE__ */ _react15.default.createElement(_components8.Icons, {
    icon: "photo"
  }))));
});
exports63.BackgroundSelector = BackgroundSelector;
var __export026;
if (Object.isExtensible(module63.exports)) {
  __export026 = module63.exports["BackgroundSelector"];
}

// node_modules/@storybook/addon-backgrounds/dist/cjs/register.js
import * as $cjs$_storybook_addons5 from "@storybook/addons";
import * as $cjs$react20 from "react";
function $$cjs_default$$40(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module64 = { exports: {} };
var exports64 = module64.exports;
function _typeof14(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof14 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof14 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof14(obj);
}
$$cjs_default$$40(es_weak_map_exports);
$$cjs_default$$40(es_object_to_string_exports);
$$cjs_default$$40(es_string_iterator_exports);
$$cjs_default$$40(es_array_iterator_exports);
$$cjs_default$$40(web_dom_collections_iterator_exports);
$$cjs_default$$40(es_object_get_own_property_descriptor_exports);
$$cjs_default$$40(es_symbol_exports);
$$cjs_default$$40(es_symbol_description_exports);
$$cjs_default$$40(es_symbol_iterator_exports);
$$cjs_default$$40(es_string_match_exports);
$$cjs_default$$40(es_regexp_exec_exports);
var _react16 = _interopRequireWildcard13($$cjs_default$$40($cjs$react20));
var _addons5 = $$cjs_default$$40($cjs$_storybook_addons5);
var _constants10 = $$cjs_default$$40(constants_exports3);
var _BackgroundSelector = $$cjs_default$$40(BackgroundSelector_exports);
var _GridSelector = $$cjs_default$$40(GridSelector_exports);
function _getRequireWildcardCache13() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache13 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard13(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof14(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache13();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
_addons5.addons.register(_constants10.ADDON_ID, function() {
  _addons5.addons.add(_constants10.ADDON_ID, {
    title: "Backgrounds",
    type: _addons5.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^(story|docs)$/));
    },
    render: function render() {
      return /* @__PURE__ */ _react16.default.createElement(_react16.Fragment, null, /* @__PURE__ */ _react16.default.createElement(_BackgroundSelector.BackgroundSelector, null), /* @__PURE__ */ _react16.default.createElement(_GridSelector.GridSelector, null));
    }
  });
});
var register_default3 = module64.exports;

// node_modules/@storybook/addon-controls/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-controls/dist/cjs/constants.js
var constants_exports4 = {};
__export(constants_exports4, {
  ADDON_ID: () => __export113,
  PARAM_KEY: () => __export027
});
init_define_process_env();
var module65 = { exports: {} };
var exports65 = module65.exports;
Object.defineProperty(exports65, "__esModule", {
  value: true
});
exports65.PARAM_KEY = exports65.ADDON_ID = void 0;
var ADDON_ID4 = "addon-controls";
exports65.ADDON_ID = ADDON_ID4;
var PARAM_KEY4 = "controls";
exports65.PARAM_KEY = PARAM_KEY4;
var __export027;
var __export113;
if (Object.isExtensible(module65.exports)) {
  __export027 = module65.exports["PARAM_KEY"];
  __export113 = module65.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-controls/dist/cjs/ControlsPanel.js
var ControlsPanel_exports = {};
__export(ControlsPanel_exports, {
  ControlsPanel: () => __export028
});
init_define_process_env();
import * as $cjs$_storybook_components9 from "@storybook/components";
import * as $cjs$_storybook_api5 from "@storybook/api";
import * as $cjs$react21 from "react";

// empty:core-js/modules/es.object.values.js
var es_object_values_exports = {};
__export(es_object_values_exports, {
  default: () => es_object_values_default
});
init_define_process_env();
var es_object_values_default = {};

// node_modules/@storybook/addon-controls/dist/cjs/ControlsPanel.js
function $$cjs_default$$41(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module66 = { exports: {} };
var exports66 = module66.exports;
$$cjs_default$$41(es_symbol_exports);
$$cjs_default$$41(es_symbol_description_exports);
$$cjs_default$$41(es_object_to_string_exports);
$$cjs_default$$41(es_symbol_iterator_exports);
$$cjs_default$$41(es_string_iterator_exports);
$$cjs_default$$41(es_array_iterator_exports);
$$cjs_default$$41(web_dom_collections_iterator_exports);
$$cjs_default$$41(es_array_slice_exports);
$$cjs_default$$41(es_function_name_exports);
$$cjs_default$$41(es_array_from_exports);
Object.defineProperty(exports66, "__esModule", {
  value: true
});
exports66.ControlsPanel = void 0;
$$cjs_default$$41(es_object_values_exports);
$$cjs_default$$41(es_array_reduce_exports);
$$cjs_default$$41(es_object_entries_exports);
$$cjs_default$$41(es_object_assign_exports);
var _react17 = _interopRequireDefault17($$cjs_default$$41($cjs$react21));
var _api5 = $$cjs_default$$41($cjs$_storybook_api5);
var _components9 = $$cjs_default$$41($cjs$_storybook_components9);
var _constants11 = $$cjs_default$$41(constants_exports4);
function _interopRequireDefault17(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _slicedToArray12(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray15(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray15(o, minLen);
}
function _arrayLikeToArray15(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit11(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
var ControlsPanel = function ControlsPanel2() {
  var _useArgs = (0, _api5.useArgs)(), _useArgs2 = _slicedToArray12(_useArgs, 3), args = _useArgs2[0], updateArgs = _useArgs2[1], resetArgs = _useArgs2[2];
  var rows = (0, _api5.useArgTypes)();
  var isArgsStory = (0, _api5.useParameter)("__isArgsStory", false);
  var _useParameter = (0, _api5.useParameter)(_constants11.PARAM_KEY, {}), expanded = _useParameter.expanded, sort = _useParameter.sort, presetColors = _useParameter.presetColors, _useParameter$hideNoC = _useParameter.hideNoControlsWarning, hideNoControlsWarning = _useParameter$hideNoC === void 0 ? false : _useParameter$hideNoC;
  var _useStorybookState = (0, _api5.useStorybookState)(), path = _useStorybookState.path;
  var hasControls = Object.values(rows).some(function(arg) {
    return arg === null || arg === void 0 ? void 0 : arg.control;
  });
  var showWarning = !(hasControls && isArgsStory) && !hideNoControlsWarning;
  var withPresetColors = Object.entries(rows).reduce(function(acc, _ref) {
    var _arg$control, _arg$control2;
    var _ref2 = _slicedToArray12(_ref, 2), key = _ref2[0], arg = _ref2[1];
    if ((arg === null || arg === void 0 ? void 0 : (_arg$control = arg.control) === null || _arg$control === void 0 ? void 0 : _arg$control.type) !== "color" || arg !== null && arg !== void 0 && (_arg$control2 = arg.control) !== null && _arg$control2 !== void 0 && _arg$control2.presetColors)
      acc[key] = arg;
    else
      acc[key] = Object.assign({}, arg, {
        control: Object.assign({}, arg.control, {
          presetColors
        })
      });
    return acc;
  }, {});
  return /* @__PURE__ */ _react17.default.createElement(_react17.default.Fragment, null, showWarning && /* @__PURE__ */ _react17.default.createElement(_components9.NoControlsWarning, null), /* @__PURE__ */ _react17.default.createElement(_components9.ArgsTable, {
    key: path,
    compact: !expanded && hasControls,
    rows: withPresetColors,
    args,
    updateArgs,
    resetArgs,
    inAddonPanel: true,
    sort
  }));
};
exports66.ControlsPanel = ControlsPanel;
var __export028;
if (Object.isExtensible(module66.exports)) {
  __export028 = module66.exports["ControlsPanel"];
}

// node_modules/@storybook/addon-controls/dist/cjs/register.js
import * as $cjs$_storybook_api6 from "@storybook/api";
import * as $cjs$_storybook_components10 from "@storybook/components";
import * as $cjs$_storybook_addons6 from "@storybook/addons";
import * as $cjs$react22 from "react";
function $$cjs_default$$42(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module67 = { exports: {} };
var exports67 = module67.exports;
$$cjs_default$$42(es_array_filter_exports);
$$cjs_default$$42(es_object_values_exports);
var _react18 = _interopRequireDefault18($$cjs_default$$42($cjs$react22));
var _addons6 = $$cjs_default$$42($cjs$_storybook_addons6);
var _components10 = $$cjs_default$$42($cjs$_storybook_components10);
var _api6 = $$cjs_default$$42($cjs$_storybook_api6);
var _ControlsPanel = $$cjs_default$$42(ControlsPanel_exports);
var _constants12 = $$cjs_default$$42(constants_exports4);
function _interopRequireDefault18(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_addons6.addons.register(_constants12.ADDON_ID, function(api) {
  _addons6.addons.addPanel(_constants12.ADDON_ID, {
    title: function title() {
      var rows = (0, _api6.useArgTypes)();
      var controlsCount = Object.values(rows).filter(function(argType) {
        return argType === null || argType === void 0 ? void 0 : argType.control;
      }).length;
      var suffix = controlsCount === 0 ? "" : " (".concat(controlsCount, ")");
      return "Controls".concat(suffix);
    },
    type: _addons6.types.PANEL,
    paramKey: _constants12.PARAM_KEY,
    render: function render(_ref) {
      var key = _ref.key, active = _ref.active;
      if (!active || !api.getCurrentStoryData()) {
        return null;
      }
      return /* @__PURE__ */ _react18.default.createElement(_components10.AddonPanel, {
        key,
        active
      }, /* @__PURE__ */ _react18.default.createElement(_ControlsPanel.ControlsPanel, null));
    }
  });
});
var register_default4 = module67.exports;

// node_modules/@storybook/addon-measure/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-measure/dist/cjs/Tool.js
var Tool_exports = {};
__export(Tool_exports, {
  Tool: () => __export030
});
init_define_process_env();

// node_modules/@storybook/addon-measure/dist/cjs/constants.js
var constants_exports5 = {};
__export(constants_exports5, {
  ADDON_ID: () => __export35,
  EVENTS: () => __export029,
  PARAM_KEY: () => __export114,
  TOOL_ID: () => __export28
});
init_define_process_env();
var module68 = { exports: {} };
var exports68 = module68.exports;
Object.defineProperty(exports68, "__esModule", {
  value: true
});
exports68.EVENTS = exports68.PARAM_KEY = exports68.TOOL_ID = exports68.ADDON_ID = void 0;
var ADDON_ID5 = "storybook/measure-addon";
exports68.ADDON_ID = ADDON_ID5;
var TOOL_ID = "".concat(ADDON_ID5, "/tool");
exports68.TOOL_ID = TOOL_ID;
var PARAM_KEY5 = "measureEnabled";
exports68.PARAM_KEY = PARAM_KEY5;
var EVENTS3 = {
  RESULT: "".concat(ADDON_ID5, "/result"),
  REQUEST: "".concat(ADDON_ID5, "/request"),
  CLEAR: "".concat(ADDON_ID5, "/clear")
};
exports68.EVENTS = EVENTS3;
var __export029;
var __export114;
var __export28;
var __export35;
if (Object.isExtensible(module68.exports)) {
  __export029 = module68.exports["EVENTS"];
  __export114 = module68.exports["PARAM_KEY"];
  __export28 = module68.exports["TOOL_ID"];
  __export35 = module68.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-measure/dist/cjs/Tool.js
import * as $cjs$_storybook_components11 from "@storybook/components";
import * as $cjs$_storybook_api7 from "@storybook/api";
import * as $cjs$react23 from "react";
function $$cjs_default$$43(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module69 = { exports: {} };
var exports69 = module69.exports;
function _typeof15(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof15 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof15 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof15(obj);
}
$$cjs_default$$43(es_symbol_exports);
$$cjs_default$$43(es_symbol_description_exports);
$$cjs_default$$43(es_object_to_string_exports);
$$cjs_default$$43(es_symbol_iterator_exports);
$$cjs_default$$43(es_string_iterator_exports);
$$cjs_default$$43(es_array_iterator_exports);
$$cjs_default$$43(web_dom_collections_iterator_exports);
$$cjs_default$$43(es_array_slice_exports);
$$cjs_default$$43(es_function_name_exports);
$$cjs_default$$43(es_array_from_exports);
$$cjs_default$$43(es_weak_map_exports);
$$cjs_default$$43(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports69, "__esModule", {
  value: true
});
exports69.Tool = void 0;
var _react19 = _interopRequireWildcard14($$cjs_default$$43($cjs$react23));
var _api7 = $$cjs_default$$43($cjs$_storybook_api7);
var _components11 = $$cjs_default$$43($cjs$_storybook_components11);
var _constants13 = $$cjs_default$$43(constants_exports5);
function _getRequireWildcardCache14() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache14 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard14(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof15(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache14();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray13(arr, i) {
  return _arrayWithHoles12(arr) || _iterableToArrayLimit12(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest12();
}
function _nonIterableRest12() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray16(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray16(o, minLen);
}
function _arrayLikeToArray16(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit12(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles12(arr) {
  if (Array.isArray(arr))
    return arr;
}
var Tool = function Tool2() {
  var _useGlobals = (0, _api7.useGlobals)(), _useGlobals2 = _slicedToArray13(_useGlobals, 2), globals = _useGlobals2[0], updateGlobals = _useGlobals2[1];
  var measureEnabled = globals.measureEnabled;
  var api = (0, _api7.useStorybookApi)();
  var toggleMeasure = (0, _react19.useCallback)(function() {
    return updateGlobals({
      measureEnabled: !measureEnabled
    });
  }, [updateGlobals, measureEnabled]);
  (0, _react19.useEffect)(function() {
    api.setAddonShortcut(_constants13.ADDON_ID, {
      label: "Toggle Measure [M]",
      defaultShortcut: ["M"],
      actionName: "measure",
      showInMenu: false,
      action: toggleMeasure
    });
  }, [toggleMeasure, api]);
  return /* @__PURE__ */ _react19.default.createElement(_components11.IconButton, {
    key: _constants13.TOOL_ID,
    active: measureEnabled,
    title: "Enable measure",
    onClick: toggleMeasure
  }, /* @__PURE__ */ _react19.default.createElement(_components11.Icons, {
    icon: "ruler"
  }));
};
exports69.Tool = Tool;
var __export030;
if (Object.isExtensible(module69.exports)) {
  __export030 = module69.exports["Tool"];
}

// node_modules/@storybook/addon-measure/dist/cjs/register.js
import * as $cjs$_storybook_addons7 from "@storybook/addons";
import * as $cjs$react24 from "react";
function $$cjs_default$$44(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module70 = { exports: {} };
var exports70 = module70.exports;
var _react20 = _interopRequireDefault19($$cjs_default$$44($cjs$react24));
var _addons7 = $$cjs_default$$44($cjs$_storybook_addons7);
var _constants14 = $$cjs_default$$44(constants_exports5);
var _Tool = $$cjs_default$$44(Tool_exports);
function _interopRequireDefault19(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_addons7.addons.register(_constants14.ADDON_ID, function() {
  _addons7.addons.add(_constants14.TOOL_ID, {
    type: _addons7.types.TOOL,
    title: "Measure",
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === "story";
    },
    render: function render() {
      return /* @__PURE__ */ _react20.default.createElement(_Tool.Tool, null);
    }
  });
});
var register_default5 = module70.exports;

// node_modules/@storybook/addon-outline/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-outline/dist/cjs/OutlineSelector.js
var OutlineSelector_exports = {};
__export(OutlineSelector_exports, {
  OutlineSelector: () => __export032
});
init_define_process_env();

// node_modules/@storybook/addon-outline/dist/cjs/constants.js
var constants_exports6 = {};
__export(constants_exports6, {
  ADDON_ID: () => __export115,
  PARAM_KEY: () => __export031
});
init_define_process_env();
var module71 = { exports: {} };
var exports71 = module71.exports;
Object.defineProperty(exports71, "__esModule", {
  value: true
});
exports71.PARAM_KEY = exports71.ADDON_ID = void 0;
var ADDON_ID6 = "storybook/outline";
exports71.ADDON_ID = ADDON_ID6;
var PARAM_KEY6 = "outline";
exports71.PARAM_KEY = PARAM_KEY6;
var __export031;
var __export115;
if (Object.isExtensible(module71.exports)) {
  __export031 = module71.exports["PARAM_KEY"];
  __export115 = module71.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-outline/dist/cjs/OutlineSelector.js
import * as $cjs$_storybook_components12 from "@storybook/components";
import * as $cjs$_storybook_api8 from "@storybook/api";
import * as $cjs$react25 from "react";
function $$cjs_default$$45(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module72 = { exports: {} };
var exports72 = module72.exports;
function _typeof16(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof16 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof16 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof16(obj);
}
$$cjs_default$$45(es_symbol_exports);
$$cjs_default$$45(es_symbol_description_exports);
$$cjs_default$$45(es_object_to_string_exports);
$$cjs_default$$45(es_symbol_iterator_exports);
$$cjs_default$$45(es_string_iterator_exports);
$$cjs_default$$45(es_array_iterator_exports);
$$cjs_default$$45(web_dom_collections_iterator_exports);
$$cjs_default$$45(es_array_slice_exports);
$$cjs_default$$45(es_function_name_exports);
$$cjs_default$$45(es_array_from_exports);
$$cjs_default$$45(es_weak_map_exports);
$$cjs_default$$45(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports72, "__esModule", {
  value: true
});
exports72.OutlineSelector = void 0;
var _react21 = _interopRequireWildcard15($$cjs_default$$45($cjs$react25));
var _api8 = $$cjs_default$$45($cjs$_storybook_api8);
var _components12 = $$cjs_default$$45($cjs$_storybook_components12);
var _constants15 = $$cjs_default$$45(constants_exports6);
function _getRequireWildcardCache15() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache15 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard15(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof16(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache15();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray14(arr, i) {
  return _arrayWithHoles13(arr) || _iterableToArrayLimit13(arr, i) || _unsupportedIterableToArray17(arr, i) || _nonIterableRest13();
}
function _nonIterableRest13() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray17(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray17(o, minLen);
}
function _arrayLikeToArray17(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit13(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles13(arr) {
  if (Array.isArray(arr))
    return arr;
}
var OutlineSelector = /* @__PURE__ */ (0, _react21.memo)(function() {
  var _useGlobals = (0, _api8.useGlobals)(), _useGlobals2 = _slicedToArray14(_useGlobals, 2), globals = _useGlobals2[0], updateGlobals = _useGlobals2[1];
  var isActive = globals[_constants15.PARAM_KEY] || false;
  var toggleOutline = (0, _react21.useCallback)(function() {
    return updateGlobals(_defineProperty8({}, _constants15.PARAM_KEY, !isActive));
  }, [isActive]);
  return /* @__PURE__ */ _react21.default.createElement(_components12.IconButton, {
    key: "outline",
    active: isActive,
    title: "Apply outlines to the preview",
    onClick: toggleOutline
  }, /* @__PURE__ */ _react21.default.createElement(_components12.Icons, {
    icon: "outline"
  }));
});
exports72.OutlineSelector = OutlineSelector;
var __export032;
if (Object.isExtensible(module72.exports)) {
  __export032 = module72.exports["OutlineSelector"];
}

// node_modules/@storybook/addon-outline/dist/cjs/register.js
import * as $cjs$_storybook_addons8 from "@storybook/addons";
import * as $cjs$react26 from "react";
function $$cjs_default$$46(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module73 = { exports: {} };
var exports73 = module73.exports;
$$cjs_default$$46(es_string_match_exports);
$$cjs_default$$46(es_regexp_exec_exports);
var _react22 = _interopRequireDefault20($$cjs_default$$46($cjs$react26));
var _addons8 = $$cjs_default$$46($cjs$_storybook_addons8);
var _constants16 = $$cjs_default$$46(constants_exports6);
var _OutlineSelector = $$cjs_default$$46(OutlineSelector_exports);
function _interopRequireDefault20(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_addons8.addons.register(_constants16.ADDON_ID, function() {
  _addons8.addons.add(_constants16.ADDON_ID, {
    title: "Outline",
    type: _addons8.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^(story|docs)$/));
    },
    render: function render() {
      return /* @__PURE__ */ _react22.default.createElement(_OutlineSelector.OutlineSelector, null);
    }
  });
});
var register_default6 = module73.exports;

// node_modules/@storybook/addon-toolbars/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-toolbars/dist/cjs/constants.js
var constants_exports7 = {};
__export(constants_exports7, {
  ADDON_ID: () => __export116,
  ADDON_PARAM: () => __export033
});
init_define_process_env();
var module74 = { exports: {} };
var exports74 = module74.exports;
Object.defineProperty(exports74, "__esModule", {
  value: true
});
exports74.ADDON_PARAM = exports74.ADDON_ID = void 0;
var ADDON_ID7 = "addon-toolbars";
exports74.ADDON_ID = ADDON_ID7;
var ADDON_PARAM = "toolbars";
exports74.ADDON_PARAM = ADDON_PARAM;
var __export033;
var __export116;
if (Object.isExtensible(module74.exports)) {
  __export033 = module74.exports["ADDON_PARAM"];
  __export116 = module74.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/components/ToolbarManager.js
var ToolbarManager_exports = {};
__export(ToolbarManager_exports, {
  ToolbarManager: () => __export043
});
init_define_process_env();

// node_modules/@storybook/addon-toolbars/dist/cjs/utils/normalize-toolbar-arg-type.js
var normalize_toolbar_arg_type_exports = {};
__export(normalize_toolbar_arg_type_exports, {
  normalizeArgType: () => __export034
});
init_define_process_env();
function $$cjs_default$$47(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module75 = { exports: {} };
var exports75 = module75.exports;
Object.defineProperty(exports75, "__esModule", {
  value: true
});
exports75.normalizeArgType = void 0;
$$cjs_default$$47(es_object_assign_exports);
$$cjs_default$$47(es_function_name_exports);
$$cjs_default$$47(es_symbol_exports);
$$cjs_default$$47(es_symbol_description_exports);
$$cjs_default$$47(es_array_map_exports);
var defaultItemValues = {
  type: "item",
  value: ""
};
var normalizeArgType = function normalizeArgType2(key, argType) {
  return Object.assign({}, argType, {
    name: argType.name || key,
    description: argType.description || key,
    toolbar: Object.assign({}, argType.toolbar, {
      items: argType.toolbar.items.map(function(_item) {
        var item = typeof _item === "string" ? {
          value: _item,
          title: _item
        } : _item;
        if (item.type === "reset" && argType.toolbar.icon) {
          item.icon = argType.toolbar.icon;
          item.hideIcon = true;
        }
        return Object.assign({}, defaultItemValues, item);
      })
    })
  });
};
exports75.normalizeArgType = normalizeArgType;
var __export034;
if (Object.isExtensible(module75.exports)) {
  __export034 = module75.exports["normalizeArgType"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/components/ToolbarMenuList.js
var ToolbarMenuList_exports = {};
__export(ToolbarMenuList_exports, {
  ToolbarMenuList: () => __export042
});
init_define_process_env();

// node_modules/@storybook/addon-toolbars/dist/cjs/components/ToolbarMenuListItem.js
var ToolbarMenuListItem_exports = {};
__export(ToolbarMenuListItem_exports, {
  ToolbarMenuListItem: () => __export035
});
init_define_process_env();
import * as $cjs$_storybook_components13 from "@storybook/components";
import * as $cjs$react27 from "react";
function $$cjs_default$$48(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module76 = { exports: {} };
var exports76 = module76.exports;
Object.defineProperty(exports76, "__esModule", {
  value: true
});
exports76.ToolbarMenuListItem = void 0;
var _react23 = _interopRequireDefault21($$cjs_default$$48($cjs$react27));
var _components13 = $$cjs_default$$48($cjs$_storybook_components13);
function _interopRequireDefault21(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var ToolbarMenuListItem = function ToolbarMenuListItem2(_ref) {
  var left = _ref.left, right = _ref.right, title = _ref.title, value = _ref.value, icon = _ref.icon, hideIcon = _ref.hideIcon, onClick = _ref.onClick, currentValue = _ref.currentValue;
  var Icon3 = /* @__PURE__ */ _react23.default.createElement(_components13.Icons, {
    style: {
      opacity: 1
    },
    icon
  });
  var hasContent = left || right || title;
  var Item7 = {
    id: value,
    active: currentValue === value,
    onClick
  };
  if (left) {
    Item7.left = left;
  }
  if (right) {
    Item7.right = right;
  }
  if (title) {
    Item7.title = title;
  }
  if (icon && !hideIcon) {
    if (hasContent && !right) {
      Item7.right = Icon3;
    } else if (hasContent && !left) {
      Item7.left = Icon3;
    } else if (!hasContent) {
      Item7.right = Icon3;
    }
  }
  return Item7;
};
exports76.ToolbarMenuListItem = ToolbarMenuListItem;
var __export035;
if (Object.isExtensible(module76.exports)) {
  __export035 = module76.exports["ToolbarMenuListItem"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/utils/get-selected-icon.js
var get_selected_icon_exports = {};
__export(get_selected_icon_exports, {
  getSelectedIcon: () => __export036
});
init_define_process_env();
function $$cjs_default$$49(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module77 = { exports: {} };
var exports77 = module77.exports;
Object.defineProperty(exports77, "__esModule", {
  value: true
});
exports77.getSelectedIcon = void 0;
$$cjs_default$$49(es_array_find_exports);
var getSelectedIcon = function getSelectedIcon2(_ref) {
  var currentValue = _ref.currentValue, items = _ref.items;
  var selectedItem = currentValue != null && items.find(function(item) {
    return item.value === currentValue;
  });
  var selectedIcon = selectedItem && selectedItem.icon;
  return selectedIcon;
};
exports77.getSelectedIcon = getSelectedIcon;
var __export036;
if (Object.isExtensible(module77.exports)) {
  __export036 = module77.exports["getSelectedIcon"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/hoc/withKeyboardCycle.js
var withKeyboardCycle_exports = {};
__export(withKeyboardCycle_exports, {
  withKeyboardCycle: () => __export040
});
init_define_process_env();

// node_modules/@storybook/addon-toolbars/dist/cjs/utils/register-shortcuts.js
var register_shortcuts_exports = {};
__export(register_shortcuts_exports, {
  registerShortcuts: () => __export038
});
init_define_process_env();

// empty:core-js/modules/es.promise.js
var es_promise_exports = {};
__export(es_promise_exports, {
  default: () => es_promise_default
});
init_define_process_env();
var es_promise_default = {};

// node_modules/regenerator-runtime/runtime.js
var runtime_exports = {};
__export(runtime_exports, {
  AsyncIterator: () => __export44,
  async: () => __export5,
  awrap: () => __export36,
  default: () => runtime_default,
  isGeneratorFunction: () => __export117,
  keys: () => __export6,
  mark: () => __export29,
  values: () => __export7,
  wrap: () => __export037
});
init_define_process_env();
var module78 = { exports: {} };
var exports78 = module78.exports;
var runtime = function(exports91) {
  "use strict";
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined2;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define2(obj, key, value) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    define2({}, "");
  } catch (err) {
    define2 = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self2, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self2, context);
    return generator;
  }
  exports91.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype = {};
  define2(IteratorPrototype, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define2(Gp, "constructor", GeneratorFunctionPrototype);
  define2(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define2(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports91.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports91.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define2(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  exports91.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  });
  exports91.AsyncIterator = AsyncIterator;
  exports91.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0)
      PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
    return exports91.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self2, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel)
              continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self2, context);
        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined2) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined2;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined2;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  define2(Gp, toStringTagSymbol, "Generator");
  define2(Gp, iteratorSymbol, function() {
    return this;
  });
  define2(Gp, "toString", function() {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports91.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key2 = keys.pop();
        if (key2 in object) {
          next.value = key2;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next2() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next2.value = iterable[i];
              next2.done = false;
              return next2;
            }
          }
          next2.value = undefined2;
          next2.done = true;
          return next2;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  exports91.values = values;
  function doneResult() {
    return { value: undefined2, done: true };
  }
  Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined2;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined2;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined2;
          }
        }
      }
    },
    stop: function() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined2;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName,
        nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined2;
      }
      return ContinueSentinel;
    }
  };
  return exports91;
}(typeof module78 === "object" ? module78.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var __export037;
var __export117;
var __export29;
var __export36;
var __export44;
var __export5;
var __export6;
var __export7;
if (Object.isExtensible(module78.exports)) {
  __export037 = module78.exports["wrap"];
  __export117 = module78.exports["isGeneratorFunction"];
  __export29 = module78.exports["mark"];
  __export36 = module78.exports["awrap"];
  __export44 = module78.exports["AsyncIterator"];
  __export5 = module78.exports["async"];
  __export6 = module78.exports["keys"];
  __export7 = module78.exports["values"];
}
var runtime_default = module78.exports;

// node_modules/@storybook/addon-toolbars/dist/cjs/utils/register-shortcuts.js
function $$cjs_default$$50(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module79 = { exports: {} };
var exports79 = module79.exports;
Object.defineProperty(exports79, "__esModule", {
  value: true
});
exports79.registerShortcuts = void 0;
$$cjs_default$$50(runtime_exports);
$$cjs_default$$50(es_object_to_string_exports);
$$cjs_default$$50(es_array_iterator_exports);
$$cjs_default$$50(web_dom_collections_iterator_exports);
$$cjs_default$$50(es_promise_exports);
var _constants17 = $$cjs_default$$50(constants_exports7);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var registerShortcuts = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(api, id, shortcuts) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(shortcuts && shortcuts.next)) {
              _context.next = 3;
              break;
            }
            _context.next = 3;
            return api.setAddonShortcut(_constants17.ADDON_ID, {
              label: shortcuts.next.label,
              defaultShortcut: shortcuts.next.keys,
              actionName: "".concat(id, ":next"),
              action: shortcuts.next.action
            });
          case 3:
            if (!(shortcuts && shortcuts.previous)) {
              _context.next = 6;
              break;
            }
            _context.next = 6;
            return api.setAddonShortcut(_constants17.ADDON_ID, {
              label: shortcuts.previous.label,
              defaultShortcut: shortcuts.previous.keys,
              actionName: "".concat(id, ":previous"),
              action: shortcuts.previous.action
            });
          case 6:
            if (!(shortcuts && shortcuts.reset)) {
              _context.next = 9;
              break;
            }
            _context.next = 9;
            return api.setAddonShortcut(_constants17.ADDON_ID, {
              label: shortcuts.reset.label,
              defaultShortcut: shortcuts.reset.keys,
              actionName: "".concat(id, ":reset"),
              action: shortcuts.reset.action
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function registerShortcuts3(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports79.registerShortcuts = registerShortcuts;
var __export038;
if (Object.isExtensible(module79.exports)) {
  __export038 = module79.exports["registerShortcuts"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/utils/create-cycle-value-array.js
var create_cycle_value_array_exports = {};
__export(create_cycle_value_array_exports, {
  createCycleValueArray: () => __export039
});
init_define_process_env();
function $$cjs_default$$51(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module80 = { exports: {} };
var exports80 = module80.exports;
Object.defineProperty(exports80, "__esModule", {
  value: true
});
exports80.createCycleValueArray = void 0;
$$cjs_default$$51(es_array_map_exports);
$$cjs_default$$51(es_array_filter_exports);
$$cjs_default$$51(es_array_includes_exports);
var disallowedCycleableItemTypes = ["reset"];
var createCycleValueArray = function createCycleValueArray2(items) {
  var valueArray = items.filter(function(item) {
    return !disallowedCycleableItemTypes.includes(item.type);
  }).map(function(item) {
    return item.value;
  });
  return valueArray;
};
exports80.createCycleValueArray = createCycleValueArray;
var __export039;
if (Object.isExtensible(module80.exports)) {
  __export039 = module80.exports["createCycleValueArray"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/hoc/withKeyboardCycle.js
import * as $cjs$_storybook_api9 from "@storybook/api";
import * as $cjs$react28 from "react";
function $$cjs_default$$52(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module81 = { exports: {} };
var exports81 = module81.exports;
function _typeof17(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof17 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof17 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof17(obj);
}
$$cjs_default$$52(es_symbol_exports);
$$cjs_default$$52(es_symbol_description_exports);
$$cjs_default$$52(es_object_to_string_exports);
$$cjs_default$$52(es_symbol_iterator_exports);
$$cjs_default$$52(es_string_iterator_exports);
$$cjs_default$$52(es_array_iterator_exports);
$$cjs_default$$52(web_dom_collections_iterator_exports);
$$cjs_default$$52(es_array_slice_exports);
$$cjs_default$$52(es_function_name_exports);
$$cjs_default$$52(es_array_from_exports);
$$cjs_default$$52(es_weak_map_exports);
$$cjs_default$$52(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports81, "__esModule", {
  value: true
});
exports81.withKeyboardCycle = void 0;
$$cjs_default$$52(es_object_assign_exports);
var _react24 = _interopRequireWildcard16($$cjs_default$$52($cjs$react28));
var _api9 = $$cjs_default$$52($cjs$_storybook_api9);
var _createCycleValueArray = $$cjs_default$$52(create_cycle_value_array_exports);
var _registerShortcuts = $$cjs_default$$52(register_shortcuts_exports);
function _getRequireWildcardCache16() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache16 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard16(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof17(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache16();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _extends6() {
  _extends6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
function _defineProperty9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray15(arr, i) {
  return _arrayWithHoles14(arr) || _iterableToArrayLimit14(arr, i) || _unsupportedIterableToArray18(arr, i) || _nonIterableRest14();
}
function _nonIterableRest14() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray18(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray18(o, minLen);
}
function _arrayLikeToArray18(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit14(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles14(arr) {
  if (Array.isArray(arr))
    return arr;
}
var withKeyboardCycle = function withKeyboardCycle2(Component) {
  var WithKeyboardCycle = function WithKeyboardCycle2(props) {
    var id = props.id, _props$toolbar = props.toolbar, items = _props$toolbar.items, shortcuts = _props$toolbar.shortcuts;
    var api = (0, _api9.useStorybookApi)();
    var _useGlobals = (0, _api9.useGlobals)(), _useGlobals2 = _slicedToArray15(_useGlobals, 2), globals = _useGlobals2[0], updateGlobals = _useGlobals2[1];
    var cycleValues = (0, _react24.useRef)([]);
    var currentValue = globals[id];
    var reset = (0, _react24.useCallback)(function() {
      updateGlobals(_defineProperty9({}, id, ""));
    }, [updateGlobals]);
    var setNext = (0, _react24.useCallback)(function() {
      var values = cycleValues.current;
      var currentIndex = values.indexOf(currentValue);
      var currentIsLast = currentIndex === values.length - 1;
      var newCurrentIndex = currentIsLast ? 0 : currentIndex + 1;
      var newCurrent = cycleValues.current[newCurrentIndex];
      updateGlobals(_defineProperty9({}, id, newCurrent));
    }, [cycleValues, currentValue, updateGlobals]);
    var setPrevious = (0, _react24.useCallback)(function() {
      var values = cycleValues.current;
      var indexOf = values.indexOf(currentValue);
      var currentIndex = indexOf > -1 ? indexOf : 0;
      var currentIsFirst = currentIndex === 0;
      var newCurrentIndex = currentIsFirst ? values.length - 1 : currentIndex - 1;
      var newCurrent = cycleValues.current[newCurrentIndex];
      updateGlobals(_defineProperty9({}, id, newCurrent));
    }, [cycleValues, currentValue, updateGlobals]);
    (0, _react24.useEffect)(function() {
      if (shortcuts) {
        (0, _registerShortcuts.registerShortcuts)(api, id, {
          next: Object.assign({}, shortcuts.next, {
            action: setNext
          }),
          previous: Object.assign({}, shortcuts.previous, {
            action: setPrevious
          }),
          reset: Object.assign({}, shortcuts.reset, {
            action: reset
          })
        });
      }
    }, [api, id, shortcuts, setNext, setPrevious, reset]);
    (0, _react24.useEffect)(function() {
      cycleValues.current = (0, _createCycleValueArray.createCycleValueArray)(items);
    }, []);
    return /* @__PURE__ */ _react24.default.createElement(Component, _extends6({
      cycleValues: cycleValues.current
    }, props));
  };
  return WithKeyboardCycle;
};
exports81.withKeyboardCycle = withKeyboardCycle;
var __export040;
if (Object.isExtensible(module81.exports)) {
  __export040 = module81.exports["withKeyboardCycle"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/components/ToolbarMenuButton.js
var ToolbarMenuButton_exports = {};
__export(ToolbarMenuButton_exports, {
  ToolbarMenuButton: () => __export041
});
init_define_process_env();
import * as $cjs$_storybook_components14 from "@storybook/components";
import * as $cjs$react29 from "react";
function $$cjs_default$$53(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module82 = { exports: {} };
var exports82 = module82.exports;
Object.defineProperty(exports82, "__esModule", {
  value: true
});
exports82.ToolbarMenuButton = void 0;
$$cjs_default$$53(es_symbol_exports);
$$cjs_default$$53(es_symbol_description_exports);
var _react25 = _interopRequireDefault22($$cjs_default$$53($cjs$react29));
var _components14 = $$cjs_default$$53($cjs$_storybook_components14);
function _interopRequireDefault22(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var ToolbarMenuButton = function ToolbarMenuButton2(_ref) {
  var active = _ref.active, title = _ref.title, icon = _ref.icon, description = _ref.description, onClick = _ref.onClick;
  return /* @__PURE__ */ _react25.default.createElement(_components14.IconButton, {
    active,
    title: description,
    onClick
  }, icon && /* @__PURE__ */ _react25.default.createElement(_components14.Icons, {
    icon
  }), title ? "\xA0".concat(title) : null);
};
exports82.ToolbarMenuButton = ToolbarMenuButton;
var __export041;
if (Object.isExtensible(module82.exports)) {
  __export041 = module82.exports["ToolbarMenuButton"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/components/ToolbarMenuList.js
import * as $cjs$_storybook_components15 from "@storybook/components";
import * as $cjs$_storybook_api10 from "@storybook/api";
import * as $cjs$react30 from "react";
function $$cjs_default$$54(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module83 = { exports: {} };
var exports83 = module83.exports;
function _typeof18(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof18 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof18 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof18(obj);
}
$$cjs_default$$54(es_object_to_string_exports);
$$cjs_default$$54(es_symbol_iterator_exports);
$$cjs_default$$54(es_string_iterator_exports);
$$cjs_default$$54(es_array_iterator_exports);
$$cjs_default$$54(web_dom_collections_iterator_exports);
$$cjs_default$$54(es_array_slice_exports);
$$cjs_default$$54(es_array_from_exports);
$$cjs_default$$54(es_weak_map_exports);
$$cjs_default$$54(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports83, "__esModule", {
  value: true
});
exports83.ToolbarMenuList = void 0;
$$cjs_default$$54(es_function_name_exports);
$$cjs_default$$54(es_symbol_exports);
$$cjs_default$$54(es_symbol_description_exports);
$$cjs_default$$54(es_array_map_exports);
$$cjs_default$$54(es_array_filter_exports);
$$cjs_default$$54(es_object_assign_exports);
var _react26 = _interopRequireWildcard17($$cjs_default$$54($cjs$react30));
var _api10 = $$cjs_default$$54($cjs$_storybook_api10);
var _components15 = $$cjs_default$$54($cjs$_storybook_components15);
var _ToolbarMenuButton = $$cjs_default$$54(ToolbarMenuButton_exports);
var _withKeyboardCycle = $$cjs_default$$54(withKeyboardCycle_exports);
var _getSelectedIcon = $$cjs_default$$54(get_selected_icon_exports);
var _ToolbarMenuListItem = $$cjs_default$$54(ToolbarMenuListItem_exports);
function _getRequireWildcardCache17() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache17 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard17(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof18(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache17();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty10(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray16(arr, i) {
  return _arrayWithHoles15(arr) || _iterableToArrayLimit15(arr, i) || _unsupportedIterableToArray19(arr, i) || _nonIterableRest15();
}
function _nonIterableRest15() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray19(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray19(o, minLen);
}
function _arrayLikeToArray19(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit15(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles15(arr) {
  if (Array.isArray(arr))
    return arr;
}
var ToolbarMenuList = (0, _withKeyboardCycle.withKeyboardCycle)(function(_ref) {
  var id = _ref.id, name = _ref.name, description = _ref.description, _ref$toolbar = _ref.toolbar, _icon = _ref$toolbar.icon, items = _ref$toolbar.items, _title = _ref$toolbar.title, showName = _ref$toolbar.showName, preventDynamicIcon = _ref$toolbar.preventDynamicIcon;
  var _useGlobals = (0, _api10.useGlobals)(), _useGlobals2 = _slicedToArray16(_useGlobals, 2), globals = _useGlobals2[0], updateGlobals = _useGlobals2[1];
  var currentValue = globals[id];
  var hasGlobalValue = !!currentValue;
  var icon = _icon;
  var title = _title;
  if (!preventDynamicIcon) {
    icon = (0, _getSelectedIcon.getSelectedIcon)({
      currentValue,
      items
    }) || icon;
  }
  if (showName && !title) {
    title = name;
  }
  var handleItemClick = (0, _react26.useCallback)(function(value) {
    updateGlobals(_defineProperty10({}, id, value));
  }, [currentValue, updateGlobals]);
  return /* @__PURE__ */ _react26.default.createElement(_components15.WithTooltip, {
    placement: "top",
    trigger: "click",
    tooltip: function tooltip(_ref2) {
      var onHide = _ref2.onHide;
      var links = items.filter(function(_ref3) {
        var type = _ref3.type;
        var shouldReturn = true;
        if (type === "reset" && !currentValue) {
          shouldReturn = false;
        }
        return shouldReturn;
      }).map(function(item) {
        var listItem = (0, _ToolbarMenuListItem.ToolbarMenuListItem)(Object.assign({}, item, {
          currentValue,
          onClick: function onClick() {
            handleItemClick(item.value);
            onHide();
          }
        }));
        return listItem;
      });
      return /* @__PURE__ */ _react26.default.createElement(_components15.TooltipLinkList, {
        links
      });
    },
    closeOnClick: true
  }, /* @__PURE__ */ _react26.default.createElement(_ToolbarMenuButton.ToolbarMenuButton, {
    active: hasGlobalValue,
    description,
    icon,
    title
  }));
});
exports83.ToolbarMenuList = ToolbarMenuList;
var __export042;
if (Object.isExtensible(module83.exports)) {
  __export042 = module83.exports["ToolbarMenuList"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/components/ToolbarManager.js
import * as $cjs$_storybook_components16 from "@storybook/components";
import * as $cjs$_storybook_api11 from "@storybook/api";
import * as $cjs$react31 from "react";
function $$cjs_default$$55(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module84 = { exports: {} };
var exports84 = module84.exports;
$$cjs_default$$55(es_object_assign_exports);
Object.defineProperty(exports84, "__esModule", {
  value: true
});
exports84.ToolbarManager = void 0;
$$cjs_default$$55(es_array_filter_exports);
$$cjs_default$$55(es_object_keys_exports);
$$cjs_default$$55(es_array_map_exports);
var _react27 = _interopRequireDefault23($$cjs_default$$55($cjs$react31));
var _api11 = $$cjs_default$$55($cjs$_storybook_api11);
var _components16 = $$cjs_default$$55($cjs$_storybook_components16);
var _ToolbarMenuList = $$cjs_default$$55(ToolbarMenuList_exports);
var _normalizeToolbarArgType = $$cjs_default$$55(normalize_toolbar_arg_type_exports);
function _interopRequireDefault23(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _extends7() {
  _extends7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
var ToolbarManager = function ToolbarManager2() {
  var globalTypes = (0, _api11.useGlobalTypes)();
  var globalIds = Object.keys(globalTypes).filter(function(id) {
    return !!globalTypes[id].toolbar;
  });
  if (!globalIds.length) {
    return null;
  }
  return /* @__PURE__ */ _react27.default.createElement(_react27.default.Fragment, null, /* @__PURE__ */ _react27.default.createElement(_components16.Separator, null), globalIds.map(function(id) {
    var normalizedArgType = (0, _normalizeToolbarArgType.normalizeArgType)(id, globalTypes[id]);
    return /* @__PURE__ */ _react27.default.createElement(_ToolbarMenuList.ToolbarMenuList, _extends7({
      key: id,
      id
    }, normalizedArgType));
  }));
};
exports84.ToolbarManager = ToolbarManager;
var __export043;
if (Object.isExtensible(module84.exports)) {
  __export043 = module84.exports["ToolbarManager"];
}

// node_modules/@storybook/addon-toolbars/dist/cjs/register.js
import * as $cjs$_storybook_addons9 from "@storybook/addons";
import * as $cjs$react32 from "react";
function $$cjs_default$$56(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module85 = { exports: {} };
var exports85 = module85.exports;
var _react28 = _interopRequireDefault24($$cjs_default$$56($cjs$react32));
var _addons9 = $$cjs_default$$56($cjs$_storybook_addons9);
var _ToolbarManager = $$cjs_default$$56(ToolbarManager_exports);
var _constants18 = $$cjs_default$$56(constants_exports7);
function _interopRequireDefault24(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_addons9.addons.register(_constants18.ADDON_ID, function() {
  return _addons9.addons.add(_constants18.ADDON_ID, {
    title: _constants18.ADDON_ID,
    type: _addons9.types.TOOL,
    match: function match() {
      return true;
    },
    render: function render() {
      return /* @__PURE__ */ _react28.default.createElement(_ToolbarManager.ToolbarManager, null);
    }
  });
});
var register_default7 = module85.exports;

// node_modules/@storybook/addon-viewport/dist/cjs/register.js
init_define_process_env();

// node_modules/@storybook/addon-viewport/dist/cjs/Tool.js
var Tool_exports2 = {};
__export(Tool_exports2, {
  ViewportTool: () => __export047
});
init_define_process_env();

// node_modules/@storybook/addon-viewport/dist/cjs/defaults.js
var defaults_exports = {};
__export(defaults_exports, {
  DEFAULT_VIEWPORT: () => __export118,
  INITIAL_VIEWPORTS: () => __export210,
  MINIMAL_VIEWPORTS: () => __export044
});
init_define_process_env();
var module86 = { exports: {} };
var exports86 = module86.exports;
Object.defineProperty(exports86, "__esModule", {
  value: true
});
exports86.MINIMAL_VIEWPORTS = exports86.DEFAULT_VIEWPORT = exports86.INITIAL_VIEWPORTS = void 0;
var INITIAL_VIEWPORTS = {
  iphone5: {
    name: "iPhone 5",
    styles: {
      height: "568px",
      width: "320px"
    },
    type: "mobile"
  },
  iphone6: {
    name: "iPhone 6",
    styles: {
      height: "667px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone6p: {
    name: "iPhone 6 Plus",
    styles: {
      height: "736px",
      width: "414px"
    },
    type: "mobile"
  },
  iphone8p: {
    name: "iPhone 8 Plus",
    styles: {
      height: "736px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonex: {
    name: "iPhone X",
    styles: {
      height: "812px",
      width: "375px"
    },
    type: "mobile"
  },
  iphonexr: {
    name: "iPhone XR",
    styles: {
      height: "896px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonexsmax: {
    name: "iPhone XS Max",
    styles: {
      height: "896px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonese2: {
    name: "iPhone SE (2nd generation)",
    styles: {
      height: "667px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone12mini: {
    name: "iPhone 12 mini",
    styles: {
      height: "812px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone12: {
    name: "iPhone 12",
    styles: {
      height: "844px",
      width: "390px"
    },
    type: "mobile"
  },
  iphone12promax: {
    name: "iPhone 12 Pro Max",
    styles: {
      height: "926px",
      width: "428px"
    },
    type: "mobile"
  },
  ipad: {
    name: "iPad",
    styles: {
      height: "1024px",
      width: "768px"
    },
    type: "tablet"
  },
  ipad10p: {
    name: "iPad Pro 10.5-in",
    styles: {
      height: "1112px",
      width: "834px"
    },
    type: "tablet"
  },
  ipad12p: {
    name: "iPad Pro 12.9-in",
    styles: {
      height: "1366px",
      width: "1024px"
    },
    type: "tablet"
  },
  galaxys5: {
    name: "Galaxy S5",
    styles: {
      height: "640px",
      width: "360px"
    },
    type: "mobile"
  },
  galaxys9: {
    name: "Galaxy S9",
    styles: {
      height: "740px",
      width: "360px"
    },
    type: "mobile"
  },
  nexus5x: {
    name: "Nexus 5X",
    styles: {
      height: "660px",
      width: "412px"
    },
    type: "mobile"
  },
  nexus6p: {
    name: "Nexus 6P",
    styles: {
      height: "732px",
      width: "412px"
    },
    type: "mobile"
  },
  pixel: {
    name: "Pixel",
    styles: {
      height: "960px",
      width: "540px"
    },
    type: "mobile"
  },
  pixelxl: {
    name: "Pixel XL",
    styles: {
      height: "1280px",
      width: "720px"
    },
    type: "mobile"
  }
};
exports86.INITIAL_VIEWPORTS = INITIAL_VIEWPORTS;
var DEFAULT_VIEWPORT = "responsive";
exports86.DEFAULT_VIEWPORT = DEFAULT_VIEWPORT;
var MINIMAL_VIEWPORTS = {
  mobile1: {
    name: "Small mobile",
    styles: {
      height: "568px",
      width: "320px"
    },
    type: "mobile"
  },
  mobile2: {
    name: "Large mobile",
    styles: {
      height: "896px",
      width: "414px"
    },
    type: "mobile"
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: "1112px",
      width: "834px"
    },
    type: "tablet"
  }
};
exports86.MINIMAL_VIEWPORTS = MINIMAL_VIEWPORTS;
var __export044;
var __export118;
var __export210;
if (Object.isExtensible(module86.exports)) {
  __export044 = module86.exports["MINIMAL_VIEWPORTS"];
  __export118 = module86.exports["DEFAULT_VIEWPORT"];
  __export210 = module86.exports["INITIAL_VIEWPORTS"];
}

// node_modules/@storybook/addon-viewport/dist/cjs/constants.js
var constants_exports8 = {};
__export(constants_exports8, {
  ADDON_ID: () => __export52,
  CHANGED: () => __export045,
  CONFIGURE: () => __export211,
  PARAM_KEY: () => __export45,
  SET: () => __export119,
  UPDATE: () => __export37
});
init_define_process_env();
var module87 = { exports: {} };
var exports87 = module87.exports;
Object.defineProperty(exports87, "__esModule", {
  value: true
});
exports87.CHANGED = exports87.SET = exports87.CONFIGURE = exports87.UPDATE = exports87.PARAM_KEY = exports87.ADDON_ID = void 0;
var ADDON_ID8 = "storybook/viewport";
exports87.ADDON_ID = ADDON_ID8;
var PARAM_KEY7 = "viewport";
exports87.PARAM_KEY = PARAM_KEY7;
var UPDATE = "".concat(ADDON_ID8, "/update");
exports87.UPDATE = UPDATE;
var CONFIGURE = "".concat(ADDON_ID8, "/configure");
exports87.CONFIGURE = CONFIGURE;
var SET = "".concat(ADDON_ID8, "/setStoryDefaultViewport");
exports87.SET = SET;
var CHANGED = "".concat(ADDON_ID8, "/viewportChanged");
exports87.CHANGED = CHANGED;
var __export045;
var __export119;
var __export211;
var __export37;
var __export45;
var __export52;
if (Object.isExtensible(module87.exports)) {
  __export045 = module87.exports["CHANGED"];
  __export119 = module87.exports["SET"];
  __export211 = module87.exports["CONFIGURE"];
  __export37 = module87.exports["UPDATE"];
  __export45 = module87.exports["PARAM_KEY"];
  __export52 = module87.exports["ADDON_ID"];
}

// node_modules/@storybook/addon-viewport/dist/cjs/shortcuts.js
var shortcuts_exports = {};
__export(shortcuts_exports, {
  registerShortcuts: () => __export046
});
init_define_process_env();
function $$cjs_default$$57(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module88 = { exports: {} };
var exports88 = module88.exports;
Object.defineProperty(exports88, "__esModule", {
  value: true
});
exports88.registerShortcuts = void 0;
$$cjs_default$$57(es_promise_exports);
$$cjs_default$$57(es_object_to_string_exports);
$$cjs_default$$57(runtime_exports);
var _constants19 = $$cjs_default$$57(constants_exports8);
function asyncGeneratorStep2(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator2(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var getCurrentViewportIndex = function getCurrentViewportIndex2(viewportsKeys, current) {
  return viewportsKeys.indexOf(current);
};
var getNextViewport = function getNextViewport2(viewportsKeys, current) {
  var currentViewportIndex = getCurrentViewportIndex(viewportsKeys, current);
  return currentViewportIndex === viewportsKeys.length - 1 ? viewportsKeys[0] : viewportsKeys[currentViewportIndex + 1];
};
var getPreviousViewport = function getPreviousViewport2(viewportsKeys, current) {
  var currentViewportIndex = getCurrentViewportIndex(viewportsKeys, current);
  return currentViewportIndex < 1 ? viewportsKeys[viewportsKeys.length - 1] : viewportsKeys[currentViewportIndex - 1];
};
var registerShortcuts2 = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(api, setState, viewportsKeys) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.setAddonShortcut(_constants19.ADDON_ID, {
              label: "Previous viewport",
              defaultShortcut: ["shift", "V"],
              actionName: "previous",
              action: function action2() {
                var _api$getAddonState = api.getAddonState(_constants19.ADDON_ID), selected = _api$getAddonState.selected, isRotated = _api$getAddonState.isRotated;
                setState({
                  selected: getPreviousViewport(viewportsKeys, selected),
                  isRotated
                });
              }
            });
          case 2:
            _context.next = 4;
            return api.setAddonShortcut(_constants19.ADDON_ID, {
              label: "Next viewport",
              defaultShortcut: ["V"],
              actionName: "next",
              action: function action2() {
                var _api$getAddonState2 = api.getAddonState(_constants19.ADDON_ID), selected = _api$getAddonState2.selected, isRotated = _api$getAddonState2.isRotated;
                setState({
                  selected: getNextViewport(viewportsKeys, selected),
                  isRotated
                });
              }
            });
          case 4:
            _context.next = 6;
            return api.setAddonShortcut(_constants19.ADDON_ID, {
              label: "Reset viewport",
              defaultShortcut: ["alt", "V"],
              actionName: "reset",
              action: function action2() {
                var _api$getAddonState3 = api.getAddonState(_constants19.ADDON_ID), isRotated = _api$getAddonState3.isRotated;
                setState({
                  selected: "reset",
                  isRotated
                });
              }
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function registerShortcuts3(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports88.registerShortcuts = registerShortcuts2;
var __export046;
if (Object.isExtensible(module88.exports)) {
  __export046 = module88.exports["registerShortcuts"];
}

// node_modules/@storybook/addon-viewport/dist/cjs/Tool.js
import * as $cjs$_storybook_api12 from "@storybook/api";
import * as $cjs$_storybook_components17 from "@storybook/components";
import * as $cjs$_storybook_theming14 from "@storybook/theming";
import * as $cjs$react33 from "react";

// empty:core-js/modules/es.string.replace.js
var es_string_replace_exports = {};
__export(es_string_replace_exports, {
  default: () => es_string_replace_default
});
init_define_process_env();
var es_string_replace_default = {};

// node_modules/@storybook/addon-viewport/dist/cjs/Tool.js
function $$cjs_default$$58(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module89 = { exports: {} };
var exports89 = module89.exports;
function _typeof19(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof19 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof19 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof19(obj);
}
$$cjs_default$$58(es_symbol_exports);
$$cjs_default$$58(es_symbol_description_exports);
$$cjs_default$$58(es_object_to_string_exports);
$$cjs_default$$58(es_symbol_iterator_exports);
$$cjs_default$$58(es_string_iterator_exports);
$$cjs_default$$58(es_array_iterator_exports);
$$cjs_default$$58(web_dom_collections_iterator_exports);
$$cjs_default$$58(es_array_from_exports);
$$cjs_default$$58(es_array_slice_exports);
$$cjs_default$$58(es_weak_map_exports);
$$cjs_default$$58(es_object_get_own_property_descriptor_exports);
Object.defineProperty(exports89, "__esModule", {
  value: true
});
exports89.ViewportTool = void 0;
$$cjs_default$$58(es_array_concat_exports);
$$cjs_default$$58(es_array_map_exports);
$$cjs_default$$58(es_object_entries_exports);
$$cjs_default$$58(es_function_name_exports);
$$cjs_default$$58(es_object_assign_exports);
$$cjs_default$$58(es_array_filter_exports);
$$cjs_default$$58(es_string_bold_exports);
$$cjs_default$$58(es_array_find_exports);
$$cjs_default$$58(es_object_keys_exports);
$$cjs_default$$58(es_string_replace_exports);
$$cjs_default$$58(es_regexp_exec_exports);
var _react29 = _interopRequireWildcard18($$cjs_default$$58($cjs$react33));
var _memoizerific2 = _interopRequireDefault25($$cjs_default$$58(memoizerific_exports));
var _theming14 = $$cjs_default$$58($cjs$_storybook_theming14);
var _components17 = $$cjs_default$$58($cjs$_storybook_components17);
var _api12 = $$cjs_default$$58($cjs$_storybook_api12);
var _shortcuts = $$cjs_default$$58(shortcuts_exports);
var _constants20 = $$cjs_default$$58(constants_exports8);
var _defaults = $$cjs_default$$58(defaults_exports);
function _interopRequireDefault25(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache18() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache18 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard18(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof19(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache18();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty11(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _slicedToArray17(arr, i) {
  return _arrayWithHoles16(arr) || _iterableToArrayLimit16(arr, i) || _unsupportedIterableToArray20(arr, i) || _nonIterableRest16();
}
function _nonIterableRest16() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit16(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles16(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray20(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray20(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray20(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray20(o, minLen);
}
function _iterableToArray7(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray20(arr);
}
function _arrayLikeToArray20(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var toList = (0, _memoizerific2.default)(50)(function(items) {
  return [].concat(baseViewports, _toConsumableArray8(Object.entries(items).map(function(_ref2) {
    var _ref3 = _slicedToArray17(_ref2, 2), id = _ref3[0], _ref = _ref3[1];
    var name = _ref.name, rest = _objectWithoutProperties5(_ref, ["name"]);
    return Object.assign({}, rest, {
      id,
      title: name
    });
  })));
});
var responsiveViewport = {
  id: "reset",
  title: "Reset viewport",
  styles: null,
  type: "other"
};
var baseViewports = [responsiveViewport];
var toLinks = (0, _memoizerific2.default)(50)(function(list, active, set, state, close) {
  return list.map(function(i) {
    switch (i.id) {
      case responsiveViewport.id: {
        if (active.id === i.id) {
          return null;
        }
      }
      default: {
        return Object.assign({}, i, {
          onClick: function onClick() {
            set(Object.assign({}, state, {
              selected: i.id
            }));
            close();
          }
        });
      }
    }
  }).filter(Boolean);
});
var iframeId2 = "storybook-preview-iframe";
var wrapperId = "storybook-preview-wrapper";
var flip = function flip2(_ref4) {
  var width = _ref4.width, height = _ref4.height, styles = _objectWithoutProperties5(_ref4, ["width", "height"]);
  return Object.assign({}, styles, {
    height: width,
    width: height
  });
};
var ActiveViewportSize = _theming14.styled.div(function() {
  return {
    display: "inline-flex"
  };
});
var ActiveViewportLabel = _theming14.styled.div(function(_ref5) {
  var theme2 = _ref5.theme;
  return {
    display: "inline-block",
    textDecoration: "none",
    padding: 10,
    fontWeight: theme2.typography.weight.bold,
    fontSize: theme2.typography.size.s2 - 1,
    lineHeight: "1",
    height: 40,
    border: "none",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    background: "transparent"
  };
});
var IconButtonWithLabel = (0, _theming14.styled)(_components17.IconButton)(function() {
  return {
    display: "inline-flex",
    alignItems: "center"
  };
});
var IconButtonLabel = _theming14.styled.div(function(_ref6) {
  var theme2 = _ref6.theme;
  return {
    fontSize: theme2.typography.size.s2 - 1,
    marginLeft: 10
  };
});
var getStyles = function getStyles2(prevStyles, styles, isRotated) {
  if (styles === null) {
    return null;
  }
  var result = typeof styles === "function" ? styles(prevStyles) : styles;
  return isRotated ? flip(result) : result;
};
var ViewportTool = /* @__PURE__ */ (0, _react29.memo)((0, _theming14.withTheme)(function(_ref7) {
  var _ref9;
  var theme2 = _ref7.theme;
  var _useParameter = (0, _api12.useParameter)(_constants20.PARAM_KEY, {}), _useParameter$viewpor = _useParameter.viewports, viewports = _useParameter$viewpor === void 0 ? _defaults.MINIMAL_VIEWPORTS : _useParameter$viewpor, _useParameter$default = _useParameter.defaultViewport, defaultViewport = _useParameter$default === void 0 ? responsiveViewport.id : _useParameter$default, disable = _useParameter.disable;
  var _useAddonState = (0, _api12.useAddonState)(_constants20.ADDON_ID, {
    selected: defaultViewport,
    isRotated: false
  }), _useAddonState2 = _slicedToArray17(_useAddonState, 2), state = _useAddonState2[0], setState = _useAddonState2[1];
  var list = toList(viewports);
  var api = (0, _api12.useStorybookApi)();
  if (!list.find(function(i) {
    return i.id === defaultViewport;
  })) {
    console.warn('Cannot find "defaultViewport" of "'.concat(defaultViewport, '" in addon-viewport configs, please check the "viewports" setting in the configuration.'));
  }
  (0, _react29.useEffect)(function() {
    (0, _shortcuts.registerShortcuts)(api, setState, Object.keys(viewports));
  }, [viewports]);
  (0, _react29.useEffect)(function() {
    setState({
      selected: defaultViewport || (viewports[state.selected] ? state.selected : responsiveViewport.id),
      isRotated: state.isRotated
    });
  }, [defaultViewport]);
  var selected = state.selected, isRotated = state.isRotated;
  var item = list.find(function(i) {
    return i.id === selected;
  }) || list.find(function(i) {
    return i.id === defaultViewport;
  }) || list.find(function(i) {
    return i.default;
  }) || responsiveViewport;
  var ref = (0, _react29.useRef)();
  var styles = getStyles(ref.current, item.styles, isRotated);
  (0, _react29.useEffect)(function() {
    ref.current = styles;
  }, [item]);
  if (disable || Object.entries(viewports).length === 0) {
    return null;
  }
  return /* @__PURE__ */ _react29.default.createElement(_react29.Fragment, null, /* @__PURE__ */ _react29.default.createElement(_components17.WithTooltip, {
    placement: "top",
    trigger: "click",
    tooltip: function tooltip(_ref8) {
      var onHide = _ref8.onHide;
      return /* @__PURE__ */ _react29.default.createElement(_components17.TooltipLinkList, {
        links: toLinks(list, item, setState, state, onHide)
      });
    },
    closeOnClick: true
  }, /* @__PURE__ */ _react29.default.createElement(IconButtonWithLabel, {
    key: "viewport",
    title: "Change the size of the preview",
    active: !!styles,
    onDoubleClick: function onDoubleClick() {
      setState(Object.assign({}, state, {
        selected: responsiveViewport.id
      }));
    }
  }, /* @__PURE__ */ _react29.default.createElement(_components17.Icons, {
    icon: "grow"
  }), styles ? /* @__PURE__ */ _react29.default.createElement(IconButtonLabel, null, isRotated ? "".concat(item.title, " (L)") : "".concat(item.title, " (P)")) : null)), styles ? /* @__PURE__ */ _react29.default.createElement(ActiveViewportSize, null, /* @__PURE__ */ _react29.default.createElement(_theming14.Global, {
    styles: (_ref9 = {}, _defineProperty11(_ref9, "#".concat(iframeId2), Object.assign({
      margin: "auto",
      transition: "width .3s, height .3s",
      position: "relative",
      border: "1px solid black",
      boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
    }, styles)), _defineProperty11(_ref9, "#".concat(wrapperId), {
      padding: theme2.layoutMargin,
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      justifyItems: "center",
      overflow: "auto",
      display: "grid",
      gridTemplateColumns: "100%",
      gridTemplateRows: "100%"
    }), _ref9)
  }), /* @__PURE__ */ _react29.default.createElement(ActiveViewportLabel, {
    title: "Viewport width"
  }, styles.width.replace("px", "")), /* @__PURE__ */ _react29.default.createElement(_components17.IconButton, {
    key: "viewport-rotate",
    title: "Rotate viewport",
    onClick: function onClick() {
      setState(Object.assign({}, state, {
        isRotated: !isRotated
      }));
    }
  }, /* @__PURE__ */ _react29.default.createElement(_components17.Icons, {
    icon: "transfer"
  })), /* @__PURE__ */ _react29.default.createElement(ActiveViewportLabel, {
    title: "Viewport height"
  }, styles.height.replace("px", ""))) : null);
}));
exports89.ViewportTool = ViewportTool;
var __export047;
if (Object.isExtensible(module89.exports)) {
  __export047 = module89.exports["ViewportTool"];
}

// node_modules/@storybook/addon-viewport/dist/cjs/register.js
import * as $cjs$_storybook_addons10 from "@storybook/addons";
import * as $cjs$react34 from "react";
function $$cjs_default$$59(requiredModule) {
  var isEsModule = false;
  var specifiers = Object.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object.preventExtensions(specifiers);
    Object.seal(specifiers);
    if (Object.freeze) {
      Object.freeze(specifiers);
    }
  }
  if (typeof specifiers !== "object" || hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    return specifiers.default;
  }
  return specifiers;
}
var module90 = { exports: {} };
var exports90 = module90.exports;
function _typeof20(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof20 = function _typeof21(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof20 = function _typeof21(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof20(obj);
}
$$cjs_default$$59(es_weak_map_exports);
$$cjs_default$$59(es_object_to_string_exports);
$$cjs_default$$59(es_string_iterator_exports);
$$cjs_default$$59(es_array_iterator_exports);
$$cjs_default$$59(web_dom_collections_iterator_exports);
$$cjs_default$$59(es_object_get_own_property_descriptor_exports);
$$cjs_default$$59(es_symbol_exports);
$$cjs_default$$59(es_symbol_description_exports);
$$cjs_default$$59(es_symbol_iterator_exports);
var React6 = _interopRequireWildcard19($$cjs_default$$59($cjs$react34));
var _addons10 = $$cjs_default$$59($cjs$_storybook_addons10);
var _constants21 = $$cjs_default$$59(constants_exports8);
var _Tool2 = $$cjs_default$$59(Tool_exports2);
function _getRequireWildcardCache19() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache19 = function _getRequireWildcardCache20() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard19(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof20(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache19();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
_addons10.addons.register(_constants21.ADDON_ID, function() {
  _addons10.addons.add(_constants21.ADDON_ID, {
    title: "viewport / media-queries",
    type: _addons10.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === "story";
    },
    render: function render() {
      return /* @__PURE__ */ React6.createElement(_Tool2.ViewportTool, null);
    }
  });
});
var register_default8 = module90.exports;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
