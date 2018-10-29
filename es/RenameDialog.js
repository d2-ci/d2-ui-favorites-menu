import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

var RenameDialog = function (_Component) {
    _inherits(RenameDialog, _Component);

    function RenameDialog(props) {
        var _this2 = this;

        _classCallCheck(this, RenameDialog);

        var _this = _possibleConstructorReturn(this, (RenameDialog.__proto__ || _Object$getPrototypeOf(RenameDialog)).call(this, props));

        _this.handleChange = function (field) {
            return function (event) {
                event.preventDefault();

                _this.setState(_defineProperty({}, field, event.target.value));
            };
        };

        _this.onRequestClose = function () {
            // reset form so when the dialog is reopened is consistent
            // with the actual favorite
            _this.setState({ newName: '', newDescription: '' });

            _this.props.onRequestClose();
        };

        _this.handleSubmit = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
                var _this$props, favoriteModel, onRequestRename, onRequestRenameError, form, validationStatus, payload;

                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this$props = _this.props, favoriteModel = _this$props.favoriteModel, onRequestRename = _this$props.onRequestRename, onRequestRenameError = _this$props.onRequestRenameError;

                                if (!favoriteModel) {
                                    _context.next = 22;
                                    break;
                                }

                                form = _this.state;


                                favoriteModel.name = form.newName;
                                favoriteModel.description = form.newDescription;

                                _context.prev = 6;
                                _context.next = 9;
                                return favoriteModel.validate();

                            case 9:
                                validationStatus = _context.sent;

                                if (!(validationStatus.status === true)) {
                                    _context.next = 17;
                                    break;
                                }

                                payload = {
                                    description: form.newDescription
                                };


                                if (form.newName) {
                                    payload.name = form.newName;
                                }

                                if (!payload.name) {
                                    _context.next = 17;
                                    break;
                                }

                                _context.next = 16;
                                return _this.context.d2.Api.getApi().patch(favoriteModel.href, payload);

                            case 16:

                                if (onRequestRename) {
                                    onRequestRename();
                                }

                            case 17:
                                _context.next = 22;
                                break;

                            case 19:
                                _context.prev = 19;
                                _context.t0 = _context['catch'](6);

                                if (onRequestRenameError) {
                                    onRequestRenameError(_context.t0);
                                }

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 19]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.state = {
            newName: '',
            newDescription: ''
        };
        return _this;
    }

    _createClass(RenameDialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // reset form to initial value when reopening the save as dialog
            if (nextProps.open === true && !this.state.newName) {
                this.setState({
                    newName: nextProps.favoriteModel.displayName || '',
                    newDescription: nextProps.favoriteModel.displayDescription || ''
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var open = this.props.open;


            return React.createElement(
                Dialog,
                { open: open, onClose: this.onRequestClose, maxWidth: 'md' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        DialogTitle,
                        null,
                        'Rename favorite'
                    ),
                    React.createElement(
                        DialogContent,
                        null,
                        React.createElement(
                            FormControl,
                            { fullWidth: true },
                            React.createElement(TextField, {
                                label: 'Name',
                                value: this.state.newName,
                                required: true,
                                margin: 'normal',
                                onChange: this.handleChange('newName')
                            })
                        ),
                        React.createElement(
                            FormControl,
                            { fullWidth: true },
                            React.createElement(TextField, {
                                label: 'Description',
                                value: this.state.newDescription,
                                margin: 'normal',
                                multiline: true,
                                rowsMax: 4,
                                onChange: this.handleChange('newDescription')
                            })
                        )
                    ),
                    React.createElement(
                        DialogActions,
                        null,
                        React.createElement(
                            Button,
                            { onClick: this.onRequestClose, color: 'primary' },
                            'Cancel'
                        ),
                        React.createElement(
                            Button,
                            { type: 'submit', onClick: this.handleSubmit, color: 'primary' },
                            'Rename'
                        )
                    )
                )
            );
        }
    }]);

    return RenameDialog;
}(Component);

RenameDialog.contextTypes = {
    d2: PropTypes.object
};

RenameDialog.defaultProps = {
    open: false,
    favoriteModel: null,
    onRequestClose: null,
    onRequestRename: null,
    onRequestRenameError: null
};

RenameDialog.propTypes = {
    open: PropTypes.bool,
    favoriteModel: PropTypes.object,
    onRequestClose: PropTypes.func,
    onRequestRename: PropTypes.func,
    onRequestRenameError: PropTypes.func
};

export default RenameDialog;