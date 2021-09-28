import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import Popper from 'popper.js';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';

var SVGAnimatedString = function SVGAnimatedString() {};

if (typeof window !== 'undefined') {
  SVGAnimatedString = window.SVGAnimatedString;
}

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }

  return value;
}
/**
 * Check if an element is in the DOM (Including the Shadow DOM).
 * @param element
 * @returns {boolean}
 */

function isInDocument(element) {
  var currentElement = element;

  while (currentElement && currentElement.parentNode) {
    if (currentElement.parentNode === document) {
      return true;
    } else if (currentElement.parentNode instanceof DocumentFragment) {
      currentElement = currentElement.parentNode.host;
    } else {
      currentElement = currentElement.parentNode;
    }
  }

  return false;
}
/**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */

function addClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList;

  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }

  newClasses.forEach(function (newClass) {
    if (classList.indexOf(newClass) === -1) {
      classList.push(newClass);
    }
  });

  if (el instanceof SVGElement) {
    el.setAttribute('class', classList.join(' '));
  } else {
    el.className = classList.join(' ');
  }
}
/**
 * Remove classes from an element.
 * It uses el.className rather than classList in order to be IE friendly.
 * @export
 * @param {any} el The element to remove the classes from.
 * @param {any} classes List of space separated classes to be removed from the element.
 */

function removeClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList;

  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }

  newClasses.forEach(function (newClass) {
    var index = classList.indexOf(newClass);

    if (index !== -1) {
      classList.splice(index, 1);
    }
  });

  if (el instanceof SVGElement) {
    el.setAttribute('class', classList.join(' '));
  } else {
    el.className = classList.join(' ');
  }
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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
};
var openTooltips = [];

