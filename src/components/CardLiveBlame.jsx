import React from 'react';

const CardLiveBlame = ({ album, key }) => {
    return (
        <li className="card">
            <div>
            <h1>{album.title}</h1>
            </div>
        </li>
    );
};

export default CardLiveBlame;