import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = styled.div`
	cursor: Pointer
`;

const SvgIcon = styled.div`
	width: 20px;
	height: 20px;
	svg {
		fill: ${(props) => props.color ? props.color : 'white'};
	}
`;

const Heart = require('../../../../Assets/icons/heart.svg');
const HeartO = require('../../../../Assets/icons/heart-o.svg');

export default class AddToWishlist extends React.PureComponent {

  static get propTypes(){
    return {
      onClick: PropTypes.func.isRequired,
      liked: PropTypes.bool.isRequired,
      show: PropTypes.bool.isRequired
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    let { onClick, liked, show } = this.props;
    if(!show){
      return false;
    }
    return (
    	<IconContainer onClick={onClick}>
    		<SvgIcon 
          dangerouslySetInnerHTML={{__html: (liked) ? Heart : HeartO}}
          color={(liked) ? '#ff5454' : '#aaaaaa'}
        />
    	</IconContainer>
    );
  }
}
