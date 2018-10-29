import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

var DeleteDialog = function DeleteDialog(props) {
    var open = props.open,
        favoriteModel = props.favoriteModel,
        onRequestClose = props.onRequestClose,
        onRequestDelete = props.onRequestDelete,
        onRequestDeleteError = props.onRequestDeleteError;


    var deleteFavorite = function deleteFavorite() {
        if (favoriteModel) {
            favoriteModel.delete().then(onRequestDelete()).catch(onRequestDeleteError());
        }
    };

    return React.createElement(
        Dialog,
        { open: open, onClose: onRequestClose, maxWidth: false },
        React.createElement(
            DialogTitle,
            null,
            'Delete favorite'
        ),
        React.createElement(
            DialogContent,
            null,
            'This favorite will be deleted. Continue?'
        ),
        React.createElement(
            DialogActions,
            null,
            React.createElement(
                Button,
                { onClick: onRequestClose, color: 'primary' },
                'Cancel'
            ),
            React.createElement(
                Button,
                { onClick: deleteFavorite, color: 'primary' },
                'Delete'
            )
        )
    );
};

DeleteDialog.defaultProps = {
    open: false,
    favoriteModel: null,
    onRequestClose: null,
    onRequestDelete: null,
    onRequestDeleteError: null
};

DeleteDialog.propTypes = {
    open: PropTypes.bool,
    favoriteModel: PropTypes.object,
    onRequestClose: PropTypes.func,
    onRequestDelete: PropTypes.func,
    onRequestDeleteError: PropTypes.func
};

export default DeleteDialog;