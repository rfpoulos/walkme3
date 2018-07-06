import React from 'react';
import './style.css';
import helpers from './helpers';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import TextInput from '../../components/text-input/text-input';

let SignInDumb = ({ signInForm, handleEmail, handlePassword }) =>
    <div className="sign-in">
        <TextInput type="text" 
            placeholder="email or username"
            value={ signInForm.identifier }
            onChange={ handleEmail }/>
        <TextInput type="password"
            placeholder="password"
            value={ signInForm.password }
            onChange={ handlePassword }/>
    </div>

let SignIn = compose(
    withState('signInForm', 'updateInput', { identifier: '', password: '' }),
    withHandlers({
        handleEmail: ({signInForm, updateInput}) => event => 
            updateInput({...signInForm, identifier: event.target.value}),
        handlePassword: ({signInForm, updateInput}) => event =>
            updateInput({...signInForm, password: event.target.value})
    })
)(SignInDumb)

export default SignIn;