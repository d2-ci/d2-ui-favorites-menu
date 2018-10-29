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
import OpenInBrowser from '@material-ui/icons/OpenInBrowser';

import FavoritesDialog from '@dhis2/d2-ui-favorites-dialog';

var OpenMenuItem = function (_Component) {
    _inherits(OpenMenuItem, _Component);

    function OpenMenuItem(props) {
        _classCallCheck(this, OpenMenuItem);

        var _this = _possibleConstructorReturn(this, (OpenMenuItem.__proto__ || _Object$getPrototypeOf(OpenMenuItem)).call(this, props));

        _this.onClose = function (event) {
            _this.toggleFavoritesDialog();
        };

        _this.onOpen = function (id) {
            _this.toggleFavoritesDialog();

            if (_this.props.onOpen) {
                _this.props.onOpen(id);
            }
        };

        _this.toggleFavoritesDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    _createClass(OpenMenuItem, [{
        key: 'render',
        value: function render() {
            var favoriteType = this.props.favoriteType;


            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    MenuItem,
                    { button: true, onClick: this.toggleFavoritesDialog },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(OpenInBrowser, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Open' })
                ),
                React.createElement(FavoritesDialog, {
                    open: this.state.dialogIsOpen,
                    type: favoriteType,
                    d2: this.context.d2,
                    onRequestClose: this.toggleFavoritesDialog,
                    onFavoriteSelect: this.onOpen
                })
            );
        }
    }]);

    return OpenMenuItem;
}(Component);

OpenMenuItem.contextTypes = {
    d2: PropTypes.object
};

OpenMenuItem.defaultProps = {
    favoriteType: null,
    onOpen: null
};

OpenMenuItem.propTypes = {
    favoriteType: PropTypes.string,
    onOpen: PropTypes.func
};

export default OpenMenuItem;