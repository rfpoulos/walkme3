import React from 'react';
import { createAccount } from './create-account-helpers';
import { connect } from 'react-redux';
import {
    withRouter,
    Link,
} from 'react-router-dom';
import { 
    compose, 
    withState, 
    withHandlers,
} from 'recompose';
import { updateUserObject } from '../../redux/actions';
import TextInput from '../../components/text-input/text-input';
import Button from '../../components/button/button';
import {
    container,
    input,
} from './create-account-style';

export let CreateAccount = ({ 
    createAccountForm,
    handleUsername, 
    handleEmail, 
    handlePassword, 
    updateUserObject,
    history,
}) =>
    <div style={ container }>
        <div style={ input }>
            <TextInput type="email" 
                placeholder="Email"
                value={ createAccountForm.email }
                onChange={ handleEmail }
            />
        </div>
        <div style={ input }>        
            <TextInput type="text" 
                placeholder="Username"
                value={ createAccountForm.username }
                onChange={ handleUsername }
            />
            </div>
        <div style={ input }>        
            <TextInput type="password"
                placeholder="Password"
                value={ createAccountForm.password }
                onChange={ handlePassword }
            />
        </div>
        <Button text="Create Account" 
            onClick={ 
                createAccount(createAccountForm, updateUserObject, history)
        } />
        <Link to="/signin">Already a user?  Sign in here.</Link>
    </div>

let mapStateToProps = (state) => 
    ({

    });

let mapDispatchToProps = (dispatch) => 
    ({
        updateUserObject: (userObject) => dispatch(updateUserObject(userObject)),
    });

export let enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter,
    withState(
        'createAccountForm',
        'updateCreateAccountForm',
        { email: '', password: '', username: '' }
    ),
    withHandlers({
        handleEmail:({ 
                createAccountForm, 
                updateCreateAccountForm,
            }) => event => 
                updateCreateAccountForm({
                    ...createAccountForm, 
                    email: event.target.value
            }),
        handleUsername: ({ 
                createAccountForm, 
                updateCreateAccountForm,
            }) => event => 
                updateCreateAccountForm({
                    ...createAccountForm,
                    username: event.target.value
            }),
        handlePassword: ({ 
                createAccountForm, 
                updateCreateAccountForm,
            }) => event => 
                updateCreateAccountForm({
                    ...createAccountForm, 
                    password: event.target.value
            }),
    }),
);

export default enhance(CreateAccount);