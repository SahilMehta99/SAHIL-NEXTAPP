import React, { useEffect } from "react";
import {useRouter} from 'next/router';

const NotFound = ()=> {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() => {
            router.push('/facilities');
        },3000)
    },[])

    return(
        <div>
            <h2>Page Not Found . Plz Check URL</h2>
        </div>
    )
}
export default NotFound