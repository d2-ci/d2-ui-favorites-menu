'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveMenuItem = function SaveMenuItem(props) {
    return _react2.default.createElement(
        _MenuItem2.default,
        { button: true, onClick: props.onSave, disabled: !props.enabled },
        _react2.default.createElement(
            _ListItemIcon2.default,
            null,
            _react2.default.createElement(_Save2.default, null)
        ),
        _react2.default.createElement(_ListItemText2.default, { primary: 'Save' })
    );
};

SaveMenuItem.defaultProps = {
    enabled: false,
    onSave: null
};

SaveMenuItem.propTypes = {
    enabled: _propTypes2.default.bool,
    onSave: _propTypes2.default.func
};

exports.default = SaveMenuItem;