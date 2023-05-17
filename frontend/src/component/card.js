import React from 'react'
import '../css/card.css'

const Card = ({products}) => {
    const product = products
    
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='product-picture'>
                    <a href=''>
                        <img src={product.image.url} alt=''></img>
                    </a>
                </div>
                <div className='product-detail-container'>
                    <div className='product-detail'>
                        <a href=''>
                            <div className='inner-detail'>
                                <div className='card-detail-brand'>
                                    <div className='text'>
                                        <p>{product.brand.name}</p>
                                    </div>
                                </div>
                                <div className='card-detail-name'>
                                    <div className='text'>
                                        <p>{product.name}</p>
                                    </div>
                                </div>
                                <div className='card-detail-price-container'>
                                    <div className='card-detail-price'>
                                        <div className='card-discount-price'>
                                            <p>฿{product.price_range.minimum_price.final_price.value}</p>
                                            <p>฿{product.price_range.minimum_price.regular_price.value}</p>
                                        </div>
                                        <div className='card-save-price'>
                                            <p>SAVE ฿{product.price_range.minimum_price.discount.amount_off}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card