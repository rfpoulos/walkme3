import React from 'react';
import './style.css';
import { signIn } from './helpers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';
import { updateUserObject } from '../../redux/actions';
import TextInput from '../../components/text-input/text-input';
import Button from '../../components/button/button';

let SignInDumb = ({ signInForm, 
                    handleEmail, 
                    handlePassword, 
                    updateUserObject,
                    history,
                 }) =>
    <div className="sign-in">
        <TextInput type="text" 
            placeholder="email or username"
            value={ signInForm.identifier }
            onChange={ handleEmail }/>
        <TextInput type="password"
            placeholder="password"
            value={ signInForm.password }
            onChange={ handlePassword }/>
        <Button text="Sign In" 
            onClick={ signIn(signInForm, updateUserObject, history) } />
    </div>

let SignInEnhance = compose(
    withState('signInForm', 'updateSignInForm', { identifier: '', password: '' }),
    withHandlers({
        handleEmail: ({signInForm, updateSignInForm}) => event => 
            updateSignInForm({...signInForm, identifier: event.target.value}),
        handlePassword: ({signInForm, updateSignInForm}) => event =>
            updateSignInForm({...signInForm, password: event.target.value})
    })
)(SignInDumb)

let mapStateToProps = (state) => 
    ({

    })

let mapDispatchToProps = (dispatch) =>
    ({
        updateUserObject: (userData) => dispatch(updateUserObject(userData)),
    })

let SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInEnhance);

export default withRouter(SignIn);