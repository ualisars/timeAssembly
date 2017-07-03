import React from 'react';

import CreateSlotForm from '../forms/CreateSlotForm';
import UpdateSlotForm from '../forms/UpdateSlotForm';
import CreateTaskForm from '../forms/CreateTaskForm';
import SlotContainer from './SlotContainer';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showSlotForm, hideSlotForm, createSlot, updateSlot} from '../../../actions/slotAction';
import {hideTaskForms, createTask} from '../../../actions/taskAction';


class Slots extends React.Component {
    render() {
        const {showCreateSlotForm, showUpdateSlotForm} = this.props.slotInfo;
        const {showCreateTaskForm} = this.props.taskInfo;

        // if createSlot button has been clicked, CreateSlotForm will appear
        if(showCreateSlotForm) {
            return (
                <CreateSlotForm hideSlotForm={this.props.hideSlotForm} createSlot={this.props.createSlot}/>  
            );
        }
        if(showUpdateSlotForm) {
            return (
                <UpdateSlotForm hideSlotForm={this.props.hideSlotForm} updateSlot={this.props.updateSlot}/>
            );
        }
        if(showCreateTaskForm) {
            return (
                <CreateTaskForm hideTaskForm={this.props.hideTaskForms} createTask={this.props.createTask}/>
            );
        }
        else {
            return(
                <SlotContainer showSlotForm={this.props.showSlotForm}/>    
             );
        } 
    } 
}

const mapStateToProps = (state) => {
    return {
        slotInfo: state.slotInfo,
        taskInfo: state.taskInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            // fetch slots from database
            showSlotForm,
            hideSlotForm,
            createSlot,
            updateSlot,
            hideTaskForms,
            createTask
        }, 
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Slots);