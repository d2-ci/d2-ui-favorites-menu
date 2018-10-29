import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import NewMenuItem from './NewMenuItem';
import OpenMenuItem from './OpenMenuItem';
import SaveMenuItem from './SaveMenuItem';
import SaveAsMenuItem from './SaveAsMenuItem';
import RenameMenuItem from './RenameMenuItem';
import TranslateMenuItem from './TranslateMenuItem';
import ShareMenuItem from './ShareMenuItem';
import WriteInterpretationMenuItem from './WriteInterpretationMenuItem';
import GetLinkMenuItem from './GetLinkMenuItem';
import DeleteMenuItem from './DeleteMenuItem';

export var FavoritesMenu = function (_Component) {
    _inherits(FavoritesMenu, _Component);

    function FavoritesMenu(props) {
        var _this2 = this;

        _classCallCheck(this, FavoritesMenu);

        var _this = _possibleConstructorReturn(this, (FavoritesMenu.__proto__ || _Object$getPrototypeOf(FavoritesMenu)).call(this, props));

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
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id) {
                var model;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
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

    _createClass(FavoritesMenu, [{
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


            return React.createElement(
                'div',
                null,
                React.createElement(
                    Button,
                    { onClick: this.toggleMenu },
                    'Favorites'
                ),
                React.createElement(
                    Menu,
                    {
                        disableEnforceFocus: true,
                        open: this.state.menuIsOpen,
                        onClose: this.closeMenu,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                        getContentAnchorEl: null
                    },
                    React.createElement(NewMenuItem, { enabled: Boolean(this.state.favoriteModel), onNew: onNew }),
                    React.createElement(Divider, { light: true }),
                    React.createElement(OpenMenuItem, {
                        enabled: true,
                        favoriteType: favoriteType,
                        onOpen: this.selectFavorite
                    }),
                    React.createElement(Divider, null),
                    React.createElement(SaveMenuItem, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.update),
                        onSave: onSave
                    }),
                    React.createElement(SaveAsMenuItem, {
                        enabled: Boolean(this.state.favoriteModel),
                        favoriteModel: this.state.favoriteModel,
                        onSaveAs: onSaveAs
                    }),
                    React.createElement(Divider, null),
                    React.createElement(RenameMenuItem, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.update),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onRename: onRename,
                        onRenameError: onError
                    }),
                    React.createElement(TranslateMenuItem, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.update),
                        favoriteModel: this.state.favoriteModel,
                        onTranslate: onTranslate,
                        onTranslateError: onError
                    }),
                    React.createElement(Divider, null),
                    React.createElement(ShareMenuItem, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.manage),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onShare: onShare
                    }),
                    React.createElement(WriteInterpretationMenuItem, {
                        enabled: Boolean(this.state.favoriteModel && this.state.favoriteModel.access.read),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel,
                        onWriteInterpretation: onWriteInterpretation
                    }),
                    React.createElement(GetLinkMenuItem, {
                        enabled: Boolean(this.state.favoriteModel),
                        favoriteType: favoriteType,
                        favoriteModel: this.state.favoriteModel
                    }),
                    React.createElement(Divider, null),
                    React.createElement(DeleteMenuItem, {
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
}(Component);

FavoritesMenu.childContextTypes = {
    d2: PropTypes.object
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
    d2: PropTypes.object,
    favoriteType: PropTypes.oneOf(['chart', 'eventChart', 'reportTable', 'eventReport', 'map']),
    favoriteId: PropTypes.object,
    onNew: PropTypes.func,
    onOpen: PropTypes.func,
    onSave: PropTypes.func,
    onSaveAs: PropTypes.func,
    onRename: PropTypes.func,
    onTranslate: PropTypes.func,
    onShare: PropTypes.func,
    onWriteInterpretation: PropTypes.func,
    onDelete: PropTypes.func,
    onError: PropTypes.func
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

export default withStyles(styles)(FavoritesMenu);