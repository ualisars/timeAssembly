import React from 'react';

import Slot from '../presentation/Slot';
import CreateSlotForm from '../presentation/CreateSlotForm';
import SlotContainer from '../presentation/SlotContainer';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchSlots} from '../../actions/fetchSlotAction';
import {addTask} from '../../actions/taskAction';
import {createSlot} from '../../actions/slotAction';

class Slots extends React.Component {

    componentDidMount() {
        this.props.fetchSlots();
    }

    render() {
        const {loading, loaded, errors, slots} = this.props.slotsInfo;
        let {showCreateSlotForm} = this.props.createSlotInfo;
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
                <div className="container-fluid">
                    <div>Errors</div>
                    <div>{errors}</div>
                </div>
            );
        }

        // when data loaded
        // display every slots
        if(loaded) {
                 resource = slots.resource.map((slot, i) => {
                    let property = {
                        title: slot.title,
                        category: slot.category,
                        total: slot.category,
                        free: slot.free,
                        tempotary: slot.tempotary,
                        dueDate: slot.dueDate,
                    }
                    return (
                        <div key={i}>
                            <Slot addTask={this.props.addTask} property={property}/>
                        </div>
                    );
            });
        }

        // if createSlot button has been clicked, CreateSlotForm will appear
        if(showCreateSlotForm) {
            return (
                <CreateSlotForm/>  
            );
        }
        else {
            return(
                <SlotContainer createSlot={this.props.createSlot} resource={resource}/>    
             );
        } 
    } 
}

const mapStateToProps = (state) => {
    return {
        // slots info
        slotsInfo: state.slots,
        createSlotInfo: state.createSlot
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            // fetch slots from database
            fetchSlots,
            addTask,
            createSlot
        }, 
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Slots);