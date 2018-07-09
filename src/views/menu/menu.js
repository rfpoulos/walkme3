import React from 'react';
import './style.css';
import { connect } from 'react-redux';

let MenuDumb = ({ menuOpen, userObject }) =>
    <ul className={menuOpen.toString()}>
        <li>{userObject.username}</li>
    </ul>

let mapStateToProps = (state) => 
    ({
        menuOpen: state.menuOpen,
        userObject: state.userObject,
    })

let mapDispatchToProps = (dispatch) =>
    ({

    })

let Menu = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuDumb);


export default Menu;