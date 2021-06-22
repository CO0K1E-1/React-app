import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";


function App(props) {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;