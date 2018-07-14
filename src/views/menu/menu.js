import React from 'react';
import './style.css';
import { connect } from 'react-redux';

export let Menu = ({ 
    menuOpen, 
    userObject, 
}) =>
    <ul className={ menuOpen.toString() }>
        <li></li>
    </ul>

let mapStateToProps = (state) => 
    ({
        menuOpen: state.menuOpen,
        userObject: state.userObject,
    });

let mapDispatchToProps = (dispatch) =>
    ({

    });

export let enhance = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default enhance(Menu);