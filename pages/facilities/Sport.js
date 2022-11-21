import React from 'react';

export const getStaticProps =() =>{
    return{
        props:{footerstatus:true}
    }
}


const   Sport = () => {
    return(
        <div>
            <h2>This is sport page</h2>
        </div>
    )
}

export default Sport;