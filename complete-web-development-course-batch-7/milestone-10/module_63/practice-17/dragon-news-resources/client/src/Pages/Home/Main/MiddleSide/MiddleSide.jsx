import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MiddleSideContent from './MiddleSideContent/MiddleSideContent';

const MiddleSide = () => {
    const {id} = useParams();
    const newsFeed = useLoaderData();
    // console.log(news);
    return (
        <div>
            {id && <h2>Dragon News...{newsFeed.length}</h2>}
            {
                newsFeed.map(news => <MiddleSideContent key={news._id} news={news}></MiddleSideContent>)
            }
        </div>
    );
};

export default MiddleSide;