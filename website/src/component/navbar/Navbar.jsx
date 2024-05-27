import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      {/* Nabvar-start*/}
      <div className="container">
        <div className="row top-navbar d-flex justify-content-between align-items-center">
          <div className="col-1">
            <div className="toggle-icon">
              <a className=" border fs-5">
                <HiMenuAlt1 />
              </a>
            </div>
          </div>
          <div className="col-6  d-flex justify-content-center">
            <ul className="menu d-flex mb-0 ps-0 justify-content-end">
              <li className="">
                <a className="" href="#">Home</a>
              </li>
              <li className="">
                <a className="" href="#">Category <span><FaAngleDown /></span></a>

              </li>
              <li className="">
                <a className="" href="#">Products <span><FaAngleDown /></span></a>

              </li>
              <li className="">
                <a className=" " href="#">Pages <span><FaAngleDown /></span></a>

              </li>
              <li className="">
                <a className=" " href="#">Blog<span><FaAngleDown /></span></a>

              </li>
              <li className="">
                <a className="" href="#">Elements <span><FaAngleDown /></span></a>
              </li>

            </ul></div>
          <div className="col-2 d-flex justify-content-end">
            <div className="calling d-flex align-items-center">
              <span><IoIosCall /></span><a href="#">+123 ( 456 ) ( 7890 )</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar