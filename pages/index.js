import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'


// export const getStaticProps = async()=>{
//   const response = await fetch('https://fakestoreapi.com/products');
  
//   const data = await response.json();
//   return{
//     props:{productData: data}
//   }
// }

// const Batches = (props) => {
//   const {productData} = props;
//   return (
//     <>
//     {productData.map(item =>(
//     <>
    
//     <Card style={{ width:'19.5rem' }} className=' d-inline-flex mt-3   ms-5 '>
//     <Link href={`/batches/${item.id}`}>
//       <Card.Img variant="top" src={item.image} width={200} height={250} /> </Link>
//       <Card.Body>
//         <Card.Title>{item.title.substr(0, 20)}</Card.Title>
//         <Card.Text className='fs-5 text fst-italic'>
//         {item.category}
//         </Card.Text>
//         <Card.Text>
//         {item.description.substr(0, 90)} ...
//         </Card.Text>
//         <div className="row">
//         <div className='fw-bold  col' > Price : {item.price} </div>
//         <div className='fw-bold  col' > Rating : {item.rating.rate} </div>
//         </div>
//         <Button variant="primary" className='mt-2'>Add to Cart</Button>
//       </Card.Body>
//     </Card>
   
//     </>
//   ))
  
// }
// </>)}

// export default Batches

export const getStaticProps = async() =>{
    //api calls
    const response = await fetch('https://fakestoreapi.com/products');
    console.log(response);
    const data = await response.json();
    console.log(data);
    return{
        props:{productData : data}
    }
}


const Courses = (props) => {
    console.log('props',props);
    const {productData} = props;
    return (
        <>
        {productData.map(item =>(
        <>
        
        <Card style={{ width:'19rem' }} className=' d-inline-flex mt-4   ms-4 offset-5'>
        <Link href={`/batches/${item.id}`}>
          <Card.Img variant="top" src={item.image} width={200} height={250} />
          </Link>
          <Card.Body>
            <Card.Title className='bg-light'>{item.title.substr(0,20)}</Card.Title>
            <Card.Text className='fs-5 text fst'>
            {item.category.substr(0,25)}
            </Card.Text>
            <Card.Text>
            {item.description.substr(0, 60)} ...
            </Card.Text>
            <div className="row">
            {/* <div className='fw-300  col' > Rating : {item.rating.rate} </div>
            <div className='fw-300  col' > Count : {item.rating.count} </div> */}
            <div className='fw-300  col' > Price : {item.price} </div>
            </div>
            <Button variant="secondary" className='mt-3'>Add to Cart</Button>
          </Card.Body>
        </Card>
        </>
      ))
      
    }
    </>)}


export default Courses;


