import { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { updateCurrentLocation } from '../../redux/actions';
import { connect } from 'react-redux';
import { success } from './location-helpers';

let mapStateToProps = (state) => 
    ({

    });

let mapDispatchToProps = (dispatch) =>
    ({
        updateCurrentLocation: (res) => dispatch(updateCurrentLocation(res)),
    });

let enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle({
        componentDidMount() {
            window.navigator.geolocation.watchPosition((pos) => 
                success(pos, this.props.updateCurrentLocation));
            
        }
    }),
);

export default enhance(() => Fragment);
