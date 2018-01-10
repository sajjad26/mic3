import React from 'react';
import styled from 'styled-components';
import Loading from '../../Utility/Loading';

export default class Planet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.getPlanet = this.getPlanet.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.getPlanet();
  }

  componentWillReceiveProps(props){
    if(props.match.params.id != this.props.match.params.id){
      this.getPlanet(true);
    }
  }

  goBack(){
    console.log('go back', this.props.history);
    this.props.history.push('/');
  }

  getPlanet(reset = false){
    let { getPlanet, planet, loading, match } = this.props;
    if(loading === false){
      getPlanet(match.params.id, reset);
    }
  }

  render() {
    let { planet, loading } = this.props;
    return (
      <ModalContainer>
        <Modal>
          <ModalCloseButton href='javascript:;' onClick={this.goBack}><i className="glyphicon glyphicon-remove"></i></ModalCloseButton>
          <PlanetContainer>
            {(() => {
              if(loading || !planet){
                return (<Loading />);
              }else{
                return (
                  <div>
                    <PlanetTitle>{planet.name}</PlanetTitle>
                    <ul>
                      <li>Diameter : {planet.diameter}</li>
                      <li>Climate : {planet.climate}</li>
                      <li>Population : {planet.population}</li>
                    </ul>
                  </div>
                );
              }
            })()}
          </PlanetContainer>  
        </Modal>
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  background-color: rgba(85, 85, 85, 0.6);
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
`;

const Modal = styled.div`
  max-width: 800px;
  margin: 10% auto 0;
  position: relative;
`;

const PlanetContainer = styled.div`
  background-color: #eeeeee;
  padding: 20px;
  border-radius: 6px;
`;

const PlanetTitle = styled.h1`
  margin: 0 0 10px 0;
`;

const ModalCloseButton = styled.a`
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 1.2em;
  color: #555;
  &:hover{
    color: #777;
  }
`;