import React from 'react';

class Droppable extends React.Component {


    drop = (e) => {
    e.preventDefault();
   const data = e.dataTransfer.getData('transfer');

   // e.target.appendChild(document.getElementById(data));
   // console.log(data);
        this.props.close(data);
    };

    allowDrop =(e)=> {
      e.preventDefault();
    };

    render () {
        return(
            <div style={this.props.style} onDragOver={this.allowDrop} id={this.props.id} onDrop={this.drop}>
                {this.props.children}
            </div>
        )
    }
}
export default Droppable;