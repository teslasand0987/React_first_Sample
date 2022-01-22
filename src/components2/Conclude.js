import React, { Component } from 'react';

class Conclude extends Component {

  render() {
    const { text, completed} = this.props 
    return (
      <div>
        <span>
          <p1 class="fs-2 text-light">{text}</p1>
        </span>
        <div class="text-end">
          <button type="button" class="btn btn-danger" onClick={this.handleClickDelete}>削除</button>
        </div>
      </div>
    )
  }

  handleClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };
  
}

export default Conclude