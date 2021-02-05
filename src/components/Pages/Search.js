import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// COMPONENTS:
import Searchbar from '../Searchbar';
import RenderDeals from '../RenderDeals';
import { fetchWithAxios } from '../../helperFunctions';
import { payloadDispatcher } from '../../redux/actionCreator';

function Search(props) {
    const { dispatch, state: { stores, currentGame } } = props;

    const [state, setState] = useState({
        isLoading: false,
        searchVal: ''
    });

    function handleSubmit(e){
        e.preventDefault();
        
        adjustLoading();
    }
    function handleSubmitFetch(){
        if(!state.isLoading) return;
        
        const endpoint = `https://www.cheapshark.com/api/1.0/deals?title=${state.searchVal}&limit=60`;
    
        fetchWithAxios(endpoint, dispatch, payloadDispatcher("SET_SINGLEGAME"), adjustLoading)    
    }

    function adjustLoading(){
        setState({
            ...state,
            isLoading: !state.isLoading
        })
    }
    useEffect(handleSubmitFetch, [state.isLoading]);

    function handleSearchChange(e){
        setState({
            ...state,
            searchVal: e.target.value
        })
    }

    return (
        <div className="Search">
            <Searchbar 
                handleSubmit={handleSubmit}
                handleSearchChange={handleSearchChange}
            />
            
            <RenderDeals 
                isLoading={state.isLoading}
                stores={stores}
                dealsToShow={currentGame}
            />
        </div>
    )
}
function mapStateToProps(state, ownProps){
    return {
        state,
        ...ownProps
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
