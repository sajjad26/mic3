import React from 'react';
import styled from 'styled-components';

export default class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
