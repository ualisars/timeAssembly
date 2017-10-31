import React from 'react';

class Task extends React.Component {
    render() {
        let {
            title,
            category,
            description,
            duration,
            startTimeHours,
            startTimeMinutes,
            finishTimeHours,
            finishTimeMinutes,
            day,
            slot,
            id
        } = this.props.property;
        return (
            <div className="task container">
                <div className="row">
                    <div className="col-md-2 taskTime">
                        <div className="taskStartTime">
                            {startTimeHours}:{startTimeMinutes}
                        </div>
                        <div className="taskFinishTime">
                            {finishTimeHours}:{finishTimeMinutes}
                        </div>
                    </div>
                    <div className="col-md-10 taskContent">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <span className="taskTitle">{title}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span>Category: {category}</span>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span>Description: {description}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span>Duration: {duration} mins</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button onClick={() => this.props.onClickUpdate(id)} className="btn btn-info">Edit</button>
                            </div>
                            <div className="col-md-6">
                                <button onClick={() => this.props.removeTask(id, slot)} className="btn btn-danger">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                
            
        );
    }
}

export default Task;