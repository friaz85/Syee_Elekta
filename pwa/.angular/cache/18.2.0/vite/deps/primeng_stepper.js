import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-2WWIEKUF.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-T7JIQ3CU.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewEncapsulation$1,
  setClassMetadata,
  signal,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2EBRZSTI.js";
import "./chunk-ZFVOZNJP.js";
import "./chunk-ICC6A72G.js";
import "./chunk-CNV5DJYZ.js";
import {
  Subject
} from "./chunk-AE6YAAA3.js";
import "./chunk-5OV2R7TC.js";
import {
  __spreadValues
} from "./chunk-EIB7IA3J.js";

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length) return false;
        for (i = length; i-- !== 0; ) if (!this.equalsByValue(obj1[i], obj2[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB) return false;
      if (dateA && dateB) return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length) return false;
      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key])) return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val)) return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input) {
    return Object.prototype.toString.call(input) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2) result = 0;
    else if (emptyValue1) result = order;
    else if (emptyValue2) result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, locale, {
      numeric: true
    });
    else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; ) if (!this.deepEquals(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : {
      key,
      value: baseZIndex
    };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex()
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static ɵfac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static ɵfac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      const valueCopy = new Date(value);
      valueCopy.setHours(0, 0, 0, 0);
      return valueCopy.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static ɵfac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FilterService,
    factory: _FilterService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {Message} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static ɵfac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MessageService,
    factory: _MessageService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  static ɵfac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _OverlayService,
    factory: _OverlayService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrimeNGConfig = class _PrimeNGConfig {
  ripple = false;
  inputStyle = signal("outlined");
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  });
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  static ɵfac = function PrimeNGConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeNGConfig)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PrimeNGConfig,
    factory: _PrimeNGConfig.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNGConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static ɵfac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      standalone: true,
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static ɵfac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      standalone: true,
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static ɵfac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true,
      host: {}
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static ɵfac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SharedModule,
    imports: [Header, Footer, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [Header, Footer, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static ɵfac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-stepper.mjs
var _c02 = (a0, a1, a2, a3) => ({
  index: a0,
  active: a1,
  highlighted: a2,
  class: "p-stepper-action",
  headerClass: "p-stepper-action",
  numberClass: "p-stepper-number",
  titleClass: "p-stepper-title",
  onClick: a3
});
function StepperHeader_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function StepperHeader_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperHeader_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c02, ctx_r0.index, ctx_r0.active, ctx_r0.highlighted, ctx_r0.onClick));
  }
}
function StepperHeader_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 3);
    ɵɵlistener("click", function StepperHeader_ng_template_1_Template_p_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onClick.emit($event, ctx_r0.index));
    });
    ɵɵelementStart(1, "span", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 5);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.id)("tabindex", ctx_r0.disabled ? -1 : void 0)("aria-controls", ctx_r0.ariaControls);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.index + 1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.getStepProp);
  }
}
var _c1 = (a0, a1, a2, a3) => ({
  index: a0,
  active: a1,
  highlighted: a2,
  class: a3
});
function StepperSeparator_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function StepperSeparator_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperSeparator_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c1, ctx_r0.index, ctx_r0.active, ctx_r0.highlighted, ctx_r0.separatorClass));
  }
}
function StepperSeparator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.separatorClass);
  }
}
var _c2 = (a0, a1, a2, a3, a4, a5) => ({
  index: a0,
  active: a1,
  highlighted: a2,
  onClick: a3,
  prevCallback: a4,
  nextCallback: a5
});
function StepperContent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function StepperContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperContent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c2, ctx_r0.index, ctx_r0.active, ctx_r0.highlighted, ctx_r0.onClick, ctx_r0.prevCallback, ctx_r0.nextCallback));
  }
}
function StepperContent_2_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function StepperContent_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperContent_2_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.stepperPanel);
  }
}
function StepperContent_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperContent_2_ng_template_0_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.stepperPanel);
  }
}
function StepperContent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperContent_2_ng_template_0_Template, 1, 1, "ng-template");
  }
}
var _c3 = ["*"];
var _c4 = (a0, a1) => ({
  "p-highlight": a0,
  "p-disabled": a1
});
var _c5 = (a0) => ({
  "p-stepper-panel-active": a0
});
var _c6 = (a0) => ({
  transitionParams: a0
});
var _c7 = (a0) => ({
  value: "visible",
  params: a0
});
var _c8 = (a0) => ({
  value: "hidden",
  params: a0
});
function Stepper_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Stepper_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Stepper_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
function Stepper_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "p-stepperSeparator", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const step_r5 = ctx_r3.$implicit;
    const index_r3 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("template", step_r5.separatorTemplate)("separatorClass", "p-stepper-separator")("stepperPanel", step_r5)("index", index_r3)("active", ctx_r0.isStepActive(index_r3))("highlighted", index_r3 < ctx_r0.activeStep);
  }
}
function Stepper_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8)(1, "p-stepperHeader", 9);
    ɵɵlistener("onClick", function Stepper_ng_container_2_ng_template_2_Template_p_stepperHeader_onClick_1_listener($event) {
      const index_r3 = ɵɵrestoreView(_r2).index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onItemClick($event, index_r3));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, Stepper_ng_container_2_ng_template_2_ng_container_2_Template, 2, 6, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("key", ctx_r0.getStepKey(step_r5, index_r3))("ngClass", ɵɵpureFunction2(20, _c4, ctx_r0.isStepActive(index_r3), ctx_r0.isItemDisabled(index_r3)))("data-pc-name", ctx_r0.stepperPanel)("data-p-highlight", ctx_r0.isStepActive(index_r3))("data-p-disabled", ctx_r0.isItemDisabled(index_r3))("data-pc-index", index_r3)("data-p-active", ctx_r0.isStepActive(index_r3));
    ɵɵattribute("aria-current", ctx_r0.isStepActive(index_r3) ? "step" : void 0);
    ɵɵadvance();
    ɵɵclassMap("p-stepper-action");
    ɵɵproperty("id", ctx_r0.getStepHeaderActionId(index_r3))("template", step_r5.headerTemplate)("stepperPanel", step_r5)("getStepProp", ctx_r0.getStepProp(step_r5, "header"))("index", index_r3)("disabled", ctx_r0.isItemDisabled(index_r3))("active", ctx_r0.isStepActive(index_r3))("highlighted", index_r3 < ctx_r0.activeStep)("aria-controls", ctx_r0.getStepContentId(index_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", index_r3 !== ctx_r0.stepperPanels.length - 1);
  }
}
function Stepper_ng_container_2_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p-stepperContent", 11);
    ɵɵlistener("onClick", function Stepper_ng_container_2_ng_template_4_ng_container_0_Template_p_stepperContent_onClick_1_listener($event) {
      ɵɵrestoreView(_r6);
      const index_r7 = ɵɵnextContext().index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onItemClick($event, index_r7));
    })("nextCallback", function Stepper_ng_container_2_ng_template_4_ng_container_0_Template_p_stepperContent_nextCallback_1_listener($event) {
      ɵɵrestoreView(_r6);
      const index_r7 = ɵɵnextContext().index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.nextCallback($event, index_r7));
    })("prevCallback", function Stepper_ng_container_2_ng_template_4_ng_container_0_Template_p_stepperContent_prevCallback_1_listener($event) {
      ɵɵrestoreView(_r6);
      const index_r7 = ɵɵnextContext().index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.prevCallback($event, index_r7));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const step_r9 = ctx_r7.$implicit;
    const index_r7 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.getStepContentId(index_r7))("template", step_r9.contentTemplate)("orientation", ctx_r0.orientation)("stepperPanel", step_r9)("index", index_r7)("active", ctx_r0.isStepActive(index_r7))("highlighted", index_r7 < ctx_r0.activeStep)("ariaLabelledby", ctx_r0.getStepHeaderActionId(index_r7));
  }
}
function Stepper_ng_container_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Stepper_ng_container_2_ng_template_4_ng_container_0_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const index_r7 = ctx.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.isStepActive(index_r7));
  }
}
function Stepper_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ul", 5);
    ɵɵtemplate(2, Stepper_ng_container_2_ng_template_2_Template, 3, 23, "ng-template", 6);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 7);
    ɵɵtemplate(4, Stepper_ng_container_2_ng_template_4_Template, 1, 1, "ng-template", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.panels)("ngForTrackBy", ctx_r0.trackByFn);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.panels)("ngForTrackBy", ctx_r0.trackByFn);
  }
}
function Stepper_ng_template_3_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "p-stepperSeparator", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    const step_r13 = ctx_r11.$implicit;
    const index_r11 = ctx_r11.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("template", step_r13.separatorTemplate)("separatorClass", "p-stepper-separator")("stepperPanel", step_r13)("index", index_r11)("active", ctx_r0.isStepActive(index_r11))("highlighted", index_r11 < ctx_r0.activeStep);
  }
}
function Stepper_ng_template_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "p-stepperHeader", 9);
    ɵɵlistener("onClick", function Stepper_ng_template_3_ng_template_0_Template_p_stepperHeader_onClick_2_listener($event) {
      const index_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onItemClick($event, index_r11));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(3, "div", 14);
    ɵɵtemplate(4, Stepper_ng_template_3_ng_template_0_ng_container_4_Template, 2, 6, "ng-container", 2);
    ɵɵelementStart(5, "p-stepperContent", 11);
    ɵɵlistener("onClick", function Stepper_ng_template_3_ng_template_0_Template_p_stepperContent_onClick_5_listener($event) {
      const index_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onItemClick($event, index_r11));
    })("nextCallback", function Stepper_ng_template_3_ng_template_0_Template_p_stepperContent_nextCallback_5_listener($event) {
      const index_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.nextCallback($event, index_r11));
    })("prevCallback", function Stepper_ng_template_3_ng_template_0_Template_p_stepperContent_prevCallback_5_listener($event) {
      const index_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.prevCallback($event, index_r11));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const step_r13 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("key", ctx_r0.getStepKey(step_r13, index_r11))("ngClass", ɵɵpureFunction1(30, _c5, ctx_r0.orientation === "vertical" && ctx_r0.isStepActive(index_r11)))("data-pc-name", "stepperpanel")("data-p-highlight", ctx_r0.isStepActive(index_r11))("data-p-disabled", ctx_r0.isItemDisabled(index_r11))("data-pc-index", index_r11)("data-p-active", ctx_r0.isStepActive(index_r11));
    ɵɵattribute("aria-current", ctx_r0.isStepActive(index_r11) ? "step" : void 0);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(32, _c4, ctx_r0.isStepActive(index_r11), ctx_r0.isItemDisabled(index_r11)));
    ɵɵadvance();
    ɵɵclassMap("p-stepper-action");
    ɵɵproperty("id", ctx_r0.getStepHeaderActionId(index_r11))("template", step_r13.headerTemplate)("stepperPanel", step_r13)("getStepProp", ctx_r0.getStepProp(step_r13, "header"))("index", index_r11)("disabled", ctx_r0.isItemDisabled(index_r11))("active", ctx_r0.isStepActive(index_r11))("highlighted", index_r11 < ctx_r0.activeStep)("aria-controls", ctx_r0.getStepContentId(index_r11));
    ɵɵadvance();
    ɵɵproperty("@tabContent", ctx_r0.isStepActive(index_r11) ? ɵɵpureFunction1(37, _c7, ɵɵpureFunction1(35, _c6, ctx_r0.transitionOptions)) : ɵɵpureFunction1(41, _c8, ɵɵpureFunction1(39, _c6, ctx_r0.transitionOptions)));
    ɵɵadvance();
    ɵɵproperty("ngIf", index_r11 !== ctx_r0.stepperPanels.length - 1);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.getStepContentId(index_r11))("template", step_r13.contentTemplate)("orientation", ctx_r0.orientation)("stepperPanel", step_r13)("index", index_r11)("active", ctx_r0.isStepActive(index_r11))("highlighted", index_r11 < ctx_r0.activeStep)("ariaLabelledby", ctx_r0.getStepHeaderActionId(index_r11));
  }
}
function Stepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Stepper_ng_template_3_ng_template_0_Template, 6, 43, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r0.panels)("ngForTrackBy", ctx_r0.trackByFn);
  }
}
function Stepper_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Stepper_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Stepper_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.endTemplate);
  }
}
var StepperHeader = class _StepperHeader {
  id;
  template;
  stepperPanel;
  index;
  disabled;
  active;
  highlighted;
  getStepProp;
  ariaControls;
  onClick = new EventEmitter();
  static ɵfac = function StepperHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperHeader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperHeader,
    selectors: [["p-stepperHeader"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      template: "template",
      stepperPanel: "stepperPanel",
      index: "index",
      disabled: "disabled",
      active: "active",
      highlighted: "highlighted",
      getStepProp: "getStepProp",
      ariaControls: "ariaControls"
    },
    outputs: {
      onClick: "onClick"
    },
    decls: 3,
    vars: 2,
    consts: [["buttonRef", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tab", 1, "p-stepper-action", 3, "click", "id", "tabindex", "aria-controls"], [1, "p-stepper-number"], [1, "p-stepper-title"]],
    template: function StepperHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, StepperHeader_ng_container_0_Template, 2, 7, "ng-container", 1)(1, StepperHeader_ng_template_1_Template, 5, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const buttonRef_r3 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.template)("ngIfElse", buttonRef_r3);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperHeader, [{
    type: Component,
    args: [{
      selector: "p-stepperHeader",
      template: `
        <ng-container *ngIf="template; else buttonRef">
            <ng-container
                *ngTemplateOutlet="
                    template;
                    context: {
                        index: index,
                        active: active,
                        highlighted: highlighted,
                        class: 'p-stepper-action',
                        headerClass: 'p-stepper-action',
                        numberClass: 'p-stepper-number',
                        titleClass: 'p-stepper-title',
                        onClick: onClick
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #buttonRef>
            <p-button [id]="id" class="p-stepper-action" role="tab" [tabindex]="disabled ? -1 : undefined" [aria-controls]="ariaControls" (click)="onClick.emit($event, index)">
                <span class="p-stepper-number">{{ index + 1 }}</span>
                <span class="p-stepper-title">{{ getStepProp }}</span>
            </p-button>
        </ng-template>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    stepperPanel: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    highlighted: [{
      type: Input
    }],
    getStepProp: [{
      type: Input
    }],
    ariaControls: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var StepperSeparator = class _StepperSeparator {
  template;
  separatorClass;
  stepperPanel;
  index;
  active;
  highlighted;
  static ɵfac = function StepperSeparator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperSeparator)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperSeparator,
    selectors: [["p-stepperSeparator"]],
    hostAttrs: [1, "p-stepper-separator"],
    inputs: {
      template: "template",
      separatorClass: "separatorClass",
      stepperPanel: "stepperPanel",
      index: "index",
      active: "active",
      highlighted: "highlighted"
    },
    decls: 3,
    vars: 2,
    consts: [["span", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"]],
    template: function StepperSeparator_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, StepperSeparator_ng_container_0_Template, 2, 7, "ng-container", 1)(1, StepperSeparator_ng_template_1_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const span_r2 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.template)("ngIfElse", span_r2);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperSeparator, [{
    type: Component,
    args: [{
      selector: "p-stepperSeparator",
      template: `
        <ng-container *ngIf="template; else span">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, class: separatorClass }"></ng-container>
        </ng-container>
        <ng-template #span>
            <span [class]="separatorClass" aria-hidden="true"></span>
        </ng-template>
    `,
      host: {
        class: "p-stepper-separator"
      }
    }]
  }], null, {
    template: [{
      type: Input
    }],
    separatorClass: [{
      type: Input
    }],
    stepperPanel: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    highlighted: [{
      type: Input
    }]
  });
})();
var StepperContent = class _StepperContent {
  id;
  orientation;
  template;
  ariaLabelledby;
  stepperPanel;
  index;
  active;
  highlighted;
  onClick = new EventEmitter();
  prevCallback = new EventEmitter();
  nextCallback = new EventEmitter();
  static ɵfac = function StepperContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperContent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperContent,
    selectors: [["p-stepperContent"]],
    hostVars: 6,
    hostBindings: function StepperContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-stepper-content", true)("p-element", true)("p-toggleable-content", ctx.orientation === "vertical");
      }
    },
    inputs: {
      id: "id",
      orientation: "orientation",
      template: "template",
      ariaLabelledby: "ariaLabelledby",
      stepperPanel: "stepperPanel",
      index: "index",
      active: "active",
      highlighted: "highlighted"
    },
    outputs: {
      onClick: "onClick",
      prevCallback: "prevCallback",
      nextCallback: "nextCallback"
    },
    decls: 3,
    vars: 6,
    consts: [["role", "tabpanel", "data-pc-name", "stepperpanel", 3, "id"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"]],
    template: function StepperContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, StepperContent_ng_container_1_Template, 2, 9, "ng-container", 1)(2, StepperContent_2_Template, 1, 0, null, 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.id);
        ɵɵattribute("data-pc-index", ctx.index)("data-p-active", ctx.active)("aria-labelledby", ctx.ariaLabelledby);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.template);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.template);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperContent, [{
    type: Component,
    args: [{
      selector: "p-stepperContent",
      template: ` <div [id]="id" role="tabpanel" data-pc-name="stepperpanel" [attr.data-pc-index]="index" [attr.data-p-active]="active" [attr.aria-labelledby]="ariaLabelledby">
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, onClick: onClick, prevCallback: prevCallback, nextCallback: nextCallback }"></ng-container>
        </ng-container>
        <ng-template *ngIf="!template">
            <ng-container *ngIf="stepperPanel">
                <ng-container *ngTemplateOutlet="stepperPanel"></ng-container>
            </ng-container>
        </ng-template>
    </div>`,
      host: {
        "[class.p-stepper-content]": "true",
        "[class.p-element]": "true",
        "[class.p-toggleable-content]": "orientation === 'vertical'"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    ariaLabelledby: [{
      type: Input
    }],
    stepperPanel: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    highlighted: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    prevCallback: [{
      type: Output
    }],
    nextCallback: [{
      type: Output
    }]
  });
})();
var StepperPanel = class _StepperPanel {
  header;
  templates;
  headerTemplate;
  startTemplate;
  contentTemplate;
  separatorTemplate;
  endTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "separator":
          this.separatorTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = function StepperPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperPanel)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperPanel,
    selectors: [["p-stepperPanel"]],
    contentQueries: function StepperPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header"
    },
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    template: function StepperPanel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperPanel, [{
    type: Component,
    args: [{
      selector: "p-stepperPanel",
      template: ` <ng-content></ng-content> `,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    header: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var Stepper = class _Stepper {
  /**
   * Active step index of stepper.
   * @group Props
   */
  activeStep = 0;
  /**
   * Orientation of the stepper.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Whether the steps are clickable or not.
   * @group Props
   */
  linear = false;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  stepperPanels;
  templates;
  onClick = new EventEmitter();
  /**
   * Emitted when the value changes.
   * @param {ActiveStepChangeEvent} event - custom change event.
   * @group Emits
   */
  activeStepChange = new EventEmitter();
  headerTemplate;
  startTemplate;
  separatorTemplate;
  endTemplate;
  id = UniqueComponentId();
  panels;
  isStepActive(index) {
    return this.activeStep === index;
  }
  getStepProp(step) {
    if (step?.header) {
      return step.header;
    }
    if (step?.content) {
      return step.content;
    }
    return void 0;
  }
  getStepKey(step, index) {
    return this.getStepProp(step) || index;
  }
  getStepHeaderActionId(index) {
    return `${this.id}_${index}_header_action`;
  }
  getStepContentId(index) {
    return `${this.id}_${index}_content`;
  }
  updateActiveStep(event, index) {
    this.activeStep = index;
    this.activeStepChange.emit(this.activeStep);
  }
  onItemClick(event, index) {
    if (this.linear) {
      event.preventDefault();
      return;
    }
    if (index !== this.activeStep) {
      this.updateActiveStep(event, index);
    }
  }
  isItemDisabled(index) {
    return this.linear && !this.isStepActive(index);
  }
  prevCallback(event, index) {
    if (index !== 0) {
      this.updateActiveStep(event, index - 1);
    }
  }
  nextCallback(event, index) {
    if (index !== this.stepperPanels.length - 1) {
      this.updateActiveStep(event, index + 1);
    }
  }
  trackByFn(index) {
    return index;
  }
  ngAfterContentInit() {
    this.panels = this.stepperPanels.toArray();
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this.startTemplate = item.template;
          break;
        case "end":
          this.endTemplate = item.template;
          break;
        default:
          break;
      }
    });
  }
  static ɵfac = function Stepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Stepper)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Stepper,
    selectors: [["p-stepper"]],
    contentQueries: function Stepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, StepperPanel, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepperPanels = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 6,
    hostBindings: function Stepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-stepper", true)("p-component", true)("p-stepper-vertical", ctx.orientation === "vertical");
      }
    },
    inputs: {
      activeStep: "activeStep",
      orientation: "orientation",
      linear: "linear",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      onClick: "onClick",
      activeStepChange: "activeStepChange"
    },
    decls: 6,
    vars: 4,
    consts: [["vertical", ""], ["role", "tablist"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [1, "p-stepper-nav"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "p-stepper-panels"], ["role", "presentation", 1, "p-stepper-header", 3, "key", "ngClass", "data-pc-name", "data-p-highlight", "data-p-disabled", "data-pc-index", "data-p-active"], [3, "onClick", "id", "template", "stepperPanel", "getStepProp", "index", "disabled", "active", "highlighted", "aria-controls"], [3, "template", "separatorClass", "stepperPanel", "index", "active", "highlighted"], [3, "onClick", "nextCallback", "prevCallback", "id", "template", "orientation", "stepperPanel", "index", "active", "highlighted", "ariaLabelledby"], [1, "p-stepper-panel", 3, "key", "ngClass", "data-pc-name", "data-p-highlight", "data-p-disabled", "data-pc-index", "data-p-active"], [1, "p-stepper-header", 3, "ngClass"], [1, "p-stepper-toggleable-content"]],
    template: function Stepper_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1);
        ɵɵtemplate(1, Stepper_ng_container_1_Template, 2, 1, "ng-container", 2)(2, Stepper_ng_container_2_Template, 5, 4, "ng-container", 3)(3, Stepper_ng_template_3_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, Stepper_ng_container_5_Template, 2, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const vertical_r14 = ɵɵreference(4);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.startTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.orientation === "horizontal")("ngIfElse", vertical_r14);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.endTemplate);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, StepperContent, StepperHeader, StepperSeparator],
    styles: ["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("tabContent", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("250ms cubic-bezier(0.86, 0, 0.07, 1)")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Stepper, [{
    type: Component,
    args: [{
      selector: "p-stepper",
      template: `
        <div role="tablist">
            <ng-container *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </ng-container>
            <ng-container *ngIf="orientation === 'horizontal'; else vertical">
                <ul class="p-stepper-nav">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <li
                            [key]="getStepKey(step, index)"
                            class="p-stepper-header"
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                            [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                            role="presentation"
                            [data-pc-name]="stepperPanel"
                            [data-p-highlight]="isStepActive(index)"
                            [data-p-disabled]="isItemDisabled(index)"
                            [data-pc-index]="index"
                            [data-p-active]="isStepActive(index)"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>

                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                        </li>
                    </ng-template>
                </ul>
                <div class="p-stepper-panels">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <ng-container *ngIf="isStepActive(index)">
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </ng-container>
                    </ng-template>
                </div>
            </ng-container>
            <ng-template #vertical>
                <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                    <div
                        [key]="getStepKey(step, index)"
                        class="p-stepper-panel"
                        [ngClass]="{
                            'p-stepper-panel-active': orientation === 'vertical' && isStepActive(index)
                        }"
                        [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                        [data-pc-name]="'stepperpanel'"
                        [data-p-highlight]="isStepActive(index)"
                        [data-p-disabled]="isItemDisabled(index)"
                        [data-pc-index]="index"
                        [data-p-active]="isStepActive(index)"
                    >
                        <div
                            class="p-stepper-header "
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>
                        </div>

                        <div class="p-stepper-toggleable-content" [@tabContent]="isStepActive(index) ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }">
                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </div>
                    </div>
                </ng-template>
            </ng-template>
            <ng-container *ngIf="endTemplate">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class.p-stepper]": "true",
        "[class.p-component]": "true",
        "[class.p-stepper-vertical]": "orientation === 'vertical'"
      },
      animations: [trigger("tabContent", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("250ms cubic-bezier(0.86, 0, 0.07, 1)")]), transition("void => *", animate(0))])],
      styles: ["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"]
    }]
  }], null, {
    activeStep: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    linear: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    stepperPanels: [{
      type: ContentChildren,
      args: [StepperPanel]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onClick: [{
      type: Output
    }],
    activeStepChange: [{
      type: Output
    }]
  });
})();
var StepperModule = class _StepperModule {
  static ɵfac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _StepperModule,
    declarations: [Stepper, StepperPanel, StepperPanel, StepperContent, StepperHeader, StepperSeparator],
    imports: [CommonModule, SharedModule],
    exports: [Stepper, StepperPanel, StepperContent, StepperHeader, StepperSeparator, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Stepper, StepperPanel, StepperContent, StepperHeader, StepperSeparator, SharedModule],
      declarations: [Stepper, StepperPanel, StepperPanel, StepperContent, StepperHeader, StepperSeparator]
    }]
  }], null, null);
})();
export {
  Stepper,
  StepperContent,
  StepperHeader,
  StepperModule,
  StepperPanel,
  StepperSeparator
};
//# sourceMappingURL=primeng_stepper.js.map
