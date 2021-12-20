import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home' >
           <div className="home_container" >
              <img 
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
              />
              <div className="home_row" >
                <Product
                 id="1312312"
                 title="The lean startup"
                 price={29.99} 
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                 rating={3} />

                <Product
                id="65765656"
                 title="pTron Bassbuds in-Ear True Wireless Bluetooth - (Blue)"
                 price={239.99}
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/51gxmUtKl1L._SL1100_.jpg" />

              </div>
              <div className="home_row" >

              <Product 
              id="45432534"
              title="GNC AMP Pure Isolate - 4.4 lbs, 2 kg (Chocolate Frosting)"
              price={99.99}
              rating={3}
              image= "https://images-na.ssl-images-amazon.com/images/I/71VhfzJbOqL._SL1500_.jpg" />

              <Product
              id="573289745"
              title="pTron Bassbuds in-Ear True Wireless Bluetooth - (Black)"
              price={399.99}
              rating={1}
              image= "https://images-na.ssl-images-amazon.com/images/I/61HSxuSHiKL._SL1100_.jpg" />
             
              <Product
              id="84923443"
              title="Apple iPad Pro(12.9-inch, Wi-Fi, 128GB)-Silver(4th Gen)"
              price={599.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
              
              </div>
              {/*   image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  */}

              <div className="home_row" >
              <Product 
              id="67878945" 
              title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
              price={589.99}
              rating={5}
              image= "https://images-na.ssl-images-amazon.com/images/I/81tEJ0HH%2BxL._SL1500_.jpg" />
              <Product 
              id="67878945" 
              title="Xbox One X 1TB Console - Star Wars Jedi: Fallen Order™ Bundle"
              price={789.99}
              rating={5}
              image= "https://images-na.ssl-images-amazon.com/images/I/61bK6T3obAL._SL1200_.jpg" />
              </div>
           </div>
        </div>
    )
}

export default Home
