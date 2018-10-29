'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FavoritesMenu = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _NewMenuItem = require('./NewMenuItem');

var _NewMenuItem2 = _interopRequireDefault(_NewMenuItem);

var _OpenMenuItem = require('./OpenMenuItem');

var _OpenMenuItem2 = _interopRequireDefault(_OpenMenuItem);

var _SaveMenuItem = require('./SaveMenuItem');

var _SaveMenuItem2 = _interopRequireDefault(_SaveMenuItem);

var _SaveAsMenuItem = require('./SaveAsMenuItem');

var _SaveAsMenuItem2 = _interopRequireDefault(_SaveAsMenuItem);

var _RenameMenuItem = require('./RenameMenuItem');

var _RenameMenuItem2 = _interopRequireDefault(_RenameMenuItem);

var _TranslateMenuItem = require('./TranslateMenuItem');

var _TranslateMenuItem2 = _interopRequireDefault(_TranslateMenuItem);

var _ShareMenuItem = require('./ShareMenuItem');

var _ShareMenuItem2 = _interopRequireDefault(_ShareMenuItem);

var _WriteInterpretationMenuItem = require('./WriteInterpretationMenuItem');

var _WriteInterpretationMenuItem2 = _interopRequireDefault(_WriteInterpretationMenuItem);

var _GetLinkMenuItem = require('./GetLinkMenuItem');

var _GetLinkMenuItem2 = _interopRequireDefault(_GetLinkMenuItem);

var _DeleteMenuItem = require('./DeleteMenuItem');

var _DeleteMenuItem2 = _interopRequireDefault(_DeleteMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FavoritesMenu = exports.FavoritesMenu = function (_Component) {
    (0, _inherits3.default)(FavoritesMenu, _Component);

    function FavoritesMenu(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, FavoritesMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FavoritesMenu.__proto__ || (0, _getPrototypeOf2.default)(FavoritesMenu)).call(this, props));

        _this.getChildContext = function () {
            return {
                d2: _this.props.d2
            };
        };

        _this.componentWillReceiveProps = function (nextProps) {
            if (nextProps.favoriteId) {
                _this.setFavoriteModel(nextProps.favoriteId);
            }
        };

        _this.setFavoriteModel = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
                var model;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _this.props.d2.models[_this.props.favoriteType].get(id);

                            case 2:
                                model = _context.sent;


                                _this.setState({ favoriteModel: model });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.toggleMenu = function (event) {
            _this.setState({
                menuIsOpen: !_this.state.menuIsOpen,
                anchorEl: _this.state.menuIsOpen ? null : event.currentTarget
            });
        };

        _this.closeMenu = function (event) {
            _this.toggleMenu(event);
        };

        _this.selectFavorite = function (id) {
            _this.setFavoriteModel(id);

            if (_this.props.onOpen) {
                _this.props.onOpen(id);
            }
        };

        _this.state = {
            menuIsOpen: false,
            anchorEl: null,
            favoriteModel: null
        };
        return _this;
    }

    (0, _createClass3.default)(FavoritesMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                favoriteType = _props.favoriteType,
                onNew = _props.onNew,
                onSave = _props.onSave,
                onSaveAs = _props.onSaveAs,
                onRename = _props.onRename,
                onTranslate = _props.onTranslate,
                onShare = _props.onShare,
                onWriteInterpretation = _props.onWriteInterpretation,
                onDelete = _props.onDelete,
                onError = _props.onError;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: this.toggleMenu },
                    'Favorites'
                ),
                _react2.default.createElement(
                    _Menu2.default,
                    {
                        disableEnforceFocus: true,
                        open: this.state.menuIsOpen,
                        onClose: this.closeMenu,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                        getContentAnchorEl: null
                    },
                    _react2.default.createElement(_NewMenuItem2.default, { enabled: Boolean(this.state.favoriteModel), onNew: onNew }),
                    _react2.default.createElement(_Divider2.default, { light: true }),
                    _react2.default.createElement(_OpenMenuItem2.default, {
                        enabled: true,
                        favoriteType: favoriteType,
                        onOpen: this.selectFavorite
                    }),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(_SaveMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.update),
                        onSave: onSave
                    }),
                    _react2.default.createElement(_SaveAsMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel),
                        favoriteModel: this.state.favoriteModel,
                        onSaveAs: onSaveAs
                    }),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(_RenameMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.update),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onRename: onRename,
                        onRenameError: onError
                    }),
                    _react2.default.createElement(_TranslateMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.update),
                        favoriteModel: this.state.favoriteModel,
                        onTranslate: onTranslate,
                        onTranslateError: onError
                    }),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(_ShareMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.manage),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onShare: onShare
                    }),
                    _react2.default.createElement(_WriteInterpretationMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.read),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onWriteInterpretation: onWriteInterpretation
                    }),
                    _react2.default.createElement(_GetLinkMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel
                    }),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(_DeleteMenuItem2.default, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.delete),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onDelete: onDelete,
                        onDeleteError: onError
                    })
                )
            );
        }
    }]);
    return FavoritesMenu;
}(_react.Component);

FavoritesMenu.childContextTypes = {
    d2: _propTypes2.default.object
};

FavoritesMenu.defaultProps = {
    d2: null,
    favoriteType: 'chart',
    favoriteId: null,
    onNew: null,
    onOpen: null,
    onSave: null,
    onSaveAs: null,
    onRename: null,
    onTranslate: null,
    onShare: null,
    onWriteInterpretation: null,
    onDelete: null,
    onError: null
};

FavoritesMenu.propTypes = {
    d2: _propTypes2.default.object,
    favoriteType: _propTypes2.default.oneOf(['chart', 'eventChart', 'reportTable', 'eventReport', 'map']),
    favoriteId: _propTypes2.default.object,
    onNew: _propTypes2.default.func,
    onOpen: _propTypes2.default.func,
    onSave: _propTypes2.default.func,
    onSaveAs: _propTypes2.default.func,
    onRename: _propTypes2.default.func,
    onTranslate: _propTypes2.default.func,
    onShare: _propTypes2.default.func,
    onWriteInterpretation: _propTypes2.default.func,
    onDelete: _propTypes2.default.func,
    onError: _propTypes2.default.func
};

var styles = function styles(theme) {
    return {
        menuItem: {
            '&:focus': {
                background: theme.palette.primary[500],
                '& $text, & $icon': {
                    color: theme.palette.common.white
                }
            }
        }
    };
};

exports.default = (0, _styles.withStyles)(styles)(FavoritesMenu);