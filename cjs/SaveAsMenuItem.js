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

var _Save = require('@material-ui/icons/Save');

var _Save2 = _interopRequireDefault(_Save);

var _SaveAsDialog = require('./SaveAsDialog');

var _SaveAsDialog2 = _interopRequireDefault(_SaveAsDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveAsMenuItem = function (_Component) {
    (0, _inherits3.default)(SaveAsMenuItem, _Component);

    function SaveAsMenuItem(props) {
        (0, _classCallCheck3.default)(this, SaveAsMenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SaveAsMenuItem.__proto__ || (0, _getPrototypeOf2.default)(SaveAsMenuItem)).call(this, props));

        _this.onSaveAs = function (form) {
            _this.toggleSaveAsDialog();

            if (_this.props.onSaveAs) {
                _this.props.onSaveAs(form);
            }
        };

        _this.toggleSaveAsDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(SaveAsMenuItem, [{
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
                    { button: true, onClick: this.toggleSaveAsDialog, disabled: !enabled },
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Save2.default, null)
                    ),
                    _react2.default.createElement(_ListItemText2.default, { primary: 'Save as...' })
                ),
                favoriteModel ? _react2.default.createElement(_SaveAsDialog2.default, {
                    open: this.state.dialogIsOpen,
                    favoriteModel: favoriteModel,
                    onRequestClose: this.toggleSaveAsDialog,
                    onRequestSaveAs: this.onSaveAs
                }) : null
            );
        }
    }]);
    return SaveAsMenuItem;
}(_react.Component);

SaveAsMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onSaveAs: null
};

SaveAsMenuItem.propTypes = {
    enabled: _propTypes2.default.bool,
    favoriteModel: _propTypes2.default.object,
    onSaveAs: _propTypes2.default.func
};

exports.default = SaveAsMenuItem;