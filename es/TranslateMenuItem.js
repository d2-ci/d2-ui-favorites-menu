import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TranslationDialog from '@dhis2/d2-ui-translation-dialog';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Translate from '@material-ui/icons/Translate';

var TranslateMenuItem = function (_Component) {
    _inherits(TranslateMenuItem, _Component);

    function TranslateMenuItem(props) {
        _classCallCheck(this, TranslateMenuItem);

        var _this = _possibleConstructorReturn(this, (TranslateMenuItem.__proto__ || _Object$getPrototypeOf(TranslateMenuItem)).call(this, props));

        _this.onDialogReturn = function (success) {
            return function () {
                var _this$props = _this.props,
                    onTranslate = _this$props.onTranslate,
                    onTranslateError = _this$props.onTranslateError;


                _this.toggleTranslationDialog();

                if (success && onTranslate) {
                    onTranslate();
                } else if (onTranslateError) {
                    onTranslateError();
                }
            };
        };

        _this.toggleTranslationDialog = function () {
            _this.setState({ dialogIsOpen: !_this.state.dialogIsOpen });
        };

        _this.state = {
            dialogIsOpen: false
        };
        return _this;
    }

    _createClass(TranslateMenuItem, [{
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
                    { disabled: !enabled, onClick: this.toggleTranslationDialog },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Translate, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Translate' })
                ),
                favoriteModel ? React.createElement(TranslationDialog, {
                    d2: this.context.d2,
                    open: this.state.dialogIsOpen,
                    onRequestClose: this.toggleTranslationDialog,
                    objectToTranslate: favoriteModel,
                    fieldsToTranslate: ['name', 'description'],
                    onTranslationSaved: this.onDialogReturn(true),
                    onTranslationError: this.onDialogReturn(false)
                }) : null
            );
        }
    }]);

    return TranslateMenuItem;
}(Component);

TranslateMenuItem.contextTypes = {
    d2: PropTypes.object
};

TranslateMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    onTranslate: null,
    onTranslateError: null
};

TranslateMenuItem.propTypes = {
    enabled: PropTypes.bool,
    favoriteModel: PropTypes.object,
    onTranslate: PropTypes.func.isRequired,
    onTranslateError: PropTypes.func.isRequired
};

export default TranslateMenuItem;