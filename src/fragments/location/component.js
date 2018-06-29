import { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { updateCurrentLocation } from '/Users/rachelpoulos/Desktop/walkme3/src/actions.js';
import { connect } from 'react-redux';
import { success } from './helper-functions';

let LocationDumb = compose(
    lifecycle({
        componentDidMount() {
            window.navigator.geolocation.watchPosition((pos) => 
                success(pos, this.props.updateCurrentLocation));
            
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
