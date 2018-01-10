import React from 'react';
import styled from 'styled-components';

export default class Loading extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoaderWrapper>
      	<Loader src="/assets/icons/loading.gif" />
      </LoaderWrapper>
    );
  }
}

const LoaderWrapper = styled.div`
	margin: 0 10px;
	text-align: center;
`;

const Loader = styled.img`
	display: inline-block;
	width: 120px;
	height: 120px;
`;