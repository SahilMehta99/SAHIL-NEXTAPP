import React from 'react'

export const getStaticPaths = async()=>{
    // const arr = ["2022", "2021", "2020", "2019"];
    const response = await fetch('https://fakestoreapi.com/products/');
    const arr = await response.json();
    const paths = arr.map((item)=>{
        return {
            params : { year : item.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    // console.log(context.params);
    const temp = context.params.year;
    const response = await fetch('https://fakestoreapi.com/products/'+temp);
    const data = await response.json();

    return{
        props: {
            res:data,
            notFound: true
            
        }
    }

}

const year = ({res}) => {
    // console.log('res' - res);
  return (
    <>
    <div className="row">
    <div className='col-md-8 pb-3'>
    <div> <h4>Batch Page - {res.title} </h4></div>
    <div classname='col-md-4'> <img src = {res.image}  width='200'/></div>
    <div> Price: {res.price} </div>
    <div> {res.category} </div>
    </div>
    </div>
   
    
    </>
  )
}

export default year;