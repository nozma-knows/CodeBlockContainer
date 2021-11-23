"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SmartCodeBlock;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _prism = require("react-syntax-highlighter/dist/esm/styles/prism");

var _fa = require("react-icons/fa");

require("./SmartCodeBlock.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SmartCodeBlock(_ref) {
  let {
    code,
    language = 'javascript',
    mode = 'dark',
    showCopy = false
  } = _ref;
  const [clickedCopy, setClickedCopy] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "CodeBlock"
  }, showCopy ? /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
    className: "CopyButton",
    text: code
  }, clickedCopy ? /*#__PURE__*/_react.default.createElement(_fa.FaRegClipboard, {
    onClick: () => setClickedCopy(!clickedCopy)
  }) : /*#__PURE__*/_react.default.createElement(_fa.FaRegCopy, {
    onClick: () => setClickedCopy(!clickedCopy)
  })) : null, /*#__PURE__*/_react.default.createElement(_reactSyntaxHighlighter.Prism, {
    classname: "CodeBlock",
    language: language,
    style: mode === 'dark' ? _prism.atomDark : _prism.prism
  }, code));
}

;