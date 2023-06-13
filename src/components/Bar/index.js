import React, {useState} from 'react'
import "./index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel' 
import CarousealCards from '../CarousealCards';
import SliderCards from '../SliderCards';
import SimpleCards from '../SimpleCards';
import MultipleCards from './MultipleCards';

const Bar = () => { 
    const [show, setShow] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const clickHandle = (e) => {
    setShow(!show);
  };
  return (
    <div> 
        <div>
        <Box>
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ cursor: "pointer" }}>
            <div className="logo-container">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "row",
                  boxSizing: "border-box",
                  backgroundColor: "blue", 
                  width:"100px", 
                  height:"44px",
                  marginTop:"12px",
                  marginLeft:"-11px"
                }}
              >
                <img
                  src="https://www.gangasupermarket.in/resources/image/18/b0/8.png"
                  alt="gsmimage"
                />
                <div className="icon-address" style={{ color: "#58b9ed", display:"flex", alignItems:"center"  }}>
                  <LocationOnIcon />
                  <p> Address</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <header className="header" style={{ backgroundColor: "red" }}>
              <div className="container container-header">
                <div className="search-container">
                  <select className="search-select">
                    <option id="">All</option>
                    <option> Fruits</option>
                    <option> Grocery</option>
                    <option>Milk products and Eggs</option>
                  </select>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="search Items"
                  />
                  <div className="search-icon">
                    <SearchIcon />
                  </div>
                </div>

                <div className="language-container border-white">
                  <p>English</p>
                  <div className="lauguge-image"></div>
                </div>

                <div className="login-container border-white">
                  <div className="account">
                    {" "}
                    Hello, <span> Sign in </span>
                  </div>
                </div>

                <div className="return-order-container">
                  <div className="order"> Orders </div>
                </div>

                <div className="cart-container border-white">
                  <ShoppingCartIcon />
                  Cart
                </div>
              </div>
            </header>
          </Grid>
        </Grid>
      </Box>

      <nav className="nav">
        <div className="container container-nav"> 
      
          <ul> 
          <li className="border-white" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}>   
          <MenuIcon  style={{height:"30px", width:"30px", padding:"5px"}} />
              <span>All</span>
            </li>
           
            
            <li className="border-white"  style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}> 
            <img src="https://www.gangasupermarket.in/image/thumbnails/18/83/Bevearage_Mix__amp__Snacks_jpg-100405-120x120.jpg" alt="" style={{height:"30px", width:"30px", padding:"5px"}}/>
              <a href="#"> Beverges & Snacks</a>
            </li>
            <li className="border-white" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}> 
            <img src="https://www.gangasupermarket.in/image/thumbnails/18/83/Personel_care_jpg-100406-120x120.jpg" style={{height:"30px", width:"30px", padding:"5px"}} />

              <a href="#">Personal Care</a>
            </li>
            <li className="border-white"  style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}>  
            <img src="https://www.gangasupermarket.in/image/thumbnails/18/83/Personel_care_jpg-100406-120x120.jpg" alt=""  style={{height:"30px", width:"30px", padding:"5px"}}/>
              <a href="#">Household & Cleaning</a>
            </li>
          </ul>
        </div>
      </nav> 

      <div> 
      <SliderCards/>
      </div>
      

      {/* <!--sidebar navigation--> */}
      {/* side navigation */}
      <div
        className="sidebar-container-navigation"
        id="sidebar-container-navigation-id"
        onClick={clickHandle}
      >
        {show && (
          <div className="sidebar-left-part">
            <div className="sidebar-top">
              <i className="fa-solid fa-circle-user"></i>
              <h2>
                Hello, <span>sign in</span>
              </h2>
            </div>
            <div className="sidebar-wrap">
              <div className="sidebar-item">
                <h2>Trending</h2>
                <p>Best Sellers</p>
                <p>New Releases</p>
                <p>Movers and Shakers</p>
              </div>
              <div className="sidebar-item">
                <h2>Digital Content And Devices</h2>
                <p>Echo & Alexa</p>
                <p>Fire TV</p>
                <p>Kindle E-Readers & eBooks</p>
                <p>Audible Audiobooks</p>
                <p>Amazon Prime Video</p>
                <p>Amazon Prime Music</p>
              </div>
              <div className="sidebar-item">
                <h2>Shop By Category</h2>
                <p>Mobiles, Computes</p>
                <p>TV, Appliances, Electronic</p>
                <p>Men's Fashion</p>
                <p>Women's Fashion</p>
                <p>See All</p>
              </div>
              <div className="sidebar-item">
                <h2>Programs & Features</h2>
                <p>Gift Cards & Mobile Recharges</p>
                <p>Flight Tickets</p>
                <p>#Foundlt-OnAmazon</p>
                <p>Clearance store</p>
              </div>
              <div className="sidebar-item">
                <h2>Help & Settings</h2>
                <p>Your Account</p>
                <p>Customer Service</p>
                <p>Sign in</p>
              </div>
            </div>
          </div>
        )}
        <button id="sidebar-navigation-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>


   
    
      {/* <!--image slider --> */}

      <MultipleCards/>
      
       
       
       

      {/* // <!--product container card--> */}
      {/* product container */}
      <main className="main" style={{ cursor: "pointer" }}>
        <div className="card-product-container container"></div>

        <div className="card-product-container container productBackgraound">
          <div className="card-product">
            <h2>Buy All types of Groceries Available</h2>
            <div className="card-product-nested-card">
              <div className="card-nested">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                <p>Home Products</p>
              </div>
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/d1/kattu_yanam_rice_500x500_webp-101660-250x250.webp" />
                <p>Rice</p>
              </div>
              <div className="card-nested">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                <p>Daily essentials</p>
              </div>
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/e9/kodo_millet_jpg-102034-250x250.jpg" />
                <p>Millets</p>
              </div>
            </div>
            <button className="card-product-btn">see more</button>
          </div> 
          <div className="card-product">
            <h2>Buy All types of Groceries Available</h2>
            <div className="card-product-nested-card">
              <div className="card-nested">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                <p>Home Products</p>
              </div>
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/d1/kattu_yanam_rice_500x500_webp-101660-250x250.webp" />
                <p>Rice</p>
              </div>
              <div className="card-nested">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                <p>Daily essentials</p>
              </div>
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/e9/kodo_millet_jpg-102034-250x250.jpg" />
                <p>Millets</p>
              </div>
            </div>
            <button className="card-product-btn">see more</button>
          </div>
          <div className="card-product">
            <h2>All Type of household Available</h2>
            <div className="card-product-nested-card">
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/d8/Harpic_Disinfectant_Toilet_Cleaner-101774-250x250.jpg" />
                <p>Bathroom cleaning</p>
              </div>
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/d9/Good_home_room_freshener_Lemony_zest__lemon__jpg-101787-250x250.jpg" />
                <p>Room Freshers</p>
              </div>
              <div className="card-nested">
                <img src="data:image/jpeg;base64,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" />
                <p>Fruits</p>
              </div>
              <div className="card-nested">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                <p>Fashion</p>
              </div>
            </div>
            <button className="card-product-btn">see more</button>
          </div>
          <div className="card-product">
            <h2>All type of vegebles and fruits Available</h2>
            <div className="card-product-nested-card">
              <div className="card-nested">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/b9/61CRxSlO5WL__SL1400__jpg-101271-250x250.jpg" />
                <p>Oils</p>
              </div>
              <div className="card-nested">
                <img src="data:image/jpeg;base64,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" />
                <p>Vegetables</p>
              </div>
              <div className="card-nested">
                <img src="data:image/jpeg;base64,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" />
                <p>Fruits</p>
              </div>
              <div className="card-nested">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                <p>Fashion</p>
              </div>
            </div>
            <button className="card-product-btn">see more</button>
          </div>
        </div> 
        <div style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%'
    }}> 
            <SimpleCards/>
        </div>
        {/* <div style={{ height: 'auto', width: '100%', padding: '10px',  }}>
  <img
    src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
    alt=""
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%'
    }}
  />
  <style>
    {`
      @media (max-width: 768px) {
        div {
          margin-left: 0;
        }
      }
    `}
  </style>
        </div> */}

        {/* <!--today's deals --> */} 
        
        <section className="today_deals_container">
          <div className="today_deals_heading">
            <h1>Today's Deals</h1>
            <p>
              <a href="#">See all deals</a>
            </p>
          </div>
          <Carousel> 
          <div className="today_deals_product_container">
            

            <div className="today_deals_product_list">
              <div className="today_deals_product_item">
                <img src="https://www.gangasupermarket.in/image/thumbnails/18/e9/kodo_millet_jpg-102034-250x250.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 25% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p> All Rice Brands</p>
              </div>

              <div className="today_deals_product_item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 52% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Home products</p>
              </div>

              <div className="today_deals_product_item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 15% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Daily Essentails</p>
              </div>

              <div className="today_deals_product_item">
                <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 5% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Footwear</p>
              </div>

              <div className="today_deals_product_item">
                <img src="data:image/jpeg;base64,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" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 10% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Fruits and milk </p>
              </div> 

              <div className="today_deals_product_item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 52% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Home products</p>
              </div>

              <div className="today_deals_product_item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 15% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Daily Essentails</p>
              </div>

              <div className="today_deals_product_item">
                <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg" />
                <div className="discount_Contaienr">
                  <a href="#">Up to 5% off</a>
                  <a href="#">Deal of the day</a>
                </div>
                <p>Footwear</p>
              </div>

            </div>
          </div> 
          </Carousel>
        </section>
       
      </main>
    </div>
    </div>
  )
}

export default Bar