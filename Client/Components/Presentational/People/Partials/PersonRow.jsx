import React from 'react';
import styled from 'styled-components';
import store from 'store';
import moment from 'moment';
import { Link } from 'react-router-dom';
import AddToWishlist from './AddToWishlist';

export default class PersonRow extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let { person } = this.props;
  }

  render() {
    let { person } = this.props;
    return (
      <Wrapper>
        <TableCell>
          {person.name}
        </TableCell>
        <TableCell>
          {person.height} cm
        </TableCell>
        <TableCell>
          {person.mass} kg
        </TableCell>
        <TableCell>
          {moment(person.created).format('MMM DD, Y')}
        </TableCell>
        <TableCell>
          {moment(person.edited).format('MMM DD, Y')}
        </TableCell>
        <TableCell>
          <Link to={`/planet/${person.planetId}`}>Planet {person.planetId}</Link>
        </TableCell>
      </Wrapper>
    );
  }
}

const Wrapper = styled.tr`
  &:hover, &:active, &:focus{
    
  }
  @media only screen and (min-width : 1200px) {
    
  }
  @media only screen and (min-width : 768px && max-width: 1199px) {
    width: 100%;
  }
`;

const TableCell = styled.td`
  text-align: center;
`;