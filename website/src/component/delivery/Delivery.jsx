import './Delivery.css'
import { RiRedPacketLine } from "react-icons/ri";
import { PiHeadsetDuotone } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";

const Delivery = () => {
    return (

     <section className='free-delivery'>
        <div className="container">
            <div className="row">
                <div className="p-2 col-12 col-sm-6 col-lg-3">
                <div className=" free p-2">
                    <div className="icon-1">
                        <a href="#"><RiRedPacketLine /></a>
                        <div className="services">
						<span className='fw-bolder fs-5'>Product Packing</span>
						<p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing.</p>
					</div>
                    </div>
                </div>
                </div>
                <div className="p-2 col-12 col-sm-6 col-lg-3">
                <div className=" free p-2">
                    <div className="icon-1">
                        <a href="#"><PiHeadsetDuotone /></a>
                        <div className="services">
						<span className='fw-bolder fs-5'>24x7 Support</span>
						<p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing.</p>
					</div>
                    </div>
                </div>
                </div>
                <div className="p-2 col-12 col-sm-6 col-lg-3">
                <div className=" free p-2">
                    <div className="icon-1">
                        <a href="#">< BsTruck/></a>
                        <div className="services">
						<span className='fw-bolder fs-5'>Delivery in 5 Days</span>
						<p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing.</p>
					</div>
                    </div>
                </div>
                </div>
                <div className="p-2 col-12 col-sm-6 col-lg-3">
                <div className=" free p-2   ">
                    <div className="icon-1">
                        <a href="#"><RiSecurePaymentLine/></a>
                        <div className="services">
						<span className='fw-bolder fs-5'>Payment Secure</span>
						<p>Lorem ipsum, dolor sit amet <br />consectetur adipisicing.</p>
					</div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
     </section>

    )
}

export default Delivery