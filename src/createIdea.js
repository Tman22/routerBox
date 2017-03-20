import React, { Component } from 'react';

export default class CreateIdea extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleOnChange(e, key) {
    this.setState({ [key]: e.target.value });
  }

  handleSubmit() {
    this.props.addIdea(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    const { body, title } = this.state;
    return(
      <div>
        Title:
        <input value={title} onChange={(e) => this.handleOnChange(e, 'title') }/><br/>
        Body:
        <input value={body} onChange={(e) => this.handleOnChange(e, 'body') }/><br/>
        <buton onClick={() => this.handleSubmit() }>Submit</buton>
      </div>
    );
  }
}
