import React from 'react';
import './style.css';
import { connect } from 'react-redux';

let MenuDumb = ({ menuOpen }) =>
    <ul className={menuOpen.toString()}>
        <li>Content!</li>
    </ul>

let mapStateToProps = (state) => 
    ({
        menuOpen: state.menuOpen
    })

let mapDispatchToProps = (dispatch) =>
    ({

    })

let Menu = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuDumb);


export default Menu;