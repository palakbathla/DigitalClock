import React, { useState } from 'react';

const App = () => {
    let time = new Date().toLocaleTimeString();
    
    const [ctime, setCtime] = useState(time);  //Hooks

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

setInterval(UpdateTime, 1000);

    return(
        <>
            <h1 span className="center"> {ctime} </h1>
        </>
    );
};

export default App; 