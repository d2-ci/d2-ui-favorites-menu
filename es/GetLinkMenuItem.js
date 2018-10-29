import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/icons/Link';

import GetLinkDialog from './GetLinkDialog';

var GetLinkMenuItem = function (_Component) {
    _inherits(GetLinkMenuItem, _Component);

    function GetLinkMenuItem(props) {
        _classCallCheck(this, GetLinkMenuItem);

        var _this = _possibleConstructorReturn(this, (GetLinkMenuItem.__proto__ || _Object$getPrototypeOf(GetLinkMenuItem)).call(this, props));

        _this.toggleGetLinkDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    _createClass(GetLinkMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                enabled = _props.enabled,
                favoriteType = _props.favoriteType,
                favoriteModel = _props.favoriteModel;


            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    MenuItem,
                    { disabled: !enabled, onClick: this.toggleGetLinkDialog },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Link, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Get link' })
                ),
                favoriteModel ? React.createElement(GetLinkDialog, {
                    open: this.state.dialogIsOpen,
                    onRequestClose: this.toggleGetLinkDialog,
                    favoriteType: favoriteType,
                    favoriteModel: favoriteModel
                }) : null
            );
        }
    }]);

    return GetLinkMenuItem;
}(Component);

GetLinkMenuItem.contextTypes = {
    d2: PropTypes.object
};

GetLinkMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    favoriteType: null
};

GetLinkMenuItem.propTypes = {
    enabled: PropTypes.bool,
    favoriteModel: PropTypes.object,
    favoriteType: PropTypes.string
};

export default GetLinkMenuItem;