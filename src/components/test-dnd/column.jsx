import React from 'react';
import Task from "./task";
import {Droppable} from "react-beautiful-dnd";

class Column extends React.Component {
    render() {
        return (
            <div className="card__body">

                <h3>{this.props.column.title}</h3>
                <Droppable
                    droppableId = {this.props.column.id}>
                    {(provided) => (
                        <div
   style={{display:'flex', flexDirection: 'column'}}
                            ref = {provided.innerRef}
                            {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>

            </div>

        )
    }
}
export default Column;