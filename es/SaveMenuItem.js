import React from 'react';
import PropTypes from 'prop-types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Save from '@material-ui/icons/Save';

var SaveMenuItem = function SaveMenuItem(props) {
    return React.createElement(
        MenuItem,
        { button: true, onClick: props.onSave, disabled: !props.enabled },
        React.createElement(
            ListItemIcon,
            null,
            React.createElement(Save, null)
        ),
        React.createElement(ListItemText, { primary: 'Save' })
    );
};

SaveMenuItem.defaultProps = {
    enabled: false,
    onSave: null
};

SaveMenuItem.propTypes = {
    enabled: PropTypes.bool,
    onSave: PropTypes.func
};

export default SaveMenuItem;