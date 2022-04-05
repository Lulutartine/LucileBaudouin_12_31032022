import React from 'react';

import Activity from '../charts/Activity';
import Average from '../charts/Average';
import Performance from '../charts/Performance';
import Score from '../charts/Score'

const Main = ( {activity, average, performance, keyData} ) => {
    return (
        <main>
            <Activity activity={activity}/>
            <div className="secondary-graph">
                <Average average={average}/>
                <Performance performance={performance}/>
                <Score keyData={keyData}/>
            </div>
        </main>
    );
};

export default Main;