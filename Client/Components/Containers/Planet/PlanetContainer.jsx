import React from 'react';
import { connect } from 'react-redux';
import Planet from '../../Presentational/Planet/Planet';
import { 
  getPlanet,
  resetPlanet, 
  setPlanetLoading, 
} from '../../../Actions/PlanetActions';

export class PlanetContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Planet {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    planet: state.planet.planet,
    loading: state.planet.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlanet(id = 1, reset = false){
      if(reset === true){
        dispatch(resetPlanet());
      }
      dispatch(setPlanetLoading(true));
      return getPlanet(id).then((action) => {
        dispatch(setPlanetLoading(false));
        return dispatch(action);
      }).catch((err) => {
        dispatch(setPlanetLoading(false));
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetContainer)
