import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../component/card';
import { Link } from 'react-router-dom';
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
                    <div className='breadcrumb-container'>
                        <div className='breadcrumb'>
                            <li>
                                <p>Home</p>
                                <p>&gt;</p>
                            </li>
                            <li>
                                <p>Women</p>
                                <p>&gt;</p>
                            </li>
                            <li>
                                <p>Cosmetics</p>
                            </li>
                            
                        </div>
                    </div>
                    <div className='type-quantity-container'>
                        <div className='type-quantity'>
                            <h1>Cosmetics</h1>
                            <p>&#40;{products.length} items&#41;</p>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='product-card-container'>
                        {(typeof products === 'undefined') ? 
                        (<p> Loading...</p>) :
                        (products.map((member, i) => (
                            <div className='product-card' key={i}>
                                <Link to={`/product/${member.url_key}`} style={{ textDecoration: 'none' }} state={{item: {member}}}><Card products={member}/></Link>
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