import { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { updateCurrentLocation } from '../../redux/actions';
import { connect } from 'react-redux';
import helpers from './helpers';

let LocationDumb = compose(
    lifecycle({
        componentDidMount() {
            window.navigator.geolocation.watchPosition((pos) => 
                helpers.success(pos, this.props.updateCurrentLocation));
            
        }
    }),
)(() => Fragment);

let mapStateToProps = (state) => 
    ({

    })

let mapDispatchToProps = (dispatch) =>
    ({
        updateCurrentLocation: (res) => dispatch(updateCurrentLocation(res))
    })

let Location = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationDumb);

export default Location;
