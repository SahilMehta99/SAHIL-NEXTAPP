import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
          <Card.Img variant="top" src={item.image} width={200} height={250} />
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