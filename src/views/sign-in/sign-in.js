import React from 'react';
import { signIn } from './sign-in-helpers';
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
} from './sign-in-style';

export let SignIn = ({ 
    signInForm, 
    handleEmail, 
    handlePassword, 
    updateUserObject,
    history,
}) =>
    <div style={ container }>
        <div style={ input }>        
            <TextInput type="text" 
                placeholder="Email or Username"
                value={ signInForm.identifier }
                onChange={ handleEmail }
            />
        </div>
        <div style={ input }>        
            <TextInput type="password"
                placeholder="Password"
                value={ signInForm.password }
                onChange={ handlePassword }
            />
        </div>
        <Button text="Sign In" 
            onClick={ signIn(signInForm, updateUserObject, history) }
        />
        <Link to="/createaccount">New user?  Create Account.</Link>
    </div>

let mapStateToProps = (state) => 
    ({

    });

let mapDispatchToProps = (dispatch) => 
    ({
        updateUserObject: (user) => 
            dispatch(updateUserObject(user)),
    });

export let enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter,
    withState(
        'signInForm', 
        'updateSignInForm', 
        { identifier: '', password: '' }
    ),
    withHandlers({
        handleEmail: ({
                signInForm, 
                updateSignInForm,
            }) => event => 
                updateSignInForm({
                    ...signInForm, 
                    identifier: event.target.value
            }),
        handlePassword: ({
                signInForm, 
                updateSignInForm,
            }) => event => 
                updateSignInForm({
                    ...signInForm, 
                    password: event.target.value
            }),
    }),
);

export default enhance(SignIn);