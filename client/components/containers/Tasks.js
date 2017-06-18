import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchSlots} from '../../actions/slotAction';

class Tasks extends React.Component {

    componentDidMount() {
        this.props.fetchSlots();
    }

    render() {
        const {loading, loaded, errors, slots} = this.props.slotsInfo;
        let resource = null;
        console.log('Slots info',slots);
        // when data is loading
        if(loading) {
            return(
                <div>loading</div>
            );
        }

        // if errors occurs
        if(errors) {
            return(
                <div>Errors</div>
            );
        }

        // when data loaded
        if(loaded) {
                resource = slots.resource.map((slot, i) => {
                    return (
                        <div>{slot.title}</div>
                    );
            });
        }
        return(
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-4 offset-md-4">
                    <span>Tasks</span>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                      Slots {resource}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // slots info
        slotsInfo: state.slots
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            // fetch slots from database
            fetchSlots
        }, 
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);