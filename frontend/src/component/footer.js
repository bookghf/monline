import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-info-container'>
          <div className='info-outer-container'>
            <div className='info-inner-container'>
              <div className='info about'>
                <div className='head about'>
                  <p>About Us</p>
                </div>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>Be Our Partner</p>
              </div>
              <div className='info monline'>
                <div className='head monline'>
                  <p>M Online</p>
                </div>
                <p>How to Shop</p>
                <p>Order & Tracking</p>
                <p>Return & Exchanges</p>
                <p>Tell us what you think</p>
              </div>
              <div className='info services'>
                <div className='head services'>
                  <p>Services</p>
                </div>
                <p>Delivery Service</p>
                <p>Personalized Service</p>
                <p>Gift Wrap Service</p>
                <p>Store Location</p>
              </div>
              <div className='info member'>
                <div className='head member'>
                  <p>Member Benefits</p>
                </div>
                <p>M Card</p>
                <p>Download M Card App</p>
                <p>Apply SCB M VISA Card</p>
              </div>
              <div className='info customer-services'>
                <div className='head customer-services'>
                  <p>Customer Services</p>
                </div>
                <p>Mon-Sun 09.00 - 20.00</p>
                <p>Tel: 02-239-1234</p>
                <p>Line:@MonlineTH</p>
              </div>
            </div>
          </div>
          <div className='contact-outer-container'>
            <div className='contact-inner-container'>
              <div className='email-subscribe-container'>
                <div className='head email-subscribe-describe-container'>
                  <p>Stay ahead of the trends. Subscribe Now</p>
                </div>
                <div className='email-form-container'></div>
              </div>
              <div className='social-contact-container'>
                <div className='footer-contact-image-container'>
                  <a href='https://www.facebook.com/MonlineThailand' target='_blank' rel="noreferrer">
                    <img src='https://media-kiwis.monline.com/media/footer/facebook-footer.png' alt=''/>
                  </a>
                </div>
                <div className='footer-contact-image-container'>
                  <a href='https://www.instagram.com/MonlineThailand/' target='_blank' rel="noreferrer">
                    <img src='https://media-kiwis.monline.com/media/footer/ig-footer.png' alt=''/>
                  </a>                  
                </div>
                <div className='footer-contact-image-container'>
                  <a href='https://twitter.com/MonlineThailand' target='_blank' rel="noreferrer">
                    <img src='https://media-kiwis.monline.com/media/footer/twitter-footer.png' alt=''/>
                  </a>          
                </div>
                <div className='footer-contact-image-container'>
                  <a href='https://www.youtube.com/c/MonlineThailand' target='_blank' rel="noreferrer">
                    <img src='https://media-kiwis.monline.com/media/footer/youtube-footer.png' alt=''/>
                  </a>                  
                </div>
                <div className='footer-contact-image-container'>
                  <a href='http://tmg.click/MOnline_LineAccount' target='_blank' rel="noreferrer">
                    <img src='https://media-kiwis.monline.com/media/footer/line-footer.png' alt=''/>
                  </a>
                </div>
                <div className='footer-contact-image-container'>
                  <a href='mailto:Monline_customerservice@themall.co.th' target='_blank' rel="noreferrer">
                    <img src='https://media-kiwis.monline.com/media/footer/email-footer.png' alt=''/>
                  </a>                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='brands-container'>
          <a href='https://themalllifestore.themall.co.th/' target='_blank' rel="noreferrer">
            <img src='https://media-kiwis.monline.com/media/footer/m-lifestore.png' alt=''/>
          </a>
          <a href='https://www.themall.co.th/th/home' target='_blank' rel="noreferrer">
            <img src='https://media-kiwis.monline.com/media/footer/themall.png' alt=''/>
          </a>
          <a href='https://www.emporium.co.th/' target='_blank' rel="noreferrer">
            <img src='https://media-kiwis.monline.com/media/footer/emporium.png' alt=''/>
          </a>
          <a href='https://www.emquartier.co.th/' target='_blank' rel="noreferrer">
            <img src='https://media-kiwis.monline.com/media/footer/emquartier.png' alt=''/>
          </a>
          <a href='https://www.paragondepartmentstore.com/' target='_blank' rel="noreferrer">
            <img src='https://media-kiwis.monline.com/media/footer/paragon.png' alt=''/>
          </a>
          <a href='https://gourmetmarketthailand.com/th' target='_blank' rel="noreferrer">
            <img src='https://media-kiwis.monline.com/media/footer/footer-gourmet-logo-white.png' alt=''/>
          </a>
        </div>
        <div className='copyrights-container'>
          <p>Copyright @2021 The Mall Group All rights reserved. | E-Commerce Registeration Number : 0105523009350</p>
        </div>
      </div>
    </div>
  )
}

export default Footer