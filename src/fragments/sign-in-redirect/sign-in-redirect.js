import { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserObject } from './sign-in-redirect-helpers';
import { updateUserObject } from '../../redux/actions';

let mapStateToProps = (state) => 
    ({
        userObject: state.userObject,
    });

let mapDispatchToProps = (dispatch) =>
    ({
        updateUserObject: (userData) => dispatch(updateUserObject(userData)),
    });

let enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter,
    lifecycle({
        async componentDidMount() {
            if (localStorage.getItem('token')) {
                try {
                    let userObject = await fetchUserObject();
                    this.props.updateUserObject(userObject);
                } catch(err) {
                    localStorage.removeItem('token');
                    this.props.history.push('/signin');
                }
            } else {
                this.props.history.push('/signin');
            }
        },
        componentDidUpdate({userObject}) {
            if (!this.props.userObject
                && this.props.history.location !== 
                ('/createaccount'|| '/signin')) {
                this.props.history.push('/signin');
            }
        }
    }),
);

export default enhance(() => Fragment);
