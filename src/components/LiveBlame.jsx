import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import CardLiveBlame from './CardLiveBlame';

const LiveBlame = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        }, []);

    return (
        <div className="container">
            <ul className="album">
                {data
                .map((data) => (
                    <CardLiveBlame album={data} key={data.id} />
                ))
                }
            </ul>
        </div>
    );
};

export default LiveBlame;