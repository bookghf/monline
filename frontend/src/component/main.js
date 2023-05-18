import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../component/card';
import { Link } from 'react-router-dom';
import '../css/main.css'

const Main = () => {
    const [products, setProduct] = useState([])
    const [page,setPage] = useState(1)
    
    const handleSetPage = (handle) => {
        setPage(handle)
    }
    const handleBNPage = (handle) =>{
        if((handle === -1 )&(page === 1)){
            handle = 0
        } else if ((handle === 1 )&(page === 4)){
            handle = 0
        }
        setPage(page+handle)
    }
    useEffect(()=>{

        console.log(page)
    },[page])
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
                    <div className='pagination-container'>
                        <div class="pagination">
                            <div className="none" onClick={()=>handleBNPage(-1)}>&laquo;</div>
                            <div className={(page === 1)?("stay"):("none")} page={1} onClick={()=>handleSetPage(1)}>1</div>
                            <div className={(page === 2)?("stay"):("none")} page={2} onClick={()=>handleSetPage(2)}>2</div>
                            <div className={(page === 3)?("stay"):("none")} page={3} onClick={()=>handleSetPage(3)}>3</div>
                            <div className={(page === 4)?("stay"):("none")} page={4} onClick={()=>handleSetPage(4)}>4</div>
                            <div className="none" onClick={()=>handleBNPage(1)}>&raquo;</div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='product-card-container'>
                        {(typeof products === 'undefined') ? 
                        (<p> Loading...</p>) :
                        (products.slice((3*page-3), (3*page) ? (3*page) : products.length).map((member, i) => (
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