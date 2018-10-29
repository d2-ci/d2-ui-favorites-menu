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

var _Link = require('@material-ui/icons/Link');

var _Link2 = _interopRequireDefault(_Link);

var _GetLinkDialog = require('./GetLinkDialog');

var _GetLinkDialog2 = _interopRequireDefault(_GetLinkDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetLinkMenuItem = function (_Component) {
    (0, _inherits3.default)(GetLinkMenuItem, _Component);

    function GetLinkMenuItem(props) {
        (0, _classCallCheck3.default)(this, GetLinkMenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GetLinkMenuItem.__proto__ || (0, _getPrototypeOf2.default)(GetLinkMenuItem)).call(this, props));

        _this.toggleGetLinkDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(GetLinkMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                enabled = _props.enabled,
                favoriteType = _props.favoriteType,
                favoriteModel = _props.favoriteModel;


            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _MenuItem2.default,
                    { disabled: !enabled, onClick: this.toggleGetLinkDialog },
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Link2.default, null)
                    ),
                    _react2.default.createElement(_ListItemText2.default, { primary: 'Get link' })
                ),
                favoriteModel ? _react2.default.createElement(_GetLinkDialog2.default, {
                    open: this.state.dialogIsOpen,
                    onRequestClose: this.toggleGetLinkDialog,
                    favoriteType: favoriteType,
                    favoriteModel: favoriteModel
                }) : null
            );
        }
    }]);
    return GetLinkMenuItem;
}(_react.Component);

GetLinkMenuItem.contextTypes = {
    d2: _propTypes2.default.object
};

GetLinkMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    favoriteType: null
};

GetLinkMenuItem.propTypes = {
    enabled: _propTypes2.default.bool,
    favoriteModel: _propTypes2.default.object,
    favoriteType: _propTypes2.default.string
};

exports.default = GetLinkMenuItem;