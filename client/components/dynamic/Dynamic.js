import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Slots from './slots/Slots';
import Preferences from './preferences/Preferences';
import UpdateTaskForm from './forms/UpdateTaskForm';


class Dynamic extends React.Component {
    render() {
        let {displaySlots, displaySettings, showUpdateTaskForm} = this.props.display;
        if(displaySlots) {
            return(
                <Slots/>
            );
        }
        if(displaySettings) {
            return(
                <Preferences/>
            );
        }
        if(showUpdateTaskForm) {
            return (
               <UpdateTaskForm/> 
            );
        }
        else {
             return(
                <div>
                    <h2>Nothing to show</h2>
                </div>
            );
        } 
    }
}

const mapStateToProps = (state) => {
    return {
        display: state.display,
    };
}


export default connect(mapStateToProps, null)(Dynamic);