import React from 'react';
import './style.css';
import helpers from './helpers';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import TextInput from '../../components/text-input/text-input';

let SignInDumb = () =>
    <div className="sign-in">
        <TextInput type="email" placeholder="email"/>
        <TextInput type="password" placeholder="password" />
    </div>

export default SignInDumb;