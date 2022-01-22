import React, { Component } from 'react';

class Todo extends Component {

  render() {
    const { text, completed} = this.props 
    return (
      <div>
        <span>
          <p1 class="fs-2">{text}</p1>
        </span>
        <div class="text-end">
          <button type="button" class="btn btn-danger" onClick={this.handleClickDelete}>削除</button>
          <button type="button" class="btn btn-success" onClick={this.handleClickMove}>完了</button>
        </div>
      </div>
    )
  }

  handleClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  handleClickMove = () => {
    const { onMove, text, id} = this.props;
    onMove(text, id);
  }
  
}

export default Todo