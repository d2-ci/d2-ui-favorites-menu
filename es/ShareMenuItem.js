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
import Share from '@material-ui/icons/Share';
import SharingDialog from '@dhis2/d2-ui-sharing-dialog';

var ShareMenuItem = function (_Component) {
    _inherits(ShareMenuItem, _Component);

    function ShareMenuItem(props) {
        _classCallCheck(this, ShareMenuItem);

        var _this = _possibleConstructorReturn(this, (ShareMenuItem.__proto__ || _Object$getPrototypeOf(ShareMenuItem)).call(this, props));

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

    _createClass(ShareMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                enabled = _props.enabled,
                favoriteModel = _props.favoriteModel,
                favoriteType = _props.favoriteType;


            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    MenuItem,
                    { disabled: !enabled, onClick: this.toggleSharingDialog },
                    React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Share, null)
                    ),
                    React.createElement(ListItemText, { primary: 'Share' })
                ),
                favoriteModel ? React.createElement(SharingDialog, {
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
}(Component);

ShareMenuItem.contextTypes = {
    d2: PropTypes.object
};

ShareMenuItem.defaultProps = {
    enabled: false,
    favoriteModel: null,
    favoriteType: null,
    onShare: null
};

ShareMenuItem.propTypes = {
    enabled: PropTypes.bool,
    favoriteModel: PropTypes.object,
    favoriteType: PropTypes.string,
    onShare: PropTypes.func
};

export default ShareMenuItem;