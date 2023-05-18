import React from 'react'
import '../css/nav.css'
const Nav = () => {

  return (
      <div className='nav-container'>
        <div className='nav'>
          <div className='left-nav-container'>
            <div className='logo-container'>
              <a href='/'><img src='https://media-kiwis.monline.com/media/logo/stores/1/MOL_RGB_ON-WHITE.jpeg' alt='menu' /></a>
            </div>
          </div>
          <div className='right-nav-container'>
            <div className='right-top-nav-container'/>
            <div className='right-bottom-nav-container'>
              <div className='wrap-search-link'>
                <div className='search-container'>
                  <div className='search-logo-container'>
                    <img src='https://monline.com/static/images/svgs/search-icon.svg' alt=''/>
                  </div>
                </div>
                <div className='profile-link-container'>
                  <div className='sign-container'>
                    <div className='sign'><img src='https://monline.com/static/images/svgs/user-icon.svg' alt=''/></div>
                    <div className='sign'><p>SIGN IN</p></div>
                    <div className='sign'><p>REGISTER</p></div>                    
                  </div>
                  <div className='link-logo-container'>
                      <div className='sign'><img src='https://monline.com/static/images/svgs/heart-empty.svg' alt=''/></div>
                      <div className='sign'><img src='https://monline.com/static/images/svgs/bag-icon.svg' alt=''/></div>
                      <div className='sign'><img src='https://monline.com/static/images/svgs/thai-lang.svg' alt=''/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='menu'>
            <ul className='menu-ul'>
              <li className='menu-list'><p>BRAND</p></li>
              <li className='menu-list'><p>PROMOTION</p></li>
              <li className='menu-list'><p>BEAUTY HALL</p></li>
              <li className='menu-list'><p>WOMEN</p></li>
              <li className='menu-list'><p>MEN</p></li>
              <li className='menu-list'><p>SPORTS MALL</p></li>
              <li className='menu-list'><p>POWER MALL</p></li>
              <li className='menu-list'><p>WATCHES</p></li>
              <li className='menu-list'><p>KIDSPLANET</p></li>
              <li className='menu-list'><p>BETREND</p></li>
              <li className='menu-list'><p>THE LIVING</p></li>
            </ul>
          </div>

        </div>
      </div>
  )
}

export default Nav