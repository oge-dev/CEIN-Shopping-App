import React from 'react'
import DeliveryComp from './DeliveryComp'
import FreeShipping from "../../assets/delivery1.png"
import SUPPORT from "../../assets/delivery2.png"
import SECURED from "../../assets/delivery3.png"
import "./Delivery.css"

const Delivery = () => {
  return (
    <div className='delivery'>
        <DeliveryComp style={"deliveryIcon"} src={FreeShipping} alt={"FREE SHIPPING"} headingText={"FREE SHIPPING"} paragraphText={"When you Spend $100+"} />
        <DeliveryComp src={SUPPORT} alt={"SUPPORT"} headingText={"SUPPORT 24/7"} paragraphText={"Ready to help our clients"} />
        <DeliveryComp src={SECURED} alt={"SECURED"} headingText={"SECURED PAYMENTS"} paragraphText={"We are afficially registered"} />
    </div>
  )
}

export default Delivery