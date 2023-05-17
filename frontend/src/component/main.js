import React from 'react'
import { useState, useEffect } from 'react'
import '../css/main.css'

const Main = () => {
    return (
        <div className='outer-main-container'>
            <div className='inner-main-container'>
                <div className='main'>
                    <div className='breadcrumb'></div>
                    <div className='Type_Quantity'></div>
                    <div className='content'></div>
                </div>
            </div>
        </div>
    )
}

export default Main