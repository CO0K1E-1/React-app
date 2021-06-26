import React from 'react';

function Buttoms(props) {
    function Plus() {
        const x = props.counter + 1;
        props.setCounter(x)
    }

    function Minus() {
        const x = props.counter - 1;
        props.setCounter(x)
    }

    function Reset() {
        props.setCounter(0)
    }

    return (
        <div className={"buttom"}>
            <button className={"b1"} onClick={Plus}>Увеличить</button>
            <button className={"b2"} onClick={Minus}>Уменьшить</button>
            <button className={"b3"} onClick={Reset}>Сбросить</button>
        </div>
    );
}

export default Buttoms;