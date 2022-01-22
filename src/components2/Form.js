import React, { Component } from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        input: ''
      };
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}> 
            <div class="input-group">
              <input type="text" class="form-control" id="exampleInputEmail1"
              value={this.state.input} onChange={this.handleChange} 
             ></input>
              <span class="input-group-btn">
                <button class="btn btn-primary btn-lg" type="submit">登録</button>
              </span>
            </div>
          </form>
      );
    }
    handleChange = e => {
      this.setState({ input: e.currentTarget.value })
    };
  
    handleSubmit = e => {
      e.preventDefault();
      // ----- onSubmit()の呼び出しを追加 -----
      this.props.onSubmit(this.state.input);
      this.setState({ input: '' })
    }
  }
  
  export default Form;