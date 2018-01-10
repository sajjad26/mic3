import React from 'react';
import styled from 'styled-components';
import Heading from '../../Utility/Heading';


export default class Header extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderContainer>
        <MainHeading>Frontend Test</MainHeading>
      </HeaderContainer>
    );
  }
}


const HeaderContainer = styled.div`
  padding: 40px 0;
  border-bottom: solid 1px #ccc;
  margin-bottom: 20px;
`;

const MainHeading = styled.h1`
  text-transform: uppercase;
  font-size: 1.8em;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #585858;
`;