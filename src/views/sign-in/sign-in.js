import React from 'react';
import './style.css';
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

export let SignIn = ({ 
    signInForm, 
    handleEmail, 
    handlePassword, 
    updateUserObject,
    history,
}) =>
    <div className="sign-in">
        <TextInput type="text" 
            placeholder="Email or Username"
            value={ signInForm.identifier }
            onChange={ handleEmail }/>
        <TextInput type="password"
            placeholder="Password"
            value={ signInForm.password }
            onChange={ handlePassword }/>
        <Button text="Sign In" 
            onClick={ signIn(signInForm, updateUserObject, history) } />
        <Link to="/createaccount">New user?  Create Account.</Link>
    </div>

let mapStateToProps = (state) => 
    ({

    })

let mapDispatchToProps = (dispatch) =>
    ({
        updateUserObject: (userObject) => dispatch(updateUserObject(userObject)),
    })

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
        handleEmail: ({signInForm, updateSignInForm}) => 
            event => updateSignInForm({
                ...signInForm, 
                identifier: event.target.value
            }),
        handlePassword: ({signInForm, updateSignInForm}) => 
            event => updateSignInForm({
                ...signInForm, 
                password: event.target.value
            }),
    })
)


export default enhance(SignIn);