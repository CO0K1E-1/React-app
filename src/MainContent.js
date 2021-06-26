import React, {useState} from 'react';
import Number from "./Number";
import Buttoms from "./Buttoms";

function MainContent(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div>

            <div className={"main"}>
                <Number counter={counter}/>
            </div>

            <Buttoms counter={counter} setCounter={setCounter}/>
        </div>
    );
};

export default MainContent;