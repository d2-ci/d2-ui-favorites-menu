import React from 'react';
import PropTypes from 'prop-types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import AddBox from '@material-ui/icons/AddBox';

var NewMenuItem = function NewMenuItem(_ref) {
    var enabled = _ref.enabled,
        onNew = _ref.onNew;
    return React.createElement(
        MenuItem,
        { disabled: !enabled, onClick: onNew },
        React.createElement(
            ListItemIcon,
            null,
            React.createElement(AddBox, null)
        ),
        React.createElement(ListItemText, { primary: 'New' })
    );
};

NewMenuItem.defaultProps = {
    enabled: false,
    onNew: null
};

NewMenuItem.propTypes = {
    enabled: PropTypes.bool,
    onNew: PropTypes.func
};

export default NewMenuItem;