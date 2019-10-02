import React from 'react';

class Draggable extends React.Component {


    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    };

    noAllowDrop =(e)=> {
        e.stopPropagation();
    };

    render () {
        return(
            <div style={this.props.style} draggable= "true" onDragStart={this.drag} id={this.props.id} onDragOver={this.noAllowDrop}>
                {this.props.children}
            </div>
        )
    }
}
export default Draggable;