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
import Edit from '@material-ui/icons/Edit';

import WriteInterpretationDialog from './WriteInterpretationDialog';

var WriteInterpretationMenuItem = function (_Component) {
    _inherits(WriteInterpretationMenuItem, _Component);

    function WriteInterpretationMenuItem(props) {
        _classCallCheck(this, WriteInterpretationMenuItem);

        var _this = _possibleConstructorReturn(this, (WriteInterpretationMenuItem.__proto__ || _Object$getPrototypeOf(WriteInterpretationMenuItem)).call(this, props));

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

    _createClass(WriteInterpretationMenuItem, [{
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
                    { disabled: !enabled, onClick: this.toggleWriteInterpretationDialog },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Edit, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Write interpretation' })
                ),
                favoriteModel ? React.createElement(WriteInterpretationDialog, {
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
}(Component);

WriteInterpretationMenuItem.contextTypes = {
    d2: PropTypes.object
};

WriteInterpretationMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onWriteInterpretation: null,
    onWriteInterpretationError: null
};

WriteInterpretationMenuItem.propTypes = {
    enabled: PropTypes.bool,
    favoriteModel: PropTypes.object,
    onWriteInterpretation: PropTypes.func,
    onWriteInterpretationError: PropTypes.func
};

export default WriteInterpretationMenuItem;