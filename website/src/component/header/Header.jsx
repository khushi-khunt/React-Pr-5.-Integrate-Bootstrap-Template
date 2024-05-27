import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="top-header d-flex align-items-center justify-content-between">
          <a href="#" className="cr-logo m-2">
            <img src="image/logo.png" alt="logo" />
          </a>
          <form className="cr-search d-flex align-items-center">
            <input
              className="search-input"
              type="text"
              placeholder="Search For items..."
            />
            <select className="form-select">
              <option selected="">All categories</option>
              <option >Men</option>
              <option >Women</option>
              <option >Electronics</option>
            </select>
            <button className="search-btn text-white fs-6"><CiSearch /></button>
          </form>
          <div className="cr-right-bar d-flex">
            <div className="nav-item ">
              <a
                className="nav-link cr-right-bar-item"
                href="#"
              >
                <span className="fs-6"><span className="px-2 fs-5"><FaRegUser /></span>Account</span>
              </a>
            </div>
            <a href="#" className="cr-right-bar-item">
              <span className="fs-6"><span className="px-2 fs-5"><FaRegHeart /></span>Wishlist</span>
            </a>
            <a href="#" className="cr-right-bar-item Shopping-toggle">
              <span className="fs-6"><span className="px-2 fs-5"><BsCart /></span>Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Header };

