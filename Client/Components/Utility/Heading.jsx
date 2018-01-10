import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
	font-size: ${props => {
		if(props.big){
			return '1.8em';
		}else if(props.medium){
			return '1.5em';
		}else if(props.small) {
			return '1.2em';
		}else{
			return '1em';
		}
	}};
	margin: 0 0 10px 0;
`;

export default (props) => {
	return (
		<Heading {...props}>
      		{props.children}
     	</Heading>
	);
}