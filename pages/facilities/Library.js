import React from 'react';

export const getStaticProps =() =>{
    return{
        props:{footerstatus:true}
    }
}


const Library = () => {
    return(
        <div>
            <h2>This is library page</h2>
        </div>
    )
}

export default Library;