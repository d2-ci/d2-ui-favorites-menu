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

var _Share = require('@material-ui/icons/Share');

var _Share2 = _interopRequireDefault(_Share);

var _d2UiSharingDialog = require('@dhis2/d2-ui-sharing-dialog');

var _d2UiSharingDialog2 = _interopRequireDefault(_d2UiSharingDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShareMenuItem = function (_Component) {
    (0, _inherits3.default)(ShareMenuItem, _Component);

    function ShareMenuItem(props) {
        (0, _classCallCheck3.default)(this, ShareMenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ShareMenuItem.__proto__ || (0, _getPrototypeOf2.default)(ShareMenuItem)).call(this, props));

        _this.onShare = function () {
            _this.toggleSharingDialog();

            if (_this.props.onShare) {
                _this.props.onShare();
            }
        };

        _this.toggleSharingDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(ShareMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                enabled = _props.enabled,
                favoriteModel = _props.favoriteModel,
                favoriteType = _props.favoriteType;


            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _MenuItem2.default,
                    { disabled: !enabled, onClick: this.toggleSharingDialog },
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Share2.default, null)
                    ),
                    _react2.default.createElement(_ListItemText2.default, { primary: 'Share' })
                ),
                favoriteModel ? _react2.default.createElement(_d2UiSharingDialog2.default, {
                    open: this.state.dialogIsOpen,
                    onRequestClose: this.onShare,
                    d2: this.context.d2,
                    id: favoriteModel.id,
                    type: favoriteType
                }) : null
            );
        }
    }]);
    return ShareMenuItem;
}(_react.Component);

ShareMenuItem.contextTypes = {
    d2: _propTypes2.default.object
};

ShareMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    favoriteType: null,
    onShare: null
};

ShareMenuItem.propTypes = {
    enabled: _propTypes2.default.bool,
    favoriteModel: _propTypes2.default.object,
    favoriteType: _propTypes2.default.string,
    onShare: _propTypes2.default.func
};

exports.default = ShareMenuItem;