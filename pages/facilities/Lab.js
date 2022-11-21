import React from 'react';

export const getStaticProps =() =>{
    return{
        props:{footerstatus:true}
    }
}


const Lab = () => {
    return(
        <div>
            <h2>This is lab page</h2>
        </div>
    )
}

export default Lab;