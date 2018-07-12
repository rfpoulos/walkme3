import { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

let SignInRedirectDumb = compose(
    lifecycle({
        componentDidMount() {
            if (!this.props.userObject) {
                this.props.history.push('/signin')
            }
        },
        componentDidUpdate({userObject}) {
            if ((userObject !== this.props.userObject) 
                && !this.props.userObject
                && this.props.history.location !== '/createaccount') {
                this.props.history.push('/signin')
            }
        }
    }),
)(() => Fragment);

let mapStateToProps = (state) => 
    ({
        userObject: state.userObject,
    })

let mapDispatchToProps = (dispatch) =>
    ({
    })

let SignInRedirect = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInRedirectDumb);

export default withRouter(SignInRedirect);
