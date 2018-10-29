'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


    return _react2.default.createElement(
        _Dialog2.default,
        { open: open, onClose: onRequestClose },
        _react2.default.createElement(
            _DialogContent2.default,
            null,
            _react2.default.createElement(
                'p',
                null,
                'Open in this app',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'a',
                    { href: getAppUrl(favoriteType, favoriteModel.id, context) },
                    getAppUrl(favoriteType, favoriteModel.id, context)
                )
            ),
            _react2.default.createElement(
                'p',
                null,
                'Open in web API',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
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
    d2: _propTypes2.default.object
};

GetLinkDialog.defaultProps = {
    open: false,
    favoriteModel: null,
    favoriteType: null,
    onRequestClose: null
};

GetLinkDialog.propTypes = {
    open: _propTypes2.default.bool,
    favoriteModel: _propTypes2.default.object,
    favoriteType: _propTypes2.default.string,
    onRequestClose: _propTypes2.default.func
};

exports.default = GetLinkDialog;