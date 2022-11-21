import React from "react";
import Image from "next/image"
import Head from "next/head"


const About = () => {
    return(
        <>
            <Head>
                <title>About JS</title>
            </Head>
           <div>
            <h1>This is for About page !! </h1>
            <img src="https://i.pinimg.com/736x/3d/96/eb/3d96eba59a324ac1570e174fd5bb5e94.jpg" />
            <Image src="/3d96eba59a324ac1570e174fd5bb5e94.jpg" width={400} height={400} />
        </div>
        </>
        
    )
}

export default About;