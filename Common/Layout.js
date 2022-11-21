import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./navbar";

const Layout = (props) => {
    const {children,footerstatus} = props;
    console.timeLog('footerstatus' , footerstatus);
    return(
        <>
          {true ? (<div className='containers p-2'>
            <Header/>
            <Navbar/>
            {children}
            {!footerstatus && (<Footer/>)}
            </div>) : (
                <div className='containers p-2'>
                <Header/>
                <Navbar/>
                {children}
                {!footerstatus && (<Footer/>)}
            </div>)}
            
        </>
    )
}

export default Layout;