var Tooltip = /*#__PURE__*/function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @param {string} [options.ariaId] Id used for accessibility
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(_reference, _options) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    _defineProperty(this, "_events", []);

    _defineProperty(this, "_setTooltipNodeEvent", function (evt, reference, delay, options) {
      var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

      var callback = function callback(evt2) {
        var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget; // Remove event listener after call

        _this._tooltipNode.removeEventListener(evt.type, callback); // If the new reference is not the reference element


        if (!reference.contains(relatedreference2)) {
          // Schedule to hide tooltip
          _this._scheduleHide(reference, options.delay, options, evt2);
        }
      };

      if (_this._tooltipNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        _this._tooltipNode.addEventListener(evt.type, callback);

        return true;
      }

      return false;
    });

    // apply user options over default ones
    _options = _objectSpread$1(_objectSpread$1({}, DEFAULT_OPTIONS), _options);
    _reference.jquery && (_reference = _reference[0]);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this); // cache reference and options

    this.reference = _reference;
    this.options = _options; // set initial state

    this._isOpen = false;

    this._init();
  } //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  _createClass(Tooltip, [{
    key: "show",
    value: function show() {
      this._show(this.reference, this.options);
    }
    /**
     * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#hide
     * @memberof Tooltip
     */

  }, {
    key: "hide",
    value: function hide() {
      this._hide();
    }
    /**
     * Hides and destroys an element’s tooltip.
     * @method Tooltip#dispose
     * @memberof Tooltip
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this._dispose();
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#toggle
     * @memberof Tooltip
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._isOpen) {
        return this.hide();
      } else {
        return this.show();
      }
    }
  }, {
    key: "setClasses",
    value: function setClasses(classes) {
      this._classes = classes;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.options.title = content;

      if (this._tooltipNode) {
        this._setContent(content, this.options);
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var classesUpdated = false;
      var classes = options && options.classes || directive.options.defaultClass;

      if (!isEqual(this._classes, classes)) {
        this.setClasses(classes);
        classesUpdated = true;
      }

      options = getOptions(options);
      var needPopperUpdate = false;
      var needRestart = false;

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true;
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container || classesUpdated) {
        needRestart = true;
      }

      for (var key in options) {
        this.options[key] = options[key];
      }

      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen;
          this.dispose();

          this._init();

          if (isOpen) {
            this.show();
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update();
        }
      }
    } //
    // Private methods
    //

  }, {
    key: "_init",
    value: function _init() {
      // get events list
      var events = typeof this.options.trigger === 'string' ? this.options.trigger.split(' ') : [];
      this._isDisposed = false;
      this._enableDocumentTouch = events.indexOf('manual') === -1;
      events = events.filter(function (trigger) {
        return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
      }); // set event listeners

      this._setEventListeners(this.reference, events, this.options); // title attribute


      this.$_originalTitle = this.reference.getAttribute('title');
      this.reference.removeAttribute('title');
      this.reference.setAttribute('data-original-title', this.$_originalTitle);
    }
    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */

  }, {
    key: "_create",
    value: function _create(reference, template) {
      var _this2 = this;

      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0]; // add unique ID to our tooltip (needed for accessibility reasons)

      tooltipNode.id = this.options.ariaId || "tooltip_".concat(Math.random().toString(36).substr(2, 10)); // Initially hide the tooltip
      // The attribute will be switched in a next frame so
      // CSS transitions can play

      tooltipNode.setAttribute('aria-hidden', 'true');

      if (this.options.autoHide && this.options.trigger.indexOf('hover') !== -1) {
        tooltipNode.addEventListener('mouseenter', function (evt) {
          return _this2._scheduleHide(reference, _this2.options.delay, _this2.options, evt);
        });
        tooltipNode.addEventListener('click', function (evt) {
          return _this2._scheduleHide(reference, _this2.options.delay, _this2.options, evt);
        });
      } // return the generated tooltip node


      return tooltipNode;
    }
  }, {
    key: "_setContent",
    value: function _setContent(content, options) {
      var _this3 = this;

      this.asyncContent = false;

      this._applyContent(content, options).then(function () {
        if (!_this3.popperInstance) return;

        _this3.popperInstance.update();
      });
    }
  }, {
    key: "_applyContent",
    value: function _applyContent(title, options) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var allowHtml = options.html;
        var rootNode = _this4._tooltipNode;
        if (!rootNode) return;
        var titleNode = rootNode.querySelector(_this4.options.innerSelector);

        if (title.nodeType === 1) {
          // if title is a node, append it only if allowHtml is true
          if (allowHtml) {
            while (titleNode.firstChild) {
              titleNode.removeChild(titleNode.firstChild);
            }

            titleNode.appendChild(title);
          }
        } else if (typeof title === 'function') {
          // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
          var result = title();

          if (result && typeof result.then === 'function') {
            _this4.asyncContent = true;
            options.loadingClass && addClasses(rootNode, options.loadingClass);

            if (options.loadingContent) {
              _this4._applyContent(options.loadingContent, options);
            }

            result.then(function (asyncResult) {
              options.loadingClass && removeClasses(rootNode, options.loadingClass);
              return _this4._applyContent(asyncResult, options);
            }).then(resolve).catch(reject);
          } else {
            _this4._applyContent(result, options).then(resolve).catch(reject);
          }

          return;
        } else {
          // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
          allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
        }

        resolve();
      });
    }
  }, {
    key: "_show",
    value: function _show(reference, options) {
      if (options) {
        var container = this._findContainer(options.container, reference);

        if (!container) return;
      }

      clearTimeout(this._disposeTimer);
      options = Object.assign({}, options);
      delete options.offset;
      var updateClasses = true;

      if (this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
        updateClasses = false;
      }

      var result = this._ensureShown(reference, options);

      if (updateClasses && this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
      }

      addClasses(reference, ['v-tooltip-open']);
      return result;
    }
  }, {
    key: "_ensureShown",
    value: function _ensureShown(reference, options) {
      var _this5 = this;

      // don't show if it's already visible
      if (this._isOpen) {
        return this;
      }

      this._isOpen = true;
      openTooltips.push(this); // if the tooltipNode already exists, just show it

      if (this._tooltipNode) {
        this._tooltipNode.style.display = '';

        this._tooltipNode.setAttribute('aria-hidden', 'false');

        this.popperInstance.enableEventListeners();
        this.popperInstance.update();

        if (this.asyncContent) {
          this._setContent(options.title, options);
        }

        return this;
      } // get title


      var title = reference.getAttribute('title') || options.title; // don't show tooltip if no title is defined

      if (!title) {
        return this;
      } // create tooltip node


      var tooltipNode = this._create(reference, options.template);

      this._tooltipNode = tooltipNode; // Add `aria-describedby` to our reference element for accessibility reasons

      reference.setAttribute('aria-describedby', tooltipNode.id); // append tooltip to container

      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      var popperOptions = _objectSpread$1(_objectSpread$1({}, options.popperOptions), {}, {
        placement: options.placement
      });

      popperOptions.modifiers = _objectSpread$1(_objectSpread$1({}, popperOptions.modifiers), {}, {
        arrow: {
          element: this.options.arrowSelector
        }
      });

      if (options.boundariesElement) {
        popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new Popper(reference, tooltipNode, popperOptions);

      this._setContent(title, options); // Fix position


      requestAnimationFrame(function () {
        if (!_this5._isDisposed && _this5.popperInstance) {
          _this5.popperInstance.update(); // Show the tooltip


          requestAnimationFrame(function () {
            if (!_this5._isDisposed) {
              _this5._isOpen && tooltipNode.setAttribute('aria-hidden', 'false');
            } else {
              _this5.dispose();
            }
          });
        } else {
          _this5.dispose();
        }
      });
      return this;
    }
  }, {
    key: "_noLongerOpen",
    value: function _noLongerOpen() {
      var index = openTooltips.indexOf(this);

      if (index !== -1) {
        openTooltips.splice(index, 1);
      }
    }
  }, {
    key: "_hide",
    value: function _hide()
    /* reference, options */
    {
      var _this6 = this;

      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      this._noLongerOpen(); // hide tooltipNode


      this._tooltipNode.style.display = 'none';

      this._tooltipNode.setAttribute('aria-hidden', 'true');

      if (this.popperInstance) {
        this.popperInstance.disableEventListeners();
      }

      clearTimeout(this._disposeTimer);
      var disposeTime = directive.options.disposeTimeout;

      if (disposeTime !== null) {
        this._disposeTimer = setTimeout(function () {
          if (_this6._tooltipNode) {
            _this6._tooltipNode.removeEventListener('mouseenter', _this6.hide);

            _this6._tooltipNode.removeEventListener('click', _this6.hide); // Don't remove popper instance, just the HTML element


            _this6._removeTooltipNode();
          }
        }, disposeTime);
      }

      removeClasses(this.reference, ['v-tooltip-open']);
      return this;
    }
  }, {
    key: "_removeTooltipNode",
    value: function _removeTooltipNode() {
      if (!this._tooltipNode) return;
      var parentNode = this._tooltipNode.parentNode;

      if (parentNode) {
        parentNode.removeChild(this._tooltipNode);
        this.reference.removeAttribute('aria-describedby');
      }

      this._tooltipNode = null;
    }
  }, {
    key: "_dispose",
    value: function _dispose() {
      var _this7 = this;

      this._isDisposed = true;
      this.reference.removeAttribute('data-original-title');

      if (this.$_originalTitle) {
        this.reference.setAttribute('title', this.$_originalTitle);
      } // remove event listeners first to prevent any unexpected behaviour


      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this7.reference.removeEventListener(event, func);
      });

      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        this._tooltipNode.removeEventListener('mouseenter', this.hide);

        this._tooltipNode.removeEventListener('click', this.hide); // destroy instance


        this.popperInstance.destroy(); // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

        if (!this.popperInstance.options.removeOnDestroy) {
          this._removeTooltipNode();
        }
      } else {
        this._noLongerOpen();
      }

      return this;
    }
  }, {
    key: "_findContainer",
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (typeof container === 'function') {
        // if container is function that returns an element, resolve it
        container = container(reference);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }

      return container;
    }
    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: "_append",
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(reference, events, options) {
      var _this8 = this;

      var directEvents = [];
      var oppositeEvents = [];
      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            if (_this8.options.hideOnTargetClick) oppositeEvents.push('click');
            break;

          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            if (_this8.options.hideOnTargetClick) oppositeEvents.push('click');
            break;

          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      }); // schedule show tooltip

      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this8._isOpen === true) {
            return;
          }

          evt.usedByTooltip = true;

          _this8._scheduleShow(reference, options.delay, options, evt);
        };

        _this8._events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      }); // schedule hide tooltip

      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }

          _this8._scheduleHide(reference, options.delay, options, evt);
        };

        _this8._events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      });
    }
  }, {
    key: "_onDocumentTouch",
    value: function _onDocumentTouch(event) {
      if (this._enableDocumentTouch) {
        this._scheduleHide(this.reference, this.options.delay, this.options, event);
      }
    }
  }, {
    key: "_scheduleShow",
    value: function _scheduleShow(reference, delay, options
    /*, evt */
    ) {
      var _this9 = this;

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function () {
        return _this9._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: "_scheduleHide",
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this10 = this;

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function () {
        if (_this10._isOpen === false) {
          return;
        }

        if (!isInDocument(_this10._tooltipNode)) return; // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it

        if (evt.type === 'mouseleave') {
          var isSet = _this10._setTooltipNodeEvent(evt, reference, delay, options); // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary


          if (isSet) {
            return;
          }
        }

        _this10._hide(reference, options);
      }, computedDelay);
    }
  }]);

  return Tooltip;
}(); // Hide tooltips on touch devices

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', function (event) {
    for (var i = 0; i < openTooltips.length; i++) {
      openTooltips[i]._onDocumentTouch(event);
    }
  }, supportsPassive ? {
    passive: true,
    capture: true
  } : true);
}
/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var state = {
  enabled: true
};
var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];
var defaultOptions = {
  // Default tooltip placement relative to target element
  defaultPlacement: 'top',
  // Default CSS classes applied to the tooltip element
  defaultClass: 'vue-tooltip-theme',
  // Default CSS classes applied to the target element of the tooltip
  defaultTargetClass: 'has-tooltip',
  // Is the content HTML by default?
  defaultHtml: true,
  // Default HTML template of the tooltip element
  // It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
  // Change if the classes conflict with other libraries (for example bootstrap)
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  // Selector used to get the arrow element in the tooltip template
  defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
  // Selector used to get the inner content element in the tooltip template
  defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
  // Delay (ms)
  defaultDelay: 0,
  // Default events that trigger the tooltip
  defaultTrigger: 'hover focus',
  // Default position offset (px)
  defaultOffset: 0,
  // Default container where the tooltip will be appended
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  // Class added when content is loading
  defaultLoadingClass: 'tooltip-loading',
  // Displayed when tooltip content is loading
  defaultLoadingContent: '...',
  // Hide on mouseover tooltip
  autoHide: true,
  // Close tooltip on click on tooltip target?
  defaultHideOnTargetClick: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Options for popover
  popover: {
    defaultPlacement: 'bottom',
    // Use the `popoverClass` prop for theming
    defaultClass: 'vue-popover-theme',
    // Base class (change if conflicts with other libraries)
    defaultBaseClass: 'tooltip popover',
    // Wrapper class (contains arrow and inner)
    defaultWrapperClass: 'wrapper',
    // Inner content class
    defaultInnerClass: 'tooltip-inner popover-inner',
    // Arrow class
    defaultArrowClass: 'tooltip-arrow popover-arrow',
    // Class added when popover is open
    defaultOpenClass: 'open',
    defaultDelay: 0,
    defaultTrigger: 'click',
    defaultOffset: 0,
    defaultContainer: 'body',
    defaultBoundariesElement: undefined,
    defaultPopperOptions: {},
    // Hides if clicked outside of popover
    defaultAutoHide: true,
    // Update popper on content resize
    defaultHandleResize: true
  }
};
function getOptions(options) {
  var result = {
    placement: typeof options.placement !== 'undefined' ? options.placement : directive.options.defaultPlacement,
    delay: typeof options.delay !== 'undefined' ? options.delay : directive.options.defaultDelay,
    html: typeof options.html !== 'undefined' ? options.html : directive.options.defaultHtml,
    template: typeof options.template !== 'undefined' ? options.template : directive.options.defaultTemplate,
    arrowSelector: typeof options.arrowSelector !== 'undefined' ? options.arrowSelector : directive.options.defaultArrowSelector,
    innerSelector: typeof options.innerSelector !== 'undefined' ? options.innerSelector : directive.options.defaultInnerSelector,
    trigger: typeof options.trigger !== 'undefined' ? options.trigger : directive.options.defaultTrigger,
    offset: typeof options.offset !== 'undefined' ? options.offset : directive.options.defaultOffset,
    container: typeof options.container !== 'undefined' ? options.container : directive.options.defaultContainer,
    boundariesElement: typeof options.boundariesElement !== 'undefined' ? options.boundariesElement : directive.options.defaultBoundariesElement,
    autoHide: typeof options.autoHide !== 'undefined' ? options.autoHide : directive.options.autoHide,
    hideOnTargetClick: typeof options.hideOnTargetClick !== 'undefined' ? options.hideOnTargetClick : directive.options.defaultHideOnTargetClick,
    loadingClass: typeof options.loadingClass !== 'undefined' ? options.loadingClass : directive.options.defaultLoadingClass,
    loadingContent: typeof options.loadingContent !== 'undefined' ? options.loadingContent : directive.options.defaultLoadingContent,
    popperOptions: _objectSpread({}, typeof options.popperOptions !== 'undefined' ? options.popperOptions : directive.options.defaultPopperOptions)
  };

  if (result.offset) {
    var typeofOffset = _typeof(result.offset);

    var offset = result.offset; // One value -> switch

    if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
      offset = "0, ".concat(offset);
    }

    if (!result.popperOptions.modifiers) {
      result.popperOptions.modifiers = {};
    }

    result.popperOptions.modifiers.offset = {
      offset: offset
    };
  }

  if (result.trigger && result.trigger.indexOf('click') !== -1) {
    result.hideOnTargetClick = false;
  }

  return result;
}
function getPlacement(value, modifiers) {
  var placement = value.placement;

  for (var i = 0; i < positions.length; i++) {
    var pos = positions[i];

    if (modifiers[pos]) {
      placement = pos;
    }
  }

  return placement;
}
function getContent(value) {
  var type = _typeof(value);

  if (type === 'string') {
    return value;
  } else if (value && type === 'object') {
    return value.content;
  } else {
    return false;
  }
}
function createTooltip(el, value) {
  var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var content = getContent(value);
  var classes = typeof value.classes !== 'undefined' ? value.classes : directive.options.defaultClass;

  var opts = _objectSpread({
    title: content
  }, getOptions(_objectSpread(_objectSpread({}, _typeof(value) === 'object' ? value : {}), {}, {
    placement: getPlacement(value, modifiers)
  })));

  var tooltip = el._tooltip = new Tooltip(el, opts);
  tooltip.setClasses(classes);
  tooltip._vueEl = el; // Class on target

  var targetClasses = typeof value.targetClasses !== 'undefined' ? value.targetClasses : directive.options.defaultTargetClass;
  el._tooltipTargetClasses = targetClasses;
  addClasses(el, targetClasses);
  return tooltip;
}
function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();

    delete el._tooltip;
    delete el._tooltipOldShow;
  }

  if (el._tooltipTargetClasses) {
    removeClasses(el, el._tooltipTargetClasses);
    delete el._tooltipTargetClasses;
  }
}
function bind(el, _ref) {
  var value = _ref.value;
      _ref.oldValue;
      var modifiers = _ref.modifiers;
  var content = getContent(value);

  if (!content || !state.enabled) {
    destroyTooltip(el);
  } else {
    var tooltip;

    if (el._tooltip) {
      tooltip = el._tooltip; // Content

      tooltip.setContent(content); // Options

      tooltip.setOptions(_objectSpread(_objectSpread({}, value), {}, {
        placement: getPlacement(value, modifiers)
      }));
    } else {
      tooltip = createTooltip(el, value, modifiers);
    } // Manual show


    if (typeof value.show !== 'undefined' && value.show !== el._tooltipOldShow) {
      el._tooltipOldShow = value.show;
      value.show ? tooltip.show() : tooltip.hide();
    }
  }
}
var directive = {
  options: defaultOptions,
  bind: bind,
  update: bind,
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  var finalOptions = {};
  merge(finalOptions, defaultOptions, options);
  plugin.options = finalOptions;
  directive.options = finalOptions;
  Vue.directive('tooltip', directive); // Vue.directive('close-popover', vclosepopover)
  // Vue.component('VPopover', Popover)
}
var VTooltip = directive; // export const VClosePopover = vclosepopover
// export const VPopover = Popover

var plugin = {
  install: install,

  get enabled() {
    return state.enabled;
  },

  set enabled(value) {
    state.enabled = value;
  }

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
export { VTooltip, createTooltip, destroyTooltip, install };
