import React from 'react'

export default function RenderDeals(props) {
    const { isLoading, stores, dealsToShow } = props;

    return (
        <div className="dealsContainer">
            <div className="deal__headings">
                <h2 className="deal__headings--title">Title</h2>
                <div className="deal__headings--info">
                    <span className="deal__headings--salePrice">Sale Price</span>
                    <span className="deal__headings--normalPrice">Normal Price</span>
                    <span className="deal__headings--store">Store</span>
                </div>
            </div>
            {
                (isLoading || stores.length === 0) ? (
                    <div className="loading">
                        <img src="./Images/loading.gif" alt="Loading"/>
                    </div>
                ) : dealsToShow.map(deal => (
                    <div className="deal" key={deal.dealID}>
                        <a className="deal__link" target="_blank" href={"https://www.cheapshark.com/redirect?dealID=" + deal.dealID}>
                            <h3 className="deal__title">{deal.title}</h3>
                        </a>

                        <div className="deal__info">
                            <span className="deal__salePrice">${deal.salePrice}</span>
                            <span className="deal__normalPrice">${deal.normalPrice}</span>
                            <span className="deal__store" title={stores[parseInt(deal.storeID) - 1].storeName}>
                                <img src={"https://www.cheapshark.com" + stores[parseInt(deal.storeID) - 1].images.logo} alt=""/>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
