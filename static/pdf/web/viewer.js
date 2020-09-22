/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	const installedModules = {}
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__ (moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if (installedModules[moduleId]) {
      /******/ 			return installedModules[moduleId].exports
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		const module = installedModules[moduleId] = {
      /******/ 			i: moduleId,
      /******/ 			l: false,
      /******/ 			exports: {}
      /******/ 		}
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports
    /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules
  /******/
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function (value) { return value }
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function (exports, name, getter) {
    /******/ 		if (!__webpack_require__.o(exports, name)) {
      /******/ 			Object.defineProperty(exports, name, {
        /******/ 				configurable: false,
        /******/ 				enumerable: true,
        /******/ 				get: getter
        /******/ 			})
      /******/ 		}
    /******/ 	}
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function (module) {
    /******/ 		const getter = module && module.__esModule
    /******/ 			? function getDefault () { return module.default }
    /******/ 			: function getModuleExports () { return module }
    /******/ 		__webpack_require__.d(getter, 'a', getter)
    /******/ 		return getter
    /******/ 	}
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = ''
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 33)
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.localized = exports.animationStarted = exports.normalizeWheelEventDelta = exports.binarySearchFirstItem = exports.watchScroll = exports.scrollIntoView = exports.getOutputScale = exports.approximateFraction = exports.roundToDivide = exports.getVisibleElements = exports.parseQueryString = exports.noContextMenuHandler = exports.getPDFFileNameFromURL = exports.ProgressBar = exports.EventBus = exports.NullL10n = exports.mozL10n = exports.RendererType = exports.cloneObj = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const CSS_UNITS = 96.0 / 72.0
    const DEFAULT_SCALE_VALUE = 'auto'
    const DEFAULT_SCALE = 1.0
    const MIN_SCALE = 0.25
    const MAX_SCALE = 10.0
    const UNKNOWN_SCALE = 0
    const MAX_AUTO_SCALE = 1.25
    const SCROLLBAR_PADDING = 40
    const VERTICAL_PADDING = 5
    const RendererType = {
      CANVAS: 'canvas',
      SVG: 'svg'
    }
    function formatL10nValue (text, args) {
      if (!args) {
        return text
      }
      return text.replace(/\{\{\s*(\w+)\s*\}\}/g, function (all, name) {
        return name in args ? args[name] : '{{' + name + '}}'
      })
    }
    const NullL10n = {
      get: function get (property, args, fallback) {
        return Promise.resolve(formatL10nValue(fallback, args))
      },
      translate: function translate (element) {
        return Promise.resolve()
      }
    }
    _pdfjsLib.PDFJS.disableFullscreen = _pdfjsLib.PDFJS.disableFullscreen === undefined ? false : _pdfjsLib.PDFJS.disableFullscreen
    _pdfjsLib.PDFJS.useOnlyCssZoom = _pdfjsLib.PDFJS.useOnlyCssZoom === undefined ? false : _pdfjsLib.PDFJS.useOnlyCssZoom
    _pdfjsLib.PDFJS.maxCanvasPixels = _pdfjsLib.PDFJS.maxCanvasPixels === undefined ? 16777216 : _pdfjsLib.PDFJS.maxCanvasPixels
    _pdfjsLib.PDFJS.disableHistory = _pdfjsLib.PDFJS.disableHistory === undefined ? false : _pdfjsLib.PDFJS.disableHistory
    _pdfjsLib.PDFJS.disableTextLayer = _pdfjsLib.PDFJS.disableTextLayer === undefined ? false : _pdfjsLib.PDFJS.disableTextLayer
    _pdfjsLib.PDFJS.ignoreCurrentPositionOnZoom = _pdfjsLib.PDFJS.ignoreCurrentPositionOnZoom === undefined ? false : _pdfjsLib.PDFJS.ignoreCurrentPositionOnZoom
    {
      _pdfjsLib.PDFJS.locale = _pdfjsLib.PDFJS.locale === undefined && typeof navigator !== 'undefined' ? navigator.language : _pdfjsLib.PDFJS.locale
    }
    function getOutputScale (ctx) {
      const devicePixelRatio = window.devicePixelRatio || 1
      const backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
      const pixelRatio = devicePixelRatio / backingStoreRatio
      return {
        sx: pixelRatio,
        sy: pixelRatio,
        scaled: pixelRatio !== 1
      }
    }
    function scrollIntoView (element, spot) {
      const skipOverflowHiddenElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

      let parent = element.offsetParent
      if (!parent) {
        console.error('offsetParent is not set -- cannot scroll')
        return
      }
      let offsetY = element.offsetTop + element.clientTop
      let offsetX = element.offsetLeft + element.clientLeft
      while (parent.clientHeight === parent.scrollHeight || skipOverflowHiddenElements && getComputedStyle(parent).overflow === 'hidden') {
        if (parent.dataset._scaleY) {
          offsetY /= parent.dataset._scaleY
          offsetX /= parent.dataset._scaleX
        }
        offsetY += parent.offsetTop
        offsetX += parent.offsetLeft
        parent = parent.offsetParent
        if (!parent) {
          return
        }
      }
      if (spot) {
        if (spot.top !== undefined) {
          offsetY += spot.top
        }
        if (spot.left !== undefined) {
          offsetX += spot.left
          parent.scrollLeft = offsetX
        }
      }
      parent.scrollTop = offsetY
    }
    function watchScroll (viewAreaElement, callback) {
      const debounceScroll = function debounceScroll (evt) {
        if (rAF) {
          return
        }
        rAF = window.requestAnimationFrame(function viewAreaElementScrolled () {
          rAF = null
          const currentY = viewAreaElement.scrollTop
          const lastY = state.lastY
          if (currentY !== lastY) {
            state.down = currentY > lastY
          }
          state.lastY = currentY
          callback(state)
        })
      }
      var state = {
        down: true,
        lastY: viewAreaElement.scrollTop,
        _eventHandler: debounceScroll
      }
      var rAF = null
      viewAreaElement.addEventListener('scroll', debounceScroll, true)
      return state
    }
    function parseQueryString (query) {
      const parts = query.split('&')
      const params = Object.create(null)
      for (let i = 0, ii = parts.length; i < ii; ++i) {
        const param = parts[i].split('=')
        const key = param[0].toLowerCase()
        const value = param.length > 1 ? param[1] : null
        params[decodeURIComponent(key)] = decodeURIComponent(value)
      }
      return params
    }
    function binarySearchFirstItem (items, condition) {
      let minIndex = 0
      let maxIndex = items.length - 1
      if (items.length === 0 || !condition(items[maxIndex])) {
        return items.length
      }
      if (condition(items[minIndex])) {
        return minIndex
      }
      while (minIndex < maxIndex) {
        const currentIndex = minIndex + maxIndex >> 1
        const currentItem = items[currentIndex]
        if (condition(currentItem)) {
          maxIndex = currentIndex
        } else {
          minIndex = currentIndex + 1
        }
      }
      return minIndex
    }
    function approximateFraction (x) {
      if (Math.floor(x) === x) {
        return [x, 1]
      }
      const xinv = 1 / x
      const limit = 8
      if (xinv > limit) {
        return [1, limit]
      } else if (Math.floor(xinv) === xinv) {
        return [1, xinv]
      }
      const x_ = x > 1 ? xinv : x
      let a = 0
      let b = 1
      let c = 1
      let d = 1
      while (true) {
        const p = a + c
        const q = b + d
        if (q > limit) {
          break
        }
        if (x_ <= p / q) {
          c = p
          d = q
        } else {
          a = p
          b = q
        }
      }
      let result = void 0
      if (x_ - a / b < c / d - x_) {
        result = x_ === x ? [a, b] : [b, a]
      } else {
        result = x_ === x ? [c, d] : [d, c]
      }
      return result
    }
    function roundToDivide (x, div) {
      const r = x % div
      return r === 0 ? x : Math.round(x - r + div)
    }
    function getVisibleElements (scrollEl, views) {
      const sortByVisibility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

      const top = scrollEl.scrollTop
      const bottom = top + scrollEl.clientHeight
      const left = scrollEl.scrollLeft
      const right = left + scrollEl.clientWidth
      function isElementBottomBelowViewTop (view) {
        const element = view.div
        const elementBottom = element.offsetTop + element.clientTop + element.clientHeight
        return elementBottom > top
      }
      const visible = []
      let view = void 0
      let element = void 0
      let currentHeight = void 0
      let viewHeight = void 0
      let hiddenHeight = void 0
      let percentHeight = void 0
      let currentWidth = void 0
      let viewWidth = void 0
      const firstVisibleElementInd = views.length === 0 ? 0 : binarySearchFirstItem(views, isElementBottomBelowViewTop)
      for (let i = firstVisibleElementInd, ii = views.length; i < ii; i++) {
        view = views[i]
        element = view.div
        currentHeight = element.offsetTop + element.clientTop
        viewHeight = element.clientHeight
        if (currentHeight > bottom) {
          break
        }
        currentWidth = element.offsetLeft + element.clientLeft
        viewWidth = element.clientWidth
        if (currentWidth + viewWidth < left || currentWidth > right) {
          continue
        }
        hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, currentHeight + viewHeight - bottom)
        percentHeight = (viewHeight - hiddenHeight) * 100 / viewHeight | 0
        visible.push({
          id: view.id,
          x: currentWidth,
          y: currentHeight,
          view,
          percent: percentHeight
        })
      }
      const first = visible[0]
      const last = visible[visible.length - 1]
      if (sortByVisibility) {
        visible.sort(function (a, b) {
          const pc = a.percent - b.percent
          if (Math.abs(pc) > 0.001) {
            return -pc
          }
          return a.id - b.id
        })
      }
      return {
        first,
        last,
        views: visible
      }
    }
    function noContextMenuHandler (evt) {
      evt.preventDefault()
    }
    function isDataSchema (url) {
      let i = 0
      const ii = url.length
      while (i < ii && url[i].trim() === '') {
        i++
      }
      return url.substr(i, 5).toLowerCase() === 'data:'
    }
    function getPDFFileNameFromURL (url) {
      const defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'document.pdf'

      if (isDataSchema(url)) {
        console.warn('getPDFFileNameFromURL: ' + 'ignoring "data:" URL for performance reasons.')
        return defaultFilename
      }
      const reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/
      const reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i
      const splitURI = reURI.exec(url)
      let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3])
      if (suggestedFilename) {
        suggestedFilename = suggestedFilename[0]
        if (suggestedFilename.includes('%')) {
          try {
            suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0]
          } catch (ex) {}
        }
      }
      return suggestedFilename || defaultFilename
    }
    function normalizeWheelEventDelta (evt) {
      let delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY)
      const angle = Math.atan2(evt.deltaY, evt.deltaX)
      if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
        delta = -delta
      }
      const MOUSE_DOM_DELTA_PIXEL_MODE = 0
      const MOUSE_DOM_DELTA_LINE_MODE = 1
      const MOUSE_PIXELS_PER_LINE = 30
      const MOUSE_LINES_PER_PAGE = 30
      if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
        delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE
      } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
        delta /= MOUSE_LINES_PER_PAGE
      }
      return delta
    }
    function cloneObj (obj) {
      const result = Object.create(null)
      for (const i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          result[i] = obj[i]
        }
      }
      return result
    }
    const animationStarted = new Promise(function (resolve) {
      window.requestAnimationFrame(resolve)
    })
    const mozL10n = void 0
    const localized = Promise.resolve()

    const EventBus = (function () {
      function EventBus () {
        _classCallCheck(this, EventBus)

        this._listeners = Object.create(null)
      }

      _createClass(EventBus, [{
        key: 'on',
        value: function on (eventName, listener) {
          let eventListeners = this._listeners[eventName]
          if (!eventListeners) {
            eventListeners = []
            this._listeners[eventName] = eventListeners
          }
          eventListeners.push(listener)
        }
      }, {
        key: 'off',
        value: function off (eventName, listener) {
          const eventListeners = this._listeners[eventName]
          let i = void 0
          if (!eventListeners || (i = eventListeners.indexOf(listener)) < 0) {
            return
          }
          eventListeners.splice(i, 1)
        }
      }, {
        key: 'dispatch',
        value: function dispatch (eventName) {
          const eventListeners = this._listeners[eventName]
          if (!eventListeners || eventListeners.length === 0) {
            return
          }
          const args = Array.prototype.slice.call(arguments, 1)
          eventListeners.slice(0).forEach(function (listener) {
            listener.apply(null, args)
          })
        }
      }])

      return EventBus
    }())

    function clamp (v, min, max) {
      return Math.min(Math.max(v, min), max)
    }

    const ProgressBar = (function () {
      function ProgressBar (id) {
        const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        const height = _ref.height
        const width = _ref.width
        const units = _ref.units

        _classCallCheck(this, ProgressBar)

        this.visible = true
        this.div = document.querySelector(id + ' .progress')
        this.bar = this.div.parentNode
        this.height = height || 100
        this.width = width || 100
        this.units = units || '%'
        this.div.style.height = this.height + this.units
        this.percent = 0
      }

      _createClass(ProgressBar, [{
        key: '_updateBar',
        value: function _updateBar () {
          if (this._indeterminate) {
            this.div.classList.add('indeterminate')
            this.div.style.width = this.width + this.units
            return
          }
          this.div.classList.remove('indeterminate')
          const progressSize = this.width * this._percent / 100
          this.div.style.width = progressSize + this.units
        }
      }, {
        key: 'setWidth',
        value: function setWidth (viewer) {
          if (!viewer) {
            return
          }
          const container = viewer.parentNode
          const scrollbarWidth = container.offsetWidth - viewer.offsetWidth
          if (scrollbarWidth > 0) {
            this.bar.setAttribute('style', 'width: calc(100% - ' + scrollbarWidth + 'px);')
          }
        }
      }, {
        key: 'hide',
        value: function hide () {
          if (!this.visible) {
            return
          }
          this.visible = false
          this.bar.classList.add('hidden')
          document.body.classList.remove('loadingInProgress')
        }
      }, {
        key: 'show',
        value: function show () {
          if (this.visible) {
            return
          }
          this.visible = true
          document.body.classList.add('loadingInProgress')
          this.bar.classList.remove('hidden')
        }
      }, {
        key: 'percent',
        get: function get () {
          return this._percent
        },
        set: function set (val) {
          this._indeterminate = isNaN(val)
          this._percent = clamp(val, 0, 100)
          this._updateBar()
        }
      }])

      return ProgressBar
    }())

    exports.CSS_UNITS = CSS_UNITS
    exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE
    exports.DEFAULT_SCALE = DEFAULT_SCALE
    exports.MIN_SCALE = MIN_SCALE
    exports.MAX_SCALE = MAX_SCALE
    exports.UNKNOWN_SCALE = UNKNOWN_SCALE
    exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE
    exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING
    exports.VERTICAL_PADDING = VERTICAL_PADDING
    exports.cloneObj = cloneObj
    exports.RendererType = RendererType
    exports.mozL10n = mozL10n
    exports.NullL10n = NullL10n
    exports.EventBus = EventBus
    exports.ProgressBar = ProgressBar
    exports.getPDFFileNameFromURL = getPDFFileNameFromURL
    exports.noContextMenuHandler = noContextMenuHandler
    exports.parseQueryString = parseQueryString
    exports.getVisibleElements = getVisibleElements
    exports.roundToDivide = roundToDivide
    exports.approximateFraction = approximateFraction
    exports.getOutputScale = getOutputScale
    exports.scrollIntoView = scrollIntoView
    exports.watchScroll = watchScroll
    exports.binarySearchFirstItem = binarySearchFirstItem
    exports.normalizeWheelEventDelta = normalizeWheelEventDelta
    exports.animationStarted = animationStarted
    exports.localized = localized
    /***/ },
  /* 1 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    let pdfjsLib
    if (typeof window !== 'undefined' && window['pdfjs-dist/build/pdf']) {
      pdfjsLib = window['pdfjs-dist/build/pdf']
    } else {
      pdfjsLib = require('../build/pdf.js')
    }
    module.exports = pdfjsLib
    /***/ },
  /* 2 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.getGlobalEventBus = exports.attachDOMEventsToEventBus = undefined

    const _ui_utils = __webpack_require__(0)

    function attachDOMEventsToEventBus (eventBus) {
      eventBus.on('documentload', function () {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('documentload', true, true, {})
        window.dispatchEvent(event)
      })
      eventBus.on('pagerendered', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('pagerendered', true, true, {
          pageNumber: evt.pageNumber,
          cssTransform: evt.cssTransform
        })
        evt.source.div.dispatchEvent(event)
      })
      eventBus.on('textlayerrendered', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('textlayerrendered', true, true, { pageNumber: evt.pageNumber })
        evt.source.textLayerDiv.dispatchEvent(event)
      })
      eventBus.on('pagechange', function (evt) {
        const event = document.createEvent('UIEvents')
        event.initUIEvent('pagechange', true, true, window, 0)
        event.pageNumber = evt.pageNumber
        evt.source.container.dispatchEvent(event)
      })
      eventBus.on('pagesinit', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('pagesinit', true, true, null)
        evt.source.container.dispatchEvent(event)
      })
      eventBus.on('pagesloaded', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('pagesloaded', true, true, { pagesCount: evt.pagesCount })
        evt.source.container.dispatchEvent(event)
      })
      eventBus.on('scalechange', function (evt) {
        const event = document.createEvent('UIEvents')
        event.initUIEvent('scalechange', true, true, window, 0)
        event.scale = evt.scale
        event.presetValue = evt.presetValue
        evt.source.container.dispatchEvent(event)
      })
      eventBus.on('updateviewarea', function (evt) {
        const event = document.createEvent('UIEvents')
        event.initUIEvent('updateviewarea', true, true, window, 0)
        event.location = evt.location
        evt.source.container.dispatchEvent(event)
      })
      eventBus.on('find', function (evt) {
        if (evt.source === window) {
          return
        }
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('find' + evt.type, true, true, {
          query: evt.query,
          phraseSearch: evt.phraseSearch,
          caseSensitive: evt.caseSensitive,
          highlightAll: evt.highlightAll,
          findPrevious: evt.findPrevious
        })
        window.dispatchEvent(event)
      })
      eventBus.on('attachmentsloaded', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('attachmentsloaded', true, true, { attachmentsCount: evt.attachmentsCount })
        evt.source.container.dispatchEvent(event)
      })
      eventBus.on('sidebarviewchanged', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('sidebarviewchanged', true, true, { view: evt.view })
        evt.source.outerContainer.dispatchEvent(event)
      })
      eventBus.on('pagemode', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('pagemode', true, true, { mode: evt.mode })
        evt.source.pdfViewer.container.dispatchEvent(event)
      })
      eventBus.on('namedaction', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('namedaction', true, true, { action: evt.action })
        evt.source.pdfViewer.container.dispatchEvent(event)
      })
      eventBus.on('presentationmodechanged', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('presentationmodechanged', true, true, {
          active: evt.active,
          switchInProgress: evt.switchInProgress
        })
        window.dispatchEvent(event)
      })
      eventBus.on('outlineloaded', function (evt) {
        const event = document.createEvent('CustomEvent')
        event.initCustomEvent('outlineloaded', true, true, { outlineCount: evt.outlineCount })
        evt.source.container.dispatchEvent(event)
      })
    }
    let globalEventBus = null
    function getGlobalEventBus () {
      if (globalEventBus) {
        return globalEventBus
      }
      globalEventBus = new _ui_utils.EventBus()
      attachDOMEventsToEventBus(globalEventBus)
      return globalEventBus
    }
    exports.attachDOMEventsToEventBus = attachDOMEventsToEventBus
    exports.getGlobalEventBus = getGlobalEventBus
    /***/ },
  /* 3 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const CLEANUP_TIMEOUT = 30000
    const RenderingStates = {
      INITIAL: 0,
      RUNNING: 1,
      PAUSED: 2,
      FINISHED: 3
    }

    const PDFRenderingQueue = (function () {
      function PDFRenderingQueue () {
        _classCallCheck(this, PDFRenderingQueue)

        this.pdfViewer = null
        this.pdfThumbnailViewer = null
        this.onIdle = null
        this.highestPriorityPage = null
        this.idleTimeout = null
        this.printing = false
        this.isThumbnailViewEnabled = false
      }

      _createClass(PDFRenderingQueue, [{
        key: 'setViewer',
        value: function setViewer (pdfViewer) {
          this.pdfViewer = pdfViewer
        }
      }, {
        key: 'setThumbnailViewer',
        value: function setThumbnailViewer (pdfThumbnailViewer) {
          this.pdfThumbnailViewer = pdfThumbnailViewer
        }
      }, {
        key: 'isHighestPriority',
        value: function isHighestPriority (view) {
          return this.highestPriorityPage === view.renderingId
        }
      }, {
        key: 'renderHighestPriority',
        value: function renderHighestPriority (currentlyVisiblePages) {
          if (this.idleTimeout) {
            clearTimeout(this.idleTimeout)
            this.idleTimeout = null
          }
          if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
            return
          }
          if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
            if (this.pdfThumbnailViewer.forceRendering()) {
              return
            }
          }
          if (this.printing) {
            return
          }
          if (this.onIdle) {
            this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT)
          }
        }
      }, {
        key: 'getHighestPriority',
        value: function getHighestPriority (visible, views, scrolledDown) {
          const visibleViews = visible.views
          const numVisible = visibleViews.length
          if (numVisible === 0) {
            return false
          }
          for (let i = 0; i < numVisible; ++i) {
            const view = visibleViews[i].view
            if (!this.isViewFinished(view)) {
              return view
            }
          }
          if (scrolledDown) {
            const nextPageIndex = visible.last.id
            if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
              return views[nextPageIndex]
            }
          } else {
            const previousPageIndex = visible.first.id - 2
            if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
              return views[previousPageIndex]
            }
          }
          return null
        }
      }, {
        key: 'isViewFinished',
        value: function isViewFinished (view) {
          return view.renderingState === RenderingStates.FINISHED
        }
      }, {
        key: 'renderView',
        value: function renderView (view) {
          const _this = this

          switch (view.renderingState) {
            case RenderingStates.FINISHED:
              return false
            case RenderingStates.PAUSED:
              this.highestPriorityPage = view.renderingId
              view.resume()
              break
            case RenderingStates.RUNNING:
              this.highestPriorityPage = view.renderingId
              break
            case RenderingStates.INITIAL:
              this.highestPriorityPage = view.renderingId
              var continueRendering = function continueRendering () {
                _this.renderHighestPriority()
              }
              view.draw().then(continueRendering, continueRendering)
              break
          }
          return true
        }
      }])

      return PDFRenderingQueue
    }())

    exports.RenderingStates = RenderingStates
    exports.PDFRenderingQueue = PDFRenderingQueue
    /***/ },
  /* 4 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFPrintServiceFactory = exports.DefaultExternalServices = exports.PDFViewerApplication = undefined

    const _slicedToArray = (function () { function sliceIterator (arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break } } } catch (err) { _d = true; _e = err } finally { try { if (!_n && _i.return) { _i.return() } } finally { if (_d) { throw _e } } } return _arr } return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } } }())

    const _ui_utils = __webpack_require__(0)

    const _pdfjsLib = __webpack_require__(1)

    const _pdf_cursor_tools = __webpack_require__(6)

    const _pdf_rendering_queue = __webpack_require__(3)

    const _pdf_sidebar = __webpack_require__(24)

    const _pdf_viewer = __webpack_require__(27)

    const _dom_events = __webpack_require__(2)

    const _overlay_manager = __webpack_require__(15)

    const _password_prompt = __webpack_require__(16)

    const _pdf_attachment_viewer = __webpack_require__(17)

    const _pdf_document_properties = __webpack_require__(18)

    const _pdf_find_bar = __webpack_require__(19)

    const _pdf_find_controller = __webpack_require__(7)

    const _pdf_history = __webpack_require__(20)

    const _pdf_link_service = __webpack_require__(5)

    const _pdf_outline_viewer = __webpack_require__(21)

    const _pdf_presentation_mode = __webpack_require__(23)

    const _pdf_thumbnail_viewer = __webpack_require__(26)

    const _secondary_toolbar = __webpack_require__(29)

    const _toolbar = __webpack_require__(31)

    const _view_history = __webpack_require__(32)

    const DEFAULT_SCALE_DELTA = 1.1
    const DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT = 5000
    function configure (PDFJS) {
      PDFJS.imageResourcesPath = './images/'
      PDFJS.workerSrc = '../build/pdf.worker.js'
      PDFJS.cMapUrl = '../web/cmaps/'
      PDFJS.cMapPacked = true
    }
    const DefaultExternalServices = {
      updateFindControlState: function updateFindControlState (data) {},
      initPassiveLoading: function initPassiveLoading (callbacks) {},
      fallback: function fallback (data, callback) {},
      reportTelemetry: function reportTelemetry (data) {},
      createDownloadManager: function createDownloadManager () {
        throw new Error('Not implemented: createDownloadManager')
      },
      createPreferences: function createPreferences () {
        throw new Error('Not implemented: createPreferences')
      },
      createL10n: function createL10n () {
        throw new Error('Not implemented: createL10n')
      },

      supportsIntegratedFind: false,
      supportsDocumentFonts: true,
      supportsDocumentColors: true,
      supportedMouseWheelZoomModifierKeys: {
        ctrlKey: true,
        metaKey: true
      }
    }
    const PDFViewerApplication = {
      initialBookmark: document.location.hash.substring(1),
      initialDestination: null,
      initialized: false,
      fellback: false,
      appConfig: null,
      pdfDocument: null,
      pdfLoadingTask: null,
      printService: null,
      pdfViewer: null,
      pdfThumbnailViewer: null,
      pdfRenderingQueue: null,
      pdfPresentationMode: null,
      pdfDocumentProperties: null,
      pdfLinkService: null,
      pdfHistory: null,
      pdfSidebar: null,
      pdfOutlineViewer: null,
      pdfAttachmentViewer: null,
      pdfCursorTools: null,
      store: null,
      downloadManager: null,
      overlayManager: null,
      preferences: null,
      toolbar: null,
      secondaryToolbar: null,
      eventBus: null,
      l10n: null,
      isInitialViewSet: false,
      downloadComplete: false,
      viewerPrefs: {
        sidebarViewOnLoad: _pdf_sidebar.SidebarView.NONE,
        pdfBugEnabled: false,
        showPreviousViewOnLoad: true,
        defaultZoomValue: '',
        disablePageMode: false,
        disablePageLabels: false,
        renderer: 'canvas',
        enhanceTextSelection: false,
        renderInteractiveForms: false,
        enablePrintAutoRotate: false
      },
      isViewerEmbedded: window.parent !== window,
      url: '',
      baseUrl: '',
      externalServices: DefaultExternalServices,
      _boundEvents: {},
      initialize: function initialize (appConfig) {
        const _this = this

        this.preferences = this.externalServices.createPreferences()
        configure(_pdfjsLib.PDFJS)
        this.appConfig = appConfig
        return this._readPreferences().then(function () {
          return _this._initializeL10n()
        }).then(function () {
          return _this._initializeViewerComponents()
        }).then(function () {
          _this.bindEvents()
          _this.bindWindowEvents()
          const appContainer = appConfig.appContainer || document.documentElement
          _this.l10n.translate(appContainer).then(function () {
            _this.eventBus.dispatch('localized')
          })
          if (_this.isViewerEmbedded && !_pdfjsLib.PDFJS.isExternalLinkTargetSet()) {
            _pdfjsLib.PDFJS.externalLinkTarget = _pdfjsLib.PDFJS.LinkTarget.TOP
          }
          _this.initialized = true
        })
      },
      _readPreferences: function _readPreferences () {
        const preferences = this.preferences
        const viewerPrefs = this.viewerPrefs

        return Promise.all([preferences.get('enableWebGL').then(function resolved (value) {
          _pdfjsLib.PDFJS.disableWebGL = !value
        }), preferences.get('sidebarViewOnLoad').then(function resolved (value) {
          viewerPrefs.sidebarViewOnLoad = value
        }), preferences.get('pdfBugEnabled').then(function resolved (value) {
          viewerPrefs.pdfBugEnabled = value
        }), preferences.get('showPreviousViewOnLoad').then(function resolved (value) {
          viewerPrefs.showPreviousViewOnLoad = value
        }), preferences.get('defaultZoomValue').then(function resolved (value) {
          viewerPrefs.defaultZoomValue = value
        }), preferences.get('enhanceTextSelection').then(function resolved (value) {
          viewerPrefs.enhanceTextSelection = value
        }), preferences.get('disableTextLayer').then(function resolved (value) {
          if (_pdfjsLib.PDFJS.disableTextLayer === true) {
            return
          }
          _pdfjsLib.PDFJS.disableTextLayer = value
        }), preferences.get('disableRange').then(function resolved (value) {
          if (_pdfjsLib.PDFJS.disableRange === true) {
            return
          }
          _pdfjsLib.PDFJS.disableRange = value
        }), preferences.get('disableStream').then(function resolved (value) {
          if (_pdfjsLib.PDFJS.disableStream === true) {
            return
          }
          _pdfjsLib.PDFJS.disableStream = value
        }), preferences.get('disableAutoFetch').then(function resolved (value) {
          _pdfjsLib.PDFJS.disableAutoFetch = value
        }), preferences.get('disableFontFace').then(function resolved (value) {
          if (_pdfjsLib.PDFJS.disableFontFace === true) {
            return
          }
          _pdfjsLib.PDFJS.disableFontFace = value
        }), preferences.get('useOnlyCssZoom').then(function resolved (value) {
          _pdfjsLib.PDFJS.useOnlyCssZoom = value
        }), preferences.get('externalLinkTarget').then(function resolved (value) {
          if (_pdfjsLib.PDFJS.isExternalLinkTargetSet()) {
            return
          }
          _pdfjsLib.PDFJS.externalLinkTarget = value
        }), preferences.get('renderer').then(function resolved (value) {
          viewerPrefs.renderer = value
        }), preferences.get('renderInteractiveForms').then(function resolved (value) {
          viewerPrefs.renderInteractiveForms = value
        }), preferences.get('disablePageMode').then(function resolved (value) {
          viewerPrefs.disablePageMode = value
        }), preferences.get('disablePageLabels').then(function resolved (value) {
          viewerPrefs.disablePageLabels = value
        }), preferences.get('enablePrintAutoRotate').then(function resolved (value) {
          viewerPrefs.enablePrintAutoRotate = value
        })]).catch(function (reason) {})
      },
      _initializeL10n: function _initializeL10n () {
        if (this.viewerPrefs.pdfBugEnabled) {
          const hash = document.location.hash.substring(1)
          const hashParams = (0, _ui_utils.parseQueryString)(hash)
          if ('locale' in hashParams) {
            _pdfjsLib.PDFJS.locale = hashParams.locale
          }
        }
        this.l10n = this.externalServices.createL10n()
        return this.l10n.getDirection().then(function (dir) {
          document.getElementsByTagName('html')[0].dir = dir
        })
      },
      _initializeViewerComponents: function _initializeViewerComponents () {
        const _this2 = this

        const appConfig = this.appConfig
        return new Promise(function (resolve, reject) {
          _this2.overlayManager = new _overlay_manager.OverlayManager()
          const eventBus = appConfig.eventBus || (0, _dom_events.getGlobalEventBus)()
          _this2.eventBus = eventBus
          const pdfRenderingQueue = new _pdf_rendering_queue.PDFRenderingQueue()
          pdfRenderingQueue.onIdle = _this2.cleanup.bind(_this2)
          _this2.pdfRenderingQueue = pdfRenderingQueue
          const pdfLinkService = new _pdf_link_service.PDFLinkService({ eventBus })
          _this2.pdfLinkService = pdfLinkService
          const downloadManager = _this2.externalServices.createDownloadManager()
          _this2.downloadManager = downloadManager
          const container = appConfig.mainContainer
          const viewer = appConfig.viewerContainer
          _this2.pdfViewer = new _pdf_viewer.PDFViewer({
            container,
            viewer,
            eventBus,
            renderingQueue: pdfRenderingQueue,
            linkService: pdfLinkService,
            downloadManager,
            renderer: _this2.viewerPrefs.renderer,
            l10n: _this2.l10n,
            enhanceTextSelection: _this2.viewerPrefs.enhanceTextSelection,
            renderInteractiveForms: _this2.viewerPrefs.renderInteractiveForms,
            enablePrintAutoRotate: _this2.viewerPrefs.enablePrintAutoRotate
          })
          pdfRenderingQueue.setViewer(_this2.pdfViewer)
          pdfLinkService.setViewer(_this2.pdfViewer)
          const thumbnailContainer = appConfig.sidebar.thumbnailView
          _this2.pdfThumbnailViewer = new _pdf_thumbnail_viewer.PDFThumbnailViewer({
            container: thumbnailContainer,
            renderingQueue: pdfRenderingQueue,
            linkService: pdfLinkService,
            l10n: _this2.l10n
          })
          pdfRenderingQueue.setThumbnailViewer(_this2.pdfThumbnailViewer)
          _this2.pdfHistory = new _pdf_history.PDFHistory({
            linkService: pdfLinkService,
            eventBus
          })
          pdfLinkService.setHistory(_this2.pdfHistory)
          _this2.findController = new _pdf_find_controller.PDFFindController({ pdfViewer: _this2.pdfViewer })
          _this2.findController.onUpdateResultsCount = function (matchCount) {
            if (_this2.supportsIntegratedFind) {
              return
            }
            _this2.findBar.updateResultsCount(matchCount)
          }
          _this2.findController.onUpdateState = function (state, previous, matchCount) {
            if (_this2.supportsIntegratedFind) {
              _this2.externalServices.updateFindControlState({
                result: state,
                findPrevious: previous
              })
            } else {
              _this2.findBar.updateUIState(state, previous, matchCount)
            }
          }
          _this2.pdfViewer.setFindController(_this2.findController)
          const findBarConfig = Object.create(appConfig.findBar)
          findBarConfig.findController = _this2.findController
          findBarConfig.eventBus = eventBus
          _this2.findBar = new _pdf_find_bar.PDFFindBar(findBarConfig, _this2.l10n)
          _this2.pdfDocumentProperties = new _pdf_document_properties.PDFDocumentProperties(appConfig.documentProperties, _this2.overlayManager, _this2.l10n)
          _this2.pdfCursorTools = new _pdf_cursor_tools.PDFCursorTools({
            container,
            eventBus,
            preferences: _this2.preferences
          })
          _this2.toolbar = new _toolbar.Toolbar(appConfig.toolbar, container, eventBus, _this2.l10n)
          _this2.secondaryToolbar = new _secondary_toolbar.SecondaryToolbar(appConfig.secondaryToolbar, container, eventBus)
          if (_this2.supportsFullscreen) {
            _this2.pdfPresentationMode = new _pdf_presentation_mode.PDFPresentationMode({
              container,
              viewer,
              pdfViewer: _this2.pdfViewer,
              eventBus,
              contextMenuItems: appConfig.fullscreen
            })
          }
          _this2.passwordPrompt = new _password_prompt.PasswordPrompt(appConfig.passwordOverlay, _this2.overlayManager, _this2.l10n)
          _this2.pdfOutlineViewer = new _pdf_outline_viewer.PDFOutlineViewer({
            container: appConfig.sidebar.outlineView,
            eventBus,
            linkService: pdfLinkService
          })
          _this2.pdfAttachmentViewer = new _pdf_attachment_viewer.PDFAttachmentViewer({
            container: appConfig.sidebar.attachmentsView,
            eventBus,
            downloadManager
          })
          const sidebarConfig = Object.create(appConfig.sidebar)
          sidebarConfig.pdfViewer = _this2.pdfViewer
          sidebarConfig.pdfThumbnailViewer = _this2.pdfThumbnailViewer
          sidebarConfig.pdfOutlineViewer = _this2.pdfOutlineViewer
          sidebarConfig.eventBus = eventBus
          _this2.pdfSidebar = new _pdf_sidebar.PDFSidebar(sidebarConfig, _this2.l10n)
          _this2.pdfSidebar.onToggled = _this2.forceRendering.bind(_this2)
          resolve(undefined)
        })
      },
      run: function run (config) {
        this.initialize(config).then(webViewerInitialized)
      },
      zoomIn: function zoomIn (ticks) {
        let newScale = this.pdfViewer.currentScale
        do {
          newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2)
          newScale = Math.ceil(newScale * 10) / 10
          newScale = Math.min(_ui_utils.MAX_SCALE, newScale)
        } while (--ticks > 0 && newScale < _ui_utils.MAX_SCALE)
        this.pdfViewer.currentScaleValue = newScale
      },
      zoomOut: function zoomOut (ticks) {
        let newScale = this.pdfViewer.currentScale
        do {
          newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2)
          newScale = Math.floor(newScale * 10) / 10
          newScale = Math.max(_ui_utils.MIN_SCALE, newScale)
        } while (--ticks > 0 && newScale > _ui_utils.MIN_SCALE)
        this.pdfViewer.currentScaleValue = newScale
      },

      get pagesCount () {
        return this.pdfDocument ? this.pdfDocument.numPages : 0
      },
      get pageRotation () {
        return this.pdfViewer.pagesRotation
      },
      set page (val) {
        this.pdfViewer.currentPageNumber = val
      },
      get page () {
        return this.pdfViewer.currentPageNumber
      },
      get printing () {
        return !!this.printService
      },
      get supportsPrinting () {
        return PDFPrintServiceFactory.instance.supportsPrinting
      },
      get supportsFullscreen () {
        let support = void 0
        const doc = document.documentElement
        support = !!(doc.requestFullscreen || doc.mozRequestFullScreen || doc.webkitRequestFullScreen || doc.msRequestFullscreen)
        if (document.fullscreenEnabled === false || document.mozFullScreenEnabled === false || document.webkitFullscreenEnabled === false || document.msFullscreenEnabled === false) {
          support = false
        }
        if (support && _pdfjsLib.PDFJS.disableFullscreen === true) {
          support = false
        }
        return (0, _pdfjsLib.shadow)(this, 'supportsFullscreen', support)
      },
      get supportsIntegratedFind () {
        return this.externalServices.supportsIntegratedFind
      },
      get supportsDocumentFonts () {
        return this.externalServices.supportsDocumentFonts
      },
      get supportsDocumentColors () {
        return this.externalServices.supportsDocumentColors
      },
      get loadingBar () {
        const bar = new _ui_utils.ProgressBar('#loadingBar')
        return (0, _pdfjsLib.shadow)(this, 'loadingBar', bar)
      },
      get supportedMouseWheelZoomModifierKeys () {
        return this.externalServices.supportedMouseWheelZoomModifierKeys
      },
      initPassiveLoading: function initPassiveLoading () {
        throw new Error('Not implemented: initPassiveLoading')
      },
      setTitleUsingUrl: function setTitleUsingUrl (url) {
        this.url = url
        this.baseUrl = url.split('#')[0]
        let title = (0, _ui_utils.getPDFFileNameFromURL)(url, '')
        if (!title) {
          try {
            title = decodeURIComponent((0, _pdfjsLib.getFilenameFromUrl)(url)) || url
          } catch (ex) {
            title = url
          }
        }
        this.setTitle(title)
      },
      setTitle: function setTitle (title) {
        if (this.isViewerEmbedded) {
          return
        }
        document.title = title
      },
      close: function close () {
        const errorWrapper = this.appConfig.errorWrapper.container
        errorWrapper.setAttribute('hidden', 'true')
        if (!this.pdfLoadingTask) {
          return Promise.resolve()
        }
        const promise = this.pdfLoadingTask.destroy()
        this.pdfLoadingTask = null
        if (this.pdfDocument) {
          this.pdfDocument = null
          this.pdfThumbnailViewer.setDocument(null)
          this.pdfViewer.setDocument(null)
          this.pdfLinkService.setDocument(null, null)
          this.pdfDocumentProperties.setDocument(null, null)
        }
        this.store = null
        this.isInitialViewSet = false
        this.downloadComplete = false
        this.pdfSidebar.reset()
        this.pdfOutlineViewer.reset()
        this.pdfAttachmentViewer.reset()
        this.findController.reset()
        this.findBar.reset()
        this.toolbar.reset()
        this.secondaryToolbar.reset()
        if (typeof PDFBug !== 'undefined') {
          PDFBug.cleanup()
        }
        return promise
      },
      open: function open (file, args) {
        const _this3 = this

        if (arguments.length > 2 || typeof args === 'number') {
          return Promise.reject(new Error('Call of open() with obsolete signature.'))
        }
        if (this.pdfLoadingTask) {
          return this.close().then(function () {
            _this3.preferences.reload()
            return _this3.open(file, args)
          })
        }
        const parameters = Object.create(null)
        let scale = void 0
        if (typeof file === 'string') {
          this.setTitleUsingUrl(file)
          parameters.url = file
        } else if (file && 'byteLength' in file) {
          parameters.data = file
        } else if (file.url && file.originalUrl) {
          this.setTitleUsingUrl(file.originalUrl)
          parameters.url = file.url
        }
        if (args) {
          for (const prop in args) {
            parameters[prop] = args[prop]
          }
          if (args.scale) {
            scale = args.scale
          }
          if (args.length) {
            this.pdfDocumentProperties.setFileSize(args.length)
          }
        }
        const loadingTask = (0, _pdfjsLib.getDocument)(parameters)
        this.pdfLoadingTask = loadingTask
        loadingTask.onPassword = function (updateCallback, reason) {
          _this3.passwordPrompt.setUpdateCallback(updateCallback, reason)
          _this3.passwordPrompt.open()
        }
        loadingTask.onProgress = function (_ref) {
          const loaded = _ref.loaded
          const total = _ref.total

          _this3.progress(loaded / total)
        }
        loadingTask.onUnsupportedFeature = this.fallback.bind(this)
        return loadingTask.promise.then(function (pdfDocument) {
          _this3.load(pdfDocument, scale)
        }, function (exception) {
          const message = exception && exception.message
          let loadingErrorMessage = void 0
          if (exception instanceof _pdfjsLib.InvalidPDFException) {
            loadingErrorMessage = _this3.l10n.get('invalid_file_error', null, 'Invalid or corrupted PDF file.')
          } else if (exception instanceof _pdfjsLib.MissingPDFException) {
            loadingErrorMessage = _this3.l10n.get('missing_file_error', null, 'Missing PDF file.')
          } else if (exception instanceof _pdfjsLib.UnexpectedResponseException) {
            loadingErrorMessage = _this3.l10n.get('unexpected_response_error', null, 'Unexpected server response.')
          } else {
            loadingErrorMessage = _this3.l10n.get('loading_error', null, 'An error occurred while loading the PDF.')
          }
          return loadingErrorMessage.then(function (msg) {
            _this3.error(msg, { message })
            throw new Error(msg)
          })
        })
      },
      download: function download () {
        const _this4 = this

        function downloadByUrl () {
          downloadManager.downloadUrl(url, filename)
        }
        var url = this.baseUrl
        var filename = (0, _ui_utils.getPDFFileNameFromURL)(this.url)
        var downloadManager = this.downloadManager
        downloadManager.onerror = function (err) {
          _this4.error('PDF failed to download: ' + err)
        }
        if (!this.pdfDocument || !this.downloadComplete) {
          downloadByUrl()
          return
        }
        this.pdfDocument.getData().then(function (data) {
          const blob = (0, _pdfjsLib.createBlob)(data, 'application/pdf')
          downloadManager.download(blob, url, filename)
        }).catch(downloadByUrl)
      },
      fallback: function fallback (featureId) {},
      error: function error (message, moreInfo) {
        const moreInfoText = [this.l10n.get('error_version_info', {
          version: _pdfjsLib.version || '?',
          build: _pdfjsLib.build || '?'
        }, 'PDF.js v{{version}} (build: {{build}})')]
        if (moreInfo) {
          moreInfoText.push(this.l10n.get('error_message', { message: moreInfo.message }, 'Message: {{message}}'))
          if (moreInfo.stack) {
            moreInfoText.push(this.l10n.get('error_stack', { stack: moreInfo.stack }, 'Stack: {{stack}}'))
          } else {
            if (moreInfo.filename) {
              moreInfoText.push(this.l10n.get('error_file', { file: moreInfo.filename }, 'File: {{file}}'))
            }
            if (moreInfo.lineNumber) {
              moreInfoText.push(this.l10n.get('error_line', { line: moreInfo.lineNumber }, 'Line: {{line}}'))
            }
          }
        }
        const errorWrapperConfig = this.appConfig.errorWrapper
        const errorWrapper = errorWrapperConfig.container
        errorWrapper.removeAttribute('hidden')
        const errorMessage = errorWrapperConfig.errorMessage
        errorMessage.textContent = message
        const closeButton = errorWrapperConfig.closeButton
        closeButton.onclick = function () {
          errorWrapper.setAttribute('hidden', 'true')
        }
        const errorMoreInfo = errorWrapperConfig.errorMoreInfo
        const moreInfoButton = errorWrapperConfig.moreInfoButton
        const lessInfoButton = errorWrapperConfig.lessInfoButton
        moreInfoButton.onclick = function () {
          errorMoreInfo.removeAttribute('hidden')
          moreInfoButton.setAttribute('hidden', 'true')
          lessInfoButton.removeAttribute('hidden')
          errorMoreInfo.style.height = errorMoreInfo.scrollHeight + 'px'
        }
        lessInfoButton.onclick = function () {
          errorMoreInfo.setAttribute('hidden', 'true')
          moreInfoButton.removeAttribute('hidden')
          lessInfoButton.setAttribute('hidden', 'true')
        }
        moreInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler
        lessInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler
        closeButton.oncontextmenu = _ui_utils.noContextMenuHandler
        moreInfoButton.removeAttribute('hidden')
        lessInfoButton.setAttribute('hidden', 'true')
        Promise.all(moreInfoText).then(function (parts) {
          errorMoreInfo.value = parts.join('\n')
        })
      },
      progress: function progress (level) {
        const _this5 = this

        if (this.downloadComplete) {
          return
        }
        const percent = Math.round(level * 100)
        if (percent > this.loadingBar.percent || isNaN(percent)) {
          this.loadingBar.percent = percent
          if (_pdfjsLib.PDFJS.disableAutoFetch && percent) {
            if (this.disableAutoFetchLoadingBarTimeout) {
              clearTimeout(this.disableAutoFetchLoadingBarTimeout)
              this.disableAutoFetchLoadingBarTimeout = null
            }
            this.loadingBar.show()
            this.disableAutoFetchLoadingBarTimeout = setTimeout(function () {
              _this5.loadingBar.hide()
              _this5.disableAutoFetchLoadingBarTimeout = null
            }, DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT)
          }
        }
      },
      load: function load (pdfDocument, scale) {
        const _this6 = this

        scale = scale || _ui_utils.UNKNOWN_SCALE
        this.pdfDocument = pdfDocument
        pdfDocument.getDownloadInfo().then(function () {
          _this6.downloadComplete = true
          _this6.loadingBar.hide()
          firstPagePromise.then(function () {
            _this6.eventBus.dispatch('documentload', { source: _this6 })
          })
        })
        const pageModePromise = pdfDocument.getPageMode().catch(function () {})
        this.toolbar.setPagesCount(pdfDocument.numPages, false)
        this.secondaryToolbar.setPagesCount(pdfDocument.numPages)
        const id = this.documentFingerprint = pdfDocument.fingerprint
        const store = this.store = new _view_history.ViewHistory(id)
        let baseDocumentUrl = void 0
        baseDocumentUrl = null
        this.pdfLinkService.setDocument(pdfDocument, baseDocumentUrl)
        this.pdfDocumentProperties.setDocument(pdfDocument, this.url)
        const pdfViewer = this.pdfViewer
        pdfViewer.setDocument(pdfDocument)
        var firstPagePromise = pdfViewer.firstPagePromise
        const pagesPromise = pdfViewer.pagesPromise
        const onePageRendered = pdfViewer.onePageRendered
        const pdfThumbnailViewer = this.pdfThumbnailViewer
        pdfThumbnailViewer.setDocument(pdfDocument)
        firstPagePromise.then(function (pdfPage) {
          _this6.loadingBar.setWidth(_this6.appConfig.viewerContainer)
          if (!_pdfjsLib.PDFJS.disableHistory && !_this6.isViewerEmbedded) {
            if (!_this6.viewerPrefs.showPreviousViewOnLoad) {
              _this6.pdfHistory.clearHistoryState()
            }
            _this6.pdfHistory.initialize(_this6.documentFingerprint)
            if (_this6.pdfHistory.initialDestination) {
              _this6.initialDestination = _this6.pdfHistory.initialDestination
            } else if (_this6.pdfHistory.initialBookmark) {
              _this6.initialBookmark = _this6.pdfHistory.initialBookmark
            }
          }
          const initialParams = {
            destination: _this6.initialDestination,
            bookmark: _this6.initialBookmark,
            hash: null
          }
          const storePromise = store.getMultiple({
            exists: false,
            page: '1',
            zoom: _ui_utils.DEFAULT_SCALE_VALUE,
            scrollLeft: '0',
            scrollTop: '0',
            sidebarView: _pdf_sidebar.SidebarView.NONE
          }).catch(function () {})
          Promise.all([storePromise, pageModePromise]).then(function (_ref2) {
            const _ref3 = _slicedToArray(_ref2, 2)
            const _ref3$ = _ref3[0]
            const values = _ref3$ === undefined ? {} : _ref3$
            const pageMode = _ref3[1]

            let hash = _this6.viewerPrefs.defaultZoomValue ? 'zoom=' + _this6.viewerPrefs.defaultZoomValue : null
            let sidebarView = _this6.viewerPrefs.sidebarViewOnLoad
            if (values.exists && _this6.viewerPrefs.showPreviousViewOnLoad) {
              hash = 'page=' + values.page + '&zoom=' + (_this6.viewerPrefs.defaultZoomValue || values.zoom) + ',' + values.scrollLeft + ',' + values.scrollTop
              sidebarView = sidebarView || values.sidebarView | 0
            }
            if (pageMode && !_this6.viewerPrefs.disablePageMode) {
              sidebarView = sidebarView || apiPageModeToSidebarView(pageMode)
            }
            return {
              hash,
              sidebarView
            }
          }).then(function (_ref4) {
            const hash = _ref4.hash
            const sidebarView = _ref4.sidebarView

            _this6.setInitialView(hash, {
              sidebarView,
              scale
            })
            initialParams.hash = hash
            if (!_this6.isViewerEmbedded) {
              pdfViewer.focus()
            }
            return pagesPromise
          }).then(function () {
            if (!initialParams.destination && !initialParams.bookmark && !initialParams.hash) {
              return
            }
            if (pdfViewer.hasEqualPageSizes) {
              return
            }
            _this6.initialDestination = initialParams.destination
            _this6.initialBookmark = initialParams.bookmark
            pdfViewer.currentScaleValue = pdfViewer.currentScaleValue
            _this6.setInitialView(initialParams.hash)
          }).then(function () {
            pdfViewer.update()
          })
        })
        pdfDocument.getPageLabels().then(function (labels) {
          if (!labels || _this6.viewerPrefs.disablePageLabels) {
            return
          }
          let i = 0
          const numLabels = labels.length
          if (numLabels !== _this6.pagesCount) {
            console.error('The number of Page Labels does not match ' + 'the number of pages in the document.')
            return
          }
          while (i < numLabels && labels[i] === (i + 1).toString()) {
            i++
          }
          if (i === numLabels) {
            return
          }
          pdfViewer.setPageLabels(labels)
          pdfThumbnailViewer.setPageLabels(labels)
          _this6.toolbar.setPagesCount(pdfDocument.numPages, true)
          _this6.toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel)
        })
        pagesPromise.then(function () {
          if (!_this6.supportsPrinting) {
            return
          }
          pdfDocument.getJavaScript().then(function (javaScript) {
            if (javaScript.length) {
              console.warn('Warning: JavaScript is not supported')
              _this6.fallback(_pdfjsLib.UNSUPPORTED_FEATURES.javaScript)
            }
            const regex = /\bprint\s*\(/
            for (let i = 0, ii = javaScript.length; i < ii; i++) {
              const js = javaScript[i]
              if (js && regex.test(js)) {
                setTimeout(function () {
                  window.print()
                })
                return
              }
            }
          })
        })
        Promise.all([onePageRendered, _ui_utils.animationStarted]).then(function () {
          pdfDocument.getOutline().then(function (outline) {
            _this6.pdfOutlineViewer.render({ outline })
          })
          pdfDocument.getAttachments().then(function (attachments) {
            _this6.pdfAttachmentViewer.render({ attachments })
          })
        })
        pdfDocument.getMetadata().then(function (_ref5) {
          const info = _ref5.info
          const metadata = _ref5.metadata

          _this6.documentInfo = info
          _this6.metadata = metadata
          console.log('PDF ' + pdfDocument.fingerprint + ' [' + info.PDFFormatVersion + ' ' + (info.Producer || '-').trim() + ' / ' + (info.Creator || '-').trim() + ']' + ' (PDF.js: ' + (_pdfjsLib.version || '-') + (!_pdfjsLib.PDFJS.disableWebGL ? ' [WebGL]' : '') + ')')
          let pdfTitle = void 0
          if (metadata && metadata.has('dc:title')) {
            const title = metadata.get('dc:title')
            if (title !== 'Untitled') {
              pdfTitle = title
            }
          }
          if (!pdfTitle && info && info.Title) {
            pdfTitle = info.Title
          }
          if (pdfTitle) {
            _this6.setTitle(pdfTitle + ' - ' + document.title)
          }
          if (info.IsAcroFormPresent) {
            console.warn('Warning: AcroForm/XFA is not supported')
            _this6.fallback(_pdfjsLib.UNSUPPORTED_FEATURES.forms)
          }
        })
      },
      setInitialView: function setInitialView (storedHash) {
        const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        const _options$scale = options.scale
        const scale = _options$scale === undefined ? 0 : _options$scale
        const _options$sidebarView = options.sidebarView
        const sidebarView = _options$sidebarView === undefined ? _pdf_sidebar.SidebarView.NONE : _options$sidebarView

        this.isInitialViewSet = true
        this.pdfSidebar.setInitialView(sidebarView)
        if (this.initialDestination) {
          this.pdfLinkService.navigateTo(this.initialDestination)
          this.initialDestination = null
        } else if (this.initialBookmark) {
          this.pdfLinkService.setHash(this.initialBookmark)
          this.pdfHistory.push({ hash: this.initialBookmark }, true)
          this.initialBookmark = null
        } else if (storedHash) {
          this.pdfLinkService.setHash(storedHash)
        } else if (scale) {
          this.pdfViewer.currentScaleValue = scale
          this.page = 1
        }
        this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel)
        this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber)
        if (!this.pdfViewer.currentScaleValue) {
          this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE
        }
      },
      cleanup: function cleanup () {
        if (!this.pdfDocument) {
          return
        }
        this.pdfViewer.cleanup()
        this.pdfThumbnailViewer.cleanup()
        if (this.pdfViewer.renderer !== _ui_utils.RendererType.SVG) {
          this.pdfDocument.cleanup()
        }
      },
      forceRendering: function forceRendering () {
        this.pdfRenderingQueue.printing = this.printing
        this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible
        this.pdfRenderingQueue.renderHighestPriority()
      },
      beforePrint: function beforePrint () {
        const _this7 = this

        if (this.printService) {
          return
        }
        if (!this.supportsPrinting) {
          this.l10n.get('printing_not_supported', null, 'Warning: Printing is not fully supported by ' + 'this browser.').then(function (printMessage) {
            _this7.error(printMessage)
          })
          return
        }
        if (!this.pdfViewer.pageViewsReady) {
          this.l10n.get('printing_not_ready', null, 'Warning: The PDF is not fully loaded for printing.').then(function (notReadyMessage) {
            window.alert(notReadyMessage)
          })
          return
        }
        const pagesOverview = this.pdfViewer.getPagesOverview()
        const printContainer = this.appConfig.printContainer
        const printService = PDFPrintServiceFactory.instance.createPrintService(this.pdfDocument, pagesOverview, printContainer, this.l10n)
        this.printService = printService
        this.forceRendering()
        printService.layout()
      },

      afterPrint: function pdfViewSetupAfterPrint () {
        if (this.printService) {
          this.printService.destroy()
          this.printService = null
        }
        this.forceRendering()
      },
      rotatePages: function rotatePages (delta) {
        if (!this.pdfDocument) {
          return
        }
        const pdfViewer = this.pdfViewer
        const pdfThumbnailViewer = this.pdfThumbnailViewer

        const pageNumber = pdfViewer.currentPageNumber
        const newRotation = (pdfViewer.pagesRotation + 360 + delta) % 360
        pdfViewer.pagesRotation = newRotation
        pdfThumbnailViewer.pagesRotation = newRotation
        this.forceRendering()
        pdfViewer.currentPageNumber = pageNumber
      },
      requestPresentationMode: function requestPresentationMode () {
        if (!this.pdfPresentationMode) {
          return
        }
        this.pdfPresentationMode.request()
      },
      bindEvents: function bindEvents () {
        const eventBus = this.eventBus
        const _boundEvents = this._boundEvents

        _boundEvents.beforePrint = this.beforePrint.bind(this)
        _boundEvents.afterPrint = this.afterPrint.bind(this)
        eventBus.on('resize', webViewerResize)
        eventBus.on('hashchange', webViewerHashchange)
        eventBus.on('beforeprint', _boundEvents.beforePrint)
        eventBus.on('afterprint', _boundEvents.afterPrint)
        eventBus.on('pagerendered', webViewerPageRendered)
        eventBus.on('textlayerrendered', webViewerTextLayerRendered)
        eventBus.on('updateviewarea', webViewerUpdateViewarea)
        eventBus.on('pagechanging', webViewerPageChanging)
        eventBus.on('scalechanging', webViewerScaleChanging)
        eventBus.on('sidebarviewchanged', webViewerSidebarViewChanged)
        eventBus.on('pagemode', webViewerPageMode)
        eventBus.on('namedaction', webViewerNamedAction)
        eventBus.on('presentationmodechanged', webViewerPresentationModeChanged)
        eventBus.on('presentationmode', webViewerPresentationMode)
        eventBus.on('openfile', webViewerOpenFile)
        eventBus.on('print', webViewerPrint)
        eventBus.on('download', webViewerDownload)
        eventBus.on('firstpage', webViewerFirstPage)
        eventBus.on('lastpage', webViewerLastPage)
        eventBus.on('nextpage', webViewerNextPage)
        eventBus.on('previouspage', webViewerPreviousPage)
        eventBus.on('zoomin', webViewerZoomIn)
        eventBus.on('zoomout', webViewerZoomOut)
        eventBus.on('pagenumberchanged', webViewerPageNumberChanged)
        eventBus.on('scalechanged', webViewerScaleChanged)
        eventBus.on('rotatecw', webViewerRotateCw)
        eventBus.on('rotateccw', webViewerRotateCcw)
        eventBus.on('documentproperties', webViewerDocumentProperties)
        eventBus.on('find', webViewerFind)
        eventBus.on('findfromurlhash', webViewerFindFromUrlHash)
        eventBus.on('fileinputchange', webViewerFileInputChange)
      },
      bindWindowEvents: function bindWindowEvents () {
        const eventBus = this.eventBus
        const _boundEvents = this._boundEvents

        _boundEvents.windowResize = function () {
          eventBus.dispatch('resize')
        }
        _boundEvents.windowHashChange = function () {
          eventBus.dispatch('hashchange', { hash: document.location.hash.substring(1) })
        }
        _boundEvents.windowBeforePrint = function () {
          eventBus.dispatch('beforeprint')
        }
        _boundEvents.windowAfterPrint = function () {
          eventBus.dispatch('afterprint')
        }
        window.addEventListener('wheel', webViewerWheel)
        window.addEventListener('click', webViewerClick)
        window.addEventListener('keydown', webViewerKeyDown)
        window.addEventListener('resize', _boundEvents.windowResize)
        window.addEventListener('hashchange', _boundEvents.windowHashChange)
        window.addEventListener('beforeprint', _boundEvents.windowBeforePrint)
        window.addEventListener('afterprint', _boundEvents.windowAfterPrint)
        _boundEvents.windowChange = function (evt) {
          const files = evt.target.files
          if (!files || files.length === 0) {
            return
          }
          eventBus.dispatch('fileinputchange', { fileInput: evt.target })
        }
        window.addEventListener('change', _boundEvents.windowChange)
      },
      unbindEvents: function unbindEvents () {
        const eventBus = this.eventBus
        const _boundEvents = this._boundEvents

        eventBus.off('resize', webViewerResize)
        eventBus.off('hashchange', webViewerHashchange)
        eventBus.off('beforeprint', _boundEvents.beforePrint)
        eventBus.off('afterprint', _boundEvents.afterPrint)
        eventBus.off('pagerendered', webViewerPageRendered)
        eventBus.off('textlayerrendered', webViewerTextLayerRendered)
        eventBus.off('updateviewarea', webViewerUpdateViewarea)
        eventBus.off('pagechanging', webViewerPageChanging)
        eventBus.off('scalechanging', webViewerScaleChanging)
        eventBus.off('sidebarviewchanged', webViewerSidebarViewChanged)
        eventBus.off('pagemode', webViewerPageMode)
        eventBus.off('namedaction', webViewerNamedAction)
        eventBus.off('presentationmodechanged', webViewerPresentationModeChanged)
        eventBus.off('presentationmode', webViewerPresentationMode)
        eventBus.off('openfile', webViewerOpenFile)
        eventBus.off('print', webViewerPrint)
        eventBus.off('download', webViewerDownload)
        eventBus.off('firstpage', webViewerFirstPage)
        eventBus.off('lastpage', webViewerLastPage)
        eventBus.off('nextpage', webViewerNextPage)
        eventBus.off('previouspage', webViewerPreviousPage)
        eventBus.off('zoomin', webViewerZoomIn)
        eventBus.off('zoomout', webViewerZoomOut)
        eventBus.off('pagenumberchanged', webViewerPageNumberChanged)
        eventBus.off('scalechanged', webViewerScaleChanged)
        eventBus.off('rotatecw', webViewerRotateCw)
        eventBus.off('rotateccw', webViewerRotateCcw)
        eventBus.off('documentproperties', webViewerDocumentProperties)
        eventBus.off('find', webViewerFind)
        eventBus.off('findfromurlhash', webViewerFindFromUrlHash)
        eventBus.off('fileinputchange', webViewerFileInputChange)
        _boundEvents.beforePrint = null
        _boundEvents.afterPrint = null
      },
      unbindWindowEvents: function unbindWindowEvents () {
        const _boundEvents = this._boundEvents

        window.removeEventListener('wheel', webViewerWheel)
        window.removeEventListener('click', webViewerClick)
        window.removeEventListener('keydown', webViewerKeyDown)
        window.removeEventListener('resize', _boundEvents.windowResize)
        window.removeEventListener('hashchange', _boundEvents.windowHashChange)
        window.removeEventListener('beforeprint', _boundEvents.windowBeforePrint)
        window.removeEventListener('afterprint', _boundEvents.windowAfterPrint)
        window.removeEventListener('change', _boundEvents.windowChange)
        _boundEvents.windowChange = null
        _boundEvents.windowResize = null
        _boundEvents.windowHashChange = null
        _boundEvents.windowBeforePrint = null
        _boundEvents.windowAfterPrint = null
      }
    }
    let validateFileURL = void 0
    {
      const HOSTED_VIEWER_ORIGINS = ['null', 'http://mozilla.github.io', 'https://mozilla.github.io']
      validateFileURL = function validateFileURL (file) {
        if (file === undefined) {
          return
        }
        try {
          const viewerOrigin = new URL(window.location.href).origin || 'null'
          if (HOSTED_VIEWER_ORIGINS.includes(viewerOrigin)) {
            return
          }
          const fileOrigin = new URL(file, window.location.href).origin
          if (fileOrigin !== viewerOrigin) {
            //   throw new Error('file origin does not match viewer\'s');
          }
        } catch (ex) {
          const message = ex && ex.message
          PDFViewerApplication.l10n.get('loading_error', null, 'An error occurred while loading the PDF.').then(function (loadingErrorMessage) {
            PDFViewerApplication.error(loadingErrorMessage, { message })
          })
          throw ex
        }
      }
    }
    function loadAndEnablePDFBug (enabledTabs) {
      return new Promise(function (resolve, reject) {
        const appConfig = PDFViewerApplication.appConfig
        const script = document.createElement('script')
        script.src = appConfig.debuggerScriptPath
        script.onload = function () {
          PDFBug.enable(enabledTabs)
          PDFBug.init({
            PDFJS: _pdfjsLib.PDFJS,
            OPS: _pdfjsLib.OPS
          }, appConfig.mainContainer)
          resolve()
        }
        script.onerror = function () {
          reject(new Error('Cannot load debugger at ' + script.src))
        };
        (document.getElementsByTagName('head')[0] || document.body).appendChild(script)
      })
    }
    function webViewerInitialized () {
      const appConfig = PDFViewerApplication.appConfig
      let file = void 0
      const queryString = document.location.search.substring(1)
      const params = (0, _ui_utils.parseQueryString)(queryString)
      file = 'file' in params ? params.file : appConfig.defaultUrl
      validateFileURL(file)
      const waitForBeforeOpening = []
      const fileInput = document.createElement('input')
      fileInput.id = appConfig.openFileInputName
      fileInput.className = 'fileInput'
      fileInput.setAttribute('type', 'file')
      fileInput.oncontextmenu = _ui_utils.noContextMenuHandler
      document.body.appendChild(fileInput)
      if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        appConfig.toolbar.openFile.setAttribute('hidden', 'true')
        appConfig.secondaryToolbar.openFileButton.setAttribute('hidden', 'true')
      } else {
        fileInput.value = null
      }
      if (PDFViewerApplication.viewerPrefs.pdfBugEnabled) {
        const hash = document.location.hash.substring(1)
        const hashParams = (0, _ui_utils.parseQueryString)(hash)
        if ('disableworker' in hashParams) {
          _pdfjsLib.PDFJS.disableWorker = hashParams.disableworker === 'true'
        }
        if ('disablerange' in hashParams) {
          _pdfjsLib.PDFJS.disableRange = hashParams.disablerange === 'true'
        }
        if ('disablestream' in hashParams) {
          _pdfjsLib.PDFJS.disableStream = hashParams.disablestream === 'true'
        }
        if ('disableautofetch' in hashParams) {
          _pdfjsLib.PDFJS.disableAutoFetch = hashParams.disableautofetch === 'true'
        }
        if ('disablefontface' in hashParams) {
          _pdfjsLib.PDFJS.disableFontFace = hashParams.disablefontface === 'true'
        }
        if ('disablehistory' in hashParams) {
          _pdfjsLib.PDFJS.disableHistory = hashParams.disablehistory === 'true'
        }
        if ('webgl' in hashParams) {
          _pdfjsLib.PDFJS.disableWebGL = hashParams.webgl !== 'true'
        }
        if ('useonlycsszoom' in hashParams) {
          _pdfjsLib.PDFJS.useOnlyCssZoom = hashParams.useonlycsszoom === 'true'
        }
        if ('verbosity' in hashParams) {
          _pdfjsLib.PDFJS.verbosity = hashParams.verbosity | 0
        }
        if ('ignorecurrentpositiononzoom' in hashParams) {
          _pdfjsLib.PDFJS.ignoreCurrentPositionOnZoom = hashParams.ignorecurrentpositiononzoom === 'true'
        }
        if ('textlayer' in hashParams) {
          switch (hashParams.textlayer) {
            case 'off':
              _pdfjsLib.PDFJS.disableTextLayer = true
              break
            case 'visible':
            case 'shadow':
            case 'hover':
              var viewer = appConfig.viewerContainer
              viewer.classList.add('textLayer-' + hashParams.textlayer)
              break
          }
        }
        if ('pdfbug' in hashParams) {
          _pdfjsLib.PDFJS.pdfBug = true
          const pdfBug = hashParams.pdfbug
          const enabled = pdfBug.split(',')
          waitForBeforeOpening.push(loadAndEnablePDFBug(enabled))
        }
      }
      if (!PDFViewerApplication.supportsPrinting) {
        appConfig.toolbar.print.classList.add('hidden')
        appConfig.secondaryToolbar.printButton.classList.add('hidden')
      }
      if (!PDFViewerApplication.supportsFullscreen) {
        appConfig.toolbar.presentationModeButton.classList.add('hidden')
        appConfig.secondaryToolbar.presentationModeButton.classList.add('hidden')
      }
      if (PDFViewerApplication.supportsIntegratedFind) {
        appConfig.toolbar.viewFind.classList.add('hidden')
      }
      appConfig.sidebar.mainContainer.addEventListener('transitionend', function (evt) {
        if (evt.target === this) {
          PDFViewerApplication.eventBus.dispatch('resize')
        }
      }, true)
      appConfig.sidebar.toggleButton.addEventListener('click', function () {
        PDFViewerApplication.pdfSidebar.toggle()
      })
      Promise.all(waitForBeforeOpening).then(function () {
        webViewerOpenFileViaURL(file)
      }).catch(function (reason) {
        PDFViewerApplication.l10n.get('loading_error', null, 'An error occurred while opening.').then(function (msg) {
          PDFViewerApplication.error(msg, reason)
        })
      })
    }
    var webViewerOpenFileViaURL = void 0
    {
      webViewerOpenFileViaURL = function webViewerOpenFileViaURL (file) {
        if (file && file.lastIndexOf('file:', 0) === 0) {
          PDFViewerApplication.setTitleUsingUrl(file)
          const xhr = new XMLHttpRequest()
          xhr.onload = function () {
            PDFViewerApplication.open(new Uint8Array(xhr.response))
          }
          try {
            xhr.open('GET', file)
            xhr.responseType = 'arraybuffer'
            xhr.send()
          } catch (ex) {
            PDFViewerApplication.l10n.get('loading_error', null, 'An error occurred while loading the PDF.').then(function (msg) {
              PDFViewerApplication.error(msg, ex)
            })
          }
          return
        }
        if (file) {
          PDFViewerApplication.open(file)
        }
      }
    }
    function webViewerPageRendered (evt) {
      const pageNumber = evt.pageNumber
      const pageIndex = pageNumber - 1
      const pageView = PDFViewerApplication.pdfViewer.getPageView(pageIndex)
      if (pageNumber === PDFViewerApplication.page) {
        PDFViewerApplication.toolbar.updateLoadingIndicatorState(false)
      }
      if (!pageView) {
        return
      }
      if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
        const thumbnailView = PDFViewerApplication.pdfThumbnailViewer.getThumbnail(pageIndex)
        thumbnailView.setImage(pageView)
      }
      if (_pdfjsLib.PDFJS.pdfBug && Stats.enabled && pageView.stats) {
        Stats.add(pageNumber, pageView.stats)
      }
      if (pageView.error) {
        PDFViewerApplication.l10n.get('rendering_error', null, 'An error occurred while rendering the page.').then(function (msg) {
          PDFViewerApplication.error(msg, pageView.error)
        })
      }
    }
    function webViewerTextLayerRendered (evt) {}
    function webViewerPageMode (evt) {
      const mode = evt.mode
      let view = void 0
      switch (mode) {
        case 'thumbs':
          view = _pdf_sidebar.SidebarView.THUMBS
          break
        case 'bookmarks':
        case 'outline':
          view = _pdf_sidebar.SidebarView.OUTLINE
          break
        case 'attachments':
          view = _pdf_sidebar.SidebarView.ATTACHMENTS
          break
        case 'none':
          view = _pdf_sidebar.SidebarView.NONE
          break
        default:
          console.error('Invalid "pagemode" hash parameter: ' + mode)
          return
      }
      PDFViewerApplication.pdfSidebar.switchView(view, true)
    }
    function webViewerNamedAction (evt) {
      const action = evt.action
      switch (action) {
        case 'GoToPage':
          PDFViewerApplication.appConfig.toolbar.pageNumber.select()
          break
        case 'Find':
          if (!PDFViewerApplication.supportsIntegratedFind) {
            PDFViewerApplication.findBar.toggle()
          }
          break
      }
    }
    function webViewerPresentationModeChanged (evt) {
      const active = evt.active
      const switchInProgress = evt.switchInProgress

      PDFViewerApplication.pdfViewer.presentationModeState = switchInProgress ? _pdf_viewer.PresentationModeState.CHANGING : active ? _pdf_viewer.PresentationModeState.FULLSCREEN : _pdf_viewer.PresentationModeState.NORMAL
    }
    function webViewerSidebarViewChanged (evt) {
      PDFViewerApplication.pdfRenderingQueue.isThumbnailViewEnabled = PDFViewerApplication.pdfSidebar.isThumbnailViewVisible
      const store = PDFViewerApplication.store
      if (store && PDFViewerApplication.isInitialViewSet) {
        store.set('sidebarView', evt.view).catch(function () {})
      }
    }
    function webViewerUpdateViewarea (evt) {
      const location = evt.location
      const store = PDFViewerApplication.store
      if (store && PDFViewerApplication.isInitialViewSet) {
        store.setMultiple({
          exists: true,
          page: location.pageNumber,
          zoom: location.scale,
          scrollLeft: location.left,
          scrollTop: location.top
        }).catch(function () {})
      }
      const href = PDFViewerApplication.pdfLinkService.getAnchorUrl(location.pdfOpenParams)
      PDFViewerApplication.appConfig.toolbar.viewBookmark.href = href
      PDFViewerApplication.appConfig.secondaryToolbar.viewBookmarkButton.href = href
      PDFViewerApplication.pdfHistory.updateCurrentBookmark(location.pdfOpenParams, location.pageNumber)
      const currentPage = PDFViewerApplication.pdfViewer.getPageView(PDFViewerApplication.page - 1)
      const loading = currentPage.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED
      PDFViewerApplication.toolbar.updateLoadingIndicatorState(loading)
    }
    function webViewerResize () {
      const pdfDocument = PDFViewerApplication.pdfDocument
      const pdfViewer = PDFViewerApplication.pdfViewer

      if (!pdfDocument) {
        return
      }
      const currentScaleValue = pdfViewer.currentScaleValue
      if (currentScaleValue === 'auto' || currentScaleValue === 'page-fit' || currentScaleValue === 'page-width') {
        pdfViewer.currentScaleValue = currentScaleValue
      }
      pdfViewer.update()
    }
    function webViewerHashchange (evt) {
      if (PDFViewerApplication.pdfHistory.isHashChangeUnlocked) {
        const hash = evt.hash
        if (!hash) {
          return
        }
        if (!PDFViewerApplication.isInitialViewSet) {
          PDFViewerApplication.initialBookmark = hash
        } else {
          PDFViewerApplication.pdfLinkService.setHash(hash)
        }
      }
    }
    var webViewerFileInputChange = void 0
    {
      webViewerFileInputChange = function webViewerFileInputChange (evt) {
        const file = evt.fileInput.files[0]
        if (!_pdfjsLib.PDFJS.disableCreateObjectURL && URL.createObjectURL) {
          PDFViewerApplication.open(URL.createObjectURL(file))
        } else {
          const fileReader = new FileReader()
          fileReader.onload = function webViewerChangeFileReaderOnload (evt) {
            const buffer = evt.target.result
            PDFViewerApplication.open(new Uint8Array(buffer))
          }
          fileReader.readAsArrayBuffer(file)
        }
        PDFViewerApplication.setTitleUsingUrl(file.name)
        const appConfig = PDFViewerApplication.appConfig
        appConfig.toolbar.viewBookmark.setAttribute('hidden', 'true')
        appConfig.secondaryToolbar.viewBookmarkButton.setAttribute('hidden', 'true')
        appConfig.toolbar.download.setAttribute('hidden', 'true')
        appConfig.secondaryToolbar.downloadButton.setAttribute('hidden', 'true')
      }
    }
    function webViewerPresentationMode () {
      PDFViewerApplication.requestPresentationMode()
    }
    function webViewerOpenFile () {
      const openFileInputName = PDFViewerApplication.appConfig.openFileInputName
      document.getElementById(openFileInputName).click()
    }
    function webViewerPrint () {
      window.print()
    }
    function webViewerDownload () {
      PDFViewerApplication.download()
    }
    function webViewerFirstPage () {
      if (PDFViewerApplication.pdfDocument) {
        PDFViewerApplication.page = 1
      }
    }
    function webViewerLastPage () {
      if (PDFViewerApplication.pdfDocument) {
        PDFViewerApplication.page = PDFViewerApplication.pagesCount
      }
    }
    function webViewerNextPage () {
      PDFViewerApplication.page++
    }
    function webViewerPreviousPage () {
      PDFViewerApplication.page--
    }
    function webViewerZoomIn () {
      PDFViewerApplication.zoomIn()
    }
    function webViewerZoomOut () {
      PDFViewerApplication.zoomOut()
    }
    function webViewerPageNumberChanged (evt) {
      const pdfViewer = PDFViewerApplication.pdfViewer
      pdfViewer.currentPageLabel = evt.value
      if (evt.value !== pdfViewer.currentPageNumber.toString() && evt.value !== pdfViewer.currentPageLabel) {
        PDFViewerApplication.toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel)
      }
    }
    function webViewerScaleChanged (evt) {
      PDFViewerApplication.pdfViewer.currentScaleValue = evt.value
    }
    function webViewerRotateCw () {
      PDFViewerApplication.rotatePages(90)
    }
    function webViewerRotateCcw () {
      PDFViewerApplication.rotatePages(-90)
    }
    function webViewerDocumentProperties () {
      PDFViewerApplication.pdfDocumentProperties.open()
    }
    function webViewerFind (evt) {
      PDFViewerApplication.findController.executeCommand('find' + evt.type, {
        query: evt.query,
        phraseSearch: evt.phraseSearch,
        caseSensitive: evt.caseSensitive,
        highlightAll: evt.highlightAll,
        findPrevious: evt.findPrevious
      })
    }
    function webViewerFindFromUrlHash (evt) {
      PDFViewerApplication.findController.executeCommand('find', {
        query: evt.query,
        phraseSearch: evt.phraseSearch,
        caseSensitive: false,
        highlightAll: true,
        findPrevious: false
      })
    }
    function webViewerScaleChanging (evt) {
      PDFViewerApplication.toolbar.setPageScale(evt.presetValue, evt.scale)
      PDFViewerApplication.pdfViewer.update()
    }
    function webViewerPageChanging (evt) {
      const page = evt.pageNumber
      PDFViewerApplication.toolbar.setPageNumber(page, evt.pageLabel || null)
      PDFViewerApplication.secondaryToolbar.setPageNumber(page)
      if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
        PDFViewerApplication.pdfThumbnailViewer.scrollThumbnailIntoView(page)
      }
      if (_pdfjsLib.PDFJS.pdfBug && Stats.enabled) {
        const pageView = PDFViewerApplication.pdfViewer.getPageView(page - 1)
        if (pageView.stats) {
          Stats.add(page, pageView.stats)
        }
      }
    }
    let zoomDisabled = false
    let zoomDisabledTimeout = void 0
    function webViewerWheel (evt) {
      const pdfViewer = PDFViewerApplication.pdfViewer
      if (pdfViewer.isInPresentationMode) {
        return
      }
      if (evt.ctrlKey || evt.metaKey) {
        const support = PDFViewerApplication.supportedMouseWheelZoomModifierKeys
        if (evt.ctrlKey && !support.ctrlKey || evt.metaKey && !support.metaKey) {
          return
        }
        evt.preventDefault()
        if (zoomDisabled) {
          return
        }
        const previousScale = pdfViewer.currentScale
        const delta = (0, _ui_utils.normalizeWheelEventDelta)(evt)
        const MOUSE_WHEEL_DELTA_PER_PAGE_SCALE = 3.0
        const ticks = delta * MOUSE_WHEEL_DELTA_PER_PAGE_SCALE
        if (ticks < 0) {
          PDFViewerApplication.zoomOut(-ticks)
        } else {
          PDFViewerApplication.zoomIn(ticks)
        }
        const currentScale = pdfViewer.currentScale
        if (previousScale !== currentScale) {
          const scaleCorrectionFactor = currentScale / previousScale - 1
          const rect = pdfViewer.container.getBoundingClientRect()
          const dx = evt.clientX - rect.left
          const dy = evt.clientY - rect.top
          pdfViewer.container.scrollLeft += dx * scaleCorrectionFactor
          pdfViewer.container.scrollTop += dy * scaleCorrectionFactor
        }
      } else {
        zoomDisabled = true
        clearTimeout(zoomDisabledTimeout)
        zoomDisabledTimeout = setTimeout(function () {
          zoomDisabled = false
        }, 1000)
      }
    }
    function webViewerClick (evt) {
      if (!PDFViewerApplication.secondaryToolbar.isOpen) {
        return
      }
      const appConfig = PDFViewerApplication.appConfig
      if (PDFViewerApplication.pdfViewer.containsElement(evt.target) || appConfig.toolbar.container.contains(evt.target) && evt.target !== appConfig.secondaryToolbar.toggleButton) {
        PDFViewerApplication.secondaryToolbar.close()
      }
    }
    function webViewerKeyDown (evt) {
      if (PDFViewerApplication.overlayManager.active) {
        return
      }
      let handled = false
      let ensureViewerFocused = false
      const cmd = (evt.ctrlKey ? 1 : 0) | (evt.altKey ? 2 : 0) | (evt.shiftKey ? 4 : 0) | (evt.metaKey ? 8 : 0)
      const pdfViewer = PDFViewerApplication.pdfViewer
      const isViewerInPresentationMode = pdfViewer && pdfViewer.isInPresentationMode
      if (cmd === 1 || cmd === 8 || cmd === 5 || cmd === 12) {
        switch (evt.keyCode) {
          case 70:
            if (!PDFViewerApplication.supportsIntegratedFind) {
              PDFViewerApplication.findBar.open()
              handled = true
            }
            break
          case 71:
            if (!PDFViewerApplication.supportsIntegratedFind) {
              const findState = PDFViewerApplication.findController.state
              if (findState) {
                PDFViewerApplication.findController.executeCommand('findagain', {
                  query: findState.query,
                  phraseSearch: findState.phraseSearch,
                  caseSensitive: findState.caseSensitive,
                  highlightAll: findState.highlightAll,
                  findPrevious: cmd === 5 || cmd === 12
                })
              }
              handled = true
            }
            break
          case 61:
          case 107:
          case 187:
          case 171:
            if (!isViewerInPresentationMode) {
              PDFViewerApplication.zoomIn()
            }
            handled = true
            break
          case 173:
          case 109:
          case 189:
            if (!isViewerInPresentationMode) {
              PDFViewerApplication.zoomOut()
            }
            handled = true
            break
          case 48:
          case 96:
            if (!isViewerInPresentationMode) {
              setTimeout(function () {
                pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE
              })
              handled = false
            }
            break
          case 38:
            if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
              PDFViewerApplication.page = 1
              handled = true
              ensureViewerFocused = true
            }
            break
          case 40:
            if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
              PDFViewerApplication.page = PDFViewerApplication.pagesCount
              handled = true
              ensureViewerFocused = true
            }
            break
        }
      }
      if (cmd === 1 || cmd === 8) {
        switch (evt.keyCode) {
          case 83:
            PDFViewerApplication.download()
            handled = true
            break
        }
      }
      if (cmd === 3 || cmd === 10) {
        switch (evt.keyCode) {
          case 80:
            PDFViewerApplication.requestPresentationMode()
            handled = true
            break
          case 71:
            PDFViewerApplication.appConfig.toolbar.pageNumber.select()
            handled = true
            break
        }
      }
      if (handled) {
        if (ensureViewerFocused && !isViewerInPresentationMode) {
          pdfViewer.focus()
        }
        evt.preventDefault()
        return
      }
      const curElement = document.activeElement || document.querySelector(':focus')
      const curElementTagName = curElement && curElement.tagName.toUpperCase()
      if (curElementTagName === 'INPUT' || curElementTagName === 'TEXTAREA' || curElementTagName === 'SELECT') {
        if (evt.keyCode !== 27) {
          return
        }
      }
      if (cmd === 0) {
        switch (evt.keyCode) {
          case 38:
          case 33:
          case 8:
            if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== 'page-fit') {
              break
            }
          case 37:
            if (pdfViewer.isHorizontalScrollbarEnabled) {
              break
            }
          case 75:
          case 80:
            if (PDFViewerApplication.page > 1) {
              PDFViewerApplication.page--
            }
            handled = true
            break
          case 27:
            if (PDFViewerApplication.secondaryToolbar.isOpen) {
              PDFViewerApplication.secondaryToolbar.close()
              handled = true
            }
            if (!PDFViewerApplication.supportsIntegratedFind && PDFViewerApplication.findBar.opened) {
              PDFViewerApplication.findBar.close()
              handled = true
            }
            break
          case 40:
          case 34:
          case 32:
            if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== 'page-fit') {
              break
            }
          case 39:
            if (pdfViewer.isHorizontalScrollbarEnabled) {
              break
            }
          case 74:
          case 78:
            if (PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
              PDFViewerApplication.page++
            }
            handled = true
            break
          case 36:
            if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
              PDFViewerApplication.page = 1
              handled = true
              ensureViewerFocused = true
            }
            break
          case 35:
            if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
              PDFViewerApplication.page = PDFViewerApplication.pagesCount
              handled = true
              ensureViewerFocused = true
            }
            break
          case 83:
            PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.SELECT)
            break
          case 72:
            PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.HAND)
            break
          case 82:
            PDFViewerApplication.rotatePages(90)
            break
        }
      }
      if (cmd === 4) {
        switch (evt.keyCode) {
          case 32:
            if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== 'page-fit') {
              break
            }
            if (PDFViewerApplication.page > 1) {
              PDFViewerApplication.page--
            }
            handled = true
            break
          case 82:
            PDFViewerApplication.rotatePages(-90)
            break
        }
      }
      if (!handled && !isViewerInPresentationMode) {
        if (evt.keyCode >= 33 && evt.keyCode <= 40 || evt.keyCode === 32 && curElementTagName !== 'BUTTON') {
          ensureViewerFocused = true
        }
      }
      if (cmd === 2) {
        switch (evt.keyCode) {
          case 37:
            if (isViewerInPresentationMode) {
              PDFViewerApplication.pdfHistory.back()
              handled = true
            }
            break
          case 39:
            if (isViewerInPresentationMode) {
              PDFViewerApplication.pdfHistory.forward()
              handled = true
            }
            break
        }
      }
      if (ensureViewerFocused && !pdfViewer.containsElement(curElement)) {
        pdfViewer.focus()
      }
      if (handled) {
        evt.preventDefault()
      }
    }
    function apiPageModeToSidebarView (mode) {
      switch (mode) {
        case 'UseNone':
          return _pdf_sidebar.SidebarView.NONE
        case 'UseThumbs':
          return _pdf_sidebar.SidebarView.THUMBS
        case 'UseOutlines':
          return _pdf_sidebar.SidebarView.OUTLINE
        case 'UseAttachments':
          return _pdf_sidebar.SidebarView.ATTACHMENTS
        case 'UseOC':
      }
      return _pdf_sidebar.SidebarView.NONE
    }
    var PDFPrintServiceFactory = {
      instance: {
        supportsPrinting: false,
        createPrintService: function createPrintService () {
          throw new Error('Not implemented: createPrintService')
        }
      }
    }
    exports.PDFViewerApplication = PDFViewerApplication
    exports.DefaultExternalServices = DefaultExternalServices
    exports.PDFPrintServiceFactory = PDFPrintServiceFactory
    /***/ },
  /* 5 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.SimpleLinkService = exports.PDFLinkService = undefined

    const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _dom_events = __webpack_require__(2)

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PDFLinkService = (function () {
      function PDFLinkService () {
        const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        const eventBus = _ref.eventBus

        _classCallCheck(this, PDFLinkService)

        this.eventBus = eventBus || (0, _dom_events.getGlobalEventBus)()
        this.baseUrl = null
        this.pdfDocument = null
        this.pdfViewer = null
        this.pdfHistory = null
        this._pagesRefCache = null
      }

      _createClass(PDFLinkService, [{
        key: 'setDocument',
        value: function setDocument (pdfDocument, baseUrl) {
          this.baseUrl = baseUrl
          this.pdfDocument = pdfDocument
          this._pagesRefCache = Object.create(null)
        }
      }, {
        key: 'setViewer',
        value: function setViewer (pdfViewer) {
          this.pdfViewer = pdfViewer
        }
      }, {
        key: 'setHistory',
        value: function setHistory (pdfHistory) {
          this.pdfHistory = pdfHistory
        }
      }, {
        key: 'navigateTo',
        value: function navigateTo (dest) {
          const _this = this

          const goToDestination = function goToDestination (_ref2) {
            const namedDest = _ref2.namedDest
            const explicitDest = _ref2.explicitDest

            const destRef = explicitDest[0]
            let pageNumber = void 0
            if (destRef instanceof Object) {
              pageNumber = _this._cachedPageNumber(destRef)
              if (pageNumber === null) {
                _this.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
                  _this.cachePageRef(pageIndex + 1, destRef)
                  goToDestination({
                    namedDest,
                    explicitDest
                  })
                }).catch(function () {
                  console.error('PDFLinkService.navigateTo: "' + destRef + '" is not ' + ('a valid page reference, for dest="' + dest + '".'))
                })
                return
              }
            } else if ((destRef | 0) === destRef) {
              pageNumber = destRef + 1
            } else {
              console.error('PDFLinkService.navigateTo: "' + destRef + '" is not ' + ('a valid destination reference, for dest="' + dest + '".'))
              return
            }
            if (!pageNumber || pageNumber < 1 || pageNumber > _this.pagesCount) {
              console.error('PDFLinkService.navigateTo: "' + pageNumber + '" is not ' + ('a valid page number, for dest="' + dest + '".'))
              return
            }
            _this.pdfViewer.scrollPageIntoView({
              pageNumber,
              destArray: explicitDest
            })
            if (_this.pdfHistory) {
              _this.pdfHistory.push({
                dest: explicitDest,
                hash: namedDest,
                page: pageNumber
              })
            }
          }
          new Promise(function (resolve, reject) {
            if (typeof dest === 'string') {
              _this.pdfDocument.getDestination(dest).then(function (destArray) {
                resolve({
                  namedDest: dest,
                  explicitDest: destArray
                })
              })
              return
            }
            resolve({
              namedDest: '',
              explicitDest: dest
            })
          }).then(function (data) {
            if (!(Array.isArray(data.explicitDest))) {
              console.error('PDFLinkService.navigateTo: "' + data.explicitDest + '" is' + (' not a valid destination array, for dest="' + dest + '".'))
              return
            }
            goToDestination(data)
          })
        }
      }, {
        key: 'getDestinationHash',
        value: function getDestinationHash (dest) {
          if (typeof dest === 'string') {
            return this.getAnchorUrl('#' + escape(dest))
          }
          if (Array.isArray(dest)) {
            const str = JSON.stringify(dest)
            return this.getAnchorUrl('#' + escape(str))
          }
          return this.getAnchorUrl('')
        }
      }, {
        key: 'getAnchorUrl',
        value: function getAnchorUrl (anchor) {
          return (this.baseUrl || '') + anchor
        }
      }, {
        key: 'setHash',
        value: function setHash (hash) {
          let pageNumber = void 0
          let dest = void 0
          if (hash.includes('=')) {
            const params = (0, _ui_utils.parseQueryString)(hash)
            if ('search' in params) {
              this.eventBus.dispatch('findfromurlhash', {
                source: this,
                query: params.search.replace(/"/g, ''),
                phraseSearch: params.phrase === 'true'
              })
            }
            if ('nameddest' in params) {
              if (this.pdfHistory) {
                this.pdfHistory.updateNextHashParam(params.nameddest)
              }
              this.navigateTo(params.nameddest)
              return
            }
            if ('page' in params) {
              pageNumber = params.page | 0 || 1
            }
            if ('zoom' in params) {
              const zoomArgs = params.zoom.split(',')
              const zoomArg = zoomArgs[0]
              const zoomArgNumber = parseFloat(zoomArg)
              if (!zoomArg.includes('Fit')) {
                dest = [null, { name: 'XYZ' }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg]
              } else if (zoomArg === 'Fit' || zoomArg === 'FitB') {
                dest = [null, { name: zoomArg }]
              } else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
                dest = [null, { name: zoomArg }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null]
              } else if (zoomArg === 'FitR') {
                if (zoomArgs.length !== 5) {
                  console.error('PDFLinkService.setHash: Not enough parameters for "FitR".')
                } else {
                  dest = [null, { name: zoomArg }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0]
                }
              } else {
                console.error('PDFLinkService.setHash: "' + zoomArg + '" is not ' + 'a valid zoom value.')
              }
            }
            if (dest) {
              this.pdfViewer.scrollPageIntoView({
                pageNumber: pageNumber || this.page,
                destArray: dest,
                allowNegativeOffset: true
              })
            } else if (pageNumber) {
              this.page = pageNumber
            }
            if ('pagemode' in params) {
              this.eventBus.dispatch('pagemode', {
                source: this,
                mode: params.pagemode
              })
            }
          } else {
            if (/^\d+$/.test(hash) && hash <= this.pagesCount) {
              console.warn('PDFLinkService_setHash: specifying a page number ' + 'directly after the hash symbol (#) is deprecated, ' + ('please use the "#page=' + hash + '" form instead.'))
              this.page = hash | 0
            }
            dest = unescape(hash)
            try {
              dest = JSON.parse(dest)
              if (!(Array.isArray(dest))) {
                dest = dest.toString()
              }
            } catch (ex) {}
            if (typeof dest === 'string' || isValidExplicitDestination(dest)) {
              if (this.pdfHistory) {
                this.pdfHistory.updateNextHashParam(dest)
              }
              this.navigateTo(dest)
              return
            }
            console.error('PDFLinkService.setHash: "' + unescape(hash) + '" is not ' + 'a valid destination.')
          }
        }
      }, {
        key: 'executeNamedAction',
        value: function executeNamedAction (action) {
          switch (action) {
            case 'GoBack':
              if (this.pdfHistory) {
                this.pdfHistory.back()
              }
              break
            case 'GoForward':
              if (this.pdfHistory) {
                this.pdfHistory.forward()
              }
              break
            case 'NextPage':
              if (this.page < this.pagesCount) {
                this.page++
              }
              break
            case 'PrevPage':
              if (this.page > 1) {
                this.page--
              }
              break
            case 'LastPage':
              this.page = this.pagesCount
              break
            case 'FirstPage':
              this.page = 1
              break
            default:
              break
          }
          this.eventBus.dispatch('namedaction', {
            source: this,
            action
          })
        }
      }, {
        key: 'onFileAttachmentAnnotation',
        value: function onFileAttachmentAnnotation (_ref3) {
          const id = _ref3.id
          const filename = _ref3.filename
          const content = _ref3.content

          this.eventBus.dispatch('fileattachmentannotation', {
            source: this,
            id,
            filename,
            content
          })
        }
      }, {
        key: 'cachePageRef',
        value: function cachePageRef (pageNum, pageRef) {
          const refStr = pageRef.num + ' ' + pageRef.gen + ' R'
          this._pagesRefCache[refStr] = pageNum
        }
      }, {
        key: '_cachedPageNumber',
        value: function _cachedPageNumber (pageRef) {
          const refStr = pageRef.num + ' ' + pageRef.gen + ' R'
          return this._pagesRefCache && this._pagesRefCache[refStr] || null
        }
      }, {
        key: 'pagesCount',
        get: function get () {
          return this.pdfDocument ? this.pdfDocument.numPages : 0
        }
      }, {
        key: 'page',
        get: function get () {
          return this.pdfViewer.currentPageNumber
        },
        set: function set (value) {
          this.pdfViewer.currentPageNumber = value
        }
      }])

      return PDFLinkService
    }())

    function isValidExplicitDestination (dest) {
      if (!(Array.isArray(dest))) {
        return false
      }
      const destLength = dest.length
      let allowNull = true
      if (destLength < 2) {
        return false
      }
      const page = dest[0]
      if (!((typeof page === 'undefined' ? 'undefined' : _typeof(page)) === 'object' && typeof page.num === 'number' && (page.num | 0) === page.num && typeof page.gen === 'number' && (page.gen | 0) === page.gen) && !(typeof page === 'number' && (page | 0) === page && page >= 0)) {
        return false
      }
      const zoom = dest[1]
      if (!((typeof zoom === 'undefined' ? 'undefined' : _typeof(zoom)) === 'object' && typeof zoom.name === 'string')) {
        return false
      }
      switch (zoom.name) {
        case 'XYZ':
          if (destLength !== 5) {
            return false
          }
          break
        case 'Fit':
        case 'FitB':
          return destLength === 2
        case 'FitH':
        case 'FitBH':
        case 'FitV':
        case 'FitBV':
          if (destLength !== 3) {
            return false
          }
          break
        case 'FitR':
          if (destLength !== 6) {
            return false
          }
          allowNull = false
          break
        default:
          return false
      }
      for (let i = 2; i < destLength; i++) {
        const param = dest[i]
        if (!(typeof param === 'number' || allowNull && param === null)) {
          return false
        }
      }
      return true
    }

    const SimpleLinkService = (function () {
      function SimpleLinkService () {
        _classCallCheck(this, SimpleLinkService)
      }

      _createClass(SimpleLinkService, [{
        key: 'navigateTo',
        value: function navigateTo (dest) {}
      }, {
        key: 'getDestinationHash',
        value: function getDestinationHash (dest) {
          return '#'
        }
      }, {
        key: 'getAnchorUrl',
        value: function getAnchorUrl (hash) {
          return '#'
        }
      }, {
        key: 'setHash',
        value: function setHash (hash) {}
      }, {
        key: 'executeNamedAction',
        value: function executeNamedAction (action) {}
      }, {
        key: 'onFileAttachmentAnnotation',
        value: function onFileAttachmentAnnotation (_ref4) {
          const id = _ref4.id
          const filename = _ref4.filename
          const content = _ref4.content
        }
      }, {
        key: 'cachePageRef',
        value: function cachePageRef (pageNum, pageRef) {}
      }, {
        key: 'page',
        get: function get () {
          return 0
        },
        set: function set (value) {}
      }])

      return SimpleLinkService
    }())

    exports.PDFLinkService = PDFLinkService
    exports.SimpleLinkService = SimpleLinkService
    /***/ },
  /* 6 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFCursorTools = exports.CursorTool = undefined

    const _slicedToArray = (function () { function sliceIterator (arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break } } } catch (err) { _d = true; _e = err } finally { try { if (!_n && _i.return) { _i.return() } } finally { if (_d) { throw _e } } } return _arr } return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } } }())

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _grab_to_pan = __webpack_require__(14)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const CursorTool = {
      SELECT: 0,
      HAND: 1,
      ZOOM: 2
    }

    const PDFCursorTools = (function () {
      function PDFCursorTools (_ref) {
        const _this = this

        const container = _ref.container
        const eventBus = _ref.eventBus
        const preferences = _ref.preferences

        _classCallCheck(this, PDFCursorTools)

        this.container = container
        this.eventBus = eventBus
        this.active = CursorTool.SELECT
        this.activeBeforePresentationMode = null
        this.handTool = new _grab_to_pan.GrabToPan({ element: this.container })
        this._addEventListeners()
        Promise.all([preferences.get('cursorToolOnLoad'), preferences.get('enableHandToolOnLoad')]).then(function (_ref2) {
          const _ref3 = _slicedToArray(_ref2, 2)
          let cursorToolPref = _ref3[0]
          const handToolPref = _ref3[1]

          if (handToolPref === true) {
            preferences.set('enableHandToolOnLoad', false)
            if (cursorToolPref === CursorTool.SELECT) {
              cursorToolPref = CursorTool.HAND
              preferences.set('cursorToolOnLoad', cursorToolPref).catch(function () {})
            }
          }
          _this.switchTool(cursorToolPref)
        }).catch(function () {})
      }

      _createClass(PDFCursorTools, [{
        key: 'switchTool',
        value: function switchTool (tool) {
          const _this2 = this

          if (this.activeBeforePresentationMode !== null) {
            return
          }
          if (tool === this.active) {
            return
          }
          const disableActiveTool = function disableActiveTool () {
            switch (_this2.active) {
              case CursorTool.SELECT:
                break
              case CursorTool.HAND:
                _this2.handTool.deactivate()
                break
              case CursorTool.ZOOM:
            }
          }
          switch (tool) {
            case CursorTool.SELECT:
              disableActiveTool()
              break
            case CursorTool.HAND:
              disableActiveTool()
              this.handTool.activate()
              break
            case CursorTool.ZOOM:
            default:
              console.error('switchTool: "' + tool + '" is an unsupported value.')
              return
          }
          this.active = tool
          this._dispatchEvent()
        }
      }, {
        key: '_dispatchEvent',
        value: function _dispatchEvent () {
          this.eventBus.dispatch('cursortoolchanged', {
            source: this,
            tool: this.active
          })
        }
      }, {
        key: '_addEventListeners',
        value: function _addEventListeners () {
          const _this3 = this

          this.eventBus.on('switchcursortool', function (evt) {
            _this3.switchTool(evt.tool)
          })
          this.eventBus.on('presentationmodechanged', function (evt) {
            if (evt.switchInProgress) {
              return
            }
            let previouslyActive = void 0
            if (evt.active) {
              previouslyActive = _this3.active
              _this3.switchTool(CursorTool.SELECT)
              _this3.activeBeforePresentationMode = previouslyActive
            } else {
              previouslyActive = _this3.activeBeforePresentationMode
              _this3.activeBeforePresentationMode = null
              _this3.switchTool(previouslyActive)
            }
          })
        }
      }, {
        key: 'activeTool',
        get: function get () {
          return this.active
        }
      }])

      return PDFCursorTools
    }())

    exports.CursorTool = CursorTool
    exports.PDFCursorTools = PDFCursorTools
    /***/ },
  /* 7 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFFindController = exports.FindState = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const FindState = {
      FOUND: 0,
      NOT_FOUND: 1,
      WRAPPED: 2,
      PENDING: 3
    }
    const FIND_SCROLL_OFFSET_TOP = -50
    const FIND_SCROLL_OFFSET_LEFT = -400
    const FIND_TIMEOUT = 250
    const CHARACTERS_TO_NORMALIZE = {
      '\u2018': '\'',
      '\u2019': '\'',
      '\u201A': '\'',
      '\u201B': '\'',
      '\u201C': '"',
      '\u201D': '"',
      '\u201E': '"',
      '\u201F': '"',
      '\xBC': '1/4',
      '\xBD': '1/2',
      '\xBE': '3/4'
    }

    const PDFFindController = (function () {
      function PDFFindController (_ref) {
        const pdfViewer = _ref.pdfViewer

        _classCallCheck(this, PDFFindController)

        this.pdfViewer = pdfViewer
        this.onUpdateResultsCount = null
        this.onUpdateState = null
        this.reset()
        const replace = Object.keys(CHARACTERS_TO_NORMALIZE).join('')
        this.normalizationRegex = new RegExp('[' + replace + ']', 'g')
      }

      _createClass(PDFFindController, [{
        key: 'reset',
        value: function reset () {
          const _this = this

          this.startedTextExtraction = false
          this.extractTextPromises = []
          this.pendingFindMatches = Object.create(null)
          this.active = false
          this.pageContents = []
          this.pageMatches = []
          this.pageMatchesLength = null
          this.matchCount = 0
          this.selected = {
            pageIdx: -1,
            matchIdx: -1
          }
          this.offset = {
            pageIdx: null,
            matchIdx: null
          }
          this.pagesToSearch = null
          this.resumePageIdx = null
          this.state = null
          this.dirtyMatch = false
          this.findTimeout = null
          this._firstPagePromise = new Promise(function (resolve) {
            _this.resolveFirstPage = resolve
          })
        }
      }, {
        key: 'normalize',
        value: function normalize (text) {
          return text.replace(this.normalizationRegex, function (ch) {
            return CHARACTERS_TO_NORMALIZE[ch]
          })
        }
      }, {
        key: '_prepareMatches',
        value: function _prepareMatches (matchesWithLength, matches, matchesLength) {
          function isSubTerm (matchesWithLength, currentIndex) {
            const currentElem = matchesWithLength[currentIndex]
            const nextElem = matchesWithLength[currentIndex + 1]
            if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
              currentElem.skipped = true
              return true
            }
            for (let i = currentIndex - 1; i >= 0; i--) {
              const prevElem = matchesWithLength[i]
              if (prevElem.skipped) {
                continue
              }
              if (prevElem.match + prevElem.matchLength < currentElem.match) {
                break
              }
              if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
                currentElem.skipped = true
                return true
              }
            }
            return false
          }
          matchesWithLength.sort(function (a, b) {
            return a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match
          })
          for (let i = 0, len = matchesWithLength.length; i < len; i++) {
            if (isSubTerm(matchesWithLength, i)) {
              continue
            }
            matches.push(matchesWithLength[i].match)
            matchesLength.push(matchesWithLength[i].matchLength)
          }
        }
      }, {
        key: 'calcFindPhraseMatch',
        value: function calcFindPhraseMatch (query, pageIndex, pageContent) {
          const matches = []
          const queryLen = query.length
          let matchIdx = -queryLen
          while (true) {
            matchIdx = pageContent.indexOf(query, matchIdx + queryLen)
            if (matchIdx === -1) {
              break
            }
            matches.push(matchIdx)
          }
          this.pageMatches[pageIndex] = matches
        }
      }, {
        key: 'calcFindWordMatch',
        value: function calcFindWordMatch (query, pageIndex, pageContent) {
          const matchesWithLength = []
          const queryArray = query.match(/\S+/g)
          for (let i = 0, len = queryArray.length; i < len; i++) {
            const subquery = queryArray[i]
            const subqueryLen = subquery.length
            let matchIdx = -subqueryLen
            while (true) {
              matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen)
              if (matchIdx === -1) {
                break
              }
              matchesWithLength.push({
                match: matchIdx,
                matchLength: subqueryLen,
                skipped: false
              })
            }
          }
          if (!this.pageMatchesLength) {
            this.pageMatchesLength = []
          }
          this.pageMatchesLength[pageIndex] = []
          this.pageMatches[pageIndex] = []
          this._prepareMatches(matchesWithLength, this.pageMatches[pageIndex], this.pageMatchesLength[pageIndex])
        }
      }, {
        key: 'calcFindMatch',
        value: function calcFindMatch (pageIndex) {
          let pageContent = this.normalize(this.pageContents[pageIndex])
          let query = this.normalize(this.state.query)
          const caseSensitive = this.state.caseSensitive
          const phraseSearch = this.state.phraseSearch
          const queryLen = query.length
          if (queryLen === 0) {
            return
          }
          if (!caseSensitive) {
            pageContent = pageContent.toLowerCase()
            query = query.toLowerCase()
          }
          if (phraseSearch) {
            this.calcFindPhraseMatch(query, pageIndex, pageContent)
          } else {
            this.calcFindWordMatch(query, pageIndex, pageContent)
          }
          this.updatePage(pageIndex)
          if (this.resumePageIdx === pageIndex) {
            this.resumePageIdx = null
            this.nextPageMatch()
          }
          if (this.pageMatches[pageIndex].length > 0) {
            this.matchCount += this.pageMatches[pageIndex].length
            this.updateUIResultsCount()
          }
        }
      }, {
        key: 'extractText',
        value: function extractText () {
          const _this2 = this

          if (this.startedTextExtraction) {
            return
          }
          this.startedTextExtraction = true
          this.pageContents.length = 0
          let promise = Promise.resolve()

          const _loop = function _loop (i, ii) {
            const extractTextCapability = (0, _pdfjsLib.createPromiseCapability)()
            _this2.extractTextPromises[i] = extractTextCapability.promise
            promise = promise.then(function () {
              return _this2.pdfViewer.getPageTextContent(i).then(function (textContent) {
                const textItems = textContent.items
                const strBuf = []
                for (let j = 0, jj = textItems.length; j < jj; j++) {
                  strBuf.push(textItems[j].str)
                }
                _this2.pageContents[i] = strBuf.join('')
                extractTextCapability.resolve(i)
              }, function (reason) {
                console.error('Unable to get page ' + (i + 1) + ' text content', reason)
                _this2.pageContents[i] = ''
                extractTextCapability.resolve(i)
              })
            })
          }

          for (let i = 0, ii = this.pdfViewer.pagesCount; i < ii; i++) {
            _loop(i, ii)
          }
        }
      }, {
        key: 'executeCommand',
        value: function executeCommand (cmd, state) {
          const _this3 = this

          if (this.state === null || cmd !== 'findagain') {
            this.dirtyMatch = true
          }
          this.state = state
          this.updateUIState(FindState.PENDING)
          this._firstPagePromise.then(function () {
            _this3.extractText()
            clearTimeout(_this3.findTimeout)
            if (cmd === 'find') {
              _this3.findTimeout = setTimeout(_this3.nextMatch.bind(_this3), FIND_TIMEOUT)
            } else {
              _this3.nextMatch()
            }
          })
        }
      }, {
        key: 'updatePage',
        value: function updatePage (index) {
          if (this.selected.pageIdx === index) {
            this.pdfViewer.currentPageNumber = index + 1
          }
          const page = this.pdfViewer.getPageView(index)
          if (page.textLayer) {
            page.textLayer.updateMatches()
          }
        }
      }, {
        key: 'nextMatch',
        value: function nextMatch () {
          const _this4 = this

          const previous = this.state.findPrevious
          const currentPageIndex = this.pdfViewer.currentPageNumber - 1
          const numPages = this.pdfViewer.pagesCount
          this.active = true
          if (this.dirtyMatch) {
            this.dirtyMatch = false
            this.selected.pageIdx = this.selected.matchIdx = -1
            this.offset.pageIdx = currentPageIndex
            this.offset.matchIdx = null
            this.hadMatch = false
            this.resumePageIdx = null
            this.pageMatches = []
            this.matchCount = 0
            this.pageMatchesLength = null
            for (let i = 0; i < numPages; i++) {
              this.updatePage(i)
              if (!(i in this.pendingFindMatches)) {
                this.pendingFindMatches[i] = true
                this.extractTextPromises[i].then(function (pageIdx) {
                  delete _this4.pendingFindMatches[pageIdx]
                  _this4.calcFindMatch(pageIdx)
                })
              }
            }
          }
          if (this.state.query === '') {
            this.updateUIState(FindState.FOUND)
            return
          }
          if (this.resumePageIdx) {
            return
          }
          const offset = this.offset
          this.pagesToSearch = numPages
          if (offset.matchIdx !== null) {
            const numPageMatches = this.pageMatches[offset.pageIdx].length
            if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
              this.hadMatch = true
              offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1
              this.updateMatch(true)
              return
            }
            this.advanceOffsetPage(previous)
          }
          this.nextPageMatch()
        }
      }, {
        key: 'matchesReady',
        value: function matchesReady (matches) {
          const offset = this.offset
          const numMatches = matches.length
          const previous = this.state.findPrevious
          if (numMatches) {
            this.hadMatch = true
            offset.matchIdx = previous ? numMatches - 1 : 0
            this.updateMatch(true)
            return true
          }
          this.advanceOffsetPage(previous)
          if (offset.wrapped) {
            offset.matchIdx = null
            if (this.pagesToSearch < 0) {
              this.updateMatch(false)
              return true
            }
          }
          return false
        }
      }, {
        key: 'updateMatchPosition',
        value: function updateMatchPosition (pageIndex, matchIndex, elements, beginIdx) {
          if (this.selected.matchIdx === matchIndex && this.selected.pageIdx === pageIndex) {
            const spot = {
              top: FIND_SCROLL_OFFSET_TOP,
              left: FIND_SCROLL_OFFSET_LEFT
            };
            (0, _ui_utils.scrollIntoView)(elements[beginIdx], spot, true)
          }
        }
      }, {
        key: 'nextPageMatch',
        value: function nextPageMatch () {
          if (this.resumePageIdx !== null) {
            console.error('There can only be one pending page.')
          }
          let matches = null
          do {
            const pageIdx = this.offset.pageIdx
            matches = this.pageMatches[pageIdx]
            if (!matches) {
              this.resumePageIdx = pageIdx
              break
            }
          } while (!this.matchesReady(matches))
        }
      }, {
        key: 'advanceOffsetPage',
        value: function advanceOffsetPage (previous) {
          const offset = this.offset
          const numPages = this.extractTextPromises.length
          offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1
          offset.matchIdx = null
          this.pagesToSearch--
          if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
            offset.pageIdx = previous ? numPages - 1 : 0
            offset.wrapped = true
          }
        }
      }, {
        key: 'updateMatch',
        value: function updateMatch () {
          const found = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          let state = FindState.NOT_FOUND
          const wrapped = this.offset.wrapped
          this.offset.wrapped = false
          if (found) {
            const previousPage = this.selected.pageIdx
            this.selected.pageIdx = this.offset.pageIdx
            this.selected.matchIdx = this.offset.matchIdx
            state = wrapped ? FindState.WRAPPED : FindState.FOUND
            if (previousPage !== -1 && previousPage !== this.selected.pageIdx) {
              this.updatePage(previousPage)
            }
          }
          this.updateUIState(state, this.state.findPrevious)
          if (this.selected.pageIdx !== -1) {
            this.updatePage(this.selected.pageIdx)
          }
        }
      }, {
        key: 'updateUIResultsCount',
        value: function updateUIResultsCount () {
          if (this.onUpdateResultsCount) {
            this.onUpdateResultsCount(this.matchCount)
          }
        }
      }, {
        key: 'updateUIState',
        value: function updateUIState (state, previous) {
          if (this.onUpdateState) {
            this.onUpdateState(state, previous, this.matchCount)
          }
        }
      }])

      return PDFFindController
    }())

    exports.FindState = FindState
    exports.PDFFindController = PDFFindController
    /***/ },
  /* 8 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.GenericCom = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _app = __webpack_require__(4)

    const _preferences = __webpack_require__(28)

    const _download_manager = __webpack_require__(12)

    const _genericl10n = __webpack_require__(13)

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass } }

    ;
    const GenericCom = {}

    const GenericPreferences = (function (_BasePreferences) {
      _inherits(GenericPreferences, _BasePreferences)

      function GenericPreferences () {
        _classCallCheck(this, GenericPreferences)

        return _possibleConstructorReturn(this, (GenericPreferences.__proto__ || Object.getPrototypeOf(GenericPreferences)).apply(this, arguments))
      }

      _createClass(GenericPreferences, [{
        key: '_writeToStorage',
        value: function _writeToStorage (prefObj) {
          return new Promise(function (resolve) {
            localStorage.setItem('pdfjs.preferences', JSON.stringify(prefObj))
            resolve()
          })
        }
      }, {
        key: '_readFromStorage',
        value: function _readFromStorage (prefObj) {
          return new Promise(function (resolve) {
            const readPrefs = JSON.parse(localStorage.getItem('pdfjs.preferences'))
            resolve(readPrefs)
          })
        }
      }])

      return GenericPreferences
    }(_preferences.BasePreferences))

    const GenericExternalServices = Object.create(_app.DefaultExternalServices)
    GenericExternalServices.createDownloadManager = function () {
      return new _download_manager.DownloadManager()
    }
    GenericExternalServices.createPreferences = function () {
      return new GenericPreferences()
    }
    GenericExternalServices.createL10n = function () {
      return new _genericl10n.GenericL10n(_pdfjsLib.PDFJS.locale)
    }
    _app.PDFViewerApplication.externalServices = GenericExternalServices
    exports.GenericCom = GenericCom
    /***/ },
  /* 9 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFPrintService = undefined

    const _ui_utils = __webpack_require__(0)

    const _app = __webpack_require__(4)

    const _pdfjsLib = __webpack_require__(1)

    let activeService = null
    let overlayManager = null
    function renderPage (activeServiceOnEntry, pdfDocument, pageNumber, size) {
      const scratchCanvas = activeService.scratchCanvas
      const PRINT_RESOLUTION = 150
      const PRINT_UNITS = PRINT_RESOLUTION / 72.0
      scratchCanvas.width = Math.floor(size.width * PRINT_UNITS)
      scratchCanvas.height = Math.floor(size.height * PRINT_UNITS)
      const width = Math.floor(size.width * _ui_utils.CSS_UNITS) + 'px'
      const height = Math.floor(size.height * _ui_utils.CSS_UNITS) + 'px'
      const ctx = scratchCanvas.getContext('2d')
      ctx.save()
      ctx.fillStyle = 'rgb(255, 255, 255)'
      ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height)
      ctx.restore()
      return pdfDocument.getPage(pageNumber).then(function (pdfPage) {
        const renderContext = {
          canvasContext: ctx,
          transform: [PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
          viewport: pdfPage.getViewport(1, size.rotation),
          intent: 'print'
        }
        return pdfPage.render(renderContext).promise
      }).then(function () {
        return {
          width,
          height
        }
      })
    }
    function PDFPrintService (pdfDocument, pagesOverview, printContainer, l10n) {
      this.pdfDocument = pdfDocument
      this.pagesOverview = pagesOverview
      this.printContainer = printContainer
      this.l10n = l10n || _ui_utils.NullL10n
      this.currentPage = -1
      this.scratchCanvas = document.createElement('canvas')
    }
    PDFPrintService.prototype = {
      layout: function layout () {
        this.throwIfInactive()
        const body = document.querySelector('body')
        body.setAttribute('data-pdfjsprinting', true)
        const hasEqualPageSizes = this.pagesOverview.every(function (size) {
          return size.width === this.pagesOverview[0].width && size.height === this.pagesOverview[0].height
        }, this)
        if (!hasEqualPageSizes) {
          console.warn('Not all pages have the same size. The printed ' + 'result may be incorrect!')
        }
        this.pageStyleSheet = document.createElement('style')
        const pageSize = this.pagesOverview[0]
        this.pageStyleSheet.textContent = '@supports ((size:A4) and (size:1pt 1pt)) {' + '@page { size: ' + pageSize.width + 'pt ' + pageSize.height + 'pt;}' + '}'
        body.appendChild(this.pageStyleSheet)
      },
      destroy: function destroy () {
        if (activeService !== this) {
          return
        }
        this.printContainer.textContent = ''
        if (this.pageStyleSheet && this.pageStyleSheet.parentNode) {
          this.pageStyleSheet.parentNode.removeChild(this.pageStyleSheet)
          this.pageStyleSheet = null
        }
        this.scratchCanvas.width = this.scratchCanvas.height = 0
        this.scratchCanvas = null
        activeService = null
        ensureOverlay().then(function () {
          if (overlayManager.active !== 'printServiceOverlay') {
            return
          }
          overlayManager.close('printServiceOverlay')
        })
      },
      renderPages: function renderPages () {
        const _this = this

        const pageCount = this.pagesOverview.length
        const renderNextPage = function renderNextPage (resolve, reject) {
          _this.throwIfInactive()
          if (++_this.currentPage >= pageCount) {
            renderProgress(pageCount, pageCount, _this.l10n)
            resolve()
            return
          }
          const index = _this.currentPage
          renderProgress(index, pageCount, _this.l10n)
          renderPage(_this, _this.pdfDocument, index + 1, _this.pagesOverview[index]).then(_this.useRenderedPage.bind(_this)).then(function () {
            renderNextPage(resolve, reject)
          }, reject)
        }
        return new Promise(renderNextPage)
      },
      useRenderedPage: function useRenderedPage (printItem) {
        this.throwIfInactive()
        const img = document.createElement('img')
        img.style.width = printItem.width
        img.style.height = printItem.height
        const scratchCanvas = this.scratchCanvas
        if ('toBlob' in scratchCanvas && !_pdfjsLib.PDFJS.disableCreateObjectURL) {
          scratchCanvas.toBlob(function (blob) {
            img.src = URL.createObjectURL(blob)
          })
        } else {
          img.src = scratchCanvas.toDataURL()
        }
        const wrapper = document.createElement('div')
        wrapper.appendChild(img)
        this.printContainer.appendChild(wrapper)
        return new Promise(function (resolve, reject) {
          img.onload = resolve
          img.onerror = reject
        })
      },
      performPrint: function performPrint () {
        const _this2 = this

        this.throwIfInactive()
        return new Promise(function (resolve) {
          setTimeout(function () {
            if (!_this2.active) {
              resolve()
              return
            }
            print.call(window)
            setTimeout(resolve, 20)
          }, 0)
        })
      },

      get active () {
        return this === activeService
      },
      throwIfInactive: function throwIfInactive () {
        if (!this.active) {
          throw new Error('This print request was cancelled or completed.')
        }
      }
    }
    var print = window.print
    window.print = function print () {
      if (activeService) {
        console.warn('Ignored window.print() because of a pending print job.')
        return
      }
      ensureOverlay().then(function () {
        if (activeService) {
          overlayManager.open('printServiceOverlay')
        }
      })
      try {
        dispatchEvent('beforeprint')
      } finally {
        if (!activeService) {
          console.error('Expected print service to be initialized.')
          ensureOverlay().then(function () {
            if (overlayManager.active === 'printServiceOverlay') {
              overlayManager.close('printServiceOverlay')
            }
          })
          return
        }
        const activeServiceOnEntry = activeService
        activeService.renderPages().then(function () {
          return activeServiceOnEntry.performPrint()
        }).catch(function () {}).then(function () {
          if (activeServiceOnEntry.active) {
            abort()
          }
        })
      }
    }
    function dispatchEvent (eventType) {
      const event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventType, false, false, 'custom')
      window.dispatchEvent(event)
    }
    function abort () {
      if (activeService) {
        activeService.destroy()
        dispatchEvent('afterprint')
      }
    }
    function renderProgress (index, total, l10n) {
      const progressContainer = document.getElementById('printServiceOverlay')
      const progress = Math.round(100 * index / total)
      const progressBar = progressContainer.querySelector('progress')
      const progressPerc = progressContainer.querySelector('.relative-progress')
      progressBar.value = progress
      l10n.get('print_progress_percent', { progress }, progress + '%').then(function (msg) {
        progressPerc.textContent = msg
      })
    }
    const hasAttachEvent = !!document.attachEvent
    window.addEventListener('keydown', function (event) {
      if (event.keyCode === 80 && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) {
        window.print()
        if (hasAttachEvent) {
          return
        }
        event.preventDefault()
        if (event.stopImmediatePropagation) {
          event.stopImmediatePropagation()
        } else {
          event.stopPropagation()
        }
      }
    }, true)
    if (hasAttachEvent) {
      document.attachEvent('onkeydown', function (event) {
        event = event || window.event
        if (event.keyCode === 80 && event.ctrlKey) {
          event.keyCode = 0
          return false
        }
      })
    }
    if ('onbeforeprint' in window) {
      const stopPropagationIfNeeded = function stopPropagationIfNeeded (event) {
        if (event.detail !== 'custom' && event.stopImmediatePropagation) {
          event.stopImmediatePropagation()
        }
      }
      window.addEventListener('beforeprint', stopPropagationIfNeeded)
      window.addEventListener('afterprint', stopPropagationIfNeeded)
    }
    let overlayPromise
    function ensureOverlay () {
      if (!overlayPromise) {
        overlayManager = _app.PDFViewerApplication.overlayManager
        if (!overlayManager) {
          throw new Error('The overlay manager has not yet been initialized.')
        }
        overlayPromise = overlayManager.register('printServiceOverlay', document.getElementById('printServiceOverlay'), abort, true)
        document.getElementById('printCancel').onclick = abort
      }
      return overlayPromise
    }
    _app.PDFPrintServiceFactory.instance = {
      supportsPrinting: true,
      createPrintService: function createPrintService (pdfDocument, pagesOverview, printContainer, l10n) {
        if (activeService) {
          throw new Error('The print service is created and active.')
        }
        activeService = new PDFPrintService(pdfDocument, pagesOverview, printContainer, l10n)
        return activeService
      }
    }
    exports.PDFPrintService = PDFPrintService
    /***/ },
  /* 10 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    document.webL10n = (function (window, document, undefined) {
      let gL10nData = {}
      let gTextData = ''
      const gTextProp = 'textContent'
      let gLanguage = ''
      const gMacros = {}
      let gReadyState = 'loading'
      const gAsyncResourceLoading = true
      function getL10nResourceLinks () {
        return document.querySelectorAll('link[type="application/l10n"]')
      }
      function getL10nDictionary () {
        const script = document.querySelector('script[type="application/l10n"]')
        return script ? JSON.parse(script.innerHTML) : null
      }
      function getTranslatableChildren (element) {
        return element ? element.querySelectorAll('*[data-l10n-id]') : []
      }
      function getL10nAttributes (element) {
        if (!element) { return {} }
        const l10nId = element.getAttribute('data-l10n-id')
        const l10nArgs = element.getAttribute('data-l10n-args')
        let args = {}
        if (l10nArgs) {
          try {
            args = JSON.parse(l10nArgs)
          } catch (e) {
            console.warn('could not parse arguments for #' + l10nId)
          }
        }
        return {
          id: l10nId,
          args
        }
      }
      function fireL10nReadyEvent (lang) {
        const evtObject = document.createEvent('Event')
        evtObject.initEvent('localized', true, false)
        evtObject.language = lang
        document.dispatchEvent(evtObject)
      }
      function xhrLoadText (url, onSuccess, onFailure) {
        onSuccess = onSuccess || function _onSuccess (data) {}
        onFailure = onFailure || function _onFailure () {}
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, gAsyncResourceLoading)
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType('text/plain; charset=utf-8')
        }
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status === 0) {
              onSuccess(xhr.responseText)
            } else {
              onFailure()
            }
          }
        }
        xhr.onerror = onFailure
        xhr.ontimeout = onFailure
        try {
          xhr.send(null)
        } catch (e) {
          onFailure()
        }
      }
      function parseResource (href, lang, successCallback, failureCallback) {
        const baseURL = href.replace(/[^\/]*$/, '') || './'
        function evalString (text) {
          if (text.lastIndexOf('\\') < 0) { return text }
          return text.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\b/g, '\b').replace(/\\f/g, '\f').replace(/\\{/g, '{').replace(/\\}/g, '}').replace(/\\"/g, '"').replace(/\\'/g, "'")
        }
        function parseProperties (text, parsedPropertiesCallback) {
          const dictionary = {}
          const reBlank = /^\s*|\s*$/
          const reComment = /^\s*#|^\s*$/
          const reSection = /^\s*\[(.*)\]\s*$/
          const reImport = /^\s*@import\s+url\((.*)\)\s*$/i
          const reSplit = /^([^=\s]*)\s*=\s*(.+)$/
          function parseRawLines (rawText, extendedSyntax, parsedRawLinesCallback) {
            const entries = rawText.replace(reBlank, '').split(/[\r\n]+/)
            let currentLang = '*'
            const genericLang = lang.split('-', 1)[0]
            let skipLang = false
            let match = ''
            function nextEntry () {
              while (true) {
                if (!entries.length) {
                  parsedRawLinesCallback()
                  return
                }
                const line = entries.shift()
                if (reComment.test(line)) { continue }
                if (extendedSyntax) {
                  match = reSection.exec(line)
                  if (match) {
                    currentLang = match[1].toLowerCase()
                    skipLang = currentLang !== '*' && currentLang !== lang && currentLang !== genericLang
                    continue
                  } else if (skipLang) {
                    continue
                  }
                  match = reImport.exec(line)
                  if (match) {
                    loadImport(baseURL + match[1], nextEntry)
                    return
                  }
                }
                const tmp = line.match(reSplit)
                if (tmp && tmp.length == 3) {
                  dictionary[tmp[1]] = evalString(tmp[2])
                }
              }
            }
            nextEntry()
          }
          function loadImport (url, callback) {
            xhrLoadText(url, function (content) {
              parseRawLines(content, false, callback)
            }, function () {
              console.warn(url + ' not found.')
              callback()
            })
          }
          parseRawLines(text, true, function () {
            parsedPropertiesCallback(dictionary)
          })
        }
        xhrLoadText(href, function (response) {
          gTextData += response
          parseProperties(response, function (data) {
            for (const key in data) {
              var id
              var prop
              const index = key.lastIndexOf('.')
              if (index > 0) {
                id = key.substring(0, index)
                prop = key.substr(index + 1)
              } else {
                id = key
                prop = gTextProp
              }
              if (!gL10nData[id]) {
                gL10nData[id] = {}
              }
              gL10nData[id][prop] = data[key]
            }
            if (successCallback) {
              successCallback()
            }
          })
        }, failureCallback)
      }
      function loadLocale (lang, callback) {
        if (lang) {
          lang = lang.toLowerCase()
        }
        callback = callback || function _callback () {}
        clear()
        gLanguage = lang
        const langLinks = getL10nResourceLinks()
        const langCount = langLinks.length
        if (langCount === 0) {
          const dict = getL10nDictionary()
          if (dict && dict.locales && dict.default_locale) {
            console.log('using the embedded JSON directory, early way out')
            gL10nData = dict.locales[lang]
            if (!gL10nData) {
              const defaultLocale = dict.default_locale.toLowerCase()
              for (let anyCaseLang in dict.locales) {
                anyCaseLang = anyCaseLang.toLowerCase()
                if (anyCaseLang === lang) {
                  gL10nData = dict.locales[lang]
                  break
                } else if (anyCaseLang === defaultLocale) {
                  gL10nData = dict.locales[defaultLocale]
                }
              }
            }
            callback()
          } else {
            console.log('no resource to load, early way out')
          }
          fireL10nReadyEvent(lang)
          gReadyState = 'complete'
          return
        }
        let onResourceLoaded = null
        let gResourceCount = 0
        onResourceLoaded = function onResourceLoaded () {
          gResourceCount++
          if (gResourceCount >= langCount) {
            callback()
            fireL10nReadyEvent(lang)
            gReadyState = 'complete'
          }
        }
        function L10nResourceLink (link) {
          const href = link.href
          this.load = function (lang, callback) {
            parseResource(href, lang, callback, function () {
              console.warn(href + ' not found.')
              console.warn('"' + lang + '" resource not found')
              gLanguage = ''
              callback()
            })
          }
        }
        for (let i = 0; i < langCount; i++) {
          const resource = new L10nResourceLink(langLinks[i])
          resource.load(lang, onResourceLoaded)
        }
      }
      function clear () {
        gL10nData = {}
        gTextData = ''
        gLanguage = ''
      }
      function getPluralRules (lang) {
        const locales2rules = {
          af: 3,
          ak: 4,
          am: 4,
          ar: 1,
          asa: 3,
          az: 0,
          be: 11,
          bem: 3,
          bez: 3,
          bg: 3,
          bh: 4,
          bm: 0,
          bn: 3,
          bo: 0,
          br: 20,
          brx: 3,
          bs: 11,
          ca: 3,
          cgg: 3,
          chr: 3,
          cs: 12,
          cy: 17,
          da: 3,
          de: 3,
          dv: 3,
          dz: 0,
          ee: 3,
          el: 3,
          en: 3,
          eo: 3,
          es: 3,
          et: 3,
          eu: 3,
          fa: 0,
          ff: 5,
          fi: 3,
          fil: 4,
          fo: 3,
          fr: 5,
          fur: 3,
          fy: 3,
          ga: 8,
          gd: 24,
          gl: 3,
          gsw: 3,
          gu: 3,
          guw: 4,
          gv: 23,
          ha: 3,
          haw: 3,
          he: 2,
          hi: 4,
          hr: 11,
          hu: 0,
          id: 0,
          ig: 0,
          ii: 0,
          is: 3,
          it: 3,
          iu: 7,
          ja: 0,
          jmc: 3,
          jv: 0,
          ka: 0,
          kab: 5,
          kaj: 3,
          kcg: 3,
          kde: 0,
          kea: 0,
          kk: 3,
          kl: 3,
          km: 0,
          kn: 0,
          ko: 0,
          ksb: 3,
          ksh: 21,
          ku: 3,
          kw: 7,
          lag: 18,
          lb: 3,
          lg: 3,
          ln: 4,
          lo: 0,
          lt: 10,
          lv: 6,
          mas: 3,
          mg: 4,
          mk: 16,
          ml: 3,
          mn: 3,
          mo: 9,
          mr: 3,
          ms: 0,
          mt: 15,
          my: 0,
          nah: 3,
          naq: 7,
          nb: 3,
          nd: 3,
          ne: 3,
          nl: 3,
          nn: 3,
          no: 3,
          nr: 3,
          nso: 4,
          ny: 3,
          nyn: 3,
          om: 3,
          or: 3,
          pa: 3,
          pap: 3,
          pl: 13,
          ps: 3,
          pt: 3,
          rm: 3,
          ro: 9,
          rof: 3,
          ru: 11,
          rwk: 3,
          sah: 0,
          saq: 3,
          se: 7,
          seh: 3,
          ses: 0,
          sg: 0,
          sh: 11,
          shi: 19,
          sk: 12,
          sl: 14,
          sma: 7,
          smi: 7,
          smj: 7,
          smn: 7,
          sms: 7,
          sn: 3,
          so: 3,
          sq: 3,
          sr: 11,
          ss: 3,
          ssy: 3,
          st: 3,
          sv: 3,
          sw: 3,
          syr: 3,
          ta: 3,
          te: 3,
          teo: 3,
          th: 0,
          ti: 4,
          tig: 3,
          tk: 3,
          tl: 4,
          tn: 3,
          to: 0,
          tr: 0,
          ts: 3,
          tzm: 22,
          uk: 11,
          ur: 3,
          ve: 3,
          vi: 0,
          vun: 3,
          wa: 4,
          wae: 3,
          wo: 0,
          xh: 3,
          xog: 3,
          yo: 0,
          zh: 0,
          zu: 3
        }
        function isIn (n, list) {
          return list.includes(n)
        }
        function isBetween (n, start, end) {
          return start <= n && n <= end
        }
        const pluralRules = {
          0: function _ (n) {
            return 'other'
          },
          1: function _ (n) {
            if (isBetween(n % 100, 3, 10)) { return 'few' }
            if (n === 0) { return 'zero' }
            if (isBetween(n % 100, 11, 99)) { return 'many' }
            if (n == 2) { return 'two' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          2: function _ (n) {
            if (n !== 0 && n % 10 === 0) { return 'many' }
            if (n == 2) { return 'two' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          3: function _ (n) {
            if (n == 1) { return 'one' }
            return 'other'
          },
          4: function _ (n) {
            if (isBetween(n, 0, 1)) { return 'one' }
            return 'other'
          },
          5: function _ (n) {
            if (isBetween(n, 0, 2) && n != 2) { return 'one' }
            return 'other'
          },
          6: function _ (n) {
            if (n === 0) { return 'zero' }
            if (n % 10 == 1 && n % 100 != 11) { return 'one' }
            return 'other'
          },
          7: function _ (n) {
            if (n == 2) { return 'two' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          8: function _ (n) {
            if (isBetween(n, 3, 6)) { return 'few' }
            if (isBetween(n, 7, 10)) { return 'many' }
            if (n == 2) { return 'two' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          9: function _ (n) {
            if (n === 0 || n != 1 && isBetween(n % 100, 1, 19)) { return 'few' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          10: function _ (n) {
            if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) { return 'few' }
            if (n % 10 == 1 && !isBetween(n % 100, 11, 19)) { return 'one' }
            return 'other'
          },
          11: function _ (n) {
            if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) { return 'few' }
            if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) { return 'many' }
            if (n % 10 == 1 && n % 100 != 11) { return 'one' }
            return 'other'
          },
          12: function _ (n) {
            if (isBetween(n, 2, 4)) { return 'few' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          13: function _ (n) {
            if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) { return 'few' }
            if (n != 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) { return 'many' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          14: function _ (n) {
            if (isBetween(n % 100, 3, 4)) { return 'few' }
            if (n % 100 == 2) { return 'two' }
            if (n % 100 == 1) { return 'one' }
            return 'other'
          },
          15: function _ (n) {
            if (n === 0 || isBetween(n % 100, 2, 10)) { return 'few' }
            if (isBetween(n % 100, 11, 19)) { return 'many' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          16: function _ (n) {
            if (n % 10 == 1 && n != 11) { return 'one' }
            return 'other'
          },
          17: function _ (n) {
            if (n == 3) { return 'few' }
            if (n === 0) { return 'zero' }
            if (n == 6) { return 'many' }
            if (n == 2) { return 'two' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          18: function _ (n) {
            if (n === 0) { return 'zero' }
            if (isBetween(n, 0, 2) && n !== 0 && n != 2) { return 'one' }
            return 'other'
          },
          19: function _ (n) {
            if (isBetween(n, 2, 10)) { return 'few' }
            if (isBetween(n, 0, 1)) { return 'one' }
            return 'other'
          },
          20: function _ (n) {
            if ((isBetween(n % 10, 3, 4) || n % 10 == 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) { return 'few' }
            if (n % 1000000 === 0 && n !== 0) { return 'many' }
            if (n % 10 == 2 && !isIn(n % 100, [12, 72, 92])) { return 'two' }
            if (n % 10 == 1 && !isIn(n % 100, [11, 71, 91])) { return 'one' }
            return 'other'
          },
          21: function _ (n) {
            if (n === 0) { return 'zero' }
            if (n == 1) { return 'one' }
            return 'other'
          },
          22: function _ (n) {
            if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) { return 'one' }
            return 'other'
          },
          23: function _ (n) {
            if (isBetween(n % 10, 1, 2) || n % 20 === 0) { return 'one' }
            return 'other'
          },
          24: function _ (n) {
            if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) { return 'few' }
            if (isIn(n, [2, 12])) { return 'two' }
            if (isIn(n, [1, 11])) { return 'one' }
            return 'other'
          }
        }
        const index = locales2rules[lang.replace(/-.*$/, '')]
        if (!(index in pluralRules)) {
          console.warn('plural form unknown for [' + lang + ']')
          return function () {
            return 'other'
          }
        }
        return pluralRules[index]
      }
      gMacros.plural = function (str, param, key, prop) {
        const n = parseFloat(param)
        if (isNaN(n)) { return str }
        if (prop != gTextProp) { return str }
        if (!gMacros._pluralRules) {
          gMacros._pluralRules = getPluralRules(gLanguage)
        }
        const index = '[' + gMacros._pluralRules(n) + ']'
        if (n === 0 && key + '[zero]' in gL10nData) {
          str = gL10nData[key + '[zero]'][prop]
        } else if (n == 1 && key + '[one]' in gL10nData) {
          str = gL10nData[key + '[one]'][prop]
        } else if (n == 2 && key + '[two]' in gL10nData) {
          str = gL10nData[key + '[two]'][prop]
        } else if (key + index in gL10nData) {
          str = gL10nData[key + index][prop]
        } else if (key + '[other]' in gL10nData) {
          str = gL10nData[key + '[other]'][prop]
        }
        return str
      }
      function getL10nData (key, args, fallback) {
        let data = gL10nData[key]
        if (!data) {
          console.warn('#' + key + ' is undefined.')
          if (!fallback) {
            return null
          }
          data = fallback
        }
        const rv = {}
        for (const prop in data) {
          let str = data[prop]
          str = substIndexes(str, args, key, prop)
          str = substArguments(str, args, key)
          rv[prop] = str
        }
        return rv
      }
      function substIndexes (str, args, key, prop) {
        const reIndex = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/
        const reMatch = reIndex.exec(str)
        if (!reMatch || !reMatch.length) { return str }
        const macroName = reMatch[1]
        const paramName = reMatch[2]
        let param
        if (args && paramName in args) {
          param = args[paramName]
        } else if (paramName in gL10nData) {
          param = gL10nData[paramName]
        }
        if (macroName in gMacros) {
          const macro = gMacros[macroName]
          str = macro(str, param, key, prop)
        }
        return str
      }
      function substArguments (str, args, key) {
        const reArgs = /\{\{\s*(.+?)\s*\}\}/g
        return str.replace(reArgs, function (matched_text, arg) {
          if (args && arg in args) {
            return args[arg]
          }
          if (arg in gL10nData) {
            return gL10nData[arg]
          }
          console.log('argument {{' + arg + '}} for #' + key + ' is undefined.')
          return matched_text
        })
      }
      function translateElement (element) {
        const l10n = getL10nAttributes(element)
        if (!l10n.id) { return }
        const data = getL10nData(l10n.id, l10n.args)
        if (!data) {
          console.warn('#' + l10n.id + ' is undefined.')
          return
        }
        if (data[gTextProp]) {
          if (getChildElementCount(element) === 0) {
            element[gTextProp] = data[gTextProp]
          } else {
            const children = element.childNodes
            let found = false
            for (let i = 0, l = children.length; i < l; i++) {
              if (children[i].nodeType === 3 && /\S/.test(children[i].nodeValue)) {
                if (found) {
                  children[i].nodeValue = ''
                } else {
                  children[i].nodeValue = data[gTextProp]
                  found = true
                }
              }
            }
            if (!found) {
              const textNode = document.createTextNode(data[gTextProp])
              element.insertBefore(textNode, element.firstChild)
            }
          }
          delete data[gTextProp]
        }
        for (const k in data) {
          element[k] = data[k]
        }
      }
      function getChildElementCount (element) {
        if (element.children) {
          return element.children.length
        }
        if (typeof element.childElementCount !== 'undefined') {
          return element.childElementCount
        }
        let count = 0
        for (let i = 0; i < element.childNodes.length; i++) {
          count += element.nodeType === 1 ? 1 : 0
        }
        return count
      }
      function translateFragment (element) {
        element = element || document.documentElement
        const children = getTranslatableChildren(element)
        const elementCount = children.length
        for (let i = 0; i < elementCount; i++) {
          translateElement(children[i])
        }
        translateElement(element)
      }
      return {
        get: function get (key, args, fallbackString) {
          const index = key.lastIndexOf('.')
          let prop = gTextProp
          if (index > 0) {
            prop = key.substr(index + 1)
            key = key.substring(0, index)
          }
          let fallback
          if (fallbackString) {
            fallback = {}
            fallback[prop] = fallbackString
          }
          const data = getL10nData(key, args, fallback)
          if (data && prop in data) {
            return data[prop]
          }
          return '{{' + key + '}}'
        },
        getData: function getData () {
          return gL10nData
        },
        getText: function getText () {
          return gTextData
        },
        getLanguage: function getLanguage () {
          return gLanguage
        },
        setLanguage: function setLanguage (lang, callback) {
          loadLocale(lang, function () {
            if (callback) { callback() }
          })
        },
        getDirection: function getDirection () {
          const rtlList = ['ar', 'he', 'fa', 'ps', 'ur']
          const shortCode = gLanguage.split('-', 1)[0]
          return rtlList.includes(shortCode) ? 'rtl' : 'ltr'
        },
        translate: translateFragment,
        getReadyState: function getReadyState () {
          return gReadyState
        },
        ready: function ready (callback) {
          if (!callback) {

          } else if (gReadyState == 'complete' || gReadyState == 'interactive') {
            window.setTimeout(function () {
              callback()
            })
          } else if (document.addEventListener) {
            document.addEventListener('localized', function once () {
              document.removeEventListener('localized', once)
              callback()
            })
          }
        }
      }
    }(window, document))
    /***/ },
  /* 11 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.DefaultAnnotationLayerFactory = exports.AnnotationLayerBuilder = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    const _ui_utils = __webpack_require__(0)

    const _pdf_link_service = __webpack_require__(5)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const AnnotationLayerBuilder = (function () {
      function AnnotationLayerBuilder (_ref) {
        const pageDiv = _ref.pageDiv
        const pdfPage = _ref.pdfPage
        const linkService = _ref.linkService
        const downloadManager = _ref.downloadManager
        const _ref$renderInteractiv = _ref.renderInteractiveForms
        const renderInteractiveForms = _ref$renderInteractiv === undefined ? false : _ref$renderInteractiv
        const _ref$l10n = _ref.l10n
        const l10n = _ref$l10n === undefined ? _ui_utils.NullL10n : _ref$l10n

        _classCallCheck(this, AnnotationLayerBuilder)

        this.pageDiv = pageDiv
        this.pdfPage = pdfPage
        this.linkService = linkService
        this.downloadManager = downloadManager
        this.renderInteractiveForms = renderInteractiveForms
        this.l10n = l10n
        this.div = null
      }

      _createClass(AnnotationLayerBuilder, [{
        key: 'render',
        value: function render (viewport) {
          const _this = this

          const intent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'display'

          this.pdfPage.getAnnotations({ intent }).then(function (annotations) {
            const parameters = {
              viewport: viewport.clone({ dontFlip: true }),
              div: _this.div,
              annotations,
              page: _this.pdfPage,
              renderInteractiveForms: _this.renderInteractiveForms,
              linkService: _this.linkService,
              downloadManager: _this.downloadManager
            }
            if (_this.div) {
              _pdfjsLib.AnnotationLayer.update(parameters)
            } else {
              if (annotations.length === 0) {
                return
              }
              _this.div = document.createElement('div')
              _this.div.className = 'annotationLayer'
              _this.pageDiv.appendChild(_this.div)
              parameters.div = _this.div
              _pdfjsLib.AnnotationLayer.render(parameters)
              _this.l10n.translate(_this.div)
            }
          })
        }
      }, {
        key: 'hide',
        value: function hide () {
          if (!this.div) {
            return
          }
          this.div.setAttribute('hidden', 'true')
        }
      }])

      return AnnotationLayerBuilder
    }())

    const DefaultAnnotationLayerFactory = (function () {
      function DefaultAnnotationLayerFactory () {
        _classCallCheck(this, DefaultAnnotationLayerFactory)
      }

      _createClass(DefaultAnnotationLayerFactory, [{
        key: 'createAnnotationLayerBuilder',
        value: function createAnnotationLayerBuilder (pageDiv, pdfPage) {
          const renderInteractiveForms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
          const l10n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _ui_utils.NullL10n

          return new AnnotationLayerBuilder({
            pageDiv,
            pdfPage,
            renderInteractiveForms,
            linkService: new _pdf_link_service.SimpleLinkService(),
            l10n
          })
        }
      }])

      return DefaultAnnotationLayerFactory
    }())

    exports.AnnotationLayerBuilder = AnnotationLayerBuilder
    exports.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory
    /***/ },
  /* 12 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.DownloadManager = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    ;
    function _download (blobUrl, filename) {
      const a = document.createElement('a')
      if (a.click) {
        a.href = blobUrl
        a.target = '_parent'
        if ('download' in a) {
          a.download = filename
        }
        (document.body || document.documentElement).appendChild(a)
        a.click()
        a.parentNode.removeChild(a)
      } else {
        if (window.top === window && blobUrl.split('#')[0] === window.location.href.split('#')[0]) {
          const padCharacter = !blobUrl.includes('?') ? '?' : '&'
          blobUrl = blobUrl.replace(/#|$/, padCharacter + '$&')
        }
        window.open(blobUrl, '_parent')
      }
    }

    const DownloadManager = (function () {
      function DownloadManager () {
        _classCallCheck(this, DownloadManager)
      }

      _createClass(DownloadManager, [{
        key: 'downloadUrl',
        value: function downloadUrl (url, filename) {
          if (!(0, _pdfjsLib.createValidAbsoluteUrl)(url, 'http://example.com')) {
            return
          }
          _download(url + '#pdfjs.action=download', filename)
        }
      }, {
        key: 'downloadData',
        value: function downloadData (data, filename, contentType) {
          if (navigator.msSaveBlob) {
            return navigator.msSaveBlob(new Blob([data], { type: contentType }), filename)
          }
          const blobUrl = (0, _pdfjsLib.createObjectURL)(data, contentType, _pdfjsLib.PDFJS.disableCreateObjectURL)
          _download(blobUrl, filename)
        }
      }, {
        key: 'download',
        value: function download (blob, url, filename) {
          if (navigator.msSaveBlob) {
            if (!navigator.msSaveBlob(blob, filename)) {
              this.downloadUrl(url, filename)
            }
            return
          }
          if (_pdfjsLib.PDFJS.disableCreateObjectURL) {
            this.downloadUrl(url, filename)
            return
          }
          const blobUrl = URL.createObjectURL(blob)
          _download(blobUrl, filename)
        }
      }])

      return DownloadManager
    }())

    exports.DownloadManager = DownloadManager
    /***/ },
  /* 13 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.GenericL10n = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    __webpack_require__(10)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const webL10n = document.webL10n

    const GenericL10n = (function () {
      function GenericL10n (lang) {
        _classCallCheck(this, GenericL10n)

        this._lang = lang
        this._ready = new Promise(function (resolve, reject) {
          webL10n.setLanguage(lang, function () {
            resolve(webL10n)
          })
        })
      }

      _createClass(GenericL10n, [{
        key: 'getDirection',
        value: function getDirection () {
          return this._ready.then(function (l10n) {
            return l10n.getDirection()
          })
        }
      }, {
        key: 'get',
        value: function get (property, args, fallback) {
          return this._ready.then(function (l10n) {
            return l10n.get(property, args, fallback)
          })
        }
      }, {
        key: 'translate',
        value: function translate (element) {
          return this._ready.then(function (l10n) {
            return l10n.translate(element)
          })
        }
      }])

      return GenericL10n
    }())

    exports.GenericL10n = GenericL10n
    /***/ },
  /* 14 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    function GrabToPan (options) {
      this.element = options.element
      this.document = options.element.ownerDocument
      if (typeof options.ignoreTarget === 'function') {
        this.ignoreTarget = options.ignoreTarget
      }
      this.onActiveChanged = options.onActiveChanged
      this.activate = this.activate.bind(this)
      this.deactivate = this.deactivate.bind(this)
      this.toggle = this.toggle.bind(this)
      this._onmousedown = this._onmousedown.bind(this)
      this._onmousemove = this._onmousemove.bind(this)
      this._endPan = this._endPan.bind(this)
      const overlay = this.overlay = document.createElement('div')
      overlay.className = 'grab-to-pan-grabbing'
    }
    GrabToPan.prototype = {
      CSS_CLASS_GRAB: 'grab-to-pan-grab',
      activate: function GrabToPan_activate () {
        if (!this.active) {
          this.active = true
          this.element.addEventListener('mousedown', this._onmousedown, true)
          this.element.classList.add(this.CSS_CLASS_GRAB)
          if (this.onActiveChanged) {
            this.onActiveChanged(true)
          }
        }
      },
      deactivate: function GrabToPan_deactivate () {
        if (this.active) {
          this.active = false
          this.element.removeEventListener('mousedown', this._onmousedown, true)
          this._endPan()
          this.element.classList.remove(this.CSS_CLASS_GRAB)
          if (this.onActiveChanged) {
            this.onActiveChanged(false)
          }
        }
      },
      toggle: function GrabToPan_toggle () {
        if (this.active) {
          this.deactivate()
        } else {
          this.activate()
        }
      },
      ignoreTarget: function GrabToPan_ignoreTarget (node) {
        return node[matchesSelector]('a[href], a[href] *, input, textarea, button, button *, select, option')
      },
      _onmousedown: function GrabToPan__onmousedown (event) {
        if (event.button !== 0 || this.ignoreTarget(event.target)) {
          return
        }
        if (event.originalTarget) {
          try {
            event.originalTarget.tagName
          } catch (e) {
            return
          }
        }
        this.scrollLeftStart = this.element.scrollLeft
        this.scrollTopStart = this.element.scrollTop
        this.clientXStart = event.clientX
        this.clientYStart = event.clientY
        this.document.addEventListener('mousemove', this._onmousemove, true)
        this.document.addEventListener('mouseup', this._endPan, true)
        this.element.addEventListener('scroll', this._endPan, true)
        event.preventDefault()
        event.stopPropagation()
        const focusedElement = document.activeElement
        if (focusedElement && !focusedElement.contains(event.target)) {
          focusedElement.blur()
        }
      },
      _onmousemove: function GrabToPan__onmousemove (event) {
        this.element.removeEventListener('scroll', this._endPan, true)
        if (isLeftMouseReleased(event)) {
          this._endPan()
          return
        }
        const xDiff = event.clientX - this.clientXStart
        const yDiff = event.clientY - this.clientYStart
        const scrollTop = this.scrollTopStart - yDiff
        const scrollLeft = this.scrollLeftStart - xDiff
        if (this.element.scrollTo) {
          this.element.scrollTo({
            top: scrollTop,
            left: scrollLeft,
            behavior: 'instant'
          })
        } else {
          this.element.scrollTop = scrollTop
          this.element.scrollLeft = scrollLeft
        }
        if (!this.overlay.parentNode) {
          document.body.appendChild(this.overlay)
        }
      },
      _endPan: function GrabToPan__endPan () {
        this.element.removeEventListener('scroll', this._endPan, true)
        this.document.removeEventListener('mousemove', this._onmousemove, true)
        this.document.removeEventListener('mouseup', this._endPan, true)
        this.overlay.remove()
      }
    }
    let matchesSelector;
    ['webkitM', 'mozM', 'msM', 'oM', 'm'].some(function (prefix) {
      let name = prefix + 'atches'
      if (name in document.documentElement) {
        matchesSelector = name
      }
      name += 'Selector'
      if (name in document.documentElement) {
        matchesSelector = name
      }
      return matchesSelector
    })
    const isNotIEorIsIE10plus = !document.documentMode || document.documentMode > 9
    const chrome = window.chrome
    const isChrome15OrOpera15plus = chrome && (chrome.webstore || chrome.app)
    const isSafari6plus = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent)
    function isLeftMouseReleased (event) {
      if ('buttons' in event && isNotIEorIsIE10plus) {
        return !(event.buttons & 1)
      }
      if (isChrome15OrOpera15plus || isSafari6plus) {
        return event.which === 0
      }
    }
    exports.GrabToPan = GrabToPan
    /***/ },
  /* 15 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const OverlayManager = (function () {
      function OverlayManager () {
        _classCallCheck(this, OverlayManager)

        this._overlays = {}
        this._active = null
        this._keyDownBound = this._keyDown.bind(this)
      }

      _createClass(OverlayManager, [{
        key: 'register',
        value: function register (name, element) {
          const _this = this

          const callerCloseMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null
          const canForceClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false

          return new Promise(function (resolve) {
            let container = void 0
            if (!name || !element || !(container = element.parentNode)) {
              throw new Error('Not enough parameters.')
            } else if (_this._overlays[name]) {
              throw new Error('The overlay is already registered.')
            }
            _this._overlays[name] = {
              element,
              container,
              callerCloseMethod,
              canForceClose
            }
            resolve()
          })
        }
      }, {
        key: 'unregister',
        value: function unregister (name) {
          const _this2 = this

          return new Promise(function (resolve) {
            if (!_this2._overlays[name]) {
              throw new Error('The overlay does not exist.')
            } else if (_this2._active === name) {
              throw new Error('The overlay cannot be removed while it is active.')
            }
            delete _this2._overlays[name]
            resolve()
          })
        }
      }, {
        key: 'open',
        value: function open (name) {
          const _this3 = this

          return new Promise(function (resolve) {
            if (!_this3._overlays[name]) {
              throw new Error('The overlay does not exist.')
            } else if (_this3._active) {
              if (_this3._overlays[name].canForceClose) {
                _this3._closeThroughCaller()
              } else if (_this3._active === name) {
                throw new Error('The overlay is already active.')
              } else {
                throw new Error('Another overlay is currently active.')
              }
            }
            _this3._active = name
            _this3._overlays[_this3._active].element.classList.remove('hidden')
            _this3._overlays[_this3._active].container.classList.remove('hidden')
            window.addEventListener('keydown', _this3._keyDownBound)
            resolve()
          })
        }
      }, {
        key: 'close',
        value: function close (name) {
          const _this4 = this

          return new Promise(function (resolve) {
            if (!_this4._overlays[name]) {
              throw new Error('The overlay does not exist.')
            } else if (!_this4._active) {
              throw new Error('The overlay is currently not active.')
            } else if (_this4._active !== name) {
              throw new Error('Another overlay is currently active.')
            }
            _this4._overlays[_this4._active].container.classList.add('hidden')
            _this4._overlays[_this4._active].element.classList.add('hidden')
            _this4._active = null
            window.removeEventListener('keydown', _this4._keyDownBound)
            resolve()
          })
        }
      }, {
        key: '_keyDown',
        value: function _keyDown (evt) {
          if (this._active && evt.keyCode === 27) {
            this._closeThroughCaller()
            evt.preventDefault()
          }
        }
      }, {
        key: '_closeThroughCaller',
        value: function _closeThroughCaller () {
          if (this._overlays[this._active].callerCloseMethod) {
            this._overlays[this._active].callerCloseMethod()
          }
          if (this._active) {
            this.close(this._active)
          }
        }
      }, {
        key: 'active',
        get: function get () {
          return this._active
        }
      }])

      return OverlayManager
    }())

    exports.OverlayManager = OverlayManager
    /***/ },
  /* 16 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PasswordPrompt = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PasswordPrompt = (function () {
      function PasswordPrompt (options, overlayManager) {
        const _this = this

        const l10n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _ui_utils.NullL10n

        _classCallCheck(this, PasswordPrompt)

        this.overlayName = options.overlayName
        this.container = options.container
        this.label = options.label
        this.input = options.input
        this.submitButton = options.submitButton
        this.cancelButton = options.cancelButton
        this.overlayManager = overlayManager
        this.l10n = l10n
        this.updateCallback = null
        this.reason = null
        this.submitButton.addEventListener('click', this.verify.bind(this))
        this.cancelButton.addEventListener('click', this.close.bind(this))
        this.input.addEventListener('keydown', function (e) {
          if (e.keyCode === 13) {
            _this.verify()
          }
        })
        this.overlayManager.register(this.overlayName, this.container, this.close.bind(this), true)
      }

      _createClass(PasswordPrompt, [{
        key: 'open',
        value: function open () {
          const _this2 = this

          this.overlayManager.open(this.overlayName).then(function () {
            _this2.input.focus()
            let promptString = void 0
            if (_this2.reason === _pdfjsLib.PasswordResponses.INCORRECT_PASSWORD) {
              promptString = _this2.l10n.get('password_invalid', null, 'Invalid password. Please try again.')
            } else {
              promptString = _this2.l10n.get('password_label', null, 'Enter the password to open this PDF file.')
            }
            promptString.then(function (msg) {
              _this2.label.textContent = msg
            })
          })
        }
      }, {
        key: 'close',
        value: function close () {
          const _this3 = this

          this.overlayManager.close(this.overlayName).then(function () {
            _this3.input.value = ''
          })
        }
      }, {
        key: 'verify',
        value: function verify () {
          const password = this.input.value
          if (password && password.length > 0) {
            this.close()
            return this.updateCallback(password)
          }
        }
      }, {
        key: 'setUpdateCallback',
        value: function setUpdateCallback (updateCallback, reason) {
          this.updateCallback = updateCallback
          this.reason = reason
        }
      }])

      return PasswordPrompt
    }())

    exports.PasswordPrompt = PasswordPrompt
    /***/ },
  /* 17 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFAttachmentViewer = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PDFAttachmentViewer = (function () {
      function PDFAttachmentViewer (_ref) {
        const container = _ref.container
        const eventBus = _ref.eventBus
        const downloadManager = _ref.downloadManager

        _classCallCheck(this, PDFAttachmentViewer)

        this.attachments = null
        this.container = container
        this.eventBus = eventBus
        this.downloadManager = downloadManager
        this._renderedCapability = (0, _pdfjsLib.createPromiseCapability)()
        this.eventBus.on('fileattachmentannotation', this._appendAttachment.bind(this))
      }

      _createClass(PDFAttachmentViewer, [{
        key: 'reset',
        value: function reset () {
          const keepRenderedCapability = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          this.attachments = null
          this.container.textContent = ''
          if (!keepRenderedCapability) {
            this._renderedCapability = (0, _pdfjsLib.createPromiseCapability)()
          }
        }
      }, {
        key: '_dispatchEvent',
        value: function _dispatchEvent (attachmentsCount) {
          this.eventBus.dispatch('attachmentsloaded', {
            source: this,
            attachmentsCount
          })
          this._renderedCapability.resolve()
        }
      }, {
        key: '_bindPdfLink',
        value: function _bindPdfLink (button, content, filename) {
          if (_pdfjsLib.PDFJS.disableCreateObjectURL) {
            throw new Error('bindPdfLink: ' + 'Unsupported "PDFJS.disableCreateObjectURL" value.')
          }
          let blobUrl = void 0
          button.onclick = function () {
            if (!blobUrl) {
              blobUrl = (0, _pdfjsLib.createObjectURL)(content, 'application/pdf')
            }
            let viewerUrl = void 0
            viewerUrl = '?file=' + encodeURIComponent(blobUrl + '#' + filename)
            window.open(viewerUrl)
            return false
          }
        }
      }, {
        key: '_bindLink',
        value: function _bindLink (button, content, filename) {
          const _this = this

          button.onclick = function () {
            _this.downloadManager.downloadData(content, filename, '')
            return false
          }
        }
      }, {
        key: 'render',
        value: function render (_ref2) {
          const attachments = _ref2.attachments
          const _ref2$keepRenderedCap = _ref2.keepRenderedCapability
          const keepRenderedCapability = _ref2$keepRenderedCap === undefined ? false : _ref2$keepRenderedCap

          let attachmentsCount = 0
          if (this.attachments) {
            this.reset(keepRenderedCapability === true)
          }
          this.attachments = attachments || null
          if (!attachments) {
            this._dispatchEvent(attachmentsCount)
            return
          }
          const names = Object.keys(attachments).sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
          })
          attachmentsCount = names.length
          for (let i = 0; i < attachmentsCount; i++) {
            const item = attachments[names[i]]
            const filename = (0, _pdfjsLib.removeNullCharacters)((0, _pdfjsLib.getFilenameFromUrl)(item.filename))
            const div = document.createElement('div')
            div.className = 'attachmentsItem'
            const button = document.createElement('button')
            button.textContent = filename
            if (/\.pdf$/i.test(filename) && !_pdfjsLib.PDFJS.disableCreateObjectURL) {
              this._bindPdfLink(button, item.content, filename)
            } else {
              this._bindLink(button, item.content, filename)
            }
            div.appendChild(button)
            this.container.appendChild(div)
          }
          this._dispatchEvent(attachmentsCount)
        }
      }, {
        key: '_appendAttachment',
        value: function _appendAttachment (_ref3) {
          const _this2 = this

          const id = _ref3.id
          const filename = _ref3.filename
          const content = _ref3.content

          this._renderedCapability.promise.then(function () {
            let attachments = _this2.attachments
            if (!attachments) {
              attachments = Object.create(null)
            } else {
              for (const name in attachments) {
                if (id === name) {
                  return
                }
              }
            }
            attachments[id] = {
              filename,
              content
            }
            _this2.render({
              attachments,
              keepRenderedCapability: true
            })
          })
        }
      }])

      return PDFAttachmentViewer
    }())

    exports.PDFAttachmentViewer = PDFAttachmentViewer
    /***/ },
  /* 18 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFDocumentProperties = undefined

    const _slicedToArray = (function () { function sliceIterator (arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break } } } catch (err) { _d = true; _e = err } finally { try { if (!_n && _i.return) { _i.return() } } finally { if (_d) { throw _e } } } return _arr } return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } } }())

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const DEFAULT_FIELD_CONTENT = '-'

    const PDFDocumentProperties = (function () {
      function PDFDocumentProperties (_ref, overlayManager) {
        const overlayName = _ref.overlayName
        const fields = _ref.fields
        const container = _ref.container
        const closeButton = _ref.closeButton
        const l10n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _ui_utils.NullL10n

        _classCallCheck(this, PDFDocumentProperties)

        this.overlayName = overlayName
        this.fields = fields
        this.container = container
        this.overlayManager = overlayManager
        this.l10n = l10n
        this._reset()
        if (closeButton) {
          closeButton.addEventListener('click', this.close.bind(this))
        }
        this.overlayManager.register(this.overlayName, this.container, this.close.bind(this))
      }

      _createClass(PDFDocumentProperties, [{
        key: 'open',
        value: function open () {
          const _this = this

          const freezeFieldData = function freezeFieldData (data) {
            Object.defineProperty(_this, 'fieldData', {
              value: Object.freeze(data),
              writable: false,
              enumerable: true,
              configurable: true
            })
          }
          Promise.all([this.overlayManager.open(this.overlayName), this._dataAvailableCapability.promise]).then(function () {
            if (_this.fieldData) {
              _this._updateUI()
              return
            }
            _this.pdfDocument.getMetadata().then(function (_ref2) {
              const info = _ref2.info
              const metadata = _ref2.metadata

              return Promise.all([info, metadata, _this._parseFileSize(_this.maybeFileSize), _this._parseDate(info.CreationDate), _this._parseDate(info.ModDate)])
            }).then(function (_ref3) {
              const _ref4 = _slicedToArray(_ref3, 5)
              const info = _ref4[0]
              const metadata = _ref4[1]
              const fileSize = _ref4[2]
              const creationDate = _ref4[3]
              const modificationDate = _ref4[4]

              freezeFieldData({
                fileName: (0, _ui_utils.getPDFFileNameFromURL)(_this.url),
                fileSize,
                title: info.Title,
                author: info.Author,
                subject: info.Subject,
                keywords: info.Keywords,
                creationDate,
                modificationDate,
                creator: info.Creator,
                producer: info.Producer,
                version: info.PDFFormatVersion,
                pageCount: _this.pdfDocument.numPages
              })
              _this._updateUI()
              return _this.pdfDocument.getDownloadInfo()
            }).then(function (_ref5) {
              const length = _ref5.length

              return _this._parseFileSize(length)
            }).then(function (fileSize) {
              const data = (0, _ui_utils.cloneObj)(_this.fieldData)
              data.fileSize = fileSize
              freezeFieldData(data)
              _this._updateUI()
            })
          })
        }
      }, {
        key: 'close',
        value: function close () {
          this.overlayManager.close(this.overlayName)
        }
      }, {
        key: 'setDocument',
        value: function setDocument (pdfDocument, url) {
          if (this.pdfDocument) {
            this._reset()
            this._updateUI(true)
          }
          if (!pdfDocument) {
            return
          }
          this.pdfDocument = pdfDocument
          this.url = url
          this._dataAvailableCapability.resolve()
        }
      }, {
        key: 'setFileSize',
        value: function setFileSize (fileSize) {
          if (typeof fileSize === 'number' && fileSize > 0) {
            this.maybeFileSize = fileSize
          }
        }
      }, {
        key: '_reset',
        value: function _reset () {
          this.pdfDocument = null
          this.url = null
          this.maybeFileSize = 0
          delete this.fieldData
          this._dataAvailableCapability = (0, _pdfjsLib.createPromiseCapability)()
        }
      }, {
        key: '_updateUI',
        value: function _updateUI () {
          const reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          if (reset || !this.fieldData) {
            for (const id in this.fields) {
              this.fields[id].textContent = DEFAULT_FIELD_CONTENT
            }
            return
          }
          if (this.overlayManager.active !== this.overlayName) {
            return
          }
          for (const _id in this.fields) {
            const content = this.fieldData[_id]
            this.fields[_id].textContent = content || content === 0 ? content : DEFAULT_FIELD_CONTENT
          }
        }
      }, {
        key: '_parseFileSize',
        value: function _parseFileSize () {
          const fileSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

          const kb = fileSize / 1024
          if (!kb) {
            return Promise.resolve(undefined)
          } else if (kb < 1024) {
            return this.l10n.get('document_properties_kb', {
              size_kb: (+kb.toPrecision(3)).toLocaleString(),
              size_b: fileSize.toLocaleString()
            }, '{{size_kb}} KB ({{size_b}} bytes)')
          }
          return this.l10n.get('document_properties_mb', {
            size_mb: (+(kb / 1024).toPrecision(3)).toLocaleString(),
            size_b: fileSize.toLocaleString()
          }, '{{size_mb}} MB ({{size_b}} bytes)')
        }
      }, {
        key: '_parseDate',
        value: function _parseDate (inputDate) {
          if (!inputDate) {
            return
          }
          let dateToParse = inputDate
          if (dateToParse.substring(0, 2) === 'D:') {
            dateToParse = dateToParse.substring(2)
          }
          const year = parseInt(dateToParse.substring(0, 4), 10)
          const month = parseInt(dateToParse.substring(4, 6), 10) - 1
          const day = parseInt(dateToParse.substring(6, 8), 10)
          let hours = parseInt(dateToParse.substring(8, 10), 10)
          let minutes = parseInt(dateToParse.substring(10, 12), 10)
          const seconds = parseInt(dateToParse.substring(12, 14), 10)
          const utRel = dateToParse.substring(14, 15)
          const offsetHours = parseInt(dateToParse.substring(15, 17), 10)
          const offsetMinutes = parseInt(dateToParse.substring(18, 20), 10)
          if (utRel === '-') {
            hours += offsetHours
            minutes += offsetMinutes
          } else if (utRel === '+') {
            hours -= offsetHours
            minutes -= offsetMinutes
          }
          const date = new Date(Date.UTC(year, month, day, hours, minutes, seconds))
          const dateString = date.toLocaleDateString()
          const timeString = date.toLocaleTimeString()
          return this.l10n.get('document_properties_date_string', {
            date: dateString,
            time: timeString
          }, '{{date}}, {{time}}')
        }
      }])

      return PDFDocumentProperties
    }())

    exports.PDFDocumentProperties = PDFDocumentProperties
    /***/ },
  /* 19 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFFindBar = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdf_find_controller = __webpack_require__(7)

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PDFFindBar = (function () {
      function PDFFindBar (options) {
        const _this = this
        const l10n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ui_utils.NullL10n

        _classCallCheck(this, PDFFindBar)

        this.opened = false
        this.bar = options.bar || null
        this.toggleButton = options.toggleButton || null
        this.findField = options.findField || null
        this.highlightAll = options.highlightAllCheckbox || null
        this.caseSensitive = options.caseSensitiveCheckbox || null
        this.findMsg = options.findMsg || null
        this.findResultsCount = options.findResultsCount || null
        this.findStatusIcon = options.findStatusIcon || null
        this.findPreviousButton = options.findPreviousButton || null
        this.findNextButton = options.findNextButton || null
        this.findController = options.findController || null
        this.eventBus = options.eventBus
        this.l10n = l10n
        if (this.findController === null) {
          throw new Error('PDFFindBar cannot be used without a ' + 'PDFFindController instance.')
        }
        this.toggleButton.addEventListener('click', function () {
          _this.toggle()
        })
        this.findField.addEventListener('input', function () {
          _this.dispatchEvent('')
        })
        this.bar.addEventListener('keydown', function (e) {
          switch (e.keyCode) {
            case 13:
              if (e.target === _this.findField) {
                _this.dispatchEvent('again', e.shiftKey)
              }
              break
            case 27:
              _this.close()
              break
          }
        })
        this.findPreviousButton.addEventListener('click', function () {
          _this.dispatchEvent('again', true)
        })
        this.findNextButton.addEventListener('click', function () {
          _this.dispatchEvent('again', false)
        })
        this.highlightAll.addEventListener('click', function () {
          _this.dispatchEvent('highlightallchange')
        })
        this.caseSensitive.addEventListener('click', function () {
          _this.dispatchEvent('casesensitivitychange')
        })
        this.eventBus.on('resize', this._adjustWidth.bind(this))
      }

      _createClass(PDFFindBar, [{
        key: 'reset',
        value: function reset () {
          this.updateUIState()
        }
      }, {
        key: 'dispatchEvent',
        value: function dispatchEvent (type, findPrev) {
          this.eventBus.dispatch('find', {
            source: this,
            type,
            query: this.findField.value,
            caseSensitive: this.caseSensitive.checked,
            phraseSearch: true,
            highlightAll: this.highlightAll.checked,
            findPrevious: findPrev
          })
        }
      }, {
        key: 'updateUIState',
        value: function updateUIState (state, previous, matchCount) {
          const _this2 = this

          let notFound = false
          let findMsg = ''
          let status = ''
          switch (state) {
            case _pdf_find_controller.FindState.FOUND:
              break
            case _pdf_find_controller.FindState.PENDING:
              status = 'pending'
              break
            case _pdf_find_controller.FindState.NOT_FOUND:
              findMsg = this.l10n.get('find_not_found', null, 'Phrase not found')
              notFound = true
              break
            case _pdf_find_controller.FindState.WRAPPED:
              if (previous) {
                findMsg = this.l10n.get('find_reached_top', null, 'Reached top of document, continued from bottom')
              } else {
                findMsg = this.l10n.get('find_reached_bottom', null, 'Reached end of document, continued from top')
              }
              break
          }
          if (notFound) {
            this.findField.classList.add('notFound')
          } else {
            this.findField.classList.remove('notFound')
          }
          this.findField.setAttribute('data-status', status)
          Promise.resolve(findMsg).then(function (msg) {
            _this2.findMsg.textContent = msg
            _this2._adjustWidth()
          })
          this.updateResultsCount(matchCount)
        }
      }, {
        key: 'updateResultsCount',
        value: function updateResultsCount (matchCount) {
          if (!this.findResultsCount) {
            return
          }
          if (!matchCount) {
            this.findResultsCount.classList.add('hidden')
            this.findResultsCount.textContent = ''
          } else {
            this.findResultsCount.textContent = matchCount.toLocaleString()
            this.findResultsCount.classList.remove('hidden')
          }
          this._adjustWidth()
        }
      }, {
        key: 'open',
        value: function open () {
          if (!this.opened) {
            this.opened = true
            this.toggleButton.classList.add('toggled')
            this.bar.classList.remove('hidden')
          }
          this.findField.select()
          this.findField.focus()
          this._adjustWidth()
        }
      }, {
        key: 'close',
        value: function close () {
          if (!this.opened) {
            return
          }
          this.opened = false
          this.toggleButton.classList.remove('toggled')
          this.bar.classList.add('hidden')
          this.findController.active = false
        }
      }, {
        key: 'toggle',
        value: function toggle () {
          if (this.opened) {
            this.close()
          } else {
            this.open()
          }
        }
      }, {
        key: '_adjustWidth',
        value: function _adjustWidth () {
          if (!this.opened) {
            return
          }
          this.bar.classList.remove('wrapContainers')
          const findbarHeight = this.bar.clientHeight
          const inputContainerHeight = this.bar.firstElementChild.clientHeight
          if (findbarHeight > inputContainerHeight) {
            this.bar.classList.add('wrapContainers')
          }
        }
      }])

      return PDFFindBar
    }())

    exports.PDFFindBar = PDFFindBar
    /***/ },
  /* 20 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFHistory = undefined

    const _dom_events = __webpack_require__(2)

    function PDFHistory (options) {
      this.linkService = options.linkService
      this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)()
      this.initialized = false
      this.initialDestination = null
      this.initialBookmark = null
    }
    PDFHistory.prototype = {
      initialize: function pdfHistoryInitialize (fingerprint) {
        this.initialized = true
        this.reInitialized = false
        this.allowHashChange = true
        this.historyUnlocked = true
        this.isViewerInPresentationMode = false
        this.previousHash = window.location.hash.substring(1)
        this.currentBookmark = ''
        this.currentPage = 0
        this.updatePreviousBookmark = false
        this.previousBookmark = ''
        this.previousPage = 0
        this.nextHashParam = ''
        this.fingerprint = fingerprint
        this.currentUid = this.uid = 0
        this.current = {}
        const state = window.history.state
        if (this._isStateObjectDefined(state)) {
          if (state.target.dest) {
            this.initialDestination = state.target.dest
          } else {
            this.initialBookmark = state.target.hash
          }
          this.currentUid = state.uid
          this.uid = state.uid + 1
          this.current = state.target
        } else {
          if (state && state.fingerprint && this.fingerprint !== state.fingerprint) {
            this.reInitialized = true
          }
          this._pushOrReplaceState({ fingerprint: this.fingerprint }, true)
        }
        const self = this
        window.addEventListener('popstate', function pdfHistoryPopstate (evt) {
          if (!self.historyUnlocked) {
            return
          }
          if (evt.state) {
            self._goTo(evt.state)
            return
          }
          if (self.uid === 0) {
            const previousParams = self.previousHash && self.currentBookmark && self.previousHash !== self.currentBookmark ? {
              hash: self.currentBookmark,
              page: self.currentPage
            } : { page: 1 }
            replacePreviousHistoryState(previousParams, function () {
              updateHistoryWithCurrentHash()
            })
          } else {
            updateHistoryWithCurrentHash()
          }
        })
        function updateHistoryWithCurrentHash () {
          self.previousHash = window.location.hash.slice(1)
          self._pushToHistory({ hash: self.previousHash }, false, true)
          self._updatePreviousBookmark()
        }
        function replacePreviousHistoryState (params, callback) {
          self.historyUnlocked = false
          self.allowHashChange = false
          window.addEventListener('popstate', rewriteHistoryAfterBack)
          history.back()
          function rewriteHistoryAfterBack () {
            window.removeEventListener('popstate', rewriteHistoryAfterBack)
            window.addEventListener('popstate', rewriteHistoryAfterForward)
            self._pushToHistory(params, false, true)
            history.forward()
          }
          function rewriteHistoryAfterForward () {
            window.removeEventListener('popstate', rewriteHistoryAfterForward)
            self.allowHashChange = true
            self.historyUnlocked = true
            callback()
          }
        }
        function pdfHistoryBeforeUnload () {
          const previousParams = self._getPreviousParams(null, true)
          if (previousParams) {
            const replacePrevious = !self.current.dest && self.current.hash !== self.previousHash
            self._pushToHistory(previousParams, false, replacePrevious)
            self._updatePreviousBookmark()
          }
          window.removeEventListener('beforeunload', pdfHistoryBeforeUnload)
        }
        window.addEventListener('beforeunload', pdfHistoryBeforeUnload)
        window.addEventListener('pageshow', function pdfHistoryPageShow (evt) {
          window.addEventListener('beforeunload', pdfHistoryBeforeUnload)
        })
        self.eventBus.on('presentationmodechanged', function (e) {
          self.isViewerInPresentationMode = e.active
        })
      },
      clearHistoryState: function pdfHistory_clearHistoryState () {
        this._pushOrReplaceState(null, true)
      },
      _isStateObjectDefined: function pdfHistory_isStateObjectDefined (state) {
        return !!(state && state.uid >= 0 && state.fingerprint && this.fingerprint === state.fingerprint && state.target && state.target.hash)
      },
      _pushOrReplaceState: function pdfHistory_pushOrReplaceState (stateObj, replace) {
        if (replace) {
          window.history.replaceState(stateObj, '', document.URL)
        } else {
          window.history.pushState(stateObj, '', document.URL)
        }
      },
      get isHashChangeUnlocked () {
        if (!this.initialized) {
          return true
        }
        return this.allowHashChange
      },
      _updatePreviousBookmark: function pdfHistory_updatePreviousBookmark () {
        if (this.updatePreviousBookmark && this.currentBookmark && this.currentPage) {
          this.previousBookmark = this.currentBookmark
          this.previousPage = this.currentPage
          this.updatePreviousBookmark = false
        }
      },
      updateCurrentBookmark: function pdfHistoryUpdateCurrentBookmark (bookmark, pageNum) {
        if (this.initialized) {
          this.currentBookmark = bookmark.substring(1)
          this.currentPage = pageNum | 0
          this._updatePreviousBookmark()
        }
      },
      updateNextHashParam: function pdfHistoryUpdateNextHashParam (param) {
        if (this.initialized) {
          this.nextHashParam = param
        }
      },
      push: function pdfHistoryPush (params, isInitialBookmark) {
        if (!(this.initialized && this.historyUnlocked)) {
          return
        }
        if (params.dest && !params.hash) {
          params.hash = this.current.hash && this.current.dest && this.current.dest === params.dest ? this.current.hash : this.linkService.getDestinationHash(params.dest).split('#')[1]
        }
        if (params.page) {
          params.page |= 0
        }
        if (isInitialBookmark) {
          const target = window.history.state.target
          if (!target) {
            this._pushToHistory(params, false)
            this.previousHash = window.location.hash.substring(1)
          }
          this.updatePreviousBookmark = !this.nextHashParam
          if (target) {
            this._updatePreviousBookmark()
          }
          return
        }
        if (this.nextHashParam) {
          if (this.nextHashParam === params.hash) {
            this.nextHashParam = null
            this.updatePreviousBookmark = true
            return
          }
          this.nextHashParam = null
        }
        if (params.hash) {
          if (this.current.hash) {
            if (this.current.hash !== params.hash) {
              this._pushToHistory(params, true)
            } else {
              if (!this.current.page && params.page) {
                this._pushToHistory(params, false, true)
              }
              this.updatePreviousBookmark = true
            }
          } else {
            this._pushToHistory(params, true)
          }
        } else if (this.current.page && params.page && this.current.page !== params.page) {
          this._pushToHistory(params, true)
        }
      },
      _getPreviousParams: function pdfHistory_getPreviousParams (onlyCheckPage, beforeUnload) {
        if (!(this.currentBookmark && this.currentPage)) {
          return null
        } else if (this.updatePreviousBookmark) {
          this.updatePreviousBookmark = false
        }
        if (this.uid > 0 && !(this.previousBookmark && this.previousPage)) {
          return null
        }
        if (!this.current.dest && !onlyCheckPage || beforeUnload) {
          if (this.previousBookmark === this.currentBookmark) {
            return null
          }
        } else if (this.current.page || onlyCheckPage) {
          if (this.previousPage === this.currentPage) {
            return null
          }
        } else {
          return null
        }
        const params = {
          hash: this.currentBookmark,
          page: this.currentPage
        }
        if (this.isViewerInPresentationMode) {
          params.hash = null
        }
        return params
      },
      _stateObj: function pdfHistory_stateObj (params) {
        return {
          fingerprint: this.fingerprint,
          uid: this.uid,
          target: params
        }
      },
      _pushToHistory: function pdfHistory_pushToHistory (params, addPrevious, overwrite) {
        if (!this.initialized) {
          return
        }
        if (!params.hash && params.page) {
          params.hash = 'page=' + params.page
        }
        if (addPrevious && !overwrite) {
          const previousParams = this._getPreviousParams()
          if (previousParams) {
            const replacePrevious = !this.current.dest && this.current.hash !== this.previousHash
            this._pushToHistory(previousParams, false, replacePrevious)
          }
        }
        this._pushOrReplaceState(this._stateObj(params), overwrite || this.uid === 0)
        this.currentUid = this.uid++
        this.current = params
        this.updatePreviousBookmark = true
      },
      _goTo: function pdfHistory_goTo (state) {
        if (!(this.initialized && this.historyUnlocked && this._isStateObjectDefined(state))) {
          return
        }
        if (!this.reInitialized && state.uid < this.currentUid) {
          const previousParams = this._getPreviousParams(true)
          if (previousParams) {
            this._pushToHistory(this.current, false)
            this._pushToHistory(previousParams, false)
            this.currentUid = state.uid
            window.history.back()
            return
          }
        }
        this.historyUnlocked = false
        if (state.target.dest) {
          this.linkService.navigateTo(state.target.dest)
        } else {
          this.linkService.setHash(state.target.hash)
        }
        this.currentUid = state.uid
        if (state.uid > this.uid) {
          this.uid = state.uid
        }
        this.current = state.target
        this.updatePreviousBookmark = true
        const currentHash = window.location.hash.substring(1)
        if (this.previousHash !== currentHash) {
          this.allowHashChange = false
        }
        this.previousHash = currentHash
        this.historyUnlocked = true
      },
      back: function pdfHistoryBack () {
        this.go(-1)
      },
      forward: function pdfHistoryForward () {
        this.go(1)
      },
      go: function pdfHistoryGo (direction) {
        if (this.initialized && this.historyUnlocked) {
          const state = window.history.state
          if (direction === -1 && state && state.uid > 0) {
            window.history.back()
          } else if (direction === 1 && state && state.uid < this.uid - 1) {
            window.history.forward()
          }
        }
      }
    }
    exports.PDFHistory = PDFHistory
    /***/ },
  /* 21 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFOutlineViewer = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const DEFAULT_TITLE = '\u2013'

    const PDFOutlineViewer = (function () {
      function PDFOutlineViewer (_ref) {
        const container = _ref.container
        const linkService = _ref.linkService
        const eventBus = _ref.eventBus

        _classCallCheck(this, PDFOutlineViewer)

        this.outline = null
        this.lastToggleIsShow = true
        this.container = container
        this.linkService = linkService
        this.eventBus = eventBus
      }

      _createClass(PDFOutlineViewer, [{
        key: 'reset',
        value: function reset () {
          this.outline = null
          this.lastToggleIsShow = true
          this.container.textContent = ''
          this.container.classList.remove('outlineWithDeepNesting')
        }
      }, {
        key: '_dispatchEvent',
        value: function _dispatchEvent (outlineCount) {
          this.eventBus.dispatch('outlineloaded', {
            source: this,
            outlineCount
          })
        }
      }, {
        key: '_bindLink',
        value: function _bindLink (element, item) {
          const _this = this

          if (item.url) {
            (0, _pdfjsLib.addLinkAttributes)(element, {
              url: item.url,
              target: item.newWindow ? _pdfjsLib.PDFJS.LinkTarget.BLANK : undefined
            })
            return
          }
          const destination = item.dest
          element.href = this.linkService.getDestinationHash(destination)
          element.onclick = function () {
            if (destination) {
              _this.linkService.navigateTo(destination)
            }
            return false
          }
        }
      }, {
        key: '_setStyles',
        value: function _setStyles (element, item) {
          let styleStr = ''
          if (item.bold) {
            styleStr += 'font-weight: bold;'
          }
          if (item.italic) {
            styleStr += 'font-style: italic;'
          }
          if (styleStr) {
            element.setAttribute('style', styleStr)
          }
        }
      }, {
        key: '_addToggleButton',
        value: function _addToggleButton (div) {
          const _this2 = this

          const toggler = document.createElement('div')
          toggler.className = 'outlineItemToggler'
          toggler.onclick = function (evt) {
            evt.stopPropagation()
            toggler.classList.toggle('outlineItemsHidden')
            if (evt.shiftKey) {
              const shouldShowAll = !toggler.classList.contains('outlineItemsHidden')
              _this2._toggleOutlineItem(div, shouldShowAll)
            }
          }
          div.insertBefore(toggler, div.firstChild)
        }
      }, {
        key: '_toggleOutlineItem',
        value: function _toggleOutlineItem (root, show) {
          this.lastToggleIsShow = show
          const togglers = root.querySelectorAll('.outlineItemToggler')
          for (let i = 0, ii = togglers.length; i < ii; ++i) {
            togglers[i].classList[show ? 'remove' : 'add']('outlineItemsHidden')
          }
        }
      }, {
        key: 'toggleOutlineTree',
        value: function toggleOutlineTree () {
          if (!this.outline) {
            return
          }
          this._toggleOutlineItem(this.container, !this.lastToggleIsShow)
        }
      }, {
        key: 'render',
        value: function render (_ref2) {
          const outline = _ref2.outline

          let outlineCount = 0
          if (this.outline) {
            this.reset()
          }
          this.outline = outline || null
          if (!outline) {
            this._dispatchEvent(outlineCount)
            return
          }
          const fragment = document.createDocumentFragment()
          const queue = [{
            parent: fragment,
            items: this.outline
          }]
          let hasAnyNesting = false
          while (queue.length > 0) {
            const levelData = queue.shift()
            for (let i = 0, len = levelData.items.length; i < len; i++) {
              const item = levelData.items[i]
              const div = document.createElement('div')
              div.className = 'outlineItem'
              const element = document.createElement('a')
              this._bindLink(element, item)
              this._setStyles(element, item)
              element.textContent = (0, _pdfjsLib.removeNullCharacters)(item.title) || DEFAULT_TITLE
              div.appendChild(element)
              if (item.items.length > 0) {
                hasAnyNesting = true
                this._addToggleButton(div)
                const itemsDiv = document.createElement('div')
                itemsDiv.className = 'outlineItems'
                div.appendChild(itemsDiv)
                queue.push({
                  parent: itemsDiv,
                  items: item.items
                })
              }
              levelData.parent.appendChild(div)
              outlineCount++
            }
          }
          if (hasAnyNesting) {
            this.container.classList.add('outlineWithDeepNesting')
          }
          this.container.appendChild(fragment)
          this._dispatchEvent(outlineCount)
        }
      }])

      return PDFOutlineViewer
    }())

    exports.PDFOutlineViewer = PDFOutlineViewer
    /***/ },
  /* 22 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFPageView = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    const _pdfjsLib = __webpack_require__(1)

    const _dom_events = __webpack_require__(2)

    const _pdf_rendering_queue = __webpack_require__(3)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PDFPageView = (function () {
      function PDFPageView (options) {
        _classCallCheck(this, PDFPageView)

        const container = options.container
        const defaultViewport = options.defaultViewport
        this.id = options.id
        this.renderingId = 'page' + this.id
        this.pdfPage = null
        this.pageLabel = null
        this.rotation = 0
        this.scale = options.scale || _ui_utils.DEFAULT_SCALE
        this.viewport = defaultViewport
        this.pdfPageRotate = defaultViewport.rotation
        this.hasRestrictedScaling = false
        this.enhanceTextSelection = options.enhanceTextSelection || false
        this.renderInteractiveForms = options.renderInteractiveForms || false
        this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)()
        this.renderingQueue = options.renderingQueue
        this.textLayerFactory = options.textLayerFactory
        this.annotationLayerFactory = options.annotationLayerFactory
        this.renderer = options.renderer || _ui_utils.RendererType.CANVAS
        this.l10n = options.l10n || _ui_utils.NullL10n
        this.paintTask = null
        this.paintedViewportMap = new WeakMap()
        this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL
        this.resume = null
        this.error = null
        this.onBeforeDraw = null
        this.onAfterDraw = null
        this.annotationLayer = null
        this.textLayer = null
        this.zoomLayer = null
        const div = document.createElement('div')
        div.className = 'page'
        div.style.width = Math.floor(this.viewport.width) + 'px'
        div.style.height = Math.floor(this.viewport.height) + 'px'
        div.setAttribute('data-page-number', this.id)
        this.div = div
        container.appendChild(div)
      }

      _createClass(PDFPageView, [{
        key: 'setPdfPage',
        value: function setPdfPage (pdfPage) {
          this.pdfPage = pdfPage
          this.pdfPageRotate = pdfPage.rotate
          const totalRotation = (this.rotation + this.pdfPageRotate) % 360
          this.viewport = pdfPage.getViewport(this.scale * _ui_utils.CSS_UNITS, totalRotation)
          this.stats = pdfPage.stats
          this.reset()
        }
      }, {
        key: 'destroy',
        value: function destroy () {
          this.reset()
          if (this.pdfPage) {
            this.pdfPage.cleanup()
            this.pdfPage = null
          }
        }
      }, {
        key: '_resetZoomLayer',
        value: function _resetZoomLayer () {
          const removeFromDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          if (!this.zoomLayer) {
            return
          }
          const zoomLayerCanvas = this.zoomLayer.firstChild
          this.paintedViewportMap.delete(zoomLayerCanvas)
          zoomLayerCanvas.width = 0
          zoomLayerCanvas.height = 0
          if (removeFromDOM) {
            this.zoomLayer.remove()
          }
          this.zoomLayer = null
        }
      }, {
        key: 'reset',
        value: function reset () {
          const keepZoomLayer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false
          const keepAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          this.cancelRendering()
          const div = this.div
          div.style.width = Math.floor(this.viewport.width) + 'px'
          div.style.height = Math.floor(this.viewport.height) + 'px'
          const childNodes = div.childNodes
          const currentZoomLayerNode = keepZoomLayer && this.zoomLayer || null
          const currentAnnotationNode = keepAnnotations && this.annotationLayer && this.annotationLayer.div || null
          for (let i = childNodes.length - 1; i >= 0; i--) {
            const node = childNodes[i]
            if (currentZoomLayerNode === node || currentAnnotationNode === node) {
              continue
            }
            div.removeChild(node)
          }
          div.removeAttribute('data-loaded')
          if (currentAnnotationNode) {
            this.annotationLayer.hide()
          } else {
            this.annotationLayer = null
          }
          if (!currentZoomLayerNode) {
            if (this.canvas) {
              this.paintedViewportMap.delete(this.canvas)
              this.canvas.width = 0
              this.canvas.height = 0
              delete this.canvas
            }
            this._resetZoomLayer()
          }
          if (this.svg) {
            this.paintedViewportMap.delete(this.svg)
            delete this.svg
          }
          this.loadingIconDiv = document.createElement('div')
          this.loadingIconDiv.className = 'loadingIcon'
          div.appendChild(this.loadingIconDiv)
        }
      }, {
        key: 'update',
        value: function update (scale, rotation) {
          this.scale = scale || this.scale
          if (typeof rotation !== 'undefined') {
            this.rotation = rotation
          }
          const totalRotation = (this.rotation + this.pdfPageRotate) % 360
          this.viewport = this.viewport.clone({
            scale: this.scale * _ui_utils.CSS_UNITS,
            rotation: totalRotation
          })
          if (this.svg) {
            this.cssTransform(this.svg, true)
            this.eventBus.dispatch('pagerendered', {
              source: this,
              pageNumber: this.id,
              cssTransform: true
            })
            return
          }
          let isScalingRestricted = false
          if (this.canvas && _pdfjsLib.PDFJS.maxCanvasPixels > 0) {
            const outputScale = this.outputScale
            if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > _pdfjsLib.PDFJS.maxCanvasPixels) {
              isScalingRestricted = true
            }
          }
          if (this.canvas) {
            if (_pdfjsLib.PDFJS.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
              this.cssTransform(this.canvas, true)
              this.eventBus.dispatch('pagerendered', {
                source: this,
                pageNumber: this.id,
                cssTransform: true
              })
              return
            }
            if (!this.zoomLayer && !this.canvas.hasAttribute('hidden')) {
              this.zoomLayer = this.canvas.parentNode
              this.zoomLayer.style.position = 'absolute'
            }
          }
          if (this.zoomLayer) {
            this.cssTransform(this.zoomLayer.firstChild)
          }
          this.reset(true, true)
        }
      }, {
        key: 'cancelRendering',
        value: function cancelRendering () {
          if (this.paintTask) {
            this.paintTask.cancel()
            this.paintTask = null
          }
          this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL
          this.resume = null
          if (this.textLayer) {
            this.textLayer.cancel()
            this.textLayer = null
          }
        }
      }, {
        key: 'cssTransform',
        value: function cssTransform (target) {
          const redrawAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          const width = this.viewport.width
          const height = this.viewport.height
          const div = this.div
          target.style.width = target.parentNode.style.width = div.style.width = Math.floor(width) + 'px'
          target.style.height = target.parentNode.style.height = div.style.height = Math.floor(height) + 'px'
          const relativeRotation = this.viewport.rotation - this.paintedViewportMap.get(target).rotation
          const absRotation = Math.abs(relativeRotation)
          let scaleX = 1
          let scaleY = 1
          if (absRotation === 90 || absRotation === 270) {
            scaleX = height / width
            scaleY = width / height
          }
          const cssTransform = 'rotate(' + relativeRotation + 'deg) ' + 'scale(' + scaleX + ',' + scaleY + ')'
          _pdfjsLib.CustomStyle.setProp('transform', target, cssTransform)
          if (this.textLayer) {
            const textLayerViewport = this.textLayer.viewport
            const textRelativeRotation = this.viewport.rotation - textLayerViewport.rotation
            const textAbsRotation = Math.abs(textRelativeRotation)
            let scale = width / textLayerViewport.width
            if (textAbsRotation === 90 || textAbsRotation === 270) {
              scale = width / textLayerViewport.height
            }
            const textLayerDiv = this.textLayer.textLayerDiv
            let transX = void 0
            let transY = void 0
            switch (textAbsRotation) {
              case 0:
                transX = transY = 0
                break
              case 90:
                transX = 0
                transY = '-' + textLayerDiv.style.height
                break
              case 180:
                transX = '-' + textLayerDiv.style.width
                transY = '-' + textLayerDiv.style.height
                break
              case 270:
                transX = '-' + textLayerDiv.style.width
                transY = 0
                break
              default:
                console.error('Bad rotation value.')
                break
            }
            _pdfjsLib.CustomStyle.setProp('transform', textLayerDiv, 'rotate(' + textAbsRotation + 'deg) ' + 'scale(' + scale + ', ' + scale + ') ' + 'translate(' + transX + ', ' + transY + ')')
            _pdfjsLib.CustomStyle.setProp('transformOrigin', textLayerDiv, '0% 0%')
          }
          if (redrawAnnotations && this.annotationLayer) {
            this.annotationLayer.render(this.viewport, 'display')
          }
        }
      }, {
        key: 'getPagePoint',
        value: function getPagePoint (x, y) {
          return this.viewport.convertToPdfPoint(x, y)
        }
      }, {
        key: 'draw',
        value: function draw () {
          const _this = this

          if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
            console.error('Must be in new state before drawing')
            this.reset()
          }
          if (!this.pdfPage) {
            this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED
            return Promise.reject(new Error('Page is not loaded'))
          }
          this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING
          const pdfPage = this.pdfPage
          const div = this.div
          const canvasWrapper = document.createElement('div')
          canvasWrapper.style.width = div.style.width
          canvasWrapper.style.height = div.style.height
          canvasWrapper.classList.add('canvasWrapper')
          if (this.annotationLayer && this.annotationLayer.div) {
            div.insertBefore(canvasWrapper, this.annotationLayer.div)
          } else {
            div.appendChild(canvasWrapper)
          }
          let textLayer = null
          if (this.textLayerFactory) {
            const textLayerDiv = document.createElement('div')
            textLayerDiv.className = 'textLayer'
            textLayerDiv.style.width = canvasWrapper.style.width
            textLayerDiv.style.height = canvasWrapper.style.height
            if (this.annotationLayer && this.annotationLayer.div) {
              div.insertBefore(textLayerDiv, this.annotationLayer.div)
            } else {
              div.appendChild(textLayerDiv)
            }
            textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.enhanceTextSelection)
          }
          this.textLayer = textLayer
          let renderContinueCallback = null
          if (this.renderingQueue) {
            renderContinueCallback = function renderContinueCallback (cont) {
              if (!_this.renderingQueue.isHighestPriority(_this)) {
                _this.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED
                _this.resume = function () {
                  _this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING
                  cont()
                }
                return
              }
              cont()
            }
          }
          const finishPaintTask = function finishPaintTask (error) {
            if (paintTask === _this.paintTask) {
              _this.paintTask = null
            }
            if (error === 'cancelled' || error instanceof _pdfjsLib.RenderingCancelledException) {
              _this.error = null
              return Promise.resolve(undefined)
            }
            _this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED
            if (_this.loadingIconDiv) {
              div.removeChild(_this.loadingIconDiv)
              delete _this.loadingIconDiv
            }
            _this._resetZoomLayer(true)
            _this.error = error
            _this.stats = pdfPage.stats
            if (_this.onAfterDraw) {
              _this.onAfterDraw()
            }
            _this.eventBus.dispatch('pagerendered', {
              source: _this,
              pageNumber: _this.id,
              cssTransform: false
            })
            if (error) {
              return Promise.reject(error)
            }
            return Promise.resolve(undefined)
          }
          var paintTask = this.renderer === _ui_utils.RendererType.SVG ? this.paintOnSvg(canvasWrapper) : this.paintOnCanvas(canvasWrapper)
          paintTask.onRenderContinue = renderContinueCallback
          this.paintTask = paintTask
          const resultPromise = paintTask.promise.then(function () {
            return finishPaintTask(null).then(function () {
              if (textLayer) {
                const readableStream = pdfPage.streamTextContent({ normalizeWhitespace: true })
                textLayer.setTextContentStream(readableStream)
                textLayer.render()
              }
            })
          }, function (reason) {
            return finishPaintTask(reason)
          })
          if (this.annotationLayerFactory) {
            if (!this.annotationLayer) {
              this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(div, pdfPage, this.renderInteractiveForms, this.l10n)
            }
            this.annotationLayer.render(this.viewport, 'display')
          }
          div.setAttribute('data-loaded', true)
          if (this.onBeforeDraw) {
            this.onBeforeDraw()
          }
          return resultPromise
        }
      }, {
        key: 'paintOnCanvas',
        value: function paintOnCanvas (canvasWrapper) {
          const renderCapability = (0, _pdfjsLib.createPromiseCapability)()
          const result = {
            promise: renderCapability.promise,
            onRenderContinue: function onRenderContinue (cont) {
              cont()
            },
            cancel: function cancel () {
              renderTask.cancel()
            }
          }
          const viewport = this.viewport
          const canvas = document.createElement('canvas')
          canvas.id = this.renderingId
          canvas.setAttribute('hidden', 'hidden')
          let isCanvasHidden = true
          const showCanvas = function showCanvas () {
            if (isCanvasHidden) {
              canvas.removeAttribute('hidden')
              isCanvasHidden = false
            }
          }
          canvasWrapper.appendChild(canvas)
          this.canvas = canvas
          canvas.mozOpaque = true
          const ctx = canvas.getContext('2d', { alpha: false })
          const outputScale = (0, _ui_utils.getOutputScale)(ctx)
          this.outputScale = outputScale
          if (_pdfjsLib.PDFJS.useOnlyCssZoom) {
            const actualSizeViewport = viewport.clone({ scale: _ui_utils.CSS_UNITS })
            outputScale.sx *= actualSizeViewport.width / viewport.width
            outputScale.sy *= actualSizeViewport.height / viewport.height
            outputScale.scaled = true
          }
          if (_pdfjsLib.PDFJS.maxCanvasPixels > 0) {
            const pixelsInViewport = viewport.width * viewport.height
            const maxScale = Math.sqrt(_pdfjsLib.PDFJS.maxCanvasPixels / pixelsInViewport)
            if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
              outputScale.sx = maxScale
              outputScale.sy = maxScale
              outputScale.scaled = true
              this.hasRestrictedScaling = true
            } else {
              this.hasRestrictedScaling = false
            }
          }
          const sfx = (0, _ui_utils.approximateFraction)(outputScale.sx)
          const sfy = (0, _ui_utils.approximateFraction)(outputScale.sy)
          canvas.width = (0, _ui_utils.roundToDivide)(viewport.width * outputScale.sx, sfx[0])
          canvas.height = (0, _ui_utils.roundToDivide)(viewport.height * outputScale.sy, sfy[0])
          canvas.style.width = (0, _ui_utils.roundToDivide)(viewport.width, sfx[1]) + 'px'
          canvas.style.height = (0, _ui_utils.roundToDivide)(viewport.height, sfy[1]) + 'px'
          this.paintedViewportMap.set(canvas, viewport)
          const transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0]
          const renderContext = {
            canvasContext: ctx,
            transform,
            viewport: this.viewport,
            renderInteractiveForms: this.renderInteractiveForms
          }
          var renderTask = this.pdfPage.render(renderContext)
          renderTask.onContinue = function (cont) {
            showCanvas()
            if (result.onRenderContinue) {
              result.onRenderContinue(cont)
            } else {
              cont()
            }
          }
          renderTask.promise.then(function () {
            showCanvas()
            renderCapability.resolve(undefined)
          }, function (error) {
            showCanvas()
            renderCapability.reject(error)
          })
          return result
        }
      }, {
        key: 'paintOnSvg',
        value: function paintOnSvg (wrapper) {
          const _this2 = this

          let cancelled = false
          const ensureNotCancelled = function ensureNotCancelled () {
            if (cancelled) {
              if (_pdfjsLib.PDFJS.pdfjsNext) {
                throw new _pdfjsLib.RenderingCancelledException('Rendering cancelled, page ' + _this2.id, 'svg')
              } else {
                throw 'cancelled'
              }
            }
          }
          const pdfPage = this.pdfPage
          const actualSizeViewport = this.viewport.clone({ scale: _ui_utils.CSS_UNITS })
          const promise = pdfPage.getOperatorList().then(function (opList) {
            ensureNotCancelled()
            const svgGfx = new _pdfjsLib.SVGGraphics(pdfPage.commonObjs, pdfPage.objs)
            return svgGfx.getSVG(opList, actualSizeViewport).then(function (svg) {
              ensureNotCancelled()
              _this2.svg = svg
              _this2.paintedViewportMap.set(svg, actualSizeViewport)
              svg.style.width = wrapper.style.width
              svg.style.height = wrapper.style.height
              _this2.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED
              wrapper.appendChild(svg)
            })
          })
          return {
            promise,
            onRenderContinue: function onRenderContinue (cont) {
              cont()
            },
            cancel: function cancel () {
              cancelled = true
            }
          }
        }
      }, {
        key: 'setPageLabel',
        value: function setPageLabel (label) {
          this.pageLabel = typeof label === 'string' ? label : null
          if (this.pageLabel !== null) {
            this.div.setAttribute('data-page-label', this.pageLabel)
          } else {
            this.div.removeAttribute('data-page-label')
          }
        }
      }, {
        key: 'width',
        get: function get () {
          return this.viewport.width
        }
      }, {
        key: 'height',
        get: function get () {
          return this.viewport.height
        }
      }])

      return PDFPageView
    }())

    exports.PDFPageView = PDFPageView
    /***/ },
  /* 23 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFPresentationMode = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const DELAY_BEFORE_RESETTING_SWITCH_IN_PROGRESS = 1500
    const DELAY_BEFORE_HIDING_CONTROLS = 3000
    const ACTIVE_SELECTOR = 'pdfPresentationMode'
    const CONTROLS_SELECTOR = 'pdfPresentationModeControls'
    const MOUSE_SCROLL_COOLDOWN_TIME = 50
    const PAGE_SWITCH_THRESHOLD = 0.1
    const SWIPE_MIN_DISTANCE_THRESHOLD = 50
    const SWIPE_ANGLE_THRESHOLD = Math.PI / 6

    const PDFPresentationMode = (function () {
      function PDFPresentationMode (_ref) {
        const _this = this

        const container = _ref.container
        const _ref$viewer = _ref.viewer
        const viewer = _ref$viewer === undefined ? null : _ref$viewer
        const pdfViewer = _ref.pdfViewer
        const eventBus = _ref.eventBus
        const _ref$contextMenuItems = _ref.contextMenuItems
        const contextMenuItems = _ref$contextMenuItems === undefined ? null : _ref$contextMenuItems

        _classCallCheck(this, PDFPresentationMode)

        this.container = container
        this.viewer = viewer || container.firstElementChild
        this.pdfViewer = pdfViewer
        this.eventBus = eventBus
        this.active = false
        this.args = null
        this.contextMenuOpen = false
        this.mouseScrollTimeStamp = 0
        this.mouseScrollDelta = 0
        this.touchSwipeState = null
        if (contextMenuItems) {
          contextMenuItems.contextFirstPage.addEventListener('click', function () {
            _this.contextMenuOpen = false
            _this.eventBus.dispatch('firstpage')
          })
          contextMenuItems.contextLastPage.addEventListener('click', function () {
            _this.contextMenuOpen = false
            _this.eventBus.dispatch('lastpage')
          })
          contextMenuItems.contextPageRotateCw.addEventListener('click', function () {
            _this.contextMenuOpen = false
            _this.eventBus.dispatch('rotatecw')
          })
          contextMenuItems.contextPageRotateCcw.addEventListener('click', function () {
            _this.contextMenuOpen = false
            _this.eventBus.dispatch('rotateccw')
          })
        }
      }

      _createClass(PDFPresentationMode, [{
        key: 'request',
        value: function request () {
          if (this.switchInProgress || this.active || !this.viewer.hasChildNodes()) {
            return false
          }
          this._addFullscreenChangeListeners()
          this._setSwitchInProgress()
          this._notifyStateChange()
          if (this.container.requestFullscreen) {
            this.container.requestFullscreen()
          } else if (this.container.mozRequestFullScreen) {
            this.container.mozRequestFullScreen()
          } else if (this.container.webkitRequestFullscreen) {
            this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          } else if (this.container.msRequestFullscreen) {
            this.container.msRequestFullscreen()
          } else {
            return false
          }
          this.args = {
            page: this.pdfViewer.currentPageNumber,
            previousScale: this.pdfViewer.currentScaleValue
          }
          return true
        }
      }, {
        key: '_mouseWheel',
        value: function _mouseWheel (evt) {
          if (!this.active) {
            return
          }
          evt.preventDefault()
          const delta = (0, _ui_utils.normalizeWheelEventDelta)(evt)
          const currentTime = new Date().getTime()
          const storedTime = this.mouseScrollTimeStamp
          if (currentTime > storedTime && currentTime - storedTime < MOUSE_SCROLL_COOLDOWN_TIME) {
            return
          }
          if (this.mouseScrollDelta > 0 && delta < 0 || this.mouseScrollDelta < 0 && delta > 0) {
            this._resetMouseScrollState()
          }
          this.mouseScrollDelta += delta
          if (Math.abs(this.mouseScrollDelta) >= PAGE_SWITCH_THRESHOLD) {
            const totalDelta = this.mouseScrollDelta
            this._resetMouseScrollState()
            const success = totalDelta > 0 ? this._goToPreviousPage() : this._goToNextPage()
            if (success) {
              this.mouseScrollTimeStamp = currentTime
            }
          }
        }
      }, {
        key: '_goToPreviousPage',
        value: function _goToPreviousPage () {
          const page = this.pdfViewer.currentPageNumber
          if (page <= 1) {
            return false
          }
          this.pdfViewer.currentPageNumber = page - 1
          return true
        }
      }, {
        key: '_goToNextPage',
        value: function _goToNextPage () {
          const page = this.pdfViewer.currentPageNumber
          if (page >= this.pdfViewer.pagesCount) {
            return false
          }
          this.pdfViewer.currentPageNumber = page + 1
          return true
        }
      }, {
        key: '_notifyStateChange',
        value: function _notifyStateChange () {
          this.eventBus.dispatch('presentationmodechanged', {
            source: this,
            active: this.active,
            switchInProgress: !!this.switchInProgress
          })
        }
      }, {
        key: '_setSwitchInProgress',
        value: function _setSwitchInProgress () {
          const _this2 = this

          if (this.switchInProgress) {
            clearTimeout(this.switchInProgress)
          }
          this.switchInProgress = setTimeout(function () {
            _this2._removeFullscreenChangeListeners()
            delete _this2.switchInProgress
            _this2._notifyStateChange()
          }, DELAY_BEFORE_RESETTING_SWITCH_IN_PROGRESS)
        }
      }, {
        key: '_resetSwitchInProgress',
        value: function _resetSwitchInProgress () {
          if (this.switchInProgress) {
            clearTimeout(this.switchInProgress)
            delete this.switchInProgress
          }
        }
      }, {
        key: '_enter',
        value: function _enter () {
          const _this3 = this

          this.active = true
          this._resetSwitchInProgress()
          this._notifyStateChange()
          this.container.classList.add(ACTIVE_SELECTOR)
          setTimeout(function () {
            _this3.pdfViewer.currentPageNumber = _this3.args.page
            _this3.pdfViewer.currentScaleValue = 'page-fit'
          }, 0)
          this._addWindowListeners()
          this._showControls()
          this.contextMenuOpen = false
          this.container.setAttribute('contextmenu', 'viewerContextMenu')
          window.getSelection().removeAllRanges()
        }
      }, {
        key: '_exit',
        value: function _exit () {
          const _this4 = this

          const page = this.pdfViewer.currentPageNumber
          this.container.classList.remove(ACTIVE_SELECTOR)
          setTimeout(function () {
            _this4.active = false
            _this4._removeFullscreenChangeListeners()
            _this4._notifyStateChange()
            _this4.pdfViewer.currentScaleValue = _this4.args.previousScale
            _this4.pdfViewer.currentPageNumber = page
            _this4.args = null
          }, 0)
          this._removeWindowListeners()
          this._hideControls()
          this._resetMouseScrollState()
          this.container.removeAttribute('contextmenu')
          this.contextMenuOpen = false
        }
      }, {
        key: '_mouseDown',
        value: function _mouseDown (evt) {
          if (this.contextMenuOpen) {
            this.contextMenuOpen = false
            evt.preventDefault()
            return
          }
          if (evt.button === 0) {
            const isInternalLink = evt.target.href && evt.target.classList.contains('internalLink')
            if (!isInternalLink) {
              evt.preventDefault()
              if (evt.shiftKey) {
                this._goToPreviousPage()
              } else {
                this._goToNextPage()
              }
            }
          }
        }
      }, {
        key: '_contextMenu',
        value: function _contextMenu () {
          this.contextMenuOpen = true
        }
      }, {
        key: '_showControls',
        value: function _showControls () {
          const _this5 = this

          if (this.controlsTimeout) {
            clearTimeout(this.controlsTimeout)
          } else {
            this.container.classList.add(CONTROLS_SELECTOR)
          }
          this.controlsTimeout = setTimeout(function () {
            _this5.container.classList.remove(CONTROLS_SELECTOR)
            delete _this5.controlsTimeout
          }, DELAY_BEFORE_HIDING_CONTROLS)
        }
      }, {
        key: '_hideControls',
        value: function _hideControls () {
          if (!this.controlsTimeout) {
            return
          }
          clearTimeout(this.controlsTimeout)
          this.container.classList.remove(CONTROLS_SELECTOR)
          delete this.controlsTimeout
        }
      }, {
        key: '_resetMouseScrollState',
        value: function _resetMouseScrollState () {
          this.mouseScrollTimeStamp = 0
          this.mouseScrollDelta = 0
        }
      }, {
        key: '_touchSwipe',
        value: function _touchSwipe (evt) {
          if (!this.active) {
            return
          }
          if (evt.touches.length > 1) {
            this.touchSwipeState = null
            return
          }
          switch (evt.type) {
            case 'touchstart':
              this.touchSwipeState = {
                startX: evt.touches[0].pageX,
                startY: evt.touches[0].pageY,
                endX: evt.touches[0].pageX,
                endY: evt.touches[0].pageY
              }
              break
            case 'touchmove':
              if (this.touchSwipeState === null) {
                return
              }
              this.touchSwipeState.endX = evt.touches[0].pageX
              this.touchSwipeState.endY = evt.touches[0].pageY
              evt.preventDefault()
              break
            case 'touchend':
              if (this.touchSwipeState === null) {
                return
              }
              var delta = 0
              var dx = this.touchSwipeState.endX - this.touchSwipeState.startX
              var dy = this.touchSwipeState.endY - this.touchSwipeState.startY
              var absAngle = Math.abs(Math.atan2(dy, dx))
              if (Math.abs(dx) > SWIPE_MIN_DISTANCE_THRESHOLD && (absAngle <= SWIPE_ANGLE_THRESHOLD || absAngle >= Math.PI - SWIPE_ANGLE_THRESHOLD)) {
                delta = dx
              } else if (Math.abs(dy) > SWIPE_MIN_DISTANCE_THRESHOLD && Math.abs(absAngle - Math.PI / 2) <= SWIPE_ANGLE_THRESHOLD) {
                delta = dy
              }
              if (delta > 0) {
                this._goToPreviousPage()
              } else if (delta < 0) {
                this._goToNextPage()
              }
              break
          }
        }
      }, {
        key: '_addWindowListeners',
        value: function _addWindowListeners () {
          this.showControlsBind = this._showControls.bind(this)
          this.mouseDownBind = this._mouseDown.bind(this)
          this.mouseWheelBind = this._mouseWheel.bind(this)
          this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this)
          this.contextMenuBind = this._contextMenu.bind(this)
          this.touchSwipeBind = this._touchSwipe.bind(this)
          window.addEventListener('mousemove', this.showControlsBind)
          window.addEventListener('mousedown', this.mouseDownBind)
          window.addEventListener('wheel', this.mouseWheelBind)
          window.addEventListener('keydown', this.resetMouseScrollStateBind)
          window.addEventListener('contextmenu', this.contextMenuBind)
          window.addEventListener('touchstart', this.touchSwipeBind)
          window.addEventListener('touchmove', this.touchSwipeBind)
          window.addEventListener('touchend', this.touchSwipeBind)
        }
      }, {
        key: '_removeWindowListeners',
        value: function _removeWindowListeners () {
          window.removeEventListener('mousemove', this.showControlsBind)
          window.removeEventListener('mousedown', this.mouseDownBind)
          window.removeEventListener('wheel', this.mouseWheelBind)
          window.removeEventListener('keydown', this.resetMouseScrollStateBind)
          window.removeEventListener('contextmenu', this.contextMenuBind)
          window.removeEventListener('touchstart', this.touchSwipeBind)
          window.removeEventListener('touchmove', this.touchSwipeBind)
          window.removeEventListener('touchend', this.touchSwipeBind)
          delete this.showControlsBind
          delete this.mouseDownBind
          delete this.mouseWheelBind
          delete this.resetMouseScrollStateBind
          delete this.contextMenuBind
          delete this.touchSwipeBind
        }
      }, {
        key: '_fullscreenChange',
        value: function _fullscreenChange () {
          if (this.isFullscreen) {
            this._enter()
          } else {
            this._exit()
          }
        }
      }, {
        key: '_addFullscreenChangeListeners',
        value: function _addFullscreenChangeListeners () {
          this.fullscreenChangeBind = this._fullscreenChange.bind(this)
          window.addEventListener('fullscreenchange', this.fullscreenChangeBind)
          window.addEventListener('mozfullscreenchange', this.fullscreenChangeBind)
          window.addEventListener('webkitfullscreenchange', this.fullscreenChangeBind)
          window.addEventListener('MSFullscreenChange', this.fullscreenChangeBind)
        }
      }, {
        key: '_removeFullscreenChangeListeners',
        value: function _removeFullscreenChangeListeners () {
          window.removeEventListener('fullscreenchange', this.fullscreenChangeBind)
          window.removeEventListener('mozfullscreenchange', this.fullscreenChangeBind)
          window.removeEventListener('webkitfullscreenchange', this.fullscreenChangeBind)
          window.removeEventListener('MSFullscreenChange', this.fullscreenChangeBind)
          delete this.fullscreenChangeBind
        }
      }, {
        key: 'isFullscreen',
        get: function get () {
          return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement)
        }
      }])

      return PDFPresentationMode
    }())

    exports.PDFPresentationMode = PDFPresentationMode
    /***/ },
  /* 24 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFSidebar = exports.SidebarView = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    const _pdf_rendering_queue = __webpack_require__(3)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const UI_NOTIFICATION_CLASS = 'pdfSidebarNotification'
    const SidebarView = {
      NONE: 0,
      THUMBS: 1,
      OUTLINE: 2,
      ATTACHMENTS: 3
    }

    const PDFSidebar = (function () {
      function PDFSidebar (options) {
        const l10n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ui_utils.NullL10n

        _classCallCheck(this, PDFSidebar)

        this.isOpen = false
        this.active = SidebarView.THUMBS
        this.isInitialViewSet = false
        this.onToggled = null
        this.pdfViewer = options.pdfViewer
        this.pdfThumbnailViewer = options.pdfThumbnailViewer
        this.pdfOutlineViewer = options.pdfOutlineViewer
        this.mainContainer = options.mainContainer
        this.outerContainer = options.outerContainer
        this.eventBus = options.eventBus
        this.toggleButton = options.toggleButton
        this.thumbnailButton = options.thumbnailButton
        this.outlineButton = options.outlineButton
        this.attachmentsButton = options.attachmentsButton
        this.thumbnailView = options.thumbnailView
        this.outlineView = options.outlineView
        this.attachmentsView = options.attachmentsView
        this.disableNotification = options.disableNotification || false
        this.l10n = l10n
        this._addEventListeners()
      }

      _createClass(PDFSidebar, [{
        key: 'reset',
        value: function reset () {
          this.isInitialViewSet = false
          this._hideUINotification(null)
          this.switchView(SidebarView.THUMBS)
          this.outlineButton.disabled = false
          this.attachmentsButton.disabled = false
        }
      }, {
        key: 'setInitialView',
        value: function setInitialView (view) {
          if (this.isInitialViewSet) {
            return
          }
          this.isInitialViewSet = true
          if (this.isOpen && view === SidebarView.NONE) {
            this._dispatchEvent()
            return
          }
          const isViewPreserved = view === this.visibleView
          this.switchView(view, true)
          if (isViewPreserved) {
            this._dispatchEvent()
          }
        }
      }, {
        key: 'switchView',
        value: function switchView (view) {
          const forceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          if (view === SidebarView.NONE) {
            this.close()
            return
          }
          const isViewChanged = view !== this.active
          let shouldForceRendering = false
          switch (view) {
            case SidebarView.THUMBS:
              this.thumbnailButton.classList.add('toggled')
              this.outlineButton.classList.remove('toggled')
              this.attachmentsButton.classList.remove('toggled')
              this.thumbnailView.classList.remove('hidden')
              this.outlineView.classList.add('hidden')
              this.attachmentsView.classList.add('hidden')
              if (this.isOpen && isViewChanged) {
                this._updateThumbnailViewer()
                shouldForceRendering = true
              }
              break
            case SidebarView.OUTLINE:
              if (this.outlineButton.disabled) {
                return
              }
              this.thumbnailButton.classList.remove('toggled')
              this.outlineButton.classList.add('toggled')
              this.attachmentsButton.classList.remove('toggled')
              this.thumbnailView.classList.add('hidden')
              this.outlineView.classList.remove('hidden')
              this.attachmentsView.classList.add('hidden')
              break
            case SidebarView.ATTACHMENTS:
              if (this.attachmentsButton.disabled) {
                return
              }
              this.thumbnailButton.classList.remove('toggled')
              this.outlineButton.classList.remove('toggled')
              this.attachmentsButton.classList.add('toggled')
              this.thumbnailView.classList.add('hidden')
              this.outlineView.classList.add('hidden')
              this.attachmentsView.classList.remove('hidden')
              break
            default:
              console.error('PDFSidebar_switchView: "' + view + '" is an unsupported value.')
              return
          }
          this.active = view | 0
          if (forceOpen && !this.isOpen) {
            this.open()
            return
          }
          if (shouldForceRendering) {
            this._forceRendering()
          }
          if (isViewChanged) {
            this._dispatchEvent()
          }
          this._hideUINotification(this.active)
        }
      }, {
        key: 'open',
        value: function open () {
          if (this.isOpen) {
            return
          }
          this.isOpen = true
          this.toggleButton.classList.add('toggled')
          this.outerContainer.classList.add('sidebarMoving')
          this.outerContainer.classList.add('sidebarOpen')
          if (this.active === SidebarView.THUMBS) {
            this._updateThumbnailViewer()
          }
          this._forceRendering()
          this._dispatchEvent()
          this._hideUINotification(this.active)
        }
      }, {
        key: 'close',
        value: function close () {
          if (!this.isOpen) {
            return
          }
          this.isOpen = false
          this.toggleButton.classList.remove('toggled')
          this.outerContainer.classList.add('sidebarMoving')
          this.outerContainer.classList.remove('sidebarOpen')
          this._forceRendering()
          this._dispatchEvent()
        }
      }, {
        key: 'toggle',
        value: function toggle () {
          if (this.isOpen) {
            this.close()
          } else {
            this.open()
          }
        }
      }, {
        key: '_dispatchEvent',
        value: function _dispatchEvent () {
          this.eventBus.dispatch('sidebarviewchanged', {
            source: this,
            view: this.visibleView
          })
        }
      }, {
        key: '_forceRendering',
        value: function _forceRendering () {
          if (this.onToggled) {
            this.onToggled()
          } else {
            this.pdfViewer.forceRendering()
            this.pdfThumbnailViewer.forceRendering()
          }
        }
      }, {
        key: '_updateThumbnailViewer',
        value: function _updateThumbnailViewer () {
          const pdfViewer = this.pdfViewer
          const pdfThumbnailViewer = this.pdfThumbnailViewer

          const pagesCount = pdfViewer.pagesCount
          for (let pageIndex = 0; pageIndex < pagesCount; pageIndex++) {
            const pageView = pdfViewer.getPageView(pageIndex)
            if (pageView && pageView.renderingState === _pdf_rendering_queue.RenderingStates.FINISHED) {
              const thumbnailView = pdfThumbnailViewer.getThumbnail(pageIndex)
              thumbnailView.setImage(pageView)
            }
          }
          pdfThumbnailViewer.scrollThumbnailIntoView(pdfViewer.currentPageNumber)
        }
      }, {
        key: '_showUINotification',
        value: function _showUINotification (view) {
          const _this = this

          if (this.disableNotification) {
            return
          }
          this.l10n.get('toggle_sidebar_notification.title', null, 'Toggle Sidebar (document contains outline/attachments)').then(function (msg) {
            _this.toggleButton.title = msg
          })
          if (!this.isOpen) {
            this.toggleButton.classList.add(UI_NOTIFICATION_CLASS)
          } else if (view === this.active) {
            return
          }
          switch (view) {
            case SidebarView.OUTLINE:
              this.outlineButton.classList.add(UI_NOTIFICATION_CLASS)
              break
            case SidebarView.ATTACHMENTS:
              this.attachmentsButton.classList.add(UI_NOTIFICATION_CLASS)
              break
          }
        }
      }, {
        key: '_hideUINotification',
        value: function _hideUINotification (view) {
          const _this2 = this

          if (this.disableNotification) {
            return
          }
          const removeNotification = function removeNotification (view) {
            switch (view) {
              case SidebarView.OUTLINE:
                _this2.outlineButton.classList.remove(UI_NOTIFICATION_CLASS)
                break
              case SidebarView.ATTACHMENTS:
                _this2.attachmentsButton.classList.remove(UI_NOTIFICATION_CLASS)
                break
            }
          }
          if (!this.isOpen && view !== null) {
            return
          }
          this.toggleButton.classList.remove(UI_NOTIFICATION_CLASS)
          if (view !== null) {
            removeNotification(view)
            return
          }
          for (view in SidebarView) {
            removeNotification(SidebarView[view])
          }
          this.l10n.get('toggle_sidebar.title', null, 'Toggle Sidebar').then(function (msg) {
            _this2.toggleButton.title = msg
          })
        }
      }, {
        key: '_addEventListeners',
        value: function _addEventListeners () {
          const _this3 = this

          this.mainContainer.addEventListener('transitionend', function (evt) {
            if (evt.target === _this3.mainContainer) {
              _this3.outerContainer.classList.remove('sidebarMoving')
            }
          })
          this.thumbnailButton.addEventListener('click', function () {
            _this3.switchView(SidebarView.THUMBS)
          })
          this.outlineButton.addEventListener('click', function () {
            _this3.switchView(SidebarView.OUTLINE)
          })
          this.outlineButton.addEventListener('dblclick', function () {
            _this3.pdfOutlineViewer.toggleOutlineTree()
          })
          this.attachmentsButton.addEventListener('click', function () {
            _this3.switchView(SidebarView.ATTACHMENTS)
          })
          this.eventBus.on('outlineloaded', function (evt) {
            const outlineCount = evt.outlineCount
            _this3.outlineButton.disabled = !outlineCount
            if (outlineCount) {
              _this3._showUINotification(SidebarView.OUTLINE)
            } else if (_this3.active === SidebarView.OUTLINE) {
              _this3.switchView(SidebarView.THUMBS)
            }
          })
          this.eventBus.on('attachmentsloaded', function (evt) {
            const attachmentsCount = evt.attachmentsCount
            _this3.attachmentsButton.disabled = !attachmentsCount
            if (attachmentsCount) {
              _this3._showUINotification(SidebarView.ATTACHMENTS)
            } else if (_this3.active === SidebarView.ATTACHMENTS) {
              _this3.switchView(SidebarView.THUMBS)
            }
          })
          this.eventBus.on('presentationmodechanged', function (evt) {
            if (!evt.active && !evt.switchInProgress && _this3.isThumbnailViewVisible) {
              _this3._updateThumbnailViewer()
            }
          })
        }
      }, {
        key: 'visibleView',
        get: function get () {
          return this.isOpen ? this.active : SidebarView.NONE
        }
      }, {
        key: 'isThumbnailViewVisible',
        get: function get () {
          return this.isOpen && this.active === SidebarView.THUMBS
        }
      }, {
        key: 'isOutlineViewVisible',
        get: function get () {
          return this.isOpen && this.active === SidebarView.OUTLINE
        }
      }, {
        key: 'isAttachmentsViewVisible',
        get: function get () {
          return this.isOpen && this.active === SidebarView.ATTACHMENTS
        }
      }])

      return PDFSidebar
    }())

    exports.SidebarView = SidebarView
    exports.PDFSidebar = PDFSidebar
    /***/ },
  /* 25 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFThumbnailView = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    const _ui_utils = __webpack_require__(0)

    const _pdf_rendering_queue = __webpack_require__(3)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const MAX_NUM_SCALING_STEPS = 3
    const THUMBNAIL_CANVAS_BORDER_WIDTH = 1
    const THUMBNAIL_WIDTH = 98
    const TempImageFactory = (function TempImageFactoryClosure () {
      let tempCanvasCache = null
      return {
        getCanvas: function getCanvas (width, height) {
          let tempCanvas = tempCanvasCache
          if (!tempCanvas) {
            tempCanvas = document.createElement('canvas')
            tempCanvasCache = tempCanvas
          }
          tempCanvas.width = width
          tempCanvas.height = height
          tempCanvas.mozOpaque = true
          const ctx = tempCanvas.getContext('2d', { alpha: false })
          ctx.save()
          ctx.fillStyle = 'rgb(255, 255, 255)'
          ctx.fillRect(0, 0, width, height)
          ctx.restore()
          return tempCanvas
        },
        destroyCanvas: function destroyCanvas () {
          const tempCanvas = tempCanvasCache
          if (tempCanvas) {
            tempCanvas.width = 0
            tempCanvas.height = 0
          }
          tempCanvasCache = null
        }
      }
    }())

    const PDFThumbnailView = (function () {
      function PDFThumbnailView (_ref) {
        const container = _ref.container
        const id = _ref.id
        const defaultViewport = _ref.defaultViewport
        const linkService = _ref.linkService
        const renderingQueue = _ref.renderingQueue
        const _ref$disableCanvasToI = _ref.disableCanvasToImageConversion
        const disableCanvasToImageConversion = _ref$disableCanvasToI === undefined ? false : _ref$disableCanvasToI
        const _ref$l10n = _ref.l10n
        const l10n = _ref$l10n === undefined ? _ui_utils.NullL10n : _ref$l10n

        _classCallCheck(this, PDFThumbnailView)

        this.id = id
        this.renderingId = 'thumbnail' + id
        this.pageLabel = null
        this.pdfPage = null
        this.rotation = 0
        this.viewport = defaultViewport
        this.pdfPageRotate = defaultViewport.rotation
        this.linkService = linkService
        this.renderingQueue = renderingQueue
        this.renderTask = null
        this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL
        this.resume = null
        this.disableCanvasToImageConversion = disableCanvasToImageConversion
        this.pageWidth = this.viewport.width
        this.pageHeight = this.viewport.height
        this.pageRatio = this.pageWidth / this.pageHeight
        this.canvasWidth = THUMBNAIL_WIDTH
        this.canvasHeight = this.canvasWidth / this.pageRatio | 0
        this.scale = this.canvasWidth / this.pageWidth
        this.l10n = l10n
        const anchor = document.createElement('a')
        anchor.href = linkService.getAnchorUrl('#page=' + id)
        this.l10n.get('thumb_page_title', { page: id }, 'Page {{page}}').then(function (msg) {
          anchor.title = msg
        })
        anchor.onclick = function () {
          linkService.page = id
          return false
        }
        this.anchor = anchor
        const div = document.createElement('div')
        div.className = 'thumbnail'
        div.setAttribute('data-page-number', this.id)
        this.div = div
        if (id === 1) {
          div.classList.add('selected')
        }
        const ring = document.createElement('div')
        ring.className = 'thumbnailSelectionRing'
        const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH
        ring.style.width = this.canvasWidth + borderAdjustment + 'px'
        ring.style.height = this.canvasHeight + borderAdjustment + 'px'
        this.ring = ring
        div.appendChild(ring)
        anchor.appendChild(div)
        container.appendChild(anchor)
      }

      _createClass(PDFThumbnailView, [{
        key: 'setPdfPage',
        value: function setPdfPage (pdfPage) {
          this.pdfPage = pdfPage
          this.pdfPageRotate = pdfPage.rotate
          const totalRotation = (this.rotation + this.pdfPageRotate) % 360
          this.viewport = pdfPage.getViewport(1, totalRotation)
          this.reset()
        }
      }, {
        key: 'reset',
        value: function reset () {
          this.cancelRendering()
          this.pageWidth = this.viewport.width
          this.pageHeight = this.viewport.height
          this.pageRatio = this.pageWidth / this.pageHeight
          this.canvasHeight = this.canvasWidth / this.pageRatio | 0
          this.scale = this.canvasWidth / this.pageWidth
          this.div.removeAttribute('data-loaded')
          const ring = this.ring
          const childNodes = ring.childNodes
          for (let i = childNodes.length - 1; i >= 0; i--) {
            ring.removeChild(childNodes[i])
          }
          const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH
          ring.style.width = this.canvasWidth + borderAdjustment + 'px'
          ring.style.height = this.canvasHeight + borderAdjustment + 'px'
          if (this.canvas) {
            this.canvas.width = 0
            this.canvas.height = 0
            delete this.canvas
          }
          if (this.image) {
            this.image.removeAttribute('src')
            delete this.image
          }
        }
      }, {
        key: 'update',
        value: function update (rotation) {
          if (typeof rotation !== 'undefined') {
            this.rotation = rotation
          }
          const totalRotation = (this.rotation + this.pdfPageRotate) % 360
          this.viewport = this.viewport.clone({
            scale: 1,
            rotation: totalRotation
          })
          this.reset()
        }
      }, {
        key: 'cancelRendering',
        value: function cancelRendering () {
          if (this.renderTask) {
            this.renderTask.cancel()
            this.renderTask = null
          }
          this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL
          this.resume = null
        }
      }, {
        key: '_getPageDrawContext',
        value: function _getPageDrawContext () {
          const noCtxScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          const canvas = document.createElement('canvas')
          this.canvas = canvas
          canvas.mozOpaque = true
          const ctx = canvas.getContext('2d', { alpha: false })
          const outputScale = (0, _ui_utils.getOutputScale)(ctx)
          canvas.width = this.canvasWidth * outputScale.sx | 0
          canvas.height = this.canvasHeight * outputScale.sy | 0
          canvas.style.width = this.canvasWidth + 'px'
          canvas.style.height = this.canvasHeight + 'px'
          if (!noCtxScale && outputScale.scaled) {
            ctx.scale(outputScale.sx, outputScale.sy)
          }
          return ctx
        }
      }, {
        key: '_convertCanvasToImage',
        value: function _convertCanvasToImage () {
          const _this = this

          if (!this.canvas) {
            return
          }
          if (this.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
            return
          }
          const id = this.renderingId
          const className = 'thumbnailImage'
          if (this.disableCanvasToImageConversion) {
            this.canvas.id = id
            this.canvas.className = className
            this.l10n.get('thumb_page_canvas', { page: this.pageId }, 'Thumbnail of Page {{page}}').then(function (msg) {
              _this.canvas.setAttribute('aria-label', msg)
            })
            this.div.setAttribute('data-loaded', true)
            this.ring.appendChild(this.canvas)
            return
          }
          const image = document.createElement('img')
          image.id = id
          image.className = className
          this.l10n.get('thumb_page_canvas', { page: this.pageId }, 'Thumbnail of Page {{page}}').then(function (msg) {
            image.setAttribute('aria-label', msg)
          })
          image.style.width = this.canvasWidth + 'px'
          image.style.height = this.canvasHeight + 'px'
          image.src = this.canvas.toDataURL()
          this.image = image
          this.div.setAttribute('data-loaded', true)
          this.ring.appendChild(image)
          this.canvas.width = 0
          this.canvas.height = 0
          delete this.canvas
        }
      }, {
        key: 'draw',
        value: function draw () {
          const _this2 = this

          if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
            console.error('Must be in new state before drawing')
            return Promise.resolve(undefined)
          }
          this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING
          const renderCapability = (0, _pdfjsLib.createPromiseCapability)()
          const finishRenderTask = function finishRenderTask (error) {
            if (renderTask === _this2.renderTask) {
              _this2.renderTask = null
            }
            if (error === 'cancelled' || error instanceof _pdfjsLib.RenderingCancelledException) {
              renderCapability.resolve(undefined)
              return
            }
            _this2.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED
            _this2._convertCanvasToImage()
            if (!error) {
              renderCapability.resolve(undefined)
            } else {
              renderCapability.reject(error)
            }
          }
          const ctx = this._getPageDrawContext()
          const drawViewport = this.viewport.clone({ scale: this.scale })
          const renderContinueCallback = function renderContinueCallback (cont) {
            if (!_this2.renderingQueue.isHighestPriority(_this2)) {
              _this2.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED
              _this2.resume = function () {
                _this2.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING
                cont()
              }
              return
            }
            cont()
          }
          const renderContext = {
            canvasContext: ctx,
            viewport: drawViewport
          }
          var renderTask = this.renderTask = this.pdfPage.render(renderContext)
          renderTask.onContinue = renderContinueCallback
          renderTask.promise.then(function () {
            finishRenderTask(null)
          }, function (error) {
            finishRenderTask(error)
          })
          return renderCapability.promise
        }
      }, {
        key: 'setImage',
        value: function setImage (pageView) {
          if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
            return
          }
          const img = pageView.canvas
          if (!img) {
            return
          }
          if (!this.pdfPage) {
            this.setPdfPage(pageView.pdfPage)
          }
          this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED
          const ctx = this._getPageDrawContext(true)
          const canvas = ctx.canvas
          if (img.width <= 2 * canvas.width) {
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
            this._convertCanvasToImage()
            return
          }
          let reducedWidth = canvas.width << MAX_NUM_SCALING_STEPS
          let reducedHeight = canvas.height << MAX_NUM_SCALING_STEPS
          const reducedImage = TempImageFactory.getCanvas(reducedWidth, reducedHeight)
          const reducedImageCtx = reducedImage.getContext('2d')
          while (reducedWidth > img.width || reducedHeight > img.height) {
            reducedWidth >>= 1
            reducedHeight >>= 1
          }
          reducedImageCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, reducedWidth, reducedHeight)
          while (reducedWidth > 2 * canvas.width) {
            reducedImageCtx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, reducedWidth >> 1, reducedHeight >> 1)
            reducedWidth >>= 1
            reducedHeight >>= 1
          }
          ctx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, canvas.width, canvas.height)
          this._convertCanvasToImage()
        }
      }, {
        key: 'setPageLabel',
        value: function setPageLabel (label) {
          const _this3 = this

          this.pageLabel = typeof label === 'string' ? label : null
          this.l10n.get('thumb_page_title', { page: this.pageId }, 'Page {{page}}').then(function (msg) {
            _this3.anchor.title = msg
          })
          if (this.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
            return
          }
          this.l10n.get('thumb_page_canvas', { page: this.pageId }, 'Thumbnail of Page {{page}}').then(function (ariaLabel) {
            if (_this3.image) {
              _this3.image.setAttribute('aria-label', ariaLabel)
            } else if (_this3.disableCanvasToImageConversion && _this3.canvas) {
              _this3.canvas.setAttribute('aria-label', ariaLabel)
            }
          })
        }
      }, {
        key: 'pageId',
        get: function get () {
          return this.pageLabel !== null ? this.pageLabel : this.id
        }
      }], [{
        key: 'cleanup',
        value: function cleanup () {
          TempImageFactory.destroyCanvas()
        }
      }])

      return PDFThumbnailView
    }())

    exports.PDFThumbnailView = PDFThumbnailView
    /***/ },
  /* 26 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFThumbnailViewer = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    const _pdf_thumbnail_view = __webpack_require__(25)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const THUMBNAIL_SCROLL_MARGIN = -19

    const PDFThumbnailViewer = (function () {
      function PDFThumbnailViewer (_ref) {
        const container = _ref.container
        const linkService = _ref.linkService
        const renderingQueue = _ref.renderingQueue
        const _ref$l10n = _ref.l10n
        const l10n = _ref$l10n === undefined ? _ui_utils.NullL10n : _ref$l10n

        _classCallCheck(this, PDFThumbnailViewer)

        this.container = container
        this.linkService = linkService
        this.renderingQueue = renderingQueue
        this.l10n = l10n
        this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdated.bind(this))
        this._resetView()
      }

      _createClass(PDFThumbnailViewer, [{
        key: '_scrollUpdated',
        value: function _scrollUpdated () {
          this.renderingQueue.renderHighestPriority()
        }
      }, {
        key: 'getThumbnail',
        value: function getThumbnail (index) {
          return this._thumbnails[index]
        }
      }, {
        key: '_getVisibleThumbs',
        value: function _getVisibleThumbs () {
          return (0, _ui_utils.getVisibleElements)(this.container, this._thumbnails)
        }
      }, {
        key: 'scrollThumbnailIntoView',
        value: function scrollThumbnailIntoView (page) {
          const selected = document.querySelector('.thumbnail.selected')
          if (selected) {
            selected.classList.remove('selected')
          }
          const thumbnail = document.querySelector('div.thumbnail[data-page-number="' + page + '"]')
          if (thumbnail) {
            thumbnail.classList.add('selected')
          }
          const visibleThumbs = this._getVisibleThumbs()
          const numVisibleThumbs = visibleThumbs.views.length
          if (numVisibleThumbs > 0) {
            const first = visibleThumbs.first.id
            const last = numVisibleThumbs > 1 ? visibleThumbs.last.id : first
            if (page <= first || page >= last) {
              (0, _ui_utils.scrollIntoView)(thumbnail, { top: THUMBNAIL_SCROLL_MARGIN })
            }
          }
        }
      }, {
        key: 'cleanup',
        value: function cleanup () {
          _pdf_thumbnail_view.PDFThumbnailView.cleanup()
        }
      }, {
        key: '_resetView',
        value: function _resetView () {
          this._thumbnails = []
          this._pageLabels = null
          this._pagesRotation = 0
          this._pagesRequests = []
          this.container.textContent = ''
        }
      }, {
        key: 'setDocument',
        value: function setDocument (pdfDocument) {
          const _this = this

          if (this.pdfDocument) {
            this._cancelRendering()
            this._resetView()
          }
          this.pdfDocument = pdfDocument
          if (!pdfDocument) {
            return
          }
          pdfDocument.getPage(1).then(function (firstPage) {
            const pagesCount = pdfDocument.numPages
            const viewport = firstPage.getViewport(1.0)
            for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
              const thumbnail = new _pdf_thumbnail_view.PDFThumbnailView({
                container: _this.container,
                id: pageNum,
                defaultViewport: viewport.clone(),
                linkService: _this.linkService,
                renderingQueue: _this.renderingQueue,
                disableCanvasToImageConversion: false,
                l10n: _this.l10n
              })
              _this._thumbnails.push(thumbnail)
            }
          }).catch(function (reason) {
            console.error('Unable to initialize thumbnail viewer', reason)
          })
        }
      }, {
        key: '_cancelRendering',
        value: function _cancelRendering () {
          for (let i = 0, ii = this._thumbnails.length; i < ii; i++) {
            if (this._thumbnails[i]) {
              this._thumbnails[i].cancelRendering()
            }
          }
        }
      }, {
        key: 'setPageLabels',
        value: function setPageLabels (labels) {
          if (!this.pdfDocument) {
            return
          }
          if (!labels) {
            this._pageLabels = null
          } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null
            console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.')
          } else {
            this._pageLabels = labels
          }
          for (let i = 0, ii = this._thumbnails.length; i < ii; i++) {
            const label = this._pageLabels && this._pageLabels[i]
            this._thumbnails[i].setPageLabel(label)
          }
        }
      }, {
        key: '_ensurePdfPageLoaded',
        value: function _ensurePdfPageLoaded (thumbView) {
          const _this2 = this

          if (thumbView.pdfPage) {
            return Promise.resolve(thumbView.pdfPage)
          }
          const pageNumber = thumbView.id
          if (this._pagesRequests[pageNumber]) {
            return this._pagesRequests[pageNumber]
          }
          const promise = this.pdfDocument.getPage(pageNumber).then(function (pdfPage) {
            thumbView.setPdfPage(pdfPage)
            _this2._pagesRequests[pageNumber] = null
            return pdfPage
          }).catch(function (reason) {
            console.error('Unable to get page for thumb view', reason)
            _this2._pagesRequests[pageNumber] = null
          })
          this._pagesRequests[pageNumber] = promise
          return promise
        }
      }, {
        key: 'forceRendering',
        value: function forceRendering () {
          const _this3 = this

          const visibleThumbs = this._getVisibleThumbs()
          const thumbView = this.renderingQueue.getHighestPriority(visibleThumbs, this._thumbnails, this.scroll.down)
          if (thumbView) {
            this._ensurePdfPageLoaded(thumbView).then(function () {
              _this3.renderingQueue.renderView(thumbView)
            })
            return true
          }
          return false
        }
      }, {
        key: 'pagesRotation',
        get: function get () {
          return this._pagesRotation
        },
        set: function set (rotation) {
          if (!(typeof rotation === 'number' && rotation % 90 === 0)) {
            throw new Error('Invalid thumbnails rotation angle.')
          }
          if (!this.pdfDocument) {
            return
          }
          this._pagesRotation = rotation
          for (let i = 0, ii = this._thumbnails.length; i < ii; i++) {
            this._thumbnails[i].update(rotation)
          }
        }
      }])

      return PDFThumbnailViewer
    }())

    exports.PDFThumbnailViewer = PDFThumbnailViewer
    /***/ },
  /* 27 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PDFViewer = exports.PresentationModeState = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdfjsLib = __webpack_require__(1)

    const _ui_utils = __webpack_require__(0)

    const _pdf_rendering_queue = __webpack_require__(3)

    const _annotation_layer_builder = __webpack_require__(11)

    const _dom_events = __webpack_require__(2)

    const _pdf_page_view = __webpack_require__(22)

    const _pdf_link_service = __webpack_require__(5)

    const _text_layer_builder = __webpack_require__(30)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PresentationModeState = {
      UNKNOWN: 0,
      NORMAL: 1,
      CHANGING: 2,
      FULLSCREEN: 3
    }
    const DEFAULT_CACHE_SIZE = 10
    function PDFPageViewBuffer (size) {
      const data = []
      this.push = function cachePush (view) {
        const i = data.indexOf(view)
        if (i >= 0) {
          data.splice(i, 1)
        }
        data.push(view)
        if (data.length > size) {
          data.shift().destroy()
        }
      }
      this.resize = function (newSize) {
        size = newSize
        while (data.length > size) {
          data.shift().destroy()
        }
      }
    }
    function isSameScale (oldScale, newScale) {
      if (newScale === oldScale) {
        return true
      }
      if (Math.abs(newScale - oldScale) < 1e-15) {
        return true
      }
      return false
    }
    function isPortraitOrientation (size) {
      return size.width <= size.height
    }

    const PDFViewer = (function () {
      function PDFViewer (options) {
        _classCallCheck(this, PDFViewer)

        this.container = options.container
        this.viewer = options.viewer || options.container.firstElementChild
        this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)()
        this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService()
        this.downloadManager = options.downloadManager || null
        this.removePageBorders = options.removePageBorders || false
        this.enhanceTextSelection = options.enhanceTextSelection || false
        this.renderInteractiveForms = options.renderInteractiveForms || false
        this.enablePrintAutoRotate = options.enablePrintAutoRotate || false
        this.renderer = options.renderer || _ui_utils.RendererType.CANVAS
        this.l10n = options.l10n || _ui_utils.NullL10n
        this.defaultRenderingQueue = !options.renderingQueue
        if (this.defaultRenderingQueue) {
          this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue()
          this.renderingQueue.setViewer(this)
        } else {
          this.renderingQueue = options.renderingQueue
        }
        this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this))
        this.presentationModeState = PresentationModeState.UNKNOWN
        this._resetView()
        if (this.removePageBorders) {
          this.viewer.classList.add('removePageBorders')
        }
      }

      _createClass(PDFViewer, [{
        key: 'getPageView',
        value: function getPageView (index) {
          return this._pages[index]
        }
      }, {
        key: '_setCurrentPageNumber',
        value: function _setCurrentPageNumber (val) {
          const resetCurrentPageView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          if (this._currentPageNumber === val) {
            if (resetCurrentPageView) {
              this._resetCurrentPageView()
            }
            return
          }
          if (!(val > 0 && val <= this.pagesCount)) {
            console.error('PDFViewer._setCurrentPageNumber: "' + val + '" is out of bounds.')
            return
          }
          const arg = {
            source: this,
            pageNumber: val,
            pageLabel: this._pageLabels && this._pageLabels[val - 1]
          }
          this._currentPageNumber = val
          this.eventBus.dispatch('pagechanging', arg)
          this.eventBus.dispatch('pagechange', arg)
          if (resetCurrentPageView) {
            this._resetCurrentPageView()
          }
        }
      }, {
        key: 'setDocument',
        value: function setDocument (pdfDocument) {
          const _this = this

          if (this.pdfDocument) {
            this._cancelRendering()
            this._resetView()
          }
          this.pdfDocument = pdfDocument
          if (!pdfDocument) {
            return
          }
          const pagesCount = pdfDocument.numPages
          const pagesCapability = (0, _pdfjsLib.createPromiseCapability)()
          this.pagesPromise = pagesCapability.promise
          pagesCapability.promise.then(function () {
            _this._pageViewsReady = true
            _this.eventBus.dispatch('pagesloaded', {
              source: _this,
              pagesCount
            })
          })
          let isOnePageRenderedResolved = false
          const onePageRenderedCapability = (0, _pdfjsLib.createPromiseCapability)()
          this.onePageRendered = onePageRenderedCapability.promise
          const bindOnAfterAndBeforeDraw = function bindOnAfterAndBeforeDraw (pageView) {
            pageView.onBeforeDraw = function () {
              _this._buffer.push(pageView)
            }
            pageView.onAfterDraw = function () {
              if (!isOnePageRenderedResolved) {
                isOnePageRenderedResolved = true
                onePageRenderedCapability.resolve()
              }
            }
          }
          const firstPagePromise = pdfDocument.getPage(1)
          this.firstPagePromise = firstPagePromise
          firstPagePromise.then(function (pdfPage) {
            const scale = _this.currentScale
            const viewport = pdfPage.getViewport(scale * _ui_utils.CSS_UNITS)
            for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
              let textLayerFactory = null
              if (!_pdfjsLib.PDFJS.disableTextLayer) {
                textLayerFactory = _this
              }
              const pageView = new _pdf_page_view.PDFPageView({
                container: _this.viewer,
                eventBus: _this.eventBus,
                id: pageNum,
                scale,
                defaultViewport: viewport.clone(),
                renderingQueue: _this.renderingQueue,
                textLayerFactory,
                annotationLayerFactory: _this,
                enhanceTextSelection: _this.enhanceTextSelection,
                renderInteractiveForms: _this.renderInteractiveForms,
                renderer: _this.renderer,
                l10n: _this.l10n
              })
              bindOnAfterAndBeforeDraw(pageView)
              _this._pages.push(pageView)
            }
            onePageRenderedCapability.promise.then(function () {
              if (_pdfjsLib.PDFJS.disableAutoFetch) {
                pagesCapability.resolve()
                return
              }
              let getPagesLeft = pagesCount

              const _loop = function _loop (_pageNum) {
                pdfDocument.getPage(_pageNum).then(function (pdfPage) {
                  const pageView = _this._pages[_pageNum - 1]
                  if (!pageView.pdfPage) {
                    pageView.setPdfPage(pdfPage)
                  }
                  _this.linkService.cachePageRef(_pageNum, pdfPage.ref)
                  if (--getPagesLeft === 0) {
                    pagesCapability.resolve()
                  }
                }, function (reason) {
                  console.error('Unable to get page ' + _pageNum + ' to initialize viewer', reason)
                  if (--getPagesLeft === 0) {
                    pagesCapability.resolve()
                  }
                })
              }

              for (let _pageNum = 1; _pageNum <= pagesCount; ++_pageNum) {
                _loop(_pageNum)
              }
            })
            _this.eventBus.dispatch('pagesinit', { source: _this })
            if (_this.defaultRenderingQueue) {
              _this.update()
            }
            if (_this.findController) {
              _this.findController.resolveFirstPage()
            }
          }).catch(function (reason) {
            console.error('Unable to initialize viewer', reason)
          })
        }
      }, {
        key: 'setPageLabels',
        value: function setPageLabels (labels) {
          if (!this.pdfDocument) {
            return
          }
          if (!labels) {
            this._pageLabels = null
          } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null
            console.error('PDFViewer.setPageLabels: Invalid page labels.')
          } else {
            this._pageLabels = labels
          }
          for (let i = 0, ii = this._pages.length; i < ii; i++) {
            const pageView = this._pages[i]
            const label = this._pageLabels && this._pageLabels[i]
            pageView.setPageLabel(label)
          }
        }
      }, {
        key: '_resetView',
        value: function _resetView () {
          this._pages = []
          this._currentPageNumber = 1
          this._currentScale = _ui_utils.UNKNOWN_SCALE
          this._currentScaleValue = null
          this._pageLabels = null
          this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE)
          this._location = null
          this._pagesRotation = 0
          this._pagesRequests = []
          this._pageViewsReady = false
          this.viewer.textContent = ''
        }
      }, {
        key: '_scrollUpdate',
        value: function _scrollUpdate () {
          if (this.pagesCount === 0) {
            return
          }
          this.update()
        }
      }, {
        key: '_setScaleDispatchEvent',
        value: function _setScaleDispatchEvent (newScale, newValue) {
          const preset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

          const arg = {
            source: this,
            scale: newScale,
            presetValue: preset ? newValue : undefined
          }
          this.eventBus.dispatch('scalechanging', arg)
          this.eventBus.dispatch('scalechange', arg)
        }
      }, {
        key: '_setScaleUpdatePages',
        value: function _setScaleUpdatePages (newScale, newValue) {
          const noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
          const preset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false

          this._currentScaleValue = newValue.toString()
          if (isSameScale(this._currentScale, newScale)) {
            if (preset) {
              this._setScaleDispatchEvent(newScale, newValue, true)
            }
            return
          }
          for (let i = 0, ii = this._pages.length; i < ii; i++) {
            this._pages[i].update(newScale)
          }
          this._currentScale = newScale
          if (!noScroll) {
            let page = this._currentPageNumber
            let dest = void 0
            if (this._location && !_pdfjsLib.PDFJS.ignoreCurrentPositionOnZoom && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
              page = this._location.pageNumber
              dest = [null, { name: 'XYZ' }, this._location.left, this._location.top, null]
            }
            this.scrollPageIntoView({
              pageNumber: page,
              destArray: dest,
              allowNegativeOffset: true
            })
          }
          this._setScaleDispatchEvent(newScale, newValue, preset)
          if (this.defaultRenderingQueue) {
            this.update()
          }
        }
      }, {
        key: '_setScale',
        value: function _setScale (value) {
          const noScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          let scale = parseFloat(value)
          if (scale > 0) {
            this._setScaleUpdatePages(scale, value, noScroll, false)
          } else {
            const currentPage = this._pages[this._currentPageNumber - 1]
            if (!currentPage) {
              return
            }
            const hPadding = this.isInPresentationMode || this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING
            const vPadding = this.isInPresentationMode || this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING
            const pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale
            const pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale
            switch (value) {
              case 'page-actual':
                scale = 1
                break
              case 'page-width':
                scale = pageWidthScale
                break
              case 'page-height':
                scale = pageHeightScale
                break
              case 'page-fit':
                scale = Math.min(pageWidthScale, pageHeightScale)
                break
              case 'auto':
                var isLandscape = currentPage.width > currentPage.height
                var horizontalScale = isLandscape ? Math.min(pageHeightScale, pageWidthScale) : pageWidthScale
                scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale)
                break
              default:
                console.error('PDFViewer._setScale: "' + value + '" is an unknown zoom value.')
                return
            }
            this._setScaleUpdatePages(scale, value, noScroll, true)
          }
        }
      }, {
        key: '_resetCurrentPageView',
        value: function _resetCurrentPageView () {
          if (this.isInPresentationMode) {
            this._setScale(this._currentScaleValue, true)
          }
          const pageView = this._pages[this._currentPageNumber - 1];
          (0, _ui_utils.scrollIntoView)(pageView.div)
        }
      }, {
        key: 'scrollPageIntoView',
        value: function scrollPageIntoView (params) {
          if (!this.pdfDocument) {
            return
          }
          if (arguments.length > 1 || typeof params === 'number') {
            console.warn('Call of scrollPageIntoView() with obsolete signature.')
            const paramObj = {}
            if (typeof params === 'number') {
              paramObj.pageNumber = params
            }
            if (Array.isArray(arguments[1])) {
              paramObj.destArray = arguments[1]
            }
            params = paramObj
          }
          const pageNumber = params.pageNumber || 0
          const dest = params.destArray || null
          const allowNegativeOffset = params.allowNegativeOffset || false
          if (this.isInPresentationMode || !dest) {
            this._setCurrentPageNumber(pageNumber, true)
            return
          }
          const pageView = this._pages[pageNumber - 1]
          if (!pageView) {
            console.error('PDFViewer.scrollPageIntoView: Invalid "pageNumber" parameter.')
            return
          }
          let x = 0
          let y = 0
          let width = 0
          let height = 0
          let widthScale = void 0
          let heightScale = void 0
          const changeOrientation = pageView.rotation % 180 !== 0
          const pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _ui_utils.CSS_UNITS
          const pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _ui_utils.CSS_UNITS
          let scale = 0
          switch (dest[1].name) {
            case 'XYZ':
              x = dest[2]
              y = dest[3]
              scale = dest[4]
              x = x !== null ? x : 0
              y = y !== null ? y : pageHeight
              break
            case 'Fit':
            case 'FitB':
              scale = 'page-fit'
              break
            case 'FitH':
            case 'FitBH':
              y = dest[2]
              scale = 'page-width'
              if (y === null && this._location) {
                x = this._location.left
                y = this._location.top
              }
              break
            case 'FitV':
            case 'FitBV':
              x = dest[2]
              width = pageWidth
              height = pageHeight
              scale = 'page-height'
              break
            case 'FitR':
              x = dest[2]
              y = dest[3]
              width = dest[4] - x
              height = dest[5] - y
              var hPadding = this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING
              var vPadding = this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING
              widthScale = (this.container.clientWidth - hPadding) / width / _ui_utils.CSS_UNITS
              heightScale = (this.container.clientHeight - vPadding) / height / _ui_utils.CSS_UNITS
              scale = Math.min(Math.abs(widthScale), Math.abs(heightScale))
              break
            default:
              console.error('PDFViewer.scrollPageIntoView: "' + dest[1].name + '" ' + 'is not a valid destination type.')
              return
          }
          if (scale && scale !== this._currentScale) {
            this.currentScaleValue = scale
          } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
            this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE
          }
          if (scale === 'page-fit' && !dest[4]) {
            (0, _ui_utils.scrollIntoView)(pageView.div)
            return
          }
          const boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)]
          let left = Math.min(boundingRect[0][0], boundingRect[1][0])
          let top = Math.min(boundingRect[0][1], boundingRect[1][1])
          if (!allowNegativeOffset) {
            left = Math.max(left, 0)
            top = Math.max(top, 0)
          }
          (0, _ui_utils.scrollIntoView)(pageView.div, {
            left,
            top
          })
        }
      }, {
        key: '_updateLocation',
        value: function _updateLocation (firstPage) {
          const currentScale = this._currentScale
          const currentScaleValue = this._currentScaleValue
          const normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue
          const pageNumber = firstPage.id
          let pdfOpenParams = '#page=' + pageNumber
          pdfOpenParams += '&zoom=' + normalizedScaleValue
          const currentPageView = this._pages[pageNumber - 1]
          const container = this.container
          const topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y)
          const intLeft = Math.round(topLeft[0])
          const intTop = Math.round(topLeft[1])
          pdfOpenParams += ',' + intLeft + ',' + intTop
          this._location = {
            pageNumber,
            scale: normalizedScaleValue,
            top: intTop,
            left: intLeft,
            pdfOpenParams
          }
        }
      }, {
        key: 'update',
        value: function update () {
          const visible = this._getVisiblePages()
          const visiblePages = visible.views
          if (visiblePages.length === 0) {
            return
          }
          const suggestedCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * visiblePages.length + 1)
          this._buffer.resize(suggestedCacheSize)
          this.renderingQueue.renderHighestPriority(visible)
          let currentId = this._currentPageNumber
          const firstPage = visible.first
          let stillFullyVisible = false
          for (let i = 0, ii = visiblePages.length; i < ii; ++i) {
            const page = visiblePages[i]
            if (page.percent < 100) {
              break
            }
            if (page.id === currentId) {
              stillFullyVisible = true
              break
            }
          }
          if (!stillFullyVisible) {
            currentId = visiblePages[0].id
          }
          if (!this.isInPresentationMode) {
            this._setCurrentPageNumber(currentId)
          }
          this._updateLocation(firstPage)
          this.eventBus.dispatch('updateviewarea', {
            source: this,
            location: this._location
          })
        }
      }, {
        key: 'containsElement',
        value: function containsElement (element) {
          return this.container.contains(element)
        }
      }, {
        key: 'focus',
        value: function focus () {
          this.container.focus()
        }
      }, {
        key: '_getVisiblePages',
        value: function _getVisiblePages () {
          if (!this.isInPresentationMode) {
            return (0, _ui_utils.getVisibleElements)(this.container, this._pages, true)
          }
          const visible = []
          const currentPage = this._pages[this._currentPageNumber - 1]
          visible.push({
            id: currentPage.id,
            view: currentPage
          })
          return {
            first: currentPage,
            last: currentPage,
            views: visible
          }
        }
      }, {
        key: 'cleanup',
        value: function cleanup () {
          for (let i = 0, ii = this._pages.length; i < ii; i++) {
            if (this._pages[i] && this._pages[i].renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
              this._pages[i].reset()
            }
          }
        }
      }, {
        key: '_cancelRendering',
        value: function _cancelRendering () {
          for (let i = 0, ii = this._pages.length; i < ii; i++) {
            if (this._pages[i]) {
              this._pages[i].cancelRendering()
            }
          }
        }
      }, {
        key: '_ensurePdfPageLoaded',
        value: function _ensurePdfPageLoaded (pageView) {
          const _this2 = this

          if (pageView.pdfPage) {
            return Promise.resolve(pageView.pdfPage)
          }
          const pageNumber = pageView.id
          if (this._pagesRequests[pageNumber]) {
            return this._pagesRequests[pageNumber]
          }
          const promise = this.pdfDocument.getPage(pageNumber).then(function (pdfPage) {
            if (!pageView.pdfPage) {
              pageView.setPdfPage(pdfPage)
            }
            _this2._pagesRequests[pageNumber] = null
            return pdfPage
          }).catch(function (reason) {
            console.error('Unable to get page for page view', reason)
            _this2._pagesRequests[pageNumber] = null
          })
          this._pagesRequests[pageNumber] = promise
          return promise
        }
      }, {
        key: 'forceRendering',
        value: function forceRendering (currentlyVisiblePages) {
          const _this3 = this

          const visiblePages = currentlyVisiblePages || this._getVisiblePages()
          const pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, this.scroll.down)
          if (pageView) {
            this._ensurePdfPageLoaded(pageView).then(function () {
              _this3.renderingQueue.renderView(pageView)
            })
            return true
          }
          return false
        }
      }, {
        key: 'getPageTextContent',
        value: function getPageTextContent (pageIndex) {
          return this.pdfDocument.getPage(pageIndex + 1).then(function (page) {
            return page.getTextContent({ normalizeWhitespace: true })
          })
        }
      }, {
        key: 'createTextLayerBuilder',
        value: function createTextLayerBuilder (textLayerDiv, pageIndex, viewport) {
          const enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false

          return new _text_layer_builder.TextLayerBuilder({
            textLayerDiv,
            eventBus: this.eventBus,
            pageIndex,
            viewport,
            findController: this.isInPresentationMode ? null : this.findController,
            enhanceTextSelection: this.isInPresentationMode ? false : enhanceTextSelection
          })
        }
      }, {
        key: 'createAnnotationLayerBuilder',
        value: function createAnnotationLayerBuilder (pageDiv, pdfPage) {
          const renderInteractiveForms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
          const l10n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _ui_utils.NullL10n

          return new _annotation_layer_builder.AnnotationLayerBuilder({
            pageDiv,
            pdfPage,
            renderInteractiveForms,
            linkService: this.linkService,
            downloadManager: this.downloadManager,
            l10n
          })
        }
      }, {
        key: 'setFindController',
        value: function setFindController (findController) {
          this.findController = findController
        }
      }, {
        key: 'getPagesOverview',
        value: function getPagesOverview () {
          const pagesOverview = this._pages.map(function (pageView) {
            const viewport = pageView.pdfPage.getViewport(1)
            return {
              width: viewport.width,
              height: viewport.height,
              rotation: viewport.rotation
            }
          })
          if (!this.enablePrintAutoRotate) {
            return pagesOverview
          }
          const isFirstPagePortrait = isPortraitOrientation(pagesOverview[0])
          return pagesOverview.map(function (size) {
            if (isFirstPagePortrait === isPortraitOrientation(size)) {
              return size
            }
            return {
              width: size.height,
              height: size.width,
              rotation: (size.rotation + 90) % 360
            }
          })
        }
      }, {
        key: 'pagesCount',
        get: function get () {
          return this._pages.length
        }
      }, {
        key: 'pageViewsReady',
        get: function get () {
          return this._pageViewsReady
        }
      }, {
        key: 'currentPageNumber',
        get: function get () {
          return this._currentPageNumber
        },
        set: function set (val) {
          if ((val | 0) !== val) {
            throw new Error('Invalid page number.')
          }
          if (!this.pdfDocument) {
            return
          }
          this._setCurrentPageNumber(val, true)
        }
      }, {
        key: 'currentPageLabel',
        get: function get () {
          return this._pageLabels && this._pageLabels[this._currentPageNumber - 1]
        },
        set: function set (val) {
          let pageNumber = val | 0
          if (this._pageLabels) {
            const i = this._pageLabels.indexOf(val)
            if (i >= 0) {
              pageNumber = i + 1
            }
          }
          this.currentPageNumber = pageNumber
        }
      }, {
        key: 'currentScale',
        get: function get () {
          return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE
        },
        set: function set (val) {
          if (isNaN(val)) {
            throw new TypeError('Invalid numeric scale')
          }
          if (!this.pdfDocument) {
            return
          }
          this._setScale(val, false)
        }
      }, {
        key: 'currentScaleValue',
        get: function get () {
          return this._currentScaleValue
        },
        set: function set (val) {
          if (!this.pdfDocument) {
            return
          }
          this._setScale(val, false)
        }
      }, {
        key: 'pagesRotation',
        get: function get () {
          return this._pagesRotation
        },
        set: function set (rotation) {
          if (!(typeof rotation === 'number' && rotation % 90 === 0)) {
            throw new Error('Invalid pages rotation angle.')
          }
          if (!this.pdfDocument) {
            return
          }
          this._pagesRotation = rotation
          for (let i = 0, ii = this._pages.length; i < ii; i++) {
            const pageView = this._pages[i]
            pageView.update(pageView.scale, rotation)
          }
          this._setScale(this._currentScaleValue, true)
          if (this.defaultRenderingQueue) {
            this.update()
          }
        }
      }, {
        key: 'isInPresentationMode',
        get: function get () {
          return this.presentationModeState === PresentationModeState.FULLSCREEN
        }
      }, {
        key: 'isChangingPresentationMode',
        get: function get () {
          return this.presentationModeState === PresentationModeState.CHANGING
        }
      }, {
        key: 'isHorizontalScrollbarEnabled',
        get: function get () {
          return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth
        }
      }, {
        key: 'hasEqualPageSizes',
        get: function get () {
          const firstPageView = this._pages[0]
          for (let i = 1, ii = this._pages.length; i < ii; ++i) {
            const pageView = this._pages[i]
            if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
              return false
            }
          }
          return true
        }
      }])

      return PDFViewer
    }())

    exports.PresentationModeState = PresentationModeState
    exports.PDFViewer = PDFViewer
    /***/ },
  /* 28 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.BasePreferences = undefined

    const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    let defaultPreferences = null
    function getDefaultPreferences () {
      if (!defaultPreferences) {
        defaultPreferences = Promise.resolve({
          showPreviousViewOnLoad: true,
          defaultZoomValue: '',
          sidebarViewOnLoad: 0,
          enableHandToolOnLoad: false,
          cursorToolOnLoad: 0,
          enableWebGL: false,
          pdfBugEnabled: false,
          disableRange: false,
          disableStream: false,
          disableAutoFetch: false,
          disableFontFace: false,
          disableTextLayer: false,
          useOnlyCssZoom: false,
          externalLinkTarget: 0,
          enhanceTextSelection: false,
          renderer: 'canvas',
          renderInteractiveForms: false,
          enablePrintAutoRotate: false,
          disablePageMode: false,
          disablePageLabels: false
        })
      }
      return defaultPreferences
    }

    const BasePreferences = (function () {
      function BasePreferences () {
        const _this = this

        _classCallCheck(this, BasePreferences)

        if (this.constructor === BasePreferences) {
          throw new Error('Cannot initialize BasePreferences.')
        }
        this.prefs = null
        this._initializedPromise = getDefaultPreferences().then(function (defaults) {
          Object.defineProperty(_this, 'defaults', {
            value: Object.freeze(defaults),
            writable: false,
            enumerable: true,
            configurable: false
          })
          _this.prefs = (0, _ui_utils.cloneObj)(defaults)
          return _this._readFromStorage(defaults)
        }).then(function (prefObj) {
          if (prefObj) {
            _this.prefs = prefObj
          }
        })
      }

      _createClass(BasePreferences, [{
        key: '_writeToStorage',
        value: function _writeToStorage (prefObj) {
          return Promise.reject(new Error('Not implemented: _writeToStorage'))
        }
      }, {
        key: '_readFromStorage',
        value: function _readFromStorage (prefObj) {
          return Promise.reject(new Error('Not implemented: _readFromStorage'))
        }
      }, {
        key: 'reset',
        value: function reset () {
          const _this2 = this

          return this._initializedPromise.then(function () {
            _this2.prefs = (0, _ui_utils.cloneObj)(_this2.defaults)
            return _this2._writeToStorage(_this2.defaults)
          })
        }
      }, {
        key: 'reload',
        value: function reload () {
          const _this3 = this

          return this._initializedPromise.then(function () {
            return _this3._readFromStorage(_this3.defaults)
          }).then(function (prefObj) {
            if (prefObj) {
              _this3.prefs = prefObj
            }
          })
        }
      }, {
        key: 'set',
        value: function set (name, value) {
          const _this4 = this

          return this._initializedPromise.then(function () {
            if (_this4.defaults[name] === undefined) {
              throw new Error('Set preference: "' + name + '" is undefined.')
            } else if (value === undefined) {
              throw new Error('Set preference: no value is specified.')
            }
            const valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value)
            const defaultType = _typeof(_this4.defaults[name])
            if (valueType !== defaultType) {
              if (valueType === 'number' && defaultType === 'string') {
                value = value.toString()
              } else {
                throw new Error('Set preference: "' + value + '" is a ' + valueType + ', ' + ('expected a ' + defaultType + '.'))
              }
            } else if (valueType === 'number' && (value | 0) !== value) {
              throw new Error('Set preference: "' + value + '" must be an integer.')
            }
            _this4.prefs[name] = value
            return _this4._writeToStorage(_this4.prefs)
          })
        }
      }, {
        key: 'get',
        value: function get (name) {
          const _this5 = this

          return this._initializedPromise.then(function () {
            const defaultValue = _this5.defaults[name]
            if (defaultValue === undefined) {
              throw new Error('Get preference: "' + name + '" is undefined.')
            } else {
              const prefValue = _this5.prefs[name]
              if (prefValue !== undefined) {
                return prefValue
              }
            }
            return defaultValue
          })
        }
      }])

      return BasePreferences
    }())

    exports.BasePreferences = BasePreferences
    /***/ },
  /* 29 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.SecondaryToolbar = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _pdf_cursor_tools = __webpack_require__(6)

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const SecondaryToolbar = (function () {
      function SecondaryToolbar (options, mainContainer, eventBus) {
        _classCallCheck(this, SecondaryToolbar)

        this.toolbar = options.toolbar
        this.toggleButton = options.toggleButton
        this.toolbarButtonContainer = options.toolbarButtonContainer
        this.buttons = [{
          element: options.presentationModeButton,
          eventName: 'presentationmode',
          close: true
        }, {
          element: options.openFileButton,
          eventName: 'openfile',
          close: true
        }, {
          element: options.printButton,
          eventName: 'print',
          close: true
        }, {
          element: options.downloadButton,
          eventName: 'download',
          close: true
        }, {
          element: options.viewBookmarkButton,
          eventName: null,
          close: true
        }, {
          element: options.firstPageButton,
          eventName: 'firstpage',
          close: true
        }, {
          element: options.lastPageButton,
          eventName: 'lastpage',
          close: true
        }, {
          element: options.pageRotateCwButton,
          eventName: 'rotatecw',
          close: false
        }, {
          element: options.pageRotateCcwButton,
          eventName: 'rotateccw',
          close: false
        }, {
          element: options.cursorSelectToolButton,
          eventName: 'switchcursortool',
          eventDetails: { tool: _pdf_cursor_tools.CursorTool.SELECT },
          close: true
        }, {
          element: options.cursorHandToolButton,
          eventName: 'switchcursortool',
          eventDetails: { tool: _pdf_cursor_tools.CursorTool.HAND },
          close: true
        }, {
          element: options.documentPropertiesButton,
          eventName: 'documentproperties',
          close: true
        }]
        this.items = {
          firstPage: options.firstPageButton,
          lastPage: options.lastPageButton,
          pageRotateCw: options.pageRotateCwButton,
          pageRotateCcw: options.pageRotateCcwButton
        }
        this.mainContainer = mainContainer
        this.eventBus = eventBus
        this.opened = false
        this.containerHeight = null
        this.previousContainerHeight = null
        this.reset()
        this._bindClickListeners()
        this._bindCursorToolsListener(options)
        this.eventBus.on('resize', this._setMaxHeight.bind(this))
      }

      _createClass(SecondaryToolbar, [{
        key: 'setPageNumber',
        value: function setPageNumber (pageNumber) {
          this.pageNumber = pageNumber
          this._updateUIState()
        }
      }, {
        key: 'setPagesCount',
        value: function setPagesCount (pagesCount) {
          this.pagesCount = pagesCount
          this._updateUIState()
        }
      }, {
        key: 'reset',
        value: function reset () {
          this.pageNumber = 0
          this.pagesCount = 0
          this._updateUIState()
        }
      }, {
        key: '_updateUIState',
        value: function _updateUIState () {
          this.items.firstPage.disabled = this.pageNumber <= 1
          this.items.lastPage.disabled = this.pageNumber >= this.pagesCount
          this.items.pageRotateCw.disabled = this.pagesCount === 0
          this.items.pageRotateCcw.disabled = this.pagesCount === 0
        }
      }, {
        key: '_bindClickListeners',
        value: function _bindClickListeners () {
          const _this = this

          this.toggleButton.addEventListener('click', this.toggle.bind(this))

          const _loop = function _loop (button) {
            const _buttons$button = _this.buttons[button]
            const element = _buttons$button.element
            const eventName = _buttons$button.eventName
            const close = _buttons$button.close
            const eventDetails = _buttons$button.eventDetails

            element.addEventListener('click', function (evt) {
              if (eventName !== null) {
                const details = { source: _this }
                for (const property in eventDetails) {
                  details[property] = eventDetails[property]
                }
                _this.eventBus.dispatch(eventName, details)
              }
              if (close) {
                _this.close()
              }
            })
          }

          for (const button in this.buttons) {
            _loop(button)
          }
        }
      }, {
        key: '_bindCursorToolsListener',
        value: function _bindCursorToolsListener (buttons) {
          this.eventBus.on('cursortoolchanged', function (evt) {
            buttons.cursorSelectToolButton.classList.remove('toggled')
            buttons.cursorHandToolButton.classList.remove('toggled')
            switch (evt.tool) {
              case _pdf_cursor_tools.CursorTool.SELECT:
                buttons.cursorSelectToolButton.classList.add('toggled')
                break
              case _pdf_cursor_tools.CursorTool.HAND:
                buttons.cursorHandToolButton.classList.add('toggled')
                break
            }
          })
        }
      }, {
        key: 'open',
        value: function open () {
          if (this.opened) {
            return
          }
          this.opened = true
          this._setMaxHeight()
          this.toggleButton.classList.add('toggled')
          this.toolbar.classList.remove('hidden')
        }
      }, {
        key: 'close',
        value: function close () {
          if (!this.opened) {
            return
          }
          this.opened = false
          this.toolbar.classList.add('hidden')
          this.toggleButton.classList.remove('toggled')
        }
      }, {
        key: 'toggle',
        value: function toggle () {
          if (this.opened) {
            this.close()
          } else {
            this.open()
          }
        }
      }, {
        key: '_setMaxHeight',
        value: function _setMaxHeight () {
          if (!this.opened) {
            return
          }
          this.containerHeight = this.mainContainer.clientHeight
          if (this.containerHeight === this.previousContainerHeight) {
            return
          }
          this.toolbarButtonContainer.setAttribute('style', 'max-height: ' + (this.containerHeight - _ui_utils.SCROLLBAR_PADDING) + 'px;')
          this.previousContainerHeight = this.containerHeight
        }
      }, {
        key: 'isOpen',
        get: function get () {
          return this.opened
        }
      }])

      return SecondaryToolbar
    }())

    exports.SecondaryToolbar = SecondaryToolbar
    /***/ },
  /* 30 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.DefaultTextLayerFactory = exports.TextLayerBuilder = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _dom_events = __webpack_require__(2)

    const _pdfjsLib = __webpack_require__(1)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const EXPAND_DIVS_TIMEOUT = 300

    const TextLayerBuilder = (function () {
      function TextLayerBuilder (_ref) {
        const textLayerDiv = _ref.textLayerDiv
        const eventBus = _ref.eventBus
        const pageIndex = _ref.pageIndex
        const viewport = _ref.viewport
        const _ref$findController = _ref.findController
        const findController = _ref$findController === undefined ? null : _ref$findController
        const _ref$enhanceTextSelec = _ref.enhanceTextSelection
        const enhanceTextSelection = _ref$enhanceTextSelec === undefined ? false : _ref$enhanceTextSelec

        _classCallCheck(this, TextLayerBuilder)

        this.textLayerDiv = textLayerDiv
        this.eventBus = eventBus || (0, _dom_events.getGlobalEventBus)()
        this.textContent = null
        this.textContentItemsStr = []
        this.textContentStream = null
        this.renderingDone = false
        this.pageIdx = pageIndex
        this.pageNumber = this.pageIdx + 1
        this.matches = []
        this.viewport = viewport
        this.textDivs = []
        this.findController = findController
        this.textLayerRenderTask = null
        this.enhanceTextSelection = enhanceTextSelection
        this._bindMouse()
      }

      _createClass(TextLayerBuilder, [{
        key: '_finishRendering',
        value: function _finishRendering () {
          this.renderingDone = true
          if (!this.enhanceTextSelection) {
            const endOfContent = document.createElement('div')
            endOfContent.className = 'endOfContent'
            this.textLayerDiv.appendChild(endOfContent)
          }
          this.eventBus.dispatch('textlayerrendered', {
            source: this,
            pageNumber: this.pageNumber,
            numTextDivs: this.textDivs.length
          })
        }
      }, {
        key: 'render',
        value: function render () {
          const _this = this

          const timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

          if (!(this.textContent || this.textContentStream) || this.renderingDone) {
            return
          }
          this.cancel()
          this.textDivs = []
          const textLayerFrag = document.createDocumentFragment()
          this.textLayerRenderTask = (0, _pdfjsLib.renderTextLayer)({
            textContent: this.textContent,
            textContentStream: this.textContentStream,
            container: textLayerFrag,
            viewport: this.viewport,
            textDivs: this.textDivs,
            textContentItemsStr: this.textContentItemsStr,
            timeout,
            enhanceTextSelection: this.enhanceTextSelection
          })
          this.textLayerRenderTask.promise.then(function () {
            _this.textLayerDiv.appendChild(textLayerFrag)
            _this._finishRendering()
            _this.updateMatches()
          }, function (reason) {})
        }
      }, {
        key: 'cancel',
        value: function cancel () {
          if (this.textLayerRenderTask) {
            this.textLayerRenderTask.cancel()
            this.textLayerRenderTask = null
          }
        }
      }, {
        key: 'setTextContentStream',
        value: function setTextContentStream (readableStream) {
          this.cancel()
          this.textContentStream = readableStream
        }
      }, {
        key: 'setTextContent',
        value: function setTextContent (textContent) {
          this.cancel()
          this.textContent = textContent
        }
      }, {
        key: 'convertMatches',
        value: function convertMatches (matches, matchesLength) {
          let i = 0
          let iIndex = 0
          const textContentItemsStr = this.textContentItemsStr
          const end = textContentItemsStr.length - 1
          const queryLen = this.findController === null ? 0 : this.findController.state.query.length
          const ret = []
          if (!matches) {
            return ret
          }
          for (let m = 0, len = matches.length; m < len; m++) {
            let matchIdx = matches[m]
            while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
              iIndex += textContentItemsStr[i].length
              i++
            }
            if (i === textContentItemsStr.length) {
              console.error('Could not find a matching mapping')
            }
            const match = {
              begin: {
                divIdx: i,
                offset: matchIdx - iIndex
              }
            }
            if (matchesLength) {
              matchIdx += matchesLength[m]
            } else {
              matchIdx += queryLen
            }
            while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
              iIndex += textContentItemsStr[i].length
              i++
            }
            match.end = {
              divIdx: i,
              offset: matchIdx - iIndex
            }
            ret.push(match)
          }
          return ret
        }
      }, {
        key: 'renderMatches',
        value: function renderMatches (matches) {
          if (matches.length === 0) {
            return
          }
          const textContentItemsStr = this.textContentItemsStr
          const textDivs = this.textDivs
          let prevEnd = null
          const pageIdx = this.pageIdx
          const isSelectedPage = this.findController === null ? false : pageIdx === this.findController.selected.pageIdx
          const selectedMatchIdx = this.findController === null ? -1 : this.findController.selected.matchIdx
          const highlightAll = this.findController === null ? false : this.findController.state.highlightAll
          const infinity = {
            divIdx: -1,
            offset: undefined
          }
          function beginText (begin, className) {
            const divIdx = begin.divIdx
            textDivs[divIdx].textContent = ''
            appendTextToDiv(divIdx, 0, begin.offset, className)
          }
          function appendTextToDiv (divIdx, fromOffset, toOffset, className) {
            const div = textDivs[divIdx]
            const content = textContentItemsStr[divIdx].substring(fromOffset, toOffset)
            const node = document.createTextNode(content)
            if (className) {
              const span = document.createElement('span')
              span.className = className
              span.appendChild(node)
              div.appendChild(span)
              return
            }
            div.appendChild(node)
          }
          let i0 = selectedMatchIdx
          let i1 = i0 + 1
          if (highlightAll) {
            i0 = 0
            i1 = matches.length
          } else if (!isSelectedPage) {
            return
          }
          for (let i = i0; i < i1; i++) {
            const match = matches[i]
            const begin = match.begin
            const end = match.end
            const isSelected = isSelectedPage && i === selectedMatchIdx
            const highlightSuffix = isSelected ? ' selected' : ''
            if (this.findController) {
              this.findController.updateMatchPosition(pageIdx, i, textDivs, begin.divIdx)
            }
            if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
              if (prevEnd !== null) {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset)
              }
              beginText(begin)
            } else {
              appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset)
            }
            if (begin.divIdx === end.divIdx) {
              appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix)
            } else {
              appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix)
              for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                textDivs[n0].className = 'highlight middle' + highlightSuffix
              }
              beginText(end, 'highlight end' + highlightSuffix)
            }
            prevEnd = end
          }
          if (prevEnd) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset)
          }
        }
      }, {
        key: 'updateMatches',
        value: function updateMatches () {
          if (!this.renderingDone) {
            return
          }
          const matches = this.matches
          const textDivs = this.textDivs
          const textContentItemsStr = this.textContentItemsStr
          let clearedUntilDivIdx = -1
          for (let i = 0, len = matches.length; i < len; i++) {
            const match = matches[i]
            const begin = Math.max(clearedUntilDivIdx, match.begin.divIdx)
            for (let n = begin, end = match.end.divIdx; n <= end; n++) {
              const div = textDivs[n]
              div.textContent = textContentItemsStr[n]
              div.className = ''
            }
            clearedUntilDivIdx = match.end.divIdx + 1
          }
          if (this.findController === null || !this.findController.active) {
            return
          }
          let pageMatches = void 0
          let pageMatchesLength = void 0
          if (this.findController !== null) {
            pageMatches = this.findController.pageMatches[this.pageIdx] || null
            pageMatchesLength = this.findController.pageMatchesLength ? this.findController.pageMatchesLength[this.pageIdx] || null : null
          }
          this.matches = this.convertMatches(pageMatches, pageMatchesLength)
          this.renderMatches(this.matches)
        }
      }, {
        key: '_bindMouse',
        value: function _bindMouse () {
          const _this2 = this

          const div = this.textLayerDiv
          let expandDivsTimer = null
          div.addEventListener('mousedown', function (evt) {
            if (_this2.enhanceTextSelection && _this2.textLayerRenderTask) {
              _this2.textLayerRenderTask.expandTextDivs(true)
              if (expandDivsTimer) {
                clearTimeout(expandDivsTimer)
                expandDivsTimer = null
              }
              return
            }
            const end = div.querySelector('.endOfContent')
            if (!end) {
              return
            }
            let adjustTop = evt.target !== div
            adjustTop = adjustTop && window.getComputedStyle(end).getPropertyValue('-moz-user-select') !== 'none'
            if (adjustTop) {
              const divBounds = div.getBoundingClientRect()
              const r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height)
              end.style.top = (r * 100).toFixed(2) + '%'
            }
            end.classList.add('active')
          })
          div.addEventListener('mouseup', function () {
            if (_this2.enhanceTextSelection && _this2.textLayerRenderTask) {
              expandDivsTimer = setTimeout(function () {
                if (_this2.textLayerRenderTask) {
                  _this2.textLayerRenderTask.expandTextDivs(false)
                }
                expandDivsTimer = null
              }, EXPAND_DIVS_TIMEOUT)
              return
            }
            const end = div.querySelector('.endOfContent')
            if (!end) {
              return
            }
            end.style.top = ''
            end.classList.remove('active')
          })
        }
      }])

      return TextLayerBuilder
    }())

    const DefaultTextLayerFactory = (function () {
      function DefaultTextLayerFactory () {
        _classCallCheck(this, DefaultTextLayerFactory)
      }

      _createClass(DefaultTextLayerFactory, [{
        key: 'createTextLayerBuilder',
        value: function createTextLayerBuilder (textLayerDiv, pageIndex, viewport) {
          const enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false

          return new TextLayerBuilder({
            textLayerDiv,
            pageIndex,
            viewport,
            enhanceTextSelection
          })
        }
      }])

      return DefaultTextLayerFactory
    }())

    exports.TextLayerBuilder = TextLayerBuilder
    exports.DefaultTextLayerFactory = DefaultTextLayerFactory
    /***/ },
  /* 31 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.Toolbar = undefined

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    const _ui_utils = __webpack_require__(0)

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const PAGE_NUMBER_LOADING_INDICATOR = 'visiblePageIsLoading'
    const SCALE_SELECT_CONTAINER_PADDING = 8
    const SCALE_SELECT_PADDING = 22

    const Toolbar = (function () {
      function Toolbar (options, mainContainer, eventBus) {
        const l10n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _ui_utils.NullL10n

        _classCallCheck(this, Toolbar)

        this.toolbar = options.container
        this.mainContainer = mainContainer
        this.eventBus = eventBus
        this.l10n = l10n
        this.items = options
        this._wasLocalized = false
        this.reset()
        this._bindListeners()
      }

      _createClass(Toolbar, [{
        key: 'setPageNumber',
        value: function setPageNumber (pageNumber, pageLabel) {
          this.pageNumber = pageNumber
          this.pageLabel = pageLabel
          this._updateUIState(false)
        }
      }, {
        key: 'setPagesCount',
        value: function setPagesCount (pagesCount, hasPageLabels) {
          this.pagesCount = pagesCount
          this.hasPageLabels = hasPageLabels
          this._updateUIState(true)
        }
      }, {
        key: 'setPageScale',
        value: function setPageScale (pageScaleValue, pageScale) {
          this.pageScaleValue = pageScaleValue
          this.pageScale = pageScale
          this._updateUIState(false)
        }
      }, {
        key: 'reset',
        value: function reset () {
          this.pageNumber = 0
          this.pageLabel = null
          this.hasPageLabels = false
          this.pagesCount = 0
          this.pageScaleValue = _ui_utils.DEFAULT_SCALE_VALUE
          this.pageScale = _ui_utils.DEFAULT_SCALE
          this._updateUIState(true)
        }
      }, {
        key: '_bindListeners',
        value: function _bindListeners () {
          const _this = this

          const eventBus = this.eventBus
          const items = this.items

          const self = this
          items.previous.addEventListener('click', function () {
            eventBus.dispatch('previouspage')
          })
          items.next.addEventListener('click', function () {
            eventBus.dispatch('nextpage')
          })
          items.zoomIn.addEventListener('click', function () {
            eventBus.dispatch('zoomin')
          })
          items.zoomOut.addEventListener('click', function () {
            eventBus.dispatch('zoomout')
          })
          items.pageNumber.addEventListener('click', function () {
            this.select()
          })
          items.pageNumber.addEventListener('change', function () {
            eventBus.dispatch('pagenumberchanged', {
              source: self,
              value: this.value
            })
          })
          items.scaleSelect.addEventListener('change', function () {
            if (this.value === 'custom') {
              return
            }
            eventBus.dispatch('scalechanged', {
              source: self,
              value: this.value
            })
          })
          items.presentationModeButton.addEventListener('click', function () {
            eventBus.dispatch('presentationmode')
          })
          items.openFile.addEventListener('click', function () {
            eventBus.dispatch('openfile')
          })
          items.print.addEventListener('click', function () {
            eventBus.dispatch('print')
          })
          items.download.addEventListener('click', function () {
            eventBus.dispatch('download')
          })
          items.scaleSelect.oncontextmenu = _ui_utils.noContextMenuHandler
          eventBus.on('localized', function () {
            _this._localized()
          })
        }
      }, {
        key: '_localized',
        value: function _localized () {
          this._wasLocalized = true
          this._adjustScaleWidth()
          this._updateUIState(true)
        }
      }, {
        key: '_updateUIState',
        value: function _updateUIState () {
          const resetNumPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          if (!this._wasLocalized) {
            return
          }
          const pageNumber = this.pageNumber
          const pagesCount = this.pagesCount
          const items = this.items

          const scaleValue = (this.pageScaleValue || this.pageScale).toString()
          const scale = this.pageScale
          if (resetNumPages) {
            if (this.hasPageLabels) {
              items.pageNumber.type = 'text'
            } else {
              items.pageNumber.type = 'number'
              this.l10n.get('of_pages', { pagesCount }, 'of {{pagesCount}}').then(function (msg) {
                items.numPages.textContent = msg
              })
            }
            items.pageNumber.max = pagesCount
          }
          if (this.hasPageLabels) {
            items.pageNumber.value = this.pageLabel
            this.l10n.get('page_of_pages', {
              pageNumber,
              pagesCount
            }, '({{pageNumber}} of {{pagesCount}})').then(function (msg) {
              items.numPages.textContent = msg
            })
          } else {
            items.pageNumber.value = pageNumber
          }
          items.previous.disabled = pageNumber <= 1
          items.next.disabled = pageNumber >= pagesCount
          items.zoomOut.disabled = scale <= _ui_utils.MIN_SCALE
          items.zoomIn.disabled = scale >= _ui_utils.MAX_SCALE
          const customScale = Math.round(scale * 10000) / 100
          this.l10n.get('page_scale_percent', { scale: customScale }, '{{scale}}%').then(function (msg) {
            const options = items.scaleSelect.options
            let predefinedValueFound = false
            for (let i = 0, ii = options.length; i < ii; i++) {
              const option = options[i]
              if (option.value !== scaleValue) {
                option.selected = false
                continue
              }
              option.selected = true
              predefinedValueFound = true
            }
            if (!predefinedValueFound) {
              items.customScaleOption.textContent = msg
              items.customScaleOption.selected = true
            }
          })
        }
      }, {
        key: 'updateLoadingIndicatorState',
        value: function updateLoadingIndicatorState () {
          const loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false

          const pageNumberInput = this.items.pageNumber
          if (loading) {
            pageNumberInput.classList.add(PAGE_NUMBER_LOADING_INDICATOR)
          } else {
            pageNumberInput.classList.remove(PAGE_NUMBER_LOADING_INDICATOR)
          }
        }
      }, {
        key: '_adjustScaleWidth',
        value: function _adjustScaleWidth () {
          const container = this.items.scaleSelectContainer
          const select = this.items.scaleSelect
          _ui_utils.animationStarted.then(function () {
            if (container.clientWidth === 0) {
              container.setAttribute('style', 'display: inherit;')
            }
            if (container.clientWidth > 0) {
              select.setAttribute('style', 'min-width: inherit;')
              const width = select.clientWidth + SCALE_SELECT_CONTAINER_PADDING
              select.setAttribute('style', 'min-width: ' + (width + SCALE_SELECT_PADDING) + 'px;')
              container.setAttribute('style', 'min-width: ' + width + 'px; ' + 'max-width: ' + width + 'px;')
            }
          })
        }
      }])

      return Toolbar
    }())

    exports.Toolbar = Toolbar
    /***/ },
  /* 32 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })

    const _createClass = (function () { function defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true } Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps) } if (staticProps) { defineProperties(Constructor, staticProps) } return Constructor } }())

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    const DEFAULT_VIEW_HISTORY_CACHE_SIZE = 20

    const ViewHistory = (function () {
      function ViewHistory (fingerprint) {
        const _this = this

        const cacheSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_VIEW_HISTORY_CACHE_SIZE

        _classCallCheck(this, ViewHistory)

        this.fingerprint = fingerprint
        this.cacheSize = cacheSize
        this._initializedPromise = this._readFromStorage().then(function (databaseStr) {
          const database = JSON.parse(databaseStr || '{}')
          if (!('files' in database)) {
            database.files = []
          }
          if (database.files.length >= _this.cacheSize) {
            database.files.shift()
          }
          let index = void 0
          for (let i = 0, length = database.files.length; i < length; i++) {
            const branch = database.files[i]
            if (branch.fingerprint === _this.fingerprint) {
              index = i
              break
            }
          }
          if (typeof index !== 'number') {
            index = database.files.push({ fingerprint: _this.fingerprint }) - 1
          }
          _this.file = database.files[index]
          _this.database = database
        })
      }

      _createClass(ViewHistory, [{
        key: '_writeToStorage',
        value: function _writeToStorage () {
          const _this2 = this

          return new Promise(function (resolve) {
            const databaseStr = JSON.stringify(_this2.database)
            localStorage.setItem('pdfjs.history', databaseStr)
            resolve()
          })
        }
      }, {
        key: '_readFromStorage',
        value: function _readFromStorage () {
          return new Promise(function (resolve) {
            let value = localStorage.getItem('pdfjs.history')
            if (!value) {
              const databaseStr = localStorage.getItem('database')
              if (databaseStr) {
                try {
                  const database = JSON.parse(databaseStr)
                  if (typeof database.files[0].fingerprint === 'string') {
                    localStorage.setItem('pdfjs.history', databaseStr)
                    localStorage.removeItem('database')
                    value = databaseStr
                  }
                } catch (ex) {}
              }
            }
            resolve(value)
          })
        }
      }, {
        key: 'set',
        value: function set (name, val) {
          const _this3 = this

          return this._initializedPromise.then(function () {
            _this3.file[name] = val
            return _this3._writeToStorage()
          })
        }
      }, {
        key: 'setMultiple',
        value: function setMultiple (properties) {
          const _this4 = this

          return this._initializedPromise.then(function () {
            for (const name in properties) {
              _this4.file[name] = properties[name]
            }
            return _this4._writeToStorage()
          })
        }
      }, {
        key: 'get',
        value: function get (name, defaultValue) {
          const _this5 = this

          return this._initializedPromise.then(function () {
            const val = _this5.file[name]
            return val !== undefined ? val : defaultValue
          })
        }
      }, {
        key: 'getMultiple',
        value: function getMultiple (properties) {
          const _this6 = this

          return this._initializedPromise.then(function () {
            const values = Object.create(null)
            for (const name in properties) {
              const val = _this6.file[name]
              values[name] = val !== undefined ? val : properties[name]
            }
            return values
          })
        }
      }])

      return ViewHistory
    }())

    exports.ViewHistory = ViewHistory
    /***/ },
  /* 33 */
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    const DEFAULT_URL = 'demo.pdf'
    // var DEFAULT_URL = '';

    let pdfjsWebApp = void 0
    {
      pdfjsWebApp = __webpack_require__(4)
    }
    ;
    {
      __webpack_require__(8)
    }
    ;
    {
      __webpack_require__(9)
    }
    function getViewerConfiguration () {
      return {
        appContainer: document.body,
        mainContainer: document.getElementById('viewerContainer'),
        viewerContainer: document.getElementById('viewer'),
        eventBus: null,
        toolbar: {
          container: document.getElementById('toolbarViewer'),
          numPages: document.getElementById('numPages'),
          pageNumber: document.getElementById('pageNumber'),
          scaleSelectContainer: document.getElementById('scaleSelectContainer'),
          scaleSelect: document.getElementById('scaleSelect'),
          customScaleOption: document.getElementById('customScaleOption'),
          previous: document.getElementById('previous'),
          next: document.getElementById('next'),
          zoomIn: document.getElementById('zoomIn'),
          zoomOut: document.getElementById('zoomOut'),
          viewFind: document.getElementById('viewFind'),
          openFile: document.getElementById('openFile'),
          print: document.getElementById('print'),
          presentationModeButton: document.getElementById('presentationMode'),
          download: document.getElementById('download'),
          viewBookmark: document.getElementById('viewBookmark')
        },
        secondaryToolbar: {
          toolbar: document.getElementById('secondaryToolbar'),
          toggleButton: document.getElementById('secondaryToolbarToggle'),
          toolbarButtonContainer: document.getElementById('secondaryToolbarButtonContainer'),
          presentationModeButton: document.getElementById('secondaryPresentationMode'),
          openFileButton: document.getElementById('secondaryOpenFile'),
          printButton: document.getElementById('secondaryPrint'),
          downloadButton: document.getElementById('secondaryDownload'),
          viewBookmarkButton: document.getElementById('secondaryViewBookmark'),
          firstPageButton: document.getElementById('firstPage'),
          lastPageButton: document.getElementById('lastPage'),
          pageRotateCwButton: document.getElementById('pageRotateCw'),
          pageRotateCcwButton: document.getElementById('pageRotateCcw'),
          cursorSelectToolButton: document.getElementById('cursorSelectTool'),
          cursorHandToolButton: document.getElementById('cursorHandTool'),
          documentPropertiesButton: document.getElementById('documentProperties')
        },
        fullscreen: {
          contextFirstPage: document.getElementById('contextFirstPage'),
          contextLastPage: document.getElementById('contextLastPage'),
          contextPageRotateCw: document.getElementById('contextPageRotateCw'),
          contextPageRotateCcw: document.getElementById('contextPageRotateCcw')
        },
        sidebar: {
          mainContainer: document.getElementById('mainContainer'),
          outerContainer: document.getElementById('outerContainer'),
          toggleButton: document.getElementById('sidebarToggle'),
          thumbnailButton: document.getElementById('viewThumbnail'),
          outlineButton: document.getElementById('viewOutline'),
          attachmentsButton: document.getElementById('viewAttachments'),
          thumbnailView: document.getElementById('thumbnailView'),
          outlineView: document.getElementById('outlineView'),
          attachmentsView: document.getElementById('attachmentsView')
        },
        findBar: {
          bar: document.getElementById('findbar'),
          toggleButton: document.getElementById('viewFind'),
          findField: document.getElementById('findInput'),
          highlightAllCheckbox: document.getElementById('findHighlightAll'),
          caseSensitiveCheckbox: document.getElementById('findMatchCase'),
          findMsg: document.getElementById('findMsg'),
          findResultsCount: document.getElementById('findResultsCount'),
          findStatusIcon: document.getElementById('findStatusIcon'),
          findPreviousButton: document.getElementById('findPrevious'),
          findNextButton: document.getElementById('findNext')
        },
        passwordOverlay: {
          overlayName: 'passwordOverlay',
          container: document.getElementById('passwordOverlay'),
          label: document.getElementById('passwordText'),
          input: document.getElementById('password'),
          submitButton: document.getElementById('passwordSubmit'),
          cancelButton: document.getElementById('passwordCancel')
        },
        documentProperties: {
          overlayName: 'documentPropertiesOverlay',
          container: document.getElementById('documentPropertiesOverlay'),
          closeButton: document.getElementById('documentPropertiesClose'),
          fields: {
            fileName: document.getElementById('fileNameField'),
            fileSize: document.getElementById('fileSizeField'),
            title: document.getElementById('titleField'),
            author: document.getElementById('authorField'),
            subject: document.getElementById('subjectField'),
            keywords: document.getElementById('keywordsField'),
            creationDate: document.getElementById('creationDateField'),
            modificationDate: document.getElementById('modificationDateField'),
            creator: document.getElementById('creatorField'),
            producer: document.getElementById('producerField'),
            version: document.getElementById('versionField'),
            pageCount: document.getElementById('pageCountField')
          }
        },
        errorWrapper: {
          container: document.getElementById('errorWrapper'),
          errorMessage: document.getElementById('errorMessage'),
          closeButton: document.getElementById('errorClose'),
          errorMoreInfo: document.getElementById('errorMoreInfo'),
          moreInfoButton: document.getElementById('errorShowMore'),
          lessInfoButton: document.getElementById('errorShowLess')
        },
        printContainer: document.getElementById('printContainer'),
        openFileInputName: 'fileInput',
        debuggerScriptPath: './debugger.js',
        defaultUrl: DEFAULT_URL
      }
    }
    function webViewerLoad () {
      const config = getViewerConfiguration()
      window.PDFViewerApplication = pdfjsWebApp.PDFViewerApplication
      pdfjsWebApp.PDFViewerApplication.run(config)
    }
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      webViewerLoad()
    } else {
      document.addEventListener('DOMContentLoaded', webViewerLoad, true)
    }
    /***/ }
/******/ ])
// # sourceMappingURL=viewer.js.map
