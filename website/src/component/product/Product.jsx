
import './Product.css'

import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const Product = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            <div className=" col-12 col-lg-6 ">
                                <div className="col-12 d-flex flex-wrap">
                                    <div className="col-12 col-sm-6 p-2">
                                        <div className="p-card card w-100">
                                            <div className="pc-img">
                                                <img src="./image/p1.jpg" className="card-img-top img-fluid" alt="..." />
                                                <div className="view">
                                                    <div className="view-btn m-1">
                                                        <FaRegHeart />
                                                    </div>
                                                    <div className="view-btn m-1">
                                                        <IoMdEye />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="beg">
                                                <MdOutlineShoppingBag />
                                            </div>
                                            <div className="p-body card-body text-center p-0">
                                                <a href="#">vegetable</a>
                                                <div className="star pb-2">
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <small>(4.5)</small>

                                                </div>
                                                <h6><a href="#">Best snakes with hazel nut mix pack 200gm</a>
                                                </h6>
                                                <p>
                                                    <span>112</span>
                                                    <span>12333</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 p-2">
                                        <div className="p-card card w-100">
                                            <div className="pc-img">
                                                <img src="./image/p2.jpg" className="card-img-top img-fluid" alt="..." />
                                                <div className="view">
                                                    <div className="view-btn m-1">
                                                        <FaRegHeart />
                                                    </div>
                                                    <div className="view-btn m-1">
                                                        <IoMdEye />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="beg">
                                                <MdOutlineShoppingBag />
                                            </div>
                                            <div className="p-body card-body text-center p-0">
                                                <a href="#">vegetable</a>
                                                <div className="star pb-2">
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <span className='fs-5'><IoMdStar /></span>
                                                    <small>(4.5)</small>

                                                </div>
                                                <h6><a href="#">Sweet snakes crunchy nut mix 250gm pack</a>
                                                </h6>
                                                <p>
                                                    <span>112</span>
                                                    <span>12333</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-12 col-lg-6 py-4">
                                 <div className="pd card">
                                    <img src="image/page.jpg" className="card-img-top img-fluid" style={{objectFit:"contain"}} alt="..." />
                                    <div className="col-5 text-end pd-body card-body  ">
                                        <h2>Organic & HealthyVegetables</h2>
                                        <p><span className='fs-4 sp pe-1 '>25%</span>OFF </p>
                                        <div className="ShopBtn d-flex justify-content-end"> <a href="#" className="btn fs-6">shop Now</a></div>
                                        </div>
                                </div>
                                {/* <div className="pd-banner p-2">
                                    <img src="./imgs/prdc-bnr.jpg" className='img-fluid rounded' style={{objectFit:"contain"}} alt="" />
                                    <div className="pd-contant">
                                        <h2>Organic & HealthyVegetables</h2>
                                        <span className='fs-3'>75% 
                                            <small className='fs-6'>OFF</small>
                                        </span>
                                        <div className="ShopBtn d-flex"> <a href="#" class="btn fs-6">shop Now</a></div>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product