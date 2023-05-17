import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../component/card';
import '../css/main.css'

const Main = () => {
    //const [page, setPage] = useState()
    const [products, setProduct] = useState([])
    
    useEffect(()=>{

        fetch(`/product_list.json`)
        .then(res => res.json())
        .then((data)=>{
            setProduct(data.items);
        });
    },[])

    return (
        <div className='outer-main-container'>
            <div className='inner-main-container'>
                <div className='main'>
                    <div className='breadcrumb'></div>
                    <div className='Type_Quantity'>
                    {/* <Pagination count={10} />
                    <Pagination count={10} color="primary" />
                    <Pagination count={10} color="secondary" />
                    <Pagination count={10} disabled /> */}
                    </div>
                    <div className='content'>
                        <div className='product-card-container'>
                        {(typeof products === 'undefined') ? 
                        (<p> Loading...</p>) :
                        (products.map((member, i) => (
                            <div className='product-card' key={i}>
                                <Card products={member}/>
                            </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main