import React from 'react';
import Number from "./Number";
import Buttoms from "./Buttoms";

function MainContent(props) {
    return (
        <div>

            <div className={"main"}>
                <Number/>
            </div>

            <Buttoms/>
        </div>
    );
};

export default MainContent;