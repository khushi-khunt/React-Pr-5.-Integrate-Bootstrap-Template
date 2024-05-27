import {Header} from '../component/header/Header'
import Slider from '../component/slider/Slider'
import Category from '../component/category/category'
import Offer from '../component/offer/Offer'
import Delivery from '../component/delivery/Delivery'
import People from '../component/people/People'
import Navbar from '../component/navbar/Navbar'
import Popular from '../component/popular/Popular'
import News from '../component/News/News'
import Product from '../component/product/Product'
import Snacks from '../component/snacks/Snacks'
import Footer from '../component/Footer/Footer'




const Home = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <Slider />
      <Category/>
      <Popular/>
      <Delivery/>
      <Offer/>
      <Product/>
      <Snacks/>
      <People/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
