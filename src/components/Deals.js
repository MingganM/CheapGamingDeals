import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// COMPONENTS:
import RenderDeals from './RenderDeals';
import { fetchWithAxios } from '../helperFunctions';
import { payloadDispatcher } from '../redux/actionCreator';

function Deals(props) {
    const { 
        state: { 
            stores, 
            curDealsPageNum, 
            dealsToShow 
        },
        dispatch 
    } = props;

    const [state, setState] = useState({
        isLoading: false
    });

    function fetchDeals(){
        if(!state.isLoading) return;

        const endpoint = "https://www.cheapshark.com/api/1.0/deals?pageNumber=" + curDealsPageNum;
        
        fetchWithAxios(endpoint, dispatch, payloadDispatcher("SET_DEALSTOSHOW"), adjustLoading);
    }

    function adjustLoading(){
        setState({
            isLoading: !state.isLoading
        })
    }

    useEffect(adjustLoading, []);
    useEffect(fetchDeals, [state.isLoading]);
    useEffect(adjustLoading, [curDealsPageNum]);

    function getNextPage(){
        getNewDeals(curDealsPageNum + 1);
    }
    function getPrevPage(){
        getNewDeals(curDealsPageNum - 1);
    }
    function getNewDeals(pageNum){
        dispatch({
            type: "CHANGE_CURDEALSPAGE",
            payload: pageNum
        })
    }

    return (
        <div className="deals">
            <div className="deals__settings">
                <span className="deals__curPage">Page No: {curDealsPageNum + 1}</span>
                <div className="deals__buttons">
                    <button onClick={getPrevPage} className={curDealsPageNum === 0 ? "deals__btn hidden" : "deals__btn"}>Prev</button>
                    <button onClick={getNextPage} className="deals__btn">Next</button>
                </div>
            </div>

            <RenderDeals 
                isLoading={state.isLoading}
                stores={stores}
                dealsToShow={dealsToShow}
            />
        </div>
    )
}
function mapStateToProps(state, ownProps){
    return {
        ...ownProps,
        state
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deals);