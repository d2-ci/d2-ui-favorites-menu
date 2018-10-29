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

var _Delete = require('@material-ui/icons/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _DeleteDialog = require('./DeleteDialog');

var _DeleteDialog2 = _interopRequireDefault(_DeleteDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteMenuItem = function (_Component) {
    (0, _inherits3.default)(DeleteMenuItem, _Component);

    function DeleteMenuItem(props) {
        (0, _classCallCheck3.default)(this, DeleteMenuItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DeleteMenuItem.__proto__ || (0, _getPrototypeOf2.default)(DeleteMenuItem)).call(this, props));

        _this.onDialogReturn = function (success) {
            return function () {
                var _this$props = _this.props,
                    onDelete = _this$props.onDelete,
                    onDeleteError = _this$props.onDeleteError;


                _this.toggleDeleteDialog();

                if (success && onDelete) {
                    onDelete();
                } else if (onDeleteError) {
                    onDeleteError();
                }
            };
        };

        _this.toggleDeleteDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(DeleteMenuItem, [{
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
                    { disabled: !enabled, onClick: this.toggleDeleteDialog },
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Delete2.default, null)
                    ),
                    _react2.default.createElement(_ListItemText2.default, { primary: 'Delete' })
                ),
                favoriteModel ? _react2.default.createElement(_DeleteDialog2.default, {
                    open: this.state.dialogIsOpen,
                    onRequestClose: this.toggleDeleteDialog,
                    onRequestDelete: this.onDialogReturn(true),
                    onRequestDeleteError: this.onDialogReturn(false),
                    favoriteModel: favoriteModel
                }) : null
            );
        }
    }]);
    return DeleteMenuItem;
}(_react.Component);

DeleteMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onDelete: null,
    onDeleteError: null
};

DeleteMenuItem.propTypes = {
    enabled: _propTypes2.default.bool,
    favoriteModel: _propTypes2.default.object,
    onDelete: _propTypes2.default.func,
    onDeleteError: _propTypes2.default.func
};

exports.default = DeleteMenuItem;