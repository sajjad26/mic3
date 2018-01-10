import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class LoadMoreButton extends React.PureComponent {

	static get propTypes(){
    return {
      hasMore: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    let { onClick } = this.props;
    onClick();
  }

  render() {
  	let { onClick, hasMore } = this.props;
  	this.renderCount = this.renderCount + 1;
    return (
		<Wrapper>
			{(() => {
				if(hasMore){
					return (
						<Button hasmore={`${hasMore}`} onClick={this.onClick}>
							Load More
						</Button>
					);
				}else{
					return (
						<Button hasmore={`${hasMore}`}>
							END
						</Button>
					);
				}
			})()}
		</Wrapper>      
    );
  }
}


const Wrapper = styled.div`
	margin: 38px 0;
	text-align: center;
`;

const Button = styled.button`
	display: inline-block;
	padding: 10px 20px;
  	width: 280px;
  	border-radius: 4px;
	font-size: 1.2em;
	background-color: ${(props) => (props.hasmore == "true") ? '#6f8ce3' : '#cccccc'};
	color: ${(props) => (props.hasmore == "true") ? '#ffffff' : '#555555'};
	border: solid 1px #eee;
`;