import React from 'react';
import styled from 'styled-components';

const ResponsiveWrapper = styled.div`
  background-color: ${(props) => props.bgcolor ? props.bgcolor : '#ffffff'};
  max-width: 900px;
  margin: 0 auto;
`;

export default (props) => {
  return (
    <ResponsiveWrapper {...props}>
      {props.children}
    </ResponsiveWrapper>
  );
}