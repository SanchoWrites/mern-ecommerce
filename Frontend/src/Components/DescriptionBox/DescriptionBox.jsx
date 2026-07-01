import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows individuals and businesses to buy and sell goods, services, or digital products over the internet. It functions as a digital storefront, eliminating the need for a physical location by handling product browsing, cart management, and secure financial transactions online.</p>
            <p>Unlike traditional sites meant just to share information, e-commerce websites allow users to browse catalogs, add items to a shopping cart, and securely complete payments online.</p>
        </div>
    </div>
  )
}
