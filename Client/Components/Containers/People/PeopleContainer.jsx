import React from 'react';
import { connect } from 'react-redux';
import People from '../../Presentational/People/People';
import { 
  getPeople,
  resetPeople, 
  setPeopleLoading, 
  setPeopleHasMore 
} from '../../../Actions/PeopleActions';

const mapStateToProps = (state) => {
  return {
    people: state.people.people,
    loading: state.people.loading,
    hasMore: state.people.hasMore
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople(page = 1, filters = {}, reset = false){
      if(reset === true){
        dispatch(resetPeople());
        dispatch(setPeopleHasMore(true));
      }
      dispatch(setPeopleLoading(true));
      return getPeople(page, filters).then((action) => {
        dispatch(setPeopleLoading(false));
        if(action.payload.length === 0){
          dispatch(setPeopleHasMore(false));
        }
        return dispatch(action);
      }).catch((err) => {
        dispatch(setPeopleLoading(false));
      });
    }
  }
}

export class PeopleContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <People {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleContainer)
