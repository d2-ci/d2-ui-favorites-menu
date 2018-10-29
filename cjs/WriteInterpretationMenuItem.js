'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Edit = require('@material-ui/icons/Edit');

var _Edit2 = _interopRequireDefault(_Edit);

var _WriteInterpretationDialog = require('./WriteInterpretationDialog');

var _WriteInterpretationDialog2 = _interopRequireDefault(_WriteInterpretationDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WriteInterpretationMenuItem = function (_Component) {
    (0, _inherits3.default)(WriteInterpretationMenuItem, _Component);

    function WriteInterpretationMenuItem(props) {
        (0, _classCallCheck3.default)(this, WriteInterpretationMenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WriteInterpretationMenuItem.__proto__ || (0, _getPrototypeOf2.default)(WriteInterpretationMenuItem)).call(this, props));

        _this.onDialogReturn = function (success) {
            return function () {
                var _this$props = _this.props,
                    onWriteInterpretation = _this$props.onWriteInterpretation,
                    onWriteInterpretationError = _this$props.onWriteInterpretationError;


                _this.toggleWriteInterpretationDialog();

                if (success && onWriteInterpretation) {
                    onWriteInterpretation();
                } else if (onWriteInterpretationError) {
                    onWriteInterpretationError();
                }
            };
        };

        _this.toggleWriteInterpretationDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(WriteInterpretationMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                enabled = _props.enabled,
                favoriteModel = _props.favoriteModel;


            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _MenuItem2.default,
                    { disabled: !enabled, onClick: this.toggleWriteInterpretationDialog },
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Edit2.default, null)
                    ),
                    _react2.default.createElement(_ListItemText2.default, { primary: 'Write interpretation' })
                ),
                favoriteModel ? _react2.default.createElement(_WriteInterpretationDialog2.default, {
                    open: this.state.dialogIsOpen,
                    favoriteModel: favoriteModel,
                    onRequestClose: this.toggleWriteInterpretationDialog,
                    onRequestWriteInterpretation: this.onDialogReturn(true),
                    onRequestWriteInterpretationError: this.onDialogReturn(false)
                }) : null
            );
        }
    }]);
    return WriteInterpretationMenuItem;
}(_react.Component);

WriteInterpretationMenuItem.contextTypes = {
    d2: _propTypes2.default.object
};

WriteInterpretationMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onWriteInterpretation: null,
    onWriteInterpretationError: null
};

WriteInterpretationMenuItem.propTypes = {
    enabled: _propTypes2.default.bool,
    favoriteModel: _propTypes2.default.object,
    onWriteInterpretation: _propTypes2.default.func,
    onWriteInterpretationError: _propTypes2.default.func
};

exports.default = WriteInterpretationMenuItem;