import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <div className="banner">
            <h1 className="banner__heading">Every Game With Lower Price</h1>
            <span className="banner__span">
                <Link to="/Search" className="banner__link">Search For Games</Link>
            </span>
        </div>
    )
}
