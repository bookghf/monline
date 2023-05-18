import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css/productDetail.css'

const ProductDetail = () => {
    let { state } = useLocation();
    let detail = state.item.member;

    return (
        <div className='product-details-container'>
            <div className='product-details'>
                <div className='detail-content'>
                    <div className='breadcrumb-container'>
                        <ul className='breadcrumb'>
                            <li>
                                <p>Home</p>
                                <p> &gt;</p>
                            </li>
                            {( detail.main_category.level === null ) ? 
                            (<p> {detail.name}</p>) : (
                                (detail.main_category.breadcrumbs.map((member, i) => (
                                    <li>
                                        <p>{detail.main_category.breadcrumbs[i].category_name}</p>
                                        <p>&gt;</p>
                                    </li>
                                )))
                            )}
                            {( detail.main_category.level === null ) ? 
                            (null) : (<p> {detail.name}</p>)}
                        </ul>
                    </div>
                    <div className='product-show-detail'>
                        <div className='photo-show'>
                            <div className='photo-main'>
                                <img src={detail.image.url} alt='' />
                            </div>
                            <div className='photo-small-container'>
                                <div className='photo-wrap'>
                                    <img src={detail.image.url} alt=''></img>
                                </div>
                                {( detail.second_image.url === "" ) ? 
                                (null) : (
                                    <div className='photo-wrap'>
                                        <img src={detail.second_image.url} alt='' />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='product-detail-buy'>
                            <div className='product-detail-brand-container'>
                                <p>{detail.brand.name}</p>
                            </div>
                            <div className='product-detail-name-container'>
                                <p>{detail.name}</p>
                            </div>
                            <div className='product-detail-price-container'>
                                <div className='card-detail-price-container'>
                                    <div className='card-detail-price'>
                                        <div className='card-discount-price'>
                                            <p>฿{detail.price_range.minimum_price.final_price.value}</p>
                                            <p>฿{detail.price_range.minimum_price.regular_price.value}</p>
                                        </div>
                                        <div className='card-save-price'>
                                            <p>SAVE ฿{detail.price_range.minimum_price.discount.amount_off}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-detail-review-container'>
                                <div className='review-container'>
                                    <p>Be the first to review</p>
                                </div>
                                <div className='review-container'>
                                    <img src='/check.jpg' alt='' /> 
                                    <p>Add To Compare</p>
                                </div>
                                <div className='review-container'>
                                    <img src='https://monline.com/static/images/svgs/heart-empty.svg' alt='' />
                                    <p>Save to Wishlist</p>
                                </div>
                            </div>
                            <div className='product-detail-owner-container'>
                                <p>Sold by:</p>
                                <p>The Mall Group</p>
                            </div>
                            <div className='product-detail-attribute-container'>
                                <div className='size-container'>
                                    <p>Wear Size</p>
                                    <div className='choose'>
                                        <p>XL</p>
                                        <img src='/arrow_down.jpg' alt='' />
                                    </div>
                                </div>
                                <div className='quantity-container'>
                                    <p>Quantity</p>
                                    <div className='choose'>
                                        <p>1</p>
                                        <div className='arrow'>
                                            <img src='/arrow_up.jpg' alt='' />
                                            <img src='/arrow_down.jpg' alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='tags-container'>
                                    <div className='tags-wrap'>
                                        <img src='/check-box.jpg' alt='' />
                                        <p> AVAILBLE IN STORE</p>
                                    </div>
                                    <div className='tags-wrap'>
                                        <img src='/check-box.jpg' alt='' />
                                        <p> FREE STANDARD DELIVERY</p>
                                    </div>
                                    <div className='tags-wrap'>
                                        <img src='/check-box.jpg' alt='' />
                                        <p> EARN M POINT</p>
                                    </div>
                                    <div className='tags-wrap'>
                                        <img src='/check-box.jpg' alt='' />
                                        <p> 0% INSTALLMENT</p>
                                    </div>
                                    <div className='tags-wrap'>
                                        <img src='/check-box.jpg' alt='' />
                                        <p> RETURN&EXCHANGE IN 14DAYS*</p>
                                    </div>
                                </div>
                                <div className='add-to-buy'>
                                    <img src='https://monline.com/static/images/svgs/bag-icon.svg' alt=''/>
                                    <p>ADD TO BAG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail