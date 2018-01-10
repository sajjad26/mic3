import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import PlanetContainer from '../../Containers/Planet/PlanetContainer';
import PersonRow from './Partials/PersonRow';
import LoadMoreButton from './Partials/LoadMoreButton';
import ResponsiveWrapper from '../../Utility/ResponsiveWrapper';
import Loading from '../../Utility/Loading';

export default class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: {}
    };
    this.getPeople = this.getPeople.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.page = 1;
  }

  componentDidMount() {
    this.getPeople();
  }

  updateFilter(key, value){
    let { filters } = this.state;
    if(typeof value === 'undefined'){
      delete filters[key];
    }else{
      filters[key] = value;
    }
    this.setState({
      filters
    });
    this.getPeople(true);
  }

  getPeople(reset = false){
    let { getPeople, people, loading, hasMore } = this.props;
    let { filters } = this.state;
    hasMore = (reset) ? true : hasMore;
    if(loading === false && hasMore === true){
      getPeople(this.page, filters, reset);
      this.page = this.page + 1;
    }
  }

  render() {
    let { people, loading, hasMore } = this.props;
    let { filters } = this.state;
    return (
      <div>
        <div className="container">
          <Route path="/planet/:id" component={PlanetContainer} />
          <FixedTable className="table table-bordered">
            <thead>
              <tr>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Height</TableHeadCell>
                <TableHeadCell>Mass</TableHeadCell>
                <TableHeadCell>Created</TableHeadCell>
                <TableHeadCell>Edited</TableHeadCell>
                <TableHeadCell>Planet</TableHeadCell>
              </tr>
            </thead>
            <TableBody>              
              {people.map((person, key) => {
                return (
                  <PersonRow person={person} key={key} />
                );
              })}
            </TableBody>
          </FixedTable>
          {(() => {
            if(loading){
              return (
                <Loading />
              );
            }else{
              if(loading === false){
                return (
                  <LoadMoreButton hasMore={hasMore} onClick={this.getPeople} />
                );
              }
            }
          })()}
        </div>
      </div>
    );
  }
}

const FixedTable = styled.table`

`;

const TableHeadCell = styled.th`
  text-align: center;
`;

const TableBody = styled.tbody`
  
`;