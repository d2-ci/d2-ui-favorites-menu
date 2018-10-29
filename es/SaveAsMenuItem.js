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
import Save from '@material-ui/icons/Save';

import SaveAsDialog from './SaveAsDialog';

var SaveAsMenuItem = function (_Component) {
    _inherits(SaveAsMenuItem, _Component);

    function SaveAsMenuItem(props) {
        _classCallCheck(this, SaveAsMenuItem);

        var _this = _possibleConstructorReturn(this, (SaveAsMenuItem.__proto__ || _Object$getPrototypeOf(SaveAsMenuItem)).call(this, props));

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

    _createClass(SaveAsMenuItem, [{
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
                    { button: true, onClick: this.toggleSaveAsDialog, disabled: !enabled },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Save, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Save as...' })
                ),
                favoriteModel ? React.createElement(SaveAsDialog, {
                    open: this.state.dialogIsOpen,
                    favoriteModel: favoriteModel,
                    onRequestClose: this.toggleSaveAsDialog,
                    onRequestSaveAs: this.onSaveAs
                }) : null
            );
        }
    }]);

    return SaveAsMenuItem;
}(Component);

SaveAsMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onSaveAs: null
};

SaveAsMenuItem.propTypes = {
    enabled: PropTypes.bool,
    favoriteModel: PropTypes.object,
    onSaveAs: PropTypes.func
};

export default SaveAsMenuItem;