import './People.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const People = () => {
    return (
        <div>
            <section className='testimonial'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="great position-relative">
                                <h2>Great Words From People</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="people d-flex pt-5">
                                <div className="col-4 px-3">
                                    <div className="co-founder box py-5 position-relative w-100 ">
                                        <div className="img position-absolute rounded-circle bg-white vector text-center pt-2">
                                            <img src="image/p-1.jpg" className="rounded-circle" />
                                        </div>
                                        <div className="founder-content text-center">
                                            <p className='pt-3 found'>Co Founder</p>
                                            <h4 className='fw-bolder'>Stephen Smith</h4>
                                            <p className='lorem'>eiusm dolor sit amet conse ct tur <br />ng elit.sed to Doloremque accusanti facilis</p>
                                            <div className='star'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                  <FaStar />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-4 px-3">
                                    <div className="co-founder box py-5 position-relative w-100 ">
                                        <div className="img position-absolute rounded-circle bg-white vector text-center pt-2">
                                            <img src="image/p-2.jpg" className="rounded-circle" />
                                        </div>
                                        <div className="founder-content text-center">
                                            <p className='pt-3 found'>Co Founder</p>
                                            <h4 className='fw-bolder'>Stephen Smith</h4>
                                            <p className='lorem'>eiusm dolor sit amet conse ct tur <br />ng elit.sed to Doloremque accusanti facilis</p>
                                            <div className='star'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <CiStar className='fs-5' />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-4 px-3">
                                    <div className="co-founder box py-5 position-relative w-100 ">
                                        <div className="img position-absolute rounded-circle bg-white vector text-center pt-2">
                                            <img src="image/p-3.jpg" className="rounded-circle" />
                                        </div>
                                        <div className="founder-content text-center">
                                            <p className='pt-3 found'>Co Founder</p>
                                            <h4 className='fw-bolder'>Stephen Smith</h4>
                                            <p className='lorem'>eiusm dolor sit amet conse ct tur <br />ng elit.sed to Doloremque accusanti facilis</p>
                                            <div className='star'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default People
