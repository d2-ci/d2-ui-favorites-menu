import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

var getAppUrl = function getAppUrl(favoriteType, favoriteId, context) {
    var baseUrl = context.d2.Api.getApi().baseUrl.split('/api', 1)[0];

    var appName = void 0;

    switch (favoriteType) {
        case 'chart':
            appName = 'dhis-web-visualizer';
            break;
        case 'reportTable':
            appName = 'dhis-web-pivot';
            break;
        case 'eventReport':
            appName = 'dhis-web-event-reports';
            break;
        case 'eventChart':
            appName = 'dhis-web-event-visualizer';
            break;
        case 'map':
            appName = 'dhis-web-maps';
            break;
        default:
            appName = '';
    }

    return baseUrl + '/' + appName + '/index.html?id=' + favoriteId;
};

var GetLinkDialog = function GetLinkDialog(props, context) {
    var open = props.open,
        favoriteType = props.favoriteType,
        favoriteModel = props.favoriteModel,
        onRequestClose = props.onRequestClose;


    return React.createElement(
        Dialog,
        { open: open, onClose: onRequestClose },
        React.createElement(
            DialogContent,
            null,
            React.createElement(
                'p',
                null,
                'Open in this app',
                React.createElement('br', null),
                React.createElement(
                    'a',
                    { href: getAppUrl(favoriteType, favoriteModel.id, context) },
                    getAppUrl(favoriteType, favoriteModel.id, context)
                )
            ),
            React.createElement(
                'p',
                null,
                'Open in web API',
                React.createElement('br', null),
                React.createElement(
                    'a',
                    { href: favoriteModel.href + '/data.html+css' },
                    favoriteModel.href,
                    '/data.html+css'
                )
            )
        )
    );
};

GetLinkDialog.contextTypes = {
    d2: PropTypes.object
};

GetLinkDialog.defaultProps = {
    open: false,
    favoriteModel: null,
    favoriteType: null,
    onRequestClose: null
};

GetLinkDialog.propTypes = {
    open: PropTypes.bool,
    favoriteModel: PropTypes.object,
    favoriteType: PropTypes.string,
    onRequestClose: PropTypes.func
};

export default GetLinkDialog;