import { placements, createPopper } from '@popperjs/core';
import { ResizeObserver } from 'vue-resize';
import Vue from 'vue';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
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
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function assign(to, from) {
  for (var key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (_typeof(from[key]) === 'object' && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}

var config = {
  // Disable popper components
  disabled: false,
  // Default position offset [skidding, distance] (px)
  offset: [0, 5],
  // Default container where the tooltip will be appended, can accept a callback that should return an element or a query selector
  container: 'body',
  // Element used to compute position and size boundaries
  boundary: undefined,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instantly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: 'absolute',
  // Popperjs modifiers
  modifiers: [],
  // Other options passed to Popperjs constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      triggers: ['hover', 'focus', 'touch'],
      // Close tooltip on click on tooltip target
      hideTriggers: function hideTriggers(events) {
        return [].concat(_toConsumableArray(events), ['click']);
      },
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: '...'
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Default events that trigger the dropdown
      triggers: ['click'],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
/**
 * Get default config value depending on theme
 */

function getDefaultConfig(theme, key) {
  var themeConfig = config.themes[theme] || {};
  var value;

  do {
    value = themeConfig[key];

    if (typeof value === 'undefined') {
      // Support theme extend
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        // Base config
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);

  return value;
}
/**
 * Theme CSS inheritance
 */

function getThemeClasses(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};

  do {
    // Support theme extend
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);

  return result.map(function (c) {
    return "v-popper--theme-".concat(c);
  });
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var isIOS = false;

if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function applyModifier(modifiers, name, options) {
  var modifier = modifiers.find(function (m) {
    return m.name === name;
  });

  if (!modifier) {
    modifier = {
      name: name,
      options: {}
    };
    modifiers.push(modifier);
  }

  Object.assign(modifier.options, options);
}

var SHOW_EVENT_MAP = {
  hover: 'mouseenter',
  focus: 'focus',
  click: 'click',
  touch: 'touchstart'
};
var HIDE_EVENT_MAP = {
  hover: 'mouseleave',
  focus: 'blur',
  click: 'click',
  touch: 'touchend'
};

function removeFromArray(array, item) {
  var index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

var shownPoppers = [];
var hidingPopper = null;

var Element = function Element() {};

if (typeof window !== 'undefined') {
  Element = window.Element;
}

var PrivatePopper = (function () {
  return {
    name: 'VPopper',
    props: {
      theme: {
        type: String,
        required: true
      },
      targetNodes: {
        type: Function,
        required: true
      },
      referenceNode: {
        type: Function,
        required: true
      },
      popperNode: {
        type: Function,
        required: true
      },
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      // eslint-disable-next-line vue/require-prop-types
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'disabled');
        }
      },
      placement: {
        type: String,
        default: function _default() {
          return getDefaultConfig(this.theme, 'placement');
        },
        validator: function validator(value) {
          return placements.includes(value);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function _default() {
          return getDefaultConfig(this.theme, 'delay');
        }
      },
      offset: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'offset');
        }
      },
      triggers: {
        type: Array,
        default: function _default() {
          return getDefaultConfig(this.theme, 'triggers');
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'showTriggers');
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'hideTriggers');
        }
      },
      popperTriggers: {
        type: Array,
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperTriggers');
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperShowTriggers');
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperHideTriggers');
        }
      },
      container: {
        type: [String, Object, Element, Boolean, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'container');
        }
      },
      boundary: {
        type: [String, Element],
        default: function _default() {
          return getDefaultConfig(this.theme, 'boundary');
        }
      },
      strategy: {
        type: String,
        validator: function validator(value) {
          return ['absolute', 'fixed'].includes(value);
        },
        default: function _default() {
          return getDefaultConfig(this.theme, 'strategy');
        }
      },
      modifiers: {
        type: Array,
        default: function _default() {
          return getDefaultConfig(this.theme, 'modifiers');
        }
      },
      popperOptions: {
        type: Object,
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperOptions');
        }
      },
      autoHide: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'autoHide');
        }
      },
      handleResize: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'handleResize');
        }
      },
      instantMove: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'instantMove');
        }
      },
      eagerMount: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'eagerMount');
        }
      }
    },
    data: function data() {
      return {
        isShown: false,
        isMounted: false,
        skipTransition: false,
        classes: {
          showFrom: false,
          showTo: false,
          hideFrom: false,
          hideTo: true
        }
      };
    },
    computed: {
      popperId: function popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent: function shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData: function slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: _objectSpread2({}, this.classes)
        };
      }
    },
    watch: {
      shown: '$_autoShowHide',
      disabled: function disabled(value) {
        if (value) {
          this.dispose();
        } else {
          this.init();
        }
      },
      container: function container() {
        var _this = this;

        return _asyncToGenerator(function* () {
          if (_this.isShown && _this.popperInstance) {
            _this.$_ensureContainer();

            yield _this.popperInstance.update();
          }
        })();
      },
      triggers: function triggers() {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      },
      placement: '$_refreshPopperOptions',
      offset: '$_refreshPopperOptions',
      boundary: '$_refreshPopperOptions',
      strategy: '$_refreshPopperOptions',
      modifiers: '$_refreshPopperOptions',
      popperOptions: {
        handler: '$_refreshPopperOptions',
        deep: true
      }
    },
    created: function created() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function (n) {
        return n.toString(36).substr(2, 10);
      }).join('_'));
    },
    mounted: function mounted() {
      this.init();
    },
    activated: function activated() {
      this.$_autoShowHide();
    },
    deactivated: function deactivated() {
      this.hide();
    },
    beforeDestroy: function beforeDestroy() {
      this.dispose();
    },
    methods: {
      show: function show() {
        var _this2 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref.event,
            _ref$skipDelay = _ref.skipDelay,
            skipDelay = _ref$skipDelay === void 0 ? false : _ref$skipDelay,
            _ref$force = _ref.force,
            force = _ref$force === void 0 ? false : _ref$force;

        if (force || !this.disabled) {
          this.$_scheduleShow(event, skipDelay);
          this.$emit('show'); // Prevent hiding with global handler

          this.$_showFrameLocked = true;
          requestAnimationFrame(function () {
            _this2.$_showFrameLocked = false;
          });
        }

        this.$emit('update:shown', true);
      },
      hide: function hide() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref2.event,
            _ref2$skipDelay = _ref2.skipDelay,
            skipDelay = _ref2$skipDelay === void 0 ? false : _ref2$skipDelay;

        this.$_scheduleHide(event, skipDelay);
        this.$emit('hide');
        this.$emit('update:shown', false);
      },
      init: function init() {
        this.$_isDisposed = false;
        this.isMounted = false;
        this.$_events = [];
        this.$_preventShow = false; // Nodes

        this.$_targetNodes = this.targetNodes().filter(function (e) {
          return e.nodeType === e.ELEMENT_NODE;
        });
        this.$_popperNode = this.popperNode();
        this.$_swapTargetAttrs('title', 'data-original-title');
        this.$_detachPopperNode();

        if (this.triggers.length) {
          this.$_addEventListeners();
        }

        if (this.shown) {
          this.show();
        }
      },
      dispose: function dispose() {
        this.$_isDisposed = true;
        this.$_removeEventListeners();
        this.hide({
          skipDelay: true
        });

        if (this.popperInstance) {
          this.popperInstance.destroy();
          this.$_detachPopperNode();
        }

        this.isMounted = false;
        this.popperInstance = null;
        this.isShown = false;
        this.$_swapTargetAttrs('data-original-title', 'title');
        this.$emit('dispose');
      },
      onResize: function onResize() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
          if (_this3.isShown && _this3.popperInstance) {
            yield _this3.popperInstance.update();

            _this3.$emit('resize');
          }
        })();
      },
      $_getPopperOptions: function $_getPopperOptions() {
        var _this4 = this;

        var popperOptions = _objectSpread2(_objectSpread2({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function () {
            var _onFirstUpdate = _asyncToGenerator(function* (state) {
              if (_this4.popperOptions.onFirstUpdate) {
                _this4.popperOptions.onFirstUpdate(state);
              }

              yield _this4.$_applyShowEffect();
            });

            function onFirstUpdate(_x) {
              return _onFirstUpdate.apply(this, arguments);
            }

            return onFirstUpdate;
          }()
        });

        if (!popperOptions.modifiers) {
          popperOptions.modifiers = [];
        }

        applyModifier(popperOptions.modifiers, 'arrow', {
          element: this.arrowNode && this.arrowNode() || '[data-popper-arrow]'
        });

        if (this.offset) {
          applyModifier(popperOptions.modifiers, 'offset', {
            offset: this.offset
          });
        }

        if (this.boundary) {
          applyModifier(popperOptions.modifiers, 'preventOverflow', {
            boundary: this.boundary
          });
        }

        if (!this.isShown) {
          // Disable event listeners
          applyModifier(popperOptions.modifiers, 'eventListeners', {
            enabled: false
          });
        }

        return popperOptions;
      },
      $_refreshPopperOptions: function $_refreshPopperOptions() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
          if (_this5.popperInstance) {
            yield _this5.popperInstance.setOptions(_this5.$_getPopperOptions());
          }
        })();
      },
      $_scheduleShow: function $_scheduleShow() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.$_hideInProgress = false;
        clearTimeout(this.$_scheduleTimer);

        if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
          hidingPopper.$_applyHide(true);
          this.$_applyShow(true);
          return;
        }

        if (skipDelay) {
          this.$_applyShow();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay('show'));
        }
      },
      $_scheduleHide: function $_scheduleHide() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.$_hideInProgress = true;
        clearTimeout(this.$_scheduleTimer);

        if (this.isShown) {
          hidingPopper = this;
        }

        if (skipDelay) {
          this.$_applyHide();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay('hide'));
        }
      },
      $_computeDelay: function $_computeDelay(type) {
        var delay = this.delay;
        return parseInt(delay && delay[type] || delay || 0);
      },
      $_applyShow: function $_applyShow() {
        var _arguments = arguments,
            _this6 = this;

        return _asyncToGenerator(function* () {
          var skipTransition = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
          clearTimeout(_this6.$_disposeTimer);
          clearTimeout(_this6.$_scheduleTimer);
          _this6.skipTransition = skipTransition; // Already shown

          if (_this6.isShown) {
            return;
          }

          if (!_this6.isMounted) {
            _this6.$_ensureContainer();

            _this6.isMounted = true;
          }

          if (!_this6.popperInstance) {
            _this6.popperInstance = createPopper(_this6.referenceNode(), _this6.$_popperNode, _this6.$_getPopperOptions());
          } else {
            yield _this6.popperInstance.update(); // Enable event listeners

            yield _this6.$_refreshPopperOptions();
            yield _this6.$_applyShowEffect();
          }
        })();
      },
      $_applyShowEffect: function $_applyShowEffect() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
          if (_this7.$_hideInProgress) return;
          _this7.isShown = true;

          _this7.$_applyAttrsToTarget({
            'aria-describedby': _this7.popperId,
            'data-popper-shown': ''
          });

          var showGroup = _this7.showGroup;

          if (showGroup) {
            var popover;

            for (var i = 0; i < shownPoppers.length; i++) {
              popover = shownPoppers[i];

              if (popover.showGroup !== showGroup) {
                popover.hide();
                popover.$emit('close-group');
              }
            }
          }

          shownPoppers.push(_this7);

          _this7.$emit('apply-show'); // Fix popper not applying the attribute on initial render :(


          _this7.$_popperNode.setAttribute('data-popper-placement', _this7.popperInstance.state.placement); // Advanced classes


          _this7.classes.showFrom = true;
          _this7.classes.showTo = false;
          _this7.classes.hideFrom = false;
          _this7.classes.hideTo = false;
          yield nextFrame();
          _this7.classes.showFrom = false;
          _this7.classes.showTo = true;
        })();
      },
      $_applyHide: function $_applyHide() {
        var _arguments2 = arguments,
            _this8 = this;

        return _asyncToGenerator(function* () {
          var skipTransition = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : false;
          clearTimeout(_this8.$_scheduleTimer); // Already hidden

          if (!_this8.isShown) {
            return;
          }

          _this8.skipTransition = skipTransition;
          removeFromArray(shownPoppers, _this8);

          if (hidingPopper === _this8) {
            hidingPopper = null;
          }

          _this8.isShown = false;

          if (_this8.popperInstance) {
            // Disable event listeners
            yield _this8.$_refreshPopperOptions();
          }

          _this8.$_applyAttrsToTarget({
            'aria-describedby': undefined,
            'data-popper-shown': undefined
          });

          clearTimeout(_this8.$_disposeTimer);
          var disposeTime = getDefaultConfig(_this8.theme, 'disposeTimeout');

          if (disposeTime !== null) {
            _this8.$_disposeTimer = setTimeout(function () {
              if (_this8.$_popperNode) {
                // Don't remove popper instance, just the HTML element
                _this8.$_detachPopperNode();

                _this8.isMounted = false;
              }
            }, disposeTime);
          }

          _this8.$emit('apply-hide'); // Advanced classes


          _this8.classes.showFrom = false;
          _this8.classes.showTo = false;
          _this8.classes.hideFrom = true;
          _this8.classes.hideTo = false;
          yield nextFrame();
          _this8.classes.hideFrom = false;
          _this8.classes.hideTo = true;
        })();
      },
      $_autoShowHide: function $_autoShowHide() {
        if (this.shown) {
          this.show();
        } else {
          this.hide();
        }
      },
      $_ensureContainer: function $_ensureContainer() {
        var container = this.container; // if container is a callback, resolve it

        if (typeof container === 'function') {
          container = container(this.$_targetNodes[0]);
        } // if container is a query, get the relative element


        if (typeof container === 'string') {
          container = window.document.querySelector(container);
        } else if (container === false) {
          // if container is `false`, set it to reference parent
          container = this.$_targetNodes[0].parentNode;
        }

        if (!container) {
          throw new Error('No container for popover: ' + this.container);
        }

        container.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function $_addEventListeners() {
        var _this9 = this;

        var addEvents = function addEvents(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
          var triggers = commonTriggers;

          if (customTrigger != null) {
            triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger;
          }

          triggers.forEach(function (trigger) {
            var eventType = eventMap[trigger];

            if (eventType) {
              _this9.$_events.push({
                targetNodes: targetNodes,
                eventType: eventType,
                handler: handler
              });

              targetNodes.forEach(function (node) {
                return node.addEventListener(eventType, handler);
              });
            }
          });
        }; // Add trigger show events


        var handleShow = function handleShow(event) {
          if (_this9.isShown && !_this9.$_hideInProgress) {
            return;
          }

          event.usedByTooltip = true; // Prevent open on mobile touch in global close

          !_this9.$_preventShow && _this9.show({
            event: event
          });
        };

        addEvents(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
        addEvents([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow); // Add trigger hide events

        var handleHide = function handleHide(event) {
          if (event.usedByTooltip) {
            return;
          }

          _this9.hide({
            event: event
          });
        };

        addEvents(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide);
        addEvents([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide);
      },
      $_removeEventListeners: function $_removeEventListeners() {
        this.$_events.forEach(function (_ref3) {
          var targetNodes = _ref3.targetNodes,
              eventType = _ref3.eventType,
              handler = _ref3.handler;
          targetNodes.forEach(function (node) {
            return node.removeEventListener(eventType, handler);
          });
        });
        this.$_events = [];
      },
      $_handleGlobalClose: function $_handleGlobalClose(event) {
        var _this10 = this;

        var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.$_showFrameLocked) return;
        this.hide({
          event: event
        });

        if (event.closePopover) {
          this.$emit('close-directive');
        } else {
          this.$emit('auto-hide');
        }

        if (touch) {
          this.$_preventShow = true;
          setTimeout(function () {
            _this10.$_preventShow = false;
          }, 300);
        }
      },
      $_detachPopperNode: function $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function $_swapTargetAttrs(attrFrom, attrTo) {
        var _iterator = _createForOfIteratorHelper(this.$_targetNodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var el = _step.value;
            var value = el.getAttribute(attrFrom);

            if (value) {
              el.removeAttribute(attrFrom);
              el.setAttribute(attrTo, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      $_applyAttrsToTarget: function $_applyAttrsToTarget(attrs) {
        var _iterator2 = _createForOfIteratorHelper(this.$_targetNodes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var el = _step2.value;

            for (var n in attrs) {
              var value = attrs[n];

              if (value == null) {
                el.removeAttribute(n);
              } else {
                el.setAttribute(n, value);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    render: function render(h) {
      return this.$scopedSlots.default(this.slotData)[0];
    }
  };
});

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener('click', handleGlobalClick, true);
  }
}

function handleGlobalClick(event) {
  handleGlobalClose(event);
}

function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}

function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _loop = function _loop(i) {
    var popper = shownPoppers[i];
    var popperContent = popper.popperNode();
    var contains = popperContent.contains(event.target);
    requestAnimationFrame(function () {
      if (event.closeAllPopover || event.closePopover && contains || popper.autoHide && !contains) {
        popper.$_handleGlobalClose(event, touch);
      }
    });
  };

  // Delay so that close directive has time to set values
  for (var i = 0; i < shownPoppers.length; i++) {
    _loop(i);
  }
}

function nextFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(resolve);
  });
}

var PrivateThemeClass = {
  computed: {
    themeClass: function themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};

//
var script = {
  name: 'VPopperContent',
  components: {
    ResizeObserver: ResizeObserver
  },
  mixins: [PrivateThemeClass],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    ref: "popover",
    staticClass: "v-popper__popper",
    class: [_vm.themeClass, {
      "v-popper__popper--shown": _vm.shown,
      "v-popper__popper--hidden": !_vm.shown,
      "v-popper__popper--show-from": _vm.classes.showFrom,
      "v-popper__popper--show-to": _vm.classes.showTo,
      "v-popper__popper--hide-from": _vm.classes.hideFrom,
      "v-popper__popper--hide-to": _vm.classes.hideTo,
      "v-popper__popper--skip-transition": _vm.skipTransition
    }],
    attrs: {
      id: _vm.popperId,
      "aria-hidden": _vm.shown ? "false" : "true",
      tabindex: _vm.autoHide ? 0 : undefined
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        _vm.autoHide && _vm.$emit("hide");
      }
    }
  }, [_c("div", {
    staticClass: "v-popper__wrapper"
  }, [_c("div", {
    ref: "inner",
    staticClass: "v-popper__inner"
  }, [_vm.mounted ? [_c("div", [_vm._t("default")], 2), _vm._v(" "), _vm.handleResize ? _c("ResizeObserver", {
    on: {
      notify: function notify($event) {
        return _vm.$emit("resize", $event);
      }
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c("div", {
    ref: "arrow",
    staticClass: "v-popper__arrow-container"
  }, [_c("div", {
    staticClass: "v-popper__arrow"
  })])])]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

// @vue/component
var PrivatePopperMethods = {
  methods: {
    show: function show() {
      var _this$$refs$popper;

      return (_this$$refs$popper = this.$refs.popper).show.apply(_this$$refs$popper, arguments);
    },
    hide: function hide() {
      var _this$$refs$popper2;

      return (_this$$refs$popper2 = this.$refs.popper).hide.apply(_this$$refs$popper2, arguments);
    },
    dispose: function dispose() {
      var _this$$refs$popper3;

      return (_this$$refs$popper3 = this.$refs.popper).dispose.apply(_this$$refs$popper3, arguments);
    },
    onResize: function onResize() {
      var _this$$refs$popper4;

      return (_this$$refs$popper4 = this.$refs.popper).onResize.apply(_this$$refs$popper4, arguments);
    }
  }
};

//
var script$1 = {
  name: 'VPopperWrapper',
  components: {
    Popper: PrivatePopper(),
    PopperContent: __vue_component__
  },
  mixins: [PrivatePopperMethods, PrivateThemeClass],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: function _default() {
        return this.$options.vPopperTheme;
      }
    }
  },
  methods: {
    getTargetNodes: function getTargetNodes() {
      return this.$slots.default.map(function (vnode) {
        return vnode.elm;
      }).filter(Boolean);
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("Popper", _vm._g(_vm._b({
    ref: "popper",
    attrs: {
      theme: _vm.theme,
      "target-nodes": _vm.getTargetNodes,
      "reference-node": function referenceNode() {
        return _vm.$refs.reference;
      },
      "popper-node": function popperNode() {
        return _vm.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _vm.$refs.popperContent.$refs.arrow;
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var popperId = ref.popperId;
        var isShown = ref.isShown;
        var shouldMountContent = ref.shouldMountContent;
        var skipTransition = ref.skipTransition;
        var autoHide = ref.autoHide;
        var hide = ref.hide;
        var handleResize = ref.handleResize;
        var onResize = ref.onResize;
        var classes = ref.classes;
        return [_c("div", {
          ref: "reference",
          staticClass: "v-popper",
          class: [_vm.themeClass, {
            "v-popper--shown": isShown
          }]
        }, [_vm._t("default"), _vm._v(" "), _c("PopperContent", {
          ref: "popperContent",
          attrs: {
            "popper-id": popperId,
            theme: _vm.theme,
            shown: isShown,
            mounted: shouldMountContent,
            "skip-transition": skipTransition,
            "auto-hide": autoHide,
            "handle-resize": handleResize,
            classes: classes
          },
          on: {
            hide: hide,
            resize: onResize
          }
        }, [_vm._t("popper", null, {
          shown: isShown
        })], 2)], 2)];
      }
    }], null, true)
  }, "Popper", _vm.$attrs, false), _vm.$listeners));
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var script$2 = _objectSpread2(_objectSpread2({}, __vue_component__$1), {}, {
  name: 'VDropdown',
  vPopperTheme: 'dropdown'
});

/* script */
var __vue_script__$2 = script$2;
/* template */

/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var script$3 = _objectSpread2(_objectSpread2({}, __vue_component__$1), {}, {
  name: 'VMenu',
  vPopperTheme: 'menu'
});

/* script */
var __vue_script__$3 = script$3;
/* template */

/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var script$4 = _objectSpread2(_objectSpread2({}, __vue_component__$1), {}, {
  name: 'VTooltip',
  vPopperTheme: 'tooltip'
});

/* script */
var __vue_script__$4 = script$4;
/* template */

/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
var script$5 = {
  name: 'VTooltipDirective',
  components: {
    Popper: PrivatePopper(),
    PopperContent: __vue_component__
  },
  mixins: [PrivatePopperMethods],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'tooltip'
    },
    html: {
      type: Boolean,
      default: function _default() {
        return getDefaultConfig(this.theme, 'html');
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function _default() {
        return getDefaultConfig(this.theme, 'loadingContent');
      }
    }
  },
  data: function data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function isContentAsync() {
      return typeof this.content === 'function';
    },
    loading: function loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }

      return this.content;
    }
  },
  watch: {
    content: {
      handler: function handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    finalContent: function finalContent(value) {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.popper.onResize();
      });
    }
  },
  created: function created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function fetchContent(force) {
      var _this2 = this;

      if (typeof this.content === 'function' && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        var fetchId = ++this.$_fetchId;
        var result = this.content(this);

        if (result.then) {
          result.then(function (res) {
            return _this2.onResult(fetchId, res);
          });
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult: function onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId) return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow: function onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide: function onHide() {
      this.$_isShown = false;
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("Popper", _vm._g(_vm._b({
    ref: "popper",
    attrs: {
      theme: _vm.theme,
      "popper-node": function popperNode() {
        return _vm.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _vm.$refs.popperContent.$refs.arrow;
      }
    },
    on: {
      "apply-show": _vm.onShow,
      "apply-hide": _vm.onHide
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var popperId = ref.popperId;
        var isShown = ref.isShown;
        var shouldMountContent = ref.shouldMountContent;
        var skipTransition = ref.skipTransition;
        var autoHide = ref.autoHide;
        var hide = ref.hide;
        var handleResize = ref.handleResize;
        var onResize = ref.onResize;
        var classes = ref.classes;
        return [_c("PopperContent", {
          ref: "popperContent",
          class: {
            "v-popper--tooltip-loading": _vm.loading
          },
          attrs: {
            "popper-id": popperId,
            theme: _vm.theme,
            shown: isShown,
            mounted: shouldMountContent,
            "skip-transition": skipTransition,
            "auto-hide": autoHide,
            "handle-resize": handleResize,
            classes: classes
          },
          on: {
            hide: hide,
            resize: onResize
          }
        }, [_vm.html ? _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.finalContent)
          }
        }) : _c("div", {
          domProps: {
            textContent: _vm._s(_vm.finalContent)
          }
        })])];
      }
    }])
  }, "Popper", _vm.$attrs, false), _vm.$listeners));
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var TARGET_CLASS = 'v-popper--has-tooltip';
/**
 * Support placement as directive modifier
 */

function getPlacement(options, modifiers) {
  var result = options.placement;

  if (!result && modifiers) {
    var _iterator = _createForOfIteratorHelper(placements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pos = _step.value;

        if (modifiers[pos]) {
          result = pos;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (!result) {
    result = getDefaultConfig(options.theme || 'tooltip', 'placement');
  }

  return result;
}
function getOptions(el, value, modifiers) {
  var options;

  var type = _typeof(value);

  if (type === 'string') {
    options = {
      content: value
    };
  } else if (value && type === 'object') {
    options = value;
  } else {
    options = {
      content: false
    };
  }

  options.placement = getPlacement(options, modifiers);

  options.targetNodes = function () {
    return [el];
  };

  options.referenceNode = function () {
    return el;
  };

  return options;
}
function createTooltip(el, value, modifiers) {
  var options = getOptions(el, value, modifiers);
  var tooltipApp = el.$_popper = new Vue({
    data: function data() {
      return {
        options: options
      };
    },
    render: function render(h) {
      var _this$options = this.options,
          theme = _this$options.theme,
          html = _this$options.html,
          content = _this$options.content,
          loadingContent = _this$options.loadingContent,
          otherOptions = _objectWithoutProperties(_this$options, ["theme", "html", "content", "loadingContent"]);

      return h(__vue_component__$5, {
        props: {
          theme: theme,
          html: html,
          content: content,
          loadingContent: loadingContent
        },
        attrs: otherOptions,
        ref: 'tooltip'
      });
    }
  });
  var mountTarget = document.createElement('div');
  document.body.appendChild(mountTarget);
  tooltipApp.$mount(mountTarget); // Class on target

  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }

  return tooltipApp;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.$destroy();
    delete el.$_popper;
    delete el.$_popperOldShown;
  }

  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, _ref) {
  var value = _ref.value,
      oldValue = _ref.oldValue,
      modifiers = _ref.modifiers;
  var options = getOptions(el, value, modifiers);

  if (!options.content || getDefaultConfig(options.theme || 'tooltip', 'disabled')) {
    destroyTooltip(el);
  } else {
    var tooltipApp;

    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options = options;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    } // Manual show


    if (typeof value.shown !== 'undefined' && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.$refs.tooltip.show() : tooltipApp.$refs.tooltip.hide();
    }
  }
}
var PrivateVTooltip = {
  bind: bind,
  update: bind,
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

function addListeners(el) {
  el.addEventListener('click', onClick);
  el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}

function removeListeners(el) {
  el.removeEventListener('click', onClick);
  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchend', onTouchEnd);
  el.removeEventListener('touchcancel', onTouchCancel);
}

function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}

function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchCancel);
  }
}

function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;

  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}

function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}

var PrivateVClosePopper = {
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (typeof value === 'undefined' || value) {
      addListeners(el);
    }
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind: function unbind(el) {
    removeListeners(el);
  }
};

/* Exports */

var options = config; // Directive

var VTooltip = PrivateVTooltip;
var VClosePopper = PrivateVClosePopper; // Components

var Dropdown = __vue_component__$2;
var Menu = __vue_component__$3;
var Popper = PrivatePopper;
var PopperContent = __vue_component__;
var PopperMethods = PrivatePopperMethods;
var PopperWrapper = __vue_component__$1;
var ThemeClass = PrivateThemeClass;
var Tooltip = __vue_component__$4;
var TooltipDirective = __vue_component__$5;
/* Vue plugin */

function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  assign(config, options); // Directive

  Vue.directive('tooltip', PrivateVTooltip);
  Vue.directive('close-popper', PrivateVClosePopper); // Components
  // eslint-disable-next-line vue/component-definition-name-casing

  Vue.component('v-tooltip', __vue_component__$4);
  Vue.component('VTooltip', __vue_component__$4); // eslint-disable-next-line vue/component-definition-name-casing

  Vue.component('v-dropdown', __vue_component__$2);
  Vue.component('VDropdown', __vue_component__$2); // eslint-disable-next-line vue/component-definition-name-casing

  Vue.component('v-menu', __vue_component__$3);
  Vue.component('VMenu', __vue_component__$3);
}
var plugin = {
  // eslint-disable-next-line no-undef
  version: "3.0.0-alpha.21",
  install: install,
  options: config
}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export { Dropdown, Menu, Popper, PopperContent, PopperMethods, PopperWrapper, ThemeClass, Tooltip, TooltipDirective, VClosePopper, VTooltip, createTooltip, destroyTooltip, install, options };
//# sourceMappingURL=v-tooltip.esm.js.map
