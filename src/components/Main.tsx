import React from 'react';


import ContentDisplay from './UI/contentDisplay';
import SidePanel from './UI/sidePanel';
import Header from './UI/header';

const Main = (props:any) => {
    return (
        <div className="App">
            <Header /> 

            <ContentDisplay
                name="Twitter"
            />
            <SidePanel />

        </div>
    );
}

export default Main