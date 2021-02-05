import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
// FILES:
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
import Nav from './components/Nav';
import { fetchWithAxios } from './helperFunctions';
import { payloadDispatcher } from './redux/actionCreator';

function App(props) {
  const { stores, dispatch } = props;
  
  function mapStoresToState(){
    const endpoint = 'https://www.cheapshark.com/api/1.0/stores';

    fetchWithAxios(endpoint, dispatch, payloadDispatcher("SET_STORES"))
  }

  useEffect(mapStoresToState, []);

  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Search" component={Search}/>
      </Switch>
    </div>
  );
}
function mapStateToProps(state, ownProps){
  const { stores } = state;
  return {
    ...ownProps,
    stores
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
