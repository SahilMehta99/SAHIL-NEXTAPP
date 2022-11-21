import React from 'react'
import Link from 'next/link'


export const getStaticProps =() =>{
    return{
        props:{footerstatus:true}
    }
}


const Facilities = () => {
    return(
        <div>
            <h2>This is facilities page ....</h2>
            <ul>
                <li><Link href='/facilities/Lab'>Labs</Link></li>
                <li><Link href='/facilities/Playground'>Playground</Link></li>
                <li><Link href='/facilities/Library'>Library</Link></li>
                <li><Link href='/facilities/Sport'>Sports Room</Link></li>
                
            </ul>
        </div>
    )
}

export default Facilities;