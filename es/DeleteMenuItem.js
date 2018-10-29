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
import Delete from '@material-ui/icons/Delete';

import DeleteDialog from './DeleteDialog';

var DeleteMenuItem = function (_Component) {
    _inherits(DeleteMenuItem, _Component);

    function DeleteMenuItem(props) {
        _classCallCheck(this, DeleteMenuItem);

        var _this = _possibleConstructorReturn(this, (DeleteMenuItem.__proto__ || _Object$getPrototypeOf(DeleteMenuItem)).call(this, props));

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

    _createClass(DeleteMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                enabled = _props.enabled,
                favoriteModel = _props.favoriteModel;


            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    MenuItem,
                    { disabled: !enabled, onClick: this.toggleDeleteDialog },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Delete, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Delete' })
                ),
                favoriteModel ? React.createElement(DeleteDialog, {
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
}(Component);

DeleteMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onDelete: null,
    onDeleteError: null
};

DeleteMenuItem.propTypes = {
    enabled: PropTypes.bool,
    favoriteModel: PropTypes.object,
    onDelete: PropTypes.func,
    onDeleteError: PropTypes.func
};

export default DeleteMenuItem